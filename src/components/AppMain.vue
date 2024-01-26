<script>
/* Come faccio ad utilizzare un componente dentro un altro?
        Si seguono 3 passaggi:
        1) Importazione del componente
        2) Dichiarazione del componente all'interno dell'oggetto
        3) Utilizzo del componente    
*/
import {store} from '../store.js' // import axios form 'axios';
import ShowFilmSearch from './ShowFilmSearch.vue';
import ShowTSSearch from './ShowTSSearch.vue';


export default {
    data(){
        return{
            store,
            rateStars: "",
        }
    },
    components: {
        ShowFilmSearch,
        ShowTSSearch
       
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
        getUrlPreviewSeries(finalUrl){
            let urlComplete = "https://image.tmdb.org/t/p/w342/" + finalUrl;
            return urlComplete;
        }

    }
}


</script>

<template>
    <main>
        <div class=" text-center mb-3 ">
                Ricerca Film - Serie tv: {{ store.inputUser }}
                <div>
                    <small>(premi il punsante vai!)</small>
                </div>
        </div>
        <div v-if="store.foundedFilm.length > 0 || store.foundedST.length > 0" class="my_container">
            
           <!-- FILM -->
            <div class="">
                <h3>
                    Film <i class="fa-regular fa-star"></i>
                </h3>
                <div class="d-flex flex-wrap films_container">
                    <ShowFilmSearch/>
                </div>
            </div>


            <hr>
            <!-- TELEFILM -->
            <div class="">
                <h3>
                    SERIES <i class="fa-regular fa-star"></i>
                </h3>
                <div class="d-flex flex-wrap films_container">
                    <ShowTSSearch/>
                </div>
            </div>
        </div>
    </main>
</template>

<style lang="scss" scoped>
    @use'../assets/SCSS/main.scss';
</style>
