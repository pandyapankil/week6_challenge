import express from 'express';
import path from 'path';
import {client, dbName, collectionName} from './db';
import bodyParser from 'body-parser';
import crypto from 'crypto';

const app = express(),
            DIST_DIR = __dirname,
            HTML_PATH = path.join(DIST_DIR, '../src/views/');
var collection;
app.set('views', HTML_PATH);
app.use(express.static(path.join(__dirname, '/../src/views')));
app.set('view engine', 'pug');
// app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', async (req, res) => {
    res.render('index')
});

app.post('/initial_submit', async (req, res) => {
    const email = req.body.email;
    const applicant_id = crypto.createHash('md5').update(email + 'some_string').digest("hex");
    const applicant_info = (await collection.find({ 'applicant_id': applicant_id }).toArray())[0];
    if (applicant_info) {
        // update
        const difference = Date.now() - applicant_info.last_time;
        const daysDifference = Math.floor(difference/1000/60/60/24);
        console.log(daysDifference);
        if (daysDifference > 179) {
            await collection.updateOne({'applicant_id': applicant_id}, {
                $set: {
                    'status': 'initial_submit',
                    'last_time': Date.now(),
                    'apply_count': applicant_info.apply_count + 1
                }
            });
        }
    } else {
        // add
        await collection.insertOne({
            'applicant_id': applicant_id,
            'name': req.body.name,
            'email_id': email,
            'status': 'initial_submit',
            'last_time': Date.now(),
            'challenge_time': null,
            'challenge_start_time': null,
            'score': null,
            'apply_count': 1
        });
    }
    res.send("OK");
});

app.post('/challenge_start', async (req, res) => {
    const email = req.body.userEmail;
    const applicant_id = crypto.createHash('md5').update(email + 'some_string').digest("hex");
    const applicant_info = (await collection.find({ 'applicant_id': applicant_id }).toArray())[0];
    await collection.updateOne({'applicant_id': applicant_id}, {
        $set: {
            'status': 'started_challenge',
            'last_time': Date.now(),
            'challenge_start_time': Date.now()
        }
    });
});

app.post('/challenge_submit', async (req, res) => {
    const body = req.body.body;
    const email = body.user.userDefinedEmail;
    const applicant_id = crypto.createHash('md5').update(email + 'some_string').digest("hex");
    const score = body.grade.scoreInPoints;
    const applicant_info = (await collection.find({ 'applicant_id': applicant_id }).toArray())[0];
    let status = 'attempted_challenge';
    let challenge_time = null;
    if (applicant_info.status == 'initial_submit' || applicant_info.score < score) {
        if (score == 100) {
            status = 'passed_challenge';
            challenge_time = Date.now() - applicant_info.challenge_start_time;
        }
        await collection.updateOne({'applicant_id': applicant_id}, {
            $set: {
                'status': status,
                'last_time': Date.now(),
                'challenge_time': challenge_time,
                'score': score
            }
        });
    }
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
