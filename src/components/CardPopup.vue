<template>
    <ul>
        <li><a href="#" @click="emit('start-edit')">edit</a></li>
        <li><a href="#" @click="deleteCard()">remove</a></li>
        <li><a href="#" @click="emit('popUp-close')">✖</a></li> <!-- emit to card.vue to card-popup tag -->
    </ul>
</template>

<script>
export default {
    props: {
        card: {
            type: Object,
        },
        listId: {
            type: Number,
        }
    },
    setup (props, {emit}) {
        
        const deleteCard = () => {
            // console.log(props.card, props.listId);
            window.eventBus.emit('delete-card',{
                cardId: props.card.id,
                listId: props.listId,
            })
            //hide overlay
            window.eventBus.emit('toggle-overlay', false) //sending to home.vue to list tag
        }
        return {
            emit,
            deleteCard,
        }
    }
}
</script>

<style lang="css" scoped>
ul{
    padding: 0;
    position: absolute;
    top: 0;
    right: -105px;
    display: flex;
    flex-direction: column;
    
}
li{
    list-style: none;
    display: inline;
    margin: 0.4rem;
    transition: .2s ease;
}
li:hover{
    transform: translateX(2px);
}
a{
    background: rgba(17, 17, 17, 0.596);
    border-radius: 4px;
    padding: 0.3rem;
    margin: 1rem;
    text-decoration: none;
    color: whitesmoke;
    display: inline;
    font-weight: 400;
    letter-spacing: 1px;
}
</style>