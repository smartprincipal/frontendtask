import React from 'react'
import './Popup.css'
import Ok from '../../Asset/Ok.svg'


const Popup = () => {
  return (
   <div className='popContainer'>
   <img src={Ok} alt='okayIcon'/>
 <div className='content'>

   <h3 className='popHead'>Congratulations</h3>
   <p className='popContent'>Great move! You're one step closer to getting your hands on the product. Please check your mail for more information.</p>
 </div>


 </div>
  )
}

export default Popup