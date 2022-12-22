<template>
  <header class="px-32px">
    <nav class="flex justify-between items-center h-74px">
      <div>
        <NuxtLink to="/">
          <img src="~/assets/images/logo.svg" alt="SEL Logo" />
        </NuxtLink>
      </div>
      <div class="flex justy-end items-center space-x-5">
        <ul class="flex space-x-5">
          <li>
            <NuxtLink to="/about" class="uppercase font-light nav-link"
              >About us</NuxtLink
            >
          </li>
          <li>
            <NuxtLink to="/expertise" class="uppercase font-light nav-link"
              >Expertise</NuxtLink
            >
          </li>
          <li>
            <NuxtLink to="/our-team" class="uppercase font-light nav-link"
              >Team</NuxtLink
            >
          </li>
          <li>
            <NuxtLink to="/insights" class="uppercase font-light nav-link"
              >Insights</NuxtLink
            >
          </li>
          <li>
            <NuxtLink to="/transactions" class="uppercase font-light nav-link"
              >Transactions</NuxtLink
            >
          </li>
          <li>
            <NuxtLink class="uppercase font-light nav-link"
              >Memorandum</NuxtLink
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
    </nav>
  </header>
</template>

<style scoped lang="scss">
.nav-link {
  font-size: 18px;
  color: #1f3c74;
}
.search {
  &:focus-visible {
    outline: none;
  }
}
.router-link-active.router-link-exact-active {
  font-weight: 500;
}
</style>
