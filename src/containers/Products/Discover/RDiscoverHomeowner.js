import React from 'react'


import '../Products.css'
import Compare from '../../../assets/images/Compare.svg'

import SimpleProduct from '../../../components/Product/SimpleProduct' 
import * as ROUTES from '../../../constants/routes'


  const RDiscoverHomeowner = () => {
    const data = {
      title: "Discover – Homeowner",
      price: {
        type: 'once',
        amount: 0.00,
      },
      category: {
        name: "Homeowner",
        link: ROUTES.DISCOVER_HOMEOWNER,
      },
      breadcrumb: [
        {
          name: "Home",
          link: ROUTES.HOME
        },
        {
          name: "Discover – Homeowner",
          link: ROUTES.DISCOVER_HOMEOWNER
        },
      ],
    } // end Product Box Data
    return (
    <div style={{ 'marginTop': '64px' }}>
            <SimpleProduct 
              pdetail = "discover-homeowner"
              title={data.title}
              category={data.category}
              breadcrumb={data.breadcrumb}
              price={data.price}
              img={Compare}
            />

    </div>
    )
  }
  


export default RDiscoverHomeowner
