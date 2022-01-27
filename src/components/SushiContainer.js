import React from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi";

function SushiContainer({ sushi, showMore, eatSushi }) {
  return (
    <div className="belt">
      {/* Render Sushi components here! */}
      {sushi.map((s) => (
        <Sushi key={s.id} sushi={s} handleClick={eatSushi} />
      ))}

      <MoreButton handleClick={showMore} />
    </div>
  );
}

export default SushiContainer;
