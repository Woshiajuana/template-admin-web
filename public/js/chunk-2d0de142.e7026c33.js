(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0de142"],{"83b3":function(e,r,t){"use strict";t.r(r);var o=function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("el-dialog",{attrs:{title:"add"===e.operation_data.type?"新增菜单":"编辑菜单",visible:e.operation_visible,"before-close":e.handleClose},on:{"update:visible":function(r){e.operation_visible=r}}},[t("el-form",{ref:"ruleForm",staticClass:"demo-ruleForm",attrs:{size:"mini",model:e.ruleForm,rules:e.rules,"label-width":"100px"}},[t("el-form-item",{attrs:{label:"标题",prop:"title"}},[t("el-input",{attrs:{maxlength:"20"},model:{value:e.ruleForm.title,callback:function(r){e.$set(e.ruleForm,"title",r)},expression:"ruleForm.title"}})],1),t("el-form-item",{attrs:{label:"路径",prop:"path"}},[t("el-input",{model:{value:e.ruleForm.path,callback:function(r){e.$set(e.ruleForm,"path",r)},expression:"ruleForm.path"}})],1),t("el-form-item",{attrs:{label:"排序",prop:"sort"}},[t("el-input",{model:{value:e.ruleForm.sort,callback:function(r){e.$set(e.ruleForm,"sort",r)},expression:"ruleForm.sort"}})],1),t("el-form-item",{attrs:{label:"组件",prop:"component"}},[t("el-input",{model:{value:e.ruleForm.component,callback:function(r){e.$set(e.ruleForm,"component",r)},expression:"ruleForm.component"}})],1),t("el-form-item",{attrs:{label:"图标",prop:"icon"}},[t("el-input",{model:{value:e.ruleForm.icon,callback:function(r){e.$set(e.ruleForm,"icon",r)},expression:"ruleForm.icon"}})],1),t("el-form-item",{attrs:{label:"重定向",prop:"redirect"}},[t("el-input",{model:{value:e.ruleForm.redirect,callback:function(r){e.$set(e.ruleForm,"redirect",r)},expression:"ruleForm.redirect"}})],1),t("el-form-item",{attrs:{label:"参数",prop:"params"}},[t("el-input",{model:{value:e.ruleForm.params,callback:function(r){e.$set(e.ruleForm,"params",r)},expression:"ruleForm.params"}})],1),t("el-form-item",{attrs:{label:"父路由",prop:"father"}},[t("el-select",{attrs:{placeholder:"请选择API"},model:{value:e.ruleForm.father,callback:function(r){e.$set(e.ruleForm,"father",r)},expression:"ruleForm.father"}},e._l(e.operation_menu_data,function(e,r){return t("el-option",{key:r,attrs:{label:e.title,value:e._id}})}),1)],1),t("el-form-item",[t("el-button",{attrs:{type:"primary"},on:{click:e.handleSubmit}},[e._v("确认")]),t("el-button",{on:{click:e.handleClose}},[e._v("关闭")])],1)],1)],1)},l=[],a=(t("8e6e"),t("ac6a"),t("456d"),t("bd86"));function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),t.push.apply(t,o)}return t}function n(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(t,!0).forEach(function(r){Object(a["a"])(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(t).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}var s={data:function(){return{ruleForm:{title:"",path:"",params:"",father:null,sort:"",component:"",redirect:"",icon:""},rules:{title:[{required:!0,message:"请输入菜单名称",trigger:"blur"},{min:1,max:20,message:"长度在 1 到 20 个字符",trigger:"blur"}],path:[{required:!0,message:"请填写路径",trigger:"blur"}],component:[{required:!0,message:"请填写组件",trigger:"blur"}],sort:[{required:!0,message:"请填写排序",trigger:"blur"}]}}},watch:{operation_visible:function(e){e&&this.assignmentData()}},props:{operation_visible:{default:!1},operation_width:{default:""},operation_data:{default:""},operation_menu_data:{default:""}},methods:{handleClose:function(){this.$emit("update:operation_visible",!1),this.resetForm()},handleSubmit:function(){var e=this;this.$refs.ruleForm.validate(function(r){if(!r)return!1;var t=e.operation_data,o=t.type;t.data;e.$curl("add"===o?e.$appConst.DO_CREATE_MENU_ROUTE:e.$appConst.DO_UPDATE_MENU_ROUTE,e.ruleForm).then(function(r){e.$modal.toast("add"===o?"新增成功":"编辑成功","success"),e.$emit("refresh"),e.handleClose()}).toast()})},resetForm:function(){this.$refs.ruleForm.resetFields()},assignmentData:function(){var e=this;this.$nextTick(function(){e.$refs.ruleForm.resetFields();var r=e.operation_data,t=(r.type,r.data);t&&(e.ruleForm=n({},t,{id:t._id}))})}}},u=s,m=t("2877"),p=Object(m["a"])(u,o,l,!1,null,null,null);r["default"]=p.exports}}]);