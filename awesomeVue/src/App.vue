/* eslint-disable */

<template>

</div>

<div class="block">
  <span class="demonstration">默认</span>
  <el-date-picker
    v-model="value1"
    type="datetime"
    placeholder="选择日期时间">
  </el-date-picker>
</div>
<div class="block">
  <span class="demonstration">带快捷选项</span>
  <el-date-picker
    v-model="value2"
    type="datetime"
    placeholder="选择日期时间"
    align="right"
    :picker-options="pickerOptions1">
  </el-date-picker>
</div>


</template>



<script>


export default {
  data () {
    return {
      form: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      }
    }
    pickerOptions1: {
          shortcuts: [{
            text: '今天',
            onClick(picker) {
              picker.$emit('pick', new Date());
            }
          }, {
            text: '昨天',
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24);
              picker.$emit('pick', date);
            }
          }, {
            text: '一周前',
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit('pick', date);
            }
          }]
        },
        value1: '',
        value2: ''
  },
  methods: {
    onSubmit () {
      console.log('submit!')
    }
  }
}

</script>



<style>




</style>
