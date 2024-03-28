<template>
  <div>
    <el-menu mode="horizontal" class="centered-menu">
      <el-menu-item index="description" @click="navigateTo('description')">病情描述</el-menu-item>
      <el-menu-item index="department" @click="navigateTo('department')">分配科室</el-menu-item>
      <el-menu-item index="diagnosis" @click="navigateTo('diagnosis')">医生诊断</el-menu-item>
      <el-menu-item index="payment" @click="navigateTo('payment')">缴费</el-menu-item>
    </el-menu>

    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    navigateTo(routeName) {
      this.$router.push({ name: routeName });
    }
  }
};
</script>

<style>
.centered-menu {
  display: flex;
  justify-content: space-around;
  margin-bottom: 0; /* 防止菜单有默认的下边距 */
}
</style>
