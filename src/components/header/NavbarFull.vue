<template>
    <div class="navbar font-main fixed-top bg-white">
        <div class="container navbar__container d-flex flex-md-row flex-column" style="margin-top: 15px;"> <!--div keseluruhan-->
            <!-- logo -->
            <router-link to="/"><img src="../../assets/Logo Horizontal.png" alt="vintage logo"
                    class="navbar__logo" style="padding-bottom: 14px;"/></router-link>
            <div>
                <!-- Search -->
                <!-- <div>
        <form class="d-flex navbar__form flex-grow-1 align-items-center position-relative" role="search">
          <i class="fa-solid fa-magnifying-glass fs-5 px-2 position-absolute"></i>
            <label for="searchProduct" class="form-label flex-grow-1 m-0 w-100">
            <input type="text" class="form-control ps-5" id="searchProduct" aria-describedby="emailHelp" autofocus v-model="keyword" placeholder="Search for items" />
          </label>
        </form>
                </div> -->
            <!-- icon -->
        <img src="../../assets/Action.png" alt="icon" style="margin-left: 350px;">
            <!-- language -->
        <img src="../../assets/Action Wrapper.png" alt="profil and language" style="margin-left: 100px;">
            </div>
        </div>
    </div>
</template>
  
<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();
</script>
  
<style scoped>
@media screen and (min-width: 992px) {
    .navbar {
        padding: 10px 120px 12px 120px;
    }

    .language {
        padding-left: 27px;
        margin-left: 27px;
    }
}

@media screen and (max-width: 990px) {
    .navbar__auth,
    .language {
        margin-bottom: 12px;
    }

    .language {
        border: none !important;
    }
}

.navbar__form input {
  border-right: 1px solid #ededed;
  margin-right: 50px;
}
.navbar__form {
  border-radius: 8px;
  color: #757575;
  font-size: 14px;
  margin-right: 620px;
  
}

/* .position-nav {
    width: Fixed (1,440px);
    height: Hug (64px);
    padding: 12px, 120px, 12px, 120px;
    border: 0px, 0px, 1px, 0px;
    gap: 32px;
} */

.navbar {
        padding: 1px ;
    }
</style>
  