<template>
  <div id="app">
    <div class="zhuye">
      <p class="xinzen">
        <span>转正申请单详情</span>
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
                <span>招聘申请-刘峰-1000165</span>
              </el-form-item>
              <el-form-item label="步骤:" label-width="140px">
                <span>填单人知悉 责任人: 朱铁桥, 参与人:</span>
              </el-form-item>
            </el-form>
          </div>
          <div class="you">
            <el-form ref="form" :model="form" label-width="80px">
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
                <span>朱铁桥</span>
              </el-form-item>
              <el-form-item label="*申请日期">
                <span>2016/4/7</span>
              </el-form-item>
              <el-form-item label="*入职日期">
                <span>2016/2/16</span>
              </el-form-item>
            </el-form>
          </div>
          <div class="you">
            <el-form ref="form" :model="form" label-width="80px">
              <el-form-item label="*所属部门">
                <span>总经办</span>
              </el-form-item>
              <el-form-item label="*申请岗位">
                <span>助理</span>
              </el-form-item>
              <el-form-item label="*转正日期">
                <span>2016/5/16</span>
              </el-form-item>
            </el-form>
          </div>
          <div class="neiron">
            <el-form ref="form" :model="form" label-width="140px">
              <el-form-item label="*试用期工作内容">
                <p>1、起草公司工作计划总结，并作好公司重要会议记录；</p>
                <p>2、起草、存档整理总经理签发文件；</p>
                <p>3、公司管理制度、规章制度，网页设计方案书、合同书，公司总体运行配合;</p>
                <p>4、接听电话、妥当应答，并做好电话记录；</p>
                <p>5、掌握总经理的日程安排做好预约工作，安排商务旅行；</p>
                <p>6、完成总经理或综合管理部经理交办的其他工作；</p>
              </el-form-item>
              <el-form-item label="*试用期工作内容">
                <p>1、起草了公司2016年整体工作计划；</p>
                <p>2、这三个月的总经理的会议纪要输出，以及整理各类总经理的签发文件，保障没有问题；</p>
                <p>3、配合总经理处理公司各项事务，获得总经理的表扬；</p>
              </el-form-item>
              <el-form-item label="*试用期存在的问题">
                <p>学习还需加强，对业务知识了解不够</p>
              </el-form-item>
              <el-form-item label="*问题的改进设想">
                <p>主动学习公司业务知识，多与总经理交流学习</p>
              </el-form-item>
              <el-form-item label="*主管评语">
                <p>同意</p>
              </el-form-item>
              <el-form-item label="*领导评语">
                <p></p>
              </el-form-item>
              <el-form-item label="转正处理">
                <span class="el-icon-check">人事手续已经办理</span>
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
            <div>
              吴燕2016/4/8 10:45
              <br />
              <strong>【转填单人知悉】</strong>
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
        name: "转正申请-朱铁桥-1000183",
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
        path: "/zhaopin"
      });
    },
    shuaxin() {
      this.$router.push({
        path: "/zhaokan"
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
  height: 820px;
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
  margin-left: 800px;
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