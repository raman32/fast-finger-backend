const express = require('express')
const app = express()
require('dotenv').config();
const port = process.env.PORT


// Import Routers
const userRouter = require('./routes/user');
const gameRouter = require('./routes/game');
const wordRouter = require('./routes/word');

// Add Middlewares
app.use(express.json());


// Use Routers
app.use("/user",userRouter)
app.use("/word",wordRouter)
app.use("/game",gameRouter)

app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on ${port} port!`))