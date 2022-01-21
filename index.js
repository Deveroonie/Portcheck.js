module.exports = async function check() {
  const axios = require("axios"); // Importing the Axios module to make API requests
const ip = arguments[0]
const port = arguments[1]
var open;
  await axios 
    .get(
      "https://api.openportcheck.net/check?ip" + ip + "&port=" + port
    )
    .then((response) => { // If the GET request is successful, this block is executed
     open = response.data.open;
    })
    .catch((err) => {
      console.error(err); // Error handler
    });

    return open;
};
