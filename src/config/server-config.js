import dotenv from 'dotenv';
dotenv.config();

const MongoDBURI = process.env.MongoDBURI;
const JWT_SECRET =  process.env.JWT_SECRET;


export { MongoDBURI,JWT_SECRET };