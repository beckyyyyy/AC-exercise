//載入套件、檔案
const express = require('express')
const app = express()
const exphbs = require('express-handlebars')
const restaurant_list = require('./restaurant.json')

const port = 3000
// 設定設定模板引擎
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

//設定路由提供靜態檔案
app.use(express.static('public'))

//設定路由：首頁
app.get('/', (req, res) => {
    res.render('index', { restaurants: restaurant_list.results })
})
//設定路由：搜尋功能
app.get('/search', (req, res) => {
    const keyword = req.query.keyword
    const searchRestaurant = restaurant_list.results.filter((item) => {
        return item.name.toLowerCase().trim().includes(keyword.toLowerCase().trim())
    })
    res.render('index', { restaurants: searchRestaurant, keyword: keyword })
})
//設定路由：餐廳的詳細介紹
app.get('/restaurants/:restaurant_id', (req, res) => {
    const restaurantId = req.params.restaurant_id
    const restaurant = restaurant_list.results.find(item => item.id.toString() === restaurantId)
    res.render('show', { restaurant: restaurant })
})

//啟動路由
app.listen(port, () => {
    console.log(`網址是http://localhost:${port}/`)
})