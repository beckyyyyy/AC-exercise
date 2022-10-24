const BASE_URL = 'https://movie-list.alphacamp.io/'
const INDEX_URL = BASE_URL + 'api/v1/movies/'
const POSTER_URL = BASE_URL + 'posters/'

const dataPanel = document.querySelector('#data-panel')

const searchForm = document.querySelector('#search-form')
const searchInput = document.querySelector('#search-input')

const pagination = document.querySelector('#pagination')

const movies = []
let filterMovies = []
const MOVIES_PER_PAGE = 12

function renderMovieList(data) {
    let rawHTML = ''
    data.forEach(item => {
        rawHTML += `
        <div class="col-sm-3">
                <div class="mb-2">
                    <div class="card">
                        <img src="${POSTER_URL + item.image}"
                            class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">${item.title}</h5>
                        </div>
                        <div class="card-footer text-muted">
                            <button type="button" class="btn btn-primary btn-show-movie" data-bs-toggle="modal"
                                data-bs-target="#movie-modal" data-id="${item.id}">
                                More
                            </button>
                            <button type="button" class="btn btn-info btn-add-favorite" 
                            data-id="${item.id}">
                            +
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        `
    })
    dataPanel.innerHTML = rawHTML
}

axios.get(INDEX_URL)
    .then(function (response) {
        movies.push(...response.data.results)
        renderPaginator(movies.length)
        renderMovieList(getMoviesByPage(1))
    })


// 每頁12個電影 顯示點到的頁數對應的12個電影
function getMoviesByPage(page) {
    // page:0 0~11
    // page:1 12~23 
    // ...
    const data = filterMovies.length ? filterMovies : movies
    const startIndex = ((page - 1) * MOVIES_PER_PAGE)
    return data.slice(startIndex, startIndex + (MOVIES_PER_PAGE))
}

// 顯示分頁資訊
function renderPaginator(amount) {
    // 計算需要有幾頁
    const numberOfPages = Math.ceil(amount / MOVIES_PER_PAGE)
    let rawHTML = ``
    for (let page = 1; page <= numberOfPages; page++) {
        rawHTML += `<li class="page-item"><a class="page-link" href="#" data-page="${page}">${page}</a></li>`
    }
    pagination.innerHTML = rawHTML
}

// 顯示所點擊的電影的more內容
function showMovieModal(id) {
    const movieTitle = document.querySelector('#movie-modal-title')
    const movieImage = document.querySelector('#movie-modal-image')
    const movieDate = document.querySelector('#movie-modal-date')
    const movieDescription = document.querySelector('#movie-modal-description')
    axios.get(INDEX_URL + id)
        .then(function (response) {
            let data = response.data.results
            movieTitle.innerText = data.title
            movieDate.innerText = 'Release Date : ' + data.release_date
            movieDescription.innerText = data.description
            movieImage.innerHTML = `
            <img src="${POSTER_URL + data.image}"
                alt="movie-poster" class="img-fluid">
                `
        })

}
// 將電影加入favorite清單

function addToFavorite(id) {
    // favoriteList 取出存在localStorage內，key值為'favoriteMovies'的value
    const favoriteList = JSON.parse(localStorage.getItem('favoriteMovies')) || []
    const favoriteMovie = movies.find(function (movie) {
        return movie.id === id
    })
    // 檢查是否加入重複的電影
    if (favoriteList.some((movie) => movie.id === id)) {
        return alert('此電影已加入我的最愛清單')
    }
    favoriteList.push(favoriteMovie)
    localStorage.setItem('favoriteMovies', JSON.stringify(favoriteList))
}


dataPanel.addEventListener('click', function onPanelClicked(event) {
    let targetEvent = event.target
    if (targetEvent.matches('.btn-show-movie')) {
        showMovieModal(Number(targetEvent.dataset.id))
    } else if (targetEvent.matches('.btn-add-favorite')) {
        addToFavorite(Number(targetEvent.dataset.id))
    }
})

// search bar功能
searchForm.addEventListener('submit', function inSearchFormSubmit(event) {
    event.preventDefault()
    const keyword = searchInput.value.trim().toLowerCase()

    // for (const movie of movies) {
    //     if (movie.title.trim().toLowerCase().includes(keyword)) {
    //         filterMovies.push(movie)
    //     }
    // }
    filterMovies = movies.filter(function (movie) {
        return movie.title.trim().toLowerCase().includes(keyword)
    })
    if (filterMovies.length === 0) {
        alert(`您輸入的關鍵字${keyword}沒有符合的電影！`)
    } else {
        renderPaginator(filterMovies.length)
        renderMovieList(getMoviesByPage(1))
    }
})

// 點分頁顯示對應清單
pagination.addEventListener('click', function paginationClick(event) {
    // 如果點擊的tag不是<a></a> 停止函式
    if (event.target.tagName !== 'A') return

    const page = Number(event.target.dataset.page)
    renderMovieList(getMoviesByPage(page))
})
