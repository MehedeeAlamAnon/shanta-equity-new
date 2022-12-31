<template>
  <Breadcrumb
    imgUrl="bg-our-team.png"
    pageTitle="Meet The Shanta Equity Team"
  />
  <section
    class="grid grid-cols-1 max-w-1535px mx-auto pt-80px pb-80px team-wrapper gap-30px gap-y-40px sm:(grid-cols-2 gap-x-30px gap-y-50px) lg:(grid-cols-3 pt-100px pb-100px) xl:(grid-cols-4) 2xl:(grid-cols-5 gap-x-60px gap-y-56px px-0)"
  >
    <!-- col item start -->
    <div
      v-for="member in members"
      :key="member.id"
      @click="openModal(member)"
      class="cursor-pointer"
    >
      <div class="bg-[#D9D9D9] min-h-330px sm:h-339px overflow-hidden">
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
@media (max-width: 1600px) {
  .team-wrapper {
    padding-left: 30px;
    padding-right: 30px;
  }
}
</style>
