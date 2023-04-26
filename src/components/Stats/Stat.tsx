import React from "react";
import { StatProps } from "./Stat.types";

const Stat = (props: StatProps) => {
  return (
    <div className="stat">
      <h2>{props.statistics}</h2>
      <p>{props.description}</p>
    </div>
  );
};

export default Stat;
