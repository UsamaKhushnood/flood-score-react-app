import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import RCompareBussiness from './Compare/RCompareBussiness'
import RCompareHomeowner from './Compare/RCompareHomeowner'

import RCompareHomeownerPlus from './Compare/RCompareHomeownerplus'

import RDiscoverBusiness from './Discover/RDiscoverBusiness'
import RDiscoverHomeowner from './Discover/RDiscoverHomeowner'
import RDiscoverHomeownerPlus from './Discover/RDiscoverHomeownerPlus'
import RReduceHomeowner from './Reduce/RReduceHomeowner'
import RExamineBusiness from './Examine/RExamineBusiness'
import RExamineHomeowner from './Examine/RExamineHomeowner'
import RCertifyBusiness from './Certify/RCertifyBusiness'
import RCertifyHomeowner from './Certify/RCertifyHomeowner'


const Shop = () => {

return (
    <Container>
    <h1 className="product-title" id="productTitle">Shop</h1>
    <p id="showing">Showing all 11 results</p>
    <Row>
        <Col>
            <RCompareBussiness />
        </Col>
        <Col>
            <RCompareHomeowner />
        </Col>
        <Col>
            <RCompareHomeownerPlus />
        </Col>
    </Row>
    <Row>
        <Col>
            <RDiscoverBusiness />
        </Col>
        <Col>
            <RDiscoverHomeowner />
        </Col>
        <Col>
            <RDiscoverHomeownerPlus />
        </Col>
    </Row>
    <Row>
        <Col>
            <RReduceHomeowner />
        </Col>
        <Col>
            <RExamineBusiness />
        </Col>
        <Col>
            <RExamineHomeowner />
        </Col>
    </Row>
    <Row>
        <Col>
            <RCertifyBusiness />
        </Col>
        <Col>
            <RCertifyHomeowner />
        </Col>
        <Col>
            
        </Col>
    </Row>
</Container>
)


}

export default Shop