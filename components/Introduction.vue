<template>
  <section>
    <div class="flex items-center flex-col md:flex-row">
      <div
        class="w-full md:w-[43.65%] intro-img bg-cover bg-center bg-no-repeat min-h-xs sm:min-h-425px"
      >
        <div
          class="intro-img-overlay w-full min-h-xs text-36px sm:(text-50px min-h-425px) leading-snug text-white uppercase flex text-center justify-center items-center px-4"
        >
          Shanta Equity Limited
        </div>
      </div>
      <div class="w-full md:w-[56.35%] p-30px lg:p-40px xl:p-66px">
        <p class="mb-4 xl:mb-8">
          Shanta Equity Limited is an innovative all encompassing merchant bank
          offering a range of investment banking, corporate advisory and
          portfolio management solutions.
        </p>
        <p class="mb-4 xl:mb-8">
          We draw on the expertise of the best minds in the country to provide
          our clients with customized investment banking and corporate advisory
          services
        </p>
        <p>
          We aim at meeting the unique needs of each client by striving to help
          clients take control of their finances, while providing relentless
          services and maintaining high ethical standards. We have a clear
          purpose, and we have adapted our business practices to commensurate
          with such.
        </p>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.intro-img {
  background-image: url("~/assets/images/introduction.svg");
}
.intro-img-overlay {
  background: linear-gradient(
    90deg,
    rgba(31, 60, 116, 0.78) 0%,
    rgba(31, 60, 116, 0.6084) 12.52%,
    rgba(31, 60, 116, 0.4446) 24.56%,
    rgba(31, 60, 116, 0.1482) 32.81%,
    rgba(31, 60, 116, 0) 43.23%,
    rgba(31, 60, 116, 0) 91.87%
  );
}
</style>
