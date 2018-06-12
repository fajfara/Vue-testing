<template>
    <footer>
        <div class="footer-buttons">
            <a href="/#/"> View index </a>
            <a href="/#/add"> Add index </a>
        </div>
        <p>{{ copyright }}</p>
    </footer>
</template>

<script>

export default {
    data () {
        return {
          copyright: 'Copyright 2018 ME'
        }
    }
}
</script>

<style lang="sass" scoped>
    footer
        background: #222

    p
        color: lightgreen
        text-align: center
        padding: 1rem
        font-family: 'Open-sans', sans-serif

    .footer-buttons
        text-align: center
        background: lightgreen
        padding: 1rem
        & a
            text-decoration: none
            text-transform: uppercase
            background: #222
            color: #fff
            font-family: 'Open-sans', sans-serif
            padding: .5rem
            margin-right: 1rem

            
    
</style>