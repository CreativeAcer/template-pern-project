import React from 'react';
import { useMantineColorScheme, ActionIcon, Group } from '@mantine/core';
import { IconSun, IconMoonStars } from '@tabler/icons-react';


const AppSettings = (props) => {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();

  return (
    <React.Fragment>
        <h1>App Settings</h1>
        <Group position="center" my="xl">
      <ActionIcon
        onClick={() => toggleColorScheme()}
        size="lg"
        sx={(theme) => ({
          backgroundColor:
            theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
          color: theme.colorScheme === 'dark' ? theme.colors.yellow[4] : theme.colors.blue[6],
        })}
      >
        {colorScheme === 'dark' ? <IconSun size={18} /> : <IconMoonStars size={18} />}
      </ActionIcon>
    </Group>
    </React.Fragment>
  );
}

export default AppSettings;

