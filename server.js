// Loading Dependencies
// ====================================================
const app    = require('express')()
const morgan = require('morgan')
const path   = require('path')


// Using Dependencies
// ====================================================
app.use(morgan('dev'))



// Routes
// ====================================================
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/pages/index.html'))
})

app.get('/1', (req, res) => {
    res.sendFile(path.join(__dirname + '/pages/about.html'))
})


// Server Listener
// ====================================================
app.listen((process.env.PORT || 5000), (err) => {
    if(err){ throw err }
    console.log(" ================================== \n Server Running... \n ")
})



