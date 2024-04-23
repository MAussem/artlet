"use client";
import React, { useState } from 'react';
import { Button, TextField, Snackbar, Grid, IconButton } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

export default function SubscribeForm() {
  const [email, setEmail] = useState('');
  const [open, setOpen] = useState(false);
  const [error, setError] = useState('');
  const [isClicked, setIsClicked] = useState(false);

  const handleSubmit = async (event: { preventDefault: () => void; }) => {
    event.preventDefault();
    setIsClicked(true); // Trigger animation
        setTimeout(() => setIsClicked(false), 300);
    if (!email) {
      setError('Email is required');
      return;
    } else if (!/^\S+@\S+\.\S+$/.test(email)) {
      setError('Entered value does not match email format');
      return;
    }

    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setOpen(true);
        setEmail('');
        setError('');
      } else {
        setError('Failed to subscribe');
      }
    } catch (error) {
      setError('Failed to subscribe');
      console.error('Failed to subscribe:', error);
    }
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div style={{ maxWidth: '320px', margin: 'auto' }}>
      <img 
        src="/logo.png" 
        alt="Company Logo" 
        style={{ width: 320, height: 320, margin: 'auto', marginTop: -170, display: 'block' }} 
      />
      <form onSubmit={handleSubmit} noValidate >
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="email"
          label="Become a Founding Member"
          name="email"
          autoComplete="email"
          autoFocus
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          error={!!error}
          helperText={error}
        />
        <Button 
          type="submit" 
          fullWidth 
          variant="contained" 
          style={{
            backgroundColor: 'rgb(84, 41, 201)', 
            color: 'white',
            transform: isClicked ? 'scale(0.95)' : 'scale(1)',
            transition: 'transform 300ms ease-in-out'
        }}
        >
          Subscribe
        </Button>


      </form>
      {/* <Grid container justifyContent="space-evenly" style={{ marginTop: 20  }}>
        <IconButton aria-label="facebook" onClick={() => window.location.href = 'https://facebook.com'} style={{
            backgroundColor: 'rgb(84, 41, 201)', 
            color: 'white',
            transform: isClicked ? 'scale(0.95)' : 'scale(1)',
            transition: 'transform 300ms ease-in-out'
        }}>
          <FacebookIcon />
        </IconButton>
        <IconButton aria-label="twitter" onClick={() => window.location.href = 'https://twitter.com'} style={{
            backgroundColor: 'rgb(84, 41, 201)', 
            color: 'white',
            transform: isClicked ? 'scale(0.95)' : 'scale(1)',
            transition: 'transform 300ms ease-in-out'
        }}>
          <TwitterIcon />
        </IconButton>
        <IconButton aria-label="instagram" onClick={() => window.location.href = 'https://instagram.com'} style={{
            backgroundColor: 'rgb(84, 41, 201)', 
            color: 'white',
            transform: isClicked ? 'scale(0.95)' : 'scale(1)',
            transition: 'transform 300ms ease-in-out'
        }}>
          <InstagramIcon />
        </IconButton>
      </Grid> */}
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose} message="Thank you for subscribing!" />
    </div>
  );
}

