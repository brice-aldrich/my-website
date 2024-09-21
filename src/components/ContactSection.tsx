import React, { useState } from 'react';
import { Box, Typography, Container, TextField, Button, Grid, Card, Link } from '@mui/material';
import { MailServiceApi, Configuration } from '@baldrich13/mail-service-client';
import axios from 'axios';
import CodeIcon from '@mui/icons-material/Code';
import GitHubIcon from '@mui/icons-material/GitHub';


interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  [key: string]: string;
}

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const baseURL = 'http://mail.bricealdrich.com'; 
  const axiosInstance = axios.create({
    baseURL,
    timeout: 10000,
  });
  
  const configuration = new Configuration({
    basePath: baseURL,
  });
  
  const apiClient = new MailServiceApi(configuration, baseURL, axiosInstance);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const validateForm = (): FormErrors => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email.trim())) {
      newErrors.email = 'Email is invalid';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }

    return newErrors;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const validationErrors = validateForm();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);

    try {
      await apiClient.mailServiceSendMail({
        sendMailRequest: {
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        }
      });

      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
    } catch (error) {
      console.error('Failed to send email:', error);
      setIsSubmitting(false);
      setErrors({ submit: 'Failed to send message. Please try again later.' });
    }
  };
  
  const DemoSection: React.FC = () => (
    <Box 
      sx={{ 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center',
        mb: 6,
        mt: 2
      }}
    >
      <CodeIcon sx={{ fontSize: 40, color: 'primary.main', mb: 2 }} />
      <Typography 
        variant="h6" 
        component="h6" 
        align="center" 
        color="text.primary"
        sx={{ fontWeight: 'medium', mb: 1 }}
      >
        Curious about the tech behind this page?
      </Typography>
      <Typography 
        variant="body1" 
        align="center" 
        color="text.secondary"
        sx={{ mb: 2 }}
      >
        This contact form isn't just functional—it's a showcase of clean code and best practices.
      </Typography>
      <Link 
        href="https://github.com/brice-aldrich/mail-service" 
        target="_blank" 
        rel="noopener noreferrer"
        sx={{
          color: 'primary.main',
          fontWeight: 'bold',
          textDecoration: 'none',
          display: 'flex',
          alignItems: 'center',
          '&:hover': {
            textDecoration: 'underline',
          },
        }}
      >
        Explore the Code
        <GitHubIcon sx={{ ml: 1, fontSize: 20 }} />
      </Link>
    </Box>
  );
  
  return (
    <Box
      id="contact"
      sx={{
        py: 8,
        bgcolor: 'hsla(110, 100%, 97%, 1)',
        position: 'relative',
        zIndex: 0,
      }}
    >
      <Container maxWidth="md">
        <Typography
          sx={{
            textTransform: 'uppercase',
            fontWeight: 'medium',
          }}
          gutterBottom
          color={'textSecondary'}
          align={'center'}
        >
          Contact Me
        </Typography>

        <Typography
          variant="h2"
          component="h2"
          gutterBottom
          align="center"
          color="primary"
          sx={{ maxWidth: '800px', mx: 'auto', mb: 4 }}
        >
          Get in Touch
        </Typography>

        <Typography 
          variant="h4" 
          component="h4" 
          gutterBottom 
          align="center" 
          color="primary"
          sx={{ maxWidth: '800px', mx: 'auto', mb: 4 }}
        >
          I want to hear all about your project!
        </Typography>

        {submitSuccess && (
          <Typography
            variant="body1"
            color="success.main"
            align="center"
            sx={{ mb: 4 }}
          >
            Your message has been sent successfully!
          </Typography>
        )}

        <Card
          sx={{
            mt: 4,
            mb: 4,
            backgroundColor: 'white',
            borderRadius: '16px',
            boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
            p: 4,
          }}
        >
          <form onSubmit={handleSubmit} noValidate>
            <Grid container spacing={2}>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  error={Boolean(errors.name)}
                  helperText={errors.name}
                  variant="outlined"
                  required
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  error={Boolean(errors.email)}
                  helperText={errors.email}
                  variant="outlined"
                  required
                  type="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  error={Boolean(errors.message)}
                  helperText={errors.message}
                  variant="outlined"
                  required
                  multiline
                  rows={6}
                />
              </Grid>
              {errors.submit && (
                <Grid item xs={12}>
                  <Typography color="error" align="center">
                    {errors.submit}
                  </Typography>
                </Grid>
              )}
              <Grid item xs={12} sx={{ textAlign: 'center', mt: 2 }}>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  disabled={isSubmitting}
                  size="large"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
              </Grid>
            </Grid>
          </form>
        </Card>
        <DemoSection />
      </Container>
    </Box>
  );
};

export default ContactSection;