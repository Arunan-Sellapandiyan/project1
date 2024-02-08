function Pizza({pizzaobj}) {
    // if (pizzaobj.soldOut) return null;
    console.log(pizzaobj);
    return (
      <div className={`pizza ${pizzaobj.soldOut? "sold-out":""}`}>
        <img src={pizzaobj.photoName} alt={pizzaobj.name} />
        <h3>{pizzaobj.name}</h3>
        <p>{pizzaobj.ingredients}</p>
        {/* {pizzaobj.soldOut? ("SOLD OUT"):(pizzaobj.price) } */}
        <span>{pizzaobj.soldOut? "SOLD OUT":(pizzaobj.price)}</span>
      </div>
    );
  }
  export default Pizza