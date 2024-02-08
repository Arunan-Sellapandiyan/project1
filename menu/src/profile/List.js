import React from 'react';
import Skill from './Skill';
export default function List(){
   
    return(<ol>
    
        <Skill  skills='react' color='green'/>
        <Skill skills='sqls'/>
        <Skill skills='Html'/>
   
        </ol>
    )
}
 