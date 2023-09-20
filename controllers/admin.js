

const index = (req , res)=>{
    res.render ('pages/admin/pages/index')
}

const viewLogin = (req, res)=>{
    res.render('pages/admin/pages/login',{layout: 'pages/admin/layouts/alt'})
}
module.exports = {
    index,
    viewLogin
}