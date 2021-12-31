<template>
  <section class="list">
    <header>
      <h3
      ref="titleElement"
        :contenteditable="isEditing"
        @keydown.enter="saveTitle()"
        @blur="saveTitle()"
        @click="startEditing()"
        class="outline-none"
        :class="{ outline: isEditing }"
      >
        {{ title }}
      </h3>
    </header>
    <transition-group name="card" tag="ul">
      <Card v-for="card in cards" :key="card.id" :card="card" :listId="id"/>
    </transition-group>

    <CardCreateForm :listId="id" />
  </section>
</template>

<script>
import { ref, reactive, toRefs } from "vue";
import Card from "@/components/Card.vue";
import CardCreateForm from "@/components/CardCreateForm.vue";

export default {
  components: { Card, CardCreateForm },
  props: {
    title: {
      type: String,
      default: "Nieco sa pokazilo",
    },
    cards: {
      type: Array,
    },
    id: {
      type: Number,
    },
  },
  setup(props) {
    // console.log(props.title);
    const titleElement = ref(null)

    const state = reactive({
      isEditing: false,
    });
    const saveTitle = () => {
        state.isEditing = false
        window.eventBus.emit('edit-list-title',{
          id: props.id,
          newTitle: titleElement.value.textContent 
        })
        
    }
    const startEditing = () => {
      state.isEditing = true
      setTimeout(() => {
        titleElement.value.focus()
      }, 0);
    }

    return {
      ...toRefs(state),
      saveTitle,
      titleElement,
      startEditing,
    };
  },
};
</script>

<style lang="css" scoped>
header {
  height: 2.5rem;
}
.outline-none {
  outline: none;
}
.outline {
  border: 2px solid #fff;
  border-radius: 3px;
  padding: 0.2rem;
}
h3 {
  margin: 0.5rem;
}
ul {
  margin: 0;
  padding: 0;
}
.list {
  border-radius: 6px;
  margin: 0.5rem;
  background: rgb(218, 209, 209);

  display: flex;
  flex-direction: column;
  width: 300px;
}

/* transitions */
.card-enter-active,
.card-leave-active {
  transition: all .2s;
}
.card-enter-from,
.card-leave-to {
  opacity: 0;
  transition: scale(0.75);
}
</style>