const bodyParser = require("body-parser");
const server = require('express')({});

server.use(bodyParser.urlencoded());
server.use(bodyParser.json());

server.post('/calculate', (req, res) => {
    if (!req.body.finalPayment) req.body.finalPayment = 0;
    if (!(req.body.interestRate && req.body.downPayment && req.body.monthNum)) {
        res.status(500).json({"message": "missing data"});
    }

    const {
        interestRate,
        downPayment,
        finalPayment,
        monthNum
    } = req.body;

    const monthlyRate = (100 + interestRate - downPayment - finalPayment) / monthNum;
    res.status(200).json({monthlyRate})
});

server.listen(2800);