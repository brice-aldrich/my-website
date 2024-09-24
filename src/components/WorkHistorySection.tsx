import React, { useState, useEffect } from 'react';
import {
  Box,
  Typography,
  Container,
  Grid,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Divider,
} from '@mui/material';
import { styled } from '@mui/system';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

type JobExperience = {
  title: string;
  company: string;
  duration: string;
  responsibilities: string[];
  icon: string;
};

const ExperienceCard = styled(Box)(({ theme }) => ({
  padding: theme.spacing(2),
  marginBottom: theme.spacing(3),
  border: '2px solid #9ee5b4',
  borderRadius: '10px',
  backgroundColor: 'white',
  boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
  transition: 'opacity 0.5s ease-out, transform 0.5s ease-out, box-shadow 0.3s ease-in-out, scale 0.3s ease-in-out',
  '&:hover': {
    boxShadow: '0 6px 12px rgba(0,0,0,0.15)',
    scale: '1.02',
  },
}));

const StyledAccordion = styled(Accordion)({
  backgroundColor: 'transparent',
  boxShadow: 'none',
  '&:before': {
    display: 'none',
  },
});

const StyledAccordionSummary = styled(AccordionSummary)(({ theme }) => ({
  padding: theme.spacing(1, 2),
  '& .MuiAccordionSummary-content': {
    margin: 0,
    alignItems: 'center',
  },
}));

const CompanyName = styled(Typography)(({ theme }) => ({
  fontWeight: 600,
  color: theme.palette.text.primary,
  [theme.breakpoints.down('sm')]: {
    fontSize: '1rem',
  },
}));

const JobTitle = styled(Typography)(({ theme }) => ({
  fontStyle: 'italic',
  color: theme.palette.text.secondary,
  [theme.breakpoints.down('sm')]: {
    fontSize: '0.9rem',
  },
}));

const DurationText = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.secondary,
  [theme.breakpoints.down('sm')]: {
    fontSize: '0.9rem',
  },
}));

const LogoImage = styled('img')({
  width: 80,
  height: 80,
  objectFit: 'contain',
});

const WorkHistorySection: React.FC = () => {
  const [visibleCards, setVisibleCards] = useState(0);

  const experiences: JobExperience[] = [
    {
      title: 'Lead Backend Engineer',
      company: 'Equifax/Cognizant',
      duration: 'April 2021 - Present',
      responsibilities: [
        'Ownership over several high-profile projects around digital identity, authentication, authorization, and tokens.',
        "Lead backend engineer for Equifax's next-generation digital identity service.",
        "Lead backend engineer for Equifax's internal token issuance service.",
        "Lead backend engineer for Equifax's next-generation authentication and authorization service.",
        'Ownership and lead over supporting customer-facing SDKs.',
        'Built many services from the ground up using technologies such as Demonstrating Proof of Possession (DPoP), WebAuthn, split tokens, and more.',
      ],
      icon: 'equifax.png',
    },
    {
      title: 'Senior Software Engineer and SRE Lead',
      company: 'CamlCase Inc.',
      duration: 'May 2020 - April 2021',
      responsibilities: [
        'Ownership over all infrastructure and SRE-related projects.',
        'Built and maintained CI/CD pipelines, EKS clusters, deployment environments, and utilities.',
        'Developed infrastructure in a decentralized manner using smart contracts and IPFS.',
        'Built backend services related to analytics of a decentralized exchange using Go and Haskell.',
        'Facilitated stand-ups, ticket organization, and creation.',
      ],
      icon: 'camlCase.png',
    },
    {
      title: 'Senior Go Engineer - GoTezos Library Owner',
      company: 'Brice Aldrich Development LLC',
      duration: 'January 2020 - December 2021',
      responsibilities: [
        'Built and maintained an open-source library interfacing with the Tezos blockchain RPC in Go.',
        'Developed cryptographic functions to create wallets, sign operations, and verify operations.',
        'Created structures and tooling for reading blocks and smart contracts on the chain.',
        'Built batch payment tools to facilitate payments for proof-of-stake businesses.',
        'Developed infrastructure tooling to deploy a proof-of-stake operation.',
        'Operated a proof-of-stake service representing several million in assets at its peak.',
        'Received a large grant to continue open-source development over a year.',
      ],
      icon: 'tezos.png',
    },
    {
      title: 'Lead/Senior Go Engineer - Core Architecture',
      company: 'OneCause',
      duration: 'October 2019 - May 2020',
      responsibilities: [
        'Built and maintained core Go libraries central to microservices facilitating payments.',
        'Developed core Go libraries for microservices handling donor auctions and billing.',
        'Advised and collaborated with the architecture team on overall product architecture decisions.',
        'Mentored junior developers in skill progression and career development.',
      ],
      icon: 'onecause.png',
    },
    {
      title: 'Golang Security Engineer - Cloud Identity',
      company: 'Apple',
      duration: 'March 2019 - October 2019',
      responsibilities: [
        "Built and helped design Apple's internal authentication and identity service similar to AWS IAM.",
        'Designed policy-based management solutions to authenticate internal customers into Kubernetes clusters and development environments.',
        'Developed CLI utilities related to authentication and cluster management.',
        'Utilized technologies such as OAuth2, OIDC, gRPC, Go, and OPA.',
      ],
      icon: 'apple.png',
    },
    {
      title: 'Part-Time Software Engineer Contractor',
      company: 'Tezos Marigold',
      duration: 'January 2019 - December 2019',
      responsibilities: [
        'Developed supporting tooling for a higher-level smart contract language called LIGO.',
        'Built syntax highlighting for various forms of LIGO.',
        'Developed a simple language server and VSCode plugin for LIGO formats.',
        'Tested LIGO as a language and deployed test smart contracts to the Tezos blockchain.',
      ],
      icon: 'marigold.png',
    },
    {
      title: 'Backend Go Engineer',
      company: 'TransWorks',
      duration: 'November 2018 - March 2019',
      responsibilities: [
        'Optimized existing Go code by introducing concurrency models.',
        'Enhanced database queries using legacy technologies related to the railroad transportation industry.',
        'Implemented requested features end-to-end by collaborating with team members.',
        'Facilitated project direction and managed ServiceNow.',
      ],
      icon: 'transworks.png',
    },
    {
      title: 'Research and Development Engineer',
      company: 'INdigital',
      duration: 'May 2015 - November 2018',
      responsibilities: [
        'Collaborated on designing and developing proof-of-concept technologies related to 911 telecommunications and routing.',
        'Built developer tooling using virtualization and automation tools.',
        'Developed protocol parsers for specific binary data formats and telecom-related protocols.',
        'Improved existing systems related to routing.',
        'Supported feature work and tools related to text-to-911 products.',
      ],
      icon: 'indigital.png',
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setVisibleCards((prev) => (prev < experiences.length ? prev + 1 : prev));
    }, 500);

    return () => clearInterval(timer);
  }, [experiences.length]);

  return (
    <Box
      id="experience"
      sx={{
        py: 8,
        bgcolor: 'background.default',
        boxShadow: '0px 40px 40px -40px rgba(0,0,0,0.1), 0px -40px 40px -40px rgba(0,0,0,0.1)', 
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
          Work History
        </Typography>

        <Typography
          variant="h2"
          component="h2"
          gutterBottom
          align="center"
          color="primary"
          sx={{ maxWidth: '800px', mx: 'auto', mb: 4 }}
        >
          A journey through innovative technologies and impactful projects
        </Typography>

        {experiences.map((job, index) => (
          <ExperienceCard
            key={index}
            sx={{
              opacity: index < visibleCards ? 1 : 0,
              transform: index < visibleCards ? 'translateY(0)' : 'translateY(20px)',
            }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={3} md={2} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <LogoImage
                  src={`/companyicons/${job.icon}`}
                  alt={`${job.company} logo`}
                />
              </Grid>
              <Grid item xs={12} sm={9} md={10}>
                <StyledAccordion>
                  <StyledAccordionSummary
                    expandIcon={<ExpandMoreIcon sx={{ color: 'text.primary' }} />}
                    aria-controls={`panel${index}-content`}
                    id={`panel${index}-header`}
                  >
                    <Grid container alignItems="center" spacing={2}>
                      <Grid item xs>
                        <CompanyName variant="h6">{job.company}</CompanyName>
                        <JobTitle variant="subtitle1">{job.title}</JobTitle>
                      </Grid>
                      <Grid item>
                        <DurationText variant="subtitle2" align="right">
                          {job.duration}
                        </DurationText>
                      </Grid>
                    </Grid>
                  </StyledAccordionSummary>
                  <AccordionDetails sx={{ textAlign: 'left' }}>
                    <Divider sx={{ mb: 2 }} />
                    <Typography variant="body1" sx={{ fontWeight: 'bold', mb: 1 }}>
                      Key Responsibilities:
                    </Typography>
                    <ul style={{ paddingLeft: '1.5rem', margin: 0 }}>
                      {job.responsibilities.map((resp, idx) => (
                        <li key={idx} style={{ marginBottom: '0.5rem' }}>
                          <Typography variant="body2">{resp}</Typography>
                        </li>
                      ))}
                    </ul>
                  </AccordionDetails>
                </StyledAccordion>
              </Grid>
            </Grid>
          </ExperienceCard>
        ))}
      </Container>
    </Box>
  );
};

export default WorkHistorySection;
