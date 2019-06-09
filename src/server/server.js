import express from 'express';
import path from 'path';
import {client, dbName, collectionName} from './db';

const app = express(),
            DIST_DIR = __dirname,
            HTML_PATH = path.join(DIST_DIR, '../src/views/');
var collection;
app.set('views', HTML_PATH);
app.use(express.static(path.join(__dirname, '/../src/views')));
app.set('view engine', 'pug');

app.get('/abc', (req, res) => {
    res.render('index')
});

app.get('/', async (req, res) => {
    res.render('index')
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {

    client.connect(err => {
        if (err) {
            throw err;
        }
        collection = client.db(dbName).collection(collectionName);
    });

    console.log(`App listening to ${PORT}....`)
    console.log('Press Ctrl+C to quit.')
});
