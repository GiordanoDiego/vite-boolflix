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
        return {
            store,
        }
        
    },
   
    methods: {

    }
}

</script>

<template>
     <header>
        <div class="my_container">
            <div>
                Logo 
            </div>
            <div class="search-bar_container">
                <div class="input-group">
                    <input v-model="store.inputUser" id="search-bar" type="text" class="form-control" placeholder="Cerca..." aria-label="Recipient's username" aria-describedby="button-addon2">
                    <button @click="$emit('searchInputUser')" class="btn btn-danger" type="button" id="button-addon2">vai!</button>
                </div>
            </div>
        </div>
     </header>
</template>

<style lang="scss" scoped>
    @use'../assets/SCSS/main.scss';
    @use '../assets/SCSS/header.scss';
</style>
