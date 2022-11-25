// 設定伺服器相關
const express = require('express')
const app = express()
const port = 3000

//設定express-handlebars相關
const exhbs = require('express-handlebars')

app.use(express.static('public'))

app.engine('handlebars', exhbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

app.get('/', (req, res) => {
    res.render('index')
})
app.get('/:title_name', (req, res) => {
    const titleName = req.params.title_name
    res.render('page', { title: titleName })
})

app.listen(port, () => {
    console.log('success!')
})