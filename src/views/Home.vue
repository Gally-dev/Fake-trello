<template>
  <main>
    <transition-group name="list" tag="div">
      <div id="overlay" v-if="overlay" @overlay-hide="$event"></div>
      <list
        v-for="list in lists"
        :key="list.id"
        :title="list.title"
        :id="list.id"
        :cards="list.cards"
        @edit-list-title="editListTitle($event)"
        @toggle-overlay="overlay = ($event)"
      />
      <list-create-form @new-list-coming="addNewList($event)" key="0" />
    </transition-group>
  </main>
</template>

<script>
import { onMounted, reactive, toRefs } from "vue";
import { data } from "@/data.js";

import List from "@/components/List.vue";
import ListCreateForm from "@/components/ListCreateForm.vue";

//functions
import { addNewCard, deleteCard } from "@/cards.js";

export default {
  components: { List, ListCreateForm },
  setup() {
    const state = reactive({
      lists: data, //data imported from data.js, lists is used in v-for in list.
      overlay:false,
    });
    const addNewList = (title) => {
      if (!title) return; //ak nieje nadpis, teda posielam prazdny input nerob nic
      state.lists.push({
        id: Math.max(...state.lists.map((num) => num.id)) + 1,
        title: title,
        cards: [],
      });
    };
    const editListTitle = (data) => {
      if(!data?.id || !data?.newTitle) return
      let listToEdit = state.lists.find(list => list.id === data.id)
      listToEdit.title = data.newTitle
     
    }
    
    onMounted(() => {
      window.eventBus.on("new-card-coming", (e) => {
        //poslane data (e) z CardCreateForm.vue a to v objekte sa nachadza id a jtext
        addNewCard(e, state); //imported from card.js
      }); // from CardCreateForm.vue

      window.eventBus.on("edit-list-title", (e)=>{
        editListTitle(e)
      });
      window.eventBus.on("toggle-overlay", (e)=>{
        state.overlay = e
      });
      window.eventBus.on('delete-card', (e)=>{ // data poslane z cardPopup.vue
        deleteCard(e, state)
      })
     
    });

    return {
      ...toRefs(state),
      addNewList,
      editListTitle,
      
    };
  },
};
</script>

<style lang="css" scoped>
.main{
  max-width: 1200px;

}
div {
  display: flex;
  justify-content: center;
  margin: 0 auto;
  flex-wrap: wrap;
  align-items: flex-start;
}
#overlay{
  background: rgba(17, 17, 17, 0.747);
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 10;
}
/* transitions */
    .list-enter-active,
    .list-leave-active{
        transition: all .2s;
    }
    .list-enter-from,
    .list-leave-to{
        opacity: 0;
        transition: scale(0.75);
    }
</style>

