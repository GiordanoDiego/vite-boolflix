import { reactive } from 'vue';

export const store = reactive({
    // URL API
    apiSearchFilm: "https://api.themoviedb.org/3/search/movie?api_key=d2932469f928fbbfb148b7bb30e09306&query=",
    
    apiSearchST: "https://api.themoviedb.org/3/search/tv?api_key=d2932469f928fbbfb148b7bb30e09306&language=it_IT&query=",

    apiActor: "https://api.themoviedb.org/3/movie/19995/credits?api_key=d2932469f928fbbfb148b7bb30e09306",

    urlFlag: "https://flagsapi.com/film.original_language.toUpperCase()/flat/64.png",

    //ARRAY-API
    foundedFilm: [],
    foundedST: [],
    

    //VARIABLES
    inputUser:"",
});
