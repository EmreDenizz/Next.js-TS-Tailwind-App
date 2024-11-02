'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

import { 
  Container, 
  Typography, 
  TextField, 
  Checkbox, 
  FormControlLabel, 
  Button, 
  Grid, 
  Box 
} from '@mui/material';

export default function MuiPage() {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  const router = useRouter();

  const goToDashboard = () => {
    router.push('/dashboard');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    console.log({ name, email, isChecked });
  };

  return (
    <Container maxWidth="sm">
      <Box 
        component="form" 
        onSubmit={handleSubmit} 
        sx={{ 
          mt: 5, 
          p: 4, 
          border: '2px solid #ddd', 
          borderRadius: 2, 
          backgroundColor: '#f5f5f5' 
        }}
      >
        <Typography variant="h4" gutterBottom align="center" sx={{ color: '#333' }}>
          Material UI Form
        </Typography>

        <Grid container spacing={3}>
          <Grid item xs={12}>
            <TextField
              label="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              variant="outlined"
              fullWidth
              required
              InputLabelProps={{ style: { color: '#555' } }}
              sx={{ 
                backgroundColor: '#fff', 
                borderRadius: '5px', 
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: '#ccc',
                  },
                  '&:hover fieldset': {
                    borderColor: '#333',
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: '#1976d2',
                  },
                },
              }}
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              label="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              variant="outlined"
              fullWidth
              required
              InputLabelProps={{ style: { color: '#555' } }}
              sx={{ 
                backgroundColor: '#fff', 
                borderRadius: '5px', 
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: '#ccc',
                  },
                  '&:hover fieldset': {
                    borderColor: '#333',
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: '#1976d2',
                  },
                },
              }}
            />
          </Grid>

          <Grid item xs={12}>
            <FormControlLabel
              control={
                <Checkbox 
                  checked={isChecked} 
                  onChange={(e) => setIsChecked(e.target.checked)} 
                  sx={{ 
                    color: '#1976d2', 
                    '&.Mui-checked': {
                      color: '#1976d2',
                    }
                  }}
                />
              }
              label="I agree to the terms and conditions"
              sx={{ color: '#333' }}
            />
          </Grid>

          <Grid item xs={12}>
            <Button 
              type="submit" 
              variant="contained" 
              color="primary" 
              fullWidth
              sx={{ 
                padding: '10px 0', 
                fontSize: '16px', 
                backgroundColor: '#1976d2', 
                '&:hover': {
                  backgroundColor: '#125ea2',
                }
              }}
            >
              Submit
            </Button>
          </Grid>
        </Grid>
      </Box>

      <button
        type="button"
        onClick={goToDashboard}
        className="w-full mt-2 bg-green-600 text-white py-2 rounded-md hover:bg-green-700 font-bold"
      >
        Go to Dashboard
      </button>

      {isSubmitted && 
        <>
          <br/><br/>
          Submitted Data
          <p>Name: {name}</p>
          <p>Email: {email}</p>
          <p>Checked: {isChecked.toString()}</p>
        </>
      }
      
    </Container>
  );
}
