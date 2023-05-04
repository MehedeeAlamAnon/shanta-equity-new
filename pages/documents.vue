<template>
    <Breadcrumb imgUrl="bg-transactions.png" pageTitle="Documents" />
    <section
      class="max-w-998px px-4 mx-auto font-light py-75px text-20px sm:(text-30px leading-65px) text-center"
    >
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi vel voluptatibus labore dolore fuga at inventore laborum aliquam, a optio eos error vitae ipsum officiis maiores. Distinctio adipisci aut repudiandae!
    </section>
    <section class="mb-60px xl:(mb-130px)">
      <!-- internal section start -->
      <div class="max-w-full px-4 xl:(max-w-1258px px-0) mx-auto">
        <h1
          class="text-40px font-medium sec-title text-center mb-50px xl:(mb-50px)"
        >
          <span class="sec-title-text">Capabilities in Investment Banking</span>
        </h1>
        <p class="px-4 mx-auto font-light text-18px sm:(text-24px leading-relaxed) text-center mb-60px">
            We offer a wide range of Investment Banking services across the Equity Capital Market, Debt Capital Market and Corporate Advisory space to help our corporate partners raise capital, manage risks and achieve their strategic goals.
        </p>
        <!-- inner internal wrapper start -->
        <div class="max-w-1207px mx-auto mb-60px xl:(mb-72px)">
          <h2
            class="text-28px sm:text-35px leading-35px text-[#1F3C74] font-light border-bottom border-bottom-1px border-[#1F3C74] pb-31px mb-40px"
          >
            Portfolio Management
          </h2>
          <p class="font-light text-16px leading-relaxed mb-20px">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus illum facere ipsa nulla explicabo veritatis, amet tempore dolore culpa, pariatur odio iste error harum. Minus, explicabo nostrum. Dolorem, qui ullam?
          </p>
          <ul class="pl-8">
            <li class="list-circle font-light my-2"><a href="/" class="text-[#1f3c74] font-normal" download>NDPM Form</a></li>
            <li class="list-circle font-light my-2"> <a href="/" class="text-[#1f3c74] font-normal" download>DPM Form</a></li>
            <li class="list-circle font-light my-2"> <a href="/" class="text-[#1f3c74] font-normal" download>Portfolio Management Brochure</a></li>
          </ul>
        </div>
        <!-- inner internal wrapper end -->
        <!-- inner internal wrapper start -->
        <div class="max-w-1207px mx-auto mb-60px xl:(mb-72px)">
          <h2
            class="text-28px sm:text-35px leading-35px text-[#1F3C74] font-light border-bottom border-bottom-1px border-[#1F3C74] pb-31px mb-40px"
          >
            Investment Banking
          </h2>
          <p class="font-light text-16px leading-relaxed mb-20px">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus illum facere ipsa nulla explicabo veritatis, amet tempore dolore culpa, pariatur odio iste error harum. Minus, explicabo nostrum. Dolorem, qui ullam?
          </p>
          <ul class="pl-8">
            <li class="list-circle font-light my-2"><a href="/bhl_rh_prospectus.pdf" class="text-[#1f3c74] font-normal" download>Download my CV</a></li>
            <li class="list-circle font-light my-2"> <a href="/IFAD_Bond_AIM.pdf" class="text-[#1f3c74] font-normal" download>IFAD Autos – Bond IM</a></li>
          </ul>
        </div>
        <!-- inner internal wrapper end -->
      </div>
      <!-- internal section end -->
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
  