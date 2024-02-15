<template>
  <WebHeaderFull/>
  <div class="section-title">
    <div class="items">Items</div>
    <div class="tag">
      <div class="label">Sweeter Cloth Ninja</div>
      <svg class="close" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd"
          d="M6.06694 5.18306C5.82286 4.93898 5.42714 4.93898 5.18306 5.18306C4.93898 5.42714 4.93898 5.82286 5.18306 6.06694L9.11612 10L5.18306 13.9331C4.93898 14.1771 4.93898 14.5729 5.18306 14.8169C5.42714 15.061 5.82286 15.061 6.06694 14.8169L10 10.8839L13.9331 14.8169C14.1771 15.061 14.5729 15.061 14.8169 14.8169C15.061 14.5729 15.061 14.1771 14.8169 13.9331L10.8839 10L14.8169 6.06694C15.061 5.82286 15.061 5.42714 14.8169 5.18306C14.5729 4.93898 14.1771 4.93898 13.9331 5.18306L10 9.11612L6.06694 5.18306Z"
          fill="#C2C2C2" />
      </svg>
    </div>
  </div>
  <div class="empty-illust">
    <div class="bag-cross">
      <svg class="vuesax-bulk-bag-cross" width="141" height="140" viewBox="0 0 141 140" fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path opacity="0.4"
          d="M94.9418 51.6834C92.6668 51.6834 90.8584 49.8751 90.8584 47.6001V40.1334C90.8584 34.4167 88.4084 28.9334 84.2084 25.0834C79.8918 21.1751 74.3501 19.3667 68.5168 19.8917C58.7168 20.8251 50.1418 30.8001 50.1418 41.1834V46.4334C50.1418 48.7084 48.3334 50.5167 46.0584 50.5167C43.7834 50.5167 41.9751 48.7084 41.9751 46.4334V41.1834C41.9751 26.6001 53.7584 13.1251 67.7001 11.7834C75.8084 11.0251 83.6251 13.5917 89.6334 19.0751C95.5834 24.4417 98.9668 32.1417 98.9668 40.1334V47.6001C98.9668 49.8751 97.1584 51.6834 94.9418 51.6834Z"
          fill="#009499" />
        <path
          d="M116.933 52.2666C112.033 46.8416 103.983 44.2166 92.1999 44.2166H48.7999C37.0166 44.2166 28.9666 46.8416 24.0666 52.2666C18.4082 58.5666 18.5832 66.9665 19.2249 72.7999L23.3082 105.292C24.5332 116.667 29.1416 128.333 54.2249 128.333H86.7749C111.858 128.333 116.467 116.667 117.692 105.35L121.775 72.7416C122.417 66.9666 122.592 58.5666 116.933 52.2666ZM70.4999 108.383C58.3082 108.383 48.3916 98.4665 48.3916 86.2749C48.3916 74.0832 58.3082 64.1666 70.4999 64.1666C82.6916 64.1666 92.6082 74.0832 92.6082 86.2749C92.6082 98.4665 82.6916 108.383 70.4999 108.383Z"
          fill="#009499" />
        <path opacity="0.4"
          d="M70.4999 108.383C82.71 108.383 92.6083 98.4852 92.6083 86.2751C92.6083 74.065 82.71 64.1667 70.4999 64.1667C58.2898 64.1667 48.3916 74.065 48.3916 86.2751C48.3916 98.4852 58.2898 108.383 70.4999 108.383Z"
          fill="#009499" />
        <path
          d="M79.8334 89.3083L76.7417 86.2166L79.6584 83.2999C81.35 81.6083 81.35 78.8083 79.6584 77.1166C77.9667 75.4249 75.1667 75.4249 73.475 77.1166L70.5584 80.0333L67.4667 76.9416C65.775 75.2499 62.975 75.2499 61.2834 76.9416C59.5917 78.6333 59.5917 81.4333 61.2834 83.1249L64.375 86.2166L61.1667 89.4249C59.475 91.1166 59.475 93.9166 61.1667 95.6083C62.0417 96.4833 63.15 96.8916 64.2584 96.8916C65.3667 96.8916 66.475 96.4833 67.35 95.6083L70.5584 92.3999L73.65 95.4916C74.525 96.3666 75.6334 96.7749 76.7417 96.7749C77.85 96.7749 78.9584 96.3666 79.8334 95.4916C81.525 93.7999 81.525 91.0583 79.8334 89.3083Z"
          fill="#009499" />
      </svg>
    </div>
    <div class="title-desc">
      <div class="product-not-found">Product not found</div>
      <div class="we-cannot-find-what-you-looking-for-try-to-use-other-keywords-or-reset-keyword">
        We cannot find what you looking for, try to use other keywords or reset
        keyword.
      </div>
    </div>
    <div class="t-button">
      <div class="button">Reset Keyword</div>
    </div>
  </div>
</template>
<script>
export default {
  name: "EmptyIllust",
  components: {},
  props: {},
  data() { },
};
</script>
<script setup>
  import WebHeaderFull from '../header/WebHeaderFull.vue';
</script>
<style scoped>
.section-title,
.section-title * {
  box-sizing: border-box;
}

.section-title {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 1200px;
  position: relative;
  margin-top: 120px;
}

.items {
  color: #000000;
  margin-left: 250px;
  font-family: var(--headline-4-medium-font-family, "Inter-Medium", sans-serif);
  font-size: var(--headline-4-medium-font-size, 24px);
  line-height: var(--headline-4-medium-line-height, 32px);
  font-weight: var(--headline-4-medium-font-weight, 500);
  position: relative;

}

.tag {
  background: var(--neutral-10, #ffffff);
  border-radius: 6px;
  border-style: solid;
  border-color: var(--neutral-30, #ededed);
  border-width: 1px;
  padding: 2px 4px 2px 8px;
  display: flex;
  flex-direction: row;
  gap: 4px;
  align-items: center;
  justify-content: flex-start;
  flex-shrink: 0;
  position: relative;
}

.label {
  color: var(--neutral-90, #404040);
  font-family: var(--body-1-medium-font-family, "Inter-Medium", sans-serif);
  font-size: var(--body-1-medium-font-size, 16px);
  line-height: var(--body-1-medium-line-height, 24px);
  font-weight: var(--body-1-medium-font-weight, 500);
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-start;
}

.close {
  flex-shrink: 0;
  width: 20px;
  height: 20px;
  position: relative;
  overflow: visible;
}

.empty-illust,
.empty-illust * {
  box-sizing: border-box;
}

.empty-illust {
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: center;
  justify-content: flex-start;
  width: 343px;
  position: relative;
  margin: auto;
  padding: 45px 10px;
}

.bag-cross {
  flex-shrink: 0;
  width: 140px;
  height: 140px;
  position: relative;
}

.vuesax-bulk-bag-cross {
  height: auto;
  position: absolute;
  left: 0px;
  top: 0px;
  overflow: visible;
}

.title-desc {
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: center;
  justify-content: flex-start;
  align-self: stretch;
  flex-shrink: 0;
  position: relative;
}

.product-not-found {
  color: var(--global-neutral-100, #0a0a0a);
  text-align: center;
  font-family: var(--heading-3-medium-font-family, "Inter-Medium", sans-serif);
  font-size: var(--heading-3-medium-font-size, 28px);
  line-height: var(--heading-3-medium-line-height, 36px);
  font-weight: var(--heading-3-medium-font-weight, 500);
  position: relative;
  align-self: stretch;
}

.we-cannot-find-what-you-looking-for-try-to-use-other-keywords-or-reset-keyword {
  color: var(--global-neutral-90, #404040);
  text-align: center;
  font-family: var(--body-1-regular-font-family, "Inter-Regular", sans-serif);
  font-size: var(--body-1-regular-font-size, 16px);
  line-height: var(--body-1-regular-line-height, 24px);
  font-weight: var(--body-1-regular-font-weight, 400);
  position: relative;
  align-self: stretch;
}

.t-button {
  background: var(--light-secondary-main, #009499);
  border-radius: 4px;
  padding: 10px 16px 10px 16px;
  display: flex;
  flex-direction: row;
  gap: 8px;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: 234px;
  position: relative;
}

.button {
  color: var(--global-neutral-10, #ffffff);
  text-align: center;
  font-family: var(--label-lg-font-family, "Inter-Medium", sans-serif);
  font-size: var(--label-lg-font-size, 14px);
  line-height: var(--label-lg-line-height, 20px);
  font-weight: var(--label-lg-font-weight, 500);
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
  