import React, { Fragment } from 'react'
import Products from './Products'

const MainBody = () => {
  return (
    <Fragment>
        <div style={{alignItems:'centre', justifyContent:'center', textAlign:'center',color:'slategray',fontFamily:'fantasy',padding:'20px',fontSize:'30px'}}>Music Albums...</div>
        <Products></Products>
    </Fragment>
  )
      
}

export default MainBody