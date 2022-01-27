import React from "react";

function Sushi({ sushi, handleClick }) {
  const { img_url, name, price } = sushi;
  return (
    <div className="sushi">
      <div className="plate" onClick={() => handleClick(sushi)}>
        {/* Tell me if this sushi has been eaten! */}
        {sushi.eaten ? null : <img src={img_url} alt={name} width="100%" />}
      </div>
      <h4 className="details">
        {name} - ${price}
      </h4>
    </div>
  );
}

export default Sushi;
