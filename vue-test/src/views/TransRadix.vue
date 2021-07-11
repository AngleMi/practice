<template>
  <div>
    <h2>10进制浮点数转换成64进制</h2>
    <hr />
    <ul>
      <li>
        <label for="number">10进制数 </label>
        <input id="number" type="number" v-model="number" />
      </li>
      <li>
        <label for="radix"> 目标进制 </label>
        <input id="radix" type="number" v-model="radix" disabled/>
      </li>
      <li>
        <label for="precision"> 保留小数位数 </label>
        <input id="precision" type="number" v-model="precision" />
      </li>
      <li class="btn">
        <button @click="transRadixRes">开始计算</button>
      </li>
    </ul>
    <div>计算结果：{{ result }}</div>
  </div>
</template>

<script>
import { transRadix } from '../utils/transRadix'

export default {
  name: 'TransRadix',
  data () {
    return {
      number: 0,
      radix: 64,
      precision: 2,
      result: ''
    }
  },
  methods: {
    transRadixRes () {
      const { number, radix, precision } = this
      this.result = transRadix(
        Number(number),
        Number(radix),
        Number(precision)
      )
    }
  }
}
</script>

<style lang="less">
ul {
  width: 300px
}
li {
  display: flex;
  list-style: none;
  margin-bottom: 5px;
}
label {
  display: block;
  float: left;
  overflow: hidden;
  width: 150px;
  padding-right: 10px;
  text-align-last: right;
  line-height: 2;
}
.btn {
  justify-content: flex-end;
}
</style>
