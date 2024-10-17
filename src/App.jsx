import "./App.css";
import logo from "./Image/Logo.svg";
import search from "./Image/Search.svg";
import cart from "./Image/Cart.svg";
import fon from "./Image/fon.svg";
import aro from "./Image/aro.svg"

function App() {
  return (
    <>
      <div className="backround-1">
        <div className="header">
          <img src={logo} alt="logo"></img>
          <p>Organik</p>
          <ul className="tab">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Pages</a>
            </li>
            <li>
              <a href="#">Shop</a>
            </li>
            <li>
              <a href="#">Projects</a>
            </li>
            <li>
              <a href="#">News</a>
            </li>
          </ul>
          <div className="block_input">
            <input type="text" />
            <img src={search} alt="" />
          </div>
          <div className="cart">
            <img src={cart} alt="" />
            <p>cart(0)</p>
          </div>
        </div>
        <div className="header1">
          
          <p className="a"> 100% Natural Food </p>
          <p className="b">
            Choose the best <nav></nav> healthier way<nav></nav> of life{" "}
          </p>
          <button className="knopka">
            <p className="text1">Explore Now</p>
            <img className="strela" src={aro} alt="" />
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
