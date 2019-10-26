import React from 'react'
import useReactRouter from 'use-react-router'
import styled from 'styled-components'


import '../Products.css'
import Compare from '../../../assets/images/Compare.svg'

import SimpleProduct from '../../../components/Product/SimpleProduct' 
import * as ROUTES from '../../../constants/routes'

const RCompareHomeowner = () => {
  const data = {
    title: "Compare – Homeowner",
    price: {  
      type: 'once',
      amount: 5.00,
    },
    category: {
      name: "Homeowner",
      link: ROUTES.COMPARE_HOMEOWNER,
    },
    breadcrumb: [
      {
        name: "Home",
        link: ROUTES.HOME
      },
      {
        name: "Compare – Homeowner",
        link: ROUTES.COMPARE_HOMEOWNER
      },
    ],
  } // end Product Box Data

  return (
    <div style={{ 'marginTop': '64px' }}>
            <SimpleProduct 
              pdetail = "compare-homeowner"
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

export default RCompareHomeowner

