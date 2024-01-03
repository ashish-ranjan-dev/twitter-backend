import dotenv from 'dotenv';
dotenv.config();

const MongoDBURI = process.env.MongoDBURI;

export { MongoDBURI };