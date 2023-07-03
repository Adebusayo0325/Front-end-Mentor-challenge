const main = document.getElementById("main");
// const main = document.getElementById('main')
const API_URL =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=28295ba73084a5d27e6dbfb536547d1d&page=2";
const IMG_PATH = "https://image.tmdb.org/t/p/w500";
const SEARCH_API = 'https://api.themoviedb.org/3/search/movie?api_key=28295ba73084a5d27e6dbfb536547d1d&query="';


const form = document.getElementById('form')
const search = document.getElementById('search')
const button = document.getElementById('headBtn')
getMovies(API_URL)

async function getMovies (url){
const res = await fetch(url)
const data = await res.json()

showMovies(data.results)
}
function showMovies (movies){
    main.innerHTML = ''
    movies.forEach((movie) => {
        const {title, poster_path, vote_average, overview} = movie

        const movieEl = document.createElement('div')
        movieEl.classList.add('movie')

        movieEl.innerHTML = `
          <div class="movie-img">
          <img src="${IMG_PATH + poster_path}" alt="${title}" />
        </div>

        <div class="movie-info">
          <h3>${title}</h3>
          <h5 class="${getClassByRate(vote_average)}">${vote_average}</h5>
        </div>
        <div class="overview">
        ${overview}
         
        </div>
        `
        main.appendChild(movieEl)
    })
}
function getClassByRate(vote){
if(vote >=8){
    return 'green'
} else if (vote >= 5 ){
    return 'orange'
}else{
    return 'red'
}
}

form.addEventListener('submit', (e)=> {
    e.preventDefault()

    const searchTerm = search.value
    if(searchTerm && searchTerm !== ''){
        getMovies(SEARCH_API + searchTerm)
        search.value = ''
    }else{
        window.location.reload()
    }
})