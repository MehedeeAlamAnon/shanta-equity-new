<template>
  <Breadcrumb
    imgUrl="bg-portfolio-management.png"
    pageTitle="Portfolio Management"
  />
  <section class="pt-81px pb-135px">
    <h2
      class="max-w-1429px mx-auto text-26px leading-snug px-4 xl:(text-40px leading-65px px-0) text-center tracking-wider font-light mb-113px"
    >
      We adopt a collaborative, insightful approach to portfolio management with
      the goal of empowering you to engage in powerful decisions.
    </h2>
    <!-- internal section start -->
    <div class="w-full px-4 xl:(max-w-1207px px-0) mx-auto">
      <h2
        class="text-35px leading-tight x:(leading-35px) text-[#1F3C74] font-light border-bottom border-bottom-1px border-[#1F3C74] pb-31px mb-62px"
      >
        Choose The Investment Approach That’s Right for You
      </h2>
      <!-- grid start -->
      <div
        class="max-w-720px mx-auto grid sm:(grid-cols-2) gap-x-50px gap-y-79px"
      >
        <!-- col start -->
        <div>
          <img
            src="~/assets/images/equity_financing/discretionary.png"
            alt="Discretionary"
            class="w-full"
          />
          <h3 class="text-30px leading-36px text-center mt-36px text-[#1F3C74]">
            Discretionary
          </h3>
        </div>
        <!-- col end -->
        <!-- col start -->
        <div>
          <img
            src="~/assets/images/equity_financing/non-discretionary.png"
            alt="non-discretionary"
            class="w-full"
          />
          <h3 class="text-30px leading-36px text-center mt-36px text-[#1F3C74]">
            Non-Discretionary
          </h3>
        </div>
        <!-- col end -->
      </div>
      <!-- grid end -->
    </div>
    <!-- internal section end -->
  </section>
  <section class="mb-134px px-4">
    <div
      class="w-full xl:(max-w-1200px) 2xl:(max-w-1397px) mx-auto w-full flex justify-end"
    >
      <div
        class="xl:(max-w-1200px) 2xl:(max-w-1349px) w-full flex flex-col sm:(flex-row) bg-[#1F3C74] text-white"
      >
        <div class="w-full sm:(w-1/2) 2xl:(min-w-632px)">
          <img
            src="~/assets/images/start-financial-journey.png"
            alt="start financial journey"
            class="2xl:(-ml-48px -mt-34px) w-full h-full"
          />
        </div>
        <div
          class="w-full sm:(w-1/2) px-30px py-40px 2xl:(min-w-659px -ml-10px pt-47px pr-68px pb-65px)"
        >
          <h2
            class="text-30px leading-snug xl:(text-42px leading-snug) 2xl:(text-50px leading-60px) font-bold mb-29px"
          >
            Start Your Financial Journey With Us
          </h2>
          <p
            class="text-18px leading-snug xl:(text-25px leading-30px) font-light mb-36px"
          >
            Shanta Equity provides you with 24/7 access to your accounts from
            any device anytime.
          </p>
          <button
            type="button"
            class="border-2 border-white text-20px py-15px px-30px lg:(py-17px px-35px text-28px) 2xl:(text-35px py-23px px-38px) font-light uppercase"
          >
            Get Started
          </button>
        </div>
      </div>
    </div>
  </section>
  <section class="pb-85px">
    <div class="px-4 xl:(max-w-1200px px-0) 2xl:(max-w-1397px) mx-auto w-full">
      <div class="max-w-1031px">
        <div class="border-left-10px border-[#86A6E5] mb-58px pl-33px">
          <h2
            class="text-36px sm:(text-48px) lg:(text-55px) font-bold capitalize mb-30px lg:(mb-40px)"
          >
            Confused About Investment Procedure?
          </h2>
          <h3
            class="text-24px sm:(text-30px) lg:(text-40px) font-medium capitalize"
          >
            Get a call back from us
          </h3>
        </div>
        <div class="max-w-500px w-full sm:(pl-45px)">
          <form action="" class="max-w-435px">
            <div class="w-full mb-31px">
              <input
                type="text"
                name="name"
                placeholder="Name"
                class="form-control w-full h-44px border-1 border-[#1F3C74] pl-22px font-light"
              />
            </div>
            <div class="w-full mb-31px">
              <input
                type="email"
                name="name"
                placeholder="Email"
                class="form-control w-full h-44px border-1 border-[#1F3C74] pl-22px font-light"
              />
            </div>
            <div class="w-full mb-31px">
              <input
                type="text"
                name="phone"
                placeholder="Phone"
                class="form-control w-full h-44px border-1 border-[#1F3C74] pl-22px font-light"
              />
            </div>
            <div class="text-center">
              <button
                type="submit"
                class="w-120px h-44px bg-[#1F3C74] text-white text-15px font-light"
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
