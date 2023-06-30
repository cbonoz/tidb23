
export const STRIPE_KEY = process.env.STRIPE_KEY as string;
export const OPEN_API_KEY = process.env.OPEN_API_KEY as string;
export const DB_HOST = process.env.DB_HOST as string;
export const DB_NAME = process.env.DB_NAME || 'babynames' as string;
export const DB_USER = process.env.DB_USER as string;
export const DB_PASSWORD = process.env.DB_PASSWORD as string;



export const AMOUNT = 1.99
export const CURRENCY = 'usd'

// export const AI_MODEL = 'text-davinci-003'
export const AI_MODEL = 'gpt-3.5-turbo'

export const EXAMPLE_NAMES = [
    { "name": "Ethan", "match_score": "85%", "reason": "Ethan is a strong name that means 'firm' or 'strong-willed'. It is also a popular name for boys, indicating that it is well-liked and well-received by others. Additionally, it has a modern sound that matches well with the character's description." },
    { "name": "Alexander", "match_score": "80%", "reason": "Alexander is a smart name that means 'defender of the people'. It has a classic feel to it, suggesting a timelessness and sophistication that is fitting for a strong and intelligent character. Additionally, it has many potential nicknames, such as Alex or Xander, which provide options for personalization and familiarity." },
    { "name": "Benjamin", "match_score": "75%", "reason": "Benjamin is a kind name that means 'son of the right hand'. It has a gentle sound to it, indicating warmth and amiability that aligns well with the character's attributes. Additionally, it is a popular name that has a long history, suggesting a sense of tradition and stability that may resonate with parents who value those qualities." }
]

export const EXAMPLE_RESPONSE = {
    'data': {
        'choices': [{
            'text': JSON.stringify(EXAMPLE_NAMES),
        }
        ]
    }
}