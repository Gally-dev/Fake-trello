<template>
    <aside v-if="labels">
        <div :style="{background: color}" class="labels" v-for="(color) in labels" :key="color.id" > </div> 
    </aside>
</template>

<script>
export default {
    props: {
        labels: {
            type: Object,
            
        },
    },
    setup () {
        

        return {}
    }
}
</script>

<style lang="css" scoped>
.labels{
    width: 30px;
    height: 6px;
    background: purple;
    border-radius: 100px;
    margin: .2rem;
}
</style>