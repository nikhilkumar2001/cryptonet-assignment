import axios from "axios";

const url = "https://randomuser.me/api/?page=1&results=1&seed=abc"

let data;
axios
      .get(url)
      .then((res) => {
        data(res.data.results[0]); // Update userData with the fetched user data
        console.log(res.data.results[0]); // Log the user data
      })
      .catch((err) => console.log(`Error: ${err}`));

  export default data;