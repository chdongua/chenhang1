<template>
  <div id="app">
    <div class="book">
      <span class="yuan">
        <img src="../../src/assets/2.png" />绩效管理
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
            <span class="el-icon-s-order"></span>劳动合同
          </p>
          <p :class="{one:tab==1}" @click="tab=1">
            <span class="el-icon-s-order"></span>员工培训
          </p>
          <p :class="{one:tab==2}" @click="tab=2">
            <span class="el-icon-s-order"></span>生日关怀
          </p>
          <p :class="{one:tab==3}" @click="tab=3">
            <span class="el-icon-s-order"></span>专属福利
          </p>
        </div>
        <div class="gao"></div>
      </div>
      <div class="you">
        <table v-show="tab==0" class="table" cellspacing="0" cellpadding="0">
          <tr class="tr">
            <td>主题</td>
            <td>员工姓名</td>
            <td>合同类型</td>
            <td>签订日期</td>
            <td>时间段</td>
          </tr>
          <tr class="tr">
            <td class="td" @click="chakan()">劳动合同登记-王萍-1000212</td>
            <td>范晶</td>
            <td>无固定期限合同</td>
            <td>2016/4/8</td>
            <td>2016/4/9 ~ 2026/4/9</td>
          </tr>
          <tr class="tr">
            <td class="td">劳动合同登记-王萍-1000203</td>
            <td>陈有道</td>
            <td>无固定期限合同</td>
            <td>2016/4/8</td>
            <td>2016/4/9 ~ 2026/4/9</td>
          </tr>
          <tr class="tr">
            <td class="td">劳动合同登记-王萍-1000203</td>
            <td>陈有道</td>
            <td>无固定期限合同</td>
            <td>2016/4/8</td>
            <td>2016/4/9 ~ 2026/4/9</td>
          </tr>
          <tr class="tr">
            <td class="td">劳动合同登记-王萍-1000203</td>
            <td>陈有道</td>
            <td>无固定期限合同</td>
            <td>2016/4/8</td>
            <td>2016/4/9 ~ 2026/4/9</td>
          </tr>
          <tr class="tr">
            <td class="td">劳动合同登记-王萍-1000203</td>
            <td>陈有道</td>
            <td>无固定期限合同</td>
            <td>2016/4/8</td>
            <td>2016/4/9 ~ 2026/4/9</td>
          </tr>
          <tr class="tr">
            <td class="td">劳动合同登记-王萍-1000203</td>
            <td>陈有道</td>
            <td>无固定期限合同</td>
            <td>2016/4/8</td>
            <td>2016/4/9 ~ 2026/4/9</td>
          </tr>
          <div class="fengye">
          <span class="el-icon-caret-left"></span>
          <span>共有70条记录，第1/4页</span>
          <span class="el-icon-caret-right"></span>
        </div>
        </table>
        <table v-show="tab==1" class="table" cellspacing="0" cellpadding="0">
          <tr class="tr1">
            <td>主题</td>
            <td>培训类型</td>
            <td>受培训人员</td>
            <td>时间段</td>
          </tr>
          <tr class="tr1">
            <td class="td" @click="chakan2()">员工培训安排-李萌-1000960</td>
            <td>技术培训</td>
            <td>李萌,沈华,沈涛辉,张旭,张瑶瑶,季道晓</td>
            <td>2016/5/8 9:00 ~ 2016/5/8 11:00</td>
          </tr>
          <tr class="tr1">
            <td class="td" @click="chakan2()">员工培训安排-李萌-1000960</td>
            <td>技术培训</td>
            <td>李萌,沈华,沈涛辉,张旭,张瑶瑶,季道晓</td>
            <td>2016/5/8 9:00 ~ 2016/5/8 11:00</td>
          </tr>
          <tr class="tr1">
            <td class="td" @click="chakan2()">员工培训安排-李萌-1000960</td>
            <td>技术培训</td>
            <td>李萌,沈华,沈涛辉,张旭,张瑶瑶,季道晓</td>
            <td>2016/5/8 9:00 ~ 2016/5/8 11:00</td>
          </tr>
          <tr class="tr1">
            <td class="td" @click="chakan2()">员工培训安排-李萌-1000960</td>
            <td>技术培训</td>
            <td>李萌,沈华,沈涛辉,张旭,张瑶瑶,季道晓</td>
            <td>2016/5/8 9:00 ~ 2016/5/8 11:00</td>
          </tr>
          <tr class="tr1">
            <td class="td" @click="chakan2()">员工培训安排-李萌-1000960</td>
            <td>技术培训</td>
            <td>李萌,沈华,沈涛辉,张旭,张瑶瑶,季道晓</td>
            <td>2016/5/8 9:00 ~ 2016/5/8 11:00</td>
          </tr>
          <tr class="tr1">
            <td class="td" @click="chakan2()">员工培训安排-李萌-1000960</td>
            <td>技术培训</td>
            <td>李萌,沈华,沈涛辉,张旭,张瑶瑶,季道晓</td>
            <td>2016/5/8 9:00 ~ 2016/5/8 11:00</td>
          </tr>
          <div class="fengye">
          <span class="el-icon-caret-left"></span>
          <span>共有70条记录，第1/4页</span>
          <span class="el-icon-caret-right"></span>
        </div>
        </table>
        <table v-show="tab==2" class="table" cellspacing="0" cellpadding="0">
          <tr class="tr2">
            <td>主题</td>
            <td>涉及员工</td>
            <td>实施时间</td>
            <td>预估费用</td>
          </tr>
          <tr class="tr2">
            <td class="td" @click="chakan3()">2016年6月员工生日关怀</td>
            <td>周立强,吴燕,陈龙天,陈慧红</td>
            <td>2016/6/1</td>
            <td>600</td>
          </tr>
          <tr class="tr2">
            <td class="td" @click="chakan3()">2016年6月员工生日关怀</td>
            <td>周立强,吴燕,陈龙天,陈慧红</td>
            <td>2016/6/1</td>
            <td>600</td>
          </tr>
          <tr class="tr2">
            <td class="td" @click="chakan3()">2016年6月员工生日关怀</td>
            <td>周立强,吴燕,陈龙天,陈慧红</td>
            <td>2016/6/1</td>
            <td>600</td>
          </tr>
          <tr class="tr2">
            <td class="td" @click="chakan3()">2016年6月员工生日关怀</td>
            <td>周立强,吴燕,陈龙天,陈慧红</td>
            <td>2016/6/1</td>
            <td>600</td>
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
            <td>专项福利</td>
            <td>涉及员工</td>
            <td>实施时间</td>
            <td>预估费用</td>
          </tr>
          <tr class="tr">
            <td class="td" @click="chakan4()">员工专项福利-李萌-1000939</td>
            <td>节日福利</td>
            <td>所有人</td>
            <td>2018/6/8</td>
            <td>12000</td>
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
        path: "/laodon"
      });
    },
    chakan() {
      this.$router.push({
        path: "/laodonkan"
      });
    },
    chakan2() {
      this.$router.push({
        path: "/peixunkan"
      });
    },
    chakan3() {
      this.$router.push({
        path: "/shengrkan"
      });
    },
    chakan4() {
      this.$router.push({
        path: "/zhuanshukan"
      });
    },
    xinzen() {
      if (this.tab == 0) {
        this.$router.push({
          path: "/laodonzen"
        });
      } else if (this.tab == 1) {
        this.$router.push({
          path: "/peixunzen"
        });
      } else if (this.tab == 2) {
        this.$router.push({
          path: "/shengrzen"
        });
      } else if (this.tab == 3) {
        this.$router.push({
          path: "/zhuanshuzen"
        });
      } 
    }
  }
};
</script>
<style scoped>
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
  position: absolute;
  right: 10px;
  top: 86px;
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
  width: 320px;
}
.tr td:nth-of-type(2) {
  width: 140px;
}
.tr td:nth-of-type(3) {
  width: 150px;
}
.tr td:nth-of-type(5) {
  width: 250px;
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
  margin-top: 10px;
  border-radius: 2px;
  font-size: 12px;
  width: 240px;
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
.tr1:nth-of-type(1) {
  font-size: 18px;
}
.tr1 td {
  display: table-cell;
  border: 1px solid rgb(223, 223, 223);
  vertical-align: middle;
  width: 150px;
  margin: 10px;
}
.tr1 td:nth-of-type(1) {
  width: 320px;
}
.tr1 td:nth-of-type(2) {
  width: 140px;
}
.tr1 td:nth-of-type(3) {
  width: 300px;
}
.tr1 td:nth-of-type(4) {
  width: 263px;
}

.tr2:nth-of-type(1) {
  font-size: 18px;
}
.tr2 td {
  display: table-cell;
  border: 1px solid rgb(223, 223, 223);
  vertical-align: middle;
  width: 150px;
  margin: 10px;
}
.tr2 td:nth-of-type(1) {
  width: 320px;
}
.tr2 td:nth-of-type(2) {
  width: 240px;
}
.tr2 td:nth-of-type(3) {
  width: 200px;
}
.tr2 td:nth-of-type(4) {
  width: 263px;
}
</style>