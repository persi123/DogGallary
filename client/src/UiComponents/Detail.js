import React from "react";
import "./Detail.css";
import { useState, useEffect } from "react";

export default function Detail(props) {
  //   const [Dog, setDog] = useState("");
  //   useEffect(() => setDog(props.images));
  //   // setDog(props.images);
  console.log(props);
  return (
    <div className="container mt-4">
      <img src={props.images} />
    </div>
  );
}
