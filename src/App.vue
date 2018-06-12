<template>
    <div>
        <app-header></app-header>
            <router-view></router-view>
        <app-footer></app-footer>
    </div>
</template>

<script>
// Importanje vse komponentve v en file
import Header from './components/header.vue';
import Footer from './components/footer.vue';
import Main from './components/Main.vue';
import Add from './components/add.vue';




export default {
    components:{

        'app-header': Header,
        'app-footer': Footer,
        'app-main': Main,
        'app-add': Add
    },
    data () {
        return {
          
        }
    }
}
</script>

<style>
    @import url('https://fonts.googleapis.com/css?family=Open+Sans:400,700|Roboto:400,700');
</style>