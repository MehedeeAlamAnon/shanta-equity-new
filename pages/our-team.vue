<template>
  <Breadcrumb imgUrl="bg-our-team" pageTitle="Meet The Shanta Equity Team" />
  <section
    class="grid grid-cols-5 w-1535px mx-auto gap-x-60px gap-y-56px pt-100px pb-70px"
  >
    <!-- col item start -->
    <div v-for="member in members" :key="member.id">
      <div class="bg-[#D9D9D9] h-339px">
        <!-- <img
          v-if="member.avatar"
          :src="require(`~/assets/images/members/${member.avatar}`)"
          alt=""
        /> -->
      </div>
      <p class="text-20px leading-35px font-light text-justify mt-21px">
        {{ member.name }}
      </p>
      <p class="text-16px font-bold text-justify mt-10px">
        {{ member.designation }}
      </p>
    </div>
    <!-- col item end -->
  </section>
</template>
<script setup>
const members = [
  {
    id: 1,
    name: "Rubayet-E-Ferdous",
    designation: "Chief Executive Officer",
    avatar: "",
  },
  {
    id: 2,
    name: "Arif Khan",
    designation: "Advisor",
    avatar: "",
  },
  {
    id: 3,
    name: "Md. Samsul Haque, FCS, LLB",
    designation: "Chief Operating Officer",
    avatar: "",
  },
  {
    id: 4,
    name: "Mahmud-Ur-Rashid",
    designation: "Head of Business",
    avatar: "",
  },
  {
    id: 5,
    name: "Saimon Mazid",
    designation: "Head of Margin Loan",
    avatar: "",
  },
  {
    id: 6,
    name: "Ashraful Hasib",
    designation: "Senior Manager",
    avatar: "",
  },
  {
    id: 7,
    name: "Saad Niamatullah, CFA",
    designation: "Manager",
    avatar: "",
  },
  {
    id: 8,
    name: "Walid Rahman",
    designation: "Management Trainee",
    avatar: "walid-rahman.png",
  },
  {
    id: 9,
    name: "Hossain Pieas",
    designation: "Management Trainee",
    avatar: "hossain-pieas.png",
  },
  {
    id: 10,
    name: "Asfia Sultana",
    designation: "Executive",
    avatar: "",
  },
];
</script>
