/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/runtime/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/esm/index.js":
/*!**************************!*\
  !*** ./src/esm/index.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_getAmateurRadioInfoByCallsign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/getAmateurRadioInfoByCallsign */ "./src/esm/modules/getAmateurRadioInfoByCallsign.js");
/* harmony import */ var _modules_asyncGetAmateurRadioDetailedByCallsign__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/asyncGetAmateurRadioDetailedByCallsign */ "./src/esm/modules/asyncGetAmateurRadioDetailedByCallsign.js");
/* harmony import */ var _modules_getAircraftRegistInfoByTailCode__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/getAircraftRegistInfoByTailCode */ "./src/esm/modules/getAircraftRegistInfoByTailCode.js");
/* harmony import */ var _modules_asyncGetAirlineInfoByFlightNumber__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/asyncGetAirlineInfoByFlightNumber */ "./src/esm/modules/asyncGetAirlineInfoByFlightNumber.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }






var Callsign =
/*#__PURE__*/
function () {
  function Callsign() {
    _classCallCheck(this, Callsign);
  }
  /**
   * Search DXCC information for amateur radio callsign
   * @param {String} callsign HamRadio Callsign
   */


  _createClass(Callsign, [{
    key: "getAmateurRadioInfoByCallsign",
    value: function getAmateurRadioInfoByCallsign(callsign) {
      return Object(_modules_getAmateurRadioInfoByCallsign__WEBPACK_IMPORTED_MODULE_0__["default"])(callsign);
    }
    /**
     * async Search DXCC information for amateur radio callsign
     * Use promise
     * @param {String} callsign Amateur Callsign
     * @param {String} url Amateur Callsign DataBase Network address
     */

  }, {
    key: "asyncGetAmateurRadioDetailedByCallsign",
    value: function asyncGetAmateurRadioDetailedByCallsign(callsign, url) {
      return Object(_modules_asyncGetAmateurRadioDetailedByCallsign__WEBPACK_IMPORTED_MODULE_1__["default"])(callsign, url);
    }
  }, {
    key: "getAmateurRadioDetailedByCallsign",
    value: function getAmateurRadioDetailedByCallsign() {
      console.error('[callsign.js]: API Error \n "getAmateurRadioDetailedByCallsign" only supports Node.js environment, please use "asyncGetAmateurRadioDetailedByCallsign"');
    }
    /**
     * Search attribution based on the Tail code
     * @param {String} tailcode Aircraft Tail Code
     */

  }, {
    key: "getAircraftRegistInfoByTailCode",
    value: function getAircraftRegistInfoByTailCode(tailcode) {
      return Object(_modules_getAircraftRegistInfoByTailCode__WEBPACK_IMPORTED_MODULE_2__["default"])(tailcode);
    }
    /**
     * Get airline information by flight number
     * @param {String} flightnumber Flight Number
     * @param {String} url Flight Number Database
     */

  }, {
    key: "asyncGetAirlineInfoByFlightNumber",
    value: function asyncGetAirlineInfoByFlightNumber(flightnumber, url) {
      return Object(_modules_asyncGetAirlineInfoByFlightNumber__WEBPACK_IMPORTED_MODULE_3__["default"])(flightnumber, url);
    }
  }, {
    key: "getAirlineInfoByFlightNumber",
    value: function getAirlineInfoByFlightNumber() {
      console.error('[callsign.js]: API Error \n "getAirlineInfoByFlightNumber" only supports Node.js environment, please use "asyncGetAirlineInfoByFlightNumber"');
    }
  }]);

  return Callsign;
}();

/* harmony default export */ __webpack_exports__["default"] = (new Callsign());

/***/ }),

/***/ "./src/esm/modules/asyncGetAirlineInfoByFlightNumber.js":
/*!**************************************************************!*\
  !*** ./src/esm/modules/asyncGetAirlineInfoByFlightNumber.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ "./src/esm/utils/index.js");


var getAirlineInfoByFlightNumber = function getAirlineInfoByFlightNumber(arelineDB, flightnumber) {
  var three = flightnumber.substr(2, 1);
  var result;

  if (three >= 'A' && three <= 'Z') {
    result = arelineDB.find(function (x) {
      return x.ICAO === flightnumber.substring(0, 3);
    });
  } else {
    result = arelineDB.find(function (x) {
      return x.IATA === flightnumber.substring(0, 2);
    });
  }

  return result;
};

var asyncGetAirlineInfoByFlightNumber = function asyncGetAirlineInfoByFlightNumber(flightnumber, url) {
  if (typeof flightnumber !== 'string') {
    console.error('[callsign.js]: flightnumber must be string');
    return;
  }

  flightnumber = flightnumber.toUpperCase();

  if (url === undefined) {
    url = 'https://unpkg.com/callsign/dist/data/airlineDB.json';
  }

  return new Promise(function (resolve, reject) {
    Object(_utils__WEBPACK_IMPORTED_MODULE_0__["ajax"])('GET', url).then(function (res) {
      var getDetail = getAirlineInfoByFlightNumber(JSON.parse(res), flightnumber);
      resolve(getDetail);
    })["catch"](function (e) {
      reject('[callsign.js]: Network Error');
    });
  });
};

/* harmony default export */ __webpack_exports__["default"] = (asyncGetAirlineInfoByFlightNumber);

/***/ }),

/***/ "./src/esm/modules/asyncGetAmateurRadioDetailedByCallsign.js":
/*!*******************************************************************!*\
  !*** ./src/esm/modules/asyncGetAmateurRadioDetailedByCallsign.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ "./src/esm/utils/index.js");


var getAmateurRadioDetailedByCallsign = function getAmateurRadioDetailedByCallsign(callsignDB, callsign) {
  var result1 = callsignDB['1'].find(function (x) {
    return x.prefix === callsign.substring(0, 1);
  });
  var result2 = callsignDB['2'].find(function (x) {
    return x.prefix === callsign.substring(0, 2);
  });
  var result3 = callsignDB['3'].find(function (x) {
    return x.prefix === callsign.substring(0, 3);
  });
  var result4 = callsignDB['4'].find(function (x) {
    return x.prefix === callsign.substring(0, 4);
  });
  var result;

  if (result4 === undefined) {
    if (result3 === undefined) {
      if (result2 === undefined) {
        if (result1 === undefined) {
          result = undefined;
        } else {
          result = result1;
        }
      } else {
        result = result2;
      }
    } else {
      result = result3;
    }
  } else {
    result = result4;
  }

  return result;
};

var asyncGetAmateurRadioDetailedByCallsign = function asyncGetAmateurRadioDetailedByCallsign(callsign, url) {
  if (typeof callsign !== 'string') {
    console.error('[callsign.js]: Callsign must be string');
    return;
  }

  callsign = callsign.toUpperCase();

  if (url === undefined) {
    url = 'https://unpkg.com/callsign/dist/data/cty.json';
  }

  return new Promise(function (resolve, reject) {
    Object(_utils__WEBPACK_IMPORTED_MODULE_0__["ajax"])('GET', url).then(function (res) {
      var getDetail = getAmateurRadioDetailedByCallsign(JSON.parse(res), callsign);
      resolve(getDetail);
    })["catch"](function (e) {
      reject('[callsign.js]: Network Error');
    });
  });
};

/* harmony default export */ __webpack_exports__["default"] = (asyncGetAmateurRadioDetailedByCallsign);

/***/ }),

/***/ "./src/esm/modules/getAircraftRegistInfoByTailCode.js":
/*!************************************************************!*\
  !*** ./src/esm/modules/getAircraftRegistInfoByTailCode.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_aircraftDB_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../lib/aircraftDB.json */ "./src/lib/aircraftDB.json");
var _lib_aircraftDB_json__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../lib/aircraftDB.json */ "./src/lib/aircraftDB.json", 1);


var getAircraftRegistInfoByTailCode = function getAircraftRegistInfoByTailCode(tailcode) {
  if (typeof tailcode !== 'string') {
    console.error('[callsign.js]: Tailcode must be string');
    return;
  }

  tailcode = tailcode.toUpperCase();
  var result1 = _lib_aircraftDB_json__WEBPACK_IMPORTED_MODULE_0__['1'].find(function (x) {
    return x.prefix === tailcode.substring(0, 1);
  });
  var result2 = _lib_aircraftDB_json__WEBPACK_IMPORTED_MODULE_0__['2'].find(function (x) {
    return x.prefix === tailcode.substring(0, 2);
  });
  var result3 = _lib_aircraftDB_json__WEBPACK_IMPORTED_MODULE_0__['3'].find(function (x) {
    return x.prefix === tailcode.substring(0, 3);
  });
  var result4 = _lib_aircraftDB_json__WEBPACK_IMPORTED_MODULE_0__['4'].find(function (x) {
    return x.prefix === tailcode.substring(0, 4);
  });
  var result;

  if (result4 === undefined) {
    if (result3 === undefined) {
      if (result2 === undefined) {
        if (result1 === undefined) {
          result = undefined;
        } else {
          result = result1;

          if (tailcode.length === 7 && result1.prefix === 'B') {
            result.area = "Taiwan";
          }

          if (tailcode.length === 6 && result1.prefix === 'B') {
            result.area = "China";
          }
        }
      } else {
        result = result2;
      }
    } else {
      result = result3;
    }
  } else {
    result = result4;
  }

  return result;
};

/* harmony default export */ __webpack_exports__["default"] = (getAircraftRegistInfoByTailCode);

/***/ }),

/***/ "./src/esm/modules/getAmateurRadioInfoByCallsign.js":
/*!**********************************************************!*\
  !*** ./src/esm/modules/getAmateurRadioInfoByCallsign.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_HamCallsignDB_callsignindexone_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../lib/HamCallsignDB/callsignindexone.json */ "./src/lib/HamCallsignDB/callsignindexone.json");
var _lib_HamCallsignDB_callsignindexone_json__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../lib/HamCallsignDB/callsignindexone.json */ "./src/lib/HamCallsignDB/callsignindexone.json", 1);
/* harmony import */ var _lib_HamCallsignDB_callsignindextwo_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../lib/HamCallsignDB/callsignindextwo.json */ "./src/lib/HamCallsignDB/callsignindextwo.json");
var _lib_HamCallsignDB_callsignindextwo_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../lib/HamCallsignDB/callsignindextwo.json */ "./src/lib/HamCallsignDB/callsignindextwo.json", 1);
/* harmony import */ var _lib_HamCallsignDB_callsignindexthree_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../lib/HamCallsignDB/callsignindexthree.json */ "./src/lib/HamCallsignDB/callsignindexthree.json");
var _lib_HamCallsignDB_callsignindexthree_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../lib/HamCallsignDB/callsignindexthree.json */ "./src/lib/HamCallsignDB/callsignindexthree.json", 1);
/* harmony import */ var _lib_HamCallsignDB_callsignindexfour_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../lib/HamCallsignDB/callsignindexfour.json */ "./src/lib/HamCallsignDB/callsignindexfour.json");
var _lib_HamCallsignDB_callsignindexfour_json__WEBPACK_IMPORTED_MODULE_3___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../lib/HamCallsignDB/callsignindexfour.json */ "./src/lib/HamCallsignDB/callsignindexfour.json", 1);





var getAmateurRadioInfoByCallsign = function getAmateurRadioInfoByCallsign(callsign) {
  if (typeof callsign !== 'string') {
    console.error('[callsign.js]: Callsign must be string');
    return;
  }

  callsign = callsign.toUpperCase();
  var result1 = _lib_HamCallsignDB_callsignindexone_json__WEBPACK_IMPORTED_MODULE_0__.find(function (x) {
    return x.prefix === callsign.substring(0, 1);
  });
  var result2 = _lib_HamCallsignDB_callsignindextwo_json__WEBPACK_IMPORTED_MODULE_1__.find(function (x) {
    return x.prefix === callsign.substring(0, 2);
  });
  var result3 = _lib_HamCallsignDB_callsignindexthree_json__WEBPACK_IMPORTED_MODULE_2__.find(function (x) {
    return x.prefix === callsign.substring(0, 3);
  });
  var result4 = _lib_HamCallsignDB_callsignindexfour_json__WEBPACK_IMPORTED_MODULE_3__.find(function (x) {
    return x.prefix === callsign.substring(0, 4);
  });
  var result;

  if (result4 === undefined) {
    if (result3 === undefined) {
      if (result2 === undefined) {
        if (result1 === undefined) {
          result = undefined;
        } else {
          result = result1;
        }
      } else {
        result = result2;
      }
    } else {
      result = result3;
    }
  } else {
    result = result4;
  }

  return result;
};

/* harmony default export */ __webpack_exports__["default"] = (getAmateurRadioInfoByCallsign);

/***/ }),

/***/ "./src/esm/utils/index.js":
/*!********************************!*\
  !*** ./src/esm/utils/index.js ***!
  \********************************/
/*! exports provided: ajax */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ajax", function() { return ajax; });
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var ajax = function ajax(method, url, params) {
  return new Promise(function (resolve, reject) {
    var xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          resolve(xhr.responseText);
        } else {
          reject(xhr.status);
        }
      }
    };

    if (method === 'get' || method === 'GET') {
      if (_typeof(params) === 'object') {
        params = Object.keys(params).map(function (key) {
          return encodeURIComponent(key) + '=' + encodeURIComponent(params[key]);
        }).join('&');
      }

      url = params ? url + '?' + params : url;
      xhr.open(method, url, true);
      xhr.send();
    }

    if (method === 'post' || method === 'POST') {
      xhr.open(method, url, true);
      xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');
      xhr.send(JSON.stringify(params));
    }
  });
};

/***/ }),

/***/ "./src/lib/HamCallsignDB/callsignindexfour.json":
/*!******************************************************!*\
  !*** ./src/lib/HamCallsignDB/callsignindexfour.json ***!
  \******************************************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, default */
/***/ (function(module) {

module.exports = JSON.parse("[{\"prefix\":\"4U1I\",\"area\":\"ITU HQ\",\"areacn\":\"国际电联总部\",\"areacode\":\"\"},{\"prefix\":\"4U1U\",\"area\":\"United Nations HQ\",\"areacn\":\"联合国总部\",\"areacode\":\"\"},{\"prefix\":\"4U1V\",\"area\":\"Vienna Intl Ctr\",\"areacn\":\"Vienna Intl Ctr\",\"areacode\":\"\"},{\"prefix\":\"BS7H\",\"area\":\"Scarborough Reef\",\"areacn\":\"黄岩岛\",\"areacode\":\"CN\"},{\"prefix\":\"BV9P\",\"area\":\"Pratas I.\",\"areacn\":\"东沙群岛\",\"areacode\":\"TW\"},{\"prefix\":\"KH5K\",\"area\":\"Kingman Reef\",\"areacn\":\"金曼礁\",\"areacode\":\"US\"},{\"prefix\":\"KH7K\",\"area\":\"Kure I.\",\"areacn\":\"库雷岛\",\"areacode\":\"US\"},{\"prefix\":\"PY0F\",\"area\":\"Fernando de Noronha\",\"areacn\":\"费尔南多·迪诺罗尼亚群岛\",\"areacode\":\"BZ\"},{\"prefix\":\"PY0S\",\"area\":\"St. Peter & St. Paul Rocks\",\"areacn\":\"圣佩德罗和圣保罗群\",\"areacode\":\"BZ\"},{\"prefix\":\"PY0T\",\"area\":\"Trindade & Martim Vaz Is.\",\"areacn\":\"特林达迪和马丁瓦斯群岛\",\"areacode\":\"BZ\"},{\"prefix\":\"R1FJ\",\"area\":\"Franz Josef Land\",\"areacn\":\"法兰士约瑟夫地群岛\",\"areacode\":\"RU\"},{\"prefix\":\"R1MV\",\"area\":\"Malyj Vysotskij I.\",\"areacn\":\"Maly Vysotsky Island\",\"areacode\":\"RU\"},{\"prefix\":\"VK9C\",\"area\":\"Cocos (Keeling) Is.\",\"areacn\":\"科科斯（基林）群岛\",\"areacode\":\"AU\"},{\"prefix\":\"VK9L\",\"area\":\" Lord Howe I.\",\"areacn\":\"豪勋爵岛\",\"areacode\":\"AU\"},{\"prefix\":\"VK9M\",\"area\":\"Mellish Reef\",\"areacn\":\"梅利什礁\",\"areacode\":\"AU\"},{\"prefix\":\"VK9N\",\"area\":\"Norfolk I.\",\"areacn\":\"诺福克岛\",\"areacode\":\"AU\"},{\"prefix\":\"VK9W\",\"area\":\"Willis I.\",\"areacn\":\"Willis I.\",\"areacode\":\"AU\"},{\"prefix\":\"VK9X\",\"area\":\"Christmas I.\",\"areacn\":\"Christmas I.\",\"areacode\":\"AU\"},{\"prefix\":\"VP2E\",\"area\":\"Anguilla\",\"areacn\":\"安圭拉\",\"areacode\":\"UK\"},{\"prefix\":\"VP2M\",\"area\":\"Montserrat\",\"areacn\":\"蒙特塞拉特\",\"areacode\":\"UK\"},{\"prefix\":\"R1AN\",\"area\":\"Antarctica\",\"areacn\":\"南极洲\",\"areacode\":\"RU\"},{\"prefix\":\"RI1A\",\"area\":\"Antarctica\",\"areacn\":\"南极洲\",\"areacode\":\"RU\"},{\"prefix\":\"FT8Y\",\"area\":\"Antarctica\",\"areacn\":\"南极洲\",\"areacode\":\"FR\"}]");

/***/ }),

/***/ "./src/lib/HamCallsignDB/callsignindexone.json":
/*!*****************************************************!*\
  !*** ./src/lib/HamCallsignDB/callsignindexone.json ***!
  \*****************************************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, default */
/***/ (function(module) {

module.exports = JSON.parse("[{\"prefix\":\"B\",\"area\":\"China\",\"areacn\":\"中国\",\"areacode\":\"CN\"},{\"prefix\":\"F\",\"area\":\"France\",\"areacn\":\"法国\",\"areacode\":\"FR\"},{\"prefix\":\"G\",\"area\":\"England\",\"areacn\":\"英国\",\"areacode\":\"UK\"},{\"prefix\":\"I\",\"area\":\"Italy\",\"areacn\":\"意大利\",\"areacode\":\"IT\"},{\"prefix\":\"K\",\"area\":\"United States of America\",\"areacn\":\"美国\",\"areacode\":\"US\"},{\"prefix\":\"M\",\"area\":\"England\",\"areacn\":\"英国\",\"areacode\":\"UK\"},{\"prefix\":\"N\",\"area\":\"United States of America\",\"areacn\":\"美国\",\"areacode\":\"US\"},{\"prefix\":\"R\",\"area\":\"Russia\",\"areacn\":\"俄罗斯\",\"areacode\":\"RU\"},{\"prefix\":\"W\",\"area\":\"United States of America\",\"areacn\":\"美国\",\"areacode\":\"US\"}]");

/***/ }),

/***/ "./src/lib/HamCallsignDB/callsignindexthree.json":
/*!*******************************************************!*\
  !*** ./src/lib/HamCallsignDB/callsignindexthree.json ***!
  \*******************************************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144, 145, 146, 147, 148, 149, 150, 151, 152, 153, 154, 155, 156, 157, 158, 159, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 174, 175, 176, 177, 178, default */
/***/ (function(module) {

module.exports = JSON.parse("[{\"prefix\":\"3B6\",\"area\":\"Agalega & St. Brandon Is\",\"areacn\":\"毛里求斯-卡加多斯-卡拉若斯群岛\",\"areacode\":\"MU\"},{\"prefix\":\"3B7\",\"area\":\"Agalega & St. Brandon Is\",\"areacn\":\"毛里求斯-卡加多斯-卡拉若斯群岛\",\"areacode\":\"MU\"},{\"prefix\":\"3B8\",\"area\":\"Mauritius\",\"areacn\":\"毛里求斯\",\"areacode\":\"MU\"},{\"prefix\":\"3B9\",\"area\":\"Rodriguez I.\",\"areacn\":\"Rodriguez I.\"},{\"prefix\":\"3D2\",\"area\":\"Fiji,Conway Reef,Rotuma I.\",\"areacn\":\"斐济\",\"areacode\":\"FJ\"},{\"prefix\":\"3DA\",\"area\":\"Swaziland\",\"areacn\":\"斯威士兰\",\"areacode\":\"SZ\"},{\"prefix\":\"9M2\",\"area\":\"West Malaysia\",\"areacn\":\"西马来西亚\",\"areacode\":\"MY\"},{\"prefix\":\"9M4\",\"area\":\"West Malaysia\",\"areacn\":\"西马来西亚\",\"areacode\":\"MY\"},{\"prefix\":\"9M6\",\"area\":\"East Malaysia\",\"areacn\":\"东马来西亚\",\"areacode\":\"MY\"},{\"prefix\":\"9M8\",\"area\":\"East Malaysia\",\"areacn\":\"东马来西亚\",\"areacode\":\"MY\"},{\"prefix\":\"CE0\",\"area\":\"Easter I.,Juan Fernandez Is.,San Felix & San Ambrosio\",\"areacn\":\"Easter I.,Juan Fernandez Is.,San Felix & San Ambrosio\",\"areacode\":\"CL\"},{\"prefix\":\"CA0\",\"area\":\"Easter I.,Juan Fernandez Is.,San Felix & San Ambrosio\",\"areacn\":\"Easter I.,Juan Fernandez Is.,San Felix & San Ambrosio\",\"areacode\":\"CL\"},{\"prefix\":\"CB0\",\"area\":\"Easter I.,Juan Fernandez Is.,San Felix & San Ambrosio\",\"areacn\":\"Easter I.,Juan Fernandez Is.,San Felix & San Ambrosio\",\"areacode\":\"CL\"},{\"prefix\":\"CC0\",\"area\":\"Easter I.,Juan Fernandez Is.,San Felix & San Ambrosio\",\"areacn\":\"Easter I.,Juan Fernandez Is.,San Felix & San Ambrosio\",\"areacode\":\"CL\"},{\"prefix\":\"CD0\",\"area\":\"Easter I.,Juan Fernandez Is.,San Felix & San Ambrosio\",\"areacn\":\"Easter I.,Juan Fernandez Is.,San Felix & San Ambrosio\",\"areacode\":\"CL\"},{\"prefix\":\"XQ0\",\"area\":\"Easter I.,Juan Fernandez Is.,San Felix & San Ambrosio\",\"areacn\":\"Easter I.,Juan Fernandez Is.,San Felix & San Ambrosio\",\"areacode\":\"CL\"},{\"prefix\":\"XR0\",\"area\":\"Easter I.,Juan Fernandez Is.,San Felix & San Ambrosio\",\"areacn\":\"Easter I.,Juan Fernandez Is.,San Felix & San Ambrosio\",\"areacode\":\"CL\"},{\"prefix\":\"EA6\",\"area\":\"Balearic Is.\",\"areacn\":\"巴利阿里\",\"areacode\":\"ES\"},{\"prefix\":\"EB6\",\"area\":\"Balearic Is.\",\"areacn\":\"巴利阿里\",\"areacode\":\"ES\"},{\"prefix\":\"EC6\",\"area\":\"Balearic Is.\",\"areacn\":\"巴利阿里\",\"areacode\":\"ES\"},{\"prefix\":\"ED6\",\"area\":\"Balearic Is.\",\"areacn\":\"巴利阿里\",\"areacode\":\"ES\"},{\"prefix\":\"EE6\",\"area\":\"Balearic Is.\",\"areacn\":\"巴利阿里\",\"areacode\":\"ES\"},{\"prefix\":\"EF6\",\"area\":\"Balearic Is.\",\"areacn\":\"巴利阿里\",\"areacode\":\"ES\"},{\"prefix\":\"EG6\",\"area\":\"Balearic Is.\",\"areacn\":\"巴利阿里\",\"areacode\":\"ES\"},{\"prefix\":\"EH6\",\"area\":\"Balearic Is.\",\"areacn\":\"巴利阿里\",\"areacode\":\"ES\"},{\"prefix\":\"EA8\",\"area\":\"Canary Is.\",\"areacn\":\"Canary Is.\",\"areacode\":\"ES\"},{\"prefix\":\"EB8\",\"area\":\"Canary Is.\",\"areacn\":\"Canary Is.\",\"areacode\":\"ES\"},{\"prefix\":\"EC8\",\"area\":\"Canary Is.\",\"areacn\":\"Canary Is.\",\"areacode\":\"ES\"},{\"prefix\":\"ED8\",\"area\":\"Canary Is.\",\"areacn\":\"Canary Is.\",\"areacode\":\"ES\"},{\"prefix\":\"EE8\",\"area\":\"Canary Is.\",\"areacn\":\"Canary Is.\",\"areacode\":\"ES\"},{\"prefix\":\"EF8\",\"area\":\"Canary Is.\",\"areacn\":\"Canary Is.\",\"areacode\":\"ES\"},{\"prefix\":\"EG8\",\"area\":\"Canary Is.\",\"areacn\":\"Canary Is.\",\"areacode\":\"ES\"},{\"prefix\":\"EH8\",\"area\":\"Canary Is.\",\"areacn\":\"Canary Is.\",\"areacode\":\"ES\"},{\"prefix\":\"EA9\",\"area\":\"Ceuta & Melilla\",\"areacn\":\"梅利利亚\",\"areacode\":\"ES\"},{\"prefix\":\"EB9\",\"area\":\"Ceuta & Melilla\",\"areacn\":\"梅利利亚\",\"areacode\":\"ES\"},{\"prefix\":\"EC9\",\"area\":\"Ceuta & Melilla\",\"areacn\":\"梅利利亚\",\"areacode\":\"ES\"},{\"prefix\":\"ED9\",\"area\":\"Ceuta & Melilla\",\"areacn\":\"梅利利亚\",\"areacode\":\"ES\"},{\"prefix\":\"EF9\",\"area\":\"Ceuta & Melilla\",\"areacn\":\"梅利利亚\",\"areacode\":\"ES\"},{\"prefix\":\"EG9\",\"area\":\"Ceuta & Melilla\",\"areacn\":\"梅利利亚\",\"areacode\":\"ES\"},{\"prefix\":\"EH9\",\"area\":\"Ceuta & Melilla\",\"areacn\":\"梅利利亚\",\"areacode\":\"ES\"},{\"prefix\":\"HC8\",\"area\":\"Galapagos Is.\",\"areacn\":\"科隆群岛\",\"areacode\":\"EC\"},{\"prefix\":\"HD8\",\"area\":\"Galapagos Is.\",\"areacn\":\"科隆群岛\",\"areacode\":\"EC\"},{\"prefix\":\"H40\",\"area\":\"Temotu Province\",\"areacn\":\"所罗门群岛-泰莫图\",\"areacode\":\"SB\"},{\"prefix\":\"HB0\",\"area\":\"Liechtenstein\",\"areacn\":\"列支敦士登\",\"areacode\":\"LI\"},{\"prefix\":\"HK0\",\"area\":\"Malpelo I.,San Andres & Providencia\",\"areacn\":\"普罗维登西亚岛\",\"areacode\":\"CO\"},{\"prefix\":\"IS0\",\"area\":\"Sardinia\",\"areacn\":\"撒丁岛\",\"areacode\":\"IT\"},{\"prefix\":\"IM0\",\"area\":\"Sardinia\",\"areacn\":\"撒丁岛\",\"areacode\":\"IT\"},{\"prefix\":\"JD1\",\"area\":\"Minami Torishima,Ogasawara\",\"areacn\":\"南鸟岛,小笠原群岛\",\"areacode\":\"JP\"},{\"prefix\":\"KG4\",\"area\":\"Guantanamo Bay\",\"areacn\":\"关塔那摩湾\",\"areacode\":\"US\"},{\"prefix\":\"KH0\",\"area\":\"Mariana Is.\",\"areacn\":\"马里亚纳群岛\",\"areacode\":\"US\"},{\"prefix\":\"KH1\",\"area\":\"Baker & Howland Is.\",\"areacn\":\"贝克岛,豪兰岛\",\"areacode\":\"US\"},{\"prefix\":\"KH2\",\"area\":\"Guam\",\"areacn\":\"关岛\",\"areacode\":\"US\"},{\"prefix\":\"KH3\",\"area\":\"Johnston I.\",\"areacn\":\"约翰斯顿环礁\",\"areacode\":\"US\"},{\"prefix\":\"KH4\",\"area\":\"Midway I.\",\"areacn\":\"中途岛\",\"areacode\":\"US\"},{\"prefix\":\"KH5\",\"area\":\"Palmyra & Jarvis Is.\",\"areacn\":\"Palmyra & Jarvis Is.\",\"areacode\":\"US\"},{\"prefix\":\"KH6\",\"area\":\"Hawaii\",\"areacn\":\"夏威夷\",\"areacode\":\"US\"},{\"prefix\":\"KH7\",\"area\":\"Hawaii\",\"areacn\":\"夏威夷\",\"areacode\":\"US\"},{\"prefix\":\"KH8\",\"area\":\"American Samoa,Swains\",\"areacn\":\"美属萨摩亚,斯温斯\",\"areacode\":\"US\"},{\"prefix\":\"KH9\",\"area\":\"Wake I. \",\"areacn\":\"威克岛\",\"areacode\":\"US\"},{\"prefix\":\"KP1\",\"area\":\"Navassa I.\",\"areacn\":\"纳瓦萨岛\",\"areacode\":\"US\"},{\"prefix\":\"KP2\",\"area\":\"Virgin Is.\",\"areacn\":\"美属维尔京群岛\",\"areacode\":\"US\"},{\"prefix\":\"KP3\",\"area\":\"Puerto Rico\",\"areacn\":\"波多黎各\",\"areacode\":\"US\"},{\"prefix\":\"KP4\",\"area\":\"Puerto Rico\",\"areacn\":\"波多黎各\",\"areacode\":\"US\"},{\"prefix\":\"KP5\",\"area\":\"Desecheo I.\",\"areacn\":\"德塞切奥岛\",\"areacode\":\"US\"},{\"prefix\":\"OH0\",\"area\":\"Aland Is.\",\"areacn\":\"奥兰\",\"areacode\":\"AX\"},{\"prefix\":\"OJ0\",\"area\":\"Market Reef\",\"areacn\":\"马凯特岛\"},{\"prefix\":\"PJ2\",\"area\":\"Bonaire, Curacao\",\"areacn\":\"博奈尔\",\"areacode\":\"NL\"},{\"prefix\":\"PJ4\",\"area\":\"Bonaire, Curacao\",\"areacn\":\"博奈尔\",\"areacode\":\"NL\"},{\"prefix\":\"PJ9\",\"area\":\"Bonaire, Curacao\",\"areacn\":\"博奈尔\",\"areacode\":\"NL\"},{\"prefix\":\"PJ5\",\"area\":\"St. Maarten, Saba, St.\",\"areacn\":\"荷属圣马丁\",\"areacode\":\"NL\"},{\"prefix\":\"PJ6\",\"area\":\"St. Maarten, Saba, St.\",\"areacn\":\"荷属圣马丁\",\"areacode\":\"NL\"},{\"prefix\":\"PJ7\",\"area\":\"St. Maarten, Saba, St.\",\"areacn\":\"荷属圣马丁\",\"areacode\":\"NL\"},{\"prefix\":\"PJ8\",\"area\":\"St. Maarten, Saba, St.\",\"areacn\":\"荷属圣马丁\",\"areacode\":\"NL\"},{\"prefix\":\"SV5\",\"area\":\"Dodecanese\",\"areacn\":\"十二群岛\",\"areacode\":\"GR\"},{\"prefix\":\"J45\",\"area\":\"Dodecanese\",\"areacn\":\"十二群岛\",\"areacode\":\"GR\"},{\"prefix\":\"SV9\",\"area\":\"Crete\",\"areacn\":\"克里特岛\",\"areacode\":\"GR\"},{\"prefix\":\"J49\",\"area\":\"Crete\",\"areacn\":\"克里特岛\",\"areacode\":\"GR\"},{\"prefix\":\"TI9\",\"area\":\"Cocos I.\",\"areacn\":\"科科斯（基林）群岛\",\"areacode\":\"AU\"},{\"prefix\":\"UA1\",\"area\":\"European Russia\",\"areacn\":\"俄罗斯（欧洲）\",\"areacode\":\"RU\"},{\"prefix\":\"UB1\",\"area\":\"European Russia\",\"areacn\":\"俄罗斯（欧洲）\",\"areacode\":\"RU\"},{\"prefix\":\"UC1\",\"area\":\"European Russia\",\"areacn\":\"俄罗斯（欧洲）\",\"areacode\":\"RU\"},{\"prefix\":\"UD1\",\"area\":\"European Russia\",\"areacn\":\"俄罗斯（欧洲）\",\"areacode\":\"RU\"},{\"prefix\":\"UE1\",\"area\":\"European Russia\",\"areacn\":\"俄罗斯（欧洲）\",\"areacode\":\"RU\"},{\"prefix\":\"UF1\",\"area\":\"European Russia\",\"areacn\":\"俄罗斯（欧洲）\",\"areacode\":\"RU\"},{\"prefix\":\"UG1\",\"area\":\"European Russia\",\"areacn\":\"俄罗斯（欧洲）\",\"areacode\":\"RU\"},{\"prefix\":\"UH1\",\"area\":\"European Russia\",\"areacn\":\"俄罗斯（欧洲）\",\"areacode\":\"RU\"},{\"prefix\":\"UI1\",\"area\":\"European Russia\",\"areacn\":\"俄罗斯（欧洲）\",\"areacode\":\"RU\"},{\"prefix\":\"UA2\",\"area\":\"Kaliningrad\",\"areacn\":\"俄罗斯-加里宁格勒\",\"areacode\":\"RU\"},{\"prefix\":\"UA3\",\"area\":\"European Russia\",\"areacn\":\"俄罗斯（欧洲）\",\"areacode\":\"RU\"},{\"prefix\":\"UB3\",\"area\":\"European Russia\",\"areacn\":\"俄罗斯（欧洲）\",\"areacode\":\"RU\"},{\"prefix\":\"UC3\",\"area\":\"European Russia\",\"areacn\":\"俄罗斯（欧洲）\",\"areacode\":\"RU\"},{\"prefix\":\"UD3\",\"area\":\"European Russia\",\"areacn\":\"俄罗斯（欧洲）\",\"areacode\":\"RU\"},{\"prefix\":\"UE3\",\"area\":\"European Russia\",\"areacn\":\"俄罗斯（欧洲）\",\"areacode\":\"RU\"},{\"prefix\":\"UF3\",\"area\":\"European Russia\",\"areacn\":\"俄罗斯（欧洲）\",\"areacode\":\"RU\"},{\"prefix\":\"UG3\",\"area\":\"European Russia\",\"areacn\":\"俄罗斯（欧洲）\",\"areacode\":\"RU\"},{\"prefix\":\"UH3\",\"area\":\"European Russia\",\"areacn\":\"俄罗斯（欧洲）\",\"areacode\":\"RU\"},{\"prefix\":\"UI3\",\"area\":\"European Russia\",\"areacn\":\"俄罗斯（欧洲）\",\"areacode\":\"RU\"},{\"prefix\":\"UA4\",\"area\":\"European Russia\",\"areacn\":\"俄罗斯（欧洲）\",\"areacode\":\"RU\"},{\"prefix\":\"UB4\",\"area\":\"European Russia\",\"areacn\":\"俄罗斯（欧洲）\",\"areacode\":\"RU\"},{\"prefix\":\"UC4\",\"area\":\"European Russia\",\"areacn\":\"俄罗斯（欧洲）\",\"areacode\":\"RU\"},{\"prefix\":\"UD4\",\"area\":\"European Russia\",\"areacn\":\"俄罗斯（欧洲）\",\"areacode\":\"RU\"},{\"prefix\":\"UE4\",\"area\":\"European Russia\",\"areacn\":\"俄罗斯（欧洲）\",\"areacode\":\"RU\"},{\"prefix\":\"UF4\",\"area\":\"European Russia\",\"areacn\":\"俄罗斯（欧洲）\",\"areacode\":\"RU\"},{\"prefix\":\"UG4\",\"area\":\"European Russia\",\"areacn\":\"俄罗斯（欧洲）\",\"areacode\":\"RU\"},{\"prefix\":\"UH4\",\"area\":\"European Russia\",\"areacn\":\"俄罗斯（欧洲）\",\"areacode\":\"RU\"},{\"prefix\":\"UI4\",\"area\":\"European Russia\",\"areacn\":\"俄罗斯（欧洲）\",\"areacode\":\"RU\"},{\"prefix\":\"UA6\",\"area\":\"European Russia\",\"areacn\":\"俄罗斯（欧洲）\",\"areacode\":\"RU\"},{\"prefix\":\"UB6\",\"area\":\"European Russia\",\"areacn\":\"俄罗斯（欧洲）\",\"areacode\":\"RU\"},{\"prefix\":\"UC6\",\"area\":\"European Russia\",\"areacn\":\"俄罗斯（欧洲）\",\"areacode\":\"RU\"},{\"prefix\":\"UD6\",\"area\":\"European Russia\",\"areacn\":\"俄罗斯（欧洲）\",\"areacode\":\"RU\"},{\"prefix\":\"UE6\",\"area\":\"European Russia\",\"areacn\":\"俄罗斯（欧洲）\",\"areacode\":\"RU\"},{\"prefix\":\"UF6\",\"area\":\"European Russia\",\"areacn\":\"俄罗斯（欧洲）\",\"areacode\":\"RU\"},{\"prefix\":\"UG6\",\"area\":\"European Russia\",\"areacn\":\"俄罗斯（欧洲）\",\"areacode\":\"RU\"},{\"prefix\":\"UH6\",\"area\":\"European Russia\",\"areacn\":\"俄罗斯（欧洲）\",\"areacode\":\"RU\"},{\"prefix\":\"UI6\",\"area\":\"European Russia\",\"areacn\":\"俄罗斯（欧洲）\",\"areacode\":\"RU\"},{\"prefix\":\"UA8\",\"area\":\"Asiatic Russia\",\"areacn\":\"俄罗斯（亚洲）\",\"areacode\":\"RU\"},{\"prefix\":\"UB8\",\"area\":\"Asiatic Russia\",\"areacn\":\"俄罗斯（亚洲）\",\"areacode\":\"RU\"},{\"prefix\":\"UC8\",\"area\":\"Asiatic Russia\",\"areacn\":\"俄罗斯（亚洲）\",\"areacode\":\"RU\"},{\"prefix\":\"UD8\",\"area\":\"Asiatic Russia\",\"areacn\":\"俄罗斯（亚洲）\",\"areacode\":\"RU\"},{\"prefix\":\"UE8\",\"area\":\"Asiatic Russia\",\"areacn\":\"俄罗斯（亚洲）\",\"areacode\":\"RU\"},{\"prefix\":\"UF8\",\"area\":\"Asiatic Russia\",\"areacn\":\"俄罗斯（亚洲）\",\"areacode\":\"RU\"},{\"prefix\":\"UG8\",\"area\":\"Asiatic Russia\",\"areacn\":\"俄罗斯（亚洲）\",\"areacode\":\"RU\"},{\"prefix\":\"UH8\",\"area\":\"Asiatic Russia\",\"areacn\":\"俄罗斯（亚洲）\",\"areacode\":\"RU\"},{\"prefix\":\"UI8\",\"area\":\"Asiatic Russia\",\"areacn\":\"俄罗斯（亚洲）\",\"areacode\":\"RU\"},{\"prefix\":\"UA9\",\"area\":\"Asiatic Russia\",\"areacn\":\"俄罗斯（亚洲）\",\"areacode\":\"RU\"},{\"prefix\":\"UB9\",\"area\":\"Asiatic Russia\",\"areacn\":\"俄罗斯（亚洲）\",\"areacode\":\"RU\"},{\"prefix\":\"UC9\",\"area\":\"Asiatic Russia\",\"areacn\":\"俄罗斯（亚洲）\",\"areacode\":\"RU\"},{\"prefix\":\"UD9\",\"area\":\"Asiatic Russia\",\"areacn\":\"俄罗斯（亚洲）\",\"areacode\":\"RU\"},{\"prefix\":\"UE9\",\"area\":\"Asiatic Russia\",\"areacn\":\"俄罗斯（亚洲）\",\"areacode\":\"RU\"},{\"prefix\":\"UF9\",\"area\":\"Asiatic Russia\",\"areacn\":\"俄罗斯（亚洲）\",\"areacode\":\"RU\"},{\"prefix\":\"UG9\",\"area\":\"Asiatic Russia\",\"areacn\":\"俄罗斯（亚洲）\",\"areacode\":\"RU\"},{\"prefix\":\"UH9\",\"area\":\"Asiatic Russia\",\"areacn\":\"俄罗斯（亚洲）\",\"areacode\":\"RU\"},{\"prefix\":\"UI9\",\"area\":\"Asiatic Russia\",\"areacn\":\"俄罗斯（亚洲）\",\"areacode\":\"RU\"},{\"prefix\":\"UA0\",\"area\":\"Asiatic Russia\",\"areacn\":\"俄罗斯（亚洲）\",\"areacode\":\"RU\"},{\"prefix\":\"UB0\",\"area\":\"Asiatic Russia\",\"areacn\":\"俄罗斯（亚洲）\",\"areacode\":\"RU\"},{\"prefix\":\"UC0\",\"area\":\"Asiatic Russia\",\"areacn\":\"俄罗斯（亚洲）\",\"areacode\":\"RU\"},{\"prefix\":\"UD0\",\"area\":\"Asiatic Russia\",\"areacn\":\"俄罗斯（亚洲）\",\"areacode\":\"RU\"},{\"prefix\":\"UE0\",\"area\":\"Asiatic Russia\",\"areacn\":\"俄罗斯（亚洲）\",\"areacode\":\"RU\"},{\"prefix\":\"UF0\",\"area\":\"Asiatic Russia\",\"areacn\":\"俄罗斯（亚洲）\",\"areacode\":\"RU\"},{\"prefix\":\"UG0\",\"area\":\"Asiatic Russia\",\"areacn\":\"俄罗斯（亚洲）\",\"areacode\":\"RU\"},{\"prefix\":\"UH0\",\"area\":\"Asiatic Russia\",\"areacn\":\"俄罗斯（亚洲）\",\"areacode\":\"RU\"},{\"prefix\":\"UI0\",\"area\":\"Asiatic Russia\",\"areacn\":\"俄罗斯（亚洲）\",\"areacode\":\"RU\"},{\"prefix\":\"VK0\",\"area\":\"Heard I.,Macquarie I.\",\"areacn\":\"赫德岛和麦克唐纳群岛\",\"areacode\":\"AU\"},{\"prefix\":\"VP5\",\"area\":\"Turks & Caicos Is.\",\"areacn\":\"特克斯和凯科斯群岛\",\"areacode\":\"UK\"},{\"prefix\":\"VP6\",\"area\":\"Pitcairn I.,Ducie I.\",\"areacn\":\"皮特凯恩群岛,迪西岛\",\"areacode\":\"UK\"},{\"prefix\":\"VP8\",\"area\":\"Falkland Is.\",\"areacn\":\"福克兰群岛\",\"areacode\":\"UK\"},{\"prefix\":\"CE9\",\"area\":\"Bermuda\",\"areacn\":\"百慕大\",\"areacode\":\"UK\"},{\"prefix\":\"HF0\",\"area\":\"Bermuda\",\"areacn\":\"百慕大\",\"areacode\":\"UK\"},{\"prefix\":\"VP9\",\"area\":\"Bermuda\",\"areacn\":\"百慕大\",\"areacode\":\"UK\"},{\"prefix\":\"VQ9\",\"area\":\"Chagos Is.\",\"areacn\":\"查戈斯群岛\",\"areacode\":\"UK\"},{\"prefix\":\"VU4\",\"area\":\"Andaman & Nicobar Is.\",\"areacn\":\"安达曼群岛\",\"areacode\":\"IN\"},{\"prefix\":\"VU7\",\"area\":\"Lakshadweep Is.\",\"areacn\":\"拉克沙群岛\",\"areacode\":\"IN\"},{\"prefix\":\"XA4\",\"area\":\"Revillagigedo\",\"areacn\":\"雷维利亚希赫多群岛\",\"areacode\":\"MX\"},{\"prefix\":\"XB4\",\"area\":\"Revillagigedo\",\"areacn\":\"雷维利亚希赫多群岛\",\"areacode\":\"MX\"},{\"prefix\":\"XC4\",\"area\":\"Revillagigedo\",\"areacn\":\"雷维利亚希赫多群岛\",\"areacode\":\"MX\"},{\"prefix\":\"XD4\",\"area\":\"Revillagigedo\",\"areacn\":\"雷维利亚希赫多群岛\",\"areacode\":\"MX\"},{\"prefix\":\"XE4\",\"area\":\"Revillagigedo\",\"areacn\":\"雷维利亚希赫多群岛\",\"areacode\":\"MX\"},{\"prefix\":\"XF4\",\"area\":\"Revillagigedo\",\"areacn\":\"雷维利亚希赫多群岛\",\"areacode\":\"MX\"},{\"prefix\":\"XG4\",\"area\":\"Revillagigedo\",\"areacn\":\"雷维利亚希赫多群岛\",\"areacode\":\"MX\"},{\"prefix\":\"XH4\",\"area\":\"Revillagigedo\",\"areacn\":\"雷维利亚希赫多群岛\",\"areacode\":\"MX\"},{\"prefix\":\"XI4\",\"area\":\"Revillagigedo\",\"areacn\":\"雷维利亚希赫多群岛\",\"areacode\":\"MX\"},{\"prefix\":\"XX9\",\"area\":\"Macao\",\"areacn\":\"澳门\",\"areacode\":\"MO\"},{\"prefix\":\"ZB2\",\"area\":\"Gibraltar\",\"areacn\":\"直布罗陀\",\"areacode\":\"UK\"},{\"prefix\":\"ZD7\",\"area\":\"St. Helena\",\"areacn\":\"圣赫勒拿\",\"areacode\":\"UK\"},{\"prefix\":\"ZD8\",\"area\":\"Ascension I.\",\"areacn\":\"阿森松岛\",\"areacode\":\"UK\"},{\"prefix\":\"ZD9\",\"area\":\"Tristan da Cunha & Gough I.\",\"areacn\":\"戈夫岛\",\"areacode\":\"UK\"},{\"prefix\":\"ZK2\",\"area\":\"Niue\",\"areacn\":\"纽埃\",\"areacode\":\"NZ\"},{\"prefix\":\"ZK3\",\"area\":\"Tokelau Is.\",\"areacn\":\"托克劳\",\"areacode\":\"NZ\"},{\"prefix\":\"ZL7\",\"area\":\"Chatham Is.\",\"areacn\":\"查塔姆群岛\",\"areacode\":\"NZ\"},{\"prefix\":\"ZL8\",\"area\":\"Kermadec Is.\",\"areacn\":\"克马德克群岛\",\"areacode\":\"NZ\"},{\"prefix\":\"ZL9\",\"area\":\"Auckland & Campbell Is.\",\"areacn\":\"Auckland & Campbell Is.\",\"areacode\":\"NZ\"},{\"prefix\":\"ZS8\",\"area\":\"Prince Edward & Marion Is.\",\"areacn\":\"爱德华王子群岛\",\"areacode\":\"ZA\"},{\"prefix\":\"AT0\",\"area\":\"Antarctica\",\"areacn\":\"南极洲\",\"areacode\":\"IN\"},{\"prefix\":\"CE9\",\"area\":\"Antarctica\",\"areacn\":\"南极洲\",\"areacode\":\"CL\"},{\"prefix\":\"OR4\",\"area\":\"Antarctica\",\"areacn\":\"南极洲\",\"areacode\":\"BE\"},{\"prefix\":\"DP0\",\"area\":\"Antarctica\",\"areacn\":\"南极洲\",\"areacode\":\"DE\"},{\"prefix\":\"8J1\",\"area\":\"Antarctica\",\"areacn\":\"南极洲\",\"areacode\":\"JP\"},{\"prefix\":\"KC4\",\"area\":\"Antarctica\",\"areacn\":\"南极洲\",\"areacode\":\"US\"},{\"prefix\":\"HL8\",\"area\":\"Antarctica\",\"areacn\":\"南极洲\",\"areacode\":\"KR\"}]");

/***/ }),

/***/ "./src/lib/HamCallsignDB/callsignindextwo.json":
/*!*****************************************************!*\
  !*** ./src/lib/HamCallsignDB/callsignindextwo.json ***!
  \*****************************************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144, 145, 146, 147, 148, 149, 150, 151, 152, 153, 154, 155, 156, 157, 158, 159, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 174, 175, 176, 177, 178, 179, 180, 181, 182, 183, 184, 185, 186, 187, 188, 189, 190, 191, 192, 193, 194, 195, 196, 197, 198, 199, 200, 201, 202, 203, 204, 205, 206, 207, 208, 209, 210, 211, 212, 213, 214, 215, 216, 217, 218, 219, 220, 221, 222, 223, 224, 225, 226, 227, 228, 229, 230, 231, 232, 233, 234, 235, 236, 237, 238, 239, 240, 241, 242, 243, 244, 245, 246, 247, 248, 249, 250, 251, 252, 253, 254, 255, 256, 257, 258, 259, 260, 261, 262, 263, 264, 265, 266, 267, 268, 269, 270, 271, 272, 273, 274, 275, 276, 277, 278, 279, 280, 281, 282, 283, 284, 285, 286, 287, 288, 289, 290, 291, 292, 293, 294, 295, 296, 297, 298, 299, 300, 301, 302, 303, 304, 305, 306, 307, 308, 309, 310, 311, 312, 313, 314, 315, 316, 317, 318, 319, 320, 321, 322, 323, 324, 325, 326, 327, 328, 329, 330, 331, 332, 333, 334, 335, 336, 337, 338, 339, 340, 341, 342, 343, 344, 345, 346, 347, 348, 349, 350, 351, 352, 353, 354, 355, 356, 357, 358, 359, 360, 361, 362, 363, 364, 365, 366, 367, 368, 369, 370, 371, 372, 373, 374, 375, 376, 377, 378, 379, 380, 381, 382, 383, 384, 385, 386, 387, 388, 389, 390, 391, 392, 393, 394, 395, 396, 397, 398, 399, 400, 401, 402, 403, 404, 405, 406, 407, 408, 409, 410, 411, 412, 413, 414, 415, 416, 417, 418, 419, 420, 421, 422, 423, 424, 425, 426, 427, 428, 429, 430, 431, 432, 433, 434, 435, 436, 437, 438, 439, 440, 441, 442, 443, 444, 445, 446, 447, 448, 449, 450, 451, 452, 453, 454, 455, 456, 457, 458, 459, 460, 461, 462, 463, 464, 465, 466, 467, 468, 469, 470, 471, 472, 473, 474, 475, 476, 477, 478, 479, 480, 481, 482, 483, 484, 485, 486, 487, 488, 489, 490, 491, 492, 493, 494, 495, 496, 497, 498, 499, default */
/***/ (function(module) {

module.exports = JSON.parse("[{\"prefix\":\"1A\",\"area\":\"Sov. Mil. Order of Malta\",\"areacn\":\"马耳他骑士团\"},{\"prefix\":\"3A\",\"area\":\"Monaco\",\"areacn\":\"摩纳哥\",\"areacode\":\"MC\"},{\"prefix\":\"3C\",\"area\":\"Equatorial Guinea\",\"areacn\":\"赤道几内亚\",\"areacode\":\"GQ\"},{\"prefix\":\"3V\",\"area\":\"Tunisia\",\"areacn\":\"突尼斯\",\"areacode\":\"TN\"},{\"prefix\":\"3W\",\"area\":\"Viet Nam\",\"areacn\":\"越南\",\"areacode\":\"VN\"},{\"prefix\":\"XV\",\"area\":\"Viet Nam\",\"areacn\":\"越南\",\"areacode\":\"VN\"},{\"prefix\":\"3X\",\"area\":\"Guinea\",\"areacn\":\"几内亚\",\"areacode\":\"GN\"},{\"prefix\":\"3Y\",\"area\":\"Bouvet \",\"areacn\":\"布韦岛\",\"areacode\":\"NO\"},{\"prefix\":\"4J\",\"area\":\"Azerbaijan\",\"areacn\":\"阿塞拜疆\",\"areacode\":\"AZ\"},{\"prefix\":\"4K\",\"area\":\"Azerbaijan\",\"areacn\":\"阿塞拜疆\",\"areacode\":\"AZ\"},{\"prefix\":\"4L\",\"area\":\"Georgia\",\"areacn\":\"格鲁吉亚\",\"areacode\":\"GE\"},{\"prefix\":\"4O\",\"area\":\"Montenegro\",\"areacn\":\"黑山\",\"areacode\":\"ME\"},{\"prefix\":\"4S\",\"area\":\"Sri Lanka\",\"areacn\":\"斯里兰卡\",\"areacode\":\"LK\"},{\"prefix\":\"4W\",\"area\":\"Timor - Leste\",\"areacn\":\"东帝汶\",\"areacode\":\"TL\"},{\"prefix\":\"4X\",\"area\":\"Israel\",\"areacn\":\"以色列\",\"areacode\":\"IL\"},{\"prefix\":\"4Z\",\"area\":\"Israel\",\"areacn\":\"以色列\",\"areacode\":\"IL\"},{\"prefix\":\"5A\",\"area\":\"Libya\",\"areacn\":\"利比亚\",\"areacode\":\"LY\"},{\"prefix\":\"5B\",\"area\":\"Cyprus\",\"areacn\":\"塞浦路斯\",\"areacode\":\"CY\"},{\"prefix\":\"C4\",\"area\":\"Cyprus\",\"areacn\":\"塞浦路斯\",\"areacode\":\"CY\"},{\"prefix\":\"P3\",\"area\":\"Cyprus\",\"areacn\":\"塞浦路斯\",\"areacode\":\"CY\"},{\"prefix\":\"5H\",\"area\":\"Tanzania\",\"areacn\":\"坦桑尼亚\",\"areacode\":\"TZ\"},{\"prefix\":\"5I\",\"area\":\"Tanzania\",\"areacn\":\"坦桑尼亚\",\"areacode\":\"TZ\"},{\"prefix\":\"5N\",\"area\":\"Nigeria\",\"areacn\":\"尼日利亚\",\"areacode\":\"NG\"},{\"prefix\":\"5R\",\"area\":\"Madagascar\",\"areacn\":\"马达加斯加\",\"areacode\":\"MG\"},{\"prefix\":\"5T\",\"area\":\"Mauritania\",\"areacn\":\"毛里塔尼亚\",\"areacode\":\"MR\"},{\"prefix\":\"5U\",\"area\":\"Niger\",\"areacn\":\"尼日尔\",\"areacode\":\"NE\"},{\"prefix\":\"5V\",\"area\":\"Togo\",\"areacn\":\"多哥\",\"areacode\":\"TG\"},{\"prefix\":\"5W\",\"area\":\"Samoa\",\"areacn\":\"萨摩亚\",\"areacode\":\"\"},{\"prefix\":\"5X\",\"area\":\"Uganda\",\"areacn\":\"乌干达\",\"areacode\":\"UG\"},{\"prefix\":\"5Y\",\"area\":\"Kenya\",\"areacn\":\"肯尼亚\",\"areacode\":\"KE\"},{\"prefix\":\"6V\",\"area\":\"Senegal\",\"areacn\":\"塞内加尔\",\"areacode\":\"SN\"},{\"prefix\":\"6W\",\"area\":\"Senegal\",\"areacn\":\"塞内加尔\",\"areacode\":\"SN\"},{\"prefix\":\"6Y\",\"area\":\"Jamaica\",\"areacn\":\"牙买加\",\"areacode\":\"JM\"},{\"prefix\":\"7O\",\"area\":\"Yemen\",\"areacn\":\"也门\",\"areacode\":\"YE\"},{\"prefix\":\"7P\",\"area\":\"Lesotho\",\"areacn\":\"莱索托\",\"areacode\":\"LS\"},{\"prefix\":\"7Q\",\"area\":\"Malawi\",\"areacn\":\"马拉维\",\"areacode\":\"MW\"},{\"prefix\":\"7T\",\"area\":\"Algeria\",\"areacn\":\"阿尔及利亚\",\"areacode\":\"DZ\"},{\"prefix\":\"7U\",\"area\":\"Algeria\",\"areacn\":\"阿尔及利亚\",\"areacode\":\"DZ\"},{\"prefix\":\"7V\",\"area\":\"Algeria\",\"areacn\":\"阿尔及利亚\",\"areacode\":\"DZ\"},{\"prefix\":\"7W\",\"area\":\"Algeria\",\"areacn\":\"阿尔及利亚\",\"areacode\":\"DZ\"},{\"prefix\":\"7X\",\"area\":\"Algeria\",\"areacn\":\"阿尔及利亚\",\"areacode\":\"DZ\"},{\"prefix\":\"7Y\",\"area\":\"Algeria\",\"areacn\":\"阿尔及利亚\",\"areacode\":\"DZ\"},{\"prefix\":\"8P\",\"area\":\"Barbados\",\"areacn\":\"巴巴多斯\",\"areacode\":\"BB\"},{\"prefix\":\"8Q\",\"area\":\"Maldives\",\"areacn\":\"马尔代夫\",\"areacode\":\"MV\"},{\"prefix\":\"8R\",\"area\":\"Guyana\",\"areacn\":\"圭亚那\",\"areacode\":\"GY\"},{\"prefix\":\"9A\",\"area\":\"Croatia\",\"areacn\":\"克罗地亚\",\"areacode\":\"HR\"},{\"prefix\":\"9G\",\"area\":\"Ghana\",\"areacn\":\"加纳\",\"areacode\":\"GH\"},{\"prefix\":\"9H\",\"area\":\"Malta\",\"areacn\":\"马耳他\",\"areacode\":\"MT\"},{\"prefix\":\"9I\",\"area\":\"Zambia\",\"areacn\":\"赞比亚\",\"areacode\":\"ZM\"},{\"prefix\":\"9J\",\"area\":\"Zambia\",\"areacn\":\"赞比亚\",\"areacode\":\"ZM\"},{\"prefix\":\"9K\",\"area\":\"Kuwait\",\"areacn\":\"科威特\",\"areacode\":\"KW\"},{\"prefix\":\"9L\",\"area\":\"Sierra Leone\",\"areacn\":\"塞拉利昂\",\"areacode\":\"SL\"},{\"prefix\":\"9N\",\"area\":\"Nepal\",\"areacn\":\"尼泊尔\",\"areacode\":\"NP\"},{\"prefix\":\"9Q\",\"area\":\"Dem. Rep. of Congo\",\"areacn\":\"刚果民主共和国\",\"areacode\":\"CD\"},{\"prefix\":\"9R\",\"area\":\"Dem. Rep. of Congo\",\"areacn\":\"刚果民主共和国\",\"areacode\":\"CD\"},{\"prefix\":\"9S\",\"area\":\"Dem. Rep. of Congo\",\"areacn\":\"刚果民主共和国\",\"areacode\":\"CD\"},{\"prefix\":\"9T\",\"area\":\"Dem. Rep. of Congo\",\"areacn\":\"刚果民主共和国\",\"areacode\":\"CD\"},{\"prefix\":\"9U\",\"area\":\"Burundi\",\"areacn\":\"布隆迪\",\"areacode\":\"BI\"},{\"prefix\":\"9V\",\"area\":\"Singapore\",\"areacn\":\"新加坡\",\"areacode\":\"SG\"},{\"prefix\":\"9X\",\"area\":\"Rwanda\",\"areacn\":\"卢旺达\",\"areacode\":\"RW\"},{\"prefix\":\"9Y\",\"area\":\"Trinidad & Tobago\",\"areacn\":\"特立尼达和多巴哥\",\"areacode\":\"TT\"},{\"prefix\":\"9Z\",\"area\":\"Trinidad & Tobago\",\"areacn\":\"特立尼达和多巴哥\",\"areacode\":\"TT\"},{\"prefix\":\"A2\",\"area\":\"Botswana\",\"areacn\":\"博茨瓦纳\",\"areacode\":\"BW\"},{\"prefix\":\"A3\",\"area\":\"Tonga\",\"areacn\":\"汤加\",\"areacode\":\"TO\"},{\"prefix\":\"A4\",\"area\":\"Oman\",\"areacn\":\"阿曼\",\"areacode\":\"OM\"},{\"prefix\":\"A5\",\"area\":\"Bhutan\",\"areacn\":\"不丹\",\"areacode\":\"BT\"},{\"prefix\":\"A6\",\"area\":\"United Arab Emirates\",\"areacn\":\"阿拉伯联合酋长国\",\"areacode\":\"AE\"},{\"prefix\":\"A7\",\"area\":\"Qatar\",\"areacn\":\"卡塔尔\",\"areacode\":\"QA\"},{\"prefix\":\"A9\",\"area\":\"Bahrain\",\"areacn\":\"巴林\",\"areacode\":\"BH\"},{\"prefix\":\"AP\",\"area\":\"Pakistan\",\"areacn\":\"巴基斯坦\",\"areacode\":\"PK\"},{\"prefix\":\"BN\",\"area\":\"Taiwan\",\"areacn\":\"台湾\",\"areacode\":\"TW\"},{\"prefix\":\"BM\",\"area\":\"Taiwan\",\"areacn\":\"台湾\",\"areacode\":\"TW\"},{\"prefix\":\"BW\",\"area\":\"Taiwan\",\"areacn\":\"台湾\",\"areacode\":\"TW\"},{\"prefix\":\"BV\",\"area\":\"Taiwan\",\"areacn\":\"台湾\",\"areacode\":\"TW\"},{\"prefix\":\"BO\",\"area\":\"Taiwan\",\"areacn\":\"台湾\",\"areacode\":\"TW\"},{\"prefix\":\"BX\",\"area\":\"Taiwan\",\"areacn\":\"台湾\",\"areacode\":\"TW\"},{\"prefix\":\"C2\",\"area\":\"Nauru\",\"areacn\":\"瑙鲁\",\"areacode\":\"NR\"},{\"prefix\":\"C3\",\"area\":\"Andorra\",\"areacn\":\"安道尔\",\"areacode\":\"AD\"},{\"prefix\":\"C5\",\"area\":\"The Gambia\",\"areacn\":\"冈比亚\",\"areacode\":\"GM\"},{\"prefix\":\"C6\",\"area\":\"Bahamas\",\"areacn\":\"巴哈马\",\"areacode\":\"BS\"},{\"prefix\":\"C8\",\"area\":\"Mozambique\",\"areacn\":\"莫桑比克\",\"areacode\":\"MZ\"},{\"prefix\":\"C9\",\"area\":\"Mozambique\",\"areacn\":\"莫桑比克\",\"areacode\":\"MZ\"},{\"prefix\":\"CA\",\"area\":\"Chile\",\"areacn\":\"智利\",\"areacode\":\"CL\"},{\"prefix\":\"CB\",\"area\":\"Chile\",\"areacn\":\"智利\",\"areacode\":\"CL\"},{\"prefix\":\"CC\",\"area\":\"Chile\",\"areacn\":\"智利\",\"areacode\":\"CL\"},{\"prefix\":\"CD\",\"area\":\"Chile\",\"areacn\":\"智利\",\"areacode\":\"CL\"},{\"prefix\":\"CE\",\"area\":\"Chile\",\"areacn\":\"智利\",\"areacode\":\"CL\"},{\"prefix\":\"XQ\",\"area\":\"Chile\",\"areacn\":\"智利\",\"areacode\":\"CL\"},{\"prefix\":\"XR\",\"area\":\"Chile\",\"areacn\":\"智利\",\"areacode\":\"CL\"},{\"prefix\":\"3G\",\"area\":\"Chile\",\"areacn\":\"智利\",\"areacode\":\"CL\"},{\"prefix\":\"CM\",\"area\":\"Cuba\",\"areacn\":\"古巴\",\"areacode\":\"CU\"},{\"prefix\":\"CO\",\"area\":\"Cuba\",\"areacn\":\"古巴\",\"areacode\":\"CU\"},{\"prefix\":\"CN\",\"area\":\"Morocco\",\"areacn\":\"摩洛哥\",\"areacode\":\"MA\"},{\"prefix\":\"5C\",\"area\":\"Morocco\",\"areacn\":\"摩洛哥\",\"areacode\":\"MA\"},{\"prefix\":\"5D\",\"area\":\"Morocco\",\"areacn\":\"摩洛哥\",\"areacode\":\"MA\"},{\"prefix\":\"5G\",\"area\":\"Morocco\",\"areacn\":\"摩洛哥\",\"areacode\":\"MA\"},{\"prefix\":\"5F\",\"area\":\"Morocco\",\"areacn\":\"摩洛哥\",\"areacode\":\"MA\"},{\"prefix\":\"5E\",\"area\":\"Morocco\",\"areacn\":\"摩洛哥\",\"areacode\":\"MA\"},{\"prefix\":\"CP\",\"area\":\"Bolivia\",\"areacn\":\"玻利维亚\",\"areacode\":\"BO\"},{\"prefix\":\"CT\",\"area\":\"Portugal\",\"areacn\":\"葡萄牙\",\"areacode\":\"PT\"},{\"prefix\":\"CS\",\"area\":\"Portugal\",\"areacn\":\"葡萄牙\",\"areacode\":\"PT\"},{\"prefix\":\"CR\",\"area\":\"Portugal\",\"areacn\":\"葡萄牙\",\"areacode\":\"PT\"},{\"prefix\":\"CQ\",\"area\":\"Portugal\",\"areacn\":\"葡萄牙\",\"areacode\":\"PT\"},{\"prefix\":\"CU\",\"area\":\"Azores\",\"areacn\":\"亚速尔群岛\",\"areacode\":\"PT\"},{\"prefix\":\"CV\",\"area\":\"Uruguay\",\"areacn\":\"乌拉圭\",\"areacode\":\"UY\"},{\"prefix\":\"CW\",\"area\":\"Uruguay\",\"areacn\":\"乌拉圭\",\"areacode\":\"UY\"},{\"prefix\":\"CX\",\"area\":\"Uruguay\",\"areacn\":\"乌拉圭\",\"areacode\":\"UY\"},{\"prefix\":\"D2\",\"area\":\"Angola\",\"areacn\":\"安哥拉\",\"areacode\":\"AO\"},{\"prefix\":\"D3\",\"area\":\"Angola\",\"areacn\":\"安哥拉\",\"areacode\":\"AO\"},{\"prefix\":\"D4\",\"area\":\"Cape Verde\",\"areacn\":\"佛得角\",\"areacode\":\"CV\"},{\"prefix\":\"D6\",\"area\":\"Comoros\",\"areacn\":\"科摩罗\",\"areacode\":\"KM\"},{\"prefix\":\"DA\",\"area\":\"Germany\",\"areacn\":\"德国\",\"areacode\":\"DE\"},{\"prefix\":\"DB\",\"area\":\"Germany\",\"areacn\":\"德国\",\"areacode\":\"DE\"},{\"prefix\":\"DC\",\"area\":\"Germany\",\"areacn\":\"德国\",\"areacode\":\"DE\"},{\"prefix\":\"DD\",\"area\":\"Germany\",\"areacn\":\"德国\",\"areacode\":\"DE\"},{\"prefix\":\"DE\",\"area\":\"Germany\",\"areacn\":\"德国\",\"areacode\":\"DE\"},{\"prefix\":\"DF\",\"area\":\"Germany\",\"areacn\":\"德国\",\"areacode\":\"DE\"},{\"prefix\":\"DG\",\"area\":\"Germany\",\"areacn\":\"德国\",\"areacode\":\"DE\"},{\"prefix\":\"DH\",\"area\":\"Germany\",\"areacn\":\"德国\",\"areacode\":\"DE\"},{\"prefix\":\"DI\",\"area\":\"Germany\",\"areacn\":\"德国\",\"areacode\":\"DE\"},{\"prefix\":\"DJ\",\"area\":\"Germany\",\"areacn\":\"德国\",\"areacode\":\"DE\"},{\"prefix\":\"DK\",\"area\":\"Germany\",\"areacn\":\"德国\",\"areacode\":\"DE\"},{\"prefix\":\"DL\",\"area\":\"Germany\",\"areacn\":\"德国\",\"areacode\":\"DE\"},{\"prefix\":\"DM\",\"area\":\"Germany\",\"areacn\":\"德国\",\"areacode\":\"DE\"},{\"prefix\":\"DN\",\"area\":\"Germany\",\"areacn\":\"德国\",\"areacode\":\"DE\"},{\"prefix\":\"DO\",\"area\":\"Germany\",\"areacn\":\"德国\",\"areacode\":\"DE\"},{\"prefix\":\"DP\",\"area\":\"Germany\",\"areacn\":\"德国\",\"areacode\":\"DE\"},{\"prefix\":\"DQ\",\"area\":\"Germany\",\"areacn\":\"德国\",\"areacode\":\"DE\"},{\"prefix\":\"DR\",\"area\":\"Germany\",\"areacn\":\"德国\",\"areacode\":\"DE\"},{\"prefix\":\"DS\",\"area\":\"Republic of Korea\",\"areacn\":\"韩国\",\"areacode\":\"KR\"},{\"prefix\":\"DT\",\"area\":\"Republic of Korea\",\"areacn\":\"韩国\",\"areacode\":\"KR\"},{\"prefix\":\"DU\",\"area\":\"Republic of the Philippines\",\"areacn\":\"菲律宾\",\"areacode\":\"PH\"},{\"prefix\":\"DV\",\"area\":\"Republic of the Philippines\",\"areacn\":\"菲律宾\",\"areacode\":\"PH\"},{\"prefix\":\"DW\",\"area\":\"Republic of the Philippines\",\"areacn\":\"菲律宾\",\"areacode\":\"PH\"},{\"prefix\":\"DX\",\"area\":\"Republic of the Philippines\",\"areacn\":\"菲律宾\",\"areacode\":\"PH\"},{\"prefix\":\"DY\",\"area\":\"Republic of the Philippines\",\"areacn\":\"菲律宾\",\"areacode\":\"PH\"},{\"prefix\":\"DZ\",\"area\":\"Republic of the Philippines\",\"areacn\":\"菲律宾\",\"areacode\":\"PH\"},{\"prefix\":\"E3\",\"area\":\"Eritrea\",\"areacn\":\"厄立特里亚\",\"areacode\":\"ER\"},{\"prefix\":\"E4\",\"area\":\"Palestine\",\"areacn\":\"巴勒斯坦国\",\"areacode\":\"PS\"},{\"prefix\":\"E5\",\"area\":\"N. Cook Is.\",\"areacn\":\"N. Cook Is.\"},{\"prefix\":\"E7\",\"area\":\"Bosnia-Herzegovina\",\"areacn\":\"波斯尼亚和黑塞哥维那\",\"areacode\":\"BA\"},{\"prefix\":\"EA\",\"area\":\"Spain\",\"areacn\":\"西班牙\",\"areacode\":\"ES\"},{\"prefix\":\"EB\",\"area\":\"Spain\",\"areacn\":\"西班牙\",\"areacode\":\"ES\"},{\"prefix\":\"EC\",\"area\":\"Spain\",\"areacn\":\"西班牙\",\"areacode\":\"ES\"},{\"prefix\":\"ED\",\"area\":\"Spain\",\"areacn\":\"西班牙\",\"areacode\":\"ES\"},{\"prefix\":\"EE\",\"area\":\"Spain\",\"areacn\":\"西班牙\",\"areacode\":\"ES\"},{\"prefix\":\"EF\",\"area\":\"Spain\",\"areacn\":\"西班牙\",\"areacode\":\"ES\"},{\"prefix\":\"EG\",\"area\":\"Spain\",\"areacn\":\"西班牙\",\"areacode\":\"ES\"},{\"prefix\":\"EH\",\"area\":\"Spain\",\"areacn\":\"西班牙\",\"areacode\":\"ES\"},{\"prefix\":\"AO\",\"area\":\"Spain\",\"areacn\":\"西班牙\",\"areacode\":\"ES\"},{\"prefix\":\"AN\",\"area\":\"Spain\",\"areacn\":\"西班牙\",\"areacode\":\"ES\"},{\"prefix\":\"AM\",\"area\":\"Spain\",\"areacn\":\"西班牙\",\"areacode\":\"ES\"},{\"prefix\":\"EI\",\"area\":\"Ireland\",\"areacn\":\"爱尔兰岛\",\"areacode\":\"IE\"},{\"prefix\":\"EJ\",\"area\":\"Ireland\",\"areacn\":\"爱尔兰岛\",\"areacode\":\"IE\"},{\"prefix\":\"EK\",\"area\":\"Armenia\",\"areacn\":\"亚美尼亚\",\"areacode\":\"AM\"},{\"prefix\":\"EL\",\"area\":\"Liberia\",\"areacn\":\"利比里亚\",\"areacode\":\"LR\"},{\"prefix\":\"EP\",\"area\":\"Iran\",\"areacn\":\"伊朗\",\"areacode\":\"IR\"},{\"prefix\":\"EQ\",\"area\":\"Iran\",\"areacn\":\"伊朗\",\"areacode\":\"IR\"},{\"prefix\":\"ER\",\"area\":\"Moldova\",\"areacn\":\"摩尔多瓦\",\"areacode\":\"MD\"},{\"prefix\":\"ES\",\"area\":\"Estonia\",\"areacn\":\"爱沙尼亚\",\"areacode\":\"EE\"},{\"prefix\":\"ET\",\"area\":\"Ethiopia\",\"areacn\":\"埃塞俄比亚\",\"areacode\":\"ET\"},{\"prefix\":\"EU\",\"area\":\"Belarus\",\"areacn\":\"白俄罗斯\",\"areacode\":\"BY\"},{\"prefix\":\"EV\",\"area\":\"Belarus\",\"areacn\":\"白俄罗斯\",\"areacode\":\"BY\"},{\"prefix\":\"EW\",\"area\":\"Belarus\",\"areacn\":\"白俄罗斯\",\"areacode\":\"BY\"},{\"prefix\":\"EX\",\"area\":\"Kyrgyzstan\",\"areacn\":\"吉尔吉斯斯坦\",\"areacode\":\"KG\"},{\"prefix\":\"EY\",\"area\":\"Tajikistan\",\"areacn\":\"塔吉克斯坦共和国\",\"areacode\":\"TJ\"},{\"prefix\":\"EZ\",\"area\":\"Turkmenistan\",\"areacn\":\"土库曼斯坦\",\"areacode\":\"TM\"},{\"prefix\":\"FG\",\"area\":\"Guadeloupe\",\"areacn\":\"瓜德罗普\",\"areacode\":\"FR\"},{\"prefix\":\"FH\",\"area\":\"Mayotte\",\"areacn\":\"马约特\",\"areacode\":\"FR\"},{\"prefix\":\"FJ\",\"area\":\"Saint Barthelemy\",\"areacn\":\"圣巴泰勒米\",\"areacode\":\"FR\"},{\"prefix\":\"FK\",\"area\":\"New Caledonia\",\"areacn\":\"新喀里多尼亚\",\"areacode\":\"FR\"},{\"prefix\":\"FM\",\"area\":\"Martinique\",\"areacn\":\"马提尼克\",\"areacode\":\"FR\"},{\"prefix\":\"FO\",\"area\":\"French Polynesia\",\"areacn\":\"法属波利尼西亚\",\"areacode\":\"FR\"},{\"prefix\":\"FP\",\"area\":\"St. Pierre & Miquelon\",\"areacn\":\"圣皮埃尔和密克隆\",\"areacode\":\"FR\"},{\"prefix\":\"FR\",\"area\":\"Juan de Nova, Europa\",\"areacn\":\"新胡安岛\",\"areacode\":\"FR\"},{\"prefix\":\"FS\",\"area\":\"Saint Martin\",\"areacn\":\"圣马丁岛\",\"areacode\":\"FR\"},{\"prefix\":\"FT\",\"area\":\"Crozet I.,Kerguelen Is.,Amsterdam & St. Paul Is.\",\"areacn\":\"Crozet I.,Kerguelen Is.,Amsterdam & St. Paul Is.\",\"areacode\":\"FR\"},{\"prefix\":\"FW\",\"area\":\"Wallis & Futuna Is\",\"areacn\":\"Wallis & Futuna Is\",\"areacode\":\"FR\"},{\"prefix\":\"FY\",\"area\":\"French Guiana\",\"areacn\":\"法属圭亚那\",\"areacode\":\"FR\"},{\"prefix\":\"TX\",\"area\":\"French ISLANDS\",\"areacn\":\"法国海外领地\",\"areacode\":\"FR\"},{\"prefix\":\"TO\",\"area\":\"French ISLANDS\",\"areacn\":\"法国海外领地\",\"areacode\":\"FR\"},{\"prefix\":\"GD\",\"area\":\"Isle of Man\",\"areacn\":\"马恩岛\",\"areacode\":\"UK\"},{\"prefix\":\"GT\",\"area\":\"Isle of Man\",\"areacn\":\"马恩岛\",\"areacode\":\"UK\"},{\"prefix\":\"GI\",\"area\":\"Northern Ireland\",\"areacn\":\"北爱尔兰\",\"areacode\":\"UK\"},{\"prefix\":\"GN\",\"area\":\"Northern Ireland\",\"areacn\":\"北爱尔兰\",\"areacode\":\"UK\"},{\"prefix\":\"GJ\",\"area\":\"Jersey\",\"areacn\":\"泽西岛\",\"areacode\":\"UK\"},{\"prefix\":\"GH\",\"area\":\"Jersey\",\"areacn\":\"泽西岛\",\"areacode\":\"UK\"},{\"prefix\":\"GM\",\"area\":\"Scotland\",\"areacn\":\"苏格兰\",\"areacode\":\"UK\"},{\"prefix\":\"GS\",\"area\":\"Scotland\",\"areacn\":\"苏格兰\",\"areacode\":\"UK\"},{\"prefix\":\"GU\",\"area\":\"Guernsey\",\"areacn\":\"根西岛\",\"areacode\":\"UK\"},{\"prefix\":\"GP\",\"area\":\"Guernsey\",\"areacn\":\"根西岛\",\"areacode\":\"UK\"},{\"prefix\":\"GW\",\"area\":\"Wales\",\"areacn\":\"威尔士\",\"areacode\":\"UK\"},{\"prefix\":\"GC\",\"area\":\"Wales\",\"areacn\":\"威尔士\",\"areacode\":\"UK\"},{\"prefix\":\"2E\",\"area\":\"England\",\"areacn\":\"英格兰\",\"areacode\":\"UK\"},{\"prefix\":\"2M\",\"area\":\"Scotland\",\"areacn\":\"苏格兰\",\"areacode\":\"UK\"},{\"prefix\":\"MM\",\"area\":\"Scotland\",\"areacn\":\"苏格兰\",\"areacode\":\"UK\"},{\"prefix\":\"H4\",\"area\":\"Solomon Is.\",\"areacn\":\"所罗门群岛\",\"areacode\":\"SB\"},{\"prefix\":\"HA\",\"area\":\"Hungary\",\"areacn\":\"匈牙利\",\"areacode\":\"HU\"},{\"prefix\":\"HG\",\"area\":\"Hungary\",\"areacn\":\"匈牙利\",\"areacode\":\"HU\"},{\"prefix\":\"HB\",\"area\":\"Switzerland\",\"areacn\":\"瑞士\",\"areacode\":\"CH\"},{\"prefix\":\"HC\",\"area\":\"Ecuador\",\"areacn\":\"厄瓜多尔\",\"areacode\":\"EC\"},{\"prefix\":\"HD\",\"area\":\"Ecuador\",\"areacn\":\"厄瓜多尔\",\"areacode\":\"EC\"},{\"prefix\":\"HH\",\"area\":\"Haiti\",\"areacn\":\"海地\",\"areacode\":\"HT\"},{\"prefix\":\"4V\",\"area\":\"Haiti\",\"areacn\":\"海地\",\"areacode\":\"HT\"},{\"prefix\":\"HI\",\"area\":\"Dominican Republic\",\"areacn\":\"多米尼加\",\"areacode\":\"DO\"},{\"prefix\":\"HJ\",\"area\":\"Colombia\",\"areacn\":\"哥伦比亚\",\"areacode\":\"CO\"},{\"prefix\":\"HK\",\"area\":\"Colombia\",\"areacn\":\"哥伦比亚\",\"areacode\":\"CO\"},{\"prefix\":\"5J\",\"area\":\"Colombia\",\"areacn\":\"哥伦比亚\",\"areacode\":\"CO\"},{\"prefix\":\"5K\",\"area\":\"Colombia\",\"areacn\":\"哥伦比亚\",\"areacode\":\"CO\"},{\"prefix\":\"HL\",\"area\":\"Republic of Korea\",\"areacn\":\"韩国\",\"areacode\":\"KR\"},{\"prefix\":\"6K\",\"area\":\"Republic of Korea\",\"areacn\":\"韩国\",\"areacode\":\"KR\"},{\"prefix\":\"6L\",\"area\":\"Republic of Korea\",\"areacn\":\"韩国\",\"areacode\":\"KR\"},{\"prefix\":\"6M\",\"area\":\"Republic of Korea\",\"areacn\":\"韩国\",\"areacode\":\"KR\"},{\"prefix\":\"6N\",\"area\":\"Republic of Korea\",\"areacn\":\"韩国\",\"areacode\":\"KR\"},{\"prefix\":\"HO\",\"area\":\"Panama\",\"areacn\":\"巴拿马\",\"areacode\":\"PA\"},{\"prefix\":\"HP\",\"area\":\"Panama\",\"areacn\":\"巴拿马\",\"areacode\":\"PA\"},{\"prefix\":\"HQ\",\"area\":\"Honduras\",\"areacn\":\"洪都拉斯\",\"areacode\":\"HN\"},{\"prefix\":\"HR\",\"area\":\"Honduras\",\"areacn\":\"洪都拉斯\",\"areacode\":\"HN\"},{\"prefix\":\"HS\",\"area\":\"Thailand\",\"areacn\":\"泰国\",\"areacode\":\"TH\"},{\"prefix\":\"E2\",\"area\":\"Thailand\",\"areacn\":\"泰国\",\"areacode\":\"TH\"},{\"prefix\":\"HV\",\"area\":\"Vatican\",\"areacn\":\"梵蒂冈\",\"areacode\":\"VA\"},{\"prefix\":\"HZ\",\"area\":\"Saudi Arabia\",\"areacn\":\"沙特阿拉伯\",\"areacode\":\"SA\"},{\"prefix\":\"J2\",\"area\":\"Djibouti\",\"areacn\":\"吉布提\",\"areacode\":\"DJ\"},{\"prefix\":\"J3\",\"area\":\"Grenada\",\"areacn\":\"格林纳达\",\"areacode\":\"GD\"},{\"prefix\":\"J5\",\"area\":\"Guinea-Bissau\",\"areacn\":\"几内亚比绍\",\"areacode\":\"GW\"},{\"prefix\":\"J6\",\"area\":\"St. Lucia\",\"areacn\":\"圣卢西亚\",\"areacode\":\"LC\"},{\"prefix\":\"J7\",\"area\":\"Dominica\",\"areacn\":\"多米尼克国\",\"areacode\":\"DM\"},{\"prefix\":\"J8\",\"area\":\"St. Vincent\",\"areacn\":\"圣文森特和格林纳丁斯\",\"areacode\":\"VC\"},{\"prefix\":\"JA\",\"area\":\"Japan\",\"areacn\":\"日本\",\"areacode\":\"JP\"},{\"prefix\":\"JB\",\"area\":\"Japan\",\"areacn\":\"日本\",\"areacode\":\"JP\"},{\"prefix\":\"JC\",\"area\":\"Japan\",\"areacn\":\"日本\",\"areacode\":\"JP\"},{\"prefix\":\"JD\",\"area\":\"Japan\",\"areacn\":\"日本\",\"areacode\":\"JP\"},{\"prefix\":\"JE\",\"area\":\"Japan\",\"areacn\":\"日本\",\"areacode\":\"JP\"},{\"prefix\":\"JF\",\"area\":\"Japan\",\"areacn\":\"日本\",\"areacode\":\"JP\"},{\"prefix\":\"JG\",\"area\":\"Japan\",\"areacn\":\"日本\",\"areacode\":\"JP\"},{\"prefix\":\"JH\",\"area\":\"Japan\",\"areacn\":\"日本\",\"areacode\":\"JP\"},{\"prefix\":\"JI\",\"area\":\"Japan\",\"areacn\":\"日本\",\"areacode\":\"JP\"},{\"prefix\":\"JJ\",\"area\":\"Japan\",\"areacn\":\"日本\",\"areacode\":\"JP\"},{\"prefix\":\"JK\",\"area\":\"Japan\",\"areacn\":\"日本\",\"areacode\":\"JP\"},{\"prefix\":\"JL\",\"area\":\"Japan\",\"areacn\":\"日本\",\"areacode\":\"JP\"},{\"prefix\":\"JM\",\"area\":\"Japan\",\"areacn\":\"日本\",\"areacode\":\"JP\"},{\"prefix\":\"JN\",\"area\":\"Japan\",\"areacn\":\"日本\",\"areacode\":\"JP\"},{\"prefix\":\"JO\",\"area\":\"Japan\",\"areacn\":\"日本\",\"areacode\":\"JP\"},{\"prefix\":\"JP\",\"area\":\"Japan\",\"areacn\":\"日本\",\"areacode\":\"JP\"},{\"prefix\":\"JQ\",\"area\":\"Japan\",\"areacn\":\"日本\",\"areacode\":\"JP\"},{\"prefix\":\"JR\",\"area\":\"Japan\",\"areacn\":\"日本\",\"areacode\":\"JP\"},{\"prefix\":\"JS\",\"area\":\"Japan\",\"areacn\":\"日本\",\"areacode\":\"JP\"},{\"prefix\":\"7J\",\"area\":\"Japan\",\"areacn\":\"日本\",\"areacode\":\"JP\"},{\"prefix\":\"7K\",\"area\":\"Japan\",\"areacn\":\"日本\",\"areacode\":\"JP\"},{\"prefix\":\"7L\",\"area\":\"Japan\",\"areacn\":\"日本\",\"areacode\":\"JP\"},{\"prefix\":\"7M\",\"area\":\"Japan\",\"areacn\":\"日本\",\"areacode\":\"JP\"},{\"prefix\":\"7N\",\"area\":\"Japan\",\"areacn\":\"日本\",\"areacode\":\"JP\"},{\"prefix\":\"8N\",\"area\":\"Japan\",\"areacn\":\"日本\",\"areacode\":\"JP\"},{\"prefix\":\"8J\",\"area\":\"Japan\",\"areacn\":\"日本\",\"areacode\":\"JP\"},{\"prefix\":\"JT\",\"area\":\"Mongolia\",\"areacn\":\"蒙古\",\"areacode\":\"MN\"},{\"prefix\":\"JU\",\"area\":\"Mongolia\",\"areacn\":\"蒙古\",\"areacode\":\"MN\"},{\"prefix\":\"JV\",\"area\":\"Mongolia\",\"areacn\":\"蒙古\",\"areacode\":\"MN\"},{\"prefix\":\"JW\",\"area\":\"Svalbard\",\"areacn\":\"斯瓦尔巴\",\"areacode\":\"NO\"},{\"prefix\":\"JX\",\"area\":\"Jan Mayen\",\"areacn\":\"扬马延\",\"areacode\":\"NO\"},{\"prefix\":\"JY\",\"area\":\"Jordan\",\"areacn\":\"约旦\",\"areacode\":\"JO\"},{\"prefix\":\"AA\",\"area\":\"United States of America\",\"areacn\":\"美国\",\"areacode\":\"US\"},{\"prefix\":\"AB\",\"area\":\"United States of America\",\"areacn\":\"美国\",\"areacode\":\"US\"},{\"prefix\":\"AC\",\"area\":\"United States of America\",\"areacn\":\"美国\",\"areacode\":\"US\"},{\"prefix\":\"AD\",\"area\":\"United States of America\",\"areacn\":\"美国\",\"areacode\":\"US\"},{\"prefix\":\"AE\",\"area\":\"United States of America\",\"areacn\":\"美国\",\"areacode\":\"US\"},{\"prefix\":\"AF\",\"area\":\"United States of America\",\"areacn\":\"美国\",\"areacode\":\"US\"},{\"prefix\":\"AG\",\"area\":\"United States of America\",\"areacn\":\"美国\",\"areacode\":\"US\"},{\"prefix\":\"AH\",\"area\":\"United States of America\",\"areacn\":\"美国\",\"areacode\":\"US\"},{\"prefix\":\"AI\",\"area\":\"United States of America\",\"areacn\":\"美国\",\"areacode\":\"US\"},{\"prefix\":\"AJ\",\"area\":\"United States of America\",\"areacn\":\"美国\",\"areacode\":\"US\"},{\"prefix\":\"AK\",\"area\":\"United States of America\",\"areacn\":\"美国\",\"areacode\":\"US\"},{\"prefix\":\"AL\",\"area\":\"Alaska\",\"areacn\":\"阿拉斯加\",\"areacode\":\"US\"},{\"prefix\":\"KL\",\"area\":\"Alaska\",\"areacn\":\"阿拉斯加\",\"areacode\":\"US\"},{\"prefix\":\"NL\",\"area\":\"Alaska\",\"areacn\":\"阿拉斯加\",\"areacode\":\"US\"},{\"prefix\":\"WL\",\"area\":\"Alaska\",\"areacn\":\"阿拉斯加\",\"areacode\":\"US\"},{\"prefix\":\"LA\",\"area\":\"Norway\",\"areacn\":\"挪威\",\"areacode\":\"NO\"},{\"prefix\":\"LB\",\"area\":\"Norway\",\"areacn\":\"挪威\",\"areacode\":\"NO\"},{\"prefix\":\"LC\",\"area\":\"Norway\",\"areacn\":\"挪威\",\"areacode\":\"NO\"},{\"prefix\":\"LD\",\"area\":\"Norway\",\"areacn\":\"挪威\",\"areacode\":\"NO\"},{\"prefix\":\"LE\",\"area\":\"Norway\",\"areacn\":\"挪威\",\"areacode\":\"NO\"},{\"prefix\":\"LF\",\"area\":\"Norway\",\"areacn\":\"挪威\",\"areacode\":\"NO\"},{\"prefix\":\"LG\",\"area\":\"Norway\",\"areacn\":\"挪威\",\"areacode\":\"NO\"},{\"prefix\":\"LH\",\"area\":\"Norway\",\"areacn\":\"挪威\",\"areacode\":\"NO\"},{\"prefix\":\"LI\",\"area\":\"Norway\",\"areacn\":\"挪威\",\"areacode\":\"NO\"},{\"prefix\":\"LJ\",\"area\":\"Norway\",\"areacn\":\"挪威\",\"areacode\":\"NO\"},{\"prefix\":\"LK\",\"area\":\"Norway\",\"areacn\":\"挪威\",\"areacode\":\"NO\"},{\"prefix\":\"LL\",\"area\":\"Norway\",\"areacn\":\"挪威\",\"areacode\":\"NO\"},{\"prefix\":\"LM\",\"area\":\"Norway\",\"areacn\":\"挪威\",\"areacode\":\"NO\"},{\"prefix\":\"LN\",\"area\":\"Norway\",\"areacn\":\"挪威\",\"areacode\":\"NO\"},{\"prefix\":\"LO\",\"area\":\"Argentina\",\"areacn\":\"阿根廷\",\"areacode\":\"AR\"},{\"prefix\":\"LP\",\"area\":\"Argentina\",\"areacn\":\"阿根廷\",\"areacode\":\"AR\"},{\"prefix\":\"LQ\",\"area\":\"Argentina\",\"areacn\":\"阿根廷\",\"areacode\":\"AR\"},{\"prefix\":\"LR\",\"area\":\"Argentina\",\"areacn\":\"阿根廷\",\"areacode\":\"AR\"},{\"prefix\":\"LS\",\"area\":\"Argentina\",\"areacn\":\"阿根廷\",\"areacode\":\"AR\"},{\"prefix\":\"LT\",\"area\":\"Argentina\",\"areacn\":\"阿根廷\",\"areacode\":\"AR\"},{\"prefix\":\"LU\",\"area\":\"Argentina\",\"areacn\":\"阿根廷\",\"areacode\":\"AR\"},{\"prefix\":\"LV\",\"area\":\"Argentina\",\"areacn\":\"阿根廷\",\"areacode\":\"AR\"},{\"prefix\":\"LW\",\"area\":\"Argentina\",\"areacn\":\"阿根廷\",\"areacode\":\"AR\"},{\"prefix\":\"LX\",\"area\":\"Luxembourg\",\"areacn\":\"卢森堡\",\"areacode\":\"LU\"},{\"prefix\":\"LY\",\"area\":\"Lithuania\",\"areacn\":\"立陶宛\",\"areacode\":\"LT\"},{\"prefix\":\"LZ\",\"area\":\"Bulgaria\",\"areacn\":\"保加利亚\",\"areacode\":\"BG\"},{\"prefix\":\"OA\",\"area\":\"Peru\",\"areacn\":\"秘鲁\",\"areacode\":\"PE\"},{\"prefix\":\"OB\",\"area\":\"Peru\",\"areacn\":\"秘鲁\",\"areacode\":\"PE\"},{\"prefix\":\"OC\",\"area\":\"Peru\",\"areacn\":\"秘鲁\",\"areacode\":\"PE\"},{\"prefix\":\"OD\",\"area\":\"Lebanon\",\"areacn\":\"黎巴嫩\",\"areacode\":\"LB\"},{\"prefix\":\"OE\",\"area\":\"Austria\",\"areacn\":\"奥地利\",\"areacode\":\"AT\"},{\"prefix\":\"OF\",\"area\":\"Finland\",\"areacn\":\"芬兰\",\"areacode\":\"FL\"},{\"prefix\":\"OG\",\"area\":\"Finland\",\"areacn\":\"芬兰\",\"areacode\":\"FL\"},{\"prefix\":\"OH\",\"area\":\"Finland\",\"areacn\":\"芬兰\",\"areacode\":\"FL\"},{\"prefix\":\"OI\",\"area\":\"Finland\",\"areacn\":\"芬兰\",\"areacode\":\"FL\"},{\"prefix\":\"OK\",\"area\":\"Czech Republic\",\"areacn\":\"捷克\",\"areacode\":\"CZ\"},{\"prefix\":\"OL\",\"area\":\"Czech Republic\",\"areacn\":\"捷克\",\"areacode\":\"CZ\"},{\"prefix\":\"OM\",\"area\":\"Slovak Republic\",\"areacn\":\"斯洛伐克\",\"areacode\":\"SK\"},{\"prefix\":\"ON\",\"area\":\"Belgium\",\"areacn\":\"比利时\",\"areacode\":\"BE\"},{\"prefix\":\"OO\",\"area\":\"Belgium\",\"areacn\":\"比利时\",\"areacode\":\"BE\"},{\"prefix\":\"OP\",\"area\":\"Belgium\",\"areacn\":\"比利时\",\"areacode\":\"BE\"},{\"prefix\":\"OQ\",\"area\":\"Belgium\",\"areacn\":\"比利时\",\"areacode\":\"BE\"},{\"prefix\":\"OR\",\"area\":\"Belgium\",\"areacn\":\"比利时\",\"areacode\":\"BE\"},{\"prefix\":\"OS\",\"area\":\"Belgium\",\"areacn\":\"比利时\",\"areacode\":\"BE\"},{\"prefix\":\"OT\",\"area\":\"Belgium\",\"areacn\":\"比利时\",\"areacode\":\"BE\"},{\"prefix\":\"OU\",\"area\":\"Denmark\",\"areacn\":\"丹麦\",\"areacode\":\"DK\"},{\"prefix\":\"OV\",\"area\":\"Denmark\",\"areacn\":\"丹麦\",\"areacode\":\"DK\"},{\"prefix\":\"OW\",\"area\":\"Denmark\",\"areacn\":\"丹麦\",\"areacode\":\"DK\"},{\"prefix\":\"OX\",\"area\":\"Greenland\",\"areacn\":\"格陵兰\",\"areacode\":\"DK\"},{\"prefix\":\"OZ\",\"area\":\"Denmark\",\"areacn\":\"丹麦\",\"areacode\":\"DK\"},{\"prefix\":\"OY\",\"area\":\"Faroe Is.\",\"areacn\":\"法罗群岛\",\"areacode\":\"DK\"},{\"prefix\":\"P2\",\"area\":\"Papua New Guinea\",\"areacn\":\"巴布亚新几内亚\",\"areacode\":\"PG\"},{\"prefix\":\"P4\",\"area\":\"Aruba\",\"areacn\":\"阿鲁巴\",\"areacode\":\"AW\"},{\"prefix\":\"P5\",\"area\":\"DPR of Korea\",\"areacn\":\"朝鲜\",\"areacode\":\"KP\"},{\"prefix\":\"PA\",\"area\":\"Netherlands\",\"areacn\":\"荷兰\",\"areacode\":\"NL\"},{\"prefix\":\"PB\",\"area\":\"Netherlands\",\"areacn\":\"荷兰\",\"areacode\":\"NL\"},{\"prefix\":\"PC\",\"area\":\"Netherlands\",\"areacn\":\"荷兰\",\"areacode\":\"NL\"},{\"prefix\":\"PD\",\"area\":\"Netherlands\",\"areacn\":\"荷兰\",\"areacode\":\"NL\"},{\"prefix\":\"PE\",\"area\":\"Netherlands\",\"areacn\":\"荷兰\",\"areacode\":\"NL\"},{\"prefix\":\"PF\",\"area\":\"Netherlands\",\"areacn\":\"荷兰\",\"areacode\":\"NL\"},{\"prefix\":\"PG\",\"area\":\"Netherlands\",\"areacn\":\"荷兰\",\"areacode\":\"NL\"},{\"prefix\":\"PH\",\"area\":\"Netherlands\",\"areacn\":\"荷兰\",\"areacode\":\"NL\"},{\"prefix\":\"PI\",\"area\":\"Netherlands\",\"areacn\":\"荷兰\",\"areacode\":\"NL\"},{\"prefix\":\"PP\",\"area\":\"Brazil\",\"areacn\":\"巴西\",\"areacode\":\"BR\"},{\"prefix\":\"PQ\",\"area\":\"Brazil\",\"areacn\":\"巴西\",\"areacode\":\"BR\"},{\"prefix\":\"PR\",\"area\":\"Brazil\",\"areacn\":\"巴西\",\"areacode\":\"BR\"},{\"prefix\":\"PS\",\"area\":\"Brazil\",\"areacn\":\"巴西\",\"areacode\":\"BR\"},{\"prefix\":\"PT\",\"area\":\"Brazil\",\"areacn\":\"巴西\",\"areacode\":\"BR\"},{\"prefix\":\"PU\",\"area\":\"Brazil\",\"areacn\":\"巴西\",\"areacode\":\"BR\"},{\"prefix\":\"PV\",\"area\":\"Brazil\",\"areacn\":\"巴西\",\"areacode\":\"BR\"},{\"prefix\":\"PW\",\"area\":\"Brazil\",\"areacn\":\"巴西\",\"areacode\":\"BR\"},{\"prefix\":\"PX\",\"area\":\"Brazil\",\"areacn\":\"巴西\",\"areacode\":\"BR\"},{\"prefix\":\"PY\",\"area\":\"Brazil\",\"areacn\":\"巴西\",\"areacode\":\"BR\"},{\"prefix\":\"PZ\",\"area\":\"Suriname\",\"areacn\":\"苏里南\",\"areacode\":\"SR\"},{\"prefix\":\"S0\",\"area\":\"Western Sahara\",\"areacn\":\"西撒哈拉\",\"areacode\":\"EH\"},{\"prefix\":\"S2\",\"area\":\"Bangladesh\",\"areacn\":\"孟加拉国\",\"areacode\":\"BD\"},{\"prefix\":\"S5\",\"area\":\"Slovenia\",\"areacn\":\"斯洛文尼亚\",\"areacode\":\"SI\"},{\"prefix\":\"S7\",\"area\":\"Seychelles\",\"areacn\":\"塞舌尔\",\"areacode\":\"SC\"},{\"prefix\":\"S9\",\"area\":\"Sao Tome & Principe\",\"areacn\":\"圣多美和普林西比\",\"areacode\":\"ST\"},{\"prefix\":\"SA\",\"area\":\"Sweden\",\"areacn\":\"瑞典\",\"areacode\":\"SE\"},{\"prefix\":\"SB\",\"area\":\"Sweden\",\"areacn\":\"瑞典\",\"areacode\":\"SE\"},{\"prefix\":\"SC\",\"area\":\"Sweden\",\"areacn\":\"瑞典\",\"areacode\":\"SE\"},{\"prefix\":\"SD\",\"area\":\"Sweden\",\"areacn\":\"瑞典\",\"areacode\":\"SE\"},{\"prefix\":\"SE\",\"area\":\"Sweden\",\"areacn\":\"瑞典\",\"areacode\":\"SE\"},{\"prefix\":\"SH\",\"area\":\"Sweden\",\"areacn\":\"瑞典\",\"areacode\":\"SE\"},{\"prefix\":\"SG\",\"area\":\"Sweden\",\"areacn\":\"瑞典\",\"areacode\":\"SE\"},{\"prefix\":\"SH\",\"area\":\"Sweden\",\"areacn\":\"瑞典\",\"areacode\":\"SE\"},{\"prefix\":\"SI\",\"area\":\"Sweden\",\"areacn\":\"瑞典\",\"areacode\":\"SE\"},{\"prefix\":\"SJ\",\"area\":\"Sweden\",\"areacn\":\"瑞典\",\"areacode\":\"SE\"},{\"prefix\":\"SK\",\"area\":\"Sweden\",\"areacn\":\"瑞典\",\"areacode\":\"SE\"},{\"prefix\":\"SL\",\"area\":\"Sweden\",\"areacn\":\"瑞典\",\"areacode\":\"SE\"},{\"prefix\":\"SM\",\"area\":\"Sweden\",\"areacn\":\"瑞典\",\"areacode\":\"SE\"},{\"prefix\":\"SN\",\"area\":\"Poland\",\"areacn\":\"波兰\",\"areacode\":\"PL\"},{\"prefix\":\"SO\",\"area\":\"Poland\",\"areacn\":\"波兰\",\"areacode\":\"PL\"},{\"prefix\":\"SP\",\"area\":\"Poland\",\"areacn\":\"波兰\",\"areacode\":\"PL\"},{\"prefix\":\"SQ\",\"area\":\"Poland\",\"areacn\":\"波兰\",\"areacode\":\"PL\"},{\"prefix\":\"SR\",\"area\":\"Poland\",\"areacn\":\"波兰\",\"areacode\":\"PL\"},{\"prefix\":\"ST\",\"area\":\"Sudan\",\"areacn\":\"苏丹共和国\",\"areacode\":\"SD\"},{\"prefix\":\"SU\",\"area\":\"Egypt\",\"areacn\":\"埃及\",\"areacode\":\"EG\"},{\"prefix\":\"SV\",\"area\":\"Greece\",\"areacn\":\"希腊\",\"areacode\":\"GR\"},{\"prefix\":\"SW\",\"area\":\"Greece\",\"areacn\":\"希腊\",\"areacode\":\"GR\"},{\"prefix\":\"SX\",\"area\":\"Greece\",\"areacn\":\"希腊\",\"areacode\":\"GR\"},{\"prefix\":\"SY\",\"area\":\"Greece\",\"areacn\":\"希腊\",\"areacode\":\"GR\"},{\"prefix\":\"SZ\",\"area\":\"Greece\",\"areacn\":\"希腊\",\"areacode\":\"GR\"},{\"prefix\":\"T2\",\"area\":\"Tuvalu\",\"areacn\":\"图瓦卢\",\"areacode\":\"TV\"},{\"prefix\":\"T3\",\"area\":\"Kiribati\",\"areacn\":\"基里巴斯\",\"areacode\":\"KI\"},{\"prefix\":\"T5\",\"area\":\"Somalia\",\"areacn\":\"索马里\",\"areacode\":\"SO\"},{\"prefix\":\"6O\",\"area\":\"Somalia\",\"areacn\":\"索马里\",\"areacode\":\"SO\"},{\"prefix\":\"T7\",\"area\":\"San Marino\",\"areacn\":\"圣马力诺\",\"areacode\":\"SM\"},{\"prefix\":\"T8\",\"area\":\"Palau\",\"areacn\":\"帕劳\",\"areacode\":\"PW\"},{\"prefix\":\"TA\",\"area\":\"Turkey\",\"areacn\":\"土耳其\",\"areacode\":\"TR\"},{\"prefix\":\"TB\",\"area\":\"Turkey\",\"areacn\":\"土耳其\",\"areacode\":\"TR\"},{\"prefix\":\"TC\",\"area\":\"Turkey\",\"areacn\":\"土耳其\",\"areacode\":\"TR\"},{\"prefix\":\"TF\",\"area\":\"Iceland\",\"areacn\":\"冰岛\",\"areacode\":\"IS\"},{\"prefix\":\"TG\",\"area\":\"Guatemala\",\"areacn\":\"危地马拉\",\"areacode\":\"GT\"},{\"prefix\":\"TD\",\"area\":\"Guatemala\",\"areacn\":\"危地马拉\",\"areacode\":\"GT\"},{\"prefix\":\"TI\",\"area\":\"Costa Rica\",\"areacn\":\"哥斯达黎加\",\"areacode\":\"CR\"},{\"prefix\":\"TE\",\"area\":\"Costa Rica\",\"areacn\":\"哥斯达黎加\",\"areacode\":\"CR\"},{\"prefix\":\"TJ\",\"area\":\"Cameroon\",\"areacn\":\"喀麦隆\",\"areacode\":\"CM\"},{\"prefix\":\"TK\",\"area\":\"Corsica\",\"areacn\":\"科西嘉岛\",\"areacode\":\"FR\"},{\"prefix\":\"TL\",\"area\":\"Central Africa\",\"areacn\":\"中部非洲\"},{\"prefix\":\"TN\",\"area\":\"Congo (Republic of the)\",\"areacn\":\"刚果共和国\",\"areacode\":\"CG\"},{\"prefix\":\"TR\",\"area\":\"Gabon\",\"areacn\":\"加蓬\",\"areacode\":\"GA\"},{\"prefix\":\"TT\",\"area\":\"Chad\",\"areacn\":\"乍得\",\"areacode\":\"TD\"},{\"prefix\":\"TU\",\"area\":\"Cote d'Ivoire\",\"areacn\":\"科特迪瓦\",\"areacode\":\"CI\"},{\"prefix\":\"TY\",\"area\":\"Benin\",\"areacn\":\"贝宁\",\"areacode\":\"BJ\"},{\"prefix\":\"TZ\",\"area\":\"Mali\",\"areacn\":\"马里共和国\",\"areacode\":\"ML\"},{\"prefix\":\"UJ\",\"area\":\"Uzbekistan\",\"areacn\":\"乌兹别克斯坦\",\"areacode\":\"UZ\"},{\"prefix\":\"UK\",\"area\":\"Uzbekistan\",\"areacn\":\"乌兹别克斯坦\",\"areacode\":\"UZ\"},{\"prefix\":\"UM\",\"area\":\"Uzbekistan\",\"areacn\":\"乌兹别克斯坦\",\"areacode\":\"UZ\"},{\"prefix\":\"UN\",\"area\":\"Kazakhstan\",\"areacn\":\"哈萨克斯坦\",\"areacode\":\"KZ\"},{\"prefix\":\"UO\",\"area\":\"Kazakhstan\",\"areacn\":\"哈萨克斯坦\",\"areacode\":\"KZ\"},{\"prefix\":\"UP\",\"area\":\"Kazakhstan\",\"areacn\":\"哈萨克斯坦\",\"areacode\":\"KZ\"},{\"prefix\":\"UQ\",\"area\":\"Kazakhstan\",\"areacn\":\"哈萨克斯坦\",\"areacode\":\"KZ\"},{\"prefix\":\"UR\",\"area\":\"Ukraine\",\"areacn\":\"乌克兰\",\"areacode\":\"UA\"},{\"prefix\":\"US\",\"area\":\"Ukraine\",\"areacn\":\"乌克兰\",\"areacode\":\"UA\"},{\"prefix\":\"UT\",\"area\":\"Ukraine\",\"areacn\":\"乌克兰\",\"areacode\":\"UA\"},{\"prefix\":\"UU\",\"area\":\"Ukraine\",\"areacn\":\"乌克兰\",\"areacode\":\"UA\"},{\"prefix\":\"UV\",\"area\":\"Ukraine\",\"areacn\":\"乌克兰\",\"areacode\":\"UA\"},{\"prefix\":\"UW\",\"area\":\"Ukraine\",\"areacn\":\"乌克兰\",\"areacode\":\"UA\"},{\"prefix\":\"UX\",\"area\":\"Ukraine\",\"areacn\":\"乌克兰\",\"areacode\":\"UA\"},{\"prefix\":\"UY\",\"area\":\"Ukraine\",\"areacn\":\"乌克兰\",\"areacode\":\"UA\"},{\"prefix\":\"UZ\",\"area\":\"Ukraine\",\"areacn\":\"乌克兰\",\"areacode\":\"UA\"},{\"prefix\":\"EM\",\"area\":\"Ukraine\",\"areacn\":\"乌克兰\",\"areacode\":\"UA\"},{\"prefix\":\"EN\",\"area\":\"Ukraine\",\"areacn\":\"乌克兰\",\"areacode\":\"UA\"},{\"prefix\":\"EO\",\"area\":\"Ukraine\",\"areacn\":\"乌克兰\",\"areacode\":\"UA\"},{\"prefix\":\"V2\",\"area\":\"Antigua & Barbuda\",\"areacn\":\"安提瓜和巴布达\",\"areacode\":\"AG\"},{\"prefix\":\"V3\",\"area\":\"Belize\",\"areacn\":\"伯利兹\",\"areacode\":\"BZ\"},{\"prefix\":\"V4\",\"area\":\"St. Kitts & Nevis\",\"areacn\":\"圣基茨和尼维斯\",\"areacode\":\"KN\"},{\"prefix\":\"V5\",\"area\":\"Namibia\",\"areacn\":\"纳米比亚\",\"areacode\":\"NA\"},{\"prefix\":\"V6\",\"area\":\"Micronesia\",\"areacn\":\"密克罗尼西亚联邦\",\"areacode\":\"FM\"},{\"prefix\":\"V7\",\"area\":\"Marshall Is\",\"areacn\":\"马绍尔群岛\",\"areacode\":\"MH\"},{\"prefix\":\"V8\",\"area\":\"Brunei Darussalam\",\"areacn\":\"文莱\",\"areacode\":\"BN\"},{\"prefix\":\"VA\",\"area\":\"Canada\",\"areacn\":\"加拿大\",\"areacode\":\"CA\"},{\"prefix\":\"VB\",\"area\":\"Canada\",\"areacn\":\"加拿大\",\"areacode\":\"CA\"},{\"prefix\":\"VC\",\"area\":\"Canada\",\"areacn\":\"加拿大\",\"areacode\":\"CA\"},{\"prefix\":\"VD\",\"area\":\"Canada\",\"areacn\":\"加拿大\",\"areacode\":\"CA\"},{\"prefix\":\"VE\",\"area\":\"Canada\",\"areacn\":\"加拿大\",\"areacode\":\"CA\"},{\"prefix\":\"VO\",\"area\":\"Canada\",\"areacn\":\"加拿大\",\"areacode\":\"CA\"},{\"prefix\":\"VY\",\"area\":\"Canada\",\"areacn\":\"加拿大\",\"areacode\":\"CA\"},{\"prefix\":\"VH\",\"area\":\"Australia\",\"areacn\":\"澳大利亚\",\"areacode\":\"AU\"},{\"prefix\":\"VI\",\"area\":\"Australia\",\"areacn\":\"澳大利亚\",\"areacode\":\"AU\"},{\"prefix\":\"VJ\",\"area\":\"Australia\",\"areacn\":\"澳大利亚\",\"areacode\":\"AU\"},{\"prefix\":\"VK\",\"area\":\"Australia\",\"areacn\":\"澳大利亚\",\"areacode\":\"AU\"},{\"prefix\":\"VL\",\"area\":\"Australia\",\"areacn\":\"澳大利亚\",\"areacode\":\"AU\"},{\"prefix\":\"VM\",\"area\":\"Australia\",\"areacn\":\"澳大利亚\",\"areacode\":\"AU\"},{\"prefix\":\"VN\",\"area\":\"Australia\",\"areacn\":\"澳大利亚\",\"areacode\":\"AU\"},{\"prefix\":\"AX\",\"area\":\"Australia\",\"areacn\":\"澳大利亚\",\"areacode\":\"AU\"},{\"prefix\":\"VR\",\"area\":\"Hong Kong\",\"areacn\":\"香港\",\"areacode\":\"HK\"},{\"prefix\":\"VU\",\"area\":\"India\",\"areacn\":\"印度\",\"areacode\":\"IN\"},{\"prefix\":\"XA\",\"area\":\"Mexico\",\"areacn\":\"墨西哥\",\"areacode\":\"MX\"},{\"prefix\":\"XB\",\"area\":\"Mexico\",\"areacn\":\"墨西哥\",\"areacode\":\"MX\"},{\"prefix\":\"XC\",\"area\":\"Mexico\",\"areacn\":\"墨西哥\",\"areacode\":\"MX\"},{\"prefix\":\"XD\",\"area\":\"Mexico\",\"areacn\":\"墨西哥\",\"areacode\":\"MX\"},{\"prefix\":\"XE\",\"area\":\"Mexico\",\"areacn\":\"墨西哥\",\"areacode\":\"MX\"},{\"prefix\":\"XF\",\"area\":\"Mexico\",\"areacn\":\"墨西哥\",\"areacode\":\"MX\"},{\"prefix\":\"XG\",\"area\":\"Mexico\",\"areacn\":\"墨西哥\",\"areacode\":\"MX\"},{\"prefix\":\"XH\",\"area\":\"Mexico\",\"areacn\":\"墨西哥\",\"areacode\":\"MX\"},{\"prefix\":\"XI\",\"area\":\"Mexico\",\"areacn\":\"墨西哥\",\"areacode\":\"MX\"},{\"prefix\":\"XT\",\"area\":\"Burkina Faso\",\"areacn\":\"布基纳法索\",\"areacode\":\"BF\"},{\"prefix\":\"XU\",\"area\":\"Cambodia\",\"areacn\":\"柬埔寨\",\"areacode\":\"KH\"},{\"prefix\":\"XW\",\"area\":\"Laos\",\"areacn\":\"老挝\",\"areacode\":\"LA\"},{\"prefix\":\"XY\",\"area\":\"Myanmar\",\"areacn\":\"缅甸\",\"areacode\":\"MM\"},{\"prefix\":\"XZ\",\"area\":\"Myanmar\",\"areacn\":\"缅甸\",\"areacode\":\"MM\"},{\"prefix\":\"YA\",\"area\":\"Afghanistan\",\"areacn\":\"阿富汗\",\"areacode\":\"AF\"},{\"prefix\":\"YB\",\"area\":\"Indonesia\",\"areacn\":\"印度尼西亚\",\"areacode\":\"ID\"},{\"prefix\":\"YC\",\"area\":\"Indonesia\",\"areacn\":\"印度尼西亚\",\"areacode\":\"ID\"},{\"prefix\":\"YD\",\"area\":\"Indonesia\",\"areacn\":\"印度尼西亚\",\"areacode\":\"ID\"},{\"prefix\":\"YE\",\"area\":\"Indonesia\",\"areacn\":\"印度尼西亚\",\"areacode\":\"ID\"},{\"prefix\":\"YF\",\"area\":\"Indonesia\",\"areacn\":\"印度尼西亚\",\"areacode\":\"ID\"},{\"prefix\":\"YG\",\"area\":\"Indonesia\",\"areacn\":\"印度尼西亚\",\"areacode\":\"ID\"},{\"prefix\":\"YH\",\"area\":\"Indonesia\",\"areacn\":\"印度尼西亚\",\"areacode\":\"ID\"},{\"prefix\":\"YI\",\"area\":\"Iraq\",\"areacn\":\"伊拉克\",\"areacode\":\"IQ\"},{\"prefix\":\"YJ\",\"area\":\"Vanuatu\",\"areacn\":\"瓦努阿图\",\"areacode\":\"VU\"},{\"prefix\":\"YK\",\"area\":\"Syria\",\"areacn\":\"叙利亚\",\"areacode\":\"SY\"},{\"prefix\":\"YL\",\"area\":\"Latvia\",\"areacn\":\"拉脱维亚\",\"areacode\":\"LV\"},{\"prefix\":\"YN\",\"area\":\"Nicaragua\",\"areacn\":\"尼加拉瓜\",\"areacode\":\"NI\"},{\"prefix\":\"H6\",\"area\":\"Nicaragua\",\"areacn\":\"尼加拉瓜\",\"areacode\":\"NI\"},{\"prefix\":\"H7\",\"area\":\"Nicaragua\",\"areacn\":\"尼加拉瓜\",\"areacode\":\"NI\"},{\"prefix\":\"HT\",\"area\":\"Nicaragua\",\"areacn\":\"尼加拉瓜\",\"areacode\":\"NI\"},{\"prefix\":\"YO\",\"area\":\"Romania\",\"areacn\":\"罗马尼亚\",\"areacode\":\"RO\"},{\"prefix\":\"YP\",\"area\":\"Romania\",\"areacn\":\"罗马尼亚\",\"areacode\":\"RO\"},{\"prefix\":\"YQ\",\"area\":\"Romania\",\"areacn\":\"罗马尼亚\",\"areacode\":\"RO\"},{\"prefix\":\"YR\",\"area\":\"Romania\",\"areacn\":\"罗马尼亚\",\"areacode\":\"RO\"},{\"prefix\":\"YS\",\"area\":\"El Salvador\",\"areacn\":\"萨尔瓦多\",\"areacode\":\"SV\"},{\"prefix\":\"HU\",\"area\":\"El Salvador\",\"areacn\":\"萨尔瓦多\",\"areacode\":\"SV\"},{\"prefix\":\"YT\",\"area\":\"Serbia\",\"areacn\":\"塞尔维亚\",\"areacode\":\"RS\"},{\"prefix\":\"YU\",\"area\":\"Serbia\",\"areacn\":\"塞尔维亚\",\"areacode\":\"RS\"},{\"prefix\":\"YV\",\"area\":\"Venezuela\",\"areacn\":\"委内瑞拉\",\"areacode\":\"VE\"},{\"prefix\":\"YW\",\"area\":\"Venezuela\",\"areacn\":\"委内瑞拉\",\"areacode\":\"VE\"},{\"prefix\":\"YX\",\"area\":\"Venezuela\",\"areacn\":\"委内瑞拉\",\"areacode\":\"VE\"},{\"prefix\":\"YY\",\"area\":\"Venezuela\",\"areacn\":\"委内瑞拉\",\"areacode\":\"VE\"},{\"prefix\":\"4M\",\"area\":\"Venezuela\",\"areacn\":\"委内瑞拉\",\"areacode\":\"VE\"},{\"prefix\":\"Z2\",\"area\":\"Zimbabwe\",\"areacn\":\"津巴布韦\",\"areacode\":\"ZW\"},{\"prefix\":\"Z3\",\"area\":\"Macedonia\",\"areacn\":\"马其顿共和国\",\"areacode\":\"MK\"},{\"prefix\":\"ZA\",\"area\":\"Albania\",\"areacn\":\"阿尔巴尼亚\",\"areacode\":\"AL\"},{\"prefix\":\"ZF\",\"area\":\"Cayman Is.\",\"areacn\":\"开曼群岛\",\"areacode\":\"UK\"},{\"prefix\":\"ZL\",\"area\":\"New Zealand\",\"areacn\":\"新西兰\",\"areacode\":\"NZ\"},{\"prefix\":\"ZM\",\"area\":\"New Zealand\",\"areacn\":\"新西兰\",\"areacode\":\"NZ\"},{\"prefix\":\"ZP\",\"area\":\"Paraguay\",\"areacn\":\"巴拉圭\",\"areacode\":\"PY\"},{\"prefix\":\"ZR\",\"area\":\"South Africa\",\"areacn\":\"南非\",\"areacode\":\"ZA\"},{\"prefix\":\"ZS\",\"area\":\"South Africa\",\"areacn\":\"南非\",\"areacode\":\"ZA\"},{\"prefix\":\"ZT\",\"area\":\"South Africa\",\"areacn\":\"南非\",\"areacode\":\"ZA\"},{\"prefix\":\"ZU\",\"area\":\"South Africa\",\"areacn\":\"南非\",\"areacode\":\"ZA\"},{\"prefix\":\"3Y\",\"area\":\"Antarctica\",\"areacn\":\"南极洲\",\"areacode\":\"NO\"}]");

/***/ }),

/***/ "./src/lib/aircraftDB.json":
/*!*********************************!*\
  !*** ./src/lib/aircraftDB.json ***!
  \*********************************/
/*! exports provided: 1, 2, 3, 4, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"1\":[{\"area\":\"Canada\",\"prefix\":\"C\"},{\"area\":\"China\",\"prefix\":\"B\"},{\"area\":\"France\",\"prefix\":\"F\"},{\"area\":\"Germany\",\"prefix\":\"D\"},{\"area\":\"Guernsey\",\"prefix\":\"2\"},{\"area\":\"Italy\",\"prefix\":\"I\"},{\"area\":\"Korea, Democratic People's Republic of\",\"prefix\":\"P\"},{\"area\":\"Isle of Man[16]\",\"prefix\":\"M\"},{\"area\":\"Taiwan\",\"prefix\":\"B\"},{\"area\":\"United Kingdom\",\"prefix\":\"G\"},{\"area\":\"United States of America\",\"prefix\":\"N\"},{\"area\":\"Zimbabwe\",\"prefix\":\"Z\"},{\"area\":\"Colombia\",\"prefix\":\"C\"},{\"area\":\"France\",\"prefix\":\"F\"},{\"area\":\"Germany\",\"prefix\":\"D\"},{\"area\":\"Italy\",\"prefix\":\"I\"},{\"area\":\"Japan\",\"prefix\":\"J\"},{\"area\":\"Spain\",\"prefix\":\"M\"},{\"area\":\"United Kingdom\",\"prefix\":\"K\"},{\"area\":\"United States of America\",\"prefix\":\"N\"}],\"2\":[{\"area\":\"Afghanistan\",\"prefix\":\"YA\"},{\"area\":\"Albania\",\"prefix\":\"ZA\"},{\"area\":\"Algeria\",\"prefix\":\"7T\"},{\"area\":\"Andorra\",\"prefix\":\"C3\"},{\"area\":\"Angola\",\"prefix\":\"D2\"},{\"area\":\"Antigua and Barbuda\",\"prefix\":\"V2\"},{\"area\":\"Argentina\",\"prefix\":\"LV\"},{\"area\":\"Argentina\",\"prefix\":\"LQ\"},{\"area\":\"Armenia\",\"prefix\":\"EK\"},{\"area\":\"Aruba\",\"prefix\":\"P4\"},{\"area\":\"Australia\",\"prefix\":\"VH\"},{\"area\":\"Austria\",\"prefix\":\"OE\"},{\"area\":\"Azerbaijan\",\"prefix\":\"4K\"},{\"area\":\"Bahamas\",\"prefix\":\"C6\"},{\"area\":\"Bangladesh\",\"prefix\":\"S2\"},{\"area\":\"Barbados\",\"prefix\":\"8P\"},{\"area\":\"Belarus\",\"prefix\":\"EW\"},{\"area\":\"Belgium\",\"prefix\":\"OO\"},{\"area\":\"Belize\",\"prefix\":\"V3\"},{\"area\":\"Benin\",\"prefix\":\"TY\"},{\"area\":\"Bhutan\",\"prefix\":\"A5\"},{\"area\":\"Bolivia\",\"prefix\":\"CP\"},{\"area\":\"Bosnia and Herzegovina\",\"prefix\":\"T9\"},{\"area\":\"Bosnia and Herzegovina\",\"prefix\":\"E7\"},{\"area\":\"Botswana\",\"prefix\":\"A2\"},{\"area\":\"Brazil\",\"prefix\":\"PP\"},{\"area\":\"Brazil\",\"prefix\":\"PR\"},{\"area\":\"Brazil\",\"prefix\":\"PS\"},{\"area\":\"Brazil\",\"prefix\":\"PT\"},{\"area\":\"Brazil\",\"prefix\":\"PU\"},{\"area\":\"Brunei\",\"prefix\":\"V8\"},{\"area\":\"Bulgaria\",\"prefix\":\"LZ\"},{\"area\":\"Burkina Faso\",\"prefix\":\"XT\"},{\"area\":\"Burundi\",\"prefix\":\"9U\"},{\"area\":\"Cambodia\",\"prefix\":\"XU\"},{\"area\":\"Cameroon\",\"prefix\":\"TJ\"},{\"area\":\"Cape Verde\",\"prefix\":\"D4\"},{\"area\":\"Central African Republic\",\"prefix\":\"TL\"},{\"area\":\"Chad\",\"prefix\":\"TT\"},{\"area\":\"Chile\",\"prefix\":\"CC\"},{\"area\":\"Colombia\",\"prefix\":\"HJ\"},{\"area\":\"Colombia\",\"prefix\":\"HK\"},{\"area\":\"Comoros\",\"prefix\":\"D6\"},{\"area\":\"Congo, Republic of\",\"prefix\":\"TN\"},{\"area\":\"Cook Islands\",\"prefix\":\"E5\"},{\"area\":\"Congo, Democratic Republic of\",\"prefix\":\"9Q\"},{\"area\":\"Costa Rica\",\"prefix\":\"TI\"},{\"area\":\"Côte d'Ivoire\",\"prefix\":\"TU\"},{\"area\":\"Croatia\",\"prefix\":\"9A\"},{\"area\":\"Cuba\",\"prefix\":\"CU\"},{\"area\":\"Cyprus, Republic of\",\"prefix\":\"5B\"},{\"area\":\"Czech Republic\",\"prefix\":\"OK\"},{\"area\":\"Denmark\",\"prefix\":\"OY\"},{\"area\":\"Djibouti\",\"prefix\":\"J2\"},{\"area\":\"Dominica\",\"prefix\":\"J7\"},{\"area\":\"Dominican Republic\",\"prefix\":\"HI\"},{\"area\":\"East Timor\",\"prefix\":\"4W\"},{\"area\":\"Ecuador\",\"prefix\":\"HC\"},{\"area\":\"Egypt\",\"prefix\":\"SU\"},{\"area\":\"El Salvador\",\"prefix\":\"YS\"},{\"area\":\"Equatorial Guinea\",\"prefix\":\"3C\"},{\"area\":\"Eritrea\",\"prefix\":\"E3\"},{\"area\":\"Estonia\",\"prefix\":\"ES\"},{\"area\":\"Ethiopia\",\"prefix\":\"ET\"},{\"area\":\"Fiji Islands\",\"prefix\":\"DQ\"},{\"area\":\"Finland\",\"prefix\":\"OH\"},{\"area\":\"Gabon\",\"prefix\":\"TR\"},{\"area\":\"Gambia\",\"prefix\":\"C5\"},{\"area\":\"Georgia\",\"prefix\":\"4L\"},{\"area\":\"Ghana\",\"prefix\":\"9G\"},{\"area\":\"Greece\",\"prefix\":\"SX\"},{\"area\":\"Grenada\",\"prefix\":\"J3\"},{\"area\":\"Guatemala\",\"prefix\":\"TG\"},{\"area\":\"Guinea\",\"prefix\":\"3X\"},{\"area\":\"Guinea Bissau\",\"prefix\":\"J5\"},{\"area\":\"Guyana\",\"prefix\":\"8R\"},{\"area\":\"Haiti\",\"prefix\":\"HH\"},{\"area\":\"Honduras\",\"prefix\":\"HR\"},{\"area\":\"Hungary\",\"prefix\":\"HA\"},{\"area\":\"Iceland\",\"prefix\":\"TF\"},{\"area\":\"India\",\"prefix\":\"VT\"},{\"area\":\"Indonesia\",\"prefix\":\"PK\"},{\"area\":\"Iran\",\"prefix\":\"EP\"},{\"area\":\"Iraq\",\"prefix\":\"YI\"},{\"area\":\"Ireland\",\"prefix\":\"EI\"},{\"area\":\"Israel\",\"prefix\":\"4X\"},{\"area\":\"Jamaica\",\"prefix\":\"6Y\"},{\"area\":\"Japan\",\"prefix\":\"JA\"},{\"area\":\"Jersey\",\"prefix\":\"ZJ\"},{\"area\":\"Jordan\",\"prefix\":\"JY\"},{\"area\":\"Kosovo, Republic of\",\"prefix\":\"Z6\"},{\"area\":\"Kazakhstan\",\"prefix\":\"UP\"},{\"area\":\"Kenya\",\"prefix\":\"5Y\"},{\"area\":\"Kiribati\",\"prefix\":\"T3\"},{\"area\":\"Korea, Republic of\",\"prefix\":\"HL\"},{\"area\":\"Kuwait\",\"prefix\":\"9K\"},{\"area\":\"Kyrgyzstan\",\"prefix\":\"EX\"},{\"area\":\"Latvia\",\"prefix\":\"YL\"},{\"area\":\"Lebanon\",\"prefix\":\"OD\"},{\"area\":\"Lesotho\",\"prefix\":\"7P\"},{\"area\":\"Liberia\",\"prefix\":\"A8\"},{\"area\":\"Libya\",\"prefix\":\"5A\"},{\"area\":\"Lithuania\",\"prefix\":\"LY\"},{\"area\":\"Luxembourg\",\"prefix\":\"LX\"},{\"area\":\"Macedonia, Republic of\",\"prefix\":\"Z3\"},{\"area\":\"Madagascar\",\"prefix\":\"5R\"},{\"area\":\"Malawi\",\"prefix\":\"7Q\"},{\"area\":\"Malaysia\",\"prefix\":\"9M\"},{\"area\":\"Maldives\",\"prefix\":\"8Q\"},{\"area\":\"Mali\",\"prefix\":\"TZ\"},{\"area\":\"Malta\",\"prefix\":\"9H\"},{\"area\":\"Marshall Islands\",\"prefix\":\"V7\"},{\"area\":\"Mauritania\",\"prefix\":\"5T\"},{\"area\":\"Mauritius\",\"prefix\":\"3B\"},{\"area\":\"Micronesia, Federated States of\",\"prefix\":\"V6\"},{\"area\":\"Moldova\",\"prefix\":\"ER\"},{\"area\":\"Monaco\",\"prefix\":\"3A\"},{\"area\":\"Mongolia\",\"prefix\":\"JU\"},{\"area\":\"Montenegro\",\"prefix\":\"4O\"},{\"area\":\"Morocco\",\"prefix\":\"CN\"},{\"area\":\"Mozambique\",\"prefix\":\"C9\"},{\"area\":\"Myanmar\",\"prefix\":\"XY\"},{\"area\":\"Myanmar\",\"prefix\":\"XZ\"},{\"area\":\"Namibia\",\"prefix\":\"V5\"},{\"area\":\"Nauru\",\"prefix\":\"C2\"},{\"area\":\"Nepal\",\"prefix\":\"9N\"},{\"area\":\"Netherlands\",\"prefix\":\"PH\"},{\"area\":\"Netherlands Antilles\",\"prefix\":\"PJ\"},{\"area\":\"New Zealand\",\"prefix\":\"ZK\"},{\"area\":\"New Zealand\",\"prefix\":\"ZL\"},{\"area\":\"New Zealand\",\"prefix\":\"ZM\"},{\"area\":\"Nicaragua\",\"prefix\":\"YN\"},{\"area\":\"Niger\",\"prefix\":\"5U\"},{\"area\":\"Nigeria\",\"prefix\":\"5N\"},{\"area\":\"Norway\",\"prefix\":\"LN\"},{\"area\":\"Pakistan\",\"prefix\":\"AP\"},{\"area\":\"Palestine\",\"prefix\":\"E4\"},{\"area\":\"Panama\",\"prefix\":\"HP\"},{\"area\":\"Papua New Guinea\",\"prefix\":\"P2\"},{\"area\":\"Paraguay\",\"prefix\":\"ZP\"},{\"area\":\"Peru\",\"prefix\":\"OB\"},{\"area\":\"Philippines\",\"prefix\":\"RP\"},{\"area\":\"Poland\",\"prefix\":\"SP\"},{\"area\":\"Portugal\",\"prefix\":\"CR\"},{\"area\":\"Qatar\",\"prefix\":\"A7\"},{\"area\":\"Romania\",\"prefix\":\"YR\"},{\"area\":\"Russian Federation\",\"prefix\":\"RA\"},{\"area\":\"Saint Kitts and Nevis\",\"prefix\":\"V4\"},{\"area\":\"Saint Lucia\",\"prefix\":\"J6\"},{\"area\":\"Saint Vincent and the Grenadines\",\"prefix\":\"J8\"},{\"area\":\"Samoa\",\"prefix\":\"5W\"},{\"area\":\"San Marino\",\"prefix\":\"T7\"},{\"area\":\"São Tomé and Príncipe\",\"prefix\":\"S9\"},{\"area\":\"Saudi Arabia\",\"prefix\":\"HZ\"},{\"area\":\"Senegal\",\"prefix\":\"6V\"},{\"area\":\"Senegal\",\"prefix\":\"6W\"},{\"area\":\"Serbia\",\"prefix\":\"YU\"},{\"area\":\"Seychelles\",\"prefix\":\"S7\"},{\"area\":\"Sierra Leone\",\"prefix\":\"9L\"},{\"area\":\"Singapore\",\"prefix\":\"9V\"},{\"area\":\"Slovakia\",\"prefix\":\"OM\"},{\"area\":\"Slovenia\",\"prefix\":\"S5\"},{\"area\":\"Solomon Islands\",\"prefix\":\"H4\"},{\"area\":\"Somalia\",\"prefix\":\"6O\"},{\"area\":\"South Africa\",\"prefix\":\"ZS\"},{\"area\":\"South Africa\",\"prefix\":\"ZT\"},{\"area\":\"South Africa\",\"prefix\":\"ZU\"},{\"area\":\"South Sudan\",\"prefix\":\"Z8\"},{\"area\":\"Spain\",\"prefix\":\"EC\"},{\"area\":\"Sri Lanka\",\"prefix\":\"4R\"},{\"area\":\"Sudan\",\"prefix\":\"ST\"},{\"area\":\"Surinam\",\"prefix\":\"PZ\"},{\"area\":\"Sweden\",\"prefix\":\"SE\"},{\"area\":\"Syria\",\"prefix\":\"YK\"},{\"area\":\"Tajikistan\",\"prefix\":\"EY\"},{\"area\":\"Tanzania\",\"prefix\":\"5H\"},{\"area\":\"Thailand\",\"prefix\":\"HS\"},{\"area\":\"Togo\",\"prefix\":\"5V\"},{\"area\":\"Tonga\",\"prefix\":\"A3\"},{\"area\":\"Trinidad and Tobago\",\"prefix\":\"9Y\"},{\"area\":\"Tunisia\",\"prefix\":\"TS\"},{\"area\":\"Turkey\",\"prefix\":\"TC\"},{\"area\":\"Turkmenistan\",\"prefix\":\"EZ\"},{\"area\":\"Tuvalu\",\"prefix\":\"T2\"},{\"area\":\"Uganda\",\"prefix\":\"5X\"},{\"area\":\"Ukraine\",\"prefix\":\"UR\"},{\"area\":\"United Arab Emirates\",\"prefix\":\"A6\"},{\"area\":\"United Nations[f]\",\"prefix\":\"4U\"},{\"area\":\"Uruguay\",\"prefix\":\"CX\"},{\"area\":\"Uzbekistan\",\"prefix\":\"UK\"},{\"area\":\"Vanuatu\",\"prefix\":\"YJ\"},{\"area\":\"Venezuela\",\"prefix\":\"YV\"},{\"area\":\"Vietnam\",\"prefix\":\"VN\"},{\"area\":\"Yemen\",\"prefix\":\"7O\"},{\"area\":\"Zambia\",\"prefix\":\"9J\"},{\"area\":\"Dominican Republic\",\"prefix\":\"HI\"},{\"area\":\"Switzerland\",\"prefix\":\"CH\"}],\"3\":[{\"area\":\"Bahrain\",\"prefix\":\"A9C\"},{\"area\":\"Eswatini (formerly Swaziland)\",\"prefix\":\"3DC\"},{\"area\":\"French Guiana\",\"prefix\":\"F-O\"},{\"area\":\"Hong Kong\",\"prefix\":\"B-H\"},{\"area\":\"Ireland\",\"prefix\":\" EJ\"},{\"area\":\"Macau\",\"prefix\":\"B-M\"},{\"area\":\"Oman\",\"prefix\":\"A4O\"},{\"area\":\"Poland\",\"prefix\":\"SN \"},{\"area\":\"Portugal\",\"prefix\":\" CS\"},{\"area\":\"Russian Federation\",\"prefix\":\"RF \"},{\"area\":\"Rwanda\",\"prefix\":\"9XR\"},{\"area\":\"Swaziland: see Eswatini\",\"prefix\":\"3DC\"},{\"area\":\"Abyssinia\",\"prefix\":\"A-B\"},{\"area\":\"Afghanistan\",\"prefix\":\"Y-A\"},{\"area\":\"Albania\",\"prefix\":\"B-A\"},{\"area\":\"Argentina\",\"prefix\":\"R-A\"},{\"area\":\"Belgium\",\"prefix\":\"O-B\"},{\"area\":\"Bolivia\",\"prefix\":\"C-B\"},{\"area\":\"Brazil\",\"prefix\":\"P-B\"},{\"area\":\"Canada\",\"prefix\":\"G-C\"},{\"area\":\"Bulgaria\",\"prefix\":\"B-B\"},{\"area\":\"Chile\",\"prefix\":\"B-C\"},{\"area\":\"China\",\"prefix\":\"X-C\"},{\"area\":\"Costa Rica\",\"prefix\":\"TI-\"},{\"area\":\"Cuba\",\"prefix\":\"C-C\"},{\"area\":\"Czechoslovakia\",\"prefix\":\"L-B\"},{\"area\":\"Danzig\",\"prefix\":\"Y-M\"},{\"area\":\"Denmark\",\"prefix\":\"T-D\"},{\"area\":\"Dominica\",\"prefix\":\"Z-D\"},{\"area\":\"Ecuador\",\"prefix\":\"E-E\"},{\"area\":\"El Salvador\",\"prefix\":\"Y-S\"},{\"area\":\"Estonia\",\"prefix\":\"E-A\"},{\"area\":\"Finland\",\"prefix\":\"K-S\"},{\"area\":\"Greece\",\"prefix\":\"S-X\"},{\"area\":\"Guatemala\",\"prefix\":\"L-G\"},{\"area\":\"Haiti\",\"prefix\":\"H-H\"},{\"area\":\"Hejaz\",\"prefix\":\"A-H\"},{\"area\":\"Honduras\",\"prefix\":\"X-H\"},{\"area\":\"Hungary\",\"prefix\":\"H-H\"},{\"area\":\"Hungary\",\"prefix\":\"H-O\"},{\"area\":\"India\",\"prefix\":\"G-I\"},{\"area\":\"Latvia\",\"prefix\":\"B-L\"},{\"area\":\"Liberia\",\"prefix\":\"L-L\"},{\"area\":\"Lithuania\",\"prefix\":\"Z-L\"},{\"area\":\"Luxembourg\",\"prefix\":\"L-U\"},{\"area\":\"Monaco\",\"prefix\":\"M-M\"},{\"area\":\"Monaco\",\"prefix\":\"M-O\"},{\"area\":\"Netherlands\",\"prefix\":\"H-N\"},{\"area\":\"Nicaragua\",\"prefix\":\"A-N\"},{\"area\":\"Panama\",\"prefix\":\"S-P\"},{\"area\":\"Persia\",\"prefix\":\"P-I\"},{\"area\":\"Peru\",\"prefix\":\"O-P\"},{\"area\":\"Poland\",\"prefix\":\"P-P\"},{\"area\":\"Portugal\",\"prefix\":\"C-P\"},{\"area\":\"Romania\",\"prefix\":\"C-R\"},{\"area\":\"Russia\",\"prefix\":\"R-R\"},{\"area\":\"Serbia-Croatia-Slovenia\",\"prefix\":\"X-S\"},{\"area\":\"Siam\",\"prefix\":\"H-S\"},{\"area\":\"Sweden\",\"prefix\":\"S-A\"},{\"area\":\"United Kingdom\",\"prefix\":\"G-E\"},{\"area\":\"Uruguay\",\"prefix\":\"C-U\"}],\"4\":[{\"area\":\"Anguilla\",\"prefix\":\"VP-A\"},{\"area\":\"Bermuda\",\"prefix\":\"VP-B\"},{\"area\":\"British Virgin Islands\",\"prefix\":\"VP-L\"},{\"area\":\"Cayman Islands\",\"prefix\":\"VP-C\"},{\"area\":\"Falkland Islands\",\"prefix\":\"VP-F\"},{\"area\":\"French West Indies\",\"prefix\":\"F-OG\"},{\"area\":\"Gibraltar\",\"prefix\":\"VP-G\"},{\"area\":\"Hong Kong\",\"prefix\":\" B-K\"},{\"area\":\"Hong Kong\",\"prefix\":\" B-L\"},{\"area\":\"Laos\",\"prefix\":\"RDPL\"},{\"area\":\"Montserrat\",\"prefix\":\"VP-M\"},{\"area\":\"Palestine\",\"prefix\":\"SU-Y\"},{\"area\":\"Réunion Island\",\"prefix\":\"F-OD\"},{\"area\":\"Saint Helena/Ascension\",\"prefix\":\"VQ-H\"},{\"area\":\"Tahiti\",\"prefix\":\"F-OH\"},{\"area\":\"Turks and Caicos\",\"prefix\":\"VQ-T\"},{\"area\":\"Australia\",\"prefix\":\"G-AU\"},{\"area\":\"New Zealand\",\"prefix\":\"G-NZ\"},{\"area\":\"South Africa\",\"prefix\":\"G-UA\"}]}");

/***/ }),

/***/ "./src/runtime/index.js":
/*!******************************!*\
  !*** ./src/runtime/index.js ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _esm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../esm */ "./src/esm/index.js");


if (typeof window !== 'undefined') {
  window.callsign = _esm__WEBPACK_IMPORTED_MODULE_0__["default"];
} else {
  console.error('[callsign.js]: This applies to the browser version, please use the Node.js version!');
}

/***/ })

/******/ });
//# sourceMappingURL=callsign.js.map