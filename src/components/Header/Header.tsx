import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

export const Header: React.FC = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link className="quicksort" to="/quicksort">
            Quick Sort
          </Link>
        </li>
        <li>
          <Link className="mergesort" to="/mergesort">
            Merge Sort
          </Link>
        </li>
        <li>
          <Link className="merge" to="/merge">
            Merge Two Sorted Arrays
          </Link>
        </li>
      </ul>
    </nav>
  );
};
