const IMG_PATH = 'https://image.tmdb.org/t/p/w1280'
const SEARCH_API = 'https://api.themoviedb.org/3/search/movie?api_key=3fd2be6f0c70a2a598f084ddfb75487c&query="'

const form = document.getElementById('form')
const search = document.getAnimations('search')

const getDataApi = () => {


    let url = "https://api.themoviedb.org/3/discover/movie?api_key=bee8153a5b251fb42938163cfb5cc1ed&sort_by=popularity.desc";

    fetch(url)
        .then((response) => response.json())
        .then((result) => {
            let movieHTML = document.getElementById("section-film");
            let movieData = result.results;

            movieData.forEach((item, index) => {
                movieHTML.innerHTML += `<div div class="card" style = "width: 18rem;" >
                <img src="https://image.tmdb.org/t/p/w500/`+ item.poster_path + `" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">`+ item.original_title + `</h5>
                        <h5 class="card-rating">rate <b>`+ item.vote_average + `</b></h5>
                        <p class="card-text">`+ item.overview + `</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                </div>`;
            });
        })
        .catch((error) => console.log(error));
};


form.addEventListener('submit', (e) => {
    e.preventDefault()

    const searchTerm = search.value

    if (searchTerm && searchTerm !== '') {
        getMovies(SEARCH_API + searchTerm)

        search.value = ''
    } else {
        window.location.reload()
    }
})

getDataApi()