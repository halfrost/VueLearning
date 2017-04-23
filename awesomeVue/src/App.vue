/* eslint-disable */

<template>
  <div width = "600px">
      <div class="block">
        <span class="demonstration">默认 Hover 指示器触发</span>
        <el-carousel height="150px">
          <el-carousel-item v-for="item in 4">
            <h3>{{ item }}</h3>
          </el-carousel-item>
        </el-carousel>
      </div>
      <div class="block">
        <span class="demonstration">Click 指示器触发</span>
        <el-carousel trigger="click" height="150px">
          <el-carousel-item v-for="item in 4">
            <h3>{{ item }}</h3>
          </el-carousel-item>
        </el-carousel>
      </div>

      <el-badge :value="12" class="item">
  <el-button size="small">评论</el-button>
</el-badge>
<el-badge :value="3" class="item">
  <el-button size="small">回复</el-button>
</el-badge>

<el-dropdown trigger="click">
  <span class="el-dropdown-link">
    点我查看<i class="el-icon-caret-bottom el-icon--right"></i>
  </span>
  <el-dropdown-menu slot="dropdown">
    <el-dropdown-item class="clearfix">
      评论
      <el-badge class="mark" :value="12" />
    </el-dropdown-item>
    <el-dropdown-item class="clearfix">
      回复
      <el-badge class="mark" :value="3" />
    </el-dropdown-item>
  </el-dropdown-menu>
</el-dropdown>



<el-form ref="form" :model="form" label-width="80px">
<el-form-item label="活动名称">
<el-input v-model="form.name"></el-input>
</el-form-item>
<el-form-item label="活动区域">
<el-select v-model="form.region" placeholder="请选择活动区域">
<el-option label="区域一" value="shanghai"></el-option>
<el-option label="区域二" value="beijing"></el-option>
</el-select>
</el-form-item>
<el-form-item label="活动时间">
<el-col :span="11">
<el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;"></el-date-picker>
</el-col>
<el-col class="line" :span="2">-</el-col>
<el-col :span="11">
<el-time-picker type="fixed-time" placeholder="选择时间" v-model="form.date2" style="width: 100%;"></el-time-picker>
</el-col>
</el-form-item>
<el-form-item label="即时配送">
<el-switch on-text="" off-text="" v-model="form.delivery"></el-switch>
</el-form-item>
<el-form-item label="活动性质">
<el-checkbox-group v-model="form.type">
<el-checkbox label="美食/餐厅线上活动" name="type"></el-checkbox>
<el-checkbox label="地推活动" name="type"></el-checkbox>
<el-checkbox label="线下主题活动" name="type"></el-checkbox>
<el-checkbox label="单纯品牌曝光" name="type"></el-checkbox>
</el-checkbox-group>
</el-form-item>
<el-form-item label="特殊资源">
<el-radio-group v-model="form.resource">
<el-radio label="线上品牌商赞助"></el-radio>
<el-radio label="线下场地免费"></el-radio>
</el-radio-group>
</el-form-item>
<el-form-item label="活动形式">
<el-input type="textarea" v-model="form.desc"></el-input>
</el-form-item>
<el-form-item>
<el-button type="primary" @click="onSubmit">立即创建</el-button>
<el-button>取消</el-button>
</el-form-item>
</el-form>
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
  },
  methods: {
    onSubmit () {
      console.log('submit!')
    }
  }
}
</script>

<style>

.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
   background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n+1) {
   background-color: #d3dce6;
}

.item {
  margin-top: 10px;
  margin-right: 40px;
}


</style>
