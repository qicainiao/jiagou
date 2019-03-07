import {isEmpty} from 'lodash-es'
import styles from './test.css';
import small from '../../images/1.jpg';
import big from '../../images/2.jpg';
// import help from "../common/common.js"
// setTimeout(function(){
//
//   document.getElementById("app").innerHTML=`<h1 class="${styles.test}">大家好！</h1><h1 class="${styles.test}">大家好！</h1><img src="${small}"></img><img src="${big}"></img>`
// },2000)

const sync =()=>{
   console.log('this is sync');
   fetch("http://localhost:3000/posts/1").then(response => response.json()).then(data=>{
     console.log("fetch结果",data);
   }).catch((err) => {
     console.log("报错了");
   })

   fetch("/api/list").then((response) => { return response.json()}).then((value) => {
     console.log("value====>",value);
   }).catch((err) => {
     console.log("报错了",err);
   })
}


const isArray=(args)=>{
   console.log("isArray",args);
}

const isEmptyfn=(args)=>{
   // console.log("==help===>",help);
   console.log("isEmpty",isEmpty(args));
}


export {
  sync,
  isArray,
  isEmptyfn
}
