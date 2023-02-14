import React from 'react';
import { useMsal } from "@azure/msal-react";

import backgroundImg from '../assets/loginBack.svg';
import appLogo from "../assets/logo.png"
import {
    Paper,
    createStyles,
    Button,
    Title,
    Text,
    Container, 
    Group,
    Image
  } from '@mantine/core';

  const useStyles = createStyles((theme) => ({
    wrapper: {
      minHeight: '100%',
      backgroundImage:
      `url(${backgroundImg})`,
    },
  
    form: {
      borderRight: `1px solid ${
        theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.colors.gray[3]
      }`,
      minHeight: 900,
      maxWidth: 450,
      paddingTop: 80,
  
      [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
        maxWidth: '100%',
      },
    },
  
    title: {
      color: theme.colorScheme === 'dark' ? theme.white : theme.black,
      fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    },
  
    logo: {
      color: theme.colorScheme === 'dark' ? theme.white : theme.black,
      width: 120,
      display: 'block',
      marginLeft: 'auto',
      marginRight: 'auto',
    },
    root: {
        paddingTop: 80,
        paddingBottom: 120,
        backgroundColor: theme.fn.variant({ variant: 'filled', color: theme.primaryColor }).background,
      },
    
      label: {
        textAlign: 'center',
        fontWeight: 900,
        fontSize: 220,
        lineHeight: 1,
        marginBottom: theme.spacing.xl * 1.5,
        color: theme.colors[theme.primaryColor][3],
    
        [theme.fn.smallerThan('sm')]: {
          fontSize: 120,
        },
      },
    
      titleLogging: {
        fontFamily: `Greycliff CF, ${theme.fontFamily}`,
        textAlign: 'center',
        fontWeight: 900,
        fontSize: 38,
        color: theme.white,
    
        [theme.fn.smallerThan('sm')]: {
          fontSize: 32,
        },
      },
    
      description: {
        maxWidth: 540,
        margin: 'auto',
        marginTop: theme.spacing.xl,
        marginBottom: theme.spacing.xl * 1.5,
        color: theme.colors[theme.primaryColor][1],
      },
  }));

const Login = (props) => {
    const { instance, inProgress } = useMsal();
    const { classes } = useStyles();
    

    if (inProgress === "login") {
        return (
            <div className={classes.root}>
                <Container>
                    <div className={classes.label}>100</div>
                    <Title className={classes.titleLogging}>Please wait while we confirm your credentials...</Title>
                    <Text size="lg" align="center" className={classes.description}>
                        We are currently processing your request, you will be automatically forwarded when this is completed. 
                    </Text>
                    <Group position="center">
                    <Button variant="white" size="md">
                        Refresh the page
                    </Button>
                    </Group>
                </Container>
            </div>
        )
    } else {
        return (
            <div className={classes.wrapper}>
                <Paper className={classes.form} radius={0} p={30}>
                    <Title order={2} className={classes.title} align="center" mt="md" mb={50}>
                        Welcome back to
                    </Title>

                    <Image radius="lg" src={appLogo} alt='logo' width={385} />
                    <Button onClick={() => instance.loginPopup({})} fullWidth mt="xl" size="md">
                        Login
                    </Button>
                </Paper>
            </div>
        );
    }
    
}

export default Login;