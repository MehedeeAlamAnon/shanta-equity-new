<template>
  <header class="px-32px header-nav relative">
    <nav
      class="flex justify-between items-center h-74px"
      :class="{ 'display-menu': showMenu }"
    >
      <div>
        <NuxtLink to="/">
          <img src="~/assets/images/logo.svg" alt="SEL Logo" />
        </NuxtLink>
      </div>
      <Menu class="<xl:(hidden)" />
      <Hamburger @click="handleMenu" class="hidden <xl:(block)" />
    </nav>
    <MenuSm class="xl:(hidden)" v-if="showMenu" />
  </header>
</template>

<script setup>
const showMenu = ref(false);
const handleMenu = () => {
  showMenu.value = !showMenu.value;
  console.log(showMenu);
};
</script>

<style scoped lang="scss"></style>
