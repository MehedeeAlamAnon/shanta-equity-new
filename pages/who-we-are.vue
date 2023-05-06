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
      <!-- <div class="w-full">
          <h3
            class="text-28px sm:text-35px leading-35px text-[#1F3C74] font-light border-bottom border-bottom-1px border-[#1F3C74] pb-31px mb-10"
          >
            Vision
          </h3>
          <p class="mb-4 xl:mb-8 leading-relaxed">
              Providing the best capital market solutions while upholding the highest levels of ethical standards, trust and integrity. 
          </p>
      </div> -->
      <div class="w-full my-20">
          <h3
            class="text-28px sm:text-35px leading-35px text-[#1F3C74] font-light border-bottom border-bottom-1px border-[#1F3C74] pb-31px mb-10"
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
            class="text-28px sm:text-35px leading-35px text-[#1F3C74] font-light border-bottom border-bottom-1px border-[#1F3C74] pb-31px mb-10"
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
    <!-- <div
      class="max-w-full px-4 lg:(max-w-992px px-0) mx-auto text-14px font-light leading-35px text-justify"
    >
      <p class="mb-28px">
        Shanta Group started its journey in 1988, and had since become one of
        the forerunners in ready-made garment (RMG) export, earning a reputation
        as an important vendor for some of the most renowned apparel brands of
        USA and Europe. Shanta Group is also one of the key members of the STS
        Group - the promoter of the world class Apollo Hospitals Dhaka,
        International School Dhaka (ISD), the only International Baccalaureate
        (IB) School of the country, and the Delhi Public School, Dhaka.
      </p>
      <p class="mb-28px">
        Shanta has a long track record of construction since 1991, having been
        involved in various projects of its own and of the STS Group. It has
        built the iconic Safura Tower - the 16 storied commercial landmark at
        Banani, the 200,000 sqft. multi-facility centrally air conditioned
        International School Dhaka (ISD) at Bashundhara, the 125,000 sqft Delhi
        Public School at Uttara, state-of-the-art RMG factories such as its
        150,000 sqft Shanta Industries Ltd, the 150,000 sqft Shanta Denims Ltd
        and the 35,000 sqft Shanta Wash Works Ltd at Dhaka EPZ.
      </p>
      <p>
        Furthermore, the team was also involved in the construction of Apollo
        Hospitals Dhaka - the 550,000 sqft first multi-disciplinary
        super-specialty hospital of the country. Eventually exiting the RMG
        sector to pursue the passion for construction, Shanta Holdings Limited
        (SHL) was established in 2005 with a mission to change the lifestyle of
        city dwellers by providing modern, functional and aesthetic living and
        working spaces that can only be compared to the most successful
        developers of the globe. The Group's latest venture, Shanta Securities
        Ltd - a brokerage house, was established in 2015 with the aim of setting
        higher standards in equities trading.
      </p>
    </div> -->
    <!-- <h2
      class="text-40px leading-45px font-light uppercase text-[#1F3C74] mt-86px mb-71px"
    >
      Core Values
    </h2>
    <div
      class="max-w-full px-4 mx-auto grid sm:(grid-cols-2 gap-x-40px) lg:(grid-cols-3) xl:(max-w-1112px px-0 gap-x-85px)"
    >
      <div
        class="mb-30px sm:(mb-47px) transition hover:bg-[#F1F8FF]"
        v-for="value in values"
        :key="value.id"
      >
        <h3
          class="h-132px bg-[#1F3C74] w-full text-25px text-center flex justify-center items-center text-white"
        >
          {{ value.title }}
        </h3>
        <p
          class="text-20px leading-30px font-light py-4 px-31px flex justify-center items-center text-justify sm:(min-h-205px) xl:(text-25px leading-30px)"
        >
          {{ value.description }}
        </p>
      </div>
    </div> -->
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
