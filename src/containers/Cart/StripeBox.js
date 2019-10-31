import React, { Component } from 'react';
import { CardElement, injectStripe } from 'react-stripe-elements';

class StripeBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      emptyCardField : '',
      submited: false
    }
    this.submit = this.submit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.billing && this.state.submited === true) {
      this.setState({ submited: false });
    }
  }
  componentDidMount() {
      console.log("propsdiddd", this.props)
  }

  async submit(ev) {
    ev.preventDefault();
    this.setState({ submited: true });
    let { token } = await this.props.stripe.createToken({ name: "Ys" });
    console.log('token',token)
    if (token && token.id) {
        console.log('tokenId',token.id)
      this.setState({ error_message: '' })
    //   this.props.saveBilling({ token: token && token.id, invoice_credit_card: 'credit_card' });


    var charge = this.props.firebase.doCharge();
    let request =  {  body: {   
        token: token,
        charge: { amount: 23, currency: 'usd'},
      }}
    charge(request, {hardresponse: "hargksjdkdjfjkdf"}).then(function(result) {
      // Read result of the Cloud Function.
      const res = result
      console.log('do charge result:', res)
    }).catch(function(error) {
      // Getting the Error details.
      console.log('do charge error:', error)
    })

document.getElementById("plsceOrderbtn").click();

      this._element.clear();
    } else {
      this.setState({ error_message: 'Invalid information' })
    }
  }

  handleChange = e => {
    if(e){
      this.setState({ emptyCardField : e.empty})
    }
  }

  render() {
    return (
      <div className="checkout mt-3">
        <CardElement onChange={this.handleChange} onReady={(c) => this._element = c} />
        {this.state.error_message ? <span className="invalid-strip-message"> {this.state.error_message}</span> : ''}
        <span className="col-12 ml-auto">
          <br />
          {/* <button id="submit-button" className="mt-6 btn  btn-danger btn-block col-12" onClick={this.submit} disabled={this.props.type === 'invoice' }>Save</button> */}
          <label  onClick={this.submit} htmlFor="submit-form" tabIndex="0" className={"place-order-button add-to-cart-button btn btn-primary btn-primary"} >
          { 'PLACE ORDER'}
        </label>
        </span>
      </div>
    );
  }
}

export default (injectStripe(StripeBox));
