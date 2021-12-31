<template>
    <footer v-if="tags">
        <a href="#" v-for="tag in tags" :key="tag.id">{{tag}}</a>
    </footer>
</template>

<script>
export default {
    props: {
        tags: {
            type: Array,
            
        },
    },
    setup () {
        

        return {}
    }
}
</script>

<style lang="css" scoped>
a{
    box-shadow: 1px 1px 3px grey;
    font-size: .75rem;
    color: #fff;
    background: lightgray;
    margin: .2rem;
    padding: .2rem .3rem;
    text-decoration: none;
}
a:nth-child(1){
    margin-left: 0;
}

</style>