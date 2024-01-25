<script>
/* Come faccio ad utilizzare un componente dentro un altro?
        Si seguono 3 passaggi:
        1) Importazione del componente
        2) Dichiarazione del componente all'interno dell'oggetto
        3) Utilizzo del componente    
*/
import {store} from '../store.js' // import axios form 'axios';

export default {
    data(){
        return{
            store,
            rateStars: "",
        }
    },
    components: {
       
    },
   
    methods: {
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

    }
}


</script>

<template>
    <main>
        <div class="my_container">
           <!-- FILM -->
            <div class="">
                <h3>
                    Film <i class="fa-regular fa-star"></i>
                </h3>
                <div class="d-flex flex-wrap films_container">
                    <div class="single_film_container" v-for="(film, i) in store.foundedFilm">
                        <!-- LISTA FILM -->
                        <div class="preview_container">
                            <img :src="getUrlPreview(film.poster_path)" :alt="film.title">
                        </div>
                        <div  class="informations">
                            <div>
                                Titolo: {{film.title}}
                            </div>
                            <div>
                                Titolo originale: {{film.original_title}}
                            </div>
                            <div>
                                Lingua:
                                <img :src="getUrlImg(film.original_language)" :alt="film.original_language">
                            </div>
                            <div>
                                voto:
                                <i v-for="i in Math.floor(film.vote_average / 2)" class="fa-solid fa-star"></i>
                                <i v-for="i in (5 - Math.floor(film.vote_average / 2))" class="fa-regular fa-star"></i>
                            </div>    
                        </div>
                    </div>
                </div>
            </div>

           <!-- TELEFILM -->
           <hr>

           <div class="ST_container">
                <h3>
                    SERIE TV
                </h3>
                <div class="d-flex flex-wrap">
                    <div class=" m-4 " v-for="(film, i) in store.foundedST">
                        <!-- serie lista -->
                        <ul>
                            <li>
                                Titolo: {{film.name}}
                            </li>
                            <li>
                                Titolo originale: {{film.original_name}}
                            </li>
                            <li>
                                Lingua:
                                <img :src="getUrlImg(film.original_language)" :alt="film.original_language">
                            </li>
                            <li>
                                Voto:
                                {{film.vote_average}}
                            </li>
                        </ul> 
                    </div>
                </div>
           </div>
        </div>
    </main>
</template>

<style lang="scss" scoped>
    @use'../assets/SCSS/main.scss';
</style>
