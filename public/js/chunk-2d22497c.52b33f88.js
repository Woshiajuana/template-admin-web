(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d22497c"],{e193:function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("el-dialog",{attrs:{title:"add"===e.operation_data.type?"新增用户组":"编辑用户组",visible:e.operation_visible,"before-close":e.handleClose},on:{"update:visible":function(t){e.operation_visible=t}}},[r("el-form",{ref:"ruleForm",staticClass:"demo-ruleForm",attrs:{size:"mini",model:e.ruleForm,rules:e.rules,"label-width":"100px"}},[r("el-form-item",{attrs:{label:"名称",prop:"name"}},[r("el-input",{attrs:{placeholder:"请输入名称",maxlength:"20"},model:{value:e.ruleForm.name,callback:function(t){e.$set(e.ruleForm,"name",t)},expression:"ruleForm.name"}})],1),r("el-form-item",{attrs:{label:"API",prop:"api_routes"}},[r("el-select",{attrs:{multiple:"","collapse-tags":"",placeholder:"请选择API"},model:{value:e.ruleForm.api_routes,callback:function(t){e.$set(e.ruleForm,"api_routes",t)},expression:"ruleForm.api_routes"}},e._l(e.operation_api_data,function(e,t){return r("el-option",{key:t,attrs:{label:e.name,value:e._id}})}),1)],1),r("el-form-item",{attrs:{label:"菜单",prop:"menu_routes"}},[r("el-select",{attrs:{multiple:"","collapse-tags":"",placeholder:"请选择API"},model:{value:e.ruleForm.menu_routes,callback:function(t){e.$set(e.ruleForm,"menu_routes",t)},expression:"ruleForm.menu_routes"}},e._l(e.operation_menu_data,function(e,t){return r("el-option",{key:t,attrs:{label:e.title,value:e._id}})}),1)],1),r("el-form-item",{attrs:{label:"备注",prop:"remark"}},[r("el-input",{attrs:{type:"textarea",placeholder:"请输入备注",maxlength:"100"},model:{value:e.ruleForm.remark,callback:function(t){e.$set(e.ruleForm,"remark",t)},expression:"ruleForm.remark"}})],1),r("el-form-item",[r("el-button",{attrs:{type:"primary"},on:{click:e.handleSubmit}},[e._v("确认")]),r("el-button",{on:{click:e.handleClose}},[e._v("关闭")])],1)],1)],1)},o=[],l=(r("8e6e"),r("ac6a"),r("456d"),r("bd86"));function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(r,!0).forEach(function(t){Object(l["a"])(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(r).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var s={data:function(){return{loading:!1,ruleForm:{name:"",remark:"",api_routes:[],menu_routes:[]},rules:{name:[{required:!0,message:"请输入用户组名称",trigger:"blur"},{min:1,max:20,message:"长度在 1 到 20 个字符",trigger:"blur"}],remark:[{required:!0,message:"请填写备注",trigger:"blur"}]}}},watch:{operation_visible:function(e){e&&this.assignmentData()}},props:{operation_visible:{default:!1},operation_width:{default:""},operation_data:{default:""},operation_api_data:{default:""},operation_menu_data:{default:""}},methods:{handleClose:function(){this.$emit("update:operation_visible",!1),this.resetForm()},handleSubmit:function(){var e=this;this.$refs.ruleForm.validate(function(t){if(!t)return!1;var r=e.operation_data,a=r.type;r.data;e.$curl("add"===a?e.$appConst.DO_CREATE_USER_GROUP:e.$appConst.DO_UPDATE_USER_GROUP,e.ruleForm).then(function(t){e.$modal.toast("add"===a?"新增成功":"编辑成功","success"),e.$emit("refresh"),e.handleClose()}).toast()})},resetForm:function(){this.$refs.ruleForm.resetFields()},assignmentData:function(){var e=this;this.$nextTick(function(){e.$refs.ruleForm.resetFields();var t=e.operation_data,r=(t.type,t.data);r&&(e.ruleForm=i({},r,{id:r._id}))})}}},u=s,m=r("2877"),p=Object(m["a"])(u,a,o,!1,null,null,null);t["default"]=p.exports}}]);