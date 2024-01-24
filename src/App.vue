<script>
/* Come faccio ad utilizzare un componente dentro un altro?
        Si seguono 3 passaggi:
        1) Importazione del componente
        2) Dichiarazione del componente all'interno dell'oggetto
        3) Utilizzo del componente    
*/
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import AppFooter from './components/AppFooter.vue';
import {store} from './store.js' // import axios form 'axios';
import axios from 'axios'; // importo elemento axios

export default {
    data(){
        return{
            store,
        }
    },
    components: {
        AppHeader,
        AppMain,
        AppFooter
    },
    methods: {
        searchInputUser(){
            if(this.store.inputUser.length > 0){
                //FILM
                const urlSearchFilm = this.store.apiSearchFilm + this.store.inputUser;

                axios.get(urlSearchFilm).then((response) => {
                    this.store.foundedFilm = response.data.results;
                    console.log("Array film:",this.store.foundedFilm);
                    console.log("lingua",this.store.foundedFilm.original_language);
                });

                //SERIES
                const urlSearchSeries = this.store.apiSearchST + this.store.inputUser;

                axios.get(urlSearchSeries).then((response) => {
                    console.log("response", this.response)
                    this.store.foundedST = response.data.results;
                    console.log("Array serie:",this.store.foundedST);
                    this.store.inputUser = "";
                });   
            }            
        }
    },  
    created(){ //montarlo
        
        // axios.get(this.store.apiSearchFilm).then((response) => {
        //     console.log("chiamata api", response.data.results);
        //     this.store.foundedFilm = response.data.results;
        //     console.log("Array founded:",this.store.foundedFilm);
        // });
    }
}


</script>

<template>
    <AppHeader 
    @searchInputUser = "searchInputUser()"/>
    <AppMain/>
    <AppFooter/>
</template>

<style lang="scss"> //tolgo scoped per applicare il reset al body
      @use "./assets/SCSS/main.scss" as *;
</style>
