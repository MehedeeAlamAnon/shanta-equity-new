<template>
  <section class="w-full relative">
    <img src="~/assets/images/background.jpg" class="w-full h-full" />
  </section>
  <section class="py-79px">
    <div class="container mx-auto px-4"> 
      <h2
      class="text-center text-34px sm:(text-40px) leading-45px font-light uppercase text-[#1F3C74] mb-53px"
      >
        Our Background
      </h2>
      <div class="w-full my-20">
          <h3
            class="text-26px sm:text-32px leading-snug text-[#1F3C74] font-light border-bottom border-bottom-1px border-[#1F3C74] pb-31px mb-10"
          >
            Our Story
          </h3>
          <div class="grid grid-cols-2 gap-60px items-center <xl:(grid-cols-1)">
            <div>
              <p class="mb-4 xl:mb-8 leading-relaxed">
                Shanta Equity Limited is an innovative investment bank specialized in offering a range of investment banking and portfolio management solutions to both institutional and individual clients.
              </p>
              <p class="mb-4 xl:mb-8 leading-relaxed">
                We strive to support our partners throughout the entire transaction process and beyond, with the end goal of ensuring their unique capital needs while upholding the highest ethical standards. We take great pride in our reputation for excellence and aim to be a trusted name to our clients in delivering long-term value that exceeds expectations.
                Our biggest asset is our team of professionals. We draw on the expertise of some of the most accomplished minds in our country’s Finance and Capital Market Space to provide our partners with streamlined investment banking and portfolio management services.
              </p>
              <p class="leading-relaxed">           
                Shanta Equity Limited was incorporated on 23 March 2021 and obtained its merchant banking license from Bangladesh Securities and Exchange Commission on 05 August 2021. Commercial operation of the company commenced in January 2022.
              </p>
            </div>
            <img src="~/assets/images/our-story.jpg" alt="Our story">
          </div>
      </div>
      <div class="w-full">
          <h3
            class="text-26px sm:text-32px leading-snug text-[#1F3C74] font-light border-bottom border-bottom-1px border-[#1F3C74] pb-31px mb-10"
          >
            Our Sister Concerns
          </h3>
          <div class="grid grid-cols-2 gap-60px items-center <xl:(grid-cols-1 )">
            <img src="~/assets/images/sister-concerns.jpg" alt="Our sister concerns" class="<xl:(order-last)">
            <div>
              <p class="mb-4 xl:mb-8 leading-relaxed">
                We are a sister concern of Shanta Holdings, a renowned corporate house in Bangladesh with industry leading establishments in multiple sectors including Real Estate, Healthcare, Banking and Financial Services, Education, and Luxury Retail. 
              </p>
              <p class="mb-4 xl:mb-8 leading-relaxed">
                Apart from Shanta Equity Limited, in the Capital Market Business, the other concerns of the group include Shanta Securities Limited, a leading stock brokerage, and Shanta Asset Management Limited, which was awarded the Best Asset Management Company in Bangladesh by Bangladesh Securities and Exchange Commission in 2022. The three concerns of Shanta Capital Market Business utilize this synergy in providing the best possible service to its clients.
              </p>
              <p class="leading-relaxed">           
                Together, we are SHANTA, and we are the flag-bearers of “setting standards”.
              </p>
            </div>
          </div>
      </div>
    </div>
  </section>
</template>
<script setup>
const values = [
  {
    id: 1,
    title: "Corporate",
    description:
      "Put the client’s interest first and act for their best interest within the confines of the law",
  },
  {
    id: 2,
    title: "Competence",
    description:
      "Keep up-to-date with the latest regulations and best practices to always provide the best quality service",
  },
  {
    id: 3,
    title: "Diligence",
    description:
      "Scrutinize for any inaccuracies and ensure the quality of our work meets the highest standards",
  },
  {
    id: 4,
    title: "Fairness",
    description:
      "Treat all clients in a fair and equitable manner without any favors or prejudice",
  },
  {
    id: 5,
    title: "Integrity",
    description:
      "Uphold the highest legal and ethical standards in all our activities",
  },
  {
    id: 6,
    title: "Commitment",
    description:
      "Plan and execute all our activities in alignment with the vision of the company’s leadership",
  },
];
</script>
