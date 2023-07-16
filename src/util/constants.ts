import { NamingForm } from "@/model";


export const PITCH = `Choosing the right baby name is important because it can have a significant impact on a person's future success. Studies have shown that people often make assumptions about others based on their name alone, and these assumptions can influence everything from job prospects to social relationships. A name that is easy to pronounce and memorable can help a person make a positive impression and stand out from the crowd, while a name that is difficult to spell or pronounce may lead to misunderstandings and missed opportunities. Additionally, a name can play a role in shaping a person's identity and self-esteem, so choosing a name that reflects positive traits and values can help set a child up for a successful future.`
export const GITHUB_LINK = 'https://github.com/cbonoz/tidb23'

export const BASE_URL = process.env.NEXT_PUBLIC_SERVER_URL || '' as string;
if (!BASE_URL) {
    throw new Error('NEXT_PUBLIC_SERVER_URL is not defined')
}

export const STRIPE_PUBLISHABLE_KEY = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || '' as string



export const DEFAULT_FORM: NamingForm = {
    lastName: '',
    attributes: [],
    description: '',
}