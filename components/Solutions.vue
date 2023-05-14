<template>
    <section>
      <h2
        class="bg-[#1f3c74] text-white text-45px leading-normal font-light uppercase text-center py-52px px-32px sec-title"
      >
        THE SOLUTIONS WE OFFER
      </h2>
      <div class="container mx-auto px-4 pt-48px pb-60px">
        <div class="flex items-center flex-col md:flex-row gap-60px <xl:(gap-30px)">
            <div class="w-full">
                <h2
                  class="text-28px sm:text-35px leading-35px text-[#1F3C74] font-light border-bottom border-bottom-1px border-[#1F3C74] pb-31px mb-10"
                >
                  Investment Banking
                </h2>
                <p class="mb-4 xl:mb-8 leading-relaxed" >
                    We offer a comprehensive range of investment banking services, including Issue Management for IPOs, Issuance of Bonds and Preference Shares, M&A Valuation, and Corporate Advisory, to help our corporate partners achieve their financial needs.
                </p>
                <p>
                  <a href="" class="text-[#1F3C74]">Our Investment Banking Offerings</a>
                </p>
            </div>
            <div class="w-full">
                <img src="~/assets/images/investment-banking.jpg" alt="investment banking">
            </div>
        </div>
        <div class="flex items-center flex-col md:flex-row gap-60px mt-16 mb-8 <xl:(gap-30px) <md:(flex-col-reverse)">
            <div class="w-full">
                <img src="~/assets/images/portfolio-investment.jpg" alt="investment banking">
            </div>
            <div class="w-full">
                <h2
                  class="text-28px sm:text-35px leading-35px text-[#1F3C74] font-light border-bottom border-bottom-1px border-[#1F3C74] pb-31px mb-10"
                >
                  Portfolio Management
                </h2>
                <p class="mb-4 xl:mb-8 leading-relaxed" >
                  We provide discretionary and non-discretionary portfolio management services that are tailored to the unique needs of our clients. In case of non-discretionary portfolio management, we also provide margin financing.
                </p>
                <p>
                  <a href="" class="text-[#1F3C74]">Our Portfolio Management Offerings</a>
                </p>
            </div>
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
</style>
