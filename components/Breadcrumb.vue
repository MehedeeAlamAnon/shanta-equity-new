<template>
  <div class="w-full h-240px relative">
    <img src="~/assets/images/bg-our-team.png" />
    <!-- <img :src="`../assets/images/${imgUrl}.png`" /> -->
    <!-- <img v-if="bgImage" :src="require(`~/assets/images/${bgImage}.png`)" /> -->
    <div
      class="absolute top-0 bottom-0 flex w-full h-full breadcrumb-overlay justify-center items-center text-55px font-light text-white"
    >
      {{ pageTitle }}
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  imgUrl: String,
  pageTitle: String,
});
</script>

<style lang="scss" scoped>
.breadcrumb-overlay {
  background: linear-gradient(
    90deg,
    #1f3c74 7.81%,
    rgba(31, 60, 116, 0.765625) 23.44%,
    rgba(31, 60, 116, 0.392976) 70.31%,
    rgba(31, 60, 116, 0) 100%
  );
}
</style>
