const express = require('express');
const cors = require('cors');
const app = express();
const dataProcess = require('./api/dataProcesses');

app.use(cors())

app.get('/', (req, res) => {
    res.send('Simple API');
});

app.get('/api/getall', (req, res) => {
    dataProcess.getAll()
    .then((fromResolve) => {
        res.json(fromResolve);
    })
    .catch((fromReject) => {
        res.send(fromReject);
    })
})

app.get('/api/getone/:id', (req, res) => {
    dataProcess.searchById(req.params.id)
    .then((fromResolve) => {
        res.json(fromResolve);
    })
    .catch((fromReject) => {
        res.send(fromReject);
    })
})

app.listen(process.env.PORT || 3000, () => {
    console.log('Example app listening on port 3000!')
});