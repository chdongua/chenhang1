<template>
  <div id="app">
    <div class="zhuye">
      <p class="xinzen">
        <span>员工培训安排单详情</span>
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
            <el-form ref="form" :model="form" label-width="100px">
              <el-form-item label="*主题">
                <span>劳动合同登记-王萍-1000212</span>
              </el-form-item>
              <el-form-item label="步骤:" label-width="100px">
                <span>培训通知     责任人: 李萌,      参与人:李萌,沈华,沈涛辉,张旭,张瑶瑶</span>
              </el-form-item>
            </el-form>
          </div>
          <div class="you">
            <el-form ref="form" :model="form" label-width="110px">
              <el-form-item label="优先级">
                <span>中</span>
              </el-form-item>
              <el-form-item label="结束时间">2016/5/8</el-form-item>
            </el-form>
          </div>
        </div>
        <p class="fen">
          <span>申请信息</span>
        </p>
        <div class="liantiao1">
          <div class="zuo">
            <el-form ref="form" :model="form" label-width="110px">
              <el-form-item label="*申请人">
                <span>李萌</span>
              </el-form-item>
              <el-form-item label="*合同类型">
                <span>无固定期限合同</span>
              </el-form-item>
              <el-form-item label="*申请日期">
                <span>2018/4/9</span>
              </el-form-item>
              <el-form-item label="培训课程">
                <span>ColloaV8新版本系统培训</span>
              </el-form-item>
              <el-form-item label="*开始时间">
                <span>2018/5/8 09:00:00</span>
              </el-form-item>
              <el-form-item label="培训类型">
                <span>技术培训</span>
              </el-form-item>
              <el-form-item label="*受培训人员">
                <span>李萌,沈华,沈涛辉,张旭,张瑶瑶,季道晓,</span>
              </el-form-item>
              <el-form-item label="*培训日程">
                <p>地点：二号会议室</p>
                <p>9:00~10:30 新版本技术培训和业务场景解析</p>
                <p>10:30~11:00 答疑解惑</p>
              </el-form-item>
              <el-form-item label="培训总结">
                <span></span>
              </el-form-item>
              <el-form-item label="附件">
                <span></span>
              </el-form-item>
            </el-form>
          </div>
          <div class="you">
            <el-form ref="form" :model="form" label-width="110px">
              <el-form-item label="*所属部门">
                <span>销售部</span>
              </el-form-item>
              <el-form-item label="*培训讲师">
                <span>许经理</span>
              </el-form-item>
              <el-form-item label="结束时间">
                <span>2018/5/8 11:00:00</span>
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
            <div>王萍2016/4/8 10:45<br/><strong>【提交主管审批】</strong></div>
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
              <el-button class="ji">保存</el-button>              
              <el-button class="ji">培训完成并总结</el-button>              
              <el-button class="ji">回退修改</el-button>              
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
        name: "招聘申请-刘峰-1000165",
        name1: "刘峰",
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
        path: "/laodon"
      });
    },
    shuaxin() {
      this.$router.push({
        path: "/peixunkan"
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
.din{
    position: absolute;
    top: 490px;
    right: 483px;
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
  height: 560px;
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
  margin-left: 780px;
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