const initialState = {
  image: ""
};
export default function(state = initialState, action) {
  console.log(action.type);
  switch (action.type) {
    case "IMAGE_LOADED":
      return {
        ...state,
        image: action.payload
      };
    default:
      return state;
  }
}
