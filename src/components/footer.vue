<template>
    <footer>
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
        padding: 6px

    p
        color: lightgreen
        text-align: center
</style>