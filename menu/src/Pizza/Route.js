import React from 'react';
import Menu from './Menu';
import Footer from './Footer';
import Header from './Header';
import "./index.css";

export default function Route() {
  return (
    <div className="container">
      <Header  />
      <Menu />
      <Footer />
    </div>
  )
}
