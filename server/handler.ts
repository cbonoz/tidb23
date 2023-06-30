// const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

import { Stripe } from 'stripe';
import { AMOUNT, CURRENCY, STRIPE_KEY } from './constants';
import { createBabyNames } from './generate';

let stripe = new Stripe(STRIPE_KEY, {
  apiVersion: '2022-11-15',
});


exports.handler = async (event: any, context: any) => {
  const { source, gender, lastName, description, attributes } = JSON.parse(event.body);

  try {
    const babyNameResponse = await createBabyNames(gender, description, lastName, attributes);
    console.log('response', babyNameResponse)
    
    // const charge = await stripe.charges.create({
    //   amount: AMOUNT,
    //   currency: CURRENCY,
    //   source
    // });

    return {
      statusCode: 200,
      body: JSON.stringify({ data: babyNameResponse }),
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Credentials': true,
      },
    };
  } catch (err: any) {
    console.log('error', err)
    return {
      statusCode: 500,
      body: JSON.stringify({ error: err.message }),
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Credentials': true,
      },
    };
  }
};