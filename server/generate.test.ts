import { createBabyNamePrompt, createBabyNames } from "./generate";

const gender = 'male'
const attributes = ['strong', 'smart', 'kind']
// Example description for a baby/child
const description = 'A child who is strong, smart, and kind. He is a good student and loves to play sports. He is a good friend to everyone and is always willing to support others';
const lastName = 'Smith'

describe('generate', () => {
    it('generate prompt', () => {
        // Test prompt generation function
        const prompt = createBabyNamePrompt(gender, description, lastName, attributes)
        expect(prompt).toContain('Gender');
        expect(prompt).toContain('Description');
        expect(prompt).toContain('Last name');
        expect(prompt).toContain('Attributes');
    });

    it('generate names', async () => {
        const nameResponse = await createBabyNames(gender, description, lastName, attributes)
        console.log('createBabyNames', nameResponse)
        if (!nameResponse) {
            throw Error('No names returned')
        }
        const names = nameResponse.names;
        expect(names.length).toBe(3);
    });

});