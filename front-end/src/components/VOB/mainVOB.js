import axios from "axios";
import React from 'react';
import { useState, useEffect } from "react";
import { Flex } from '@mantine/core';
import NavbarVob from "./navbarVob";

const API = process.env.REACT_APP_API_URL;

console.log(API);
function MainVob() {
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
    <Flex
      mih={50}
      bg="rgba(0, 0, 0, .1)"
      gap="xs"
      justify="flex-start"
      align="flex-start"
      direction="row"
      wrap="wrap"
    >
        <NavbarVob></NavbarVob>
        <h2>VOB</h2>
          <ul>
            {days.map((day) => (
              <li key={day.name}>{day.name}</li>
            ))}
          </ul>
          </Flex>
  );
}

export default MainVob;
