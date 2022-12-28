<template>
  <Breadcrumb imgUrl="bg-transactions.png" pageTitle="Insights" />
  <section>
    <div
      class="text-center pt-72px pb-64px border-bottom border-bottom-9px border-[#1F3C74] px-4"
    >
      <span class="text-32px leading-35px text-[#1F3C74] font-light"
        >Uncover the trends of
      </span>
      <span class="text-20px leading-35px font-light"
        >the global economy, markets and topics related to the industry.</span
      >
    </div>
  </section>
  <section class="pt-70px lg:(pt-91px) pb-60px bg-[#F1F8FF] px-4 xl:(px-0)">
    <!-- internal section start -->
    <div class="max-w-1207px mx-auto">
      <h2
        class="text-35px leading-35px text-[#1F3C74] font-light border-bottom border-bottom-1px border-[#1F3C74] pb-24px mb-74px"
      >
        Latest
      </h2>
      <div
        class="w-full mx-auto grid gap-30px sm:(grid-cols-2) xl:(grid-cols-3 gap-x-52px gap-y-48px)"
      >
        <!-- col start -->
        <NuxtLink
          v-for="insight in insights"
          class="bg-white insight-item"
          :to="`/insights/${insight.id}`"
        >
          <img
            :src="`/images/insights/${insight.imgCover}`"
            alt="insight image"
            class="w-full"
          />
          <div class="py-17px px-25px">
            <h3
              class="text-20px leading-35px text-[#1F3C74] mb-16px 2xl:(mb-38px) font-medium"
            >
              {{ insight.title }}
            </h3>
            <p
              class="text-15px leading-35px font-light mb-16px 2xl:(mb-38px) capitalize"
            >
              {{ insight.author }}
            </p>
            <p class="text-15px leading-35px font-light capitalize">
              {{ insight.time }} Read
            </p>
          </div>
        </NuxtLink>
        <!-- col end -->
      </div>
    </div>
    <!-- internal section end -->
    <!-- internal section start -->
    <div class="max-w-1207px mx-auto mt-92px">
      <h2
        class="text-35px leading-35px text-[#1F3C74] font-light border-bottom border-bottom-1px border-[#1F3C74] pb-24px mb-23px"
      >
        Archive
      </h2>
      <p class="text-25px leading-35px font-light">
        <NuxtLink to="/" class="underline">
          View Archives to see historic insights from Shanta Equity
        </NuxtLink>
      </p>
    </div>
    <!-- internal section end -->
  </section>
  <SubscribeSection />
</template>

<script setup>
import insights from "@/assets/data/insights.js";
</script>
<style lang="scss" scoped>
.subscribe-input {
  &::placeholder {
    color: rgba(0, 32, 96, 0.54);
  }
  &:focus,
  &:focus-within {
    outline: 0;
  }
}
.insight-item {
  position: relative;
  &::after {
    position: absolute;
    content: "";
    width: 100%;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.3);
    top: 0;
    left: 0;
    opacity: 0;
    transition: 0.3s;
  }
  &:hover::after {
    opacity: 1;
  }
}
</style>
