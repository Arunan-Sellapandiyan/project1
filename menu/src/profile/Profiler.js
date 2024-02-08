import React from 'react'
import './style.css';
import focaccia from './focaccia.jpg'
import List from './List';



export default function Profiler() {

  return (
    <>
    <div >
   <div>
    <img className='img' src={focaccia} alt=''></img>
   </div>
   <div className='details'>HI,this is just a card page for trial.A well-crafted free trial landing page can do a lot for your return on ad spend—it can help you connect with your target audience, boost your conversion rates, and secure more sign-ups. .Creating an effective landing page, however, requires both strategy and creativity.
Whether you’re a seasoned marketer seeking fresh ideas or a business owner eager to revamp your current landing page, today’s post will feature a free-trial landing page sign-up collection designed to ignite your creativity and equip you with insights into the best practices of designing an impactful landing page. </div>
<div className='List'><List/></div>

   </div>
   </>
  )
}


