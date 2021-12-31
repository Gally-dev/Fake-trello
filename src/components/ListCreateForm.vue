<template>
    <form @submit.prevent="submitForm()">
        <input type="text" v-model="title"  placeholder="Add new list...">
        
    </form>
</template>

<script>
import { ref } from '@vue/reactivity'
export default {
    setup (props, context) { //pri console logu context obsahuje metody{emit, attrs atd}, musi byt na druhom mieste v setup
        const title =ref('')

        const submitForm = ()=>{
            context.emit('new-list-coming', title.value.toUpperCase()); //emit to home.vue
            title.value =""
        }

        return {
            title,
            submitForm,
        }
    }
}
</script>

<style lang="css" scoped>
    input{
    background: rgba(255, 255, 255, 0.75);
    box-shadow: 0 3px 3px rgba(85, 80, 80, 0.473);
    border: none;
    outline: none;
    margin: .5rem;
    padding: .5rem;
    border-radius: 5px;
    text-align: left;
    font-weight: 600;
    }
    input{
        width: 280px;
    }
</style>