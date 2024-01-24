import { reactive } from 'vue';

export const store = reactive({
    // URL API
    apiSearchFilm: "https://api.themoviedb.org/3/search/movie?api_key=d2932469f928fbbfb148b7bb30e09306&query=",
    apiSearchST: "",

    //ARRAY-API
    foundedFilm: [],
    foundedST: [],

    //VARIABLES
    inputUser:"",
});
