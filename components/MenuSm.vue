<template>
  <div
    class="absolute bg-[#1f3c74] top-74px left-0 z-50 p-30px flex flex-col space-y-6 h-screen"
  >
    <ul class="flex flex-col space-y-3">
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
        <NuxtLink class="uppercase font-light nav-link">Downloads</NuxtLink>
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
<style lang="scss" scoped>
.nav-link {
  color: #fff;
  padding: 13px 0 10px;
  display: block;
  font-size: 14px;
  &:hover {
    background: #fff;
    color: #1f3c74;
    padding: 13px 20px 10px;
  }
}
.router-link-active.router-link-exact-active {
  font-weight: 500;
  background: #fff;
  color: #1f3c74;
  padding: 13px 20px 10px;
}
.search {
  &:focus-visible {
    outline: none;
  }
}
</style>
