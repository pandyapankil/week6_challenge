import express from 'express';
import path from 'path';

const app = express(),
            DIST_DIR = __dirname,
            HTML_PATH = path.join(DIST_DIR, '../src/views/');
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://pankil:pankiladmin@week5cluster-acske.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });
var collection;

app.set('views', HTML_PATH);
app.set('view engine', 'pug');

app.get('/abc', (req, res) => {
    res.render('index')
});

app.get('/', async (req, res) => {
    // res.render('index')
    try {
        const result = await collection.find({}).toArray();
        res.send(result);
    } catch (err) {
        return res.status(500).send(error);
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {

    client.connect((err, result) => {
        if (err) {
            throw err;
        }
        collection = client.db("sample_airbnb").collection("listingsAndReviews");
    });

    console.log(`App listening to ${PORT}....`)
    console.log('Press Ctrl+C to quit.')
});
