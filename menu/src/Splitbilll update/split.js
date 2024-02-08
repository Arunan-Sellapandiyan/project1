import { useState } from "react";

import "./index.css";
const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];
function Button({ children, onClick }) {
  return (
    <button className="button" onClick={onClick}>
      {children}
    </button>
  );
}

export default function SplitUpdate() {
  const [friends, setFriends] = useState(initialFriends);
  const [addfrnd, setAddFrnd] = useState(false);
  const [frndbill, setFrndBill] = useState(null);
  function Addfrndfun() {
    setAddFrnd(true);
  }
  function handleAddFrnd(friend) {
    setFriends((friends) => [...friends, friend]);
    setAddFrnd(false);
  }
  function handleSelection(friend) {
    // setFrndBill(friend);
    setFrndBill((cur) => (cur && cur.id === friend.id ? null : friend));
    setAddFrnd(false);
  }
  function handleSplitBill(value) {
    setFriends((friends) => friends.map((friend)=>( friend.id === frndbill.id)
    ? { ...friend, balance: friend.balance + value }
    : friend
));
console.log(value);
     
  }

  return (
    <div className="app">
      <div className="sidebar">
        <FriendsPage
          friends={friends}
          setFrndBill={frndbill}
          onSelection={handleSelection}
        />
        {addfrnd && <Form onAddFrnd={handleAddFrnd} />}
        <Button onClick={Addfrndfun}>{addfrnd ? "close" : "Add Friend"}</Button>
      </div>
      {frndbill && (
        <FormSplit setFrndBill={frndbill} handleSplitBill={handleSplitBill} />
      )}
    </div>
  );
}

function FriendsPage({ friends, onSelection, setFrndBill }) {
  return (
    <div>
      {friends.map((friend) => (
        <Friends
          friend={friend}
          key={friend.id}
          setFrndBill={setFrndBill}
          onSelection={onSelection}
        />
      ))}
    </div>
  );
}

function Friends({ friend, onSelection, setFrndBill }) {
  const isSelected = setFrndBill && setFrndBill?.id === friend.id;

  return (
    <li className={isSelected ? "select" : ""}>
      <img src={friend.image} alt={friend.name} />
      <h3>{friend.name} </h3>
      {friend.balance < 0 && (
        <p className="red">
          you owe {friend.name} {friend.balance}
        </p>
      )}
      {friend.balance === 0 && (
        <p className="blue">
          you owe {friend.name} {friend.balance}
        </p>
      )}
      {friend.balance > 0 && (
        <p className="green">
          you owe {friend.name} {friend.balance}
        </p>
      )}
      {/* <button className="select">Select</button>
       */}
      <Button onClick={() => onSelection(friend)}>
        {isSelected ? "close" : "Select"}
      </Button>
    </li>
  );
}

function Form({ onAddFrnd }) {
  const [frndName, setFrndName] = useState();
  const [image, setImage] = useState("https://i.pravatar.cc/48");
  function AddFrnd(e) {
    setFrndName(e.target.value);
  }
  function AddImg(e) {
    setImage(e.target.value);
  }
  function handlesubmit(e) {
    e.preventDefault();
    if (!frndName || !image) return;

    const id = crypto.randomUUID();
    const newFrnd = {
      id,
      frndName,
      image: `${image}?=${id}`,
      balance: 0,
    };
    onAddFrnd(newFrnd);
    setFrndName("");
    setImage("https://i.pravatar.cc/48");
  }
  return (
    <form className="form-add-friend" onSubmit={handlesubmit}>
      <label>✌️ Friendname</label>
      <input type="text" value={frndName} onChange={AddFrnd} />
      <label>📸Image </label>
      <input type="text" value={image} onChange={AddImg} />
      <Button>Add</Button>
    </form>
  );
}
function FormSplit({ setFrndBill, handleSplitBill }) {
  const [bill, setBill] = useState("");
  const [expense, setExpense] = useState("");
  const Expenses = bill - expense;
  const [payingbill, setPayingBill] = useState();
  function handlesubmit(e) {
    e.preventDefault();
    if (!bill || !expense) return;
    handleSplitBill(payingbill === "user" ? Expenses :-expense);
  }

  const { name } = setFrndBill; // Access the 'name' property within setFrndBill

  return (
    <form className="form-split-bill" onSubmit={handlesubmit}>
      <h2>Split a bill {name} </h2>
      <label>🙅‍♂️ Bill Value</label>
      <input
        type="text"
        value={bill}
        onChange={(e) => setBill(Number(e.target.value))}
      />

      <label>🙅‍♂️ your Expense </label>
      <input
        type="text"
        value={expense}
        onChange={(e) =>
          setExpense(
            Number(e.target.value) > bill ? expense : Number(e.target.value)
          )
        }
      />
      <label>2️⃣ {name}'s expense </label>
      <input type="text" disabled value={Expenses} />
      <label>💸who is paying bill?</label>
      <select
        value={payingbill}
        onChange={(e) => setPayingBill(e.target.value)}
      >
        <option value="user"> You</option>
        <option value="friend">{name}</option>
      </select>
      <Button onClick={handleSplitBill}>Split Bill</Button>
    </form>
  );
}
