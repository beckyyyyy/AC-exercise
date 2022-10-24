const BASE_URL = 'https://movie-list.alphacamp.io/'
const INDEX_URL = BASE_URL + 'api/v1/movies/'
const POSTER_URL = BASE_URL + 'posters/'

const dataPanel = document.querySelector('#data-panel')

// 取出local storage裡的資料
const favoriteList = JSON.parse(localStorage.getItem('favoriteMovies')) || []
renderMovieList(favoriteList)

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
                            <button type="button" class="btn btn-danger btn-remove-favorite" 
                            data-id="${item.id}">
                            x
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        `
    })
    dataPanel.innerHTML = rawHTML
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
//從我的最愛清單刪除
function removeFromFavorite(id) {
    if (!favoriteList || !favoriteList.length) return

    const movieIndex = favoriteList.findIndex((movie) => movie.id === id)
    // 從我的最愛陣列裡刪除
    favoriteList.splice(movieIndex, 1)
    // 將陣列存為local storage
    localStorage.setItem('favoriteMovies', JSON.stringify(favoriteList))
    renderMovieList(favoriteList)
}

dataPanel.addEventListener('click', function onPanelClicked(event) {
    let targetEvent = event.target
    if (targetEvent.matches('.btn-show-movie')) {
        showMovieModal(Number(targetEvent.dataset.id))
    } else if (targetEvent.matches('.btn-remove-favorite')) {
        removeFromFavorite(Number(targetEvent.dataset.id))
    }
})