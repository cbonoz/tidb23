import { NameResult, NamingForm } from "@/model";
import { isEmpty } from "@/util";
import { BASE_URL } from "@/util/constants";
import axios from "axios";

const axiosInstance = axios.create({
    baseURL: BASE_URL
});

export const EXAMPLE_NAMES: Array<NameResult> = [
    { "name": "Ethan", "match_score": "85", "reason": "Ethan is a strong name that means 'firm' or 'strong-willed'. It is also a popular name for boys, indicating that it is well-liked and well-received by others. Additionally, it has a modern sound that matches well with the character's description." },
    { "name": "Alexander", "match_score": "80", "reason": "Alexander is a smart name that means 'defender of the people'. It has a classic feel to it, suggesting a timelessness and sophistication that is fitting for a strong and intelligent character. Additionally, it has many potential nicknames, such as Alex or Xander, which provide options for personalization and familiarity." },
    { "name": "Benjamin", "match_score": "75", "reason": "Benjamin is a kind name that means 'son of the right hand'. It has a gentle sound to it, indicating warmth and amiability that aligns well with the character's attributes. Additionally, it is a popular name that has a long history, suggesting a sense of tradition and stability that may resonate with parents who value those qualities." }
]

export const generateNames = (data: NamingForm) => {
    const body = {
        ...data
    }
    console.log('generateNames', body)
    return axiosInstance.post('/dev/names', body)
}

export const validateData = (data: NamingForm): string | null => {
    // Valid each of the fields in the data returning an appropriate message for each field if blank
    const missingFields = []
    if (isEmpty(data.attributes)){
        missingFields.push('attributes')
    } 
    if (isEmpty(data.description)){
        missingFields.push('description')
    } 
    if (isEmpty(data.gender)) {
        missingFields.push('gender')
    } 
    if (isEmpty(data.lastName)) {
        missingFields.push('lastName')
    }

    if (missingFields.length > 0) {
        return `Please fill in the following fields: ${missingFields.join(', ')}`
    }


    return null;
}