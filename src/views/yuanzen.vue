<template>
  <div id="app">
    <div class="zhuye">
      <p class="xinzen">
        <span>新增员工</span>
        <span class="xinzen-yi" @click="fanhui()">
          <span class="el-icon-arrow-left"></span>返回
        </span>
        <span class="xinzen-er" @click="shuaxin()">
          <span class="el-icon-refresh"></span>刷新
        </span>
      </p>
      <p class="fen">
        <span>基本信息</span>
      </p>
      <div>
        <div class="zuo">
          <el-form ref="form" :model="form" label-width="80px">
            <el-form-item label="从属于">
              <el-select v-model="form.region" class="width" placeholder>
                <el-option label="总经办" value="shanghai"></el-option>
                <el-option label="人事部" value="beijing"></el-option>
                <el-option label="财务部"></el-option>
                <el-option label="销售部"></el-option>
                <el-option label="技术部"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="*姓名">
              <el-input v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item label="性别">
              <el-radio-group v-model="form.resource">
                <el-radio label="男"></el-radio>
                <el-radio label="女"></el-radio>
              </el-radio-group>
            </el-form-item>
            <el-form-item label="固定电话">
              <el-input v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item label="电子邮件">
              <el-input v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item label="职务">
              <el-input v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item label="出生日期">
              <el-input v-model="form.name" placeholder="yyyy-MM-dd"></el-input>
            </el-form-item>
            <el-form-item label="转正日期">
              <el-input v-model="form.name" placeholder="yyyy-MM-dd"></el-input>
            </el-form-item>
          </el-form>
        </div>
        <div class="you">
          <el-form ref="form" :model="form" label-width="80px">
            <el-form-item label="在职状态">
              <el-radio-group v-model="form.resource">
                <el-radio label="在职"></el-radio>
                <el-radio label="试用"></el-radio>
                <el-radio label="临时"></el-radio>
                <el-radio label="退休"></el-radio>
                <el-radio label="离职"></el-radio>
              </el-radio-group>
            </el-form-item>
            <el-form-item label="工号">
              <el-input v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item label="上级主管">
              <el-select v-model="form.region" class="width" placeholder="王娜"></el-select>
            </el-form-item>
            <el-form-item label="移动电话">
              <el-input v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item label="即时通信">
              <el-input v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item label="职务级别">
              <el-input v-model="form.name" placeholder="0"></el-input>
            </el-form-item>
            <el-form-item label="出生日期">
              <el-input v-model="form.name" placeholder="yyyy-MM-dd"></el-input>
            </el-form-item>
            <el-form-item label="转正日期">
              <el-input v-model="form.name" placeholder="yyyy-MM-dd"></el-input>
            </el-form-item>
          </el-form>
        </div>
        <div class="shegao1"></div>
        <div>
          <el-form ref="form" :model="form" label-width="80px">
            <el-form-item label="职责说明">
              <el-input type="textarea" v-model="form.desc" placeholder="请输入内容"></el-input>
            </el-form-item>
            <el-form-item label="附加描述">
              <el-input type="textarea" v-model="form.desc" placeholder="请输入内容"></el-input>
            </el-form-item>
          </el-form>
        </div>
        <div class="zuo">
          <el-form ref="form" :model="form" label-width="80px">
            <el-form-item label="籍贯">
              <el-input v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item label="政治面貌">
              <el-input v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item label="身份证号">
              <el-input v-model="form.name"></el-input>
            </el-form-item>
          </el-form>
        </div>
        <div class="you">
          <el-form ref="form" :model="form" label-width="90px">
            <el-form-item label="民族">
              <el-input v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item label="婚姻状况">
              <el-radio-group v-model="form.resource">
                <el-radio label="未婚"></el-radio>
                <el-radio label="已婚"></el-radio>
                <el-radio label="离婚"></el-radio>
              </el-radio-group>
            </el-form-item>
            <el-form-item label="户口所在地">
              <el-input v-model="form.name"></el-input>
            </el-form-item>
          </el-form>
        </div>
        <div class="shegao2"></div>
        <el-form ref="form" :model="form" label-width="80px">
          <el-form-item label="联系地址">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
        </el-form>
        <div class="zuo">
          <el-form ref="form" :model="form" label-width="80px">
            <el-form-item label="籍贯">
              <el-input v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item label="政治面貌">
              <el-input v-model="form.name"></el-input>
            </el-form-item>
          </el-form>
        </div>
        <div class="you">
          <el-form ref="form" :model="form" label-width="90px">
            <el-form-item label="民族">
              <el-input v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item label="户口所在地">
              <el-input v-model="form.name"></el-input>
            </el-form-item>
          </el-form>
        </div>
        <div class="shegao3"></div>
        <el-form ref="form" :model="form" label-width="80px">
          <el-form-item label="联系地址">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
        </el-form>
        <div class="baochun">
          <el-form ref="form" :model="form" label-width="80px">
            <el-form-item>
              <el-button class="dian" type="primary" @click="onSubmit">保存</el-button>
              <el-button class="ji">取消</el-button>
            </el-form-item>
          </el-form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      form: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: ""
      }
    };
  },
  methods: {
    onSubmit() {
      console.log("submit!");
    },
    fanhui(){
        this.$router.push({
            path:'/yuangon'
        })
    },
    shuaxin(){
        this.$router.push({
            path:'/yuanzen'
        })
    }
  }
};
</script>
<style scoped>
.zhuye {
  background-color: rgb(255, 255, 255);
  padding: 20px 40px 0px 40px;
  width: 1345px;
  height:620px;
  overflow-x: scroll;
  word-break: break-all;
}
.xinzen {
  font-size: 20px;
}
.xinzen-yi {
  margin-left: 880px;
  border-radius: 2px;
  border: 1px solid rgb(201, 201, 201);
  padding: 5px;
  font-size: 14px;
}
.xinzen-yi span {
  margin-right: 5px;
  font-size: 16px;
}
.xinzen-er {
  margin-left: 10px;
  border-radius: 2px;
  border: 1px solid rgb(201, 201, 201);
  padding: 5px;
  font-size: 14px;
}
.xinzen-er span {
  margin-right: 5px;
  font-size: 16px;
}
.fen {
  border-top: 1px solid rgb(201, 201, 201);
  border-bottom: 1px solid rgb(201, 201, 201);
  background-color: rgb(255, 255, 224);
  padding: 8px 0;
  margin-top: 15px;
  margin-bottom: 15px;
}
.fen span {
  margin-left: 15px;
}
.zuo {
  float: left;
  width: 500px;
}
.you {
  width: 500px;
  float: right;
}
.width {
  width: 420px;
}
.el-form-item:nth-of-type(1) {
  margin-top: 10px;
}
.el-form-item {
  margin-top: -15px;
}
.shegao1 {
  height: 392px;
}
.shegao2 {
  height: 157px;
}
.shegao3 {
  height: 117px;
}
.baochun{
    text-align: center;
}
.dian{
    border-radius: 30px;
}
.ji{
    border-radius: 30px;
}
</style>