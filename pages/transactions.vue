<template>
  <Breadcrumb imgUrl="bg-transactions.png" pageTitle="Transactions" />
  <section class="py-70px xl:(py-125px)">
    <div
      class="max-w-1028px mx-auto grid grid-cols-1 gap-32px px-8 sm:(grid-cols-2) lg:(grid-cols-3) xl:(grid-cols-4 px-0)"
    >
      <!-- col start -->
      <template v-for="transaction in transactions" :key="transaction.id">
        <div
          class="rounded-20px card transition duration-300"
          @click="openModal(transaction)"
          @mouseenter="makeLogoWhite(transaction.id)"
          @mouseleave="makeLogoNormal()"
        >
          <h3
            class="text-20px leading-35px text-center text-[#1F3C74] mb-36px font-medium"
          >
            Initial Public Offering
          </h3>
          <img
            v-if="whiteLogo === transaction.id"
            :src="`/images/${transaction.imgWhite}`"
            alt="sel logo"
            class="w-179px h-47px mb-30px mx-auto"
          />
          <img
            v-else
            :src="`/images/${transaction.img}`"
            alt="sel logo"
            class="w-179px h-47px mb-30px mx-auto"
          />

          <p class="text-12px leading-20px text-center font-medium">
            {{ transaction.summary }}
          </p>
        </div>
      </template>

      <!-- col end -->
    </div>
  </section>
  <Modal
    v-if="showModal"
    :transactionData="transactionData"
    @close-modal="showModal = false"
  />
</template>

<script setup>
import transactions from "~/assets/data/transactions.js";
const showModal = ref(false);
const transactionData = ref(null);
const whiteLogo = ref(0);

function openModal(data) {
  showModal.value = true;
  transactionData.value = data;
}

function makeLogoWhite(id) {
  whiteLogo.value = id;
}
function makeLogoNormal() {
  whiteLogo.value = 0;
}
</script>

<style lang="scss" scoped>
.card {
  position: relative;
  padding: 48px 19px;
  background-color: #fff;
  color: #1f3c74;
  cursor: pointer;
  &::after {
    position: absolute;
    content: "";
    background-color: #ffe699;
    width: 100%;
    height: 100%;
    bottom: -8px;
    right: -8px;
    border-radius: 20px;
    z-index: -1;
  }
  &:hover {
    background-color: #1f3c74;
    color: #fff;
    h3 {
      color: #fff;
    }
  }
  &:hover:after {
    background-color: #deebf7;
  }
}
</style>
