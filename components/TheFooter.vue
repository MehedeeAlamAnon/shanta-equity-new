<template>
  <section class="bg-[#1f3c74] pt-52px pb-45px px-32px <sm:(px-2)">
    <div class="container mx-auto text-white px-4">
      <div
        class="grid grid-cols-1 gap-y-8 sm:(flex flex-wrap) md:(grid grid-cols-3) w-full"
      >
        <!-- col start -->
        <div class="item">
          <div class="flex gap-24px">
            <div class="min-w-32px <sm:min-w-24px">
              <font-awesome-icon
                :icon="['fas', 'phone']"
                size="2xl"
                class="icon"
              />
            </div>
            <div>
              <h5 class="text-24px mb-3 <sm:(text-20px)">Call us</h5>
              <p class="text-16px text-[#e0e0e0] leading-snug">01313 0202 91</p>
              <p class="text-16px text-[#e0e0e0] leading-snug">02 9612606</p>
            </div>
          </div>
        </div>
        <!-- col end -->
        <!-- col start -->
        <div class="item">
          <div class="flex gap-24px">
            <div class="min-w-32px <sm:min-w-24px">
              <font-awesome-icon
                :icon="['fas', 'envelope']"
                size="2xl"
                class="text icon"
              />
            </div>
            <div>
              <h5 class="text-24px mb-3 <sm:(text-20px)">Email us</h5>
              <p class="text-16px text-[#e0e0e0] leading-snug">
                info@shantaequity.net
              </p>
            </div>
          </div>
        </div>
        <!-- col end -->
        <!-- col start -->
        <div class="item">
          <div class="flex gap-24px">
            <div class="min-w-32px <sm:min-w-24px">
              <font-awesome-icon
                :icon="['fas', 'map-marker-alt']"
                size="2xl"
                class="text icon"
              />
            </div>
            <div>
              <h5 class="text-24px mb-3 <sm:(text-20px)">Address</h5>
              <p class="text-16px text-[#e0e0e0] leading-snug">
                The Glass House (Level 4), S.E(B) - 2, 38 Gulshan Avenue, Dhaka
                1212
              </p>
            </div>
          </div>
        </div>
        <!-- col end -->
      </div>
    </div>
  </section>
  <footer class="bg-[#f8f8f8]">
    <div class="container mx-auto px-4 py-53px">
      <div class="grid grid-cols-1 lg:(grid-cols-2)">
        <div class="overflow-hidden">
          <NuxtLink to="/" class="footer-nav-link">
            <img
              src="~/assets/images/logo.svg"
              alt="SEL Logo"
              class="w-258.8px h-68px -ml-3"
            />
          </NuxtLink>
          <address class="mt-32px not-italic">
            <h3
              class="text-20px leading-snug font-semibold tracking-0.04em mb-3"
            >
              Corporate Office
            </h3>
            <p
              class="text-16px leading-22px tracking-0.04em mb-4 max-w-257px"
            >
              The Glass House (Level 4), S.E(B) - 2, 38 Gulshan Avenue, Dhaka
              1212
            </p>
            <h3
              class="text-20px leading-24px font-semibold tracking-0.04em mb-3"
            >
              Hotline
            </h3>
            <p class="text-16px leading-22px tracking-0.04em">
              +88-02-48814118
            </p>
          </address>
        </div>
        <div class="flex justify-start pt-34px lg:justify-evenly">
          <div class="min-w-1/2 lg:min-w-201px">
            <ul>
              <li class="footer-nav-item">
                <NuxtLink to="/who-we-are" class="footer-nav-link"
                  >Who We Are</NuxtLink
                >
              </li>
              <li class="footer-nav-item">
                <NuxtLink to="/expertise" class="footer-nav-link"
                  >Expertise</NuxtLink
                >
              </li>
            </ul>
          </div>
          <div class="min-w-1/2 lg:min-w-201px">
            <ul>
              <li class="footer-nav-item">
                <NuxtLink to="/our-team" class="footer-nav-link">Team</NuxtLink>
              </li>
              <li class="footer-nav-item">
                <NuxtLink to="/documents" class="footer-nav-link"
                  >Documents</NuxtLink
                >
              </li>
              <!-- <li class="footer-nav-item">
                <NuxtLink to="/career" class="footer-nav-link">Career</NuxtLink>
              </li> -->
              <!-- <li class="footer-nav-item">
                <NuxtLink class="footer-nav-link">Contact</NuxtLink>
              </li> -->
              <!-- <li class="footer-nav-item">
                <NuxtLink to="/insights" class="footer-nav-link"
                  >Insights</NuxtLink
                >
              </li> -->
            </ul>
          </div>
        </div>
      </div>
      <div class="mt-42px flex justify-between items-center">
        <div>
          <ul class="flex gap-x-8px sm:gap-x-31px">
            <li>
              <a
                href="https://www.facebook.com/shantaequity/"
                target="_blank"
                class="block"
                ><img src="~/assets/images/facebook-icon.svg" alt="facebook"
              /></a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/company/shantaequity/"
                target="_blank"
                class="block"
                ><img src="~/assets/images/linkedin-icon.svg" alt="linkedin"
              /></a>
            </li>
          </ul>
        </div>
        <div class="text-[#979797] text-16px leading-snug font-extrabold">
          &copy; 2022 Shanta Equity
        </div>
      </div>
    </div>
  </footer>
</template>
<style lang="scss" scoped>
@media (max-width: 640px) {
  .sec-title {
    font-size: 26px;
  }
  .icon {
    font-size: 24px;
  }
}
@media (min-width: 640px) and (max-width: 767px) {
  .item {
    min-width: 50%;
  }
}
.footer-nav-item {
  &:not(:last-child) {
    margin-bottom: 30px;
  }
  & .footer-nav-link {
    font-weight: 400;
    font-size: 16px;
    line-height: 1.6;
    letter-spacing: 0.04em;
    &:hover {
      color: #1f3c74;
    }
  }
}
</style>
