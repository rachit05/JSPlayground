const express = require('express')
const mustacheExpress = require('mustache-express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const router = require('./routes/routes')

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/ExpresstodoApp').then(function(){
    console.log('Database Connected!')
})

const app = express();
app.use(bodyParser.urlencoded( { extended:true } ))

const mustacheExpressInstance = mustacheExpress()
mustacheExpressInstance.cache = null

app.engine('mustache',mustacheExpressInstance)
app.set('view engine','mustache')
app.set('views' , __dirname + '/views')
app.use(express.static('src'))
app.use('/', router)



app.listen(3000, () => {
    console.log('listening on port 3000')
})