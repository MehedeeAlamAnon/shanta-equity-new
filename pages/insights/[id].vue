<template>
  <Breadcrumb imgUrl="bg-transactions.png" pageTitle="Insights" />
  <section class="pt-79px pb-76px">
    <!-- internal section start -->
    <div class="max-w-1264px mx-auto px-4 xl:(px-8) 2xl:(px-0)">
      <div class="max-w-1192px w-full mx-auto">
        <p class="text-15px font-medium mb-60px">{{ insight.date }}</p>
        <h2
          class="text-36px md:(text-48px leading-snug) leading-snug 2xl:(text-60px leading-80px) text-center font-light mb-71px"
        >
          {{ insight.title }}
        </h2>
      </div>
      <img
        :src="`/images/insights/${insight.imgCover}`"
        alt="insight details"
        class="w-full"
      />
      <div class="max-w-1108px mx-auto" v-html="insight.description"></div>
      <div class="max-w-1108px mx-auto">
        <img
          :src="`/images/insights/${insight.imgGallery}`"
          alt="insight blog image"
          class="w-full max-w-880px mt-69px mx-auto"
        />
      </div>
      <div class="max-w-1108px mx-auto" v-html="insight.description2"></div>
    </div>
    <!-- internal section end -->
  </section>
  <section class="pt-52px pb-85px bg-[#F1F8FF]">
    <div class="max-w-1380px mx-auto">
      <h2
        class="text-36px leading-snug sm:(text-50px leading-70px) font-light text-[#1F3C74] text-center mb-50px sm:(mb-62px)"
      >
        Explore More Insights
      </h2>
      <div
        class="grid px-4 gap-30px sm:(grid-cols-2) xl:(grid-cols-3 gap-60px px-8) 2xl:(gap-x-138px px-0)"
      >
        <!-- col start -->
        <div class="bg-white insight-item">
          <img
            src="~/assets/images/insights/image-3.png"
            alt="insight 3"
            class="w-full"
          />
          <div class="py-17px px-25px">
            <h3
              class="text-20px leading-35px text-[#1F3C74] mb-16px 2xl:(mb-38px) font-medium"
            >
              How the dollar crisis is increasing burden for international
              students
            </h3>
            <p
              class="text-15px leading-35px font-light mb-16px 2xl:(mb-38px) capitalize"
            >
              Zinedine Zidan
            </p>
            <p class="text-15px leading-35px font-light capitalize">
              4 Minute Read
            </p>
          </div>
        </div>
        <!-- col end -->
        <!-- col start -->
        <div class="bg-white insight-item">
          <img
            src="~/assets/images/insights/image-2.png"
            alt="insight 2"
            class="w-full"
          />
          <div class="py-17px px-25px">
            <h3
              class="text-20px leading-35px text-[#1F3C74] mb-16px 2xl:(mb-38px) font-medium"
            >
              How the dollar crisis is increasing burden for international
              students
            </h3>
            <p
              class="text-15px leading-35px font-light mb-16px 2xl:(mb-38px) capitalize"
            >
              Zinedine Zidan
            </p>
            <p class="text-15px leading-35px font-light capitalize">
              4 Minute Read
            </p>
          </div>
        </div>
        <!-- col end -->
        <!-- col start -->
        <div class="bg-white insight-item">
          <img
            src="~/assets/images/insights/image-5.png"
            alt="insight 5"
            class="w-full"
          />
          <div class="py-17px px-25px">
            <h3
              class="text-20px leading-35px text-[#1F3C74] mb-16px 2xl:(mb-38px) font-medium"
            >
              How the dollar crisis is increasing burden for international
              students
            </h3>
            <p
              class="text-15px leading-35px font-light mb-16px 2xl:(mb-38px) capitalize"
            >
              Zinedine Zidan
            </p>
            <p class="text-15px leading-35px font-light capitalize">
              4 Minute Read
            </p>
          </div>
        </div>
        <!-- col end -->
      </div>
    </div>
  </section>
  <SubscribeSection />
</template>

<script setup>
import insights from "@/assets/data/insights.js";
const { id } = useRoute().params;
const insight = insights.find((data) => data.id == id);
</script>

<style lang="scss" scoped>
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
.center-justified {
  text-align: justify;
  text-align-last: center;
}
.subscribe-input {
  &::placeholder {
    color: rgba(0, 32, 96, 0.54);
  }
  &:focus,
  &:focus-within {
    outline: 0;
  }
}
</style>
