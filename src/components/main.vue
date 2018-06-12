<!-- HTML template za main part of spletne strani (sredinski del) -->
<template>
    <div id="main">
        <div class="textbox">
            <!-- Navodila za uporabo -->
            <p class="textbox__instructions">
                Type in an index number(numerical form) to display
            </p>
            <!-- Input kjer user vpiše index -->
            <div class="textbox__input">
                <input v-model="index" placeholder="Type in an index" class="textbox__input--area" type="text">
                <button v-on:click="fetch()" class="textbox__input--search">Fetch</button>
            </div>
            <!-- Izpis JSON file iz api-ja -->
            <div class="output">
                <h1> Contents </h1>
                <div v-if="errorStyling" class="error-display">
                    {{ errorDisplay }}
                </div>
                <!-- Uporaba json pretty za formtiranje JSON-a -->
                <vue-json-pretty
                    :data=jsonResponse>
                </vue-json-pretty>

            </div>
        </div>
    </div>
</template>

<script>
// Import axios za http requeste
import axios from 'axios'
// Import JSON pretty za formatiranje JSON-a v HTML
import VueJsonPretty from 'vue-json-pretty'

export default {
    data () {
        return {
            // Variabile
            // V index se shrani tisto kar user vpiše v input
            index: "",
            // Variabila za JSON
            jsonResponse: '',
            // Vsebina errorja
            errorDisplay: '',
            // Boolean > false pomeni da se error ne izpiše
            errorStyling: false
        }
    },
    methods: {
        fetch: function(){
            // Tukaj se mora this "shranit" v variabilo saj this kot sam ne deluje v axios. Če tega ni je potem ko referencaš v axios mišljeno to lokalno in ne globalno v sklopu Vue objekta
            var vm = this;
            // Klic GET metode
            axios.get('http://localhost:3333/api/' + vm.index).then(function(response){
                //Za debugging
                console.log(response);
                // Preverjanje ali je response error
                if(response.data.code == 'ENOENT'){
                    // Če je error nastavi text ter prikaži error
                    vm.errorDisplay = "File with that index doesn't exist";
                    vm.errorStyling = true;
                    // reset responsa
                    vm.jsonResponse = '';
                }
                else{
                    // Če ni errorja, reset error ter displaya
                    vm.errorDisplay = '';
                    vm.errorStyling = false;
                    // Shrani JSON v jsonResponse
                    vm.jsonResponse = response.data;
                }

            }).catch(function(err){
                // Če je katerikoli drug error ga izpiši
                vm.errorDisplay = err;
                vm.errorStyling = true;
                // reset responsa
                vm.jsonResponse = '';
            })
        }
    },
    components: {
        // Uporaba Vue JSON pretty
        VueJsonPretty
    }
}
</script>

<style lang="sass" scoped>
    // Styling
    
    #main
        width: 100%
        max-width: 1200px
        margin: 40px auto
        padding: 0 20px
        padding-top: 5rem
        padding-bottom: 5rem
        box-sizing: border-box
    
    .textbox
        width: 80%
        height: 100%
        margin: 0 auto
        text-aling: center

        &__instructions
            width: 70%
            margin: 0 auto
            text-align: center
            font-size: 1.5rem
            font-family: 'Open-sans', sans-serif
        
        &__input
            width: 30%
            margin: 0 auto
            margin-top: 1rem
            margin-bottom: 4rem
            text-align: center
    .output
        width: 80%
        height: 100%
        margin: 0 auto
        & h1
            font-family: 'Roboto', sans-serif
            text-aling: center;
        & .contents
            height: 100%
        & .error-display
            background: red
            font-family: 'Open-sans', sans-serif
            text-transfrom: uppercase
            padding: 2rem
            color: #fff



</style>