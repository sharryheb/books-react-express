import React from "react";
import "./style.css";

// This file exports both the List and ListItem components

export function List({ children }) {
  return (
    <div>
      <div>{children}</div>
    </div>
  );
}

export function ListItem({ children }) {
  return <div>{children}</div>;
}
