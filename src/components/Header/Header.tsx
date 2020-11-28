import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

export const Header: React.FC = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link className="home" to="/">
            Merge Two Sorted Arrays
          </Link>
        </li>
        <li>
          <Link className="sort" to="/sort">
            Quick Sort
          </Link>
        </li>
      </ul>
    </nav>
  );
};
