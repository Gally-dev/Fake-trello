<template>
  <li class="card" :class="{ zIndex: isPopped }" @contextmenu.prevent="doPop()">
    <!-- contextmenu znamena right click -->
    <card-image :image="card.image" />
    <card-labels :labels="card.labels" />
    <p
      ref="cardText"
      :contenteditable="isEditing"
      @keydown.enter="saveText()"
      class="outline-none"
      :class="{ outline: isEditing }"
    >
      {{ card.text }}
    </p>
    <card-tags :tags="card.tags" />
    <transition name="pop">
      <card-popup
        v-if="isPopped"
        @popUp-close="undoPop()"
        :card="card"
        :listId="listId"
        @start-edit="startEditing()"
      />
    </transition>
  </li>
</template>

<script>
import { ref, toRefs, reactive } from "vue";

import CardTags from "@/components/CardTags.vue";
import CardImage from "@/components/CardImage.vue";
import CardLabels from "@/components/CardLabels.vue";
import CardPopup from "@/components/CardPopup.vue";

export default {
  components: { CardTags, CardImage, CardLabels, CardPopup },
  props: {
    card: {
      type: Object,
    },
    listId: {
      type: Number,
    },
  },
  setup(props) {
    const cardText = ref(null);

    const state = reactive({
      isPopped: false,
      isEditing: false,
    });
    const doPop = () => {
      state.isPopped = true;
      window.eventBus.emit("toggle-overlay", true); // sending to home.vue
    };
    const undoPop = () => {
      state.isPopped = false;
      window.eventBus.emit("toggle-overlay", false); //sending to home.vue
    };
    const saveText = () => {
      state.isEditing = false;
      window.eventBus.emit("edit-card-text", {
        id: props.card.id,
        listId: props.listId,
        newText: cardText.value.textContent,
      });
    };
    const startEditing = () => {
      state.isEditing = true;
      setTimeout(() => {
        cardText.value.focus();
      }, 0);
    };

    return {
      ...toRefs(state),
      doPop,
      undoPop,
      saveText,
      cardText,
      startEditing,
    };
  },
};
</script>

<style lang="css" scoped>
aside {
  display: flex;
}
li {
  /* border: 1px solid white; */
  list-style: none;
  background: rgb(255, 255, 255);
  box-shadow: 0 1px 3px rgba(85, 80, 80, 0.473);
  margin: 0.5rem;
  padding: 0.5rem;
  border-radius: 5px;
  text-align: left;
  font-weight: 600;

  position: relative;
}
.zIndex {
  z-index: 20;
}

p {
  /* margin: .4rem .4rem .4rem 0; */
  margin: 0.4rem 0.4rem 0.4rem 0;
}
/* transitions */
.pop-enter-active,
.pop-leave-active {
  transition: all 0.1s ease-in;
}
.pop-enter-from,
.pop-leave-to {
  opacity: 0;
  transform: translateX(-25%);
}
/* added classes */
.outline-none {
  outline: none;
}
.outline {
  border: 2px solid #fff;
  border-radius: 3px;
  padding: 0.2rem;
}
</style>