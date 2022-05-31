import React from "react";

function FavoriteButton({ clickHandle, value, title, price, children }) {
  return (
    <button
      value={value}
      onClick={clickHandle}
      data-title={title}
      data-price={price}
      className="w-50 mb-5 bg-primary text-white border border-none"
    >
      {children}
    </button>
  );
}

export default FavoriteButton;
