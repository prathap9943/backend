const express = require('express')
const app = express()
const cors = require('cors');
const bodyParser = require('body-parser')
const routes = require('./router/router');
const db = require('./db')
const data1 = "mongodb://localhost:27017/eveit?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false"
db.connect(data1)
const corsOptions = {
    origin: (origin, callback) => {
        callback(null, true);
    },
    credentials: true,
};

app.use(cors({origin: true, credentials: true}));
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: false, limit: '500mb' }));

app.use('/', routes);

app.set('port', 3002);
    app.listen(app.get('port'), () => {
        console.log(
            `Backend is running with environment 3002`
        );
    });