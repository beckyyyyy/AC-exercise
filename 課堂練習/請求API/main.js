const button = document.querySelector('button')
const lyricsBox = document.querySelector('.lyrics-box')

button.addEventListener('click', function () {
    axios.get('https://webdev.alphacamp.io/api/lyrics/Coldplay/Yellow.json')
        .then(function (response) {
            let lyrics = response.data.lyrics
            lyricsBox.textContent = lyrics
        })
        .catch(function (error) {
            console.log(error)
        })
})
