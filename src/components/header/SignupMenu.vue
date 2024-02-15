<template>
  <div :class="'navbar ' + 'state-' + 'state'">
    <div class="logo-horizontal">
      <svg
        class="logo-89"
        width="36"
        height="36"
        viewBox="0 0 36 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#clip0_1115_338)">
          <path
            d="M35.9502 19.3499H29.5201C23.9033 19.3499 19.3501 23.9031 19.3501 29.5199V35.95C28.215 35.2926 35.2929 28.2148 35.9502 19.3499Z"
            fill="#009499"
          />
          <path
            d="M16.6505 35.95V29.5199C16.6505 23.9031 12.0972 19.3499 6.48043 19.3499H0.050293C0.707594 28.2148 7.78552 35.2926 16.6505 35.95Z"
            fill="#009499"
          />
          <path
            d="M35.9502 16.6497C35.2929 7.78479 28.215 0.706861 19.3501 0.0495605V6.4797C19.3501 12.0964 23.9033 16.6497 29.5201 16.6497H35.9502Z"
            fill="#009499"
          />
          <path
            d="M16.6505 0.0495605C7.78552 0.706861 0.707594 7.78479 0.050293 16.6497H6.48043C12.0972 16.6497 16.6505 12.0964 16.6505 6.4797V0.0495605Z"
            fill="#009499"
          />
          <path
            d="M12.2246 17.9999C14.7199 16.7532 16.7534 14.7196 18.0001 12.2244C19.2469 14.7196 21.2803 16.7532 23.7757 17.9999C21.2803 19.2466 19.2469 21.2802 18.0001 23.7754C16.7534 21.2802 14.7199 19.2466 12.2246 17.9999Z"
            fill="#FC9918"
          />
        </g>
        <defs>
          <clipPath id="clip0_1115_338">
            <rect width="36" height="36" fill="white" />
          </clipPath>
        </defs>
      </svg>
      <div class="vintage">Vintage</div>
    </div>
    <div class="search-bar">
      <svg
        class="search"
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M4.87994 3.01449C5.99183 2.27155 7.29907 1.875 8.63633 1.875H8.63637C10.4295 1.87511 12.1492 2.5875 13.4172 3.85546C14.6852 5.12342 15.3975 6.84312 15.3977 8.63629V8.63633C15.3977 9.97359 15.0011 11.2808 14.2582 12.3927C14.1278 12.5879 13.9877 12.7755 13.8388 12.9549L17.9419 17.0581C18.186 17.3021 18.186 17.6979 17.9419 17.9419C17.6979 18.186 17.3021 18.186 17.0581 17.9419L12.9549 13.8388C12.4362 14.2693 11.8533 14.6222 11.2238 14.883C9.98831 15.3947 8.62883 15.5286 7.31726 15.2677C6.00569 15.0069 4.80094 14.3629 3.85535 13.4173C2.90976 12.4717 2.26581 11.267 2.00492 9.9554C1.74403 8.64383 1.87793 7.28435 2.38968 6.04888C2.90143 4.81341 3.76804 3.75743 4.87994 3.01449ZM8.63629 3.125C7.54627 3.12501 6.48072 3.44824 5.5744 4.05383C4.66807 4.65942 3.96167 5.52017 3.54453 6.52723C3.12739 7.5343 3.01825 8.64244 3.2309 9.71153C3.44356 10.7806 3.96846 11.7627 4.73923 12.5334C5.51001 13.3042 6.49203 13.8291 7.56113 14.0418C8.63022 14.2544 9.73836 14.1453 10.7454 13.7281C11.7525 13.311 12.6132 12.6046 13.2188 11.6983C13.8244 10.7919 14.1477 9.72639 14.1477 8.63637M8.63633 3.125C10.098 3.1251 11.4998 3.70579 12.5333 4.73935C13.5669 5.7729 14.1476 7.17466 14.1477 8.63633"
          fill="#757575"
        />
      </svg>
      <div class="placeholder-text">Search for items</div>
    </div>
    <div class="action-wrapper">
      <div class="button-wrapper">
        <div class="button">
          <div class="button2">
            <router-link to="/login" style="text-decoration: none; color: rgb(4, 133, 122);">Login</router-link>
          </div>
        </div>
        <div class="button3">
          <div class="button4">
            <router-link to="/signup" style="text-decoration: none; color: white">Sign Up</router-link>
          </div>
        </div>
      </div>
      <div class="language">
        <div class="en">EN</div>
        <svg
          class="chevron-down"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M2.96967 5.21967C3.26256 4.92678 3.73744 4.92678 4.03033 5.21967L8 9.18934L11.9697 5.21967C12.2626 4.92678 12.7374 4.92678 13.0303 5.21967C13.3232 5.51256 13.3232 5.98744 13.0303 6.28033L8.53033 10.7803C8.23744 11.0732 7.76256 11.0732 7.46967 10.7803L2.96967 6.28033C2.67678 5.98744 2.67678 5.51256 2.96967 5.21967Z"
            fill="#757575"
          />
        </svg>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from "vue";
import { useStore } from "vuex";
import {useRoute, useRouter} from "vue-router"
const isLogout = ref(false);
const router = useRouter();
const route = useRoute();

const store = useStore()
const userData = computed(() => {
return store.state.auth.userLogin
})

const isLogin = computed(() => {
  return store.state.auth.userLogin 
})

</script>

<style scoped>
.navbar,
.navbar * {
  box-sizing: border-box;
}

.navbar {
  background: var(--global-neutral-10, #ffffff);
  border-style: solid;
  border-color: var(--global-neutral-30, #ededed);
  border-width: 0px 0px 1px 0px;
  padding: 12px 120px 12px 120px;
  display: flex;
  flex-direction: row;
  gap: 32px;
  align-items: center;
  justify-content: flex-start;
  width: 1440px;
  position: sticky;
}

.logo-horizontal {
  display: flex;
  flex-direction: row;
  gap: 12px;
  align-items: center;
  justify-content: flex-start;
  flex-shrink: 0;
  position: relative;
}

.logo-89 {
  flex-shrink: 0;
  width: 36px;
  height: 36px;
  position: relative;
  overflow: visible;
}

.vintage {
  color: var(--light-secondary-pressed, #0d6b6f);
  text-align: center;
  font-family: "Syne-SemiBold", sans-serif;
  font-size: 24px;
  line-height: 140%;
  font-weight: 600;
  position: relative;
}

.search-bar {
  background: var(--global-neutral-10, #ffffff);
  border-radius: 8px;
  border-style: solid;
  border-color: var(--global-neutral-40, #e0e0e0);
  border-width: 1px;
  padding: 10px 12px 10px 12px;
  display: flex;
  flex-direction: row;
  gap: 8px;
  align-items: center;
  justify-content: flex-start;
  flex: 1;
  position: relative;
}

.search {
  flex-shrink: 0;
  width: 20px;
  height: 20px;
  position: relative;
  overflow: visible;
}

.placeholder-text {
  color: var(--global-neutral-70, #757575);
  text-align: left;
  font-family: var(--body-md-font-family, "Inter-Regular", sans-serif);
  font-size: var(--body-md-font-size, 14px);
  line-height: var(--body-md-line-height, 20px);
  font-weight: var(--body-md-font-weight, 400);
  position: relative;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-start;
}

.action-wrapper {
  display: flex;
  flex-direction: row;
  gap: 27px;
  align-items: center;
  justify-content: flex-start;
  flex-shrink: 0;
  position: relative;
}

.button-wrapper {
  display: flex;
  flex-direction: row;
  gap: 16px;
  align-items: flex-start;
  justify-content: flex-start;
  flex-shrink: 0;
  position: relative;
}

.button {
  background: var(--neutral-10, #ffffff);
  border-radius: 4px;
  border-style: solid;
  border-color: var(--light-secondary-main, #009499);
  border-width: 1px;
  padding: 8px 16px 8px 16px;
  display: flex;
  flex-direction: row;
  gap: 8px;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  position: relative;
}

.button2 {
  color: var(--light-secondary-main, #009499);
  text-align: left;
  font-family: var(--body-2-medium-font-family, "Inter-Medium", sans-serif);
  font-size: var(--body-2-medium-font-size, 14px);
  line-height: var(--body-2-medium-line-height, 20px);
  font-weight: var(--body-2-medium-font-weight, 500);
  position: relative;
}

.button3 {
  background: var(--light-secondary-main, #009499);
  border-radius: 4px;
  padding: 8px 16px 8px 16px;
  display: flex;
  flex-direction: row;
  gap: 8px;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  position: relative;
  box-shadow: var(
    --shadow-sm-box-shadow,
    0px 1px 3px 0px rgba(16, 24, 40, 0.1),
    0px 1px 2px 0px rgba(16, 24, 40, 0.06)
  );
}

.button4 {
  color: var(--neutral-10, #ffffff);
  text-align: left;
  font-family: var(--body-2-medium-font-family, "Inter-Medium", sans-serif);
  font-size: var(--body-2-medium-font-size, 14px);
  line-height: var(--body-2-medium-line-height, 20px);
  font-weight: var(--body-2-medium-font-weight, 500);
  position: relative;
}

.line-1 {
  border-style: solid;
  border-color: var(--global-neutral-30, #ededed);
  border-width: 1px 0 0 0;
  flex-shrink: 0;
  width: 36px;
  height: 0px;
  position: relative;
  transform-origin: 0 0;
  transform: rotate(90deg) scale(1, 1);
}

.language {
  display: flex;
  flex-direction: row;
  gap: 8px;
  align-items: center;
  justify-content: flex-start;
  flex-shrink: 0;
  position: relative;
}

.en {
  color: var(--global-neutral-90, #404040);
  text-align: left;
  font-family: var(--body-2-regular-font-family, "Inter-Regular", sans-serif);
  font-size: var(--body-2-regular-font-size, 14px);
  line-height: var(--body-2-regular-line-height, 20px);
  font-weight: var(--body-2-regular-font-weight, 400);
  position: relative;
}

.chevron-down {
  flex-shrink: 0;
  width: 16px;
  height: 16px;
  position: relative;
  overflow: visible;
}
</style>
