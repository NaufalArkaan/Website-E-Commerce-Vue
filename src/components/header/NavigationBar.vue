<template>
  <!-- <SignupMenu/> -->
  <Component :is="components[menuComponent]" />
</template>


<script setup>
import SignupMenu from './SignupMenu.vue';
import ProfileMenu from "./ProfileMenu.vue";
import { computed, ref, watch } from "vue";
import { useStore } from "vuex";
const menuComponent = ref("signup-menu");
const store = useStore();
const components = {
  'signup-menu': SignupMenu,
  'profile-menu': ProfileMenu
}

const getToken = computed(() => {
  return store.state.auth.token;
});
if (!getToken.value) {
  menuComponent.value = "signup-menu";
} else {
  menuComponent.value = "profile-menu";
}
watch(getToken, (newValue, oldValue) => {
  if (!newValue) {
    menuComponent.value = "signup-menu";
  } else {
    menuComponent.value = "profile-menu";
  }
});
</script>

<style scoped>
.state-not-login,
.state-not-login * {
  box-sizing: border-box;
}

.state-not-login {
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
  position: relative;
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
  box-shadow: var(--shadow-sm-box-shadow,
      0px 1px 3px 0px rgba(16, 24, 40, 0.1),
      0px 1px 2px 0px rgba(16, 24, 40, 0.06));
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
  