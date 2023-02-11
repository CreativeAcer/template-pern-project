import React from 'react';
import { Outlet } from 'react-router-dom';
import NavbarAll from './navbar';

import { createStyles, Flex } from '@mantine/core';



function MainCombined() {
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
        <NavbarAll></NavbarAll>
        <Outlet/>
    </Flex>
  );
}

export default MainCombined;
