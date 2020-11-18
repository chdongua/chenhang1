<template>
  <div id="app">
    <div class="zhuye">
      <p class="xinzen">
        <span>入职申请单</span>
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
        <div class="liantiao">
          <div class="zuo">
            <el-form ref="form" :model="form" label-width="80px">
              <el-form-item label="*主题">
                <el-input v-model="form.name"></el-input>
              </el-form-item>
              <el-form-item label="步骤:" label-width="80px">
                <span>主管审批 责任人: 王娜, 参与人:</span>
              </el-form-item>
            </el-form>
          </div>
          <div class="you">
            <el-form ref="form" :model="form" label-width="80px">
              <el-form-item label="优先级">
                <el-radio-group v-model="form.resource">
                  <el-radio label="低"></el-radio>
                  <el-radio label="中"></el-radio>
                  <el-radio label="高"></el-radio>
                </el-radio-group>
              </el-form-item>
              <el-form-item label="结束时间">
                <el-input placeholder="yyyy-MM-dd"></el-input>
              </el-form-item>
            </el-form>
          </div>
        </div>
        <p class="fen">
          <span>基本信息</span>
        </p>
        <div class="liantiao1">
          <div class="zuo">
            <el-form ref="form" :model="form" label-width="100px">
              <el-form-item label="申请人">
                <el-input v-model="form.name1"></el-input>
              </el-form-item>
              <el-form-item label="申请时间">
                <el-input placeholder="yyyy-MM-dd"></el-input>
              </el-form-item>
              <el-form-item label="希望到岗日期">
                <el-input placeholder="yyyy-MM-dd"></el-input>
              </el-form-item>
              <el-form-item label="毕业院校">
                <el-input></el-input>
              </el-form-item>
              <el-form-item label="专业方向">
                <el-input></el-input>
              </el-form-item>
            </el-form>
          </div>
          <div class="you">
            <el-form ref="form" :model="form" label-width="80px">
              <el-form-item label="入职部门">
                <el-select v-model="form.region" class="width" placeholder="销售部">
                  <el-option label="总经办" value="shanghai"></el-option>
                  <el-option label="人事部" value="beijing"></el-option>
                  <el-option label="财务部"></el-option>
                  <el-option label="销售部"></el-option>
                  <el-option label="技术部"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="入职岗位">
                <el-input></el-input>
              </el-form-item>
              <el-form-item label="性别">
                <el-radio-group v-model="form.resource">
                  <el-radio label="男"></el-radio>
                  <el-radio label="女"></el-radio>
                </el-radio-group>
              </el-form-item>
              <el-form-item label="最高学历">
                <el-input></el-input>
              </el-form-item>
              <el-form-item label="工作年限">
                <el-input></el-input>
              </el-form-item>
            </el-form>
          </div>
        </div>
        <div class="bian">
          <el-form ref="form" :model="form" label-width="100px">
            <el-form-item label="备注">
              <el-input type="textarea" v-model="form.desc" placeholder="请输入内容"></el-input>
            </el-form-item>
            <el-form-item label="入职处理">
                <el-checkbox v-model="checked">人事手续已经办理</el-checkbox>
                <el-checkbox v-model="checked">行政资源已经发放</el-checkbox>
                <el-checkbox v-model="checked">信息系统已经开通（请人事专员或系统管理员在本系统的【员工管理】模块中新增员工信息）</el-checkbox>
            </el-form-item>
          </el-form>
        </div>
        
        <div class="shegao3"></div>
        <el-form ref="form" :model="form" label-width="100px">
          <el-form-item label="附件">
            <el-input></el-input>
          </el-form-item>
        </el-form>
        <p class="fen">
          <span>处理流程日志</span>
        </p>
        <div class="chuli">
          <div class="q1">
            <p>
              <strong>【处理过程】</strong>
              <a href="#">查看流程图 ></a>
            </p>
          </div>
          <div class="q2">
            <p>
              <strong>【父事务】</strong>
            </p>
          </div>
          <div class="q3">
            <p>
              <strong>【子事务】</strong>
            </p>
          </div>
        </div>
        <div class="baochun">
          <el-form ref="form" :model="form" label-width="80px">
            <el-form-item>
              <el-button class="dian" type="primary" @click="onSubmit">保存</el-button>
              <el-button class="ji">提交主管考核</el-button>
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
        name: "入职申请-陈莹-1000179",
        name1: "陈莹",
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
    fanhui() {
      this.$router.push({
        path: "/zhaopin"
      });
    },
    shuaxin() {
      this.$router.push({
        path: "/zhaozen"
      });
    }
  }
};
</script>
<style scoped>
#app{
  width: 1345px;
  height:650px;
  overflow-x: scroll;
  word-break: break-all;
}
.chuli {
  position: relative;
  float: none;
  margin-top: 10px;
}
.q1 {
  width: 59%;
  height: 300px;
  border-radius: 4px;
  border: 1px solid rgb(201, 201, 201);
}
.q1 p {
  padding: 10px;
  border-bottom: 1px solid rgb(201, 201, 201);
}
.q1 p a {
  font-size: 13px;
  float: right;
}
.q2 {
  width: 39%;
  height: 150px;
  border-radius: 4px;
  border: 1px solid rgb(201, 201, 201);
  position: absolute;
  top: 0px;
  right: 0;
}
.q2 p {
  padding: 10px;
  border-bottom: 1px solid rgb(201, 201, 201);
}
.q3 {
  width: 39%;
  height: 140px;
  border-radius: 4px;
  border: 1px solid rgb(201, 201, 201);
  position: absolute;
  top: 160px;
  right: 0;
}
.q3 p {
  padding: 10px;
  border-bottom: 1px solid rgb(201, 201, 201);
}
.bian {
  float: left;
  width: 100%;
  margin-top: -20px;
}
.liantiao {
  height: 100px;
}
.liantiao1 {
  height: 150px;
}
#app {
  background-color: rgb(241, 241, 241);
  padding: 0 80px;
}
.zhuye {
  background-color: rgb(255, 255, 255);
  padding: 20px 40px;
}
.xinzen {
  font-size: 20px;
}
.xinzen-yi {
  cursor: pointer;
  margin-left: 860px;
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
  cursor: pointer;
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
.baochun {
  text-align: center;
}
.dian {
  border-radius: 30px;
}
.ji {
  border-radius: 30px;
}
</style>