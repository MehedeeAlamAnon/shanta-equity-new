<template>
  <!-- banner section start -->
  <section class="banner bg-cover bg-no-repeat bg-bottom">
      <div
        class="banner-content bg-black bg-opacity-30 flex items-center min-h-xs sm:(min-h-screen-sm) lg:(min-h-screen-md) 2xl:(min-h-screen-1080px)"
      >
        <div class="container mx-auto px-4">
          <h2 class="text-20px leading-snug font-light text-white text-center uppercase sm:(text-36px leading-tight) md:(text-40px leading-snug) lg:(text-55px leading-snug)">
            Meet The Shanta Equity Team
          </h2>
        </div>
      </div>
    </section>
    <!-- banner section end -->
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
      <p class="text-20px leading-snug font-light text-justify mt-21px">
        {{ member.name }}
      </p>
      <p class="text-16px font-bold text-justify mt-12px">
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
.banner {
    background-image: url("~/assets/images/bg-our-team.jpg");
  }
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
