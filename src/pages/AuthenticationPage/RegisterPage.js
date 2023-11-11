import { Helmet } from 'react-helmet-async';
// @mui
import { styled } from '@mui/material/styles';
import { Link, Container, Typography, Grid } from '@mui/material';
// sections
import RegisterForm from '../../sections/auth/register';

// ----------------------------------------------------------------------

const StyledRoot = styled('div')(({ theme }) => ({
  [theme.breakpoints.up('md')]: {
    display: 'flex',
  },
}));

const StyledContent = styled('div')(({ theme }) => ({
  maxWidth: 480,
  margin: 'auto',
  minHeight: '100vh',
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  padding: theme.spacing(12, 0),
}));

// ----------------------------------------------------------------------

export default function RegisterPage() {
  return (
    <>
      <Helmet>
        <title> Register | LMS </title>
      </Helmet>

      <StyledRoot>
        <Container maxWidth="sm">
          <StyledContent>
            <Typography variant="h4" gutterBottom>
              Learning Management System | v1.0.0
            </Typography>

            <RegisterForm />

            <Grid container justifyContent="center" mt={3}>
              <Grid item>
                <Link href="/login" variant="subtitle2">
                  Return to Login
                </Link>
              </Grid>
            </Grid>
          </StyledContent>
        </Container>
      </StyledRoot>
    </>
  );
}
