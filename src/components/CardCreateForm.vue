<template>
    <footer>
        <a v-if="addVisible" @click="showForm()" >Add a card...</a>

        <form action="#" v-if="formVisible" @submit.prevent="submitForm()">
            <textarea cols="25" rows="10" v-model="text" autofocus ref="txtarea" > </textarea>
            <div class="btns">
                <button>Add</button>
                <img src="../../public/img/close.svg" alt="close-icon" @click="hideForm()">
            </div>
        </form>
    </footer>
</template>

<script>
import { reactive, toRefs } from 'vue'

export default {
    props: {
        listId: {
            type: Number,
            
        },
    },
    setup (props) {
        
        const state = reactive({
            
            formVisible: false,
            addVisible: true,
            text:"",
        })
        const showForm =()=>{
            state.formVisible = true
            state.addVisible = false
            
            
        }
        const hideForm =()=>{
            state.formVisible = false
            state.addVisible = true
        }
        const submitForm = () => {
            window.eventBus.emit('new-card-coming', { // sending to Home.vue
                text:state.text,
                listId: props.listId,
                })
            state.text =""
            
        }
       
     
    
        return {
            ...toRefs(state),
            showForm,
            hideForm,
            submitForm,
            
            
        }
    }
}
</script>

<style lang="css" scoped>
    footer{
        text-align: left;
        margin: 1rem;
        font-weight: bold;
        cursor: pointer;
    }
    form{
        margin: 1rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
    textarea{
        border-radius: 5px;
        outline: none;
    }
    .btns{
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 0.75rem;
    }
    img{
        cursor: pointer;
    }
    button {
    /* display: inline-block; */
    width: 50px;
    padding: 0.2rem 0.3rem;
    cursor: pointer;
    }
    
</style>