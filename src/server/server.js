import express from 'express';
import path from 'path';

const app = express(),
            DIST_DIR = __dirname,
            HTML_PATH = path.join(DIST_DIR, '../src/views/');

console.log('here', HTML_PATH);

app.set('views', HTML_PATH);
app.set('view engine', 'pug');

app.get('/abc', (req, res) => {
    res.render('index')
});

app.get('/', (req, res) => {
    res.render('index')
});

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log(`App listening to ${PORT}....`)
    console.log('Press Ctrl+C to quit.')
})
