<!-- eslint-disable vuejs-accessibility/label-has-for -->
<!-- eslint-disable max-len -->
<template>
  <div class="m-10px">
    <label>
      <p class="cursor-pointer">Label text</p>
      <el-input
      placeholder="Please input"
      v-model="input"
    ></el-input>
    </label>
  </div>
</template>

<script>
import 'element-ui/lib/theme-chalk/index.css';

export default {
  name: 'HomeView',
  components: {
  },
  data() {
    return {
      input: '',
    };
  },
};
</script>

<style>

</style>
