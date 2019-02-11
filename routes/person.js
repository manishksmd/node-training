let express = require('express');
let route = express.Router();

// Get API
route.get('/person', (req, res) => {
    res.send('You have requested a person.');
});

// Request parameter
// http:localhost:3000/person/manish
route.get('/person/:name', (req, res) => {
    res.send(`You have reqested a person ${req.params.name}`);
});

// Query string
// http:localhost:3000?name=manish&age=20
route.get('/', (req, res) => {
    if(req.query.name) {
        res.send(`You have reqested a person ${req.query.name}`)
    } else {
        res.send(`You have reqested a person`);
    }    
});

route.get('/error', (req, res) => {
    throw new Error('This is a forced error');
})

module.exports = route;
