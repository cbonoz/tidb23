import {config} from 'dotenv';
config();

import { createBabyNames } from "./generate";

const gender = 'female'
const attributes = ['strong', 'outgoing', 'kind']
// Example description for a baby/child
const description = 'She is a good student and loves to play sports. She is a good friend to everyone and is always willing to support others';
const lastName = 'Smith'


async function generate() {

    const names = await createBabyNames(
        gender, description, lastName, attributes
    )
    console.log('names', names)
}

generate()