import React, { useState, useEffect } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../theme/theme'; // Your original theme file
import DownloadIcon from '@mui/icons-material/Download';
import XIcon from '@mui/icons-material/X';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import useMediaQuery from '@mui/material/useMediaQuery';
import PersonIcon from '@mui/icons-material/Person';
import CodeIcon from '@mui/icons-material/Code';
import WorkIcon from '@mui/icons-material/Work';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import HouseIcon from '@mui/icons-material/House';

export default function ResponsiveAppBar() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('Home');
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = 'resume.pdf';
    link.download = 'Brice_Aldrich_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  const handleMenuClick = (text: string) => {
    setActiveSection(text); 
    const element = document.getElementById(text.toLowerCase());
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    if (isMobile) {
      setDrawerOpen(false); 
    }
  };

  const menuItems = [
    { text: 'Home', icon: <HouseIcon /> },
    { text: 'About', icon: <PersonIcon /> },
    { text: 'Skills', icon: <CodeIcon /> },
    { text: 'Experience', icon: <WorkIcon /> },
    { text: 'Contact', icon: <ContactMailIcon /> },
  ];

  const sideList = () => (
    <Box
      sx={{
        width: 250,
        height: '100%',
        backgroundColor: 'white',
        position: 'relative',
        pt: 2,
      }}
      role="presentation"
      onClick={toggleDrawer}
      onKeyDown={toggleDrawer}
    >
      <IconButton
        onClick={toggleDrawer}
        sx={{
          position: 'absolute',
          right: 8,
          top: 8,
          color: theme.palette.text.secondary,
        }}
      >
        <CloseIcon />
      </IconButton>
      <List sx={{ mt: 4 }}>
        {menuItems.map((item, index) => (
          <React.Fragment key={item.text}>
            <ListItem disablePadding>
              <Button
                fullWidth
                onClick={() => handleMenuClick(item.text)} 
                sx={{
                  justifyContent: 'flex-start',
                  padding: '12px 16px',
                  textTransform: 'none',
                  color: theme.palette.text.primary,
                  backgroundColor:
                    activeSection === item.text
                      ? theme.palette.action.selected
                      : 'transparent',
                  '&:hover': {
                    backgroundColor: theme.palette.action.hover,
                  },
                }}
              >
                <ListItemIcon sx={{ minWidth: 40, color: 'inherit' }}>
                  {item.icon}
                </ListItemIcon>
                <ListItemText primary={item.text} />
              </Button>
            </ListItem>
            {index < menuItems.length - 1 && (
              <Divider variant="middle" component="li" />
            )}
          </React.Fragment>
        ))}
      </List>
    </Box>
  );

  useEffect(() => {
    const handleScroll = () => {
      const sections = menuItems.map((item) => document.getElementById(item.text.toLowerCase()));
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      for (let section of sections) {
        if (section) {
          const { offsetTop, offsetHeight } = section;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(capitalizeFirstLetter(section.id));
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [menuItems]);

  const capitalizeFirstLetter = (string: string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ flexGrow: 1 }}>
      <AppBar
          position="fixed"
          color="default"
          elevation={0}
          sx={{
            borderBottom: 1,
            borderColor: 'divider',
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
            zIndex: (theme) => theme.zIndex.drawer + 1,
            top: 0,
            left: 0,
            right: 0,
            paddingTop: 'env(safe-area-inset-top)',
            paddingLeft: 'env(safe-area-inset-left)',
            paddingRight: 'env(safe-area-inset-right)',
            height: 'calc(64px + env(safe-area-inset-top))', // Adjust the height to include the safe area
          }}
        >
          <Toolbar sx={{ 
            justifyContent: 'space-between',
            minHeight: '64px !important', 
            marginTop: 'env(safe-area-inset-top)' 
          }}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              {isMobile ? (
                <IconButton
                  color="inherit"
                  aria-label="toggle drawer"
                  edge="start"
                  onClick={toggleDrawer}
                  sx={{ mr: 2 }}
                >
                  <MenuIcon />
                </IconButton>
              ) : (
                <Typography variant="h6" component="div" sx={{ color: 'text.primary' }}>
                  Welcome!
                </Typography>
              )}
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              {!isMobile &&
                menuItems.map((item) => (
                  <Button
                    key={item.text}
                    onClick={() => handleMenuClick(item.text)}
                    color="primary"
                    sx={{
                      mx: 1,
                      textTransform: 'none',
                      borderBottom: activeSection === item.text ? '2px solid' : '2px solid transparent',
                      borderColor: activeSection === item.text ? 'primary.main' : 'transparent',
                      paddingBottom: '6px',
                      '&:hover': {
                        backgroundColor: 'transparent',
                        borderColor: 'primary.main', 
                      },
                    }}
                  >
                    {item.text}
                  </Button>
                ))}
              <IconButton
                color="primary"
                component="a"
                href="https://x.com/therealbricea"
                target="_blank"
                rel="noopener noreferrer"
                sx={{ ml: 1 }}
              >
                <XIcon />
              </IconButton>
              <IconButton
                color="primary"
                component="a"
                href="https://www.linkedin.com/in/brice-aldrich-1046bb85/"
                target="_blank"
                rel="noopener noreferrer"
                sx={{ ml: 1 }}
              >
                <LinkedInIcon />
              </IconButton>
              <IconButton
                color="primary"
                component="a"
                href="https://github.com/brice-aldrich"
                target="_blank"
                rel="noopener noreferrer"
                sx={{ ml: 1 }}
              >
                <GitHubIcon />
              </IconButton>
              <Button
                color="secondary"
                variant="contained"
                startIcon={<DownloadIcon />}
                onClick={handleDownload}
                sx={{
                  marginLeft: 2,
                  '&:hover': {
                    backgroundColor: theme.palette.secondary.dark,
                  },
                }}
              >
                Resume
              </Button>
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={toggleDrawer}
        PaperProps={{
          sx: {
            backgroundColor: 'white',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
          },
        }}
        ModalProps={{
          keepMounted: true,
        }}
      >
        {sideList()}
      </Drawer>
      <Toolbar />
    </ThemeProvider>
  );
}