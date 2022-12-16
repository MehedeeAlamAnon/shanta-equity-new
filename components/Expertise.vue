<template>
  <section>
    <div class="expertise mx-auto w-1450px text-white mb-135px">
      <div class="h-316px bg-[#1f3c74] bg-opacity-87 flex">
        <img
          src="~/assets/images/expertise.png"
          alt="expertise"
          class="ml-192px mt-26px w-246px h-358px"
        />
        <div class="ml-71px">
          <h2 class="text-45px leading-45px mb-59px mt-47px">
            Expertise you need. Service you deserve.
          </h2>
          <div class="divider"></div>
          <p class="mt-36px max-w-835px text-20px leading-30px">
            Developing specialized, complex financial solutions by navigating
            quick, radical developments that are altering industries and
            business structures.
          </p>
        </div>
      </div>
    </div>
    <div class="flex justify-center items-end mb-82px">
      <!-- grid start -->
      <div class="grid grid-cols-4 w-1075.18px gap-21.54px">
        <div>
          <div class="bg-[#D9D9D9] h-326.4px"></div>
          <h3 class="text-20px leading-35px font-light text-justify mt-21px">
            Initial Public Offering
          </h3>
        </div>
        <div>
          <div class="bg-[#D9D9D9] h-326.4px">
            <img
              src="~/assets/images/merges.png"
              alt="acquisitions img"
              class="w-full h-full"
            />
          </div>
          <h3 class="text-20px leading-35px font-light text-justify mt-21px">
            Initial Public Offering
          </h3>
        </div>
        <div>
          <div class="bg-[#D9D9D9] h-326.4px">
            <img
              src="~/assets/images/corporate.png"
              alt="corporate img"
              class="w-full h-full"
            />
          </div>
          <h3 class="text-20px leading-35px font-light text-justify mt-21px">
            Corporate Advisory
          </h3>
        </div>
        <div>
          <div class="bg-[#D9D9D9] h-326.4px"></div>
          <h3 class="text-20px leading-35px font-light text-justify mt-21px">
            Portfolio Management
          </h3>
        </div>
      </div>
      <!-- grid start -->
      <div class="ml-52.82px mb-6px">
        <button
          class="w-135px h-38px border border-[#1F3C74] rounded-20px text-[#1F3C74] capitalize text-18px font-light leading-35px"
        >
          See More
        </button>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.expertise {
  background-image: url("~/assets/images/bg-office.png");
  background-size: cover;
  background-position: top left;
  height: 316px;
}
.divider {
  height: 3px;
  width: 116px;
  background-color: #fff;
}
</style>
