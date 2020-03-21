import React from "react";
import DetailModal from "../UiComponents/Detail";
import { useState, useEffect } from "react";
import axios from "axios";
import { withRouter } from "react-router";
import { connect } from "react-redux";
import { ImageData } from "../action/loadImage";

function Details(props) {
  useEffect(() => {
    const dog = localStorage.getItem("breed");
    console.log(dog);
    props.ImageData(dog);
  }, []);

  return (
    <div>
      <DetailModal images={props.image} />
    </div>
  );
}

export default connect(null, { ImageData })(withRouter(Details));
