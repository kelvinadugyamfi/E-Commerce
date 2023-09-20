const express = require('express')
const dotEnv = require ('dotenv')
const ejs = require('ejs')
const expressLayout = require('express-ejs-layouts')
const {adminRoute, frontendRoute} = require ('./routes')


// configure env
dotEnv.config()

const port = process.env.PORT || 1111

const app = express()

// serving static file
app.use(express.static(__dirname+'/public'))

// setting view engine  and express ejs layouts
app.set('view engine', 'ejs')
app.use(expressLayout)

// setting up the layout master
app.set('layout', 'pages/admin/layouts/master')


// Admin Route
app.use('/admin', adminRoute)

// User Route
// app.use ('/', frontendRoute)

// app.use('*',(req, res)=>{
//  res.send('worked')
// })

app.listen(port, (req, res) => {
    console.log(`server connected on http://localhost:${port}`)
})
