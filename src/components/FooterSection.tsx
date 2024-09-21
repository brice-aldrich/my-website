import React from 'react';
import { Box, Typography, Container, Grid, IconButton } from '@mui/material';
import XIcon from '@mui/icons-material/X';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Box 
      component="footer"
      sx={{ 
        py: 6, 
        bgcolor: 'background.default',
        boxShadow: '0px -10px 20px -5px rgba(0,0,0,0.1)', 
        position: 'relative',
        zIndex: 1,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={3} justifyContent="space-between" alignItems="center">
          <Grid item xs={12} md={4}>
            <Typography variant="h6" color="primary" gutterBottom>
              Connect with me
            </Typography>
            <Box>
              <IconButton 
                color="primary" 
                component="a" 
                href="https://x.com/therealbricea" 
                target="_blank"
                rel="noopener noreferrer"
                sx={{ mr: 1 }}
              >
                <XIcon />
              </IconButton>
              <IconButton 
                color="primary" 
                component="a" 
                href="https://www.linkedin.com/in/brice-aldrich-1046bb85/" 
                target="_blank"
                rel="noopener noreferrer"
                sx={{ mr: 1 }}
              >
                <LinkedInIcon />
              </IconButton>
              <IconButton 
                color="primary" 
                component="a" 
                href="https://github.com/brice-aldrich" 
                target="_blank"
                rel="noopener noreferrer"
              >
                <GitHubIcon />
              </IconButton>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box
              sx={{
                p: 2,
                border: '2px solid #9ee5b4',
                borderRadius: '10px',
                backgroundColor: 'white',
                boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
                transition: 'box-shadow 0.3s ease-in-out, scale 0.3s ease-in-out',
                '&:hover': {
                  boxShadow: '0 6px 12px rgba(0,0,0,0.15)',
                  scale: '1.02',
                },
              }}
            >
              <Typography variant="body2" color="primary" align="center">
                "Innovation is the outcome of a habit, not a random act."
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="body2" color="textSecondary" align="right">
              © {currentYear} Brice Aldrich. All rights reserved.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;