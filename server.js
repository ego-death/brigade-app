const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const cors = require('cors');
const app = express();
const PORT = 8000;
const bodyParser = require('body-parser');
const urlencodedParser = bodyParser.urlencoded({extended: false});
app.use(express.json());
app.use(cors());

let db,
dbConnectionStr = 'mongodb+srv://sid:P9LGe4j8TxySEMaS@cluster0.gl88h.mongodb.net/brigade?retryWrites=true&w=majority',
dbName = 'brigade';

MongoClient.connect(dbConnectionStr, { useUnifiedTopology: true })
    .then(client => {
        console.log(`Connected to ${dbName} Database`)
        db = client.db(dbName)
    });

app.get('/', (req, res) => {
    res.send('Welcome to the server!');
});

app.get('/display', (req, res) => {
    db.collection('tenants').find().toArray()
    .then(data => {
        console.log(data);
        res.json(data);
    })
    .catch(err => {
        console.log(err);
    })
});

app.post('/addTenant', urlencodedParser, (req, res) => {
    db.collection('tenants').insertOne(req.body)
    .then(result => {
        res.send('You have successfully entered into the database');
        console.log('added');
    })
    .catch(err => {
        console.log(err);
    })
});

app.listen(process.env.PORT || PORT, (err) => {
    if(err) console.log(err);
    else console.log('Server is running')
});