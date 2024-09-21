import './App.css';
import TopBar from './components/TopBar';
import MainSection from './components/MainSection';
import AboutSection from './components/AboutSection';
import SkillsSection from './components/SkillsSection';
import WorkHistorySection from './components/WorkHistorySection';
import ContactSection from './components/ContactSection';
import FooterSection from './components/FooterSection';

import { ThemeProvider } from '@mui/material/styles';
import theme from './theme/theme';
import { Box } from '@mui/material';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Box>
        <div className="App">
          <TopBar />
          <MainSection />
          <AboutSection />
          <SkillsSection />
          <WorkHistorySection />
          <ContactSection />
          <FooterSection />
        </div>
      </Box>
    </ThemeProvider>
  );
}

export default App;