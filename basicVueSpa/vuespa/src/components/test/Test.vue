<style src="./Test.css"></style>
<template>
  <div class="test">test</div>
</template>

<script>

   export default{

     mounted(){
       import("./Test.js").then((value) => {

        value.default.log();
       })
     }
   }

</script>
