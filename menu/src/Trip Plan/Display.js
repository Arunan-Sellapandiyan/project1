import React, { useState } from 'react'
import List from './List';

// const initialItems = [
//     { id: 1, description: "Passports", quantity: 2, packed: false },
//     { id: 2, description: "Socks", quantity: 12, packed: false },
//     { id: 3, description: "buds", quantity: 12, packed:true }
//   ];


export default function Display({items,onDelete,onCheckbox,Reset}) {
  const [sort,setSort]=useState('input');
  
let sortItem=items;
 
  if(sort === 'input') sortItem=items;
  if(sort==='description') sortItem=items.slice().sort((a,b)=>a.description.localeCompare(b.description));
  if(sort==='packed') sortItem=items.slice().sort((a,b)=>Number(b.packed)-Number(a.packed));


    
  
  return (
    <div className='list'>
      <ul> {sortItem.map((item)=> (<List item={item}  onCheckbox={onCheckbox} onDelete={onDelete} key={item.id}/>))
        }
      </ul>
      <div className='actions'>
        <select value={sort} onChange={(e)=>setSort(e.target.value)}>
          <option className='input' >sort by input</option>
          <option className='description'>sort by Description</option>
          <option className='packed'>sort by packed</option>
        </select>
        <button onClick={Reset}>Reset </button>
      </div>
    </div>
  )
}
