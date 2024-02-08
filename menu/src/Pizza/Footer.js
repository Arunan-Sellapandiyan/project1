import Order from "./Order";

function Footer() {
    const hour = new Date().getHours();
    const openTime = 10;
    const closedTime = 22;
    const isOpen = hour >= openTime && hour <= closedTime;
    console.log(isOpen);
    return (
      <footer className="footer">
        {/* Rendering using Ternary operator */}
        {isOpen ? (
          <Order openTime={openTime} closedTime={closedTime} />
        ) : (
          <p> shop is closed because time is Greaterthan {closedTime}</p>
        )}
      </footer>
    );
  }
  export default Footer