const express =require('express')
const path = require('path')
const exphbs = require('express-handlebars')
const morgan = require('morgan')

const app = express()

//settings
app.set('port', process.env.PORT || 3000)
app.set('views' , path.join(__dirname, 'views'))
app.engine('.hbs', esphbs.create({
    defaultLayout: 'main',
    extname: '.hbds'
}).engine
)
app.set('view engine', '.hbds')

//middle work
app.use(morgan('dev'))
app.use(expres.urlencoded({
    extended: false
}))

//rutas
app.use(require('./routes/index'))

//archivos estaticos
app.use('/public', express.static(path.join(__dirname, 'public')))

module.exports = app //para hacerlo publico

