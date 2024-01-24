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
            
            const pt1 ="https://flagsapi.com/";
            const pt2 = language.toUpperCase();
            const pt3 = "/flat/64.png";
            const urlComplete = pt1 + pt2 + pt3;
         
            return urlComplete;
        }
    }
}


</script>

<template>
    <main>
        <div class="my_container d-flex flex-wrap">
           <!-- FILM -->
            <div>
                <h3>
                    FIlm
                </h3>
                <div class=" d-flex flex-wrap">
                    <div class=" m-4 " v-for="(film, i) in store.foundedFilm">
                        <div>
                            <h5>Film cercato:</h5>
                        </div>
                        
                        <!-- LISTA FILM -->
                        <ul>
                            <li>
                                {{film.title}}
                            </li>
                            <li>
                                {{film.original_title}}
                            </li>
                            <li>
                                <img :src="getUrlImg(film.original_language)" :alt="film.original_language">
                            </li>
                            <li>
                                {{film.vote_average}}
                            </li>
                        </ul> 
                    </div>
                </div>
           </div>

           <!-- TELEFILM -->
           <hr>
           <div>
                <h3>
                    SERIE TV
                </h3>
                <div class=" d-flex flex-wrap">
                    <div class=" m-4 " v-for="(film, i) in store.foundedST">
                        <div>
                            <h5>serie cercata:</h5>
                        </div>
                        
                        <!-- serie lista -->
                        <ul>
                            <li>
                                {{film.name}}
                            </li>
                            <li>
                                {{film.original_name}}
                            </li>
                            <li>
                                <img :src="getUrlImg(film.original_language)" :alt="film.original_language">
                            </li>
                            <li>
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
