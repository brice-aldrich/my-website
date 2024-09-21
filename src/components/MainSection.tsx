import React from 'react';
import {
  Box,
  Typography,
  Avatar,
  Card,
  CardContent,
  Grid,
  useMediaQuery,
  Container,
} from '@mui/material';
import { styled, useTheme } from '@mui/system';
import SkillIcons from './SkillIcons';
import EmailIcon from '@mui/icons-material/Email';

const BackgroundBox = styled(Box)(({ theme }) => ({
  background: `
    linear-gradient(90deg, hsla(110, 100%, 93%, 1) 0%, hsla(139, 58%, 76%, 1) 86%),
    -webkit-linear-gradient(90deg, hsla(110, 100%, 93%, 1) 0%, hsla(139, 58%, 76%, 1) 86%)
  `,
  backgroundColor: 'hsla(110, 100%, 93%, 1)',
  minHeight: '70vh',
  padding: theme.spacing(4),
  paddingTop: 'calc(64px + env(safe-area-inset-top))', // Adjust top padding to account for AppBar height and safe area
  position: 'relative',
  overflow: 'hidden',
}));

const ContentContainer = styled(Grid)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  [theme.breakpoints.up('md')]: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
}));

const FloatingCard = styled(Card)(({ theme }) => ({
  width: '100%',
  backgroundColor: 'white',
  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
  borderRadius: theme.shape.borderRadius * 2,
  transition: 'box-shadow 0.3s ease-in-out',
  '&:hover': {
    boxShadow: '0 15px 35px rgba(0, 0, 0, 0.15)',
  },
}));

const StyledCardContent = styled(CardContent)(({ theme }) => ({
  padding: theme.spacing(3),
}));

const ProfileAvatar = styled(Avatar)(({ theme }) => ({
  width: theme.spacing(15),
  height: theme.spacing(15),
  margin: `${theme.spacing(2)} auto`,
  border: `2px solid ${theme.palette.primary.main}`,
}));

const ContactInfo = styled(Typography)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  margin: theme.spacing(1, 0),
}));

const MapContainer = styled(Box)(({ theme }) => ({
  marginTop: theme.spacing(2),
  width: '100%',
  height: '300px',
  borderRadius: theme.shape.borderRadius,
  overflow: 'hidden',
  border: '3px solid #9ee5b4',
  boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
}));

const SkillIconsContainer = styled(Box)(({ theme }) => ({
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  marginTop: theme.spacing(4),
  [theme.breakpoints.up('md')]: {
    width: '100%',
    marginTop: 0,
    marginLeft: theme.spacing(4),
  },
}));


const MainSection = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <BackgroundBox id="home">
      <Container maxWidth="lg">
        <ContentContainer container spacing={4}>
          {/* Left Grid Item: FloatingCard */}
          <Grid
            item
            xs={12}
            md={6}
            container
            justifyContent="center"
            alignItems="center"
          >
            <FloatingCard>
              <StyledCardContent>
                <Typography
                  variant="h1"
                  component="h1"
                  gutterBottom
                  align="center"
                  style={{ color: 'primary.main' }}
                >
                  Brice Aldrich
                </Typography>
                <ProfileAvatar alt="Brice Aldrich" src="me.png" />
                <Typography
                  variant="h2"
                  component="h1"
                  gutterBottom
                  align="center"
                >
                  Software Engineer
                </Typography>
                <Typography
                  variant="h4"
                  component="h3"
                  gutterBottom
                  align="center"
                >
                  I can build anything!
                </Typography>
                <Grid container spacing={2} justifyContent="center">
                  <Grid item>
                    <ContactInfo variant="body1">
                      <EmailIcon style={{ marginRight: '8px' }} />
                      hi@bricealdrich.com
                    </ContactInfo>
                  </Grid>
                </Grid>
                <MapContainer>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d98118.655981505!2d-86.2151497665933!3d39.77988729160577!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x886b50ffa7796a03%3A0xd68e9df640b9ea7c!2sIndianapolis%2C%20IN!5e0!3m2!1sen!2sus!4v1726928869628!5m2!1sen!2sus"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </MapContainer>
              </StyledCardContent>
            </FloatingCard>
          </Grid>

          {/* Right Grid Item: SkillIconsContainer */}
          {!isMobile && (
            <Grid item xs={12} md={6}>
              <SkillIconsContainer>
                <SkillIcons />
              </SkillIconsContainer>
            </Grid>
          )}
        </ContentContainer>
      </Container>
    </BackgroundBox>
  );
};

export default MainSection;
