import React from 'react'
import styled from 'styled-components'

import '../Products.css'
import Compare from '../../../assets/images/Compare.svg'

import SimpleProduct from '../../../components/Product/SimpleProduct' 
import * as ROUTES from '../../../constants/routes'


  const RCompareBussiness = () => {

    const data = {
      title: "Compare – Business", 
      price: {
        type: 'Month',
        amount: 60.00,
      },
      category: {
        name: "Business",
        link: ROUTES.COMPARE_BUSINESS,
      },
      breadcrumb: [
        {
          name: "Home",
          link: ROUTES.HOME
        },
        {
          name: "Compare – Business",
          link: ROUTES.COMPARE_BUSINESS
        },
      ],
    } // end Product Box Data
    return (
    <div style={{ 'marginTop': '64px' }}>
            <SimpleProduct 
              pdetail = "compare-business"
              title={data.title}
              category={data.category}
              breadcrumb={data.breadcrumb}
              price={data.price}
              img={Compare}
            />

    </div>
    )
  }
  
  const LI = styled.li`
    color: #666666;
    font-family: "Montserrat", sans-serif;
    font-weight: 400;
    font-size: 16px;
    line-height: 35px;
    margin-left: 16px;
  `;


export default RCompareBussiness
