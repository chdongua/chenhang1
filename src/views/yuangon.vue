<template>
  <div id="app">
    <div class="book">
      <span class="beijin"></span>
      <span class="yuan">员工管理</span>
      <el-select class="select" v-model="value" placeholder="请选择">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        ></el-option>
      </el-select>
      <el-input class="input" v-model="input" placeholder="请输入内容"></el-input>
      <span class="el-icon-search">查找</span>
      <span @click="xinzen()"><span class="el-icon-plus">新增员工</span></span>
      <span @click="shuaxin()"><span class="el-icon-refresh">刷新</span></span>
    </div>
    <div class="uer">
      <div class="zuo">
        <p class="strong">
          <strong>分类</strong>
        </p>
        <div class="zuo-yi">
          <p>
            <span>
              <img src="../../src/assets/3.png" />
            </span>
            <span>显示所有</span>
          </p>
          <p>
            <span>
              <img src="../../src/assets/3.png" />
            </span>集团
          </p>
          <p class="p">总经办</p>
          <p class="p">人事部</p>
          <p class="p">财务部</p>
          <p>
            <span class="el-icon-plus"></span>科技公司
          </p>
          <p>
            <span class="el-icon-plus"></span>工程公司
          </p>
          <p>
            <span class="el-icon-plus"></span>现代事务所
          </p>
          <p class="p">北京机构</p>
          <p class="p">杭州机构</p>
          <p class="p">上海机构</p>
          <p class="p">深圳机构</p>
        </div>
        <div class="zuo-er">
          <p>（以上分类中包含了在职的、试用期和临时的员工）</p>
        </div>
        <div class="zou-san">
          <p>
            <span class="el-icon-s-cooperation"></span>在职的员工
          </p>
          <p>
            <span class="el-icon-s-cooperation"></span>试用期员工
          </p>
          <p>
            <span class="el-icon-s-cooperation"></span>临时的员工
          </p>
          <p>
            <span class="el-icon-s-cooperation"></span>退休的员工
          </p>
          <p>
            <span class="el-icon-s-cooperation"></span>离职的员工
          </p>
        </div>
      </div>
      <div class="you">
        <el-table :data="tableData" border>
          <el-table-column @click="chakan()" prop="date" label="姓名" width="180" ></el-table-column>
          <el-table-column prop="name" label="性别" width="180"></el-table-column>
          <el-table-column prop="address" label="工号"></el-table-column>
          <el-table-column prop="con" label="从属于"></el-table-column>
          <el-table-column prop="jian" label="职务"></el-table-column>
          <el-table-column prop="ru" label="入职日期"></el-table-column>
          <el-table-column prop="chao" label="操作">
            <span class="xiugai"><span class="el-icon-edit"></span></span>
            <span class="shanchu"><span class="el-icon-delete-solid"></span></span>
          </el-table-column>
        </el-table>
        <div class="fengye">
          <span class="el-icon-caret-left"></span>
          <span>共有70条记录，第1/4页</span>
          <span class="el-icon-caret-right"></span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      options: [
        {
          value: "选项1",
          label: "按姓名"
        },
        {
          value: "选项2",
          label: "按工号"
        },
        {
          value: "选项3",
          label: "按职务"
        },
        {
          value: "选项4",
          label: "按入职日期"
        },
        {
          value: "选项5",
          label: "按出生日期"
        },
        {
          value: "选项6",
          label: "按最高学历"
        },
        {
          value: "选项7",
          label: "按专业方向"
        }
      ],
      value: "",
      input: "",
      tableData: [
        {
          date: "陈斌",
          name: "男",
          address: "Ahz-001",
          con: "杭州机构",
          jian: "分公司经理",
          ru: "2009/3/13"
        },
        {
          date: "陈慧红",
          name: "女",
          address: "Ahz-001",
          con: "杭州机构",
          jian: "分公司经理",
          ru: "2009/3/13"
        },
        {
          date: "陈斌",
          name: "男",
          address: "Ahz-001",
          con: "杭州机构",
          jian: "分公司经理",
          ru: "2009/3/13"
        },
        {
          date: "陈斌",
          name: "男",
          address: "Ahz-001",
          con: "杭州机构",
          jian: "分公司经理",
          ru: "2009/3/13"
        },
        {
          date: "陈斌",
          name: "男",
          address: "Ahz-001",
          con: "杭州机构",
          jian: "分公司经理",
          ru: "2009/3/13"
        },
        {
          date: "陈斌",
          name: "男",
          address: "Ahz-001",
          con: "杭州机构",
          jian: "分公司经理",
          ru: "2009/3/13"
        },
        {
          date: "陈斌",
          name: "男",
          address: "Ahz-001",
          con: "杭州机构",
          jian: "分公司经理",
          ru: "2009/3/13"
        },
        {
          date: "陈斌",
          name: "男",
          address: "Ahz-001",
          con: "杭州机构",
          jian: "分公司经理",
          ru: "2009/3/13"
        },
        {
          date: "陈斌",
          name: "男",
          address: "Ahz-001",
          con: "杭州机构",
          jian: "分公司经理",
          ru: "2009/3/13"
        },
        {
          date: "陈斌",
          name: "男",
          address: "Ahz-001",
          con: "杭州机构",
          jian: "分公司经理",
          ru: "2009/3/13"
        },
        {
          date: "陈斌",
          name: "男",
          address: "Ahz-001",
          con: "杭州机构",
          jian: "分公司经理",
          ru: "2009/3/13"
        },
        {
          date: "陈斌",
          name: "男",
          address: "Ahz-001",
          con: "杭州机构",
          jian: "分公司经理",
          ru: "2009/3/13"
        }
      ]
    };
  },
  methods: {
    xinzen(){
      this.$router.push({
        path:'/yuanzen'
      })
    },
    shuaxin(){
      this.$router.push({
        path:'/yuangon'
      })
    },
    chakan(){
        this.$router.push({
          path:'/yuancha'
        })
      }
  }
};
</script>
<style scoped>
.book {
  margin-top: 30px;
}
.book span:nth-of-type(3) {
  border: 1px solid rgb(201, 201, 201);
  padding: 10px;
  margin-left: 10px;
  border-radius: 2px;
}
.book span:nth-of-type(4) {
  border: 1px solid rgb(201, 201, 201);
  padding: 10px;
  margin-left: 180px;
  border-radius: 2px;
  cursor: pointer;
}
.book span:nth-of-type(5) {
  border: 1px solid rgb(201, 201, 201);
  padding: 10px;
  margin-left: 10px;
  border-radius: 2px;
  cursor: pointer;
}
.book span:nth-of-type(4):hover {
  border: 1px solid rgb(30, 159, 255);
  color: rgb(30, 159, 255);
}
.book span:nth-of-type(5):hover {
  border: 1px solid rgb(30, 159, 255);
  color: rgb(30, 159, 255);
}
.beijin {
  padding: 3px 15px;
  background: url("../../src/assets/2.png");
  background-repeat: no-repeat;
}
.yuan {
  font-size: 24px;
}
.select {
  border-radius: 4px;
  margin-left: 150px;
}
.input {
  border-radius: 4px;
  margin-left: 10px;
  width: 400px;
}
.uer {
  position: relative;
  margin-top: 20px;
  font-size: 14px;
}
.zuo {
  width: 260px;
  border: 1px solid rgb(226, 226, 226);
  border-radius: 4px;
}
.strong {
  padding: 9px 10px;
  border-bottom: 1px solid rgb(226, 226, 226);
}
.zuo-yi p {
  margin-top: 12px;
}
.zuo-yi p:hover {
  color: rgb(30, 159, 255);
  cursor: pointer;
}
.p {
  margin-left: 52px;
}
.zuo-yi p:nth-of-type(1) {
  margin-left: 20px;
  line-height: 30px;
}
.zuo-yi p:nth-of-type(1) span:nth-of-type(1) {
  float: left;
  margin-right: 5px;
}
.zuo-yi p:nth-of-type(2) {
  margin-left: 20px;
  line-height: 30px;
}
.zuo-yi p:nth-of-type(2) span {
  float: left;
  margin-right: 5px;
}
.zuo-yi p:nth-of-type(6) {
  margin-left: 30px;
  line-height: 30px;
}
.zuo-yi p:nth-of-type(6) span {
  margin-right: 5px;
  border: 1px solid rgb(226, 226, 226);
}
.zuo-yi p:nth-of-type(7) {
  margin-left: 30px;
  line-height: 30px;
}
.zuo-yi p:nth-of-type(7) span {
  margin-right: 5px;
  border: 1px solid rgb(226, 226, 226);
}
.zuo-yi p:nth-of-type(8) {
  margin-left: 30px;
  line-height: 30px;
}
.zuo-yi p:nth-of-type(8) span {
  margin-right: 5px;
  border: 1px solid rgb(226, 226, 226);
}
.zuo-er {
  margin-top: 10px;
  font-size: 12px;
  padding: 10px 20px;
  border-top: 1px solid rgb(226, 226, 226);
  border-bottom: 1px solid rgb(226, 226, 226);
  color: rgb(153, 153, 153);
}
.zou-san {
  margin-left: 30px;
}
.zou-san p {
  margin-top: 10px;
}
.zou-san p:hover {
  color: rgb(30, 159, 255);
  cursor: pointer;
}
.zou-san p span {
  margin-right: 10px;
}
.you {
  position: absolute;
  top: 0;
  left: 280px;
  width: 1065px;
}
.xiugai{
  font-size: 20px; 
  color: rgb(30,159,255);
  cursor: pointer;
  margin-right:10px; 
}
.shanchu{
  font-size: 20px; 
  color: rgb(30,159,255);
  cursor: pointer;
}
.fengye{
  margin-top: 5px; 
  border: 1px solid rgb(226, 226, 226);
  border-radius:2px;
  font-size: 12px;
  width: 240px;
}
.fengye span:nth-of-type(1){
  padding: 8px 10px;
  border-right: 1px solid rgb(226, 226, 226);
  font-size: 20px;
  color: rgb(153, 153, 153);
}
.fengye span:nth-of-type(2){
  margin: 0 10px;
}
.fengye span:nth-of-type(2):hover{
  color: rgb(30,159,255); 
}
.fengye span:nth-of-type(3){
  font-size: 20px;
  padding: 8px 10px;
  border-left: 1px solid rgb(226, 226, 226);
  color: rgb(153, 153, 153);
}

</style>