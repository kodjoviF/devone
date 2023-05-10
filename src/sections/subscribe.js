import { Link } from 'components/link';
import React, { useState } from 'react';
import { Button, Input, Box, Container, Heading, Text } from 'theme-ui';

const Subscribe = () => {

  const [email, setEmail] = useState('');


  console.log(email);
  return (
    <Box as="section" sx={styles.subscribe}>
      <Container
        sx={{ 
          display: ['flex'],
          alignItems: 'center',
          flexDirection: 'column'
         }}
      >
        <Heading as="h3">Send Us mail for more information</Heading>
        <Box as="form" sx={styles.form}>
          <Input
            placeholder="Enter your message"
            type="email"
            id="subscribeEmail"
            sx={styles.input}
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />

          <a href={`mailto:devoneconsulting@gmail.com?subject=Prise de contact avec DevOne consulting&body=${email}`}>Send the mail</a>
        </Box>
      </Container>
    </Box>
  );
};

export default Subscribe;

const styles = {
  subscribe: {
    py: ['80px', null, null, null, '80px', '100px', '140px'],
    backgroundColor: '#020718',
    h3: {
      textAlign: 'center',
      fontSize: ['23px', null, null, null, null, '30px', '36px'],
      lineHeight: [1.5, null, null, '1'],
      color: '#fff',
      letterSpacing: ['-0.5px'],
      mb: ['0px', null, null, '15px'],
      width: ['70%', null, null, 'auto'],
      mx: ['auto', null, null, '0'],
    },
    
    p: {
      fontSize: ['16px'],
      color: '#fff',
      opacity: '.6',
      letterSpacing: ['-0.5px'],
      textAlign: 'center',
      width: ['70%', null, null, 'auto'],
      mx: ['auto', null, null, '0'],
      mt: ['10px', null, null, '0'],
    },
  },
  form: {
    width: ['100%'],
    maxWidth: ['100%'],
    flexDirection: 'row',
    display: ['flex'],
    flexWrap: ['wrap'],
    mt: ['30px', null, null, null, '60px'],
    justifyContent: 'center',

    a: {
      display: 'flex',
      backgroundColor: '#fff',
      borderRadius: '5px',
      fontWeight: '500',
      fontSize: ['18px'],
      color: '#020718',
      letterSpacing: '-0.5px',
      outline: 'none',
      padding: ['0px 30.75px'],
      minHeight: ['50px', null, null, '60px'],
      width: ['100%', null, null, 'auto'],
      mx: ['auto', null, null, '0'],
      '&:hover': {
        backgroundColor: '#fff',
        opacity: '0.8',
      },
      textDecoration: 'none',
      alignItems: 'center',
      justifyContent: 'center'
    },
  },
  input: {
    width: ['100%'],
    maxWidth: ['100%', null, '370px', '380px'],
    borderRadius: '5px',
    border: 'none',
    backgroundColor: 'rgba(255,255,255, .08)',
    outline: 'none',
    color: 'rgba(255,255,255, .8)',
    fontSize: '16px',
    pl: ['0px', null, null, '30px'],
    height: ['50px', null, null, '60px'],
    mr: ['0px', null, null, '15px'],
    textAlign: ['center', null, null, 'left'],
  },
  email :{
    display: 'inline-block',
    backgroundColor: 'blue',
    color: 'white',
    padding: '10px' ,
    textAlign: 'center',
    textDecoration: 'none',
    borderRadius: '5px',
  },
  
    
  
  button: {
    backgroundColor: '#fff',
    borderRadius: '5px',
    fontWeight: '500',
    fontSize: ['18px'],
    color: '#020718',
    textDecoration:'none',
    letterSpacing: '-0.5px',
    outline: 'none',
    padding: ['0px 30.75px'],
    minHeight: ['50px', null, null, '60px'],
    width: ['100%', null, null, 'auto'],
    mt: ['10px', null, null, '0'],
    mx: ['auto', null, null, '0'],
    '&:hover': {
      backgroundColor: '#fff',
      opacity: '0.8',
    },
    textDecoration: 'none'
  },

};
