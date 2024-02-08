export default function Footer({ items }) {  
  if (items.length===0)return( <p className="stats">
    <em>Add ur items</em>
  </p>);


    const numItems = items.length;
    const itemsPacked = items.filter((item) => item.packed).length;
    const percentagePacked = (itemsPacked / numItems) * 100 ; 
  
   
    return (
      <footer className="stats" >
      
        {percentagePacked ===100 ?'Ready to go':
        `You have ${numItems} items in your list, and you packed ${itemsPacked} (${percentagePacked}%)`}
  
      </footer>
    );
  }
  
 
  

  