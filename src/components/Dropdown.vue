<template>
    <div class="dropdown">
        <div class="trigger" @click="verOpciones = !verOpciones">
            <slot name="trigger"></slot>
        </div>

        <div class="opciones" :style="{ top: top + 'px' }" v-show="verOpciones">
            <slot name="opciones"></slot>
        </div>
    </div>
</template>

<script>
import { ref } from "vue"

export default {
    name: 'Dropdown',
    props: {
        top: {
            type: String,
            default: "25"
        }
    },
    setup() {
        const verOpciones = ref(false);

        return { verOpciones }
    }
}
</script>

<style scoped>
.dropdown {
    position: relative;
}
.trigger {
    align-items: center;
    column-gap: 0.25rem;
    cursor: pointer;
    display: flex;
}

.opciones {
    background-color: white;
    border-radius: 5px;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    left: -55px;
    padding: 5px 10px;
    position: absolute;
    width: 150px;
    z-index: 50;
}
</style>