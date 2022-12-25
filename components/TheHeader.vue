<template>
  <header class="px-32px">
    <nav class="flex justify-between items-center h-74px">
      <div>
        <NuxtLink to="/">
          <img src="~/assets/images/logo.svg" alt="SEL Logo" />
        </NuxtLink>
      </div>
      <div class="hidden 2xl:(block)">
        <div class="flex justy-end items-center space-x-16 h-full">
          <ul class="flex space-x-32px h-full">
            <li>
              <NuxtLink to="/about" class="uppercase font-light nav-link h-full"
                >About us</NuxtLink
              >
            </li>
            <li>
              <NuxtLink
                to="/expertise"
                class="uppercase font-light nav-link h-full"
                >Expertise</NuxtLink
              >
            </li>
            <li>
              <NuxtLink
                to="/our-team"
                class="uppercase font-light nav-link h-full"
                >Team</NuxtLink
              >
            </li>
            <li>
              <NuxtLink
                to="/insights"
                class="uppercase font-light nav-link h-full"
                >Insights</NuxtLink
              >
            </li>
            <li>
              <NuxtLink
                to="/transactions"
                class="uppercase font-light nav-link h-full"
                >Transactions</NuxtLink
              >
            </li>
            <li>
              <NuxtLink class="uppercase font-light nav-link h-full"
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
      </div>
    </nav>
  </header>
</template>

<style scoped lang="scss">
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
</style>
