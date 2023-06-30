export type Gender = 'male' | 'female';

export interface NamingForm {
    lastName?: string;
    description?: string;
    attributes?: Array<string>;
    gender?: Gender;
}

export interface NameResult {
    name: string;
    match_score: string;
    reason: string;
}
