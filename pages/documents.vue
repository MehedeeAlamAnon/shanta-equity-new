<template>
    <Breadcrumb imgUrl="bg-transactions.png" pageTitle="Documents" />
    <section class="py-70px md:(py-100px)">
      <div class="container mx-auto px-4">
        <!-- inner internal wrapper start -->
        <div class="w-full mb-60px">
          <h2
            class="text-26px sm:text-32px leading-snug text-[#1F3C74] font-light border-bottom border-bottom-1px border-[#1F3C74] pb-31px mb-40px"
          >
            Portfolio Management
          </h2>
          <ul class="pl-8">
            <li class="list-circle font-light my-2"><a href="/NDPM_Form.pdf" class="text-[#1f3c74] font-normal" download>NDPM Form</a></li>
            <li class="list-circle font-light my-2"> <span class="text-[#1f3c74] font-normal" download>DPM Form</span></li>
            <li class="list-circle font-light my-2"> <span class="text-[#1f3c74] font-normal" download>Portfolio Management Brochure</span></li>
          </ul>
        </div>
        <!-- inner internal wrapper end -->
        <!-- inner internal wrapper start -->
        <div class="w-full">
          <h2
            class="text-26px sm:text-32px leading-snug text-[#1F3C74] font-light border-bottom border-bottom-1px border-[#1F3C74] pb-31px mb-40px"
          >
            Investment Banking
          </h2>
          <ul class="pl-8">
            <li class="list-circle font-light my-2"><a href="/bhl_rh_prospectus.pdf" class="text-[#1f3c74] font-normal" download>Prospectus - Best Holdings Limited</a></li>
            <li class="list-circle font-light my-2"> <a href="/IFAD_Bond_AIM.pdf" class="text-[#1f3c74] font-normal" download>Information Memorandum - IFAD Autos Bond Secured Coupon Bearing Bond</a></li>
          </ul>
        </div>
        <!-- inner internal wrapper end -->
      </div>
    </section>

  </template>

  <script setup></script>

  <style lang="scss" scoped>
  .sec-title {
    position: relative;
    &::before {
      position: absolute;
      content: "";
      height: 3px;
      background-color: #1f3c74;
      width: 100%;
      top: 50%;
      left: 0;
      transform: translateY(-50%);
      z-index: -1;
    }
    &-text {
      background-color: #fff;
      padding: 17px 29px;
    }
  }
  @media (max-width: 640px) {
    .sec-title {
      font-size: 36px;
      &-text {
        padding: 10px 15px;
        max-width: 270px;
        display: inline-block;
      }
    }
  }
  @media (max-width: 375px) {
    .sec-title {
      font-size: 32px;
      &-text {
        padding: 10px;
        max-width: 220px;
      }
    }
  }
  </style>
