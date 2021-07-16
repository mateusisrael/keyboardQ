import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';

export default function Home() {
  const match = useRouteMatch()

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