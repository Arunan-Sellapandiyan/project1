import React, { useState } from 'react'
import Bill from './bill'
import Service from './service'
import Friend from './friend'
import Disp from './Disp'

const Route = () => {
    const [amount,setAmount]=useState(0);
    const [service,setService]=useState(0);
    const [service1,setService1]=useState(0);

    const tip=(amount*((service+ service1)/2))/100
    function Reset(){
        setAmount(0);
        setService(0);
        setService1(0);
    }


  return (
    <div>
      <Bill amount={amount} setAmount={setAmount} />
      <Service serv={service} setserv={setService} />
      <Friend serv1={service1} setserv1={setService1}/>
      <Disp amount={amount} tip={tip} Reset={Reset}/>
    </div>
  )
}

export default Route
