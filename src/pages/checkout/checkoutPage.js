import { Paper, Step, StepLabel, Stepper, Typography } from '@material-ui/core';
import React, { useState } from 'react';
import "../css/style.css";

import AddressForm from "./addressForm";
import Confirmation from './confirmation';
import PaymentForm from "./paymentForm";

const steps = ['Shipping address', 'Payment details'];

function Checkout() {
    const [activeStep, setActiveStep] = useState(0);

    const Form = ()=> activeStep === 0 ? <AddressForm /> : <PaymentForm />
    return (
        <div>
            <main>
                <Paper>
                    <Typography variant="h4" align="center" >Checkout</Typography>
                    <Stepper activeStep={activeStep} >
                        {steps.map((step)=> (
                            <Step key={step}>
                                <StepLabel>{step}</StepLabel>
                            </Step>
                        ))}
                    </Stepper>
                    {activeStep === steps.length ? <Confirmation /> : <Form />}
                </Paper>
            </main>
        </div>
    )
}

export default Checkout
