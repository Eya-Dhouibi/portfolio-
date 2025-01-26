import React from "react";
const Footer = () => {
  return (
    <footer>
       <div  className="container">
       <a href="#up">
        <button className="icon-keyboard_arrow_up scroll2Top"></button>
    </a>
      <ul className="flex">
        <li>
          <a href="">About</a>
        </li>
        <li>
          <a href="">Projects</a>
        </li>
        <li>
          <a href="">Speaking</a>
        </li>
        <li>
          <a href="">Uses</a>
        </li>
      </ul>

      <p>© 2023 Spencer Sharp. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
