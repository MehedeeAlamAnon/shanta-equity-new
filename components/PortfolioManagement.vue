<template>
  <section
    class="portfolio-management bg-no-repeat bg-cover bg-center xl:(h-400px) <sm:(h-250px) sm:(h-300px)"
  >
    <div
      class="portfolio-management-overlay h-full grid grid-cols-1 2xl:(grid-cols-2)"
    >
      <div
        class="w-[95%] px-4 md:(w-730px) lg:(w-778px) mx-auto text-white w-full 2xl:(w-613px ml-160px)"
      >
        <h3
          class="text-26px <sm:(text-18px) xl:(text-36px leading-snug) mb-36px pt-60px font-bold 2xl:(mb-40px)"
        >
          Portfolio Management
        </h3>
        <h2
          class="text-48px leading-tight mb-40px <sm:(text-32px) sm:(mb-56px) xl:(text-72px leading-snug) font-bold"
        >
          Don’t delay <br />
          Invest today.
        </h2>
      </div>
      
    </div>
  </section>
</template>

<script setup></script>

<style lang="scss" scoped>
.portfolio-management {
  background-image: url("~/assets/images/bg-portfolio-management.png");
  &-overlay {
    background: linear-gradient(
      360deg,
      #000000 4.17%,
      rgba(0, 0, 0, 0.701172) 25.52%,
      rgba(0, 0, 0, 0.701172) 40.63%,
      rgba(0, 0, 0, 0.291667) 73.96%,
      rgba(0, 0, 0, 0) 100%
    );
  }
  .box-shadow {
    box-shadow: 3px 3px 50px rgba(0, 0, 0, 0.1);
  }
  .line-divider {
    width: 3px;
    height: 185px;
    background-color: #1f3c74;
  }
}

@media (min-width: 1536px) and (max-width: 1680px) {
  .text-content {
    margin-left: -70px;
  }
}
@media (max-width: 639px) {
  .portfolio-management {
    .line-divider {
      width: 185px;
      height: 3px;
    }
  }
}
</style>
