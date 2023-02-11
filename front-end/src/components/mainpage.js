

import React from 'react';
import {
  Outlet
} from 'react-router-dom';
import { Flex } from '@mantine/core';
import NavbarApp from './appnavbar';


const Main = (props) => {
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
        <NavbarApp></NavbarApp>
        <Outlet/>
    </Flex>
  );
    
}

export default Main;