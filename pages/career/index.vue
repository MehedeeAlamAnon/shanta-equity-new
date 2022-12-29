<template>
  <section class="w-full relative h-709px">
    <img src="~/assets/images/bg-career.png" class="w-full h-full" />
    <div
      class="absolute top-0 bottom-0 flex w-full h-full breadcrumb-overlay justify-center items-center text-55px leading-normal font-light text-white uppercase text-center"
    >
      Build your career with Us
    </div>
  </section>
  <section
    class="max-w-1177px px-4 mx-auto font-light py-80px text-center text-24px leading-relaxed lg:(text-30px leading-65px) xl:(px-0)"
  >
    Our employees are empowered to perform at their very best and are guided by
    our greater purpose of innovation: to establish SEL as an icon for customers
    and rivals in the domains of innovation, product quality, service standard.
  </section>
  <section>
    <!-- internal section start -->
    <div class="max-w-1207px px-4 xl:(px-0) mx-auto mb-95px">
      <h2
        class="text-30px md:(text-35px leading-35px) <lg:(leading-normal) text-[#1F3C74] font-light border-bottom border-bottom-1px border-[#1F3C74] pb-31px mb-58px"
      >
        Explore Jobs/Explore Our Career Opportunities
      </h2>
      <div
        class="max-w-1008px mx-auto grid grid-cols-1 gap-30px sm:(grid-cols-2 gap-x-44px gap-y-32px)"
      >
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
    <div class="max-w-1207px px-4 xl:(px-0) mx-auto mb-95px">
      <h2
        class="text-35px leading-35px text-[#1F3C74] font-light border-bottom-1px border-[#1F3C74] pb-31px mb-58px"
      >
        Drop Your CV
      </h2>
      <form class="w-full max-w-714px">
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
        <div class="w-full flex flex-col sm:(flex-row)">
          <div>
            <label
              for="file_upload"
              class="border-1 border-[#1F3C74] w-217px h-44px pl-22px cursor-pointer inline-block leading-44px text-12px text-[#000] text-opacity-50 overflow-ellipsis whitespace-nowrap overflow-hidden font-light"
              >Browse Files
              <span v-if="fileName" class="ml-2 text-[#1F3C74]">
                {{ fileName }}
              </span>
            </label>
            <input
              id="file_upload"
              type="file"
              name="myfile"
              hidden
              @change="onFileChange"
            />
            <!-- class="absolute opacity-1 cursor-pointer left-0 top-100 w-100 h-100" -->
          </div>
          <div class="mt-31px sm:(ml-31px mt-0)">
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
    <div class="max-w-1207px px-4 xl:(px-0) mx-auto mb-61px">
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
      <div
        class="flex flex-wrap sm:(flex-nowrap gap-x-30px px-4) basis-full mx-auto gap-y-56px justify-center lg:(px-0 gap-x-60px)"
      >
        <!-- col item start -->
        <div
          v-for="member in members"
          :key="member.id"
          class="min-w-full sm:(min-w-1/2) md:(min-w-1/3) lg:(min-w-1/5)"
        >
          <div class="bg-[#D9D9D9] sm:(h-339px) overflow-hidden">
            <img
              v-if="member.avatar"
              :src="`/images/members/${member.avatar}`"
              class="w-full"
              alt=""
            />
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
import openJobs from "~/assets/data/openJobs.js";
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

const fileName = ref(null);
function onFileChange(e) {
  fileName.value = e.target.files[0].name;
}
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
