import React, { useState, useEffect } from 'react';
import { Box, Typography, Container, Grid } from '@mui/material';

const AboutSection: React.FC = () => {
  const [visibleBoxes, setVisibleBoxes] = useState(0);

  const statements = [
    "I am a backend engineer with over 9 years of development experience, primarily using Go to build scalable and efficient software solutions. My career has spanned a diverse range of industries, including blockchain, finance, 911 telecommunications, transportation, and identity, and authentication/authroization.",
    "My expertise lies in designing and implementing robust backend systems that are secure and high-performing. With a strong foundation in full-stack development and Site Reliability Engineering (SRE), I approach challenges holistically, ensuring seamless integration and reliability across all layers of technology.",
    "I'm passionate about leveraging technology to solve complex problems and enhance user experiences. Whether it's developing high-availability systems for emergency services or creating innovative solutions in the financial sector, I thrive on tackling challenging projects that make a tangible impact.",
    "Collaboration and continuous learning are at the core of my professional ethos. I enjoy working in dynamic teams and am always eager to adopt new technologies and methodologies to stay at the forefront of the industry."
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setVisibleBoxes((prev) => (prev < statements.length ? prev + 1 : prev));
    }, 500); 

    return () => clearInterval(timer);
  }, [statements.length]);

  return (
    <Box 
      id="about" 
      sx={{ 
        py: 8, 
        bgcolor: 'background.default',
        boxShadow: '0px 40px 40px -40px rgba(0,0,0,0.1)',
        position: 'relative',
        zIndex: 1,
      }}
    >
      <Container maxWidth="lg">
        <Typography
          sx={{
            textTransform: 'uppercase',
            fontWeight: 'medium',
          }}
          gutterBottom
          color={'textSecondary'}
          align={'center'}
        >
          About Me
        </Typography>

        <Typography 
          variant="h2" 
          component="h2" 
          gutterBottom 
          align="center" 
          color="primary"
          sx={{ maxWidth: '800px', mx: 'auto', mb: 4 }}
        >
          Software engineer with a special talent and love for the complex and the challenging. 
        </Typography>
        
        <Grid container spacing={3} sx={{ mb: 4 }}>
          {statements.map((statement, index) => (
            <Grid item xs={12} md={6} key={index} sx={{ mb: { xs: 2, md: 3 } }}>
              <Box
                sx={{
                  p: 2,
                  height: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  border: '2px solid #9ee5b4',
                  borderRadius: '10px',
                  backgroundColor: 'white',
                  boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
                  opacity: index < visibleBoxes ? 1 : 0,
                  transform: index < visibleBoxes ? 'translateY(0)' : 'translateY(20px)',
                  transition: 'opacity 0.5s ease-out, transform 0.5s ease-out, box-shadow 0.3s ease-in-out, scale 0.3s ease-in-out',
                  '&:hover': {
                    boxShadow: '0 6px 12px rgba(0,0,0,0.15)',
                    scale: '1.02', 
                  },
                }}
              >
                <Typography variant="body2" color="primary">
                  {statement}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default AboutSection;