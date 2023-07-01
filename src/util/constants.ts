import { requireEnv } from "./envUtil";


export const PITCH = `Choosing the right baby name is important because it can have a significant impact on a person's future success. Studies have shown that people often make assumptions about others based on their name alone, and these assumptions can influence everything from job prospects to social relationships. A name that is easy to pronounce and memorable can help a person make a positive impression and stand out from the crowd, while a name that is difficult to spell or pronounce may lead to misunderstandings and missed opportunities. Additionally, a name can play a role in shaping a person's identity and self-esteem, so choosing a name that reflects positive traits and values can help set a child up for a successful future.`

export const BASE_URL = requireEnv('NEXT_PUBLIC_SERVER_URL') as string;

export const STRIPE_PUBLISHABLE_KEY = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || '' as string