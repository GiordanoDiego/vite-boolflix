<script>
/* Come faccio ad utilizzare un componente dentro un altro?
        Si seguono 3 passaggi:
        1) Importazione del componente
        2) Dichiarazione del componente all'interno dell'oggetto
        3) Utilizzo del componente    
*/


export default {
    data(){
        return{
            
        }
        
    },
   
    methods: {

    }
}


</script>

<template>
    <div class=" m-4 " v-for="(film, i) in store.foundedFilm">
                        <!-- LISTA FILM -->
                        <ul>
                            <li>
                                Titolo: {{film.title}}
                            </li>
                            <li>
                                Titolo originale: {{film.original_title}}
                            </li>
                            <li>
                                Lingua:
                                <img :src="getUrlImg(film.original_language)" :alt="film.original_language">
                            </li>
                            <li>
                                Voto: {{film.vote_average}}
                            </li>
                        </ul> 
    </div>
</template>

<style lang="scss" scoped>
    @use'../assets/SCSS/main.scss';
    @use '../assets/SCSS/footer.scss';

</style>
