const express = require('express');
const bodyParser = require('body-parser');
const url = require('url');
const querystring = require('querystring');
const port = 8000;
const app = express();
const dataJSON = require('./data');

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.get('/api/:link', (req, res) => {
    const link = req.query.link.toLowerCase();
    const resArray = [];
    for (let i = 0; i < 20; i++) {
        const str = dataJSON[i]['Наименование эмитента'].toLowerCase();
        const result = str.includes(link);
        if (result) {
            resArray.push(dataJSON[i]);
        }
    }
    res.send(resArray);
})
app.listen(port, function () {
    console.log('Server is listening on port 8080')
});

