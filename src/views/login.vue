<template>
    <div id="app">
        <div class="book">
            <h1 class="h1">人力资源管理系统</h1>
            <el-input class="input" placeholder="请输入内容" v-model="zhan" clearable></el-input>
            <el-input class="input" placeholder="请输入密码" v-model="input" show-password></el-input>
            <el-button class="input" type="primary" @click="deng()">主要按钮</el-button>
        </div>
    </div>
</template>
<script>
export default {
    data() {
      return {
        input: '',
        zhan:''
      }
    },
    methods: {
      deng() {
        this.$alert('登录成功', '人力资源管理系统', {
          confirmButtonText: '确定',
          callback: action => {
            this.$message({
              type: 'info',
              message: `action: ${ action }`
            });
          }
        }); 
      }
    }
}
</script>
<style scoped>
    #app{
        background-color: blue;
        height: 590px;
        padding-top: 70px;
        padding-left: 460px;
    }
    .book{
        width: 400px;
        height: 460px;
        /* padding: 100px; */
        /* margin: 100px; */
        background-color: aliceblue;
        text-align: center;
    }
    .input{
        width: 300px;
        margin-top: 10px;
    }
    .h1{
        padding-top: 50px;
        margin-bottom: 100px;
    }
</style>