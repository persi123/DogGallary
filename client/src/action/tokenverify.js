// export const tokenConfig = getState => {
//   //Get token from local storage
//   const token = getState().auth.token;

//   //Header
//   const config = {
//     headers: {
//       "Content-type": "application/json"
//     }
//   };

//   if (token) {
//     config.headers["x-auth-token"] = token;
//   }

//   console.log("Identify");

//   return config;
// };

// const config = require("config");
// const jwt = require("jsonwebtoken");

// function auth(token) {
//   // const token = req.header("x-auth-token");

//   //check for token
//   if (!token) {
//     console.log("no token , authorizationdenied");
//   }

//   try {
//     //verify token
//     const decoded = jwt.verify(token, config.get("jwtSecret"));

//     //add use from payload
//     // req.user = decoded;
//     if (decoded) {
//       console.log("authorised");
//     }
//   } catch (e) {
//     console.log("unauthorised");
//   }
// }
// export default auth;
