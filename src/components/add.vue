<template>
    <div id="add">
        <div class="content">
            <p class="content__instructions">
                    Type in your json data to store it on the server, index will be assigned automatically and will be displayed to you. Remember the index.
            </p>
            <textarea v-model="userJson"></textarea><br>

            <div v-if="showError" class="content__error-display">
                {{ errorContent }}
            </div>

            <button v-on:click="fetch()">Save data</button>
            <div v-if="showSuccess" class="content__index-display">
                {{ indexOfSavedFile }}
            </div>
        </div>
        
    </div>
</template>

<script>
import axios from 'axios'
import VueJsonPretty from 'vue-json-pretty'

export default {
    data () {
        return {
          userJson: '',
          errorContent: '',
          indexOfSavedFile: '',
          showError: false,
          showSuccess: false

        }
    },
    methods: {
        fetch: function(){
            try {
                JSON.parse(this.userJson);
                this.errorContent = ''
                this.showError = false;
            } catch (err) {
                this.errorContent ='JSON you entered is not valid, please use valid JSON format.'
                this.showSuccess = false
                this.showError = true;
                return;
            }
            var vm = this;
            axios.post('http://localhost:3333/api/add', JSON.parse(vm.userJson)).then(function (response) {
                vm.showSuccess = true
                vm.indexOfSavedFile = "Success!! Saved data in a file with index: " + response.data.number;

            })
            .catch(function (error) {
                console.log(error);
            });
        }
    },
    components: {
        VueJsonPretty
    }
}
</script>

<style lang="sass" scoped>
    #add
        padding-top: 5rem
        padding-bottom: 5rem

    .content
        text-align: center
        &__instructions
            font-family: 'Roboto', sans-serif
            font-size: 1rem

        & textarea
            width: 30rem
            height: 15rem
            margin: 0 auto
        & button
            margin: 0 auto
        &__error-display
            background: red
            font-family: 'Open-sans', sans-serif
            text-transfrom: uppercase
            padding: 2rem
            color: #fff
        &__index-display
            background: green
            font-family: 'Open-sans', sans-serif
            text-transfrom: uppercase
            padding: 2rem
            color: #fff



</style>