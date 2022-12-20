<template>
  <footer class="bg-[#f8f8f8]">
    <div class="container mx-auto px-4 py-53px">
      <div class="grid grid-cols-2">
        <div>
          <img
            src="~/assets/images/logo.svg"
            alt="SEL Logo"
            class="w-258.8px h-68px"
          />
          <address class="mt-32px not-italic">
            <h3
              class="text-20px leading-24px font-semibold tracking-0.04em mb-6px"
            >
              Corporate Office
            </h3>
            <p
              class="text-14px leading-22px font-light tracking-0.04em mb-12px max-w-257px"
            >
              The Glass House Level 04, S.E (B)-2, 38 Gulshan Avenue, Dhaka 1212
            </p>
            <h3
              class="text-20px leading-24px font-semibold tracking-0.04em mb-6px"
            >
              Hotline
            </h3>
            <p class="text-14px leading-22px font-light tracking-0.04em">
              +88-02-48814118
            </p>
          </address>
        </div>
        <div class="flex justify-evenly pt-34px">
          <div class="min-w-201px">
            <ul>
              <li class="footer-nav-item">
                <NuxtLink to="/about" class="footer-nav-link"
                  >About Us</NuxtLink
                >
              </li>
              <li class="footer-nav-item">
                <NuxtLink to="/our-team" class="footer-nav-link">Team</NuxtLink>
              </li>
              <li class="footer-nav-item">
                <NuxtLink to="/transactions" class="footer-nav-link"
                  >Transactions</NuxtLink
                >
              </li>
              <li class="footer-nav-item">
                <NuxtLink to="/" class="footer-nav-link">Our Services</NuxtLink>
              </li>
              <li class="footer-nav-item">
                <NuxtLink class="footer-nav-link">Forms</NuxtLink>
              </li>
            </ul>
          </div>
          <div class="min-w-201px">
            <ul>
              <li class="footer-nav-item">
                <NuxtLink class="footer-nav-link">Background</NuxtLink>
              </li>
              <li class="footer-nav-item">
                <NuxtLink to="/career" class="footer-nav-link">Career</NuxtLink>
              </li>
              <li class="footer-nav-item">
                <NuxtLink class="footer-nav-link">Contact</NuxtLink>
              </li>
              <li class="footer-nav-item">
                <NuxtLink to="/insights" class="footer-nav-link"
                  >Insights</NuxtLink
                >
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="mt-42px flex justify-between items-center">
        <div>
          <ul class="flex gap-x-31px">
            <li>
              <a href="" target="_blank" class="block"
                ><img src="~/assets/images/facebook-icon.png" alt="facebook"
              /></a>
            </li>
            <li>
              <a href="" target="_blank" class="block"
                ><img src="~/assets/images/linkedin-icon.png" alt="linkedin"
              /></a>
            </li>
          </ul>
        </div>
        <div class="text-[#979797] text-16px leading-24px font-extrabold">
          &copy; 2022 Shanta Equity
        </div>
      </div>
    </div>
  </footer>
</template>
<style lang="scss" scoped>
.footer-nav-item {
  &:not(:last-child) {
    margin-bottom: 30px;
  }
  & .footer-nav-link {
    font-weight: 300;
    font-size: 18px;
    line-height: 24px;
    letter-spacing: 0.04em;
  }
}
</style>
