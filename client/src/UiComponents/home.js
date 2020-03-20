import React from "react";
import "./home.css";
import Axios from "axios";
import { useState } from "react";
import { withRouter } from "react-router";

import { ImageData } from "../action/loadImage";
import { connect } from "react-redux";

function Home(props) {
  const [list, setlist] = useState([]);
  const [dog, setdog] = useState("");
  function dataList() {
    Axios.get("https://dog.ceo/api/breeds/list/all").then(res => {
      setlist(res.data.message);
      document.querySelector(".lists").style.overflowY = "scroll";
      console.log(list);
    });
  }
  function Item(element) {
    setdog(element);
    document.querySelector(".inputbox").textContent = element;
    console.log(document.querySelector(".inputbox").value);
    console.log(props);
  }
  const Search = () => {
    // props.match.params({ dog });
    console.log(dog);
    props.ImageData(dog);
    localStorage.setItem("breed", dog);
    props.history.push("/details");
  };

  return (
    <div>
      <div class="container">
        <h5>Search your favourite dog</h5>
        <div class="row">
          <div class="col-12">
            <div class="d-flex">
              <div
                className="container inputbox "
                style={{
                  border: "1px solid gray ",
                  borderRadius: "3px",
                  padding: "5px"
                }}
                onClick={dataList}
              >
                click for dogs
              </div>
              <div class="d-flex">
                <button
                  class="btn btn-outline-secondary"
                  type="button"
                  onClick={Search}
                >
                  Search
                  <i class="fa fa-search"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <ul class="list-group lists" style={{ height: "393px" }}>
          {Object.keys(list).map(el => (
            <li
              class="list-group-item"
              style={{ cursor: "pointer" }}
              onClick={() => Item(el)}
            >
              {el}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default connect(null, { ImageData })(withRouter(Home));
