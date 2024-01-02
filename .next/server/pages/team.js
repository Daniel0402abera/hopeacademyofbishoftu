"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/team";
exports.ids = ["pages/team"];
exports.modules = {

/***/ "./pages/api/useGetData.js":
/*!*********************************!*\
  !*** ./pages/api/useGetData.js ***!
  \*********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-query */ \"react-query\");\n/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_query__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"axios\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_1__]);\naxios__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\nconst fetchData = async endpoint => {\n  const config = {\n    headers: {// Authorization: `Bearer ${token}`,\n    }\n  };\n\n  try {\n    const response = await axios__WEBPACK_IMPORTED_MODULE_1__[\"default\"].get(endpoint, config);\n    return response.data;\n  } catch (error) {\n    throw new Error(`Failed to fetch data from the ${endpoint}.`);\n  }\n};\n\nconst useGetData = endpoint => {\n  return (0,react_query__WEBPACK_IMPORTED_MODULE_0__.useQuery)([endpoint], () => fetchData(endpoint));\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useGetData);\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hcGkvdXNlR2V0RGF0YS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQSxNQUFNRSxTQUFTLEdBQUcsTUFBT0MsUUFBUCxJQUFvQjtFQUVwQyxNQUFNQyxNQUFNLEdBQUc7SUFDYkMsT0FBTyxFQUFFLENBQ1A7SUFETztFQURJLENBQWY7O0VBTUEsSUFBSTtJQUNGLE1BQU1DLFFBQVEsR0FBRyxNQUFNTCxpREFBQSxDQUFVRSxRQUFWLEVBQW1CQyxNQUFuQixDQUF2QjtJQUNBLE9BQU9FLFFBQVEsQ0FBQ0UsSUFBaEI7RUFDRCxDQUhELENBR0UsT0FBT0MsS0FBUCxFQUFjO0lBQ2QsTUFBTSxJQUFJQyxLQUFKLENBQVcsaUNBQWdDUCxRQUFTLEdBQXBELENBQU47RUFDRDtBQUNGLENBZEQ7O0FBZ0JBLE1BQU1RLFVBQVUsR0FBSVIsUUFBRCxJQUFjO0VBQy9CLE9BQU9ILHFEQUFRLENBQUMsQ0FBQ0csUUFBRCxDQUFELEVBQWEsTUFBTUQsU0FBUyxDQUFDQyxRQUFELENBQTVCLENBQWY7QUFDRCxDQUZEOztBQUlBLGlFQUFlUSxVQUFmLEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ob3BlLXNjaG9vbC8uL3BhZ2VzL2FwaS91c2VHZXREYXRhLmpzP2MyYmEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUXVlcnkgfSBmcm9tICdyZWFjdC1xdWVyeSc7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcblxyXG5jb25zdCBmZXRjaERhdGEgPSBhc3luYyAoZW5kcG9pbnQpID0+IHtcclxuXHJcbiAgY29uc3QgY29uZmlnID0geyBcclxuICAgIGhlYWRlcnM6IHtcclxuICAgICAgLy8gQXV0aG9yaXphdGlvbjogYEJlYXJlciAke3Rva2VufWAsXHJcbiAgICB9LFxyXG4gIH07XHJcblxyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldChlbmRwb2ludCxjb25maWcpO1xyXG4gICAgcmV0dXJuIHJlc3BvbnNlLmRhdGE7XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIHRocm93IG5ldyBFcnJvcihgRmFpbGVkIHRvIGZldGNoIGRhdGEgZnJvbSB0aGUgJHtlbmRwb2ludH0uYCk7XHJcbiAgfVxyXG59O1xyXG5cclxuY29uc3QgdXNlR2V0RGF0YSA9IChlbmRwb2ludCkgPT4ge1xyXG4gIHJldHVybiB1c2VRdWVyeShbZW5kcG9pbnRdLCAoKSA9PiBmZXRjaERhdGEoZW5kcG9pbnQpKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHVzZUdldERhdGE7XHJcbiJdLCJuYW1lcyI6WyJ1c2VRdWVyeSIsImF4aW9zIiwiZmV0Y2hEYXRhIiwiZW5kcG9pbnQiLCJjb25maWciLCJoZWFkZXJzIiwicmVzcG9uc2UiLCJnZXQiLCJkYXRhIiwiZXJyb3IiLCJFcnJvciIsInVzZUdldERhdGEiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/api/useGetData.js\n");

/***/ }),

/***/ "./pages/team/index.js":
/*!*****************************!*\
  !*** ./pages/team/index.js ***!
  \*****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Team)\n/* harmony export */ });\n/* harmony import */ var _api_useGetData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../api/useGetData */ \"./pages/api/useGetData.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_api_useGetData__WEBPACK_IMPORTED_MODULE_0__]);\n_api_useGetData__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\nvar _jsxFileName = \"D:\\\\Project\\\\School\\\\RenderFrontEnd\\\\hopeacademyofbishoftu\\\\pages\\\\team\\\\index.js\";\n\n\nfunction Team() {\n  // let endpoint = `${process.env.NEXT_PUBLIC_BASE_URL}api/ourTeams?populate=*`;\n  let endpoint2 = \"http://localhost:1337/api/our-teams?populate=*\";\n  const {\n    data: team,\n    isLoading: loading,\n    isError: error,\n    isFetching: fetching\n  } = (0,_api_useGetData__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(endpoint2);\n  console.log(\"team\", team?.data);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"section\", {\n    \"aria-labelledby\": \"team-section\",\n    className: \"bg-white py-12\",\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n      className: \"container mx-auto px-4\",\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h2\", {\n        className: \"text-3xl font-bold text-center mb-12\",\n        id: \"team-section\",\n        children: \"OUR TEAM\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 19,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        className: \"flex justify-center  gap-8\",\n        children: team?.data?.map(team => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n          className: \"text-center\",\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"img\", {\n            alt: team?.attributes?.name,\n            className: \"w-80 h-72 object-cover mb-4 mx-auto\",\n            height: \"300\",\n            src: team?.attributes?.profile?.data?.attributes?.url,\n            style: {\n              aspectRatio: \"100/100\",\n              objectFit: \"cover\"\n            },\n            width: \"100%\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 26,\n            columnNumber: 15\n          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h3\", {\n            className: \"text-xl font-semibold\",\n            children: team?.attributes?.name\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 37,\n            columnNumber: 15\n          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n            className: \"text-gray-600\",\n            children: team?.attributes?.title\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 40,\n            columnNumber: 15\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 25,\n          columnNumber: 13\n        }, this))\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 23,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 7\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 17,\n    columnNumber: 5\n  }, this);\n}\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy90ZWFtL2luZGV4LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7O0FBRWUsU0FBU0MsSUFBVCxHQUFnQjtFQUM3QjtFQUNBLElBQUlDLFNBQVMsR0FBRyxnREFBaEI7RUFFQSxNQUFNO0lBQ0pDLElBQUksRUFBRUMsSUFERjtJQUVKQyxTQUFTLEVBQUVDLE9BRlA7SUFHSkMsT0FBTyxFQUFFQyxLQUhMO0lBSUpDLFVBQVUsRUFBRUM7RUFKUixJQUtGViwyREFBVSxDQUFDRSxTQUFELENBTGQ7RUFPQVMsT0FBTyxDQUFDQyxHQUFSLENBQVksTUFBWixFQUFvQlIsSUFBSSxFQUFFRCxJQUExQjtFQUVBLG9CQUNFO0lBQVMsbUJBQWdCLGNBQXpCO0lBQXdDLFNBQVMsRUFBQyxnQkFBbEQ7SUFBQSx1QkFDRTtNQUFLLFNBQVMsRUFBQyx3QkFBZjtNQUFBLHdCQUNFO1FBQUksU0FBUyxFQUFDLHNDQUFkO1FBQXFELEVBQUUsRUFBQyxjQUF4RDtRQUFBO01BQUE7UUFBQTtRQUFBO1FBQUE7TUFBQSxRQURGLGVBS0U7UUFBSyxTQUFTLEVBQUMsNEJBQWY7UUFBQSxVQUNHQyxJQUFJLEVBQUVELElBQU4sRUFBWVUsR0FBWixDQUFpQlQsSUFBRCxpQkFDZjtVQUFLLFNBQVMsRUFBQyxhQUFmO1VBQUEsd0JBQ0U7WUFDRSxHQUFHLEVBQUVBLElBQUksRUFBRVUsVUFBTixFQUFrQkMsSUFEekI7WUFFRSxTQUFTLEVBQUMscUNBRlo7WUFHRSxNQUFNLEVBQUMsS0FIVDtZQUlFLEdBQUcsRUFBRVgsSUFBSSxFQUFFVSxVQUFOLEVBQWtCRSxPQUFsQixFQUEyQmIsSUFBM0IsRUFBaUNXLFVBQWpDLEVBQTZDRyxHQUpwRDtZQUtFLEtBQUssRUFBRTtjQUNMQyxXQUFXLEVBQUUsU0FEUjtjQUVMQyxTQUFTLEVBQUU7WUFGTixDQUxUO1lBU0UsS0FBSyxFQUFDO1VBVFI7WUFBQTtZQUFBO1lBQUE7VUFBQSxRQURGLGVBWUU7WUFBSSxTQUFTLEVBQUMsdUJBQWQ7WUFBQSxVQUNHZixJQUFJLEVBQUVVLFVBQU4sRUFBa0JDO1VBRHJCO1lBQUE7WUFBQTtZQUFBO1VBQUEsUUFaRixlQWVFO1lBQUcsU0FBUyxFQUFDLGVBQWI7WUFBQSxVQUE4QlgsSUFBSSxFQUFFVSxVQUFOLEVBQWtCTTtVQUFoRDtZQUFBO1lBQUE7WUFBQTtVQUFBLFFBZkY7UUFBQTtVQUFBO1VBQUE7VUFBQTtRQUFBLFFBREQ7TUFESDtRQUFBO1FBQUE7UUFBQTtNQUFBLFFBTEY7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBO0VBREY7SUFBQTtJQUFBO0lBQUE7RUFBQSxRQURGO0FBaUNELEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ob3BlLXNjaG9vbC8uL3BhZ2VzL3RlYW0vaW5kZXguanM/NjUyNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdXNlR2V0RGF0YSBmcm9tIFwiLi4vYXBpL3VzZUdldERhdGFcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFRlYW0oKSB7XHJcbiAgLy8gbGV0IGVuZHBvaW50ID0gYCR7cHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQkFTRV9VUkx9YXBpL291clRlYW1zP3BvcHVsYXRlPSpgO1xyXG4gIGxldCBlbmRwb2ludDIgPSBcImh0dHA6Ly9sb2NhbGhvc3Q6MTMzNy9hcGkvb3VyLXRlYW1zP3BvcHVsYXRlPSpcIjtcclxuXHJcbiAgY29uc3Qge1xyXG4gICAgZGF0YTogdGVhbSxcclxuICAgIGlzTG9hZGluZzogbG9hZGluZyxcclxuICAgIGlzRXJyb3I6IGVycm9yLFxyXG4gICAgaXNGZXRjaGluZzogZmV0Y2hpbmcsXHJcbiAgfSA9IHVzZUdldERhdGEoZW5kcG9pbnQyKTtcclxuXHJcbiAgY29uc29sZS5sb2coXCJ0ZWFtXCIsIHRlYW0/LmRhdGEpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPHNlY3Rpb24gYXJpYS1sYWJlbGxlZGJ5PVwidGVhbS1zZWN0aW9uXCIgY2xhc3NOYW1lPVwiYmctd2hpdGUgcHktMTJcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgbXgtYXV0byBweC00XCI+XHJcbiAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtM3hsIGZvbnQtYm9sZCB0ZXh0LWNlbnRlciBtYi0xMlwiIGlkPVwidGVhbS1zZWN0aW9uXCI+XHJcbiAgICAgICAgICBPVVIgVEVBTVxyXG4gICAgICAgIDwvaDI+XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWNlbnRlciAgZ2FwLThcIj5cclxuICAgICAgICAgIHt0ZWFtPy5kYXRhPy5tYXAoKHRlYW0pID0+IChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgIGFsdD17dGVhbT8uYXR0cmlidXRlcz8ubmFtZX1cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctODAgaC03MiBvYmplY3QtY292ZXIgbWItNCBteC1hdXRvXCJcclxuICAgICAgICAgICAgICAgIGhlaWdodD1cIjMwMFwiXHJcbiAgICAgICAgICAgICAgICBzcmM9e3RlYW0/LmF0dHJpYnV0ZXM/LnByb2ZpbGU/LmRhdGE/LmF0dHJpYnV0ZXM/LnVybH1cclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgIGFzcGVjdFJhdGlvOiBcIjEwMC8xMDBcIixcclxuICAgICAgICAgICAgICAgICAgb2JqZWN0Rml0OiBcImNvdmVyXCIsXHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgd2lkdGg9XCIxMDAlXCJcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LXhsIGZvbnQtc2VtaWJvbGRcIj5cclxuICAgICAgICAgICAgICAgIHt0ZWFtPy5hdHRyaWJ1dGVzPy5uYW1lfVxyXG4gICAgICAgICAgICAgIDwvaDM+XHJcbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTYwMFwiPnt0ZWFtPy5hdHRyaWJ1dGVzPy50aXRsZX08L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgKSl9XHJcblxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L3NlY3Rpb24+XHJcbiAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsidXNlR2V0RGF0YSIsIlRlYW0iLCJlbmRwb2ludDIiLCJkYXRhIiwidGVhbSIsImlzTG9hZGluZyIsImxvYWRpbmciLCJpc0Vycm9yIiwiZXJyb3IiLCJpc0ZldGNoaW5nIiwiZmV0Y2hpbmciLCJjb25zb2xlIiwibG9nIiwibWFwIiwiYXR0cmlidXRlcyIsIm5hbWUiLCJwcm9maWxlIiwidXJsIiwiYXNwZWN0UmF0aW8iLCJvYmplY3RGaXQiLCJ0aXRsZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/team/index.js\n");

/***/ }),

/***/ "react-query":
/*!******************************!*\
  !*** external "react-query" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("react-query");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = import("axios");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/team/index.js"));
module.exports = __webpack_exports__;

})();