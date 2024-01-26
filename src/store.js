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

    //FUNCTIONS
    getUrlImg(codeL){
        let language = codeL;
        if(codeL == "en"){
            language = "GB";
        }
        if(codeL == "ja"){
            language = "JP";
        }
        if(codeL == "zh"){
            language = "CH";
        }
        if(codeL == "da"){
            language = "DE";
        }
        if(codeL == "ko"){
            language = "KR";
        }
        
        const pt1 ="https://flagsapi.com/";
        const pt2 = language.toUpperCase();
        const pt3 = "/flat/32.png";
        const urlComplete = pt1 + pt2 + pt3;
     
        return urlComplete;
    },
    getUrlPreview(finalUrl){
        let url = "https://image.tmdb.org/t/p/w342/" + finalUrl;
        return url;
    },
    getUrlPreviewSeries(finalUrl){
        let urlComplete = "https://image.tmdb.org/t/p/w342/" + finalUrl;
        return urlComplete;
    }
});
