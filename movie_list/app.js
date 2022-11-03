// require express套件
const express = require('express')
const app = express()
const port = 3000
const movieList = require('./movies.json')

//require express-handlebars套件
const exphbs = require('express-handlebars')
const { query } = require('express')
//透過這個方法來定義要使用的樣板引擎
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
//透過這個方法告訴 Express 說要設定的 view engine 是 handlebars
app.set('view engine', 'handlebars')

// 設定 Express 路由以提供靜態檔案
app.use(express.static('public'))

app.get('/', (req, res) => {

    res.render('index', { movies: movieList.results })

    // res.send(`Success`)
})

// 點擊電影進入詳細資訊頁
app.get('/movies/:movie_id', (req, res) => {
    console.log(req.params.movie_id)
    const movieId = req.params.movie_id
    const movie = movieList.results.find(item => item.id.toString() === movieId)
    res.render('show', { movie: movie })
})

// search bar功能
app.get('/search', (req, res) => {
    const keyword = req.query.keyword
    const movies = movieList.results.filter((item) => {
        return item.title.toLowerCase().includes(keyword.toLowerCase())
    })
    console.log(movies)
    res.render('index', { movies: movies, keyword: keyword })
})

app.listen(port, () => {
    console.log(`success! and the address is http://localhost:${port}`)
})