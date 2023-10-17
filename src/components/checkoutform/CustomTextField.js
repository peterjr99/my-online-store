import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import {  Grid, TextField } from '@mui/material';

function FormInput({label, name, required}) {
  const { control } = useForm();
  const isError = false;
  

  return (
    <Grid item xs={12} sm={6}>
    <Controller
      render={({field}) => (
         <TextField
         {...field}
         label={label}
         name={name}
         fullWidth
         required={required}
         error={isError}
         


         />
      
      )}
      name=''
      control={control}
      
      
      
    />
    
    </Grid>
  );
}

export default FormInput;



