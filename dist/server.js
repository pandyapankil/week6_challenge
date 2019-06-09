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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/server/server.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/server/db.js":
/*!**************************!*\
  !*** ./src/server/db.js ***!
  \**************************/
/*! exports provided: client, dbName, collectionName */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"client\", function() { return client; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"dbName\", function() { return dbName; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"collectionName\", function() { return collectionName; });\nconst MongoClient = __webpack_require__(/*! mongodb */ \"mongodb\").MongoClient;\nconst uri = \"mongodb+srv://pankil:pankiladmin@week5cluster-acske.mongodb.net/test?retryWrites=true&w=majority\";\nconst client = new MongoClient(uri, { useNewUrlParser: true });\nconst dbName = \"hiring\";\nconst collectionName = \"applicants\";\n\n\n//# sourceURL=webpack:///./src/server/db.js?");

/***/ }),

/***/ "./src/server/server.js":
/*!******************************!*\
  !*** ./src/server/server.js ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _db__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./db */ \"./src/server/db.js\");\n/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! body-parser */ \"body-parser\");\n/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(body_parser__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! crypto */ \"crypto\");\n/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(crypto__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\n\nconst app = express__WEBPACK_IMPORTED_MODULE_0___default()(),\n            DIST_DIR = __dirname,\n            HTML_PATH = path__WEBPACK_IMPORTED_MODULE_1___default.a.join(DIST_DIR, '../src/views/');\nvar collection;\napp.set('views', HTML_PATH);\napp.use(express__WEBPACK_IMPORTED_MODULE_0___default.a.static(path__WEBPACK_IMPORTED_MODULE_1___default.a.join(__dirname, '/../src/views')));\napp.set('view engine', 'pug');\n// app.use(bodyParser.urlencoded({ extended: false }));\napp.use(body_parser__WEBPACK_IMPORTED_MODULE_3___default.a.json());\n\napp.get('/', async (req, res) => {\n    res.render('index')\n});\n\napp.post('/initial_submit', async (req, res) => {\n    const email = req.body.email;\n    const applicant_id = crypto__WEBPACK_IMPORTED_MODULE_4___default.a.createHash('md5').update(email + 'some_string').digest(\"hex\");\n    const applicant_info = (await collection.find({ 'applicant_id': applicant_id }).toArray())[0];\n    if (applicant_info) {\n        // update\n        const difference = Date.now() - applicant_info.last_time;\n        const daysDifference = Math.floor(difference/1000/60/60/24);\n        console.log(daysDifference);\n        if (daysDifference > 179) {\n            await collection.updateOne({'applicant_id': applicant_id}, {\n                $set: {\n                    'status': 'initial_submit',\n                    'last_time': Date.now(),\n                    'apply_count': applicant_info.apply_count + 1\n                }\n            });\n        }\n    } else {\n        // add\n        await collection.insertOne({\n            'applicant_id': applicant_id,\n            'name': req.body.name,\n            'email_id': email,\n            'status': 'initial_submit',\n            'last_time': Date.now(),\n            'challenge_time': null,\n            'challenge_start_time': null,\n            'score': null,\n            'apply_count': 1\n        });\n    }\n    res.send(\"OK\");\n});\n\napp.post('/challenge_start', async (req, res) => {\n    const email = req.body.userEmail;\n    const applicant_id = crypto__WEBPACK_IMPORTED_MODULE_4___default.a.createHash('md5').update(email + 'some_string').digest(\"hex\");\n    const applicant_info = (await collection.find({ 'applicant_id': applicant_id }).toArray())[0];\n    await collection.updateOne({'applicant_id': applicant_id}, {\n        $set: {\n            'status': 'started_challenge',\n            'last_time': Date.now(),\n            'challenge_start_time': Date.now()\n        }\n    });\n});\n\napp.post('/challenge_submit', async (req, res) => {\n    const body = req.body.body;\n    const email = body.user.userDefinedEmail;\n    const applicant_id = crypto__WEBPACK_IMPORTED_MODULE_4___default.a.createHash('md5').update(email + 'some_string').digest(\"hex\");\n    const score = body.grade.scoreInPoints;\n    const applicant_info = (await collection.find({ 'applicant_id': applicant_id }).toArray())[0];\n    let status = 'attempted_challenge';\n    let challenge_time = null;\n    if (applicant_info.status == 'initial_submit' || applicant_info.score < score) {\n        if (score == 100) {\n            status = 'passed_challenge';\n            challenge_time = Date.now() - applicant_info.challenge_start_time;\n        }\n        await collection.updateOne({'applicant_id': applicant_id}, {\n            $set: {\n                'status': status,\n                'last_time': Date.now(),\n                'challenge_time': challenge_time,\n                'score': score\n            }\n        });\n    }\n});\n\nconst PORT = process.env.PORT || 3000;\napp.listen(PORT, () => {\n\n    _db__WEBPACK_IMPORTED_MODULE_2__[\"client\"].connect(err => {\n        if (err) {\n            throw err;\n        }\n        collection = _db__WEBPACK_IMPORTED_MODULE_2__[\"client\"].db(_db__WEBPACK_IMPORTED_MODULE_2__[\"dbName\"]).collection(_db__WEBPACK_IMPORTED_MODULE_2__[\"collectionName\"]);\n    });\n\n    console.log(`App listening to ${PORT}....`)\n    console.log('Press Ctrl+C to quit.')\n});\n\n\n//# sourceURL=webpack:///./src/server/server.js?");

/***/ }),

/***/ "body-parser":
/*!******************************!*\
  !*** external "body-parser" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"body-parser\");\n\n//# sourceURL=webpack:///external_%22body-parser%22?");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"crypto\");\n\n//# sourceURL=webpack:///external_%22crypto%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "mongodb":
/*!**************************!*\
  !*** external "mongodb" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"mongodb\");\n\n//# sourceURL=webpack:///external_%22mongodb%22?");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"path\");\n\n//# sourceURL=webpack:///external_%22path%22?");

/***/ })

/******/ });