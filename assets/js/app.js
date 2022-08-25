const API_URL = 'https://api.themoviedb.org/1/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=1'
const IMG_PATH = 'https://image.tmdb.org/t/p/w1280'

let moviePoster = document.getElementById("netflixMovie");

let searchInput= document.getElementById("searchInput");
console.log(searchInput);


function netflixMovieBody(arr){
    let final = '';
    arr.forEach(element => {
            final += `<div class="col-md-3">
            <div class="card">
                <div class="card-body">
                    <figure class="posters">
                        <img src= "${IMG_PATH}${element.poster_path}" class="img-fluid" alt="${element.title}">
                        <figcaption>
                            <p class="title">${element.title}</p>
                        </figcaption>
                        <span class="${colors(element.vote_average)}">${element.vote_average}</span>
                        <div class="overview text-center">
                            <h4>Overview</h4>
                            <p class="">${element.overview}</p>
                        </div>
                    </figure>
                </div>
            </div>
        </div>`
    })
    netflixMovie.innerHTML = final;
}

netflixMovieBody(results);



function colors(rating){
    if(rating >= 8){
        return "green"
    }else if(rating >= 6){
        return "yellow"
    }else if( rating >= 4){
        return "orange"
    }else{
        return "red"
    }
}


searchInput.addEventListener("keyup",onkeyUp);


function onkeyUp(event){
        let name = event.target.value.toLowerCase().trim();
        let tempResult = results.filter(movie => movie.title.toLowerCase().trim().includes(name));
        netflixMovieBody(tempResult);
}