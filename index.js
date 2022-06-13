const express = require('express')
const app = express()
const cors = require('cors');
const bodyParser = require('body-parser')
const routes = require('./router/router');
const db = require('./db')
const data1 = "mongodb://prathapDB:prathapDB@docdb-2022-06-13-06-48-15.cluster-cvkidzgdqwpg.us-west-2.docdb.amazonaws.com:27017/?ssl=true&replicaSet=rs0&readPreference=secondaryPreferred&retryWrites=false"
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

    // Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyAOW86T71DRcdhQBZGvjBBb-r959eE37YE",
//   authDomain: "taghive-2477d.firebaseapp.com",
//   projectId: "taghive-2477d",
//   storageBucket: "taghive-2477d.appspot.com",
//   messagingSenderId: "1083774669884",
//   appId: "1:1083774669884:web:25ea49e2e67ec359839f39",
//   measurementId: "G-65KFK3YLGR"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);