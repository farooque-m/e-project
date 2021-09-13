import { Grid, Typography } from '@material-ui/core';
import React from 'react'
import { FormProvider, useForm } from 'react-hook-form'

function AddressForm() {
    const methods = useForm();

    return (
        <div>
               <Typography variant="h6" gutterBottom>Shipping Address</Typography>
               <FormProvider {...methods}>
                   <form onSubmit={' '}>
                       <Grid container spacing={3}>

                       </Grid>
                   </form>
                   </FormProvider>     
        </div>
    )
}

export default AddressForm
