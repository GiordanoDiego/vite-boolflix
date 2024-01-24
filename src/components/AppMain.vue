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
        }
    },
    components: {
       
    },
   
    methods: {

    }
}


</script>

<template>
    <main>
        <div class="my_container d-flex flex-wrap">
           <div v-for="(film, i) in store.foundedFilm">
                <div>
                    <h5>Film cercato:</h5>
                </div>
                <ul>
                    <li>
                        {{film.title}}
                    </li>
                    <li>
                        {{film.original_title}}
                    </li>
                    <li>
                        {{film.original_language}}
                    </li>
                    <li>
                        {{film.vote_average}}
                    </li>
                </ul>
           </div>
        </div>
    </main>
</template>

<style lang="scss" scoped>
    @use'../assets/SCSS/main.scss';
</style>
