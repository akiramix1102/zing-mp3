(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-bdcbf9ec"],{"027c":function(t,e,a){"use strict";a("6775")},"0bcd":function(t,e,a){},"0e96":function(t,e,a){},"21c1":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"page-content page-product"},[a("base-table",{ref:"contractTable",staticClass:"product-list",attrs:{"is-loading":t.isLoading,data:t.data,showPagination:!0,table:t.query,paginationInfo:"sản phẩm",emptyText:"Không có dữ liệu sản phẩm"},on:{sizeChange:t.handleSizeChange,currentChange:t.handleCurrentChange,rowClick:t.handleClickAction}},[a("template",{slot:"header"},[a("div",{staticClass:"header-action be-flex jc-space-between"},[a("div",{staticClass:"aciton-left flex"},[a("search-bar",{on:{search:t.handleSearch}}),a("filter-program",{staticClass:"filter",on:{search:t.handleSearchFillter}}),a("el-dropdown",{staticClass:"import-sort",attrs:{trigger:"click"},on:{command:t.handleCommand}},[a("el-button",{staticClass:"be-button-unset custom-button text-filter"},[a("base-icon",{staticClass:"icon",attrs:{icon:"sort"}}),t._v(" Sắp xếp ")],1),a("el-dropdown-menu",{staticClass:"sort-menu-custom",attrs:{slot:"dropdown"},slot:"dropdown"},t._l(t.option,(function(e){return a("el-dropdown-item",{key:e.id,class:e.active?"active":null,attrs:{command:e,divided:e.divided}},[a("span",{staticClass:"be-flex"},[a("span",{staticClass:"be-flex-item"},[t._v(" "+t._s(e.name)+" ")])])])})),1)],1)],1),a("div",{staticClass:"action-right flex actions"},[a("el-button",{staticClass:"custom-file",staticStyle:{"margin-right":"10px"},attrs:{loading:t.isLoading},on:{click:t.handleOpenExportFile}},[a("span",{staticClass:"be-inline-flex align-center"},[a("base-icon",{staticClass:"icon",attrs:{icon:"excel-fullcolor"}}),t._v(" Tải file mẫu ")],1)]),a("el-dropdown",{staticClass:"dropdown-create",attrs:{"split-button":"",loading:t.isLoading},on:{click:t.handleCreate}},[t._v(" Thêm mới "),a("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[a("el-dropdown-item",[a("el-upload",{staticClass:"upload-demo",attrs:{action:"","auto-upload":!1,"show-file-list":!1,"on-change":t.handleChangeFile}},[t._v(" Thêm mới từ Excel ")])],1)],1)],1)],1)])]),a("el-table-column",{attrs:{type:"index",label:"#",width:"40",align:"center"}}),a("el-table-column",{attrs:{prop:"programCode",label:"Mã sản phẩm ",width:"120"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("p",[t._v(t._s(e.row.productCode))])]}}])}),a("el-table-column",{attrs:{label:"Tên Sản Phẩm ","min-width":"260"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("div",[t._v(t._s(e.row.productName))])]}}])}),a("el-table-column",{attrs:{label:"Nhóm Sản Phẩm",width:"160",align:"left"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("div",[t._v(t._s(e.row.categoryName))])]}}])}),a("el-table-column",{attrs:{label:"Thời hạn HĐ",width:"140",align:"right"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("div",[t._v(t._s(e.row.numOfContractYear))])]}}])}),a("el-table-column",{attrs:{label:"Thời hạn đóng phí",width:"170",align:"right"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("div",[t._v(t._s(e.row.numOfFeeYear))])]}}])}),a("el-table-column",{attrs:{label:"Trạng thái",width:"140",align:"left"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("div",{attrs:{align:"left"},domProps:{innerHTML:t._s(t.checkStatus(e.row))}})]}}])}),a("el-table-column",{staticClass:"product-action",attrs:{width:"60",align:"center"}},[[a("div",{staticClass:"table-action-list action",attrs:{align:"center"}},[a("base-icon",{staticClass:"action-item",attrs:{slot:"reference",icon:"action"},slot:"reference"})],1)]],2)],2),a("create-program",{attrs:{isAction:t.isAction,ProductEdit:t.product},on:{reset:t.resetSelectContract}}),a("popup-show-error",{attrs:{"data-error":t.dataError,"file-name":t.fileName}})],1)},r=[],s=a("c964"),o=a("f3f3"),c=a("276c"),l=a("e954"),n=a("920b"),u=a("92a6"),d=(a("b0c0"),a("ac1f"),a("841c"),a("96cf"),a("9ab4")),p=a("2ef0"),h=a("1b40"),m=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("span",{staticClass:"search flex"},[a("base-icon",{staticClass:"icon-search",attrs:{icon:"search"}}),a("input",{directives:[{name:"model",rawName:"v-model",value:t.valueSearch,expression:"valueSearch"}],staticClass:"searchBar",attrs:{type:"text",placeholder:"Tìm kiếm..."},domProps:{value:t.valueSearch},on:{input:function(e){e.target.composing||(t.valueSearch=e.target.value)}}})],1)},f=[],b=function(t){Object(n["a"])(a,t);var e=Object(u["a"])(a);function a(){var t;return Object(c["a"])(this,a),t=e.apply(this,arguments),t.valueSearch="",t.searchText=Object(p["debounce"])((function(e){t.$emit("search",Object(p["trim"])(e))}),500),t}return Object(l["a"])(a,[{key:"handleSearch",value:function(t){this.searchText(t)}}]),a}(h["d"]);Object(d["a"])([Object(h["e"])("valueSearch",{immediate:!1})],b.prototype,"handleSearch",null),b=Object(d["a"])([Object(h["a"])({components:{}})],b);var g=b,v=g,y=(a("2d01"),a("2877")),C=Object(y["a"])(v,m,f,!1,null,"6ee9de1a",null),k=C.exports,x=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"popover-filter"},[a("div",{staticClass:"be-flex jc-space-between"},[a("div",{staticClass:"action-left flex"},[a("div",{staticClass:"filter-item"},[a("el-popover",{attrs:{placement:"bottom","popper-class":"popper-filter-custom",width:"340",trigger:"click"},model:{value:t.isClose,callback:function(e){t.isClose=e},expression:"isClose"}},[a("div",{staticClass:"cursor text-filter",attrs:{slot:"reference"},slot:"reference"},[a("base-icon",{attrs:{icon:"filter"}}),a("span",[t._v("Bộ lọc")])],1),a("div",{staticClass:"content filter-product"},[a("div",{staticClass:"be-flex-column uploader"},[a("span",{staticClass:"label small"},[t._v("Trạng thái ")]),a("el-row",[a("el-col",{attrs:{span:12}},[a("el-checkbox",{attrs:{label:"ACTIVE"},model:{value:t.checkbox.checkbox1,callback:function(e){t.$set(t.checkbox,"checkbox1",e)},expression:"checkbox.checkbox1"}},[t._v("Hoạt động")])],1),a("el-col",{attrs:{span:12}},[a("el-checkbox",{attrs:{label:"INACTIVE"},model:{value:t.checkbox.checkbox2,callback:function(e){t.$set(t.checkbox,"checkbox2",e)},expression:"checkbox.checkbox2"}},[t._v("Không hoạt động")])],1)],1)],1)]),a("div",{staticClass:"content filter-product"},[a("div",{staticClass:"be-flex-column uploader"},[a("span",{staticClass:"label small"},[t._v("Loại sản phẩm ")]),a("el-row",[a("el-col",{attrs:{span:12}},[a("el-checkbox",{attrs:{label:"MAIN"},model:{value:t.checkbox.checkbox3,callback:function(e){t.$set(t.checkbox,"checkbox3",e)},expression:"checkbox.checkbox3"}},[t._v("Sản phẩm chính")])],1),a("el-col",{attrs:{span:12}},[a("el-checkbox",{attrs:{label:"SUB"},model:{value:t.checkbox.checkbox4,callback:function(e){t.$set(t.checkbox,"checkbox4",e)},expression:"checkbox.checkbox4"}},[t._v(" Sản phẩm phụ")])],1)],1)],1)]),a("div",{staticClass:"content"},[a("div",{staticClass:"be-flex-column uploader"},[a("span",{staticClass:"label small"},[t._v("Nhóm sản phẩm")]),a("el-select",{staticClass:"opiton-select",staticStyle:{width:"339px"},attrs:{"remote-method":t.productCategory,placeholder:"Chọn nhóm sản phẩm  "},model:{value:t.product.categoryName,callback:function(e){t.$set(t.product,"categoryName",e)},expression:"product.categoryName"}},t._l(t.listRelationship,(function(t){return a("el-option",{key:t.categoryId,staticClass:"opiton-select",attrs:{value:t.categoryName,label:t.categoryCode+" - "+t.categoryName}})})),1)],1)]),a("div",{staticClass:"content"},[a("div",{staticClass:"be-flex uploader"},[a("el-row",[a("el-col",{attrs:{span:10}},[a("span",{staticClass:"label small"},[t._v("Thời hạn HĐ ")]),a("el-input",{attrs:{type:"number"},model:{value:t.product.numOfContractYear,callback:function(e){t.$set(t.product,"numOfContractYear",e)},expression:"product.numOfContractYear"}})],1),a("el-col",{staticStyle:{float:"right"},attrs:{span:10}},[a("span",{staticClass:"label small"},[t._v("Thời hạn đóng phí")]),a("el-input",{attrs:{type:"number"},model:{value:t.product.numOfFeeYear,callback:function(e){t.$set(t.product,"numOfFeeYear",e)},expression:"product.numOfFeeYear"}})],1)],1)],1)]),a("div",{staticClass:"popper-filter-footer"},[a("div",{staticClass:"block-bottom"},[a("el-button",{staticClass:"be-btn-danger",on:{click:t.handleSearch}},[t._v("Áp dụng")]),a("el-button",{staticClass:"btn",on:{click:t.handleReset}},[t._v("Mặc định")])],1)])])],1)])])])},O=[],_=(a("4de4"),a("6d3f")),S=a("08ba"),T=a("2b17"),I=function(t){Object(n["a"])(a,t);var e=Object(u["a"])(a);function a(){var t;return Object(c["a"])(this,a),t=e.apply(this,arguments),t.isClose=!1,t.checkbox={checkbox1:!0,checkbox2:!1,checkbox3:!1,checkbox4:!1},t.product={numOfFeeYear:"",numOfContractYear:"",categoryId:"",categoryCode:"",categoryName:"",productType:"",dispStatus:""},t.params={},t.form={},t.leaderData={},t.productDetail={},t.listRelationship={},t}return Object(l["a"])(a,[{key:"created",value:function(){var t,e;this.form=this.user,this.apiProduct=Object(S["a"])("product",{districtId:null===(t=this.user)||void 0===t||null===(e=t.districts)||void 0===e?void 0:e[0].id}),this.productCategory()}},{key:"handleChangeInput",value:function(t){var e=this.listRelationship.filter((function(e){return e.categoryId==t}));this.productDetail=e[0],this.product.categoryId=this.productDetail.categoryId,this.product.categoryName=this.productDetail.categoryName,this.product.categoryCode=this.productDetail.categoryCode}},{key:"productCategory",value:function(){var t=this;this.apiProduct.productCategory().then((function(e){t.listRelationship=e}))}},{key:"handleSearch",value:function(){var t=this;1==this.checkbox.checkbox1&&0==this.checkbox.checkbox2?this.product.dispStatus="ACTIVE":0==this.checkbox.checkbox1&&1==this.checkbox.checkbox2?this.product.dispStatus="INACTIVE":this.product.dispStatus="",1==this.checkbox.checkbox3&&0==this.checkbox.checkbox4?this.product.productType="MAIN":0==this.checkbox.checkbox3&&1==this.checkbox.checkbox4?this.product.productType="SUB":this.product.productType="",this.apiProduct.getProduct(this.product).then((function(){t.$emit("search",t.product),t.isClose=!1}))}},{key:"handleReset",value:function(){this.checkbox={checkbox1:!0,checkbox2:!1,checkbox3:!1,checkbox4:!1},this.product={numOfFeeYear:"",numOfContractYear:"",categoryId:"",categoryCode:"",categoryName:"",productType:"",dispStatus:""}}}]),a}(T["a"]);I=Object(d["a"])([Object(h["a"])({components:{BaseIcon:_["a"]}})],I);var w=I,E=w,j=(a("adf9"),Object(y["a"])(E,x,O,!1,null,"4953c2a2",null)),N=j.exports,R=a("9f48"),$=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("base-popup",{staticClass:"popup-valid input-product",attrs:{name:"CreateProduct",open:t.handleOpen,close:t.handleClose,width:"766px",hight:"425px",top:"90px",hiddenFooter:!0,closeClickModal:t.closeClick}},[a("div",{attrs:{slot:"title"},slot:"title"},[t._v(" "+t._s("edit"===t.isAction?"Sửa thông tin":"Thêm mới")+" sản phẩm "),a("el-button",{staticClass:"icon",on:{click:t.close}},[a("base-icon",{attrs:{icon:"close"}})],1)],1),a("el-form",{ref:"formInput",attrs:{rules:t.rules,model:t.product}},[a("el-row",{staticClass:"row"},[a("el-col",{attrs:{span:10}},[a("div",[a("label",{staticClass:"title-label"},[t._v(" Mã sản phẩm ")]),a("el-form-item",{attrs:{prop:"productCode"}},[a("el-input",{staticClass:"from-input",attrs:{placeholder:"Nhập mã"},model:{value:t.product.productCode,callback:function(e){t.$set(t.product,"productCode",e)},expression:"product.productCode"}})],1)],1),a("div",{staticClass:"title-top"},[a("label",{staticClass:"title-label"},[t._v(" Tên sản phẩm ")]),a("el-form-item",{attrs:{prop:"productName"}},[a("el-input",{staticClass:"from-input",attrs:{placeholder:"Nhập tên"},model:{value:t.product.productName,callback:function(e){t.$set(t.product,"productName",e)},expression:"product.productName"}})],1)],1),a("div",{staticClass:"title-top"},[a("label",{staticClass:"title-label"},[t._v(" Loại sản phẩm ")]),a("div",{staticClass:"option"},[a("el-form-item",{attrs:{prop:"productType"}},[a("el-radio-group",{on:{change:t.handleChangeRadio},model:{value:t.product.productType,callback:function(e){t.$set(t.product,"productType",e)},expression:"product.productType"}},[a("el-radio",{attrs:{label:"MAIN"}},[t._v(" Sản phẩm chính")]),a("el-radio",{attrs:{label:"SUB"}},[t._v(" Sản phẩm phụ")])],1)],1),t.listError.productType?a("small",{staticClass:"error"},[t._v("Cần chọn loại sản phẩm ")]):t._e()],1)]),a("div",[a("label",{staticClass:"title-label"},[t._v(" Nhóm sản phẩm ")]),a("el-form-item",{staticClass:"category",attrs:{prop:"categoryId"}},[a("el-select",{staticClass:"opiton-select",class:t.listError&&t.listError.categoryId?"errorClass":"",staticStyle:{width:"320px"},attrs:{"remote-method":t.productCategory,placeholder:"Chọn nhóm sản phẩm  "},on:{change:t.handleChangeInput},model:{value:t.product.categoryId,callback:function(e){t.$set(t.product,"categoryId",e)},expression:"product.categoryId"}},t._l(t.listRelationship,(function(t){return a("el-option",{key:t.id,staticClass:"opiton-select",staticStyle:{color:"#363636"},attrs:{value:t.categoryId,label:t.categoryCode+" - "+t.categoryName}})})),1),t.listError.categoryId?a("small",{staticClass:"error"},[t._v("Cần chọn nhóm sản phẩm ")]):t._e()],1)],1),"edit"===t.isAction?a("div",{staticStyle:{display:"flex",height:"42px",width:"320px"}},[a("label",{staticStyle:{"font-size":"14px",color:"#363636"}},[t._v(" Trạng thái hoạt động ")]),a("label",{staticClass:"title-label"},[a("el-form-item",[a("el-switch",{staticStyle:{"margin-left":"110px","margin-top":"-18px","padding-left":"33px"},attrs:{"inactive-color":"#DCDFE6","active-value":"ACTIVE","inactive-value":"INACTIVE"},model:{value:t.product.dispStatus,callback:function(e){t.$set(t.product,"dispStatus",e)},expression:"product.dispStatus"}})],1)],1)]):t._e()]),a("el-col",{staticStyle:{"padding-left":"80px"},attrs:{span:14}},[a("div",{staticStyle:{display:"flex",height:"81px"}},[a("div",[a("label",{staticClass:"title-label"},[t._v(" Thời hạn HĐ")]),a("el-form-item",{attrs:{prop:"numOfContractYear"}},[a("el-input",{staticClass:"input-left",attrs:{type:"number"},model:{value:t.product.numOfContractYear,callback:function(e){t.$set(t.product,"numOfContractYear",e)},expression:"product.numOfContractYear"}})],1)],1),a("div",{staticClass:"right"},[a("label",{staticClass:"title-label right"},[t._v(" Thời hạn đóng phí ")]),a("el-form-item",{attrs:{prop:"numOfFeeYear"}},[a("el-input",{staticClass:"input-left right",attrs:{type:"number"},model:{value:t.product.numOfFeeYear,callback:function(e){t.$set(t.product,"numOfFeeYear",e)},expression:"product.numOfFeeYear"}})],1)],1)]),a("label",{staticClass:"title"},[t._v(" TLHH cho NVKD")]),a("div",{staticStyle:{display:"flex"}},[a("div",[a("label",{staticClass:"title-label"},[t._v(" Nguồn người thân")]),a("el-form-item",{attrs:{prop:"familySalesRate"}},[a("el-input",{staticClass:"input-left",attrs:{type:"number"},model:{value:t.product.familySalesRate,callback:function(e){t.$set(t.product,"familySalesRate",e)},expression:"product.familySalesRate"}})],1)],1),a("div",{staticClass:"right"},[a("label",{staticClass:"title-label right"},[t._v(" Nguồn KH khác ")]),a("el-form-item",{attrs:{prop:"customerSalesRate"}},[a("el-input",{staticClass:"input-left right",attrs:{type:"number"},model:{value:t.product.customerSalesRate,callback:function(e){t.$set(t.product,"customerSalesRate",e)},expression:"product.customerSalesRate"}})],1)],1)]),a("label",{staticClass:"title"},[t._v(" TLHH cho CBQL")]),a("div",{staticStyle:{display:"flex"}},[a("div",[a("label",{staticClass:"title-label"},[t._v(" Nguồn người thân")]),a("el-form-item",{attrs:{prop:"familyManagerRate"}},[a("el-input",{staticClass:"input-left",attrs:{type:"number"},model:{value:t.product.familyManagerRate,callback:function(e){t.$set(t.product,"familyManagerRate",e)},expression:"product.familyManagerRate"}})],1)],1),a("div",{staticClass:"right"},[a("label",{staticClass:"title-label right"},[t._v(" Nguồn KH khác ")]),a("el-form-item",{attrs:{prop:"customerManagerRate"}},[a("el-input",{staticClass:"input-left right",attrs:{type:"number"},model:{value:t.product.customerManagerRate,callback:function(e){t.$set(t.product,"customerManagerRate",e)},expression:"product.customerManagerRate"}})],1)],1)])])],1)],1),a("template",{slot:"footer"},[a("div",{staticClass:"footer-action flex jc-space-between"},[a("div",[a("el-button",{on:{click:t.handleReset}},[t._v("Làm lại")]),a("el-button",{staticClass:"be-btn-danger",on:{click:t.handleSave}},[t._v("Lưu")])],1)])])],2)},P=[],A=(a("d3b7"),a("25f0"),function(t){Object(n["a"])(a,t);var e=Object(u["a"])(a);function a(){var t;return Object(c["a"])(this,a),t=e.apply(this,arguments),t.closeClick=!1,t.product={},t.rules={productCode:[{required:!0,message:"Mã không được để trống",trigger:"blur"}],productName:[{required:!0,message:"Tên không được để trống",trigger:"blur"}],numOfContractYear:[{required:!0,message:"Không được để trống",trigger:"blur"}],numOfFeeYear:[{required:!0,message:"Không được để trống",trigger:"blur"}],familySalesRate:[{required:!0,message:"Không được để trống",trigger:"blur"}],customerSalesRate:[{required:!0,message:"Không được để trống ",trigger:"blur"}],familyManagerRate:[{required:!0,message:"Không được để trống",trigger:"blur"}],customerManagerRate:[{required:!0,message:"Không được để trống",trigger:"blur"}]},t.leaderData={},t.productDetail={},t.listError={productType:!1,categoryId:!1},t.form={},t.listRelationship={},t}return Object(l["a"])(a,[{key:"checkError",value:function(){null==this.product.categoryId?this.listError.categoryId=!0:this.listError.categoryId=!1,this.product.productType?this.listError.productType=!1:this.listError.productType=!0}},{key:"validate",value:function(){null==this.product.productType&&(this.listError.productType=!1),null==this.product.categoryId&&(this.listError.categoryId=!1)}},{key:"handleChangeRadio",value:function(){this.product.productType?this.listError.productType=!1:this.listError.productType=!0}},{key:"handleChangeInput",value:function(t){var e=this.listRelationship.filter((function(e){return e.categoryId==t}))[0];this.product.categoryId=e.categoryId,this.product.categoryName=e.categoryName,this.product.categoryCode=e.categoryCode,null==this.product.categoryId?this.listError.categoryId=!0:this.listError.categoryId=!1}},{key:"created",value:function(){var t,e;this.form=this.user,this.apiProduct=Object(S["a"])("product",{districtId:null===(t=this.user)||void 0===t||null===(e=t.districts)||void 0===e?void 0:e[0].id})}},{key:"productCategory",value:function(){var t=this;this.apiProduct.productCategory().then((function(e){t.listRelationship=e}))}},{key:"validateForm",value:function(){var t=this.$refs.formInput,e=!1;return null===t||void 0===t||t.validate((function(t){e=t})),console.log("22",e),e}},{key:"handleSave",value:function(){var t=this,e=this.validateForm(),a=this.listError.productType||this.listError.categoryId;if(e&&!a){var i=this.product;if("add"===this.isAction)this.apiProduct.createProduct(i).then((function(e){t.setOpenPopup({popupName:"CreateProduct",isOpen:!1}),t.$message.success("Thêm dữ liệu thành công!"),t.$emit("save",e),t.$emit("reset")})).catch((function(e){t.$message.error(e.message)}));else if(null==this.product.productType&&(this.listError.productType=!1),null==this.product.categoryId&&(this.listError.categoryId=!1),i.id){var r={productCode:i.productCode,productName:i.productName,productType:i.productType,categoryId:i.categoryId,categoryCode:i.categoryCode,categoryName:i.categoryName.toString(),numOfContractYear:i.numOfContractYear,numOfFeeYear:i.numOfFeeYear,familySalesRate:i.familySalesRate,customerSalesRate:i.customerSalesRate,familyManagerRate:i.familyManagerRate,customerManagerRate:i.customerManagerRate,description:"",dispStatus:i.dispStatus};this.apiProduct.updateProduct(this.product.id,r).then((function(e){t.setOpenPopup({popupName:"CreateProduct",isOpen:!1}),t.$message.success("Cập nhật dữ liệu thành công!"),t.$emit("save",e),t.$emit("reset")})).catch((function(e){t.$message.error(e.message)}))}}else this.$message.error("Nhập đầy đủ thông tin bắt buộc!"),this.checkError()}},{key:"getRelationship",value:function(){}},{key:"handleClose",value:function(){}},{key:"handleOpen",value:function(){this.productCategory(),this.product=Object(o["a"])({},this.ProductEdit),"add"===this.isAction&&this.handleReset(),"edit"===this.isAction?(this.product.categoryId+="",this.listError.productType=!1,this.listError.categoryId=!1,this.$refs.formInput&&this.$refs.formInput.clearValidate()):this.$refs.formInput&&this.$refs.formInput.clearValidate()}},{key:"close",value:function(){this.setOpenPopup({popupName:"CreateProduct",isOpen:!1})}},{key:"handleReset",value:function(){"add"===this.isAction&&this.handleResetNew(),"edit"===this.isAction?(this.$refs.formInput.clearValidate(),this.handleEdit()):this.$refs.formInput&&this.$refs.formInput.clearValidate()}},{key:"handleEdit",value:function(){this.product=Object(p["clone"])(this.ProductEdit),this.product.categoryId+=""}},{key:"handleResetNew",value:function(){this.product={},this.$refs.formInput&&this.$refs.formInput.clearValidate(),null==this.product.productType&&(this.listError.productType=!1),null==this.product.categoryId&&(this.listError.categoryId=!1)}}]),a}(Object(h["b"])(R["a"],T["a"])));Object(d["a"])([Object(h["c"])({required:!1,type:Object,default:{}})],A.prototype,"ProductEdit",void 0),Object(d["a"])([Object(h["c"])({required:!1,type:String,default:"add"})],A.prototype,"isAction",void 0),A=Object(d["a"])([Object(h["a"])({})],A);var F=A,Y=F,M=(a("b930"),Object(y["a"])(Y,$,P,!1,null,"abaed5f0",null)),q=M.exports,L=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("base-popup",{staticClass:"popup-file-detail popup-show-error",attrs:{name:"popup-show-error",top:"7vh",open:t.handleOpen,width:"1240px",hiddenFooter:!0}},[a("div",{attrs:{slot:"title"},slot:"title"},[t._v("Nội dung file")]),a("div",{staticClass:"body-content"},[a("div",{staticClass:"body-content__content body-content__content--error"},[a("div",{staticClass:"text-column"},[a("div",{staticClass:"be-flex text-item"},[a("span",{staticClass:"text-item__title"},[t._v("Số dòng lỗi format")]),a("span",{staticClass:"text-item__number text-bold"},[t._v(t._s(t.dataError&&t.dataError.length))])])])]),a("div",{staticClass:"body-content__table body-content__table--error"},[a("base-table",{attrs:{data:t.dataError,showPagination:!1}},[a("el-table-column",{attrs:{index:t.getIndex,type:"index",label:"#",width:"80",align:"center"}}),a("el-table-column",{attrs:{label:"stt dòng",width:"90",align:"right"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(e.row.rowIndex)+" ")]}}])}),a("el-table-column",{attrs:{width:"20"}}),a("el-table-column",{attrs:{label:"mô tả lỗi"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(e.row.description)+" ")]}}])})],1)],1)])])},D=[],H=a("ef28"),V=a("c56f"),K=function(t){Object(n["a"])(a,t);var e=Object(u["a"])(a);function a(){var t;return Object(c["a"])(this,a),t=e.apply(this,arguments),t.data=[],t.detail={},t.tableHeight="auto",t.totalErrorCount=0,t}return Object(l["a"])(a,[{key:"getHeightOfTable",value:function(){this.tableHeight="".concat(window.innerHeight-123,"px")}},{key:"mounted",value:function(){this.getHeightOfTable()}},{key:"getIndex",get:function(){return 0*this.dataError.length+1}},{key:"fileNameExcel",get:function(){return this.fileName?this.fileName.replaceAll(".xlsx"," "):""}},{key:"handleOpen",value:function(){var t=this.$createElement;this.$message({customClass:"notify-error",type:"error",dangerouslyUseHTMLString:!0,message:t("div",{class:"message"},[t("div",[t("span",{class:"detail"},"Nhập từ file không thành công. Vui lòng kiểm tra chi tiết lỗi bên dưới")])]),duration:4e3})}}]),a}(Object(h["b"])(R["a"],V["a"]));Object(d["a"])([Object(h["c"])({required:!0,type:Array,default:[]})],K.prototype,"dataError",void 0),Object(d["a"])([Object(h["c"])({required:!0,type:String,default:""})],K.prototype,"fileName",void 0),K=Object(d["a"])([Object(h["a"])({components:{BaseTable:H["a"],BaseIcon:_["a"]}})],K);var U=K,B=U,z=(a("3b50"),Object(y["a"])(B,L,D,!1,null,"4ae6d969",null)),J=z.exports,Q=function(t){Object(n["a"])(a,t);var e=Object(u["a"])(a);function a(){var t;return Object(c["a"])(this,a),t=e.apply(this,arguments),t.isLoading=!1,t.isConflickClick=!1,t.data=[],t.isAction="add",t.form={},t.isSpace=!1,t.dataError=[],t.fileName="",t.query={page:1,search:"",limit:20,total:0,numOfFeeYear:"",numOfContractYear:"",categoryId:"",categoryCode:"",categoryName:"",productType:"",dispStatus:"ACTIVE",type:"PRODUCT"},t.params={type:"PRODUCT"},t.option=[{id:1,name:"Mã sản phẩm",sortType:"PRODUCT_CODE",active:!1,divided:!1},{id:2,name:"Tên sản phẩm ",sortType:"PRODUCT_NAME",active:!1,divided:!1},{id:3,name:"Thời hạn hợp đồng",sortType:" NUM_OF_CONTRACT_YEAR",active:!1,divided:!1},{id:4,name:"Thời hạn đóng phí",sortType:"NUM_OF_FEE_YEAR",active:!1,divided:!1},{id:5,name:"Sản phẩm mới nhất",sortType:"CREATED_AT",active:!1,divided:!1}],t.listRelationship={},t.product={},t}return Object(l["a"])(a,[{key:"init",value:function(){var t=this;this.isLoading=!0;var e=Object(o["a"])({},this.query);this.productApi.getProduct(e).then((function(e){t.data=e.content,t.query.total=e.totalElements,t.isLoading=!1})).catch((function(){t.isLoading=!1}))}},{key:"handleSearchFillter",value:function(t){this.query=Object(o["a"])(Object(o["a"])({},this.query),t),this.query.page=1,this.init()}},{key:"resetSelectContract",value:function(){this.init()}},{key:"resetQuery",value:function(){this.query.page=1,this.query.limit=20}},{key:"handleSizeChange",value:function(t){this.query.limit=t,this.init()}},{key:"handleCurrentChange",value:function(t){this.query.page=t,this.init()}},{key:"checkStatus",value:function(t){var e="";return"ACTIVE"===t.dispStatus?e="Hoạt động":"INACTIVE"===t.dispStatus&&(e="Không hoạt động"),e+"</span>"}},{key:"handleCreate",value:function(){this.isAction="add",this.setOpenPopup({popupName:"CreateProduct",isOpen:!0})}},{key:"handleClickAction",value:function(t,e){this.product=t.row,e||(e="edit"),"edit"===e&&(this.isAction=e,this.setOpenPopup({popupName:"CreateProduct",isOpen:!0}))}},{key:"handleChangeFile",value:function(t){this.uploadFile(t)}},{key:"handleOpenExportFile",value:function(){var t=Object(s["a"])(regeneratorRuntime.mark((function t(){var e,a,i=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return this.isLoading=!0,t.next=3,null===(e=this.apiImport)||void 0===e?void 0:e.spamleFile(this.districtId,this.params).then((function(t){a=t.data;var e=document.createElement("a");e.style.display="none",e.href=a,document.body.appendChild(e),e.click(),document.body.removeChild(e),i.isLoading=!1,i.isLoading=!1})).catch((function(t){console.log(t),i.isLoading=!1}));case 3:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()},{key:"uploadFile",value:function(t){var e=this,a=this.$message({message:"Đang tải file lên",type:"success",duration:0});this.$message.close();var i=new FormData;"ready"===t.status&&(i.append("file",t.raw),i.append("name",t.name),i.append("type","PRODUCT"),this.productApi.uploadFile(i).then((function(){a.close(),e.$message.success("Tải lên thành công"),e.init()})).catch((function(i){i.data.length&&(a.close(),e.dataError=i.data,e.fileName=t.name,e.setOpenPopup({popupName:"popup-show-error",isOpen:!0})),a.close(),429===i.errorCode?e.$message.error("Không upload được file khi hệ thống đang cập nhật dữ liệu. Vui lòng thử lại sau ít phút"):e.$message.error("Tải lên thất bại")}))),this.isSpace=!1}},{key:"handleSearch",value:function(t){this.query.page=1,this.query.search=t,this.init()}},{key:"handleCommand",value:function(t){Object(p["forEach"])(this.option,(function(e){t.id===e.id?e.active=!0:e.active=!1})),this.query.sortType=t.sortType,this.init()}},{key:"created",value:function(){var t,e,a,i;this.form=this.user,this.productApi=Object(S["a"])("product",{districtId:null===(t=this.user)||void 0===t||null===(e=t.districts)||void 0===e?void 0:e[0].id}),this.apiImport=Object(S["a"])("import",{districtId:null===(a=this.user)||void 0===a||null===(i=a.districts)||void 0===i?void 0:i[0].id}),this.init()}}]),a}(Object(h["b"])(R["a"],T["a"]));Q=Object(d["a"])([Object(h["a"])({components:{SearchBar:k,FilterProgram:N,CreateProgram:q,PopupShowError:J}})],Q);var G=Q,W=G,X=(a("027c"),Object(y["a"])(W,i,r,!1,null,"67b1a866",null));e["default"]=X.exports},"2d01":function(t,e,a){"use strict";a("64bd")},"3b50":function(t,e,a){"use strict";a("0bcd")},"64bd":function(t,e,a){},6775:function(t,e,a){},"800c":function(t,e,a){},adf9:function(t,e,a){"use strict";a("800c")},b930:function(t,e,a){"use strict";a("0e96")}}]);
//# sourceMappingURL=chunk-bdcbf9ec.c61e5e7d.js.map