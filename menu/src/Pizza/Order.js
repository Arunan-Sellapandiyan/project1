function Order(props) {
    return (
      <div className="order">
        <p>
          open time is {props.openTime} and closed time is {props.closedTime}
        </p>
        <button className="btn">Order now</button>
      </div>
    );
  }
export default Order  