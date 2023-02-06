import axios from "axios";
import React from 'react';
import { useState, useEffect } from "react";

const API = process.env.REACT_APP_API_URL;



console.log(API);
function MainCombined() {
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
    <React.Fragment>
        <h2>Combined</h2>
          <ul>
            {days.map((day) => (
              <li key={day.name}>{day.name}</li>
            ))}
          </ul>
    </React.Fragment>
  );
}

export default MainCombined;
