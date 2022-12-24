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
          class="text-36px sm:(text-45px leading-75px) mb-36px mt-41px font-bold 2xl:(mb-61px)"
        >
          Portfolio Management
        </h3>
        <h2
          class="text-46px leading-tight mb-40px sm:(text-85px leading-75px mb-56px) font-bold"
        >
          Don’t delay <br />
          Invest today.
        </h2>
      </div>
      <div
        class="w-[95%] p-8 text-content mx-auto bg-white box-shadow md:(w-730px pt-32.73px pl-66px pr-83px pb-32.73px) lg:(w-778px) 2xl:(w-778px mt-184px mr-142px ml-auto)"
      >
        <div class="flex flex-col items-center gap-y-8 sm:(flex-row)">
          <button
            class="text-20px leading-24px font-light border-1 border-[#1F3C74] rounded-20px text-[#1F3C74] capitalize px-19px h-49px"
          >
            Create Account
          </button>
          <div
            class="line-divider mx-0 sm:(mx-30px block) md:(mx-55px) lg:(mx-80px)"
          ></div>
          <form class="text-center w-290px">
            <h3
              class="text-30px mb-4 leading-normal font-bold text-[#1F3C74] uppercase lg:(text-35px leading-75px)"
            >
              Get a Call Back
            </h3>
            <div>
              <input
                type="text"
                placeholder="Name"
                class="border-1 border-[#1F3C74] h-28.27px pl-13.97px w-full max-w-279.46px mb-19.92px font-light text-15px"
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="Phone"
                class="border-1 border-[#1F3C74] h-28.27px pl-13.97px w-full max-w-279.46px mb-19.92px font-light text-15px"
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="Email"
                class="border-1 border-[#1F3C74] h-28.27px pl-13.97px w-full max-w-279.46px mb-15.37px font-light text-15px"
              />
            </div>
            <div>
              <button
                type="submit"
                class="bg-[#1F3C74] h-28.27px w-77.09px text-15px font-light text-white"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
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
