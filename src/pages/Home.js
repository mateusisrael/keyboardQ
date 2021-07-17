import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {


  return (
    <>
      <h1>Home</h1>
      <ul>
        <li>
          <Link style={{color: "#fff"}} to={"/firstgame"}>FirstGame</Link>
        </li>
        <li>
          <Link style={{color: "#fff"}} to={"/secondgame"}>SecondGame</Link>
        </li>
      </ul>
    </>
  );
}