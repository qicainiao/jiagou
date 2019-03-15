<template>
  <div class="hello">
    <h2>{{msgFather}}</h2>
    <button v-on:click="sendMsg" >向父亲传递数据</button>
    <button v-on:click="setFatherMsg" >直接调用修改父组件的data</button>
    <button v-on:click="syncSetFatherMsg" >sync修改父组件数据</button>
    <h2>{{val}}</h2>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      inputValue:'',

    }
  },
  props:['msgFather','val'],
   //两种方式 1数组形式 props: ['name', 'value']  2对象形式
  //  props: {
  //  // 基础的类型检查
  //  name: String,
  //  // 多个可能的类型
  //  value: [String, Number],
  //  // 对象形式
  //  id: {
  //   type: Number,
  //   required: true
  //  }
  // }

  methods:{
    sendMsg(){
      this.$emit("sendInputVal","aaa")
    },

    resetMsg(){
      this.$emit("sendInputVal","bbb")
    },

    setFatherMsg(){
      this.$parent.childMsg="666"
    },

    syncSetFatherMsg(){
      this.$emit("update:val","8888")
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

</style>
