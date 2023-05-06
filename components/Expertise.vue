<template>
  <section>
    <div
      class="expertise mx-auto w-full 2xl:(w-1450px) max-w-full text-white mb-135px"
    >
      <div
        class="h-750px sm:h-700px md:h-720px lg:h-370px xl:h-340px 2xl:h-316px bg-[#1f3c74] bg-opacity-87 flex flex-col lg:flex-row"
      >
        <img
          src="~/assets/images/expertise.png"
          alt="expertise"
          class="mx-auto mt-40px lg:ml-192px lg:mt-50px xl:mt-35px 2xl:mt-26px w-246px h-358px"
        />
        <div class="text-center px-4 lg:(ml-71px text-left)">
          <h2
            class="text-36px leading-snug mt-30px mb-30px sm:(text-42px leading-tight) lg:(mt-47px text-45px mb-48px leading-tight) expertise-title"
          >
            Expertise you need. Service you deserve.
          </h2>
          <div class="divider mx-auto lg:(ml-0 mr-auto)"></div>
          <p
            class="mt-30px max-w-full md:(max-w-[80%] mx-auto) text-20px leading-30px lg:(max-w-835px mt-36px)"
          >
            Developing specialized, complex financial solutions by navigating
            quick, radical developments that are altering industries and
            business structures.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.expertise {
  background-image: url("~/assets/images/bg-office.png");
  background-size: cover;
  background-position: top left;
}
.divider {
  height: 3px;
  width: 116px;
  background-color: #fff;
}
@media (max-width: 575px) {
  .expertise-title {
    font-size: 30px;
  }
}
@media (max-width: 375px) {
  .expertise-title {
    font-size: 26px;
  }
}
</style>
