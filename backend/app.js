const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());
const bodyParser = require('body-parser');
app.use(bodyParser.json());
const mongoose = require('mongoose');

// Set up connection to database
const url = 'mongodb://127.0.0.1:27017/cs242project';

mongoose.connect(url, { useNewUrlParser: true });
const connection = mongoose.connection;

connection.once('open', function() {
    console.log('MongoDB database connection established successfully');
});

const server = app.listen(3000, '0.0.0.0',() => {
    const { address, port } = server.address();
    console.log(`Listening at http://${address}:${port}`);
});

// Set up routes
const router = require('express').Router();
let Charity = require('./models/charity');
let User = require('./models/user');

// Get all user data
router.route('/users').get((req, res) => {
    User.find(function(err, users) {
        if (err) {
            console.log(err);
        } else {
            res.json(users);
        }
    });
});

// Get all activities
router.route('/activities').get((req, res) => {
    User.aggregate([{
        '$project': {
            '_id': 0,
            'name': 1,
            'donationRecords': 1
        }
    },
        {
            '$unwind': '$donationRecords'
        },
        {
            '$sort': {'donationId': -1}
        }], function(err, activities){
            if (err) {
                console.log(err);
            } else {
                res.json(activities);
            }
        });
});

// Get all charity data
router.route('/').get((req, res) => {
    Charity.find(function(err, charities) {
        if (err) {
            console.log(err);
        } else {
            res.json(charities);
        }
    });
});

// Get hunger charities
router.route('/Multi-Purpose').get((req, res) => {
    Charity.find(function(err, charities) {
        if (err) {
            console.log(err);
        } else {
            let hungerCharities = charities.filter(charities => charities.type === 'Multi-Purpose');
            res.json(hungerCharities);
        }
    });
});

// Get Education charities
router.route('/Hunger').get((req, res) => {
    Charity.find(function(err, charities) {
        if (err) {
            console.log(err);
        } else {
            let educationCharities = charities.filter(charities => charities.type === 'Hunger');
            res.json(educationCharities);
        }
    });
});

// Get Children charities
router.route('/Medical').get((req, res) => {
    Charity.find(function(err, charities) {
        if (err) {
            console.log(err);
        } else {
            let childrenCharities = charities.filter(charities => charities.type === 'Medical');
            res.json(childrenCharities);
        }
    });
});

// Get Children charities
router.route('/Disability').get((req, res) => {
    Charity.find(function(err, charities) {
        if (err) {
            console.log(err);
        } else {
            let childrenCharities = charities.filter(charities => charities.type === 'Disability');
            res.json(childrenCharities);
        }
    });
});

// Get Children charities
router.route('/Reproductive-Health').get((req, res) => {
    Charity.find(function(err, charities) {
        if (err) {
            console.log(err);
        } else {
            let childrenCharities = charities.filter(charities => charities.type === 'Reproductive-Health');
            res.json(childrenCharities);
        }
    });
});

// Get Children charities
router.route('/Mental-Health').get((req, res) => {
    Charity.find(function(err, charities) {
        if (err) {
            console.log(err);
        } else {
            let childrenCharities = charities.filter(charities => charities.type === 'Mental-Health');
            res.json(childrenCharities);
        }
    });
});

// Get Children charities
router.route('/LGBTQ').get((req, res) => {
    Charity.find(function(err, charities) {
        if (err) {
            console.log(err);
        } else {
            let childrenCharities = charities.filter(charities => charities.type === 'LGBTQ');
            res.json(childrenCharities);
        }
    });
});

// Get Children charities
router.route('/Civil-Rights').get((req, res) => {
    Charity.find(function(err, charities) {
        if (err) {
            console.log(err);
        } else {
            let childrenCharities = charities.filter(charities => charities.type === 'Civil-Rights');
            res.json(childrenCharities);
        }
    });
});

// Get Children charities
router.route('/Education').get((req, res) => {
    Charity.find(function(err, charities) {
        if (err) {
            console.log(err);
        } else {
            let childrenCharities = charities.filter(charities => charities.type === 'Education');
            res.json(childrenCharities);
        }
    });
});

// Get Children charities
router.route('/Children').get((req, res) => {
    Charity.find(function(err, charities) {
        if (err) {
            console.log(err);
        } else {
            let childrenCharities = charities.filter(charities => charities.type === 'Children');
            res.json(childrenCharities);
        }
    });
});

// Get Children charities
router.route('/Animals').get((req, res) => {
    Charity.find(function(err, charities) {
        if (err) {
            console.log(err);
        } else {
            let childrenCharities = charities.filter(charities => charities.type === 'Animals');
            res.json(childrenCharities);
        }
    });
});

// Get Children charities
router.route('/Environment').get((req, res) => {
    Charity.find(function(err, charities) {
        if (err) {
            console.log(err);
        } else {
            let childrenCharities = charities.filter(charities => charities.type === 'Environment');
            res.json(childrenCharities);
        }
    });
});

// Get Children charities
router.route('/Disaster-Relief').get((req, res) => {
    Charity.find(function(err, charities) {
        if (err) {
            console.log(err);
        } else {
            let childrenCharities = charities.filter(charities => charities.type === 'Disaster-Relief');
            res.json(childrenCharities);
        }
    });
});

// Get Children charities
router.route('/Human-Rights').get((req, res) => {
    Charity.find(function(err, charities) {
        if (err) {
            console.log(err);
        } else {
            let childrenCharities = charities.filter(charities => charities.type === 'Human-Rights');
            res.json(childrenCharities);
        }
    });
});

// Get Children charities
router.route('/Homelessness').get((req, res) => {
    Charity.find(function(err, charities) {
        if (err) {
            console.log(err);
        } else {
            let childrenCharities = charities.filter(charities => charities.type === 'Homelessness');
            res.json(childrenCharities);
        }
    });
});

app.use(router);

