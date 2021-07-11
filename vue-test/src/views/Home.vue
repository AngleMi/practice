<template>
  <div>
    <h2>作业</h2>
    <div class="menu">
      <router-link to="/transradix">
        <div class="item">TransRadix</div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  components: {}
}
</script>

<style lang="less">
.menu {
  display: flex;
  flex-wrap: wrap;
  .item {
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px #e0e0e0 solid;
    background: #f0f0f0;
    width: 200px;
    height: 100px;
    margin: 10px;
    border-radius: 6px;
  }
}
</style>
