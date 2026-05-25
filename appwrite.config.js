import { Client, Databases, Storage } from 'appwrite';

const client = new Client();

client
    .setEndpoint('https://cloud.appwrite.io/v1') 
    .setProject('6a0bd3c70007637f5038');


export const databases = new Databases(client);
export const storage = new Storage(client);
export default client;
