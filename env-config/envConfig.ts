//
//
import { config } from 'dotenv';
config()

export const configValues = {

//Setup base url
baseURL: process.env.BASE_URL || '',

//setup valid creds
validCreds: process.env.VALID_USERNAME || '',
validPass: process.env.VALID_PASSWORD || '',

//setup invalid creds
invalidCreds: process.env.INVALID_USERNAME || '',
invalidPass: process.env.INVALID_PASSWORD || '',

//setup locked creds
lockedCreds: process.env.LOCKED_USERNAME || '',
lockedPass: process.env.LOCKED_PASSWORD|| ''
}