import * as React from 'react';
import { useState } from 'react';
/**
 * Mantine
 */
import { createStyles, Header, Container, Group, Burger, Paper, Transition, Image} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
/**
 * REACT ROUTER
 */
import { Link, useNavigate } from 'react-router-dom';

/**
 * MSAL
 */
import { useIsAuthenticated } from "@azure/msal-react";

import appLogo from "../assets/logonobg.png"

const HEADER_HEIGHT = 60;
const links = [
  { link: "/", label: "HOME" },
  { link: "/all", label: "ALL" },
  { link: "/mob", label: "MOB" },
  { link: "/vob", label: "VOB" },
  { link: "/mte", label: "MTE" }
];

const useStyles = createStyles((theme) => ({
  root: {
    position: 'relative',
    zIndex: 1,
  },

  dropdown: {
    position: 'absolute',
    top: HEADER_HEIGHT,
    left: 0,
    right: 0,
    zIndex: 0,
    borderTopRightRadius: 0,
    borderTopLeftRadius: 0,
    borderTopWidth: 0,
    overflow: 'hidden',

    [theme.fn.largerThan('sm')]: {
      display: 'none',
    },
  },

  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '100%',
  },

  links: {
    [theme.fn.smallerThan('sm')]: {
      display: 'none',
    },
  },

  burger: {
    [theme.fn.largerThan('sm')]: {
      display: 'none',
    },
  },

  link: {
    display: 'block',
    lineHeight: 1,
    padding: '8px 12px',
    borderRadius: theme.radius.sm,
    textDecoration: 'none',
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[7],
    fontSize: theme.fontSizes.sm,
    fontWeight: 500,

    '&:hover': {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
    },

    [theme.fn.smallerThan('sm')]: {
      borderRadius: 0,
      padding: theme.spacing.md,
    },
  },

  linkActive: {
    '&, &:hover': {
      backgroundColor: theme.fn.variant({ variant: 'light', color: theme.primaryColor }).background,
      color: theme.fn.variant({ variant: 'light', color: theme.primaryColor }).color,
    },
  },
}));


const TopAppBar = (props) => {
  const [opened, { toggle, close }] = useDisclosure(false);
  const [active, setActive] = useState(links[0].link);
  const { classes, cx } = useStyles();

  const items = links.map((link) => (
    <Link
      key={link.label}
      to={link.link}
      className={cx(classes.link, { [classes.linkActive]: active === link.link })}
      onClick={(event) => {
        setActive(link.link);
        close();
      }}
    >
      {link.label}
    </Link>
  ));

  const isAuthenticated = useIsAuthenticated();
  const navigate = useNavigate();

  return (
    <React.Fragment>
      <Header height={HEADER_HEIGHT} mb={0} className={classes.root}>
        <Container className={classes.header}>
          <Image src={appLogo} alt='logo' width={85} />
          <Group spacing={5} className={classes.links}>
            {items}
          </Group>

          <Burger opened={opened} onClick={toggle} className={classes.burger} size="sm" />

          <Transition transition="pop-top-right" duration={200} mounted={opened}>
            {(styles) => (
              <Paper className={classes.dropdown} withBorder style={styles}>
                {items}
              </Paper>
            )}
          </Transition>
        </Container>
      </Header>
    </React.Fragment>
  );
  }
export default TopAppBar;