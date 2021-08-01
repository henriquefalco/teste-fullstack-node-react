const express = require('express');
const server = express();
const db = require('./src/models/index')
const cors = require('cors')

var corsOptions = {
    origin: 'http://localhost:3000'
}

//Sync database
db.sequelize.sync({ force: true }).then(() => {
    console.log("Dropped and recreated database!");
});

server.use(cors(corsOptions))
server.use(express.json())
server.use(express.urlencoded({ extended: true }))

server.post('/veiculo', (req, res, next) => {
    next()
})

require('./src/routes')(server)

server.get('/', (req, res) => {
    console.log('Time: ', Date.now());
    res.json({ message: "Welcome to vehicle api!" });
})

server.listen(4000, () => {
    console.log(`Server is running on port :4000.`);
});
