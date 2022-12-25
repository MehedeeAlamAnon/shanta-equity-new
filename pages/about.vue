<template>
  <Breadcrumb imgUrl="bg-about-sel.png" pageTitle="About SEL" />
  <section class="text-center pt-79px">
    <h2
      class="text-34px sm:(text-40px) leading-45px font-light uppercase text-[#1F3C74] mb-53px"
    >
      Our Background
    </h2>
    <div
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
    </div>
    <h2
      class="text-40px leading-45px font-light uppercase text-[#1F3C74] mt-86px mb-71px"
    >
      Core Values
    </h2>
    <div
      class="max-w-full px-4 mx-auto grid sm:(grid-cols-2 gap-x-40px) lg:(grid-cols-3) xl:(max-w-1112px px-0 gap-x-85px)"
    >
      <!-- col item start -->
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
      <!-- col item end -->
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
