import React, { useState, useEffect, useCallback } from 'react';
import { Box, Typography, Container, Grid, Chip, Card, CardContent, LinearProgress } from '@mui/material';

type SkillDetail = {
  name: string;
  level: number;
  description: string;
  category: string;
};

const SkillDetailCard: React.FC<{ skill: SkillDetail }> = ({ skill }) => (
  <Card sx={{ 
    mt: 4, 
    mb: 4, 
    backgroundColor: 'white',
    borderRadius: '16px',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
    height: '200px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  }}>
    <CardContent>
      <Typography variant="h5" component="div" gutterBottom>
        {skill.name}
      </Typography>
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
        <Typography variant="body2" sx={{ minWidth: 60 }}>
          Proficiency:
        </Typography>
        <LinearProgress 
          variant="determinate" 
          value={skill.level} 
          sx={{ 
            flexGrow: 1, 
            ml: 2, 
            height: 10, 
            borderRadius: 5,
            backgroundColor: 'hsla(110, 100%, 93%, 1)',
            '& .MuiLinearProgress-bar': {
              backgroundColor: 'hsla(139, 58%, 76%, 1)',
            }
          }} 
        />
        <Typography variant="body2" sx={{ minWidth: 40, ml: 2 }}>
          {skill.level}%
        </Typography>
      </Box>
      <Typography variant="body2" color="text.secondary">
        {skill.description}
      </Typography>
      <Typography variant="body2" color="primary" sx={{ mt: 1 }}>
        Category: {skill.category}
      </Typography>
    </CardContent>
  </Card>
);

const SkillsSection: React.FC = () => {
  const [selectedSkillIndex, setSelectedSkillIndex] = useState<number>(0);
  const [isAutoRotating, setIsAutoRotating] = useState<boolean>(true);

  const skills: SkillDetail[] = [
    { name: "Go", level: 95, description: "Extensive experience as Lead Go Engineer, building scalable backend systems and microservices.", category: "Programming Languages" },
    { name: "Typescript", level: 85, description: "Used in multiple projects, including SDK development.", category: "Programming Languages" },
    { name: "Javascript", level: 85, description: "Proficient in both frontend and backend JavaScript development.", category: "Programming Languages" },
    { name: "Swift", level: 75, description: "Experience with iOS development, particularly in Apple's ecosystem.", category: "Programming Languages" },
    { name: "Haskell", level: 70, description: "Used in blockchain projects and for building analytics services.", category: "Programming Languages" },
    { name: "Python", level: 80, description: "Used for various backend and scripting tasks.", category: "Programming Languages" },
    { name: "Docker", level: 90, description: "Extensive use in containerizing applications and microservices.", category: "DevOps & Infrastructure" },
    { name: "Kubernetes", level: 85, description: "Experience in orchestrating containerized applications, especially with AWS EKS.", category: "DevOps & Infrastructure" },
    { name: "AWS", level: 90, description: "Proficient in various AWS services including EKS, RDS, IAM, Elasticache, SQS, Route53, SES, ECR, and KMS.", category: "Cloud Services" },
    { name: "MongoDB", level: 85, description: "Experience with MongoDB and MongoDB Atlas for NoSQL database solutions.", category: "Databases" },
    { name: "Git & GitLab", level: 90, description: "Proficient in version control and CI/CD pipelines using Git and GitLab.", category: "DevOps & Infrastructure" },
    { name: "Terraform", level: 80, description: "Used for infrastructure as code in cloud environments.", category: "DevOps & Infrastructure" },
    { name: "Blockchain", level: 85, description: "Experience with blockchain technologies, especially Tezos.", category: "Specialized Technologies" },
    { name: "gRPC", level: 80, description: "Used in building efficient, high-performance APIs.", category: "API Technologies" },
    { name: "OAuth2 & OIDC", level: 90, description: "Expertise in implementing secure authentication and authorization protocols.", category: "Security & Authentication" },
    { name: "WebAuthn", level: 85, description: "Implemented in next-generation authentication services.", category: "Security & Authentication" },
    { name: "Cryptography", level: 85, description: "Applied in blockchain projects and secure systems development.", category: "Security & Authentication" },
    { name: "EntGo", level: 80, description: "Used for building robust and easily maintainable database schemas.", category: "Databases" },
    { name: "MySQL & Postgres", level: 85, description: "Proficient in designing and optimizing relational databases.", category: "Databases" },
    { name: "Redis", level: 80, description: "Used for caching and as a message broker in distributed systems.", category: "Databases" },
    { name: "Datadog, Grafana, Prometheus", level: 85, description: "Experience with monitoring and observability tools.", category: "DevOps & Infrastructure" },
  ];

  const rotateSkill = useCallback(() => {
    if (isAutoRotating) {
      setSelectedSkillIndex((prevIndex) => (prevIndex + 1) % skills.length);
    }
  }, [isAutoRotating, skills.length]);

  useEffect(() => {
    const intervalId = setInterval(rotateSkill, 3000);
    return () => clearInterval(intervalId);
  }, [rotateSkill]);

  const handleSkillClick = (index: number) => {
    setSelectedSkillIndex(index);
    setIsAutoRotating(false);
  };

  return (
    <Box 
      id = "skills"
      sx={{ 
        py: 8, 
        bgcolor: 'hsla(110, 100%, 97%, 1)',
        position: 'relative',
        zIndex: 0,
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
          Skills
        </Typography>

        <Typography 
          variant="h2" 
          component="h2" 
          gutterBottom 
          align="center" 
          color="primary"
          sx={{ maxWidth: '800px', mx: 'auto', mb: 4 }}
        >
          Technical Expertise
        </Typography>
        
        <SkillDetailCard skill={skills[selectedSkillIndex]} />

        <Grid container spacing={2} justifyContent="center">
          {skills.map((skill, index) => (
            <Grid item key={index}>
              <Chip
                label={skill.name}
                onClick={() => handleSkillClick(index)}
                sx={{
                  bgcolor: index === selectedSkillIndex ? 'hsla(139, 58%, 76%, 1)' : 'white',
                  color: index === selectedSkillIndex ? 'white' : 'hsla(139, 58%, 76%, 1)',
                  border: '1px solid',
                  borderColor: 'hsla(139, 58%, 76%, 1)',
                  '&:hover': {
                    bgcolor: 'hsla(139, 58%, 76%, 1)',
                    color: 'white',
                  },
                  transition: 'all 0.3s ease-in-out',
                }}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default SkillsSection;