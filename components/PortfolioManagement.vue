<template>
  <section class="portfolio-management h-383px mb-200px">
    <div class="portfolio-management-overlay h-full grid grid-cols-2">
      <div class="ml-160px text-white max-w-613px">
        <h3 class="text-45px leading-75px mb-61px mt-41px font-bold">
          Portfolio Management
        </h3>
        <h2 class="text-85px leading-75px mb-56px font-bold">
          Don’t delay <br />
          Invest today.
        </h2>
      </div>
      <div
        class="w-778px h-314px bg-white pt-25px pl-66px pr-83px pb-32.73px box-shadow mt-184px ml-auto mr-142px"
      >
        <div class="flex items-center">
          <button
            class="text-20px leading-24px font-light border-1 border-[#1F3C74] rounded-20px text-[#1F3C74] capitalize px-19px h-49px"
          >
            Create Account
          </button>
          <div class="line-divider mx-80px"></div>
          <form class="text-center w-290px">
            <h3
              class="text-35px leading-75px font-bold text-[#1F3C74] uppercase"
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
</style>
