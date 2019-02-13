let CustomerModel = require('../models/customer.model');
let express = require('express');
let router = express.Router();

// Create a new customer - POST API
router.post('/customer', (req, res) => {
    // save logic req.body
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

// Get Customer Get API
router.get('/customer', (req, res) => {
    
    CustomerModel.findOne({
        email: req.query.email
    })
    .then(doc => {
        res.status(201).send(doc);
    })
    .catch(err => {
        res.status(500).json(err);
    });
});

// Update Customer - put
router.put('/customer', (req, res) => {
    // save logic req.body
    if (Object.keys(req.body).length === 0) {
        return res.status(400).send('Request body is missing!');
    }

    CustomerModel.findOneAndUpdate({
        email: req.query.email
    }, req.body, {new:true})
    .then(doc => {        
        res.status(201).send(doc);
    })
    .catch(err => {
        res.status(500).json(err);
    });
});

// Delete a customer - delete api
router.delete('/customer', (req, res) => {
    CustomerModel.findOneAndUpdate({
        email: req.query.email
    })
    .then(doc => {        
        res.status(201).send(doc);
    })
    .catch(err => {
        res.status(500).json(err);
    });
});

module.exports = router;
