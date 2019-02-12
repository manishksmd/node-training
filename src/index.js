let express = require('express');

let app = express(); // Create an express application
let personRoute = require('./routes/person');
let customerRoute = require('./routes/customer');
let path = require('path');
let bodyParser = require('body-parser');

app.use(bodyParser.json()); // Now we have access to req.body
app.use(personRoute); // Tell express to register the route
app.use(customerRoute);
app.use(express.static('public'));
app.use((req, res, next) => {
    // res.send(`${new Date().toString()} => ${req.originalUrl}`);
    console.log(`${new Date().toString()} => ${req.originalUrl} ${req.body}`);
    next();
});

// Error Handling

// 404 - Not found error
app.use((req, res, next) => {
    res.status(404).send('We think you are lost.');
    next();
});

// 500 - Internal server error
app.use((err, req, res, next) => {
    console.log(err.stack);
    res.sendFile(path.join(__dirname, '../public/500.html'));
    next();
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.info(`Server has started on ${PORT}`));
