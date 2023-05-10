<template>
  <section
    class="portfolio-management mb-200px bg-no-repeat bg-cover bg-center h-570px sm:(h-500px) md:(h-560px) 2xl:(h-383px)"
  >
    <div
      class="portfolio-management-overlay h-full grid grid-cols-1 2xl:(grid-cols-2)"
    >
      <div
        class="w-[95%] px-4 md:(w-730px) lg:(w-778px) mx-auto text-white w-full 2xl:(w-613px ml-160px)"
      >
        <h3
          class="text-36px <sm:(text-26px) xl:(text-45px leading-75px) mb-36px mt-41px font-bold 2xl:(mb-61px)"
        >
          Portfolio Management
        </h3>
        <h2
          class="text-46px leading-tight mb-40px <sm:(text-36px) sm:(mb-56px) xl:(text-85px leading-75px) font-bold"
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
