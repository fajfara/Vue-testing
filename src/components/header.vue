<template>
    <header>
        <h1>{{ title }}</h1>
    </header>
</template>

<script>

export default {
    data () {
        return {
          title: 'Index View'
        }
    }
}
</script>

<style lang="sass" scoped>
    header
        background: lightgreen
        padding: 10px
    
    h1
        color: #222
        text-align: center
        font-family: 'Roboto', sans-serif
</style>