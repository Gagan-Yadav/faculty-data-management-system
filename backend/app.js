const express   = require('express');
    path        = require('path'),
    cors        = require("cors");
    bodyParser  = require('body-parser'),
    app         = express();
    corsOptions = { origin: "*" },
    PORT        = process.env.PORT || 7000;
    
    require("./config/dbConfig");

    app.use(function (req, res, next) {
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
        res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
        res.setHeader('Access-Control-Allow-Credentials', true);
        next();
    });

    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    app.use(cors(corsOptions));

    app.get("/", (req, res) => {
        res.json({ message: "Backend Api is working fine!" });
    });

    // API Registration
    app.use('/api', require("./routes/microservices/microservices"));
    // API Registration
   

    // Path Register
    app.use(express.static(__dirname + './upload'));
    app.use('/upload', express.static(path.join(__dirname, 'upload')))

    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}.`);
    });