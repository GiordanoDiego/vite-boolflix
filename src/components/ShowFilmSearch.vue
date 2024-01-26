<script>

import {store} from '../store.js' // import axios form 'axios';

export default {
    data(){
        return{
            store,
            rateStars: "",
        }
    },
    methods: {
        

        
    }
}

</script>

<template>
     <div class="single_film_container" v-for="(film, i) in store.foundedFilm">
                        <!-- LISTA FILM -->
        <div class="preview_container">
            <img :src="store.getUrlPreview(film.poster_path)" :alt="film.title">
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
                <img :src="store.getUrlImg(film.original_language)" :alt="film.original_language">
            </div>
            <div>
                voto:
                <i v-for="i in Math.floor(film.vote_average / 2)" class="fa-solid fa-star"></i>
                <i v-for="i in (5 - Math.floor(film.vote_average / 2))" class="fa-regular fa-star"></i>
            </div>                  
        </div>
    </div>
</template>

<style lang="scss" scoped>
    @use'../assets/SCSS/main.scss';
</style>
