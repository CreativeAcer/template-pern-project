import axios from "axios";
import { useState, useEffect } from "react";

// Styled components import
import CustomizedSlider from "./styled_components/slider";

// app componenst
import TopAppBar from "./topappbar/topappbar";

const API = process.env.REACT_APP_API_URL;



console.log(API);
function App() {
  const [days, setDays] = useState([]);
  useEffect(() => {
    axios
      .get(`${API}/test`)
      .then(
        (response) => {
          setDays(response.data);
        },
        (error) => console.log("get", error)
      )
      .catch((c) => console.warn("catch", c));
  }, []);
  return (
    <div>
      <TopAppBar></TopAppBar>
      <ul>
        {days.map((day) => (
          <li key={day.name}>{day.name}</li>
        ))}
      </ul>
      <CustomizedSlider defaultValue={30} />
    </div>
  );
}

export default App;
