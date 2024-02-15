<template>
  <WebHeadear/>
  <div>
    <div style="padding-top: 10px;">
      <img src="../../assets/Banner.png" alt="" style="width: 1535px;">
      <new-product/>
    </div>
    <div class="recipe_list-recipe">
      <recipe-list :recipes="recipeList" v-if="recipeListStatus">
      </recipe-list>
    </div>
  </div>
</template>

<script setup>
import WebHeadear from "../header/WebHeadear.vue";
import RecipeList from "../recipe/RecipeList.vue";
import NewProduct from "../recipe/NewProduct.vue";
import { onMounted, ref } from "vue";
import { useStore } from "vuex";
const store = useStore();
const recipeListStatus = ref(false);
const recipeList = ref();

onMounted(async () => {
  try {
    await store.dispatch("recipe/getRecipeData");
    recipeListStatus.value = true;
    recipeList.value = store.state.recipe.recipes;
  } catch (error) {
    console.log(error);
  }
});
</script>





