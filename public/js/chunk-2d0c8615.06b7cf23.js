(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0c8615"],{5543:function(e,r,t){"use strict";t.r(r);var a=function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("el-dialog",{attrs:{title:"add"===e.operation_data.type?"新增用户":"编辑用户",visible:e.operation_visible,"before-close":e.handleClose},on:{"update:visible":function(r){e.operation_visible=r}}},[t("el-form",{ref:"ruleForm",staticClass:"demo-ruleForm",attrs:{size:"mini",model:e.ruleForm,rules:e.rules,"label-width":"100px"}},[t("el-form-item",{attrs:{label:"昵称",prop:"nickname"}},[t("el-input",{attrs:{placeholder:"请输入昵称",maxlength:"20"},model:{value:e.ruleForm.nickname,callback:function(r){e.$set(e.ruleForm,"nickname",r)},expression:"ruleForm.nickname"}})],1),t("el-form-item",{attrs:{label:"邮箱",prop:"email"}},[t("el-input",{attrs:{placeholder:"请输入邮箱",maxlength:"20"},model:{value:e.ruleForm.email,callback:function(r){e.$set(e.ruleForm,"email",r)},expression:"ruleForm.email"}})],1),t("el-form-item",{attrs:{label:"手机",prop:"phone"}},[t("el-input",{attrs:{placeholder:"请输入手机号",maxlength:"11"},model:{value:e.ruleForm.phone,callback:function(r){e.$set(e.ruleForm,"phone",r)},expression:"ruleForm.phone"}})],1),t("el-form-item",{attrs:{label:"头像",prop:"avatar"}},[t("el-input",{attrs:{placeholder:"请输入头像链接"},model:{value:e.ruleForm.avatar,callback:function(r){e.$set(e.ruleForm,"avatar",r)},expression:"ruleForm.avatar"}})],1),t("el-form-item",{attrs:{label:"密码",prop:"password"}},[t("el-input",{attrs:{placeholder:"请输入密码",maxlength:"20"},model:{value:e.ruleForm.password,callback:function(r){e.$set(e.ruleForm,"password",r)},expression:"ruleForm.password"}})],1),t("el-form-item",{attrs:{label:"用户组",prop:"group"}},[t("el-select",{attrs:{placeholder:"请选择用户组"},model:{value:e.ruleForm.group,callback:function(r){e.$set(e.ruleForm,"group",r)},expression:"ruleForm.group"}},e._l(e.operation_group_data,function(e,r){return t("el-option",{key:r,attrs:{label:e.name,value:e._id}})}),1)],1),t("el-form-item",[t("el-button",{attrs:{type:"primary"},on:{click:e.handleSubmit}},[e._v("确认")]),t("el-button",{on:{click:e.handleClose}},[e._v("关闭")])],1)],1)],1)},o=[],l=(t("8e6e"),t("ac6a"),t("456d"),t("bd86"));function n(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),t.push.apply(t,a)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?n(t,!0).forEach(function(r){Object(l["a"])(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):n(t).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}var s={data:function(){return{loading:!1,ruleForm:{nickname:"",email:"",phone:"",avatar:"",group:"",password:""},rules:{nickname:[{required:!0,message:"请输入用户名称",trigger:"blur"},{min:1,max:20,message:"长度在 1 到 20 个字符",trigger:"blur"}],email:[{required:!0,message:"请填写邮箱",trigger:"blur"}],phone:[{required:!0,message:"请填写手机号",trigger:"blur"}],avatar:[{required:!0,message:"请填写头像",trigger:"blur"}],password:[{required:!0,message:"请输入密码",trigger:"blur"}],group:[{required:!0,message:"请选择用户组",trigger:"blur"}]}}},watch:{operation_visible:function(e){e&&this.assignmentData()}},props:{operation_visible:{default:!1},operation_width:{default:""},operation_data:{default:""},operation_group_data:{default:""}},methods:{handleClose:function(){this.$emit("update:operation_visible",!1),this.resetForm()},handleSubmit:function(){var e=this;this.$refs.ruleForm.validate(function(r){if(!r)return!1;var t=e.operation_data,a=t.type;t.data;e.$curl("add"===a?e.$appConst.DO_CREATE_USER_INFO:e.$appConst.DO_UPDATE_USER_INFO,e.ruleForm).then(function(r){e.$modal.toast("add"===a?"新增成功":"编辑成功","success"),e.$emit("refresh"),e.handleClose()}).toast()})},resetForm:function(){this.$refs.ruleForm.resetFields()},assignmentData:function(){var e=this;this.$nextTick(function(){e.$refs.ruleForm.resetFields();var r=e.operation_data,t=(r.type,r.data);t&&(e.ruleForm=i({},t,{id:t._id}))})}}},u=s,p=t("2877"),m=Object(p["a"])(u,a,o,!1,null,"18d9611e",null);r["default"]=m.exports}}]);