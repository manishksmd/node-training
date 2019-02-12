let CustomerModel = require('../models/customer.model');
let express = require('express');
let router = express.Router();

// Create a new customer - POST API
router.post('/customer', (req, res) => {
    // save logic req.body
    console.log(req.body)
    if (Object.keys(req.body).length === 0) {
        return res.status(400).send('Request body is missing!');
    }

    // let user = {
    //     name: "first / last name",
    //     email: "name@gmail.com"
    // }

    let model = new CustomerModel(req.body);
    model.save()
    .then(doc => {
        if (!doc || doc.length === 0) {
            return res.status(500).send(doc);
        }
        res.status(201).send(doc);
    })
    .catch(err => {
        res.status(500).json(err);
    });
});

module.exports = router;
