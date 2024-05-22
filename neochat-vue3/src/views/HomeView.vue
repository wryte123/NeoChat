<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />

    <HelloWorld :msg="msg" />
    <button @click="change">change</button>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import HelloWorld from "../components/HelloWorld.vue";

const msg = ref("Hello NeoChat!");

const change = () => {
  if (msg.value === "Hello NeoChat!") {
    msg.value = "Hello World!";
  } else {
    msg.value = "Hello NeoChat!";
  }
};
</script>
