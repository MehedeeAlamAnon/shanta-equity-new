<template>
  <div class="modal-overlay px-4 2xl:(px-0)" @click.self="$emit('close-modal')">
    <div class="modal w-full max-w-1373px bg-white rounded-20px">
      <div class="flex flex-col md:(flex-row)" v-if="transactionData">
        <div
          class="w-full h-330px rounded-t-20px rounded-bl-none overflow-hidden md:(max-w-478px h-642px rounded-l-20px rounded-r-none overflow-auto) relative"
        >
          <img
            v-if="transactionData.imgDetails"
            :src="`/images/transactions/${transactionData.imgDetails}`"
            alt="transaction-img"
            class="w-full rounded-bl-none md:(rounded-l-20px rounded-r-none)"
          />
          <img
            v-else
            src="/images/transactions/transaction-1.png"
            alt="transaction-img"
            class="w-full rounded-bl-none md:(rounded-l-20px rounded-r-none)"
          />
          <div
            class="overlay pl-30px pr-30px md:(pr-40px) xl:(pr-62px) flex flex-col justify-end text-white rounded-bl-none"
          >
            <p
              v-if="transactionData.description"
              class="text-justify divide-y border-b border-white w-full text-15px leading-20.5px pb-10px"
            >
              {{ transactionData.description }}
            </p>
            <p v-if="transactionData.urlLabel" class="pt-10px pb-51px">
              <a :href="`${transactionData.url}`" target="_blank">
                {{ transactionData.urlLabel }}
              </a>
            </p>
          </div>
        </div>
        <div class="px-20px py-30px md:(px-39px)">
          <img
            v-if="transactionData.imgDetailsLogo"
            :src="`/images/transactions/${transactionData.imgDetailsLogo}`"
            alt="transaction logo"
            class="max-w-250px w-sm:(max-w-298px) mb-50px 2xl:(mb-70px)"
          />
          <img
            v-else
            src="/images/transactions/shl-logo.png"
            alt="transaction logo"
            class="max-w-250px w-sm:(max-w-298px) mb-50px 2xl:(mb-70px)"
          />
          <div>
            <div
              class="key-points grid grid-cols-2 gap-30px border-b pb-30px border-[#00206036] xl:(grid-cols-4 gap-x-40px) 2xl:(gap-x-74px)"
            >
              <!-- col start -->
              <div>
                <h3
                  class="font-medium text-16px leading-20px min-w-137px mb-7px"
                >
                  Industry:
                </h3>
                <p class="text-14px leading-20px w-139px">
                  {{
                    transactionData.industry ? transactionData.industry : "N/A"
                  }}
                </p>
              </div>
              <!-- col end -->
              <!-- col start -->
              <div>
                <h3
                  class="font-medium text-16px leading-20px min-w-137px mb-7px"
                >
                  Trading Code:
                </h3>
                <p class="text-14px leading-20px w-139px">
                  {{
                    transactionData.tradingCode
                      ? transactionData.tradingCode
                      : "N/A"
                  }}
                </p>
              </div>
              <!-- col end -->
              <!-- col start -->
              <div>
                <h3
                  class="font-medium text-16px leading-20px min-w-137px mb-7px"
                >
                  IPO Size:
                </h3>
                <p class="text-14px leading-20px w-139px">
                  {{
                    transactionData.ipoSize ? transactionData.ipoSize : "N/A"
                  }}
                </p>
              </div>
              <!-- col end -->
              <!-- col start -->
              <div>
                <h3
                  class="font-medium text-16px leading-20px min-w-137px mb-7px"
                >
                  Authorized Capital:
                </h3>
                <p class="text-14px leading-20px w-139px">
                  {{
                    transactionData.capital ? transactionData.capital : "N/A"
                  }}
                </p>
              </div>
              <!-- col end -->
            </div>
            <!-- highlight list start -->
            <div class="py-38px border-b border-[#00206036]">
              <h3 class="font-medium text-16px leading-20px mb-11px">
                Deal Highlights:
              </h3>
              <ul
                class="pl-30px sm:(pl-70px) list-disc"
                v-if="transactionData.highlights"
              >
                <li
                  class="text-15px leading-20px"
                  v-for="(item, index) in transactionData.highlights"
                  :key="index"
                >
                  {{ item }}
                </li>
              </ul>
            </div>
            <!-- highlight list end -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps(["transactionData"]);
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
