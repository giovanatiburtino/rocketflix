import {
  API_KEY, BASE_URL,
  IMG_URL,
  language,
} from './api.js'

const movie = document.querySelector(".movie")
const moviePoster = document.querySelector(".poster")
const movieTitle = document.querySelector(".movie-title")
const movieDescription = document.querySelector(".movie-description")
const movieGeneratorButton = document.querySelector(".movie-generator")


movieGeneratorButton.addEventListener("click", async () => {
  const generateRandomId = Math.floor(Math.random() * 500)

  const fetchMovie = await fetch(`${BASE_URL}${generateRandomId}?${API_KEY}&${language}`)

  const renderMovie = await fetchMovie.json()

  movie.style.display = "flex"

  if(fetchMovie.ok === true){
    movieTitle.textContent = renderMovie.title
    moviePoster.src=`${IMG_URL}${renderMovie.poster_path}`
    movieDescription.textContent = renderMovie.overview
  } else {
    movieTitle.textContent = ""
    movieDescription.textContent = "Ops, hoje não é dia de assistir filme. Bora codar 🚀"
    moviePoster.src= 'assets/code.png'
  }
})
