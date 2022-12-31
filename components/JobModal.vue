<template>
  <div class="modal-overlay px-4 2xl:(px-0)" @click.self="$emit('close-modal')">
    <div class="modal w-full max-w-858px bg-white rounded-20px">
      <div
        class="flex flex-col md:(flex-row) px-20px py-30px sm:(p-40px)"
        v-if="jobData"
      >
        <div class="sm:(min-w-[331px])">
          <img
            src="~/assets/images/logo.svg"
            alt="transaction logo"
            class="max-w-197px mb-50px"
          />
          <h2 class="text-30px text-[#1F3C74] mb-30px">{{ jobData.title }}</h2>
          <p class="text-20px text-[#1F3C74] mb-30px font-light">
            Vacancy: {{ jobData.vacancy }}
          </p>
          <p class="text-20px text-[#1F3C74] mb-30px font-light">
            Deadline: {{ jobData.deadline }}
          </p>
          <h3 class="text-16px text-[#1F3C74] capitalize mb-30px">
            Job Description
          </h3>
          <!-- col start -->
          <div class="">
            <h4 class="text-12px font-semibold leading-18px mb-22px">
              Key Accountabilities
            </h4>
            <ul class="list-disc pl-20px">
              <li
                class="text-12px leading-18px"
                v-for="item in jobData.accountabilities"
                :key="item.id"
              >
                {{ item }}
              </li>
            </ul>
          </div>
        </div>
        <!-- col end -->
        <!-- col start -->
        <div class="min-w-[60%] pt-47px">
          <div class="mb-30px">
            <h4 class="text-12px font-semibold leading-18px mb-22px">
              Skills, Knowledge and Competencies
            </h4>
            <ul class="list-disc pl-20px">
              <li
                class="text-12px leading-18px"
                v-for="item in jobData.skills"
                :key="item.id"
              >
                {{ item }}
              </li>
            </ul>
          </div>
          <div class="mb-30px">
            <h4 class="text-12px font-semibold leading-18px mb-22px">
              Work Experience
            </h4>
            <p class="text-12px leading-18px">
              {{ jobData.experiences }}
            </p>
          </div>
          <div>
            <h4 class="text-12px font-semibold leading-18px mb-22px">
              Education Requirement
            </h4>
            <p class="text-12px leading-18px">
              {{ jobData.educationRequirement }}
            </p>
          </div>
          <div class="text-center mt-20px">
            <NuxtLink
              :to="`/career/${jobData.id}`"
              class="w-136px h-37px bg-[#1F3C74] rounded-20px inline-block text-white text-center leading-[37px] font-light text-12px"
              >Apply Now</NuxtLink
            >
          </div>
        </div>
        <!-- col end -->
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps(["jobData"]);
</script>

<style lang="scss" scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.6);
}
.overlay {
  position: absolute;
  content: "";
  background: linear-gradient(
    9.15deg,
    rgba(0, 0, 0, 0.93) 14.77%,
    rgba(0, 0, 0, 0.48) 45.79%,
    rgba(0, 0, 0, 0) 84.44%
  );
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
}
@media (max-width: 375px) {
  .key-points {
    grid-template-columns: repeat(1, 1fr);
    row-gap: 20px;
  }
}
</style>
