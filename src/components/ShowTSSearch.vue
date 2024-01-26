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
     <div class="single_film_container" v-for="(ST, i) in store.foundedST">
                        <!-- LISTA FILM -->
        <div class="preview_container">
            <img :src="store.getUrlPreviewSeries(ST.poster_path)" :alt="ST.name">
        </div>
        <div  class="informations">
            <div>
                Titolo: {{ST.name}}
            </div>
            <div>
                Titolo originale: {{ST.original_name}}
            </div>
            <div>
                Lingua:
                <img :src="store.getUrlImg(ST.original_language)" :alt="ST.original_language">
            </div>
            <div>
                voto:
                <i v-for="i in Math.floor(ST.vote_average / 2)" class="fa-solid fa-star"></i>
                <i v-for="i in (5 - Math.floor(ST.vote_average / 2))" class="fa-regular fa-star"></i>
            </div>
                              
        </div>
    </div>
</template>

<style lang="scss" scoped>
    @use'../assets/SCSS/main.scss';
</style>
