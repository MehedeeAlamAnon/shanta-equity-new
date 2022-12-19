<template>
  <section class="w-full relative h-709px">
    <img src="~/assets/images/bg-career.png" class="w-full h-full" />
    <div
      class="absolute top-0 bottom-0 flex w-full h-full breadcrumb-overlay justify-center items-center text-55px font-light text-white uppercase"
    >
      Build your career with Us
    </div>
  </section>
  <section
    class="max-w-1177px mx-auto font-light py-80px text-30px leading-65px text-center"
  >
    Our employees are empowered to perform at their very best and are guided by
    our greater purpose of innovation: to establish SEL as an icon for customers
    and rivals in the domains of innovation, product quality, service standard.
  </section>
  <section>
    <!-- internal section start -->
    <div class="max-w-1207px mx-auto mb-95px">
      <h2
        class="text-35px leading-35px text-[#1F3C74] font-light border-bottom border-bottom-1px border-[#1F3C74] pb-31px mb-58px"
      >
        Explore Jobs/Explore Our Career Opportunities
      </h2>
      <div class="max-w-1008px mx-auto grid grid-cols-2 gap-x-44px gap-y-32px">
        <div
          class="bg-[#F1F8FF] rounded-20px p-30px text-[#1F3C74] font-light"
          v-for="job in openJobs"
          :key="job.id"
        >
          <h3 class="text-30px leading-35px mb-20px">{{ job.title }}</h3>
          <p class="text-20px leading-25px mb-20px">
            Vacancy: {{ job.vacancy }}
          </p>
          <p class="text-20px leading-25px mb-18px">
            Deadline: {{ job.deadline }}
          </p>
          <p>
            <NuxtLink to="/" class="underline text-15px leading-25px"
              >View Details</NuxtLink
            >
          </p>
        </div>
      </div>
    </div>
    <!-- internal section end -->
    <!-- internal section start -->
    <div class="max-w-1207px mx-auto mb-95px">
      <h2
        class="text-35px leading-35px text-[#1F3C74] font-light border-bottom-1px border-[#1F3C74] pb-31px mb-58px"
      >
        Drop Your CV
      </h2>
      <form class="max-w-714px">
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
            name="name"
            placeholder="University"
            class="form-control w-full h-44px border-1 border-[#1F3C74] pl-22px font-light"
          />
        </div>
        <div class="w-full flex">
          <div>
            <label
              for="file_upload"
              class="border-1 border-[#1F3C74] w-217px h-44px pl-22px cursor-pointer inline-block leading-44px text-12px text-[#000] text-opacity-50 font-light"
              >Browse Files</label
            >
            <input
              id="file_upload"
              type="file"
              name="myfile"
              class="absolute opacity-1 cursor-pointer"
            />
          </div>
          <div class="ml-31px">
            <button
              type="submit"
              class="w-120px h-44px bg-[#1F3C74] text-white text-15px font-light"
            >
              Upload CV
            </button>
          </div>
        </div>
      </form>
    </div>
    <!-- internal section end -->
    <!-- internal section start -->
    <div class="max-w-1207px mx-auto mb-61px">
      <div
        class="flex justify-between items-center border-bottom-1px border-[#1F3C74] pb-31px mb-63px"
      >
        <h2 class="text-35px leading-35px text-[#1F3C74] font-light">
          Meet Our People
        </h2>
        <div>
          <NuxtLink to="/" class="text-[#1F3C74] text-20px font-light underline"
            >View More</NuxtLink
          >
        </div>
      </div>
      <div class="flex basis-full mx-auto gap-x-60px gap-y-56px justify-center">
        <!-- col item start -->
        <div v-for="member in members" :key="member.id" class="min-w-1/5">
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
      </div>
    </div>
    <!-- internal section end -->
  </section>
</template>

<script setup>
const openJobs = [
  {
    id: 1,
    title: "Executive",
    vacancy: 1,
    deadline: "2022-10-04",
  },
  {
    id: 2,
    title: "Human Resource Intern",
    vacancy: 5,
    deadline: "2022-10-04",
  },
  {
    id: 3,
    title: "Investment Banking Intern",
    vacancy: 5,
    deadline: "2022-10-04",
  },
  {
    id: 4,
    title: "Portfolio Analyst",
    vacancy: 2,
    deadline: "2022-10-04",
  },
];
const members = [
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
];
</script>

<style lang="scss" scoped>
.breadcrumb-overlay {
  background: linear-gradient(
    90deg,
    #1f3c74 7.81%,
    rgba(31, 60, 116, 0.765625) 23.44%,
    rgba(31, 60, 116, 0.392976) 70.31%,
    rgba(31, 60, 116, 0) 100%
  );
}
.form-control {
  &::placeholder {
    color: rgba(0, 0, 0, 0.5);
  }
}
.item {
  justify-content: center;
}
</style>
