import React from 'react'
import PaypalExpressBtn from 'react-paypal-express-checkout'

function Paypal(props) {
    const onSuccess = (payment) => {
        props.onSuccess(payment);
    }

    const onCancel = (data) => {
        props.onCancel(data);
    }

    const onError = (err) => {
        props.onError(err);
    }

    let env = 'sandbox';
    let currency = 'USD';
    let total = props.toPay;

    const client = {
        sandbox:    'ARaiSVctw7Bhs7_bnp4zXuPN-qFwT7NQWus6G4ttFN9AQa2V-1dEYNZOdhIXnYSR2FdjILUobvtHWBRC',
        production: '',
    }

    return (
        <div>
            <PaypalExpressBtn
                env={env} 
                client={client}
                currency={currency} 
                total={total} 
                onError={onError} 
                onSuccess={onSuccess} 
                onCancel={onCancel}
                style={{
                    size: 'large',
                    color: 'blue',
                    shape: 'pill',
                    label: 'checkout'
                }}
            />
        </div>
    )
}

export default Paypal
