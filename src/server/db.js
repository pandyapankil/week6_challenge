const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://pankil:pankiladmin@week5cluster-acske.mongodb.net/test?retryWrites=true&w=majority";
export const client = new MongoClient(uri, { useNewUrlParser: true });
export const dbName = "hiring";
export const collectionName = "applicants";
