import dotenv from 'dotenv';
dotenv.config();

export const API_KEY: string | undefined= process.env.OPEN_AI_API_KEY; 
export const IP_GEOLATION_API_KEY: string | undefined= process.env.IP_GEOLATION_API_KEY;
export const NODE_ENV: string | undefined= process.env.NODE_ENV;
export const SERVER_PORT: number  = Number(process.env.SERVER_PORT);
export const PORT: string | number | undefined = process.env.PORT;
export const HOST: string | undefined= process.env.HOST; 
export const NODE_MAILER_USERNAME: string | undefined= process.env.NODE_MAILER_USERNAME;
export const PASSWORD: string | undefined= process.env.PASSWORD;
export const EMAIL: string = 'aroniumaurora@gmail.com';
export const UPDATE_TIME: number = Number(process.env.UPDATE_TIME);
export const MAX_DB_LENGTH: number = Number(process.env.MAX_DB_LENGTH);
