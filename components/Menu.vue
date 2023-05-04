<template>
  <div
    class="flex justy-end items-center xl:(space-x-5) 2xl:(space-x-16) h-full"
  >
    <ul class="flex xl:(space-x-5px) 2xl:(space-x-32px) h-full">
      <li>
        <NuxtLink to="/who-we-are" class="uppercase font-light nav-link h-full"
          >Who we are</NuxtLink
        >
      </li>
      <li>
        <NuxtLink to="/expertise" class="uppercase font-light nav-link h-full"
          >Expertise</NuxtLink
        >
      </li>
      <li>
        <NuxtLink to="/our-team" class="uppercase font-light nav-link h-full"
          >Team</NuxtLink
        >
      </li>
      <!-- <li>
        <NuxtLink to="/insights" class="uppercase font-light nav-link h-full"
          >Insights</NuxtLink
        >
      </li>
      <li>
        <NuxtLink
          to="/transactions"
          class="uppercase font-light nav-link h-full"
          >Transactions</NuxtLink
        >
      </li> -->
      <li>
        <NuxtLink to="/documents" class="uppercase font-light nav-link h-full"
          >Documents</NuxtLink
        >
      </li>
    </ul>
    <form action="">
      <div class="w-230px relative">
        <input
          type="search"
          placeholder="Search"
          class="w-full h-41px text-[#1f3c74] border-1 border-[#1f3c74] rounded-100px py-8px pl-40px pr-12px search"
        />
        <img
          src="~/assets/images/search-icon.svg"
          alt="search icon"
          class="absolute left-15px top-13.5px"
        />
      </div>
    </form>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.nav-link {
  font-size: 18px;
  color: #1f3c74;
  min-width: 154px;
  display: block;
  text-align: center;
  padding-top: 24px;
  padding-bottom: 24px;
  transition: all ease 0.3s;
  &:hover {
    background-color: #1f3c74;
    color: #fff;
  }
}
.search {
  &:focus-visible {
    outline: none;
  }
}
.router-link-active.router-link-exact-active {
  font-weight: 500;
}

@media (min-width: 1280px) and (max-width: 1535px) {
  .nav-link {
    padding-left: 10px;
    padding-right: 10px;
    min-width: 100px;
  }
}
</style>
