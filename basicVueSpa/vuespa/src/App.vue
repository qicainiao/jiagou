<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view/>
    <Child msg-father="我的父亲" @sendInputVal="showChildMsg" ref="child" :val.sync="name"></Child>
    <p>子组件传来的值是{{childMsg}}</p>
     <button @click="click2hanlde">获取子组件1的数据与方法</button>
  </div>
</template>

<script>

import Child from './components/Child.vue'
export default {
  name: 'App',
  data(){
    return {
      childMsg:'',
      name:''
    }
  },
  components:{
    Child
  },
  methods:{
    showChildMsg:function(data){
      console.log(data);
      this.childMsg = data
    },
    click2hanlde(){
     //$refs的方式调用子组件的方法
      this.$refs.child.resetMsg();
    }
  },
  mounted(){
    //获取子组件的实例
    console.log(this.$refs['child']);
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
