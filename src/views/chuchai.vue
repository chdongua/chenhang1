<template>
  <div id="app">
    <div class="book">
      <span class="beijin"></span>
      <span class="yuan">考勤管理</span>
      <el-select class="select" v-model="value" placeholder="按主题">
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
    <div class="neiron">
      <div class="zuo">
        <p class="fen">分类</p>
        <div class="uer">
          <p :class="{one:tab==0}" @click="tab=0">
            <span class="el-icon-s-order"></span>出差申请
          </p>
          <p :class="{one:tab==1}" @click="tab=1">
            <span class="el-icon-s-order"></span>外出申请
          </p>
          <p :class="{one:tab==2}" @click="tab=2">
            <span class="el-icon-s-order"></span>加班申请
          </p>
          <p :class="{one:tab==3}" @click="tab=3">
            <span class="el-icon-s-order"></span>请休假申请
          </p>
          <p :class="{one:tab==4}" @click="tab=4">
            <span class="el-icon-s-order"></span>调休申请
          </p>
          <p :class="{one:tab==5}" @click="tab=5">
            <span class="el-icon-s-order"></span>外勤定位
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
            <td>目的地</td>
            <td>时间段</td>
          </tr>
          <tr class="tr">
            <td class="td" @click="chakan()">出差申请-李浩-1000942</td>
            <td>李浩</td>
            <td>技术部</td>
            <td>苏州</td>
            <td>2016/5/5 ~ 2016/5/6</td>
          </tr>
          <tr class="tr">
            <td class="td">招聘申请-李浩-1000164</td>
            <td>李浩</td>
            <td>技术部</td>
            <td>苏州</td>
            <td>2016/5/5 ~ 2016/5/6</td>
          </tr>
          <tr class="tr">
            <td class="td">招聘申请-王丽萍-1000166</td>
            <td>王丽萍</td>
            <td>深圳分公司</td>
            <td>苏州</td>
            <td>2016/5/5 ~ 2016/5/6</td>
          </tr>
          <tr class="tr">
            <td class="td">招聘申请-王丽萍-1000166</td>
            <td>李浩</td>
            <td>技术部</td>
            <td>苏州</td>
            <td>2016/5/5 ~ 2016/5/6</td>
          </tr>
          <tr class="tr">
            <td class="td">招聘申请-王丽萍-1000166</td>
            <td>李浩</td>
            <td>技术部</td>
            <td>苏州</td>
            <td>2016/5/5 ~ 2016/5/6</td>
          </tr>
          <tr class="tr">
            <td class="td">招聘申请-王丽萍-1000166</td>
            <td>李浩</td>
            <td>技术部</td>
            <td>苏州</td>
            <td>2016/5/5 ~ 2016/5/6</td>
          </tr>
          <tr class="tr">
            <td class="td">招聘申请-王丽萍-1000166</td>
            <td>李浩</td>
            <td>技术部</td>
            <td>苏州</td>
            <td>2016/5/5 ~ 2016/5/6</td>
          </tr>
          <tr class="tr">
            <td class="td">招聘申请-王丽萍-1000166</td>
            <td>李浩</td>
            <td>技术部</td>
            <td>苏州</td>
            <td>2016/5/5 ~ 2016/5/6</td>
          </tr>
          <tr class="tr">
            <td class="td">招聘申请-王丽萍-1000166</td>
            <td>李浩</td>
            <td>技术部</td>
            <td>苏州</td>
            <td>2016/5/5 ~ 2016/5/6</td>
          </tr>
          <tr class="tr">
            <td class="td">招聘申请-王丽萍-1000166</td>
            <td>李浩</td>
            <td>技术部</td>
            <td>苏州</td>
            <td>2016/5/5 ~ 2016/5/6</td>
          </tr>
          <tr class="tr">
            <td class="td">招聘申请-王丽萍-1000166</td>
            <td>李浩</td>
            <td>技术部</td>
            <td>苏州</td>
            <td>2016/5/5 ~ 2016/5/6</td>
          </tr>
          <tr class="tr">
            <td class="td">招聘申请-王丽萍-1000166</td>
            <td>李浩</td>
            <td>技术部</td>
            <td>苏州</td>
            <td>2016/5/5 ~ 2016/5/6</td>
          </tr>
          <tr class="tr">
            <td class="td">出差申请-沈华-1000154</td>
            <td>李浩</td>
            <td>销售部</td>
            <td>苏州</td>
            <td>2016/5/5 ~ 2016/5/6</td>
          </tr>
          <tr class="tr">
            <td class="td">出差申请-李华林-1000548</td>
            <td>李浩</td>
            <td>技术部</td>
            <td>苏州</td>
            <td>2016/5/5 ~ 2016/5/6</td>
          </tr>
          <tr class="tr">
            <td class="td">招聘申请-王丽萍-1000166</td>
            <td>李浩</td>
            <td>技术部</td>
            <td>苏州</td>
            <td>2016/5/5 ~ 2016/5/6</td>
          </tr>
          <div class="fengye">
          <span class="el-icon-caret-left"></span>
          <span>共有15条记录，第1/1页</span>
          <span class="el-icon-caret-right"></span>
        </div>
        </table>
        <table v-show="tab==1" class="table" cellspacing="0" cellpadding="0">
          <tr class="tr">
            <td>主题</td>
            <td>申请人</td>
            <td>所属部门</td>
            <td>外出地点</td>
            <td>时间段</td>
          </tr>
          <tr class="tr">
            <td class="td" @click="chakan2()">外出申请-季道晓-1000539</td>
            <td>季道晓</td>
            <td>销售部</td>
            <td>广州天河万科地产</td>
            <td>2016/4/19 ~ 2016/4/20</td>
          </tr>
          <tr class="tr">
            <td class="td">外出申请-李浩-1000164</td>
            <td>沈涛辉</td>
            <td>销售部</td>
            <td>南京中山陵</td>
            <td>2016/4/18 8:30 ~ 2016/4/18 11:30</td>
          </tr>
          <tr class="tr">
            <td class="td">外出申请-李浩-1000164</td>
            <td>沈涛辉</td>
            <td>销售部</td>
            <td>北京朝阳区盘曦科</td>
            <td>2016/4/18 8:30 ~ 2016/4/18 11:30</td>
          </tr>
          <tr class="tr">
            <td class="td">外出申请-李浩-1000164</td>
            <td>沈涛辉</td>
            <td>销售部</td>
            <td>南京中山陵</td>
            <td>2016/4/18 8:30 ~ 2016/4/18 11:30</td>
          </tr>
          <tr class="tr">
            <td class="td">外出申请-李浩-1000164</td>
            <td>沈涛辉</td>
            <td>销售部</td>
            <td>南京中山陵</td>
            <td>2016/4/18 8:30 ~ 2016/4/18 11:30</td>
          </tr>
          <tr class="tr">
            <td class="td">外出申请-李浩-1000164</td>
            <td>沈涛辉</td>
            <td>销售部</td>
            <td>南京中山陵</td>
            <td>2016/4/18 8:30 ~ 2016/4/18 11:30</td>
          </tr>
          <tr class="tr">
            <td class="td">外出申请-李浩-1000164</td>
            <td>沈涛辉</td>
            <td>销售部</td>
            <td>南京中山陵</td>
            <td>2016/4/18 8:30 ~ 2016/4/18 11:30</td>
          </tr>
          <tr class="tr">
            <td class="td">外出申请-李浩-1000164</td>
            <td>沈涛辉</td>
            <td>销售部</td>
            <td>南京中山陵</td>
            <td>2016/4/18 8:30 ~ 2016/4/18 11:30</td>
          </tr>
          <tr class="tr">
            <td class="td">外出申请-李浩-1000164</td>
            <td>沈涛辉</td>
            <td>销售部</td>
            <td>南京中山陵</td>
            <td>2016/4/18 8:30 ~ 2016/4/18 11:30</td>
          </tr>
          <tr class="tr">
            <td class="td">外出申请-李浩-1000164</td>
            <td>沈涛辉</td>
            <td>销售部</td>
            <td>南京中山陵</td>
            <td>2016/4/18 8:30 ~ 2016/4/18 11:30</td>
          </tr>
          <tr class="tr">
            <td class="td">外出申请-李浩-1000164</td>
            <td>沈涛辉</td>
            <td>销售部</td>
            <td>南京中山陵</td>
            <td>2016/4/18 8:30 ~ 2016/4/18 11:30</td>
          </tr>
          <div class="fengye">
          <span class="el-icon-caret-left"></span>
          <span>共有70条记录，第1/4页</span>
          <span class="el-icon-caret-right"></span>
        </div>
        </table>
        <table v-show="tab==2" class="table" cellspacing="0" cellpadding="0">
          <tr class="trjia">
            <td>主题</td>
            <td>申请人</td>
            <td>所属部门</td>
            <td>时间段</td>
            <td>共计时长</td>
          </tr>
          <tr class="trjia">
            <td class="td" @click="chakan3()">加班申请-李华林-1000565</td>
            <td>李华林</td>
            <td>技术部</td>
            <td>2016/4/16 8:00 ~ 2016/4/16 18:00</td>
            <td>1天 0小时</td>
          </tr>
          <tr class="trjia">
            <td class="td">招聘申请-高大山-1000164</td>
            <td>高大山</td>
            <td>技术部</td>
            <td>2016/4/16 8:00 ~ 2016/4/16 18:00</td>
            <td>1天 0小时</td>
          </tr>
          <tr class="trjia">
            <td class="td">招聘申请-高大山-1000164</td>
            <td>高大山</td>
            <td>技术部</td>
            <td>2016/4/16 8:00 ~ 2016/4/16 18:00</td>
            <td>1天 0小时</td>
          </tr>
          <tr class="trjia">
            <td class="td">招聘申请-高大山-1000164</td>
            <td>高大山</td>
            <td>技术部</td>
            <td>2016/4/16 8:00 ~ 2016/4/16 18:00</td>
            <td>1天 0小时</td>
          </tr>
          <tr class="trjia">
            <td class="td">招聘申请-高大山-1000164</td>
            <td>高大山</td>
            <td>技术部</td>
            <td>2016/4/16 8:00 ~ 2016/4/16 18:00</td>
            <td>1天 0小时</td>
          </tr>
          <tr class="trjia">
            <td class="td">招聘申请-高大山-1000164</td>
            <td>高大山</td>
            <td>技术部</td>
            <td>2016/4/16 8:00 ~ 2016/4/16 18:00</td>
            <td>1天 0小时</td>
          </tr>
          <tr class="trjia">
            <td class="td">招聘申请-高大山-1000164</td>
            <td>高大山</td>
            <td>技术部</td>
            <td>2016/4/16 8:00 ~ 2016/4/16 18:00</td>
            <td>1天 0小时</td>
          </tr>
          <tr class="trjia">
            <td class="td">招聘申请-高大山-1000164</td>
            <td>高大山</td>
            <td>技术部</td>
            <td>2016/4/16 8:00 ~ 2016/4/16 18:00</td>
            <td>1天 0小时</td>
          </tr>
          <tr class="trjia">
            <td class="td">招聘申请-高大山-1000164</td>
            <td>高大山</td>
            <td>技术部</td>
            <td>2016/4/16 8:00 ~ 2016/4/16 18:00</td>
            <td>1天 0小时</td>
          </tr>
          <tr class="trjia">
            <td class="td">招聘申请-高大山-1000164</td>
            <td>高大山</td>
            <td>技术部</td>
            <td>2016/4/16 8:00 ~ 2016/4/16 18:00</td>
            <td>1天 0小时</td>
          </tr>
          <tr class="trjia">
            <td class="td">招聘申请-高大山-1000164</td>
            <td>高大山</td>
            <td>技术部</td>
            <td>2016/4/16 8:00 ~ 2016/4/16 18:00</td>
            <td>1天 0小时</td>
          </tr>
          <tr class="trjia">
            <td class="td">招聘申请-高大山-1000164</td>
            <td>高大山</td>
            <td>技术部</td>
            <td>2016/4/16 8:00 ~ 2016/4/16 18:00</td>
            <td>1天 0小时</td>
          </tr>
          <tr class="trjia">
            <td class="td">招聘申请-高大山-1000164</td>
            <td>高大山</td>
            <td>技术部</td>
            <td>2016/4/16 8:00 ~ 2016/4/16 18:00</td>
            <td>1天 0小时</td>
          </tr>
          <tr class="trjia">
            <td class="td">招聘申请-高大山-1000164</td>
            <td>高大山</td>
            <td>技术部</td>
            <td>2016/4/16 8:00 ~ 2016/4/16 18:00</td>
            <td>1天 0小时</td>
          </tr>
          <tr class="trjia">
            <td class="td">招聘申请-高大山-1000164</td>
            <td>高大山</td>
            <td>技术部</td>
            <td>2016/4/16 8:00 ~ 2016/4/16 18:00</td>
            <td>1天 0小时</td>
          </tr>
          <div class="fengye">
          <span class="el-icon-caret-left"></span>
          <span>共有70条记录，第1/4页</span>
          <span class="el-icon-caret-right"></span>
        </div>
        </table>
        <table v-show="tab==3" class="table" cellspacing="0" cellpadding="0">
          <tr class="trqing">
            <td>主题</td>
            <td>申请人</td>
            <td>所属部门</td>
            <td>类型</td>
            <td>时间段</td>
            <td>共计时长</td>
          </tr>
          <tr class="trqing">
            <td class="td" @click="chakan4()">请休假申请-王刚-1001556</td>
            <td>王刚</td>
            <td>总经办</td>
            <td>事假</td>
            <td>2016/10/8 ~ 2016/10/10</td>
            <td>3天 0小时</td>
          </tr>
          <tr class="trqing">
            <td class="td" @click="chakan4()">请休假申请-王刚-1001556</td>
            <td>王刚</td>
            <td>总经办</td>
            <td>事假</td>
            <td>2016/10/8 ~ 2016/10/10</td>
            <td>3天 0小时</td>
          </tr>
          <tr class="trqing">
            <td class="td" @click="chakan4()">请休假申请-王刚-1001556</td>
            <td>王刚</td>
            <td>总经办</td>
            <td>事假</td>
            <td>2016/10/8 ~ 2016/10/10</td>
            <td>3天 0小时</td>
          </tr>
          <tr class="trqing">
            <td class="td" @click="chakan4()">请休假申请-王刚-1001556</td>
            <td>王刚</td>
            <td>总经办</td>
            <td>事假</td>
            <td>2016/10/8 ~ 2016/10/10</td>
            <td>3天 0小时</td>
          </tr>
          <tr class="trqing">
            <td class="td" @click="chakan4()">请休假申请-王刚-1001556</td>
            <td>王刚</td>
            <td>总经办</td>
            <td>事假</td>
            <td>2016/10/8 ~ 2016/10/10</td>
            <td>3天 0小时</td>
          </tr>
          <tr class="trqing">
            <td class="td" @click="chakan4()">请休假申请-王刚-1001556</td>
            <td>王刚</td>
            <td>总经办</td>
            <td>事假</td>
            <td>2016/10/8 ~ 2016/10/10</td>
            <td>3天 0小时</td>
          </tr>
          <tr class="trqing">
            <td class="td" @click="chakan4()">请休假申请-王刚-1001556</td>
            <td>王刚</td>
            <td>总经办</td>
            <td>事假</td>
            <td>2016/10/8 ~ 2016/10/10</td>
            <td>3天 0小时</td>
          </tr>
          <tr class="trqing">
            <td class="td" @click="chakan4()">请休假申请-王刚-1001556</td>
            <td>王刚</td>
            <td>总经办</td>
            <td>事假</td>
            <td>2016/10/8 ~ 2016/10/10</td>
            <td>3天 0小时</td>
          </tr>
          <tr class="trqing">
            <td class="td" @click="chakan4()">请休假申请-王刚-1001556</td>
            <td>王刚</td>
            <td>总经办</td>
            <td>事假</td>
            <td>2016/10/8 ~ 2016/10/10</td>
            <td>3天 0小时</td>
          </tr>
          <tr class="trqing">
            <td class="td" @click="chakan4()">请休假申请-王刚-1001556</td>
            <td>王刚</td>
            <td>总经办</td>
            <td>事假</td>
            <td>2016/10/8 ~ 2016/10/10</td>
            <td>3天 0小时</td>
          </tr>
          <tr class="trqing">
            <td class="td" @click="chakan4()">请休假申请-王刚-1001556</td>
            <td>王刚</td>
            <td>总经办</td>
            <td>事假</td>
            <td>2016/10/8 ~ 2016/10/10</td>
            <td>3天 0小时</td>
          </tr>
          <tr class="trqing">
            <td class="td" @click="chakan4()">请休假申请-王刚-1001556</td>
            <td>王刚</td>
            <td>总经办</td>
            <td>事假</td>
            <td>2016/10/8 ~ 2016/10/10</td>
            <td>3天 0小时</td>
          </tr>
          <tr class="trqing">
            <td class="td" @click="chakan4()">请休假申请-王刚-1001556</td>
            <td>王刚</td>
            <td>总经办</td>
            <td>事假</td>
            <td>2016/10/8 ~ 2016/10/10</td>
            <td>3天 0小时</td>
          </tr>
          <tr class="trqing">
            <td class="td" @click="chakan4()">请休假申请-王刚-1001556</td>
            <td>王刚</td>
            <td>总经办</td>
            <td>事假</td>
            <td>2016/10/8 ~ 2016/10/10</td>
            <td>3天 0小时</td>
          </tr>
          <tr class="trqing">
            <td class="td" @click="chakan4()">请休假申请-王刚-1001556</td>
            <td>王刚</td>
            <td>总经办</td>
            <td>事假</td>
            <td>2016/10/8 ~ 2016/10/10</td>
            <td>3天 0小时</td>
          </tr>
          <tr class="trqing">
            <td class="td" @click="chakan4()">请休假申请-王刚-1001556</td>
            <td>王刚</td>
            <td>总经办</td>
            <td>事假</td>
            <td>2016/10/8 ~ 2016/10/10</td>
            <td>3天 0小时</td>
          </tr>
          <tr class="trqing">
            <td class="td" @click="chakan4()">请休假申请-王刚-1001556</td>
            <td>王刚</td>
            <td>总经办</td>
            <td>事假</td>
            <td>2016/10/8 ~ 2016/10/10</td>
            <td>3天 0小时</td>
          </tr>
          <div class="fengye">
          <span class="el-icon-caret-left"></span>
          <span>共有17条记录，第1/1页</span>
          <span class="el-icon-caret-right"></span>
        </div>
        </table>
        <table v-show="tab==4" class="table" cellspacing="0" cellpadding="0">
          <tr class="trtiao">
            <td>主题</td>
            <td>申请人</td>
            <td>所属部门</td>
            <td>时间段</td>
            <td>共计时长</td>
          </tr>
          <tr class="trtiao">
            <td class="td" @click="chakan5()">调休申请-沈涛辉-1000533</td>
            <td>沈涛辉</td>
            <td>销售部</td>
            <td>2016/5/4 ~ 2016/5/6</td>
            <td>23天 0小时</td>
          </tr>
          <tr class="trtiao">
            <td class="td" @click="chakan5()">调休申请-沈涛辉-1000533</td>
            <td>沈涛辉</td>
            <td>销售部</td>
            <td>2016/5/4 ~ 2016/5/6</td>
            <td>23天 0小时</td>
          </tr>
          <tr class="trtiao">
            <td class="td" @click="chakan5()">调休申请-沈涛辉-1000533</td>
            <td>沈涛辉</td>
            <td>销售部</td>
            <td>2016/5/4 ~ 2016/5/6</td>
            <td>23天 0小时</td>
          </tr>
          <tr class="trtiao">
            <td class="td" @click="chakan5()">调休申请-沈涛辉-1000533</td>
            <td>沈涛辉</td>
            <td>销售部</td>
            <td>2016/5/4 ~ 2016/5/6</td>
            <td>23天 0小时</td>
          </tr>
          <tr class="trtiao">
            <td class="td" @click="chakan5()">调休申请-沈涛辉-1000533</td>
            <td>沈涛辉</td>
            <td>销售部</td>
            <td>2016/5/4 ~ 2016/5/6</td>
            <td>23天 0小时</td>
          </tr>
          <div class="fengye">
          <span class="el-icon-caret-left"></span>
          <span>共有5条记录，第1/1页</span>
          <span class="el-icon-caret-right"></span>
        </div>
        </table>
        <table v-show="tab==5" class="table" cellspacing="0" cellpadding="0">
          <tr class="trwai">
            <td>时间</td>
            <td>姓名</td>
            <td>定位地点</td>
            <td>地图</td>
          </tr>
          <tr class="trwai">
            <td>2017/8/24 16:02</td>
            <td>李萌</td>
            <td></td>
            <td class="el-icon-map-location"></td>
          </tr>
          <tr class="trwai">
            <td>2017/8/24 16:02</td>
            <td>李萌</td>
            <td>江苏省南京市鼓楼区上海路28号</td>
            <td class="el-icon-map-location"></td>
          </tr>
          <tr class="trwai">
            <td>2017/8/24 16:02</td>
            <td>李萌</td>
            <td>江苏省南京市鼓楼区上海路28号</td>
            <td class="el-icon-map-location"></td>
          </tr>
          <tr class="trwai">
            <td>2017/8/24 16:02</td>
            <td>李萌</td>
            <td>江苏省南京市鼓楼区上海路28号</td>
            <td class="el-icon-map-location"></td>
          </tr>
          <tr class="trwai">
            <td>2017/8/24 16:02</td>
            <td>李萌</td>
            <td>江苏省南京市鼓楼区上海路28号</td>
            <td class="el-icon-map-location"></td>
          </tr>
          <tr class="trwai">
            <td>2017/8/24 16:02</td>
            <td>李萌</td>
            <td>江苏省南京市鼓楼区上海路28号</td>
            <td class="el-icon-map-location"></td>
          </tr>
          <tr class="trwai">
            <td>2017/8/24 16:02</td>
            <td>李萌</td>
            <td>江苏省南京市鼓楼区上海路28号</td>
            <td class="el-icon-map-location"></td>
          </tr>
          <tr class="trwai">
            <td>2017/8/24 16:02</td>
            <td>李萌</td>
            <td>江苏省南京市鼓楼区上海路28号</td>
            <td class="el-icon-map-location"></td>
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
        path: "/chuchai"
      });
    },
    chakan() {
      this.$router.push({
        path: "/chukan"
      });
    },
    chakan2() {
      this.$router.push({
        path: "/waichukan"
      });
    },
    chakan3() {
      this.$router.push({
        path: "/jiabankan"
      });
    },
    chakan4() {
      this.$router.push({
        path: "/qingxiukan"
      });
    },
    chakan5() {
      this.$router.push({
        path: "/tiaoxiukan"
      });
    },
    xinzen() {
      if (this.tab == 0) {
        this.$router.push({
          path: "/chuzen"
        });
      } else if (this.tab == 1) {
        this.$router.push({
          path: "/waichuzen"
        });
      } else if (this.tab == 2) {
        this.$router.push({
          path: "/jiabanzen"
        });
      } else if (this.tab == 3) {
        this.$router.push({
          path: "/qingxiuzen"
        });
      } else if (this.tab == 4) {
        this.$router.push({
          path: "/tiaoxiuzen"
        });
      }
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
  margin-left: 130px;
}
.input {
  border-radius: 4px;
  margin-left: 10px;
  width: 400px;
}
.neiron {
  margin-top: 5px;
}
.zuo {
  width: 240px;
  height: 100%;
  border-radius: 4px;
  border: 1px solid rgb(223, 223, 223);
  float: left;
  margin-left: 5px;
  margin-top: 5px;
}
.you{
  float: right;
  margin-top:5px; 
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
  width: 180px;
  margin: 10px;
}
.tr td:nth-of-type(1) {
  width: 323px;
}
.tr td:nth-of-type(2) {
  width: 140px;
}
.tr td:nth-of-type(3) {
  width: 150px;
}
.tr td:nth-of-type(4) {
  width: 140px;
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
  border-radius: 2px;
  font-size: 12px;
  margin-top: 5px;
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
.trjia:nth-of-type(1) {
  font-size: 18px;
}
.trjia td {
  display: table-cell;
  border: 1px solid rgb(223, 223, 223);
  vertical-align: middle;
  width: 180px;
  margin: 10px;
}
.trjia td:nth-of-type(1) {
  width: 323px;
}
.trjia td:nth-of-type(2) {
  width: 140px;
}
.trjia td:nth-of-type(3) {
  width: 130px;
}
.trjia td:nth-of-type(4) {
  width: 270px;
}
.trjia td:nth-of-type(5) {
  width: 140px;
}
.trqing:nth-of-type(1) {
  font-size: 18px;
}
.trqing td {
  display: table-cell;
  border: 1px solid rgb(223, 223, 223);
  vertical-align: middle;
  width: 180px;
  margin: 10px;
}
.trqing td:nth-of-type(1) {
  width: 223px;
}
.trqing td:nth-of-type(2) {
  width: 140px;
}
.trqing td:nth-of-type(3) {
  width: 120px;
}
.trqing td:nth-of-type(5) {
  width: 268px;
}
.trqing td:nth-of-type(4) {
  width: 140px;
}
.trqing td:nth-of-type(6) {
  width: 100px;
}
.trtiao:nth-of-type(1) {
  font-size: 18px;
}
.trtiao td {
  display: table-cell;
  border: 1px solid rgb(223, 223, 223);
  vertical-align: middle;
  width: 180px;
  margin: 10px;
}
.trtiao td:nth-of-type(1) {
  width: 323px;
}
.trtiao td:nth-of-type(2) {
  width: 140px;
}
.trtiao td:nth-of-type(3) {
  width: 150px;
}
.trtiao td:nth-of-type(5) {
  width: 140px;
}
.trtiao td:nth-of-type(4) {
  width: 250px;
}
.trwai:nth-of-type(1) {
  font-size: 18px;
}
.trwai td {
  display: table-cell;
  border: 1px solid rgb(223, 223, 223);
  vertical-align: middle;
  width: 180px;
  margin: 10px;
}
.trwai td:nth-of-type(1) {
  width: 350px;
}
.trwai td:nth-of-type(2) {
  width: 140px;
}
.trwai td:nth-of-type(3) {
  width: 385px;
}
.trwai td:nth-of-type(4) {
    cursor: pointer;
  width: 140px;
}
</style>