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
        <g clip-path="url(#clip0_1088_438)">
          <path
            d="M35.9505 19.3499H29.5203C23.9035 19.3499 19.3503 23.9031 19.3503 29.5199V35.95C28.2153 35.2926 35.2931 28.2148 35.9505 19.3499Z"
            fill="#009499"
          />
          <path
            d="M16.6502 35.95V29.5199C16.6502 23.9031 12.0969 19.3499 6.48019 19.3499H0.0500488C0.707349 28.2148 7.78528 35.2926 16.6502 35.95Z"
            fill="#009499"
          />
          <path
            d="M35.9505 16.6497C35.2931 7.78479 28.2153 0.706861 19.3503 0.0495605V6.4797C19.3503 12.0964 23.9035 16.6497 29.5203 16.6497H35.9505Z"
            fill="#009499"
          />
          <path
            d="M16.6502 0.0495605C7.78528 0.706861 0.707349 7.78479 0.0500488 16.6497H6.48019C12.0969 16.6497 16.6502 12.0964 16.6502 6.4797V0.0495605Z"
            fill="#009499"
          />
          <path
            d="M12.2246 17.9999C14.7199 16.7532 16.7534 14.7196 18.0001 12.2244C19.2469 14.7196 21.2803 16.7532 23.7757 17.9999C21.2803 19.2466 19.2469 21.2802 18.0001 23.7754C16.7534 21.2802 14.7199 19.2466 12.2246 17.9999Z"
            fill="#FC9918"
          />
        </g>
        <defs>
          <clipPath id="clip0_1088_438">
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
    <div class="action">
      <div class="state-layer">
        <svg
          class="cart"
          width="28"
          height="28"
          viewBox="0 0 28 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9.625 24.5C10.5915 24.5 11.375 23.7165 11.375 22.75C11.375 21.7835 10.5915 21 9.625 21C8.6585 21 7.875 21.7835 7.875 22.75C7.875 23.7165 8.6585 24.5 9.625 24.5Z"
            fill="#616161"
          />
          <path
            d="M21.875 24.5C22.8415 24.5 23.625 23.7165 23.625 22.75C23.625 21.7835 22.8415 21 21.875 21C20.9085 21 20.125 21.7835 20.125 22.75C20.125 23.7165 20.9085 24.5 21.875 24.5Z"
            fill="#616161"
          />
          <path
            d="M25.0578 6.71016C24.8609 6.42031 24.5656 6.21797 24.2211 6.15234C24.1391 6.13594 24.0516 6.125 23.9641 6.125H7.32266L6.98906 4.22187C6.91797 3.80625 6.55156 3.5 6.125 3.5H2.625C2.14375 3.5 1.75 3.89375 1.75 4.375C1.75 4.85625 2.14375 5.25 2.625 5.25H5.39219L7.89141 19.4031C7.9625 19.8187 8.32891 20.125 8.75547 20.125H22.7555C23.2367 20.125 23.6305 19.7312 23.6305 19.25C23.6305 18.7687 23.2367 18.375 22.7555 18.375H9.48281L9.17656 16.625H22.3945C23.018 16.625 23.5594 16.182 23.6797 15.5695L25.2547 7.69453C25.3203 7.35 25.2547 7 25.0578 6.71016ZM22.0336 14.875H8.86484L7.62891 7.875H23.4281L22.0336 14.875Z"
            fill="#616161"
          />
        </svg>
      </div>
      <div class="state-layer">
        <svg
          class="heart"
          width="28"
          height="28"
          viewBox="0 0 28 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14 24.5C13.6555 24.5 13.3164 24.3961 13.0156 24.1938C10.9594 22.7992 7.97345 20.6391 5.8297 18.025C3.6422 15.3617 2.5922 12.6219 2.62501 9.65781C2.65783 6.26172 5.38673 3.5 8.7008 3.5C11.3313 3.5 13.0758 5.11328 14 6.28906C14.9242 5.11328 16.6688 3.5 19.2992 3.5C22.6133 3.5 25.3367 6.26172 25.375 9.65781C25.4024 12.6219 24.3578 15.3617 22.1703 18.025C20.0266 20.6391 17.0406 22.7992 14.9844 24.1938C14.6836 24.4016 14.3445 24.5 14 24.5ZM8.7008 5.25C6.34376 5.25 4.40236 7.23516 4.37501 9.67969C4.31486 15.4 9.20939 19.5016 14 22.75C18.7906 19.4961 23.6852 15.4 23.625 9.67969C23.5977 7.24063 21.6617 5.25 19.2992 5.25C16.3461 5.25 14.793 8.23594 14.782 8.26875C14.6344 8.56406 14.3336 8.75 14 8.75C13.6664 8.75 13.3656 8.56406 13.218 8.26328C13.2016 8.23594 11.6485 5.25 8.7008 5.25Z"
            fill="#616161"
          />
        </svg>
      </div>
      <div class="badges">
        <div class="badges2">1</div>
      </div>
      <div class="badges3">
        <div class="badges2">1</div>
      </div>
    </div>
    <div class="action-wrapper">
      <div class="profile-button">
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
      <div class="line-2"></div>
      <div class="language">
        <div class="en">EN</div>
        <svg
          class="chevron-down2"
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
.action {
  display: flex;
  flex-direction: row;
  gap: 12px;
  align-items: flex-start;
  justify-content: flex-start;
  flex-shrink: 0;
  position: relative;
}
.state-layer {
  padding: 4px;
  display: flex;
  flex-direction: row;
  gap: 10px;
  align-items: flex-start;
  justify-content: flex-start;
  flex-shrink: 0;
  position: relative;
}
.cart {
  flex-shrink: 0;
  width: 28px;
  height: 28px;
  position: relative;
  overflow: visible;
}
.heart {
  flex-shrink: 0;
  width: 28px;
  height: 28px;
  position: relative;
  overflow: visible;
}
.badges {
  background: var(--danger-main, #cb3a31);
  border-radius: 24px;
  padding: 2px 8px 2px 8px;
  display: flex;
  flex-direction: row;
  gap: 4px;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: 20px;
  position: absolute;
  left: 68px;
  top: 0px;
}
.badges2 {
  color: var(--neutral-10, #ffffff);
  text-align: left;
  font-family: var(--body-3-medium-font-family, "Inter-Medium", sans-serif);
  font-size: var(--body-3-medium-font-size, 12px);
  line-height: var(--body-3-medium-line-height, 16px);
  font-weight: var(--body-3-medium-font-weight, 500);
  position: relative;
}
.badges3 {
  background: var(--danger-main, #cb3a31);
  border-radius: 24px;
  padding: 2px 8px 2px 8px;
  display: flex;
  flex-direction: row;
  gap: 4px;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: 20px;
  position: absolute;
  left: 20px;
  top: 0px;
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
.profile-button {
  display: flex;
  flex-direction: row;
  gap: 12px;
  align-items: center;
  justify-content: flex-start;
  flex-shrink: 0;
  position: relative;
}
.avatar {
  background: linear-gradient(to left, #ffffff, #ffffff);
  border-radius: 50px;
  display: flex;
  flex-direction: row;
  gap: 10px;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: 40px;
  height: 40px;
  position: relative;
}
.chevron-down {
  flex-shrink: 0;
  width: 16px;
  height: 16px;
  position: relative;
  overflow: visible;
}
.line-2 {
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
.chevron-down2 {
  flex-shrink: 0;
  width: 16px;
  height: 16px;
  position: relative;
  overflow: visible;
}
</style>
