<template>
    <figure v-if="image">
        <img :src="'./img/'+ image.filename" alt="pic">
    </figure>
</template>

<script>
export default {
    props: {
        image: {
            type: Object,
            
        },
    },
    setup () {
        

        return {}
    }
}
</script>

<style lang="css" scoped>
figure{
    margin: 0;
    padding: 0;
}
img{
    box-shadow: 0 1px 5px rgba(17, 17, 17, 0.753);
    max-width: 268px;
    border-radius: 3px;
}
</style>