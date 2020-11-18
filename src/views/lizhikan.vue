<template>
  <div id="app">
    <div class="zhuye">
      <p class="xinzen">
        <span>离职申请单详情</span>
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
            <el-form ref="form" :model="form" label-width="140px">
              <el-form-item label="*主题">
                <span>离职申请-张娜娜-1000185</span>
              </el-form-item>
              <el-form-item label="步骤:" label-width="140px">
                <span>领导审批     责任人: 陈杰,      参与人:</span>
              </el-form-item>
            </el-form>
          </div>
          <div class="you">
            <el-form ref="form" :model="form" label-width="110px">
              <el-form-item label="优先级">
                <span>中</span>
              </el-form-item>
              <el-form-item label="结束时间"></el-form-item>
            </el-form>
          </div>
        </div>
        <p class="fen">
          <span>基本信息</span>
        </p>
        <div class="liantiao1">
          <div class="zuo">
            <el-form ref="form" :model="form" label-width="140px">
              <el-form-item label="*申请人">
                <span>张娜娜</span>
              </el-form-item>
              <el-form-item label="*申请日期">
                <span>2016/4/7</span>
              </el-form-item>
              <el-form-item label="*入职日期">
                <span>2007/10/19</span>
              </el-form-item>
            </el-form>
          </div>
          <div class="you">
            <el-form ref="form" :model="form" label-width="110px">
              <el-form-item label="*所属部门">
                <span>北京分公司</span>
              </el-form-item>
              <el-form-item label="*工作岗位">
                <span>工程师</span>
              </el-form-item>
              <el-form-item label="*预计离职日期">
                <span>2016/4/30</span>
              </el-form-item>
            </el-form>
          </div>
          <div class="neiron">
            <el-form ref="form" :model="form" label-width="140px">
              <el-form-item label="*离职类型">
                <p>合同未到期，个人要求解除劳动关系</p>
              </el-form-item>
              <el-form-item label="*离职原因">
                <p>工资不满足，有其他机会</p>
              </el-form-item>
              <el-form-item label="*工作交接">
                <p>工作交接给新员工</p>
              </el-form-item>
              <el-form-item label="*主管意见">
                <p>同意</p>
              </el-form-item>
              <el-form-item label="*领导意见">
                <p></p>
              </el-form-item>
              <el-form-item label="离职处理">
                <span class="el-icon-check">人事处理</span>
                <span class="el-icon-check">信息系统已经变更（请人事专员或系统管理员在本系统的【员工管理】模块中新增员工信息）</span>
              </el-form-item>
              <el-form-item label="附件">
                <p></p>
              </el-form-item>
            </el-form>
          </div>
        </div>
        <p class="fen">
          <span>处理流程日志</span>
        </p>
        <div class="chuli">
          <div class="q1">
            <p>
              <strong>【处理过程】</strong>
              <a href="#">查看流程图 ></a>
            </p>
            <div>
              王萍2016/4/8 10:45
              <br />
              <strong>【提交主管审批】</strong>
            </div>
            <div>
              周立强 2016/4/8 10:45
              <br />
              <strong>【通过并转人事处理】</strong>
            </div>
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
              <el-button class="ji">打印表单</el-button>
              <el-button class="ji">打印本页面</el-button>
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
        name: "离职申请-张娜娜-1000185",
        name1: "张娜娜",
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
        path: "/lizhikan"
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
.neiron{
    float: left;
    margin-top:-20px; 
}
.din {
  position: absolute;
  top: 490px;
  left: 120px;
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
  height: 500px;
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
  margin-left: 810px;
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
  width: 540px;
}
.you {
  width: 500px;
  float: right;
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