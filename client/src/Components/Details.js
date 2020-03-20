import React from "react";
import DetailModal from "../UiComponents/Detail";
import { useState, useEffect } from "react";
import axios from "axios";
import { withRouter } from "react-router";
import { connect } from "react-redux";
import { ImageData } from "../action/loadImage";

function Details(props) {
  const [image, setimage] = useState("");

  useEffect(() => {
    const dog = localStorage.getItem("breed");
    console.log(dog);
    props.ImageData(dog);
    console.log("useEffect");
  }, [1]);

  return (
    <div>
      <DetailModal images={props.image} />
    </div>
  );
}

const mapStateToProps = state => {
  return {
    image: state.image.image
  };
};

export default connect(mapStateToProps, { ImageData })(withRouter(Details));
