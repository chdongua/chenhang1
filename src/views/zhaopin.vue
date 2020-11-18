<template>
  <div id="app">
    <div class="book">
      <span class="yuan">
        <img src="../../src/assets/2.png" />招聘和配置
      </span>
      <span @click="xinzen()">
        <span class="el-icon-plus">新增员工</span>
      </span>
      <span @click="shuaxin()">
        <span class="el-icon-refresh">刷新</span>
      </span>
    </div>
    <div class="neiron">
      <div class="zuo">
        <p class="fen">分类</p>
        <div class="uer">
          <p :class="{one:tab==0}" @click="tab=0">
            <span class="el-icon-s-order"></span>招聘管理
          </p>
          <p :class="{one:tab==1}" @click="tab=1">
            <span class="el-icon-s-order"></span>入职管理
          </p>
          <p :class="{one:tab==2}" @click="tab=2">
            <span class="el-icon-s-order"></span>转正管理
          </p>
          <p :class="{one:tab==3}" @click="tab=3">
            <span class="el-icon-s-order"></span>岗位调动管理
          </p>
          <p :class="{one:tab==4}" @click="tab=4">
            <span class="el-icon-s-order"></span>离职管理
          </p>
        </div>
        <div class="gao"></div>
      </div>
      <div class="you">
        <table v-show="tab==0" class="table" cellspacing="0" cellpadding="0">
          <tr class="tr">
            <td>主题</td>
            <td>申请人</td>
            <td>所属部门</td>
            <td>需求岗位</td>
            <td>需求人数</td>
            <td>希望到岗日期</td>
          </tr>
          <tr class="tr">
            <td class="td" @click="chakan()">招聘申请-刘峰-1000165</td>
            <td>刘峰</td>
            <td>生产部</td>
            <td>初级工程师</td>
            <td>5</td>
            <td>2016/4/30</td>
          </tr>
          <tr class="tr">
            <td class="td">招聘申请-李浩-1000164</td>
            <td>李浩</td>
            <td>技术部</td>
            <td>高级技术员</td>
            <td>1</td>
            <td>2016/4/30</td>
          </tr>
          <tr class="tr">
            <td class="td">招聘申请-王丽萍-1000166</td>
            <td>王丽萍</td>
            <td>深圳分公司</td>
            <td>销售工程师</td>
            <td>3</td>
            <td>2016/4/30</td>
          </tr>
          <tr class="tr">
            <td class="td">招聘申请-王丽萍-1000166</td>
            <td>李浩</td>
            <td>技术部</td>
            <td>高级技术员</td>
            <td>1</td>
            <td>2016/4/30</td>
          </tr>
          <div class="fengye">
          <span class="el-icon-caret-left"></span>
          <span>共有70条记录，第1/4页</span>
          <span class="el-icon-caret-right"></span>
        </div>
        </table>
        <table v-show="tab==1" class="table" cellspacing="0" cellpadding="0">
          <tr class="tr">
            <td>主题</td>
            <td>申请人</td>
            <td>入职人</td>
            <td>入职日期</td>
            <td>入职部门</td>
            <td>入职岗位</td>
          </tr>
          <tr class="tr">
            <td class="td" @click="chakan2()">招聘申请-刘峰-1000165</td>
            <td>入职申请</td>
            <td>江圣俊</td>
            <td>2016/4/22</td>
            <td>技术部</td>
            <td>高级研发工程师</td>
          </tr>
          <tr class="tr">
            <td class="td">招聘申请-李浩-1000164</td>
            <td>李浩</td>
            <td>技术部</td>
            <td>高级技术员</td>
            <td>1</td>
            <td>2016/4/30</td>
          </tr>
          <tr class="tr">
            <td class="td">招聘申请-王丽萍-1000166</td>
            <td>王丽萍</td>
            <td>深圳分公司</td>
            <td>销售工程师</td>
            <td>3</td>
            <td>2016/4/30</td>
          </tr>
          <tr class="tr">
            <td class="td">招聘申请-王丽萍-1000166</td>
            <td>李浩</td>
            <td>技术部</td>
            <td>高级技术员</td>
            <td>1</td>
            <td>2016/4/30</td>
          </tr>
          <div class="fengye">
          <span class="el-icon-caret-left"></span>
          <span>共有70条记录，第1/4页</span>
          <span class="el-icon-caret-right"></span>
        </div>
        </table>
        <table v-show="tab==2" class="table" cellspacing="0" cellpadding="0">
          <tr class="tr">
            <td>主题</td>
            <td>申请人</td>
            <td>所属部门</td>
            <td>申请岗位</td>
            <td>申请时间</td>
            <td>转正日期</td>
          </tr>
          <tr class="tr">
            <td class="td" @click="chakan3()">招聘申请-刘峰-1000165</td>
            <td>朱铁桥</td>
            <td>总经办</td>
            <td>助理</td>
            <td>2016/4/7</td>
            <td>2016/5/16</td>
          </tr>
          <tr class="tr">
            <td class="td">招聘申请-王萍-1000164</td>
            <td>王萍</td>
            <td>人事部</td>
            <td>行政专员</td>
            <td>2016/4/30</td>
            <td></td>
          </tr>
          <tr class="tr">
            <td class="td">招聘申请-朱铁桥-1000166</td>
            <td>朱铁桥</td>
            <td>总经办</td>
            <td>助理</td>
            <td>2016/4/7</td>
            <td>2016/4/30</td>
          </tr>
          <tr class="tr">
            <td class="td">招聘申请-王丽萍-1000166</td>
            <td>李浩</td>
            <td>人事部</td>
            <td>行政专员</td>
            <td>2016/4/7</td>
            <td></td>
          </tr>
          <div class="fengye">
          <span class="el-icon-caret-left"></span>
          <span>共有70条记录，第1/4页</span>
          <span class="el-icon-caret-right"></span>
        </div>
        </table>
        <table v-show="tab==3" class="table" cellspacing="0" cellpadding="0">
          <tr class="tr">
            <td>主题</td>
            <td>申请人</td>
            <td>所属部门</td>
            <td>现部门和岗位</td>
            <td>新部门和岗位</td>
            <td>调动类型</td>
          </tr>
          <tr class="tr">
            <td class="td" @click="chakan4()">招聘申请-刘峰-1000165</td>
            <td>朱铁桥</td>
            <td>总经办</td>
            <td>北京分公司＃工程师</td>
            <td>市场部#销售</td>
            <td>正式调动</td>
          </tr>
          <tr class="tr">
            <td class="td">招聘申请-王萍-1000164</td>
            <td>王萍</td>
            <td>人事部</td>
            <td>行政专员</td>
            <td>2016/4/30</td>
            <td></td>
          </tr>
          <tr class="tr">
            <td class="td">招聘申请-朱铁桥-1000166</td>
            <td>朱铁桥</td>
            <td>总经办</td>
            <td>助理</td>
            <td>2016/4/7</td>
            <td>2016/4/30</td>
          </tr>
          <tr class="tr">
            <td class="td">招聘申请-王丽萍-1000166</td>
            <td>李浩</td>
            <td>人事部</td>
            <td>行政专员</td>
            <td>2016/4/7</td>
            <td></td>
          </tr>
          <div class="fengye">
          <span class="el-icon-caret-left"></span>
          <span>共有70条记录，第1/4页</span>
          <span class="el-icon-caret-right"></span>
        </div>
        </table>
        <table v-show="tab==4" class="table" cellspacing="0" cellpadding="0">
          <tr class="tr">
            <td>主题</td>
            <td>申请人</td>
            <td>所属部门</td>
            <td>工作岗位</td>
            <td>申请时间</td>
            <td>预计离职日期</td>
          </tr>
          <tr class="tr">
            <td class="td" @click="chakan5()">招聘申请-张娜娜-1000165</td>
            <td>张娜娜</td>
            <td>北京分公司</td>
            <td>工程师</td>
            <td>2016/4/7</td>
            <td>2016/4/30</td>
          </tr>
          <tr class="tr">
            <td class="td">招聘申请-沈华-1000164</td>
            <td>沈华</td>
            <td>销售部</td>
            <td>销售工程师</td>
            <td>2016/4/7</td>
            <td>2016/4/30</td>
          </tr>
          <tr class="tr">
            <td class="td">招聘申请-张娜娜-1000166</td>
            <td>张娜娜</td>
            <td>北京分公司</td>
            <td>工程师</td>
            <td>2016/4/7</td>
            <td>2016/4/30</td>
          </tr>
          <tr class="tr">
            <td class="td">招聘申请-沈华-1000164</td>
            <td>沈华</td>
            <td>销售部</td>
            <td>销售工程师</td>
            <td>2016/4/7</td>
            <td>2016/4/30</td>
          </tr>
          <div class="fengye">
          <span class="el-icon-caret-left"></span>
          <span>共有70条记录，第1/4页</span>
          <span class="el-icon-caret-right"></span>
        </div>
        </table>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      tab: 0
    };
  },
  methods: {
    shuaxin() {
      this.$router.push({
        path: "/zhaopin"
      });
    },
    chakan() {
      this.$router.push({
        path: "/zhaokan"
      });
    },
    chakan2() {
      this.$router.push({
        path: "/ruzhikan"
      });
    },
    chakan3() {
      this.$router.push({
        path: "/zhuanzhengkan"
      });
    },
    chakan4() {
      this.$router.push({
        path: "/gangweikan"
      });
    },
    chakan5() {
      this.$router.push({
        path: "/lizhikan"
      });
    },
    xinzen() {
      if (this.tab == 0) {
        this.$router.push({
          path: "/zhaozen"
        });
      } else if (this.tab == 1) {
        this.$router.push({
          path: "/ruzhizen"
        });
      } else if (this.tab == 2) {
        this.$router.push({
          path: "/zhuanzhengzen"
        });
      } else if (this.tab == 3) {
        this.$router.push({
          path: "/gangweizen"
        });
      } else if (this.tab == 4) {
        this.$router.push({
          path: "/gangweizen"
        });
      }
    }
  }
};
</script>
<style scoped>
#app{
  width: 1345px;
  height:620px;
}
.book {
  margin-top: 30px;
}
.yuan {
  font-size: 25px;
  line-height: 50px;
}
.yuan img {
  margin-right: 5px;
}
.book span:nth-of-type(2) {
  border: 1px solid rgb(201, 201, 201);
  padding: 10px;
  margin-left: 1000px;
  border-radius: 2px;
  cursor: pointer;
}
.book span:nth-of-type(3) {
  border: 1px solid rgb(201, 201, 201);
  padding: 10px;
  margin-left: 10px;
  border-radius: 2px;
  cursor: pointer;
}
.book span:nth-of-type(2):hover {
  border: 1px solid rgb(30, 159, 255);
  color: rgb(30, 159, 255);
}
.book span:nth-of-type(3):hover {
  border: 1px solid rgb(30, 159, 255);
  color: rgb(30, 159, 255);
}
.neiron {
  margin-top: 5px;
}
.zuo {
  width: 260px;
  border-radius: 4px;
  border: 1px solid rgb(223, 223, 223);
  margin-left: 5px;
  float: left;
}
.you{
  float: right;
}
.fen {
  padding: 5px 10px;
  border-bottom: 1px solid rgb(223, 223, 223);
}
.uer {
  padding: 15px;
  height: 100%;
}
.uer p span {
  margin-right: 5px;
}
.uer p {
  margin-bottom: 10px;
}
.uer p {
  cursor: pointer;
}
.uer p:hover {
  color: rgb(30, 159, 255);
}
.one {
  color: rgb(30, 159, 255);
}
.table {
  font-size: 14px;
}
.table tr td {
  padding: 5px;
}
.tr:nth-of-type(1) {
  font-size: 18px;
}
.tr td {
  display: table-cell;
  border: 1px solid rgb(223, 223, 223);
  vertical-align: middle;
  width: 150px;
  margin: 10px;
}
.tr td:nth-of-type(1) {
  width: 240px;
}
.tr td:nth-of-type(2) {
  width: 140px;
}
.tr td:nth-of-type(3) {
  width: 150px;
}
.td {
  cursor: pointer;
  color: rgb(30, 159, 255);
}
.td:hover {
  color: #000;
}
.fengye {
  border: 1px solid rgb(226, 226, 226);
  border-radius: 2px;
  font-size: 12px;
  width: 240px;
  margin-top: 5px;
}
.fengye span:nth-of-type(1) {
  padding: 8px 10px;
  border-right: 1px solid rgb(226, 226, 226);
  font-size: 20px;
  color: rgb(153, 153, 153);
}
.fengye span:nth-of-type(2) {
  margin: 0 10px;
}
.fengye span:nth-of-type(2):hover {
  color: rgb(30, 159, 255);
}
.fengye span:nth-of-type(3) {
  font-size: 20px;
  padding: 8px 10px;
  border-left: 1px solid rgb(226, 226, 226);
  color: rgb(153, 153, 153);
}
.gao {
  height: 350px;
}
</style>