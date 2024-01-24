import { reactive } from 'vue';

export const store = reactive({
    // URL API
    apiSearchFilm: "https://api.themoviedb.org/3/search/movie?api_key=d2932469f928fbbfb148b7bb30e09306&query=",
    
    apiSearchST: "https://api.themoviedb.org/3/search/tv?api_key=d2932469f928fbbfb148b7bb30e09306&language=it_IT&query=",

    urlFlag: "https://flagsapi.com/film.original_language.toUpperCase()/flat/64.png",

    //ARRAY-API
    foundedFilm: [],
    foundedST: [],
    flags: {
       "en": "https://flagsapi.com/GB/flat/64.png",
       "zh" : "cinese",
       "fr" :"francese",
       "it" : "https://flagsapi.com/IT/flat/64.png",
       "es" :"https://flagsapi.com/ES/flat/64.png",
       "ja" : "https://flagsapi.com/JP/flat/64.png",
       "de" : "https://flagsapi.com/DE/flat/64.png",
       "general" : "generale"
    },

    //VARIABLES
    inputUser:"",
});
