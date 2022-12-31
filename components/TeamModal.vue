<template>
  <div class="modal-overlay px-4 2xl:(px-0)" @click.self="$emit('close-modal')">
    <div
      class="modal w-full max-w-450px lg:(max-w-full) xl:(max-w-1050px) bg-white"
    >
      <div class="flex flex-col lg:(flex-row)" v-if="memberData">
        <div class="w-full relative lg:(min-w-422px min-h-597px)">
          <img
            v-if="memberData.avatar"
            :src="`/images/members/${memberData.avatar}`"
            alt="transaction-img"
            class="w-full lg:(w-422px min-h-597px)"
          />
          <div
            class="overlay p-13px flex flex-col justify-end text-white rounded-bl-none"
          >
            <a
              v-if="memberData.socialLinkedin"
              :href="memberData.socialLinkedin"
              target="__blank"
            >
              <img src="~/assets/images/linkedin.png" alt="linkedin" />
            </a>
          </div>
        </div>
        <div class="px-20px py-31px md:(px-29px) xl:(pr-52px)">
          <h2 class="text-32px leading-35px mb-15px font-light">
            {{ memberData.name }}
          </h2>
          <p class="text-16px leading-35px font-bold mb-20px">
            {{ memberData.designation }}
          </p>
          <p class="text-18px leading-35px text-justify">
            {{ memberData.description }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps(["memberData"]);
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
