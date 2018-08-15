const functions = require('firebase-functions');
const app = require('express')();

app.get('/api/ray', (req, res) => {
});

exports.app = functions.https.onRequest(app);