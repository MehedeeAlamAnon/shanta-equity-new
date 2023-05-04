<template>
  <section class="w-full relative">
    <img src="~/assets/images/bg-our-team.jpg" class="w-full h-full" />
    <div
      class="absolute top-0 bottom-0 flex w-full px-4 h-full breadcrumb-overlay justify-center items-center text-55px <sm:text-30px leading-tight font-light text-white uppercase text-center"
    >
      Meet The Shanta Equity Team
    </div>
  </section>
  <section
    class="grid grid-cols-1 max-w-1535px mx-auto pt-80px pb-80px team-wrapper gap-30px gap-y-40px sm:(grid-cols-2 gap-x-50px gap-y-50px) lg:(grid-cols-3 gap-60px px-0) xl:(gap-x-100px gap-y-70px py-100px)"
  >
    <!-- col item start -->
    <div
      v-for="member in members"
      :key="member.id"
      @click="openModal(member)"
      class="cursor-pointer"
    >
      <div class="bg-[#D9D9D9] min-h-380px sm:h-339px md:min-h-480px lg:min-h-400px xl:min-h-450px 2xl:min-h-550px  overflow-hidden">
        <img
          v-if="member.avatar"
          :src="`/images/members/${member.avatar}`"
          :alt="member.name"
          class="w-full"
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
  </section>
  <TeamModal
    v-if="showModal"
    :memberData="memberData"
    @close-modal="showModal = false"
  />
</template>
<script setup>
import members from "~/assets/data/members.js";
const showModal = ref(false);
const memberData = ref(null);

function openModal(data) {
  showModal.value = true;
  memberData.value = data;
}
</script>

<style>
  .breadcrumb-overlay {
    background: rgba(31, 60, 116, .5)
  }
@media (max-width: 1600px) {
  .team-wrapper {
    padding-left: 30px;
    padding-right: 30px;
  }
}
</style>
