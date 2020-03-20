import axios from "axios";

export const ImageData = name => dispatch => {
  console.log(name);
  axios.get(`https://dog.ceo/api/breed/${name}/images/random`).then(res =>
    dispatch({
      type: "IMAGE_LOADED",
      payload: res.data.message
    })
  );
};
