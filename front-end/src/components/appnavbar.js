import { useState } from 'react';
import { useMsal } from "@azure/msal-react";
import { Navbar, Center, Tooltip, UnstyledButton, createStyles, Stack } from '@mantine/core';
import {
  IconHome2,
  IconGauge,
  IconDeviceDesktopAnalytics,
  IconFingerprint,
  IconCalendarStats,
  IconUser,
  IconSettings,
  IconLogout,
  IconSwitchHorizontal,
} from '@tabler/icons-react';

import { useNavigate } from 'react-router-dom';

const useStyles = createStyles((theme) => ({
  link: {
    width: 50,
    height: 50,
    borderRadius: theme.radius.md,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[7],

    '&:hover': {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[0],
    },
  },

  active: {
    '&, &:hover': {
      backgroundColor: theme.fn.variant({ variant: 'light', color: theme.primaryColor }).background,
      color: theme.fn.variant({ variant: 'light', color: theme.primaryColor }).color,
    },
  },
}));

function NavbarLink({ icon: Icon, label, active, onClick }) {
  const { classes, cx } = useStyles();
  return (
    <Tooltip label={label} position="right" transitionDuration={0}>
      <UnstyledButton onClick={onClick} className={cx(classes.link, { [classes.active]: active })}>
        <Icon stroke={1.5} />
      </UnstyledButton>
    </Tooltip>
  );
}


  //   <UnstyledButton onClick={onClick} className={cx(classes.link, { [classes.active]: active })}>
  //   <Icon stroke={1.5} />
  // </UnstyledButton>

const mockdata = [
  { icon: IconHome2, label: 'Home', link: '/' },
  { icon: IconGauge, label: 'Dashboard' , link: '/dashboard'},
  { icon: IconDeviceDesktopAnalytics, label: 'Analytics' , link: '/analytics'},
  { icon: IconCalendarStats, label: 'Releases' , link: '/releases'},
  { icon: IconUser, label: 'Account' , link: '/account'},
  { icon: IconFingerprint, label: 'Security' , link: '/security'},
  { icon: IconSettings, label: 'Settings' , link: '/settings'},
];

const NavbarApp = (props) => {
  const { instance, inProgress } = useMsal();
  const [active, setActive] = useState(2);
  const navigate = useNavigate();

  const links = mockdata.map((link, index) => (
    <NavbarLink
      {...link}
      key={link.label}
      active={index === active}
      onClick={() => {setActive(index); navigate(link.link)}}
    />
  ));

  return (
    <Navbar height={750} width={{ base: 80 }} p="md">
      <Navbar.Section grow mt={50}>
        <Stack justify="center" spacing={0}>
          {links}
        </Stack>
      </Navbar.Section>
      <Navbar.Section>
        <Stack justify="center" spacing={0}>
          <NavbarLink icon={IconSwitchHorizontal} label="Change account" />
          <NavbarLink icon={IconLogout} onClick={() => instance.logoutPopup({})} label="Logout" />
        </Stack>
      </Navbar.Section>
    </Navbar>
  );
}

export default NavbarApp;