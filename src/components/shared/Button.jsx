import React from "react";

function Button({ text, onClick }) {
  return (
    <button
      onClick={onClick}
      className="rounded-pill p-2"
      style={{ border: "5px solid ", backgroundColor: "#414a55", color:"white" }}
    >
      {text}
    </button>
  );
}

export default Button;
