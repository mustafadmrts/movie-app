
const APIURL = "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=vote_average.desc&without_genres=99,10755&vote_count.gte=200&api_key=3685f9ec025180507d3f746c722b681f";

const IMGPATH = "https://image.tmdb.org/t/p/w500";

const main = document.querySelector(".main");


async function getMovies() {
    const resp = await fetch (APIURL);
    const respData = await resp.json();

    console.log(respData);
    
    respData.results.forEach((movie) => {

        const {poster_path,title,vote_average,overview,} = movie;

        const movieEI = document.createElement
        ("div");

        movieEI.classList.add("movie");


        movieEI.innerHTML = `
        <img 
            src="${IMGPATH + poster_path}"
            alt="${title}">
        <div class="movie-info">
            <h3>${title}</h3>
            <span class="range"><i class="fa-solid fa-star" style="color: #fac400;"></i>${vote_average}</span>
           
        </div>
         <div class="overview">
           ${overview}
         </div>
    `
     main.appendChild(movieEI);
        
    });
   
    

    return respData;
}

getMovies()
