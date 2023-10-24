/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `* {\r\n    font-family: Inter;\r\n}\r\n\r\nbody {\r\n    margin: 0;\r\n    padding: 0;\r\n    background: #454545;\r\n    display: grid;\r\n    grid-template-columns: 1.5fr 8.5fr;\r\n    grid-template-rows: 1.4fr 7.3fr 1.3fr;\r\n\r\n    width: 100vw;\r\n    height: 100vh;\r\n}\r\n\r\nbutton {\r\n    padding: 0;\r\n}\r\n\r\nheader {\r\n    background: #474747;\r\n    box-shadow: 0px 7px 10px 0px rgba(0, 0, 0, 0.25);\r\n\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n\r\n    grid-row: 1 / 2;\r\n    grid-column: 1 / 3;\r\n    z-index: 1;\r\n}\r\n\r\n.header-text {\r\n    color: #D6D6D6;\r\n    font-family: Itim;\r\n    font-size: 80px;\r\n    font-style: normal;\r\n    font-weight: 400;\r\n    line-height: normal;\r\n}\r\n\r\n.project-section {\r\n    background: #595959;\r\n    box-shadow: 7px 0px 10px 0px rgba(0, 0, 0, 0.25);\r\n\r\n    grid-row: 2 / 3;\r\n    grid-column: 1 / 2;\r\n    padding: 27px;\r\n}\r\n\r\n.projects-text {\r\n    color: #FFF;\r\n    font-size: 35px;\r\n    font-style: normal;\r\n    font-weight: 700;\r\n    line-height: normal;\r\n}\r\n\r\n.projects {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 15px;\r\n}\r\n\r\n.projects-header {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    gap: 40px;\r\n}\r\n\r\nhr {\r\n    height: 3px;\r\n    border: none;\r\n    background: #D6D6D6;\r\n    margin-bottom: 20px;\r\n}\r\n\r\n.project {\r\n    display: flex;\r\n    filter: drop-shadow(0px 7px 4px rgba(0, 0, 0, 0.5));\r\n    background-color: #4B4343;\r\n    height: 40px;\r\n    border-radius: 10px;\r\n    display: grid;\r\n    grid-template-columns: 1fr 2.5fr;\r\n    align-items: center;\r\n    appearance: none;\r\n    border: none;\r\n    width: 100%;\r\n    cursor: pointer;\r\n    transition-duration: 0.05s;\r\n}\r\n\r\n.project:active {\r\n    transform: translateY(2px) scale(0.98);\r\n}\r\n\r\n.project-name {\r\n    color: #FFF;\r\n    text-align: center;\r\n    font-size: 30px;\r\n    font-style: normal;\r\n    font-weight: 500;\r\n    line-height: normal;\r\n    justify-self: left;\r\n}\r\n\r\n.indicator {\r\n    width: 25px;\r\n    height: 25px;\r\n    justify-self: center;\r\n}\r\n\r\n.todos {\r\n    display: grid;\r\n    grid-template-columns: repeat(4, 250px);\r\n    gap: 60px;\r\n    padding-top: 24px;\r\n    padding-left: 40px;\r\n    overflow: scroll;\r\n    -ms-overflow-style: none;\r\n    scrollbar-width: none;\r\n}\r\n\r\n.todos::-webkit-scrollbar {\r\n    display: none;\r\n}\r\n\r\n.todo {\r\n    width: 250px;\r\n    height: 320px;\r\n    border-radius: 15px;\r\n    background: #D6D6D6;\r\n    box-shadow: 5px 5px 25px 3px rgba(255, 255, 255, 0.25);\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: space-between;\r\n    transition-duration: 0.5s;\r\n    margin-bottom: 30px;\r\n}\r\n\r\n.todo:hover, .new-todo:hover {\r\n    transform: translateX(5px);\r\n    box-shadow: 5px 5px 10px 3px rgba(255, 255, 255, 0.25);\r\n}\r\n\r\n.new-todo {\r\n    box-sizing: border-box;\r\n    width: 250px;\r\n    height: 320px;\r\n    border-radius: 15px;\r\n    border: 10px solid #D6D6D6;\r\n    background: rgba(217, 217, 217, 0.10);\r\n    box-shadow: 5px 5px 25px 3px rgba(255, 255, 255, 0.25);\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    transition-duration: 0.5s;\r\n    transition-property: box-shadow, transform;\r\n    cursor: pointer;\r\n}\r\n\r\n.new-todo:active {\r\n    background-color: #606060;\r\n}\r\n\r\n.todo-actions > button:active, #add-project:active, .project-button:active {\r\n    transform: translateY(2px) scale(0.98);\r\n}\r\n\r\n#add-project {\r\n    background: none;\r\n    appearance: none;\r\n    border: none;\r\n    transition-duration: 0.2s;\r\n}\r\n\r\n.todo-title {\r\n    color: #1A1818;\r\n    font-size: 30px;\r\n    font-style: normal;\r\n    font-weight: 700;\r\n    line-height: normal;\r\n    text-align: center;\r\n}\r\n\r\n.todo-description {\r\n    color: #1A1818;\r\n    text-align: center;\r\n    font-size: 20px;\r\n    font-style: normal;\r\n    font-weight: 500;\r\n    line-height: normal;\r\n}\r\n\r\n.todo-dueDate {\r\n    color: #1A1818;\r\n    text-align: center;\r\n    font-size: 22px;\r\n    font-style: normal;\r\n    font-weight: 500;\r\n    line-height: normal;\r\n    border: 2.5px solid #1A1818;\r\n    border-radius: 10px;\r\n    width: 163px;\r\n}\r\n\r\n.todo-actions > button {\r\n    cursor: pointer;\r\n    transition-duration: 0.2s;\r\n    transition-property: transform;\r\n}\r\n\r\n.todo-delete, .todo-done {\r\n    appearance: none;\r\n    border: none;\r\n    background: none;\r\n    margin-top: 4px;\r\n}\r\n\r\n.todo-priority {\r\n    width: 130px;\r\n    height: 41px;\r\n    color: #C6B62C;\r\n    text-align: center;\r\n    font-size: 22px;\r\n    font-style: normal;\r\n    font-weight: 700;\r\n    line-height: normal;\r\n    border-radius: 10px;\r\n    border: 3px solid #1A1818;\r\n    background: #1A1818;\r\n    box-shadow: 4px 4px 4px 0px rgba(0, 0, 0, 0.25);\r\n}\r\n\r\n.todo-title {\r\n    margin-top: 40px;\r\n}\r\n\r\n.todo-date {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    gap: 10px;\r\n}\r\n\r\n.todo-actions {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    gap: 10px;\r\n    margin-bottom: 8px;\r\n}\r\n\r\n.todo-add {\r\n    background: none;\r\n    border: none;\r\n    appearance: none;\r\n}\r\n\r\nfooter {\r\n    background: #474747;\r\n    box-shadow: 0px -7px 10px 0px rgba(0, 0, 0, 0.25);\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    gap: 11.62px;\r\n    grid-row: 3 / 4;\r\n    grid-column: 1 / 3;\r\n    z-index: 1;\r\n}\r\n\r\n.footer-text {\r\n    color: #D6D6D6;\r\n    font-size: 24px;\r\n    font-style: normal;\r\n    font-weight: 600;\r\n    line-height: normal;\r\n}\r\n\r\n#author {\r\n    color: #D6D6D6;\r\n    font-size: 24px;\r\n    font-style: normal;\r\n    font-weight: 800;\r\n    line-height: normal;\r\n}\r\n\r\n#github-icon {\r\n    width: 63px;\r\n    height: 62px;\r\n    transition-duration: 0.8s;\r\n    transition-property: all ease-in-out;\r\n}\r\n\r\n#github-icon:hover {\r\n    transform: rotate(-360deg);\r\n}\r\n\r\n.project-modal, .todo-modal {\r\n    border: 3px solid rgb(235, 235, 235);\r\n    border-radius: 10px;\r\n    background-color: #666464;\r\n    box-shadow: 5px 5px 20px 0px rgba(255, 255, 255, 0.25);\r\n}\r\n\r\n.modal-container {\r\n    margin: 7px;\r\n    border: none;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n    color: #D6D6D6;\r\n    gap: 20px;\r\n}\r\n\r\n.project-button {\r\n    width: 150px;\r\n    height: 50px;\r\n    appearance: none;\r\n    border: none;\r\n    border-bottom: 3px solid #4a4343;;\r\n    font-size: 1.8rem;\r\n    cursor: pointer;\r\n    color: #FFF;\r\n    transition-duration: 0.01s;\r\n    background-color: transparent;\r\n}\r\n\r\n.project-button:hover {\r\n    background-color: #565252;\r\n}\r\n\r\n.project-modal > h1 {\r\n    margin-bottom: 0;\r\n}\r\n\r\n.project-modal > h2 {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    gap: 20px;\r\n    font-size: 1.6rem;\r\n}\r\n\r\nh2 > input {\r\n    appearance: none;\r\n    border: none;\r\n    width: 130px;\r\n    height: 30px;\r\n    padding-left: 8px;\r\n    background-color: #6a6868;\r\n    border-bottom: 3px solid #1A1818;\r\n    color: white;\r\n    font-size: 1.3rem;\r\n}\r\n\r\nh2 > input::placeholder {\r\n    color:#928888;\r\n}\r\n\r\nh2 > input:focus {\r\n    outline: none;\r\n}\r\n\r\n.project-buttons {\r\n    display: flex;\r\n    gap: 30px;\r\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://odin-todo/./src/styles.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://odin-todo/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://odin-todo/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://odin-todo/./src/styles.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://odin-todo/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://odin-todo/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://odin-todo/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://odin-todo/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://odin-todo/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://odin-todo/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/dom.js":
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   listProjects: () => (/* binding */ listProjects),\n/* harmony export */   listTodos: () => (/* binding */ listTodos)\n/* harmony export */ });\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.js */ \"./src/index.js\");\n/* harmony import */ var _svgs_Ellipse_1_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./svgs/Ellipse 1.svg */ \"./src/svgs/Ellipse 1.svg\");\n/* harmony import */ var _svgs_calendar_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./svgs/calendar.svg */ \"./src/svgs/calendar.svg\");\n/* harmony import */ var _svgs_Close_Circle_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./svgs/Close Circle.svg */ \"./src/svgs/Close Circle.svg\");\n/* harmony import */ var _svgs_Check_Circle_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./svgs/Check Circle.svg */ \"./src/svgs/Check Circle.svg\");\n/* harmony import */ var _svgs_todo_image_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./svgs/todo image.svg */ \"./src/svgs/todo image.svg\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nconst projectModal = document.querySelector(\".project-modal\");\r\nconst todoModal = document.querySelector(\".todo-modal\");\r\nconst projectModalButton = document.querySelector(\"#add-project\");\r\nconst projectsDiv = document.querySelector(\".projects\");\r\n\r\nconst projectForm = document.querySelector(\"#form-project\");\r\nconst todoForm = document.querySelector(\"#form-todo\");\r\n\r\n\r\nprojectForm.addEventListener(\"submit\", e => {\r\n    e.preventDefault();\r\n\r\n    //Creating new Project with the given title\r\n    const formData = new FormData(projectForm);\r\n    (0,_index_js__WEBPACK_IMPORTED_MODULE_1__.createProject)(formData.get(\"title\"));\r\n\r\n    projectForm.reset();\r\n    listProjects();\r\n    projectModal.close();\r\n});\r\n\r\n\r\nprojectModalButton.addEventListener(\"click\", () => {\r\n    projectModal.showModal();\r\n});\r\n\r\nfunction listProjects() {\r\n    projectsDiv.innerHTML = \"\";\r\n    _index_js__WEBPACK_IMPORTED_MODULE_1__.projects.forEach(project => {\r\n        const newProject = document.createElement(\"button\");\r\n        newProject.classList.add(\"project\");\r\n\r\n        const indicator = document.createElement(\"img\");\r\n        indicator.classList.add(\"indicator\");\r\n        indicator.setAttribute(\"src\", _svgs_Ellipse_1_svg__WEBPACK_IMPORTED_MODULE_2__);\r\n\r\n        const projectName = document.createElement(\"div\");\r\n        projectName.classList.add(\"project-name\");\r\n        projectName.textContent = project.name;\r\n\r\n        newProject.appendChild(indicator);\r\n        newProject.appendChild(projectName);\r\n\r\n        projectsDiv.appendChild(newProject);\r\n    });\r\n};\r\n\r\nfunction listTodos(project) {\r\n    const todosDiv = document.querySelector(\".todos\");\r\n    todosDiv.innerHTML = \"\";\r\n\r\n    project.todos.forEach(todo => {\r\n        const todoDiv = document.createElement(\"div\");\r\n        todoDiv.classList.add(\"todo\");\r\n\r\n        const todoTitle = document.createElement(\"div\");\r\n        todoTitle.classList.add(\"todo-title\");\r\n        todoTitle.textContent = todo.getTitle();\r\n\r\n        const todoDescription = document.createElement(\"div\");\r\n        todoDescription.classList.add(\"todo-description\");\r\n        todoDescription.textContent = todo.getDescription();\r\n\r\n        const todoDate = document.createElement(\"div\");\r\n        todoDate.classList.add(\"todo-date\");\r\n\r\n        const dateImage = document.createElement(\"img\");\r\n        dateImage.setAttribute(\"src\", _svgs_calendar_svg__WEBPACK_IMPORTED_MODULE_3__);\r\n\r\n        const todoDueDate = document.createElement(\"div\");\r\n        todoDueDate.classList.add(\"todo-dueDate\");\r\n        todoDueDate.textContent = todo.getDueDate();\r\n\r\n        const todoActions = document.createElement(\"div\");\r\n        todoActions.classList.add(\"todo-actions\");\r\n\r\n        const todoDeleteButton = document.createElement(\"button\");\r\n        todoDeleteButton.classList.add(\"todo-delete\");\r\n\r\n        const deleteIcon = document.createElement(\"img\");\r\n        deleteIcon.setAttribute(\"src\", _svgs_Close_Circle_svg__WEBPACK_IMPORTED_MODULE_4__);\r\n\r\n        const todoPriorityButton = document.createElement(\"button\");\r\n        todoPriorityButton.classList.add(\"todo-priority\");\r\n        todoPriorityButton.textContent = todo.getPriority();\r\n\r\n        const todoDoneButton = document.createElement(\"button\");\r\n        todoDoneButton.classList.add(\"todo-done\");\r\n\r\n        const doneIcon = document.createElement(\"img\");\r\n        doneIcon.setAttribute(\"src\", _svgs_Check_Circle_svg__WEBPACK_IMPORTED_MODULE_5__);\r\n\r\n        todoDiv.appendChild(todoTitle);\r\n        todoDiv.appendChild(todoDescription);\r\n        todoDiv.appendChild(todoDate);\r\n        todoDate.appendChild(dateImage);\r\n        todoDate.appendChild(todoDueDate);\r\n        todoDiv.appendChild(todoActions);\r\n        todoActions.appendChild(todoDeleteButton);\r\n        todoDeleteButton.appendChild(deleteIcon);\r\n        todoActions.appendChild(todoPriorityButton);\r\n        todoActions.appendChild(todoDoneButton);\r\n        todoDoneButton.appendChild(doneIcon);\r\n\r\n        todosDiv.appendChild(todoDiv);\r\n\r\n    });\r\n    const newTodo = document.createElement(\"button\");\r\n    newTodo.classList.add(\"new-todo\");\r\n    const newTodoImage = document.createElement(\"img\");\r\n    newTodoImage.setAttribute(\"src\", _svgs_todo_image_svg__WEBPACK_IMPORTED_MODULE_6__);\r\n\r\n    newTodo.appendChild(newTodoImage);\r\n    todosDiv.appendChild(newTodo);\r\n\r\n    newTodo.addEventListener(\"click\", () => {\r\n        todoModal.showModal();\r\n    });\r\n}\r\n\r\n\n\n//# sourceURL=webpack://odin-todo/./src/dom.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createProject: () => (/* binding */ createProject),\n/* harmony export */   projects: () => (/* binding */ projects)\n/* harmony export */ });\n/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom */ \"./src/dom.js\");\n\r\n \r\nlet projects = [];\r\n(0,_dom__WEBPACK_IMPORTED_MODULE_0__.listProjects)();\r\n\r\nconst todo = (title, description, dueDate, priority, finished) => {\r\n    const done = () => {\r\n        finished = true;\r\n    };\r\n\r\n    const changePriority = () => {\r\n        if (priority === \"Low\") {\r\n            priority = \"Medium\";\r\n        } else if (priority === \"Medium\") {\r\n            priority = \"High\"\r\n        } else {\r\n            priority = \"Low\";\r\n        }\r\n    };\r\n    \r\n    const isFinished = () => {\r\n        return finished;\r\n    };\r\n\r\n    const getPriority = () => {\r\n        return priority;\r\n    };\r\n\r\n    const getTitle = () => {\r\n        return title;\r\n    };\r\n\r\n    const getDescription = () => {\r\n        return description;\r\n    };\r\n\r\n    const getDueDate = () => {\r\n        return dueDate;\r\n    };\r\n\r\n    return {done, changePriority, isFinished, getPriority, getTitle, getDescription, getDueDate};\r\n};\r\n\r\nconst project = (name) => {\r\n    const todos = [];\r\n\r\n    const addTodo = newTodo => {\r\n        todos.push(newTodo);\r\n    };\r\n    return {name, todos, addTodo};\r\n};\r\n\r\nfunction createProject(title){\r\n    projects.push(project(title));\r\n}\r\n\r\n\n\n//# sourceURL=webpack://odin-todo/./src/index.js?");

/***/ }),

/***/ "./src/svgs/Check Circle.svg":
/*!***********************************!*\
  !*** ./src/svgs/Check Circle.svg ***!
  \***********************************/
/***/ ((module) => {

eval("module.exports = \"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgaWQ9IkxpbmVhciAvIEVzc2VudGlvbmFsLCBVSSAvIENoZWNrIENpcmNsZSI+CjxwYXRoIGlkPSJWZWN0b3IiIGQ9Ik0yMCAzNi42NjY3QzI5LjIwNDcgMzYuNjY2NyAzNi42NjY3IDI5LjIwNDcgMzYuNjY2NyAyMEMzNi42NjY3IDEwLjc5NTIgMjkuMjA0NyAzLjMzMzMzIDIwIDMuMzMzMzNDMTAuNzk1MiAzLjMzMzMzIDMuMzMzMzMgMTAuNzk1MiAzLjMzMzMzIDIwQzMuMzMzMzMgMjkuMjA0NyAxMC43OTUyIDM2LjY2NjcgMjAgMzYuNjY2N1oiIHN0cm9rZT0iIzFBMTgxOCIgc3Ryb2tlLXdpZHRoPSIzIi8+CjxwYXRoIGlkPSJWZWN0b3JfMiIgZD0iTTE0LjE2NjcgMjAuODMzM0wxNy41IDI0LjE2NjdMMjUuODMzMyAxNS44MzMzIiBzdHJva2U9IiMxQTE4MTgiIHN0cm9rZS13aWR0aD0iMyIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjwvZz4KPC9zdmc+Cg==\";\n\n//# sourceURL=webpack://odin-todo/./src/svgs/Check_Circle.svg?");

/***/ }),

/***/ "./src/svgs/Close Circle.svg":
/*!***********************************!*\
  !*** ./src/svgs/Close Circle.svg ***!
  \***********************************/
/***/ ((module) => {

eval("module.exports = \"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgaWQ9IkxpbmVhciAvIEVzc2VudGlvbmFsLCBVSSAvIENsb3NlIENpcmNsZSI+CjxwYXRoIGlkPSJWZWN0b3IiIGQ9Ik0yMCAzNi42NjY3QzI5LjIwNDggMzYuNjY2NyAzNi42NjY3IDI5LjIwNDcgMzYuNjY2NyAyMEMzNi42NjY3IDEwLjc5NTIgMjkuMjA0OCAzLjMzMzMzIDIwIDMuMzMzMzNDMTAuNzk1MyAzLjMzMzMzIDMuMzMzMzQgMTAuNzk1MiAzLjMzMzM0IDIwQzMuMzMzMzQgMjkuMjA0NyAxMC43OTUzIDM2LjY2NjcgMjAgMzYuNjY2N1oiIHN0cm9rZT0iIzFBMTgxOCIgc3Ryb2tlLXdpZHRoPSIzIi8+CjxwYXRoIGlkPSJWZWN0b3JfMiIgZD0iTTI0LjE2NjcgMTUuODMzNEwxNS44MzMzIDI0LjE2NjdNMTUuODMzMyAxNS44MzMzTDI0LjE2NjcgMjQuMTY2NyIgc3Ryb2tlPSIjMUExODE4IiBzdHJva2Utd2lkdGg9IjMiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPgo8L2c+Cjwvc3ZnPgo=\";\n\n//# sourceURL=webpack://odin-todo/./src/svgs/Close_Circle.svg?");

/***/ }),

/***/ "./src/svgs/Ellipse 1.svg":
/*!********************************!*\
  !*** ./src/svgs/Ellipse 1.svg ***!
  \********************************/
/***/ ((module) => {

eval("module.exports = \"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjUiIGhlaWdodD0iMjUiIHZpZXdCb3g9IjAgMCAyNSAyNSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBpZD0iRWxsaXBzZSAxIiBjeD0iMTIuNSIgY3k9IjEyLjUiIHI9IjEyLjUiIGZpbGw9IiMzN0NBQTciLz4KPC9zdmc+Cg==\";\n\n//# sourceURL=webpack://odin-todo/./src/svgs/Ellipse_1.svg?");

/***/ }),

/***/ "./src/svgs/calendar.svg":
/*!*******************************!*\
  !*** ./src/svgs/calendar.svg ***!
  \*******************************/
/***/ ((module) => {

eval("module.exports = \"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzMiIGhlaWdodD0iMzciIHZpZXdCb3g9IjAgMCAzMyAzNyIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgaWQ9IiYjMjQwOyYjMTU5OyYjMTY2OyYjMTM0OyBpY29uICYjMzQ7Y2FsZW5kYXIgMSYjMzQ7Ij4KPGcgaWQ9Ikdyb3VwIj4KPHBhdGggaWQ9IlZlY3RvciIgZD0iTTkuNzMwNzggNy42MTUzOEM5LjAzNjkzIDcuNjE1MzggOC40NjE1NSA3LjA0IDguNDYxNTUgNi4zNDYxNVYxLjI2OTIzQzguNDYxNTUgMC41NzUzODUgOS4wMzY5MyAwIDkuNzMwNzggMEMxMC40MjQ2IDAgMTEgMC41NzUzODUgMTEgMS4yNjkyM1Y2LjM0NjE1QzExIDcuMDQgMTAuNDI0NiA3LjYxNTM4IDkuNzMwNzggNy42MTUzOFoiIGZpbGw9IiMxQTE4MTgiLz4KPHBhdGggaWQ9IlZlY3Rvcl8yIiBkPSJNMjMuMjY5MiA3LjYxNTM4QzIyLjU3NTQgNy42MTUzOCAyMiA3LjA0IDIyIDYuMzQ2MTVWMS4yNjkyM0MyMiAwLjU3NTM4NSAyMi41NzU0IDAgMjMuMjY5MiAwQzIzLjk2MzEgMCAyNC41Mzg1IDAuNTc1Mzg1IDI0LjUzODUgMS4yNjkyM1Y2LjM0NjE1QzI0LjUzODUgNy4wNCAyMy45NjMxIDcuNjE1MzggMjMuMjY5MiA3LjYxNTM4WiIgZmlsbD0iIzFBMTgxOCIvPgo8cGF0aCBpZD0iVmVjdG9yXzMiIGQ9Ik0xMC41NzY5IDIyLjQyMzNDMTAuMzU2OSAyMi40MjMzIDEwLjEzNjkgMjIuMzcyNSA5LjkzMzg0IDIyLjI4NzlDOS43MTM4NCAyMi4yMDMzIDkuNTQ0NjEgMjIuMDg0OCA5LjM3NTM4IDIxLjkzMjVDOS4wNzA3NyAyMS42MTA5IDguODg0NjEgMjEuMTg3OSA4Ljg4NDYxIDIwLjczMDlDOC44ODQ2MSAyMC41MTA5IDguOTM1MzggMjAuMjkwOSA5LjAyIDIwLjA4NzlDOS4xMDQ2MSAxOS44ODQ4IDkuMjIzMDcgMTkuNjk4NiA5LjM3NTM4IDE5LjUyOTRDOS41NDQ2MSAxOS4zNzcxIDkuNzEzODQgMTkuMjU4NiA5LjkzMzg0IDE5LjE3NEMxMC41NDMxIDE4LjkyMDIgMTEuMzA0NiAxOS4wNTU2IDExLjc3ODUgMTkuNTI5NEMxMi4wODMxIDE5Ljg1MDkgMTIuMjY5MiAyMC4yOTA5IDEyLjI2OTIgMjAuNzMwOUMxMi4yNjkyIDIwLjgzMjUgMTIuMjUyMyAyMC45NTA5IDEyLjIzNTQgMjEuMDY5NEMxMi4yMTg1IDIxLjE3MDkgMTIuMTg0NiAyMS4yNzI1IDEyLjEzMzggMjEuMzc0QzEyLjEgMjEuNDc1NiAxMi4wNDkyIDIxLjU3NzEgMTEuOTgxNSAyMS42Nzg2QzExLjkzMDggMjEuNzYzMyAxMS44NDYyIDIxLjg0NzkgMTEuNzc4NSAyMS45MzI1QzExLjQ1NjkgMjIuMjM3MSAxMS4wMTY5IDIyLjQyMzMgMTAuNTc2OSAyMi40MjMzWiIgZmlsbD0iIzFBMTgxOCIvPgo8cGF0aCBpZD0iVmVjdG9yXzQiIGQ9Ik0xNi41IDIyLjQyMjlDMTYuMjggMjIuNDIyOSAxNi4wNiAyMi4zNzIxIDE1Ljg1NjkgMjIuMjg3NUMxNS42MzY5IDIyLjIwMjkgMTUuNDY3NyAyMi4wODQ0IDE1LjI5ODUgMjEuOTMyMUMxNC45OTM5IDIxLjYxMDYgMTQuODA3NyAyMS4xODc1IDE0LjgwNzcgMjAuNzMwNkMxNC44MDc3IDIwLjUxMDYgMTQuODU4NSAyMC4yOTA2IDE0Ljk0MzEgMjAuMDg3NUMxNS4wMjc3IDE5Ljg4NDQgMTUuMTQ2MiAxOS42OTgzIDE1LjI5ODUgMTkuNTI5MUMxNS40Njc3IDE5LjM3NjcgMTUuNjM2OSAxOS4yNTgzIDE1Ljg1NjkgMTkuMTczN0MxNi40NjYyIDE4LjkwMjkgMTcuMjI3NyAxOS4wNTUyIDE3LjcwMTYgMTkuNTI5MUMxOC4wMDYyIDE5Ljg1MDYgMTguMTkyMyAyMC4yOTA2IDE4LjE5MjMgMjAuNzMwNkMxOC4xOTIzIDIwLjgzMjEgMTguMTc1NCAyMC45NTA2IDE4LjE1ODUgMjEuMDY5MUMxOC4xNDE2IDIxLjE3MDYgMTguMTA3NyAyMS4yNzIxIDE4LjA1NjkgMjEuMzczN0MxOC4wMjMxIDIxLjQ3NTIgMTcuOTcyMyAyMS41NzY4IDE3LjkwNDYgMjEuNjc4M0MxNy44NTM5IDIxLjc2MjkgMTcuNzY5MiAyMS44NDc1IDE3LjcwMTYgMjEuOTMyMUMxNy4zOCAyMi4yMzY4IDE2Ljk0IDIyLjQyMjkgMTYuNSAyMi40MjI5WiIgZmlsbD0iIzFBMTgxOCIvPgo8cGF0aCBpZD0iVmVjdG9yXzUiIGQ9Ik0yMi40MjMxIDIyLjQyMjlDMjIuMjAzMSAyMi40MjI5IDIxLjk4MzEgMjIuMzcyMSAyMS43OCAyMi4yODc1QzIxLjU2IDIyLjIwMjkgMjEuMzkwOCAyMi4wODQ0IDIxLjIyMTUgMjEuOTMyMUMyMS4xNTM5IDIxLjg0NzUgMjEuMDg2MiAyMS43NjI5IDIxLjAxODUgMjEuNjc4M0MyMC45NTA4IDIxLjU3NjggMjAuOSAyMS40NzUyIDIwLjg2NjIgMjEuMzczN0MyMC44MTU0IDIxLjI3MjEgMjAuNzgxNSAyMS4xNzA2IDIwLjc2NDYgMjEuMDY5MUMyMC43NDc3IDIwLjk1MDYgMjAuNzMwOCAyMC44MzIxIDIwLjczMDggMjAuNzMwNkMyMC43MzA4IDIwLjI5MDYgMjAuOTE2OSAxOS44NTA2IDIxLjIyMTUgMTkuNTI5MUMyMS4zOTA4IDE5LjM3NjcgMjEuNTYgMTkuMjU4MyAyMS43OCAxOS4xNzM3QzIyLjQwNjIgMTguOTAyOSAyMy4xNTA4IDE5LjA1NTIgMjMuNjI0NiAxOS41MjkxQzIzLjkyOTIgMTkuODUwNiAyNC4xMTU0IDIwLjI5MDYgMjQuMTE1NCAyMC43MzA2QzI0LjExNTQgMjAuODMyMSAyNC4wOTg1IDIwLjk1MDYgMjQuMDgxNSAyMS4wNjkxQzI0LjA2NDYgMjEuMTcwNiAyNC4wMzA4IDIxLjI3MjEgMjMuOTggMjEuMzczN0MyMy45NDYyIDIxLjQ3NTIgMjMuODk1NCAyMS41NzY4IDIzLjgyNzcgMjEuNjc4M0MyMy43NzY5IDIxLjc2MjkgMjMuNjkyMyAyMS44NDc1IDIzLjYyNDYgMjEuOTMyMUMyMy4zMDMxIDIyLjIzNjggMjIuODYzMSAyMi40MjI5IDIyLjQyMzEgMjIuNDIyOVoiIGZpbGw9IiMxQTE4MTgiLz4KPHBhdGggaWQ9IlZlY3Rvcl82IiBkPSJNMTAuNTc2OSAyOC4zNDZDMTAuMzU2OSAyOC4zNDYgMTAuMTM2OSAyOC4yOTU0IDkuOTMzODQgMjguMjEwOEM5LjczMDc3IDI4LjEyNjEgOS41NDQ2MSAyOC4wMDc1IDkuMzc1MzggMjcuODU1MkM5LjA3MDc3IDI3LjUzMzcgOC44ODQ2MSAyNy4wOTM3IDguODg0NjEgMjYuNjUzN0M4Ljg4NDYxIDI2LjQzMzcgOC45MzUzOCAyNi4yMTM3IDkuMDIgMjYuMDEwNkM5LjEwNDYxIDI1Ljc5MDYgOS4yMjMwNyAyNS42MDQ2IDkuMzc1MzggMjUuNDUyM0MxMC4wMDE1IDI0LjgyNjEgMTEuMTUyMyAyNC44MjYxIDExLjc3ODUgMjUuNDUyM0MxMi4wODMxIDI1Ljc3MzggMTIuMjY5MiAyNi4yMTM3IDEyLjI2OTIgMjYuNjUzN0MxMi4yNjkyIDI3LjA5MzcgMTIuMDgzMSAyNy41MzM3IDExLjc3ODUgMjcuODU1MkMxMS40NTY5IDI4LjE1OTggMTEuMDE2OSAyOC4zNDYgMTAuNTc2OSAyOC4zNDZaIiBmaWxsPSIjMUExODE4Ii8+CjxwYXRoIGlkPSJWZWN0b3JfNyIgZD0iTTE2LjUgMjguMzQ2QzE2LjA2IDI4LjM0NiAxNS42MiAyOC4xNTk4IDE1LjI5ODUgMjcuODU1MkMxNC45OTM5IDI3LjUzMzcgMTQuODA3NyAyNy4wOTM3IDE0LjgwNzcgMjYuNjUzN0MxNC44MDc3IDI2LjQzMzcgMTQuODU4NSAyNi4yMTM3IDE0Ljk0MzEgMjYuMDEwNkMxNS4wMjc3IDI1Ljc5MDYgMTUuMTQ2MiAyNS42MDQ2IDE1LjI5ODUgMjUuNDUyM0MxNS45MjQ2IDI0LjgyNjEgMTcuMDc1NCAyNC44MjYxIDE3LjcwMTYgMjUuNDUyM0MxNy44NTM5IDI1LjYwNDYgMTcuOTcyMyAyNS43OTA2IDE4LjA1NjkgMjYuMDEwNkMxOC4xNDE2IDI2LjIxMzcgMTguMTkyMyAyNi40MzM3IDE4LjE5MjMgMjYuNjUzN0MxOC4xOTIzIDI3LjA5MzcgMTguMDA2MiAyNy41MzM3IDE3LjcwMTYgMjcuODU1MkMxNy4zOCAyOC4xNTk4IDE2Ljk0IDI4LjM0NiAxNi41IDI4LjM0NloiIGZpbGw9IiMxQTE4MTgiLz4KPHBhdGggaWQ9IlZlY3Rvcl84IiBkPSJNMjIuNDIzMSAyOC4zNDZDMjEuOTgzMSAyOC4zNDYgMjEuNTQzMSAyOC4xNTk4IDIxLjIyMTUgMjcuODU1MkMyMS4wNjkyIDI3LjcwMjkgMjAuOTUwOCAyNy41MTY4IDIwLjg2NjIgMjcuMjk2OEMyMC43ODE1IDI3LjA5MzcgMjAuNzMwOCAyNi44NzM3IDIwLjczMDggMjYuNjUzN0MyMC43MzA4IDI2LjQzMzcgMjAuNzgxNSAyNi4yMTM3IDIwLjg2NjIgMjYuMDEwNkMyMC45NTA4IDI1Ljc5MDYgMjEuMDY5MiAyNS42MDQ0IDIxLjIyMTUgMjUuNDUyMUMyMS42MTA4IDI1LjA2MjkgMjIuMjAzMSAyNC44NzY4IDIyLjc0NDYgMjQuOTk1MkMyMi44NjMxIDI1LjAxMjEgMjIuOTY0NiAyNS4wNDYgMjMuMDY2MiAyNS4wOTY4QzIzLjE2NzcgMjUuMTMwNiAyMy4yNjkyIDI1LjE4MTQgMjMuMzcwOCAyNS4yNDkxQzIzLjQ1NTQgMjUuMjk5OCAyMy41NCAyNS4zODQ0IDIzLjYyNDYgMjUuNDUyMUMyMy45MjkyIDI1Ljc3MzcgMjQuMTE1NCAyNi4yMTM3IDI0LjExNTQgMjYuNjUzN0MyNC4xMTU0IDI3LjA5MzcgMjMuOTI5MiAyNy41MzM3IDIzLjYyNDYgMjcuODU1MkMyMy4zMDMxIDI4LjE1OTggMjIuODYzMSAyOC4zNDYgMjIuNDIzMSAyOC4zNDZaIiBmaWxsPSIjMUExODE4Ii8+CjxwYXRoIGlkPSJWZWN0b3JfOSIgZD0iTTMwLjg4NDYgMTQuNTM2N0gyLjExNTM5QzEuNDIxNTUgMTQuNTM2NyAwLjg0NjE2MSAxMy45NjEzIDAuODQ2MTYxIDEzLjI2NzRDMC44NDYxNjEgMTIuNTczNiAxLjQyMTU1IDExLjk5ODIgMi4xMTUzOSAxMS45OTgySDMwLjg4NDZDMzEuNTc4NSAxMS45OTgyIDMyLjE1MzkgMTIuNTczNiAzMi4xNTM5IDEzLjI2NzRDMzIuMTUzOSAxMy45NjEzIDMxLjU3ODUgMTQuNTM2NyAzMC44ODQ2IDE0LjUzNjdaIiBmaWxsPSIjMUExODE4Ii8+CjxwYXRoIGlkPSJWZWN0b3JfMTAiIGQ9Ik0yMy4yNjkyIDM2LjM4NDZIOS43MzA3N0MzLjU1Mzg1IDM2LjM4NDYgMCAzMi44MzA4IDAgMjYuNjUzOFYxMi4yNjkyQzAgNi4wOTIzMSAzLjU1Mzg1IDIuNTM4NDYgOS43MzA3NyAyLjUzODQ2SDIzLjI2OTJDMjkuNDQ2MiAyLjUzODQ2IDMzIDYuMDkyMzEgMzMgMTIuMjY5MlYyNi42NTM4QzMzIDMyLjgzMDggMjkuNDQ2MiAzNi4zODQ2IDIzLjI2OTIgMzYuMzg0NlpNOS43MzA3NyA1LjA3NjkyQzQuODkwNzcgNS4wNzY5MiAyLjUzODQ2IDcuNDI5MjMgMi41Mzg0NiAxMi4yNjkyVjI2LjY1MzhDMi41Mzg0NiAzMS40OTM4IDQuODkwNzcgMzMuODQ2MSA5LjczMDc3IDMzLjg0NjFIMjMuMjY5MkMyOC4xMDkyIDMzLjg0NjEgMzAuNDYxNSAzMS40OTM4IDMwLjQ2MTUgMjYuNjUzOFYxMi4yNjkyQzMwLjQ2MTUgNy40MjkyMyAyOC4xMDkyIDUuMDc2OTIgMjMuMjY5MiA1LjA3NjkySDkuNzMwNzdaIiBmaWxsPSIjMUExODE4Ii8+CjwvZz4KPC9nPgo8L3N2Zz4K\";\n\n//# sourceURL=webpack://odin-todo/./src/svgs/calendar.svg?");

/***/ }),

/***/ "./src/svgs/todo image.svg":
/*!*********************************!*\
  !*** ./src/svgs/todo image.svg ***!
  \*********************************/
/***/ ((module) => {

eval("module.exports = \"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIzIiBoZWlnaHQ9IjEyMyIgdmlld0JveD0iMCAwIDEyMyAxMjMiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxnIGlkPSImIzI0MDsmIzE1OTsmIzE2NjsmIzEzNDsgaWNvbiAmIzM0O2FkZCYjMzQ7Ij4KPGcgaWQ9Ikdyb3VwIj4KPHBhdGggaWQ9IlZlY3RvciIgZD0iTTExNS40MDkgNjcuODg3Nkg2Ljc4ODc2QzMuMDc3NTcgNjcuODg3NiAwIDY0LjgxIDAgNjEuMDk4OUMwIDU3LjM4NzcgMy4wNzc1NyA1NC4zMTAxIDYuNzg4NzYgNTQuMzEwMUgxMTUuNDA5QzExOS4xMiA1NC4zMTAxIDEyMi4xOTggNTcuMzg3NyAxMjIuMTk4IDYxLjA5ODlDMTIyLjE5OCA2NC44MSAxMTkuMTIgNjcuODg3NiAxMTUuNDA5IDY3Ljg4NzZaIiBmaWxsPSIjRDZENkQ2Ii8+CjxwYXRoIGlkPSJWZWN0b3JfMiIgZD0iTTYxLjA5ODkgMTIyLjE5OEM1Ny4zODc3IDEyMi4xOTggNTQuMzEwMSAxMTkuMTIgNTQuMzEwMSAxMTUuNDA5VjYuNzg4NzZDNTQuMzEwMSAzLjA3NzU3IDU3LjM4NzcgMCA2MS4wOTg5IDBDNjQuODEgMCA2Ny44ODc2IDMuMDc3NTcgNjcuODg3NiA2Ljc4ODc2VjExNS40MDlDNjcuODg3NiAxMTkuMTIgNjQuODEgMTIyLjE5OCA2MS4wOTg5IDEyMi4xOThaIiBmaWxsPSIjRDZENkQ2Ii8+CjwvZz4KPC9nPgo8L3N2Zz4K\";\n\n//# sourceURL=webpack://odin-todo/./src/svgs/todo_image.svg?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;