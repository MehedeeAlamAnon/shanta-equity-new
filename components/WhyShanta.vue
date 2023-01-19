<template>
  <section>
    <h2
      class="bg-[#1f3c74] text-white text-45px leading-normal font-light uppercase text-center py-52px px-32px sec-title"
    >
      WHY SHANTA EQUITY IS YOUR RIGHT PARTNER
    </h2>
    <div class="container mx-auto px-4 pt-48px pb-60px">
      <div
        class="grid grid-cols-1 gap-y-8 sm:(flex flex-wrap justify-center) md:(grid grid-cols-3) w-full max-w-1030px mx-auto"
      >
        <!-- col start -->
        <div class="item text-center">
          <div class="max-w-55px h-45px mx-auto text-center mb-28px">
            <img src="~/assets/images/ethical.png" alt="icon" />
          </div>
          <p class="text-15px leading-20px font-light">
            Higest Level of <br />
            <span class="font-bold">
              Ethical Standard, Corporate <br />
              Governance & Statutory Compliance
            </span>
          </p>
        </div>
        <!-- col end -->
        <!-- col start -->
        <div class="item text-center">
          <div class="max-w-55px h-45px mx-auto text-center mb-28px">
            <img src="~/assets/images/experienced.png" alt="icon" />
          </div>
          <p class="text-15px leading-20px font-light">
            One of the <span class="font-bold">Most Experienced</span> <br />
            teams in the industry
          </p>
        </div>
        <!-- col end -->
        <!-- col start -->
        <div class="item text-center">
          <div class="max-w-55px h-45px mx-auto text-center mb-28px">
            <img src="~/assets/images/network.png" alt="icon" />
          </div>
          <p class="text-15px leading-20px font-light">
            Strong <span class="font-bold">Market presence</span> and <br />
            <span class="font-bold">Networks</span>
          </p>
        </div>
        <!-- col end -->
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@media (max-width: 640px) {
  .sec-title {
    font-size: 26px;
  }
}
@media (min-width: 640px) and (max-width: 767px) {
  .item {
    min-width: 50%;
  }
}
</style>
