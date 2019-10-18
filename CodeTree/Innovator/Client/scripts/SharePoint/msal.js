/*! msal v1.2.0-beta.0 2019-09-26 */
'use strict';
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("Msal", [], factory);
	else if(typeof exports === 'object')
		exports["Msal"] = factory();
	else
		root["Msal"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = 24);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */
Object.defineProperty(exports, "__esModule", { value: true });
var extendStatics = function (d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b)
            if (b.hasOwnProperty(p))
                d[p] = b[p]; };
    return extendStatics(d, b);
};
function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}
exports.__extends = __extends;
exports.__assign = function () {
    exports.__assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s)
                if (Object.prototype.hasOwnProperty.call(s, p))
                    t[p] = s[p];
        }
        return t;
    };
    return exports.__assign.apply(this, arguments);
};
function __rest(s, e) {
    var t = {};
    for (var p in s)
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}
exports.__rest = __rest;
function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
        r = Reflect.decorate(decorators, target, key, desc);
    else
        for (var i = decorators.length - 1; i >= 0; i--)
            if (d = decorators[i])
                r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
exports.__decorate = __decorate;
function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); };
}
exports.__param = __param;
function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
        return Reflect.metadata(metadataKey, metadataValue);
}
exports.__metadata = __metadata;
function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try {
            step(generator.next(value));
        }
        catch (e) {
            reject(e);
        } }
        function rejected(value) { try {
            step(generator["throw"](value));
        }
        catch (e) {
            reject(e);
        } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}
exports.__awaiter = __awaiter;
function __generator(thisArg, body) {
    var _ = { label: 0, sent: function () { if (t[0] & 1)
            throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f)
            throw new TypeError("Generator is already executing.");
        while (_)
            try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                    return t;
                if (y = 0, t)
                    op = [op[0] & 2, t.value];
                switch (op[0]) {
                    case 0:
                    case 1:
                        t = op;
                        break;
                    case 4:
                        _.label++;
                        return { value: op[1], done: false };
                    case 5:
                        _.label++;
                        y = op[1];
                        op = [0];
                        continue;
                    case 7:
                        op = _.ops.pop();
                        _.trys.pop();
                        continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                            _ = 0;
                            continue;
                        }
                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                            _.label = op[1];
                            break;
                        }
                        if (op[0] === 6 && _.label < t[1]) {
                            _.label = t[1];
                            t = op;
                            break;
                        }
                        if (t && _.label < t[2]) {
                            _.label = t[2];
                            _.ops.push(op);
                            break;
                        }
                        if (t[2])
                            _.ops.pop();
                        _.trys.pop();
                        continue;
                }
                op = body.call(thisArg, _);
            }
            catch (e) {
                op = [6, e];
                y = 0;
            }
            finally {
                f = t = 0;
            }
        if (op[0] & 5)
            throw op[1];
        return { value: op[0] ? op[1] : void 0, done: true };
    }
}
exports.__generator = __generator;
function __exportStar(m, exports) {
    for (var p in m)
        if (!exports.hasOwnProperty(p))
            exports[p] = m[p];
}
exports.__exportStar = __exportStar;
function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m)
        return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length)
                o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}
exports.__values = __values;
function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m)
        return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
            ar.push(r.value);
    }
    catch (error) {
        e = { error: error };
    }
    finally {
        try {
            if (r && !r.done && (m = i["return"]))
                m.call(i);
        }
        finally {
            if (e)
                throw e.error;
        }
    }
    return ar;
}
exports.__read = __read;
function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}
exports.__spread = __spread;
function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++)
        s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
}
exports.__spreadArrays = __spreadArrays;
;
function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}
exports.__await = __await;
function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator)
        throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n])
        i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try {
        step(g[n](v));
    }
    catch (e) {
        settle(q[0][3], e);
    } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length)
        resume(q[0][0], q[0][1]); }
}
exports.__asyncGenerator = __asyncGenerator;
function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}
exports.__asyncDelegator = __asyncDelegator;
function __asyncValues(o) {
    if (!Symbol.asyncIterator)
        throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function (v) { resolve({ value: v, done: d }); }, reject); }
}
exports.__asyncValues = __asyncValues;
function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", { value: raw });
    }
    else {
        cooked.raw = raw;
    }
    return cooked;
}
exports.__makeTemplateObject = __makeTemplateObject;
;
function __importStar(mod) {
    if (mod && mod.__esModule)
        return mod;
    var result = {};
    if (mod != null)
        for (var k in mod)
            if (Object.hasOwnProperty.call(mod, k))
                result[k] = mod[k];
    result.default = mod;
    return result;
}
exports.__importStar = __importStar;
function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}
exports.__importDefault = __importDefault;


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @hidden
 */
var StringUtils = /** @class */ (function () {
    function StringUtils() {
    }
    /**
     * Check if a string is empty
     *
     * @param str
     */
    StringUtils.isEmpty = function (str) {
        return (typeof str === "undefined" || !str || 0 === str.length);
    };
    return StringUtils;
}());
exports.StringUtils = StringUtils;


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
/**
 * @hidden
 * Constants
 */
var Constants = /** @class */ (function () {
    function Constants() {
    }
    Object.defineProperty(Constants, "errorDescription", {
        get: function () { return "error_description"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Constants, "error", {
        get: function () { return "error"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Constants, "scope", {
        get: function () { return "scope"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Constants, "clientInfo", {
        get: function () { return "client_info"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Constants, "clientId", {
        get: function () { return "clientId"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Constants, "idToken", {
        get: function () { return "id_token"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Constants, "adalIdToken", {
        get: function () { return "adal.idtoken"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Constants, "accessToken", {
        get: function () { return "access_token"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Constants, "expiresIn", {
        get: function () { return "expires_in"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Constants, "sessionState", {
        get: function () { return "session_state"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Constants, "claims", {
        get: function () { return "claims"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Constants, "msalClientInfo", {
        get: function () { return "msal.client.info"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Constants, "msalError", {
        get: function () { return "msal.error"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Constants, "msalErrorDescription", {
        get: function () { return "msal.error.description"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Constants, "msalSessionState", {
        get: function () { return "msal.session.state"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Constants, "tokenKeys", {
        get: function () { return "msal.token.keys"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Constants, "accessTokenKey", {
        get: function () { return "msal.access.token.key"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Constants, "expirationKey", {
        get: function () { return "msal.expiration.key"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Constants, "stateLogin", {
        get: function () { return "msal.state.login"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Constants, "stateAcquireToken", {
        get: function () { return "msal.state.acquireToken"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Constants, "stateRenew", {
        get: function () { return "msal.state.renew"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Constants, "nonceIdToken", {
        get: function () { return "msal.nonce.idtoken"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Constants, "userName", {
        get: function () { return "msal.username"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Constants, "idTokenKey", {
        get: function () { return "msal.idtoken"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Constants, "loginRequest", {
        get: function () { return "msal.login.request"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Constants, "loginError", {
        get: function () { return "msal.login.error"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Constants, "renewStatus", {
        get: function () { return "msal.token.renew.status"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Constants, "urlHash", {
        get: function () { return "msal.urlHash"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Constants, "angularLoginRequest", {
        get: function () { return "msal.angular.login.request"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Constants, "msal", {
        get: function () { return "msal"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Constants, "no_account", {
        get: function () { return "NO_ACCOUNT"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Constants, "consumersUtid", {
        get: function () { return "9188040d-6c67-4c5b-b112-36a304b66dad"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Constants, "upn", {
        get: function () { return "upn"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Constants, "prompt_select_account", {
        get: function () { return "&prompt=select_account"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Constants, "prompt_none", {
        get: function () { return "&prompt=none"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Constants, "prompt", {
        get: function () { return "prompt"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Constants, "response_mode_fragment", {
        get: function () { return "&response_mode=fragment"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Constants, "resourceDelimiter", {
        get: function () { return "|"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Constants, "tokenRenewStatusCancelled", {
        get: function () { return "Canceled"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Constants, "tokenRenewStatusCompleted", {
        get: function () { return "Completed"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Constants, "tokenRenewStatusInProgress", {
        get: function () { return "In Progress"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Constants, "popUpWidth", {
        get: function () { return this._popUpWidth; },
        set: function (width) {
            this._popUpWidth = width;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Constants, "popUpHeight", {
        get: function () { return this._popUpHeight; },
        set: function (height) {
            this._popUpHeight = height;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Constants, "login", {
        get: function () { return "LOGIN"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Constants, "renewToken", {
        get: function () { return "RENEW_TOKEN"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Constants, "unknown", {
        get: function () { return "UNKNOWN"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Constants, "homeAccountIdentifier", {
        get: function () { return "homeAccountIdentifier"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Constants, "common", {
        get: function () { return "common"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Constants, "openidScope", {
        get: function () { return "openid"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Constants, "profileScope", {
        get: function () { return "profile"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Constants, "cacheLocationLocal", {
        get: function () { return "localStorage"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Constants, "cacheLocationSession", {
        get: function () { return "sessionStorage"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Constants, "interactionTypeRedirect", {
        get: function () { return "redirectInteraction"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Constants, "interactionTypePopup", {
        get: function () { return "popupInteraction"; },
        enumerable: true,
        configurable: true
    });
    Constants._popUpWidth = 483;
    Constants._popUpHeight = 600;
    return Constants;
}());
exports.Constants = Constants;
/**
 * @hidden
 * CacheKeys for 'authority' and 'account'
 */
exports.CacheKeys = {
    AUTHORITY: "msal.authority",
    ACQUIRE_TOKEN_ACCOUNT: "msal.acquireTokenAccount"
};
exports.AADTrustedHostList = {
    "login.windows.net": "login.windows.net",
    "login.chinacloudapi.cn": "login.chinacloudapi.cn",
    "login.cloudgovapi.us": "login.cloudgovapi.us",
    "login.microsoftonline.com": "login.microsoftonline.com",
    "login.microsoftonline.de": "login.microsoftonline.de",
    "login.microsoftonline.us": "login.microsoftonline.us"
};
/**
 * @hidden
 * SSO Types - generated to populate hints
 */
exports.SSOTypes = {
    ACCOUNT: "account",
    SID: "sid",
    LOGIN_HINT: "login_hint",
    ID_TOKEN: "id_token",
    DOMAIN_HINT: "domain_hint",
    ORGANIZATIONS: "organizations",
    CONSUMERS: "consumers",
    ACCOUNT_ID: "accountIdentifier",
    HOMEACCOUNT_ID: "homeAccountIdentifier",
    LOGIN_REQ: "login_req",
    DOMAIN_REQ: "domain_req"
};
/**
 * @hidden
 */
exports.BlacklistedEQParams = [
    exports.SSOTypes.SID,
    exports.SSOTypes.LOGIN_HINT
];
/**
 * we considered making this "enum" in the request instead of string, however it looks like the allowed list of
 * prompt values kept changing over past couple of years. There are some undocumented prompt values for some
 * internal partners too, hence the choice of generic "string" type instead of the "enum"
 * @hidden
 */
exports.PromptState = {
    LOGIN: "login",
    SELECT_ACCOUNT: "select_account",
    CONSENT: "consent",
    NONE: "none",
};
/**
 * MSAL JS Library Version
 */
function libraryVersion() {
    return "1.2.0-beta.0";
}
exports.libraryVersion = libraryVersion;


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @hidden
 */
var CryptoUtils = /** @class */ (function () {
    function CryptoUtils() {
    }
    /**
     * Creates a new random GUID - used to populate state?
     * @returns string (GUID)
     */
    CryptoUtils.createNewGuid = function () {
        /*
         * RFC4122: The version 4 UUID is meant for generating UUIDs from truly-random or
         * pseudo-random numbers.
         * The algorithm is as follows:
         *     Set the two most significant bits (bits 6 and 7) of the
         *        clock_seq_hi_and_reserved to zero and one, respectively.
         *     Set the four most significant bits (bits 12 through 15) of the
         *        time_hi_and_version field to the 4-bit version number from
         *        Section 4.1.3. Version4
         *     Set all the other bits to randomly (or pseudo-randomly) chosen
         *     values.
         * UUID                   = time-low "-" time-mid "-"time-high-and-version "-"clock-seq-reserved and low(2hexOctet)"-" node
         * time-low               = 4hexOctet
         * time-mid               = 2hexOctet
         * time-high-and-version  = 2hexOctet
         * clock-seq-and-reserved = hexOctet:
         * clock-seq-low          = hexOctet
         * node                   = 6hexOctet
         * Format: xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx
         * y could be 1000, 1001, 1010, 1011 since most significant two bits needs to be 10
         * y values are 8, 9, A, B
         */
        var cryptoObj = window.crypto; // for IE 11
        if (cryptoObj && cryptoObj.getRandomValues) {
            var buffer = new Uint8Array(16);
            cryptoObj.getRandomValues(buffer);
            // buffer[6] and buffer[7] represents the time_hi_and_version field. We will set the four most significant bits (4 through 7) of buffer[6] to represent decimal number 4 (UUID version number).
            buffer[6] |= 0x40; // buffer[6] | 01000000 will set the 6 bit to 1.
            buffer[6] &= 0x4f; // buffer[6] & 01001111 will set the 4, 5, and 7 bit to 0 such that bits 4-7 == 0100 = "4".
            // buffer[8] represents the clock_seq_hi_and_reserved field. We will set the two most significant bits (6 and 7) of the clock_seq_hi_and_reserved to zero and one, respectively.
            buffer[8] |= 0x80; // buffer[8] | 10000000 will set the 7 bit to 1.
            buffer[8] &= 0xbf; // buffer[8] & 10111111 will set the 6 bit to 0.
            return CryptoUtils.decimalToHex(buffer[0]) + CryptoUtils.decimalToHex(buffer[1])
                + CryptoUtils.decimalToHex(buffer[2]) + CryptoUtils.decimalToHex(buffer[3])
                + "-" + CryptoUtils.decimalToHex(buffer[4]) + CryptoUtils.decimalToHex(buffer[5])
                + "-" + CryptoUtils.decimalToHex(buffer[6]) + CryptoUtils.decimalToHex(buffer[7])
                + "-" + CryptoUtils.decimalToHex(buffer[8]) + CryptoUtils.decimalToHex(buffer[9])
                + "-" + CryptoUtils.decimalToHex(buffer[10]) + CryptoUtils.decimalToHex(buffer[11])
                + CryptoUtils.decimalToHex(buffer[12]) + CryptoUtils.decimalToHex(buffer[13])
                + CryptoUtils.decimalToHex(buffer[14]) + CryptoUtils.decimalToHex(buffer[15]);
        }
        else {
            var guidHolder = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx";
            var hex = "0123456789abcdef";
            var r = 0;
            var guidResponse = "";
            for (var i = 0; i < 36; i++) {
                if (guidHolder[i] !== "-" && guidHolder[i] !== "4") {
                    // each x and y needs to be random
                    r = Math.random() * 16 | 0;
                }
                if (guidHolder[i] === "x") {
                    guidResponse += hex[r];
                }
                else if (guidHolder[i] === "y") {
                    // clock-seq-and-reserved first hex is filtered and remaining hex values are random
                    r &= 0x3; // bit and with 0011 to set pos 2 to zero ?0??
                    r |= 0x8; // set pos 3 to 1 as 1???
                    guidResponse += hex[r];
                }
                else {
                    guidResponse += guidHolder[i];
                }
            }
            return guidResponse;
        }
    };
    /**
     * Decimal to Hex
     *
     * @param num
     */
    CryptoUtils.decimalToHex = function (num) {
        var hex = num.toString(16);
        while (hex.length < 2) {
            hex = "0" + hex;
        }
        return hex;
    };
    // See: https://developer.mozilla.org/en-US/docs/Web/API/WindowBase64/Base64_encoding_and_decoding#Solution_4_%E2%80%93_escaping_the_string_before_encoding_it
    /**
     * encoding string to base64 - platform specific check
     *
     * @param input
     */
    CryptoUtils.base64Encode = function (input) {
        return btoa(encodeURIComponent(input).replace(/%([0-9A-F]{2})/g, function toSolidBytes(match, p1) {
            return String.fromCharCode(Number("0x" + p1));
        }));
    };
    /**
     * decoding base64 token - platform specific check
     *
     * @param base64IdToken
     */
    CryptoUtils.base64Decode = function (input) {
        return decodeURIComponent(atob(input).split("").map(function (c) {
            return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
        }).join(""));
    };
    /**
     * deserialize a string
     *
     * @param query
     */
    CryptoUtils.deserialize = function (query) {
        var match; // Regex for replacing addition symbol with a space
        var pl = /\+/g;
        var search = /([^&=]+)=([^&]*)/g;
        var decode = function (s) { return decodeURIComponent(s.replace(pl, " ")); };
        var obj = {};
        match = search.exec(query);
        while (match) {
            obj[decode(match[1])] = decode(match[2]);
            match = search.exec(query);
        }
        return obj;
    };
    return CryptoUtils;
}());
exports.CryptoUtils = CryptoUtils;


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
Object.defineProperty(exports, "__esModule", { value: true });
var Constants_1 = __webpack_require__(2);
var ScopeSet_1 = __webpack_require__(13);
var StringUtils_1 = __webpack_require__(1);
var CryptoUtils_1 = __webpack_require__(3);
/**
 * @hidden
 */
var UrlUtils = /** @class */ (function () {
    function UrlUtils() {
    }
    /**
     * generates the URL with QueryString Parameters
     * @param scopes
     */
    UrlUtils.createNavigateUrl = function (serverRequestParams) {
        var str = this.createNavigationUrlString(serverRequestParams);
        var authEndpoint = serverRequestParams.authorityInstance.AuthorizationEndpoint;
        // if the endpoint already has queryparams, lets add to it, otherwise add the first one
        if (authEndpoint.indexOf("?") < 0) {
            authEndpoint += "?";
        }
        else {
            authEndpoint += "&";
        }
        var requestUrl = "" + authEndpoint + str.join("&");
        return requestUrl;
    };
    /**
     * Generate the array of all QueryStringParams to be sent to the server
     * @param scopes
     */
    UrlUtils.createNavigationUrlString = function (serverRequestParams) {
        var scopes = serverRequestParams.scopes;
        if (scopes.indexOf(serverRequestParams.clientId) === -1) {
            scopes.push(serverRequestParams.clientId);
        }
        var str = [];
        str.push("response_type=" + serverRequestParams.responseType);
        this.translateclientIdUsedInScope(scopes, serverRequestParams.clientId);
        str.push("scope=" + encodeURIComponent(ScopeSet_1.ScopeSet.parseScope(scopes)));
        str.push("client_id=" + encodeURIComponent(serverRequestParams.clientId));
        str.push("redirect_uri=" + encodeURIComponent(serverRequestParams.redirectUri));
        str.push("state=" + encodeURIComponent(serverRequestParams.state));
        str.push("nonce=" + encodeURIComponent(serverRequestParams.nonce));
        str.push("client_info=1");
        str.push("x-client-SKU=" + serverRequestParams.xClientSku);
        str.push("x-client-Ver=" + serverRequestParams.xClientVer);
        if (serverRequestParams.promptValue) {
            str.push("prompt=" + encodeURIComponent(serverRequestParams.promptValue));
        }
        if (serverRequestParams.claimsValue) {
            str.push("claims=" + encodeURIComponent(serverRequestParams.claimsValue));
        }
        if (serverRequestParams.queryParameters) {
            str.push(serverRequestParams.queryParameters);
        }
        if (serverRequestParams.extraQueryParameters) {
            str.push(serverRequestParams.extraQueryParameters);
        }
        str.push("client-request-id=" + encodeURIComponent(serverRequestParams.correlationId));
        return str;
    };
    /**
     * append the required scopes: https://openid.net/specs/openid-connect-basic-1_0.html#Scopes
     * @param scopes
     */
    UrlUtils.translateclientIdUsedInScope = function (scopes, clientId) {
        var clientIdIndex = scopes.indexOf(clientId);
        if (clientIdIndex >= 0) {
            scopes.splice(clientIdIndex, 1);
            if (scopes.indexOf("openid") === -1) {
                scopes.push("openid");
            }
            if (scopes.indexOf("profile") === -1) {
                scopes.push("profile");
            }
        }
    };
    /**
     * Returns current window URL as redirect uri
     */
    UrlUtils.getDefaultRedirectUri = function () {
        return window.location.href.split("?")[0].split("#")[0];
    };
    /**
     * Given a url like https://a:b/common/d?e=f#g, and a tenantId, returns https://a:b/tenantId/d
     * @param href The url
     * @param tenantId The tenant id to replace
     */
    UrlUtils.replaceTenantPath = function (url, tenantId) {
        url = url.toLowerCase();
        var urlObject = this.GetUrlComponents(url);
        var pathArray = urlObject.PathSegments;
        if (tenantId && (pathArray.length !== 0 && (pathArray[0] === Constants_1.Constants.common || pathArray[0] === Constants_1.SSOTypes.ORGANIZATIONS))) {
            pathArray[0] = tenantId;
        }
        return this.constructAuthorityUriFromObject(urlObject, pathArray);
    };
    UrlUtils.constructAuthorityUriFromObject = function (urlObject, pathArray) {
        return this.CanonicalizeUri(urlObject.Protocol + "//" + urlObject.HostNameAndPort + "/" + pathArray.join("/"));
    };
    /**
     * Parses out the components from a url string.
     * @returns An object with the various components. Please cache this value insted of calling this multiple times on the same url.
     */
    UrlUtils.GetUrlComponents = function (url) {
        if (!url) {
            throw "Url required";
        }
        // https://gist.github.com/curtisz/11139b2cfcaef4a261e0
        var regEx = RegExp("^(([^:/?#]+):)?(//([^/?#]*))?([^?#]*)(\\?([^#]*))?(#(.*))?");
        var match = url.match(regEx);
        if (!match || match.length < 6) {
            throw "Valid url required";
        }
        var urlComponents = {
            Protocol: match[1],
            HostNameAndPort: match[4],
            AbsolutePath: match[5]
        };
        var pathSegments = urlComponents.AbsolutePath.split("/");
        pathSegments = pathSegments.filter(function (val) { return val && val.length > 0; }); // remove empty elements
        urlComponents.PathSegments = pathSegments;
        return urlComponents;
    };
    /**
     * Given a url or path, append a trailing slash if one doesnt exist
     *
     * @param url
     */
    UrlUtils.CanonicalizeUri = function (url) {
        if (url) {
            url = url.toLowerCase();
        }
        if (url && !UrlUtils.endsWith(url, "/")) {
            url += "/";
        }
        return url;
    };
    /**
     * Checks to see if the url ends with the suffix
     * Required because we are compiling for es5 instead of es6
     * @param url
     * @param str
     */
    // TODO: Rename this, not clear what it is supposed to do
    UrlUtils.endsWith = function (url, suffix) {
        if (!url || !suffix) {
            return false;
        }
        return url.indexOf(suffix, url.length - suffix.length) !== -1;
    };
    /**
     * Utils function to remove the login_hint and domain_hint from the i/p extraQueryParameters
     * @param url
     * @param name
     */
    UrlUtils.urlRemoveQueryStringParameter = function (url, name) {
        if (StringUtils_1.StringUtils.isEmpty(url)) {
            return url;
        }
        var regex = new RegExp("(\\&" + name + "=)[^\&]+");
        url = url.replace(regex, "");
        // name=value&
        regex = new RegExp("(" + name + "=)[^\&]+&");
        url = url.replace(regex, "");
        // name=value
        regex = new RegExp("(" + name + "=)[^\&]+");
        url = url.replace(regex, "");
        return url;
    };
    /**
     * @hidden
     * @ignore
     *
     * Returns the anchor part(#) of the URL
     */
    UrlUtils.getHashFromUrl = function (urlStringOrFragment) {
        var hashIndex1 = urlStringOrFragment.indexOf("#");
        var hashIndex2 = urlStringOrFragment.indexOf("#/");
        if (hashIndex2 > -1) {
            return urlStringOrFragment.substring(hashIndex2 + 2);
        }
        else if (hashIndex1 > -1) {
            return urlStringOrFragment.substring(hashIndex1 + 1);
        }
        return urlStringOrFragment;
    };
    /**
     * @hidden
     * Check if the url contains a hash with known properties
     * @ignore
     */
    UrlUtils.urlContainsHash = function (urlString) {
        var parameters = UrlUtils.deserializeHash(urlString);
        return (parameters.hasOwnProperty(Constants_1.Constants.errorDescription) ||
            parameters.hasOwnProperty(Constants_1.Constants.error) ||
            parameters.hasOwnProperty(Constants_1.Constants.accessToken) ||
            parameters.hasOwnProperty(Constants_1.Constants.idToken));
    };
    /**
     * @hidden
     * Returns deserialized portion of URL hash
     * @ignore
     */
    UrlUtils.deserializeHash = function (urlFragment) {
        var hash = UrlUtils.getHashFromUrl(urlFragment);
        return CryptoUtils_1.CryptoUtils.deserialize(hash);
    };
    return UrlUtils;
}());
exports.UrlUtils = UrlUtils;


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var Constants_1 = __webpack_require__(2);
var ClientAuthError_1 = __webpack_require__(6);
exports.ClientConfigurationErrorMessage = {
    configurationNotSet: {
        code: "no_config_set",
        desc: "Configuration has not been set. Please call the UserAgentApplication constructor with a valid Configuration object."
    },
    invalidCacheLocation: {
        code: "invalid_cache_location",
        desc: "The cache location provided is not valid."
    },
    noStorageSupported: {
        code: "browser_storage_not_supported",
        desc: "localStorage and sessionStorage are not supported."
    },
    noRedirectCallbacksSet: {
        code: "no_redirect_callbacks",
        desc: "No redirect callbacks have been set. Please call setRedirectCallbacks() with the appropriate function arguments before continuing. " +
            "More information is available here: https://github.com/AzureAD/microsoft-authentication-library-for-js/wiki/MSAL-basics."
    },
    invalidCallbackObject: {
        code: "invalid_callback_object",
        desc: "The object passed for the callback was invalid. " +
            "More information is available here: https://github.com/AzureAD/microsoft-authentication-library-for-js/wiki/MSAL-basics."
    },
    scopesRequired: {
        code: "scopes_required",
        desc: "Scopes are required to obtain an access token."
    },
    emptyScopes: {
        code: "empty_input_scopes_error",
        desc: "Scopes cannot be passed as empty array."
    },
    nonArrayScopes: {
        code: "nonarray_input_scopes_error",
        desc: "Scopes cannot be passed as non-array."
    },
    clientScope: {
        code: "clientid_input_scopes_error",
        desc: "Client ID can only be provided as a single scope."
    },
    invalidPrompt: {
        code: "invalid_prompt_value",
        desc: "Supported prompt values are 'login', 'select_account', 'consent' and 'none'",
    },
    invalidAuthorityType: {
        code: "invalid_authority_type",
        desc: "The given authority is not a valid type of authority supported by MSAL. Please see here for valid authorities: <insert URL here>."
    },
    authorityUriInsecure: {
        code: "authority_uri_insecure",
        desc: "Authority URIs must use https."
    },
    authorityUriInvalidPath: {
        code: "authority_uri_invalid_path",
        desc: "Given authority URI is invalid."
    },
    unsupportedAuthorityValidation: {
        code: "unsupported_authority_validation",
        desc: "The authority validation is not supported for this authority type."
    },
    b2cAuthorityUriInvalidPath: {
        code: "b2c_authority_uri_invalid_path",
        desc: "The given URI for the B2C authority is invalid."
    },
    claimsRequestParsingError: {
        code: "claims_request_parsing_error",
        desc: "Could not parse the given claims request object."
    },
    emptyRequestError: {
        code: "empty_request_error",
        desc: "Request object is required."
    },
    telemetryConfigError: {
        code: "telemetry_config_error",
        desc: "Telemetry config is not configured with required values"
    }
};
/**
 * Error thrown when there is an error in configuration of the .js library.
 */
var ClientConfigurationError = /** @class */ (function (_super) {
    tslib_1.__extends(ClientConfigurationError, _super);
    function ClientConfigurationError(errorCode, errorMessage) {
        var _this = _super.call(this, errorCode, errorMessage) || this;
        _this.name = "ClientConfigurationError";
        Object.setPrototypeOf(_this, ClientConfigurationError.prototype);
        return _this;
    }
    ClientConfigurationError.createNoSetConfigurationError = function () {
        return new ClientConfigurationError(exports.ClientConfigurationErrorMessage.configurationNotSet.code, "" + exports.ClientConfigurationErrorMessage.configurationNotSet.desc);
    };
    ClientConfigurationError.createInvalidCacheLocationConfigError = function (givenCacheLocation) {
        return new ClientConfigurationError(exports.ClientConfigurationErrorMessage.invalidCacheLocation.code, exports.ClientConfigurationErrorMessage.invalidCacheLocation.desc + " Provided value: " + givenCacheLocation + ". Possible values are: " + Constants_1.Constants.cacheLocationLocal + ", " + Constants_1.Constants.cacheLocationSession + ".");
    };
    ClientConfigurationError.createNoStorageSupportedError = function () {
        return new ClientConfigurationError(exports.ClientConfigurationErrorMessage.noStorageSupported.code, exports.ClientConfigurationErrorMessage.noStorageSupported.desc);
    };
    ClientConfigurationError.createRedirectCallbacksNotSetError = function () {
        return new ClientConfigurationError(exports.ClientConfigurationErrorMessage.noRedirectCallbacksSet.code, exports.ClientConfigurationErrorMessage.noRedirectCallbacksSet.desc);
    };
    ClientConfigurationError.createInvalidCallbackObjectError = function (callbackObject) {
        return new ClientConfigurationError(exports.ClientConfigurationErrorMessage.invalidCallbackObject.code, exports.ClientConfigurationErrorMessage.invalidCallbackObject.desc + " Given value for callback function: " + callbackObject);
    };
    ClientConfigurationError.createEmptyScopesArrayError = function (scopesValue) {
        return new ClientConfigurationError(exports.ClientConfigurationErrorMessage.emptyScopes.code, exports.ClientConfigurationErrorMessage.emptyScopes.desc + " Given value: " + scopesValue + ".");
    };
    ClientConfigurationError.createScopesNonArrayError = function (scopesValue) {
        return new ClientConfigurationError(exports.ClientConfigurationErrorMessage.nonArrayScopes.code, exports.ClientConfigurationErrorMessage.nonArrayScopes.desc + " Given value: " + scopesValue + ".");
    };
    ClientConfigurationError.createClientIdSingleScopeError = function (scopesValue) {
        return new ClientConfigurationError(exports.ClientConfigurationErrorMessage.clientScope.code, exports.ClientConfigurationErrorMessage.clientScope.desc + " Given value: " + scopesValue + ".");
    };
    ClientConfigurationError.createScopesRequiredError = function (scopesValue) {
        return new ClientConfigurationError(exports.ClientConfigurationErrorMessage.scopesRequired.code, exports.ClientConfigurationErrorMessage.scopesRequired.desc + " Given value: " + scopesValue);
    };
    ClientConfigurationError.createInvalidPromptError = function (promptValue) {
        return new ClientConfigurationError(exports.ClientConfigurationErrorMessage.invalidPrompt.code, exports.ClientConfigurationErrorMessage.invalidPrompt.desc + " Given value: " + promptValue);
    };
    ClientConfigurationError.createClaimsRequestParsingError = function (claimsRequestParseError) {
        return new ClientConfigurationError(exports.ClientConfigurationErrorMessage.claimsRequestParsingError.code, exports.ClientConfigurationErrorMessage.claimsRequestParsingError.desc + " Given value: " + claimsRequestParseError);
    };
    ClientConfigurationError.createEmptyRequestError = function () {
        var _a = exports.ClientConfigurationErrorMessage.emptyRequestError, code = _a.code, desc = _a.desc;
        return new ClientConfigurationError(code, desc);
    };
    ClientConfigurationError.createTelemetryConfigError = function (config) {
        var _a = exports.ClientConfigurationErrorMessage.telemetryConfigError, code = _a.code, desc = _a.desc;
        var requiredKeys = {
            applicationName: "string",
            applicationVersion: "string",
            telemetryEmitter: "function"
        };
        var missingKeys = Object.keys(requiredKeys)
            .reduce(function (keys, key) {
            return config[key] ? keys : keys.concat([key + " (" + requiredKeys[key] + ")"]);
        }, []);
        return new ClientConfigurationError(code, desc + " mising values: " + missingKeys.join(","));
    };
    return ClientConfigurationError;
}(ClientAuthError_1.ClientAuthError));
exports.ClientConfigurationError = ClientConfigurationError;


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var AuthError_1 = __webpack_require__(7);
var StringUtils_1 = __webpack_require__(1);
exports.ClientAuthErrorMessage = {
    multipleMatchingTokens: {
        code: "multiple_matching_tokens",
        desc: "The cache contains multiple tokens satisfying the requirements. " +
            "Call AcquireToken again providing more requirements like authority."
    },
    multipleCacheAuthorities: {
        code: "multiple_authorities",
        desc: "Multiple authorities found in the cache. Pass authority in the API overload."
    },
    endpointResolutionError: {
        code: "endpoints_resolution_error",
        desc: "Error: could not resolve endpoints. Please check network and try again."
    },
    popUpWindowError: {
        code: "popup_window_error",
        desc: "Error opening popup window. This can happen if you are using IE or if popups are blocked in the browser."
    },
    tokenRenewalError: {
        code: "token_renewal_error",
        desc: "Token renewal operation failed due to timeout."
    },
    invalidIdToken: {
        code: "invalid_id_token",
        desc: "Invalid ID token format."
    },
    invalidStateError: {
        code: "invalid_state_error",
        desc: "Invalid state."
    },
    nonceMismatchError: {
        code: "nonce_mismatch_error",
        desc: "Nonce is not matching, Nonce received: "
    },
    loginProgressError: {
        code: "login_progress_error",
        desc: "Login_In_Progress: Error during login call - login is already in progress."
    },
    acquireTokenProgressError: {
        code: "acquiretoken_progress_error",
        desc: "AcquireToken_In_Progress: Error during login call - login is already in progress."
    },
    userCancelledError: {
        code: "user_cancelled",
        desc: "User cancelled the flow."
    },
    callbackError: {
        code: "callback_error",
        desc: "Error occurred in token received callback function."
    },
    userLoginRequiredError: {
        code: "user_login_error",
        desc: "User login is required."
    },
    userDoesNotExistError: {
        code: "user_non_existent",
        desc: "User object does not exist. Please call a login API."
    },
    clientInfoDecodingError: {
        code: "client_info_decoding_error",
        desc: "The client info could not be parsed/decoded correctly. Please review the trace to determine the root cause."
    },
    clientInfoNotPopulatedError: {
        code: "client_info_not_populated_error",
        desc: "The service did not populate client_info in the response, Please verify with the service team"
    },
    nullOrEmptyIdToken: {
        code: "null_or_empty_id_token",
        desc: "The idToken is null or empty. Please review the trace to determine the root cause."
    },
    idTokenNotParsed: {
        code: "id_token_parsing_error",
        desc: "ID token cannot be parsed. Please review stack trace to determine root cause."
    },
    tokenEncodingError: {
        code: "token_encoding_error",
        desc: "The token to be decoded is not encoded correctly."
    },
    invalidInteractionType: {
        code: "invalid_interaction_type",
        desc: "The interaction type passed to the handler was incorrect or unknown"
    }
};
/**
 * Error thrown when there is an error in the client code running on the browser.
 */
var ClientAuthError = /** @class */ (function (_super) {
    tslib_1.__extends(ClientAuthError, _super);
    function ClientAuthError(errorCode, errorMessage) {
        var _this = _super.call(this, errorCode, errorMessage) || this;
        _this.name = "ClientAuthError";
        Object.setPrototypeOf(_this, ClientAuthError.prototype);
        return _this;
    }
    ClientAuthError.createEndpointResolutionError = function (errDetail) {
        var errorMessage = exports.ClientAuthErrorMessage.endpointResolutionError.desc;
        if (errDetail && !StringUtils_1.StringUtils.isEmpty(errDetail)) {
            errorMessage += " Details: " + errDetail;
        }
        return new ClientAuthError(exports.ClientAuthErrorMessage.endpointResolutionError.code, errorMessage);
    };
    ClientAuthError.createMultipleMatchingTokensInCacheError = function (scope) {
        return new ClientAuthError(exports.ClientAuthErrorMessage.multipleMatchingTokens.code, "Cache error for scope " + scope + ": " + exports.ClientAuthErrorMessage.multipleMatchingTokens.desc + ".");
    };
    ClientAuthError.createMultipleAuthoritiesInCacheError = function (scope) {
        return new ClientAuthError(exports.ClientAuthErrorMessage.multipleCacheAuthorities.code, "Cache error for scope " + scope + ": " + exports.ClientAuthErrorMessage.multipleCacheAuthorities.desc + ".");
    };
    ClientAuthError.createPopupWindowError = function (errDetail) {
        var errorMessage = exports.ClientAuthErrorMessage.popUpWindowError.desc;
        if (errDetail && !StringUtils_1.StringUtils.isEmpty(errDetail)) {
            errorMessage += " Details: " + errDetail;
        }
        return new ClientAuthError(exports.ClientAuthErrorMessage.popUpWindowError.code, errorMessage);
    };
    ClientAuthError.createTokenRenewalTimeoutError = function () {
        return new ClientAuthError(exports.ClientAuthErrorMessage.tokenRenewalError.code, exports.ClientAuthErrorMessage.tokenRenewalError.desc);
    };
    ClientAuthError.createInvalidIdTokenError = function (idToken) {
        return new ClientAuthError(exports.ClientAuthErrorMessage.invalidIdToken.code, exports.ClientAuthErrorMessage.invalidIdToken.desc + " Given token: " + idToken);
    };
    // TODO: Is this not a security flaw to send the user the state expected??
    ClientAuthError.createInvalidStateError = function (invalidState, actualState) {
        return new ClientAuthError(exports.ClientAuthErrorMessage.invalidStateError.code, exports.ClientAuthErrorMessage.invalidStateError.desc + " " + invalidState + ", state expected : " + actualState + ".");
    };
    // TODO: Is this not a security flaw to send the user the Nonce expected??
    ClientAuthError.createNonceMismatchError = function (invalidNonce, actualNonce) {
        return new ClientAuthError(exports.ClientAuthErrorMessage.nonceMismatchError.code, exports.ClientAuthErrorMessage.nonceMismatchError.desc + " " + invalidNonce + ", nonce expected : " + actualNonce + ".");
    };
    ClientAuthError.createLoginInProgressError = function () {
        return new ClientAuthError(exports.ClientAuthErrorMessage.loginProgressError.code, exports.ClientAuthErrorMessage.loginProgressError.desc);
    };
    ClientAuthError.createAcquireTokenInProgressError = function () {
        return new ClientAuthError(exports.ClientAuthErrorMessage.acquireTokenProgressError.code, exports.ClientAuthErrorMessage.acquireTokenProgressError.desc);
    };
    ClientAuthError.createUserCancelledError = function () {
        return new ClientAuthError(exports.ClientAuthErrorMessage.userCancelledError.code, exports.ClientAuthErrorMessage.userCancelledError.desc);
    };
    ClientAuthError.createErrorInCallbackFunction = function (errorDesc) {
        return new ClientAuthError(exports.ClientAuthErrorMessage.callbackError.code, exports.ClientAuthErrorMessage.callbackError.desc + " " + errorDesc + ".");
    };
    ClientAuthError.createUserLoginRequiredError = function () {
        return new ClientAuthError(exports.ClientAuthErrorMessage.userLoginRequiredError.code, exports.ClientAuthErrorMessage.userLoginRequiredError.desc);
    };
    ClientAuthError.createUserDoesNotExistError = function () {
        return new ClientAuthError(exports.ClientAuthErrorMessage.userDoesNotExistError.code, exports.ClientAuthErrorMessage.userDoesNotExistError.desc);
    };
    ClientAuthError.createClientInfoDecodingError = function (caughtError) {
        return new ClientAuthError(exports.ClientAuthErrorMessage.clientInfoDecodingError.code, exports.ClientAuthErrorMessage.clientInfoDecodingError.desc + " Failed with error: " + caughtError);
    };
    ClientAuthError.createClientInfoNotPopulatedError = function (caughtError) {
        return new ClientAuthError(exports.ClientAuthErrorMessage.clientInfoNotPopulatedError.code, exports.ClientAuthErrorMessage.clientInfoNotPopulatedError.desc + " Failed with error: " + caughtError);
    };
    ClientAuthError.createIdTokenNullOrEmptyError = function (invalidRawTokenString) {
        return new ClientAuthError(exports.ClientAuthErrorMessage.nullOrEmptyIdToken.code, exports.ClientAuthErrorMessage.nullOrEmptyIdToken.desc + " Raw ID Token Value: " + invalidRawTokenString);
    };
    ClientAuthError.createIdTokenParsingError = function (caughtParsingError) {
        return new ClientAuthError(exports.ClientAuthErrorMessage.idTokenNotParsed.code, exports.ClientAuthErrorMessage.idTokenNotParsed.desc + " Failed with error: " + caughtParsingError);
    };
    ClientAuthError.createTokenEncodingError = function (incorrectlyEncodedToken) {
        return new ClientAuthError(exports.ClientAuthErrorMessage.tokenEncodingError.code, exports.ClientAuthErrorMessage.tokenEncodingError.desc + " Attempted to decode: " + incorrectlyEncodedToken);
    };
    ClientAuthError.createInvalidInteractionTypeError = function () {
        return new ClientAuthError(exports.ClientAuthErrorMessage.invalidInteractionType.code, exports.ClientAuthErrorMessage.invalidInteractionType.desc);
    };
    return ClientAuthError;
}(AuthError_1.AuthError));
exports.ClientAuthError = ClientAuthError;


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
exports.AuthErrorMessage = {
    unexpectedError: {
        code: "unexpected_error",
        desc: "Unexpected error in authentication."
    }
};
/**
 * General error class thrown by the MSAL.js library.
 */
var AuthError = /** @class */ (function (_super) {
    tslib_1.__extends(AuthError, _super);
    function AuthError(errorCode, errorMessage) {
        var _this = _super.call(this, errorMessage) || this;
        Object.setPrototypeOf(_this, AuthError.prototype);
        _this.errorCode = errorCode;
        _this.errorMessage = errorMessage;
        _this.name = "AuthError";
        return _this;
    }
    AuthError.createUnexpectedError = function (errDesc) {
        return new AuthError(exports.AuthErrorMessage.unexpectedError.code, exports.AuthErrorMessage.unexpectedError.desc + ": " + errDesc);
    };
    return AuthError;
}(Error));
exports.AuthError = AuthError;


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var ClientConfigurationError_1 = __webpack_require__(5);
var XHRClient_1 = __webpack_require__(18);
var UrlUtils_1 = __webpack_require__(4);
/**
 * @hidden
 */
var AuthorityType;
(function (AuthorityType) {
    AuthorityType[AuthorityType["Aad"] = 0] = "Aad";
    AuthorityType[AuthorityType["Adfs"] = 1] = "Adfs";
    AuthorityType[AuthorityType["B2C"] = 2] = "B2C";
})(AuthorityType = exports.AuthorityType || (exports.AuthorityType = {}));
/**
 * @hidden
 */
var Authority = /** @class */ (function () {
    function Authority(authority, validateAuthority) {
        this.IsValidationEnabled = validateAuthority;
        this.CanonicalAuthority = authority;
        this.validateAsUri();
    }
    Object.defineProperty(Authority.prototype, "Tenant", {
        get: function () {
            return this.CanonicalAuthorityUrlComponents.PathSegments[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Authority.prototype, "AuthorizationEndpoint", {
        get: function () {
            this.validateResolved();
            return this.tenantDiscoveryResponse.AuthorizationEndpoint.replace("{tenant}", this.Tenant);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Authority.prototype, "EndSessionEndpoint", {
        get: function () {
            this.validateResolved();
            return this.tenantDiscoveryResponse.EndSessionEndpoint.replace("{tenant}", this.Tenant);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Authority.prototype, "SelfSignedJwtAudience", {
        get: function () {
            this.validateResolved();
            return this.tenantDiscoveryResponse.Issuer.replace("{tenant}", this.Tenant);
        },
        enumerable: true,
        configurable: true
    });
    Authority.prototype.validateResolved = function () {
        if (!this.tenantDiscoveryResponse) {
            throw "Please call ResolveEndpointsAsync first";
        }
    };
    Object.defineProperty(Authority.prototype, "CanonicalAuthority", {
        /**
         * A URL that is the authority set by the developer
         */
        get: function () {
            return this.canonicalAuthority;
        },
        set: function (url) {
            this.canonicalAuthority = UrlUtils_1.UrlUtils.CanonicalizeUri(url);
            this.canonicalAuthorityUrlComponents = null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Authority.prototype, "CanonicalAuthorityUrlComponents", {
        get: function () {
            if (!this.canonicalAuthorityUrlComponents) {
                this.canonicalAuthorityUrlComponents = UrlUtils_1.UrlUtils.GetUrlComponents(this.CanonicalAuthority);
            }
            return this.canonicalAuthorityUrlComponents;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Authority.prototype, "DefaultOpenIdConfigurationEndpoint", {
        /**
         * // http://openid.net/specs/openid-connect-discovery-1_0.html#ProviderMetadata
         */
        get: function () {
            return this.CanonicalAuthority + "v2.0/.well-known/openid-configuration";
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Given a string, validate that it is of the form https://domain/path
     */
    Authority.prototype.validateAsUri = function () {
        var components;
        try {
            components = this.CanonicalAuthorityUrlComponents;
        }
        catch (e) {
            throw ClientConfigurationError_1.ClientConfigurationErrorMessage.invalidAuthorityType;
        }
        if (!components.Protocol || components.Protocol.toLowerCase() !== "https:") {
            throw ClientConfigurationError_1.ClientConfigurationErrorMessage.authorityUriInsecure;
        }
        if (!components.PathSegments || components.PathSegments.length < 1) {
            throw ClientConfigurationError_1.ClientConfigurationErrorMessage.authorityUriInvalidPath;
        }
    };
    /**
     * Calls the OIDC endpoint and returns the response
     */
    Authority.prototype.DiscoverEndpoints = function (openIdConfigurationEndpoint) {
        var client = new XHRClient_1.XhrClient();
        return client.sendRequestAsync(openIdConfigurationEndpoint, "GET", /* enableCaching: */ true)
            .then(function (response) {
            return {
                AuthorizationEndpoint: response.authorization_endpoint,
                EndSessionEndpoint: response.end_session_endpoint,
                Issuer: response.issuer
            };
        });
    };
    /**
     * Returns a promise.
     * Checks to see if the authority is in the cache
     * Discover endpoints via openid-configuration
     * If successful, caches the endpoint for later use in OIDC
     */
    Authority.prototype.resolveEndpointsAsync = function () {
        return tslib_1.__awaiter(this, void 0, Promise, function () {
            var openIdConfigurationEndpointResponse, _a;
            return tslib_1.__generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.GetOpenIdConfigurationEndpointAsync()];
                    case 1:
                        openIdConfigurationEndpointResponse = _b.sent();
                        _a = this;
                        return [4 /*yield*/, this.DiscoverEndpoints(openIdConfigurationEndpointResponse)];
                    case 2:
                        _a.tenantDiscoveryResponse = _b.sent();
                        return [2 /*return*/, this];
                }
            });
        });
    };
    return Authority;
}());
exports.Authority = Authority;


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.EVENT_NAME_PREFIX = "msal.";
exports.EVENT_NAME_KEY = "event_name";
exports.START_TIME_KEY = "start_time";
exports.ELAPSED_TIME_KEY = "elapsed_time";
exports.TELEMETRY_BLOB_EVENT_NAMES = {
    MsalCorrelationIdConstStrKey: "Microsoft.MSAL.correlation_id",
    ApiTelemIdConstStrKey: "msal.api_telem_id",
    ApiIdConstStrKey: "msal.api_id",
    BrokerAppConstStrKey: "Microsoft_MSAL_broker_app",
    CacheEventCountConstStrKey: "Microsoft_MSAL_cache_event_count",
    HttpEventCountTelemetryBatchKey: "Microsoft_MSAL_http_event_count",
    IdpConstStrKey: "Microsoft_MSAL_idp",
    IsSilentTelemetryBatchKey: "",
    IsSuccessfulConstStrKey: "Microsoft_MSAL_is_successful",
    ResponseTimeConstStrKey: "Microsoft_MSAL_response_time",
    TenantIdConstStrKey: "Microsoft_MSAL_tenant_id",
    UiEventCountTelemetryBatchKey: "Microsoft_MSAL_ui_event_count"
};
// This is used to replace the real tenant in telemetry info
exports.TENANT_PLACEHOLDER = "<tenant>";


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
Object.defineProperty(exports, "__esModule", { value: true });
var StringUtils_1 = __webpack_require__(1);
var Constants_1 = __webpack_require__(2);
var LogLevel;
(function (LogLevel) {
    LogLevel[LogLevel["Error"] = 0] = "Error";
    LogLevel[LogLevel["Warning"] = 1] = "Warning";
    LogLevel[LogLevel["Info"] = 2] = "Info";
    LogLevel[LogLevel["Verbose"] = 3] = "Verbose";
})(LogLevel = exports.LogLevel || (exports.LogLevel = {}));
var Logger = /** @class */ (function () {
    function Logger(localCallback, options) {
        if (options === void 0) { options = {}; }
        /**
         * @hidden
         */
        this.level = LogLevel.Info;
        var _a = options.correlationId, correlationId = _a === void 0 ? "" : _a, _b = options.level, level = _b === void 0 ? LogLevel.Info : _b, _c = options.piiLoggingEnabled, piiLoggingEnabled = _c === void 0 ? false : _c;
        this.localCallback = localCallback;
        this.correlationId = correlationId;
        this.level = level;
        this.piiLoggingEnabled = piiLoggingEnabled;
    }
    /**
     * @hidden
     */
    Logger.prototype.logMessage = function (logLevel, logMessage, containsPii) {
        if ((logLevel > this.level) || (!this.piiLoggingEnabled && containsPii)) {
            return;
        }
        var timestamp = new Date().toUTCString();
        var log;
        if (!StringUtils_1.StringUtils.isEmpty(this.correlationId)) {
            log = timestamp + ":" + this.correlationId + "-" + Constants_1.libraryVersion() + "-" + LogLevel[logLevel] + " " + logMessage;
        }
        else {
            log = timestamp + ":" + Constants_1.libraryVersion() + "-" + LogLevel[logLevel] + " " + logMessage;
        }
        this.executeCallback(logLevel, log, containsPii);
    };
    /**
     * @hidden
     */
    Logger.prototype.executeCallback = function (level, message, containsPii) {
        if (this.localCallback) {
            this.localCallback(level, message, containsPii);
        }
    };
    /**
     * @hidden
     */
    Logger.prototype.error = function (message) {
        this.logMessage(LogLevel.Error, message, false);
    };
    /**
     * @hidden
     */
    Logger.prototype.errorPii = function (message) {
        this.logMessage(LogLevel.Error, message, true);
    };
    /**
     * @hidden
     */
    Logger.prototype.warning = function (message) {
        this.logMessage(LogLevel.Warning, message, false);
    };
    /**
     * @hidden
     */
    Logger.prototype.warningPii = function (message) {
        this.logMessage(LogLevel.Warning, message, true);
    };
    /**
     * @hidden
     */
    Logger.prototype.info = function (message) {
        this.logMessage(LogLevel.Info, message, false);
    };
    /**
     * @hidden
     */
    Logger.prototype.infoPii = function (message) {
        this.logMessage(LogLevel.Info, message, true);
    };
    /**
     * @hidden
     */
    Logger.prototype.verbose = function (message) {
        this.logMessage(LogLevel.Verbose, message, false);
    };
    /**
     * @hidden
     */
    Logger.prototype.verbosePii = function (message) {
        this.logMessage(LogLevel.Verbose, message, true);
    };
    Logger.prototype.isPiiLoggingEnabled = function () {
        return this.piiLoggingEnabled;
    };
    return Logger;
}());
exports.Logger = Logger;


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var AuthError_1 = __webpack_require__(7);
exports.ServerErrorMessage = {
    serverUnavailable: {
        code: "server_unavailable",
        desc: "Server is temporarily unavailable."
    },
    unknownServerError: {
        code: "unknown_server_error"
    },
};
/**
 * Error thrown when there is an error with the server code, for example, unavailability.
 */
var ServerError = /** @class */ (function (_super) {
    tslib_1.__extends(ServerError, _super);
    function ServerError(errorCode, errorMessage) {
        var _this = _super.call(this, errorCode, errorMessage) || this;
        _this.name = "ServerError";
        Object.setPrototypeOf(_this, ServerError.prototype);
        return _this;
    }
    ServerError.createServerUnavailableError = function () {
        return new ServerError(exports.ServerErrorMessage.serverUnavailable.code, exports.ServerErrorMessage.serverUnavailable.desc);
    };
    ServerError.createUnknownServerError = function (errorDesc) {
        return new ServerError(exports.ServerErrorMessage.unknownServerError.code, errorDesc);
    };
    return ServerError;
}(AuthError_1.AuthError));
exports.ServerError = ServerError;


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var AccessTokenKey_1 = __webpack_require__(26);
var AccessTokenValue_1 = __webpack_require__(27);
var ServerRequestParameters_1 = __webpack_require__(28);
var ClientInfo_1 = __webpack_require__(29);
var Constants_1 = __webpack_require__(2);
var IdToken_1 = __webpack_require__(30);
var Storage_1 = __webpack_require__(31);
var Account_1 = __webpack_require__(16);
var ScopeSet_1 = __webpack_require__(13);
var StringUtils_1 = __webpack_require__(1);
var WindowUtils_1 = __webpack_require__(33);
var TokenUtils_1 = __webpack_require__(15);
var TimeUtils_1 = __webpack_require__(34);
var UrlUtils_1 = __webpack_require__(4);
var ResponseUtils_1 = __webpack_require__(35);
var AuthorityFactory_1 = __webpack_require__(36);
var Configuration_1 = __webpack_require__(20);
var ClientConfigurationError_1 = __webpack_require__(5);
var AuthError_1 = __webpack_require__(7);
var ClientAuthError_1 = __webpack_require__(6);
var ServerError_1 = __webpack_require__(11);
var InteractionRequiredAuthError_1 = __webpack_require__(21);
var AuthResponse_1 = __webpack_require__(22);
var TelemetryManager_1 = tslib_1.__importDefault(__webpack_require__(37));
// default authority
var DEFAULT_AUTHORITY = "https://login.microsoftonline.com/common";
/**
 * @hidden
 * @ignore
 * response_type from OpenIDConnect
 * References: https://openid.net/specs/oauth-v2-multiple-response-types-1_0.html & https://tools.ietf.org/html/rfc6749#section-4.2.1
 * Since we support only implicit flow in this library, we restrict the response_type support to only 'token' and 'id_token'
 *
 */
var ResponseTypes = {
    id_token: "id_token",
    token: "token",
    id_token_token: "id_token token"
};
/**
 * UserAgentApplication class
 *
 * Object Instance that the developer can use to make loginXX OR acquireTokenXX functions
 */
var UserAgentApplication = /** @class */ (function () {
    /**
     * @constructor
     * Constructor for the UserAgentApplication used to instantiate the UserAgentApplication object
     *
     * Important attributes in the Configuration object for auth are:
     * - clientID: the application ID of your application.
     * You can obtain one by registering your application with our Application registration portal : https://portal.azure.com/#blade/Microsoft_AAD_IAM/ActiveDirectoryMenuBlade/RegisteredAppsPreview
     * - authority: the authority URL for your application.
     *
     * In Azure AD, authority is a URL indicating the Azure active directory that MSAL uses to obtain tokens.
     * It is of the form https://login.microsoftonline.com/&lt;Enter_the_Tenant_Info_Here&gt;.
     * If your application supports Accounts in one organizational directory, replace "Enter_the_Tenant_Info_Here" value with the Tenant Id or Tenant name (for example, contoso.microsoft.com).
     * If your application supports Accounts in any organizational directory, replace "Enter_the_Tenant_Info_Here" value with organizations.
     * If your application supports Accounts in any organizational directory and personal Microsoft accounts, replace "Enter_the_Tenant_Info_Here" value with common.
     * To restrict support to Personal Microsoft accounts only, replace "Enter_the_Tenant_Info_Here" value with consumers.
     *
     *
     * In Azure B2C, authority is of the form https://&lt;instance&gt;/tfp/&lt;tenant&gt;/&lt;policyName&gt;/
     *
     * @param {@link (Configuration:type)} configuration object for the MSAL UserAgentApplication instance
     */
    function UserAgentApplication(configuration) {
        // callbacks for token/error
        this.authResponseCallback = null;
        this.tokenReceivedCallback = null;
        this.errorReceivedCallback = null;
        // Set the Configuration
        this.config = Configuration_1.buildConfiguration(configuration);
        // Set the callback boolean
        this.redirectCallbacksSet = false;
        this.logger = this.config.system.logger;
        this.clientId = this.config.auth.clientId;
        this.inCookie = this.config.cache.storeAuthStateInCookie;
        this.telemetryManager = this.getTelemetryManagerFromConfig(this.config.system.telemetry, this.clientId);
        // if no authority is passed, set the default: "https://login.microsoftonline.com/common"
        this.authority = this.config.auth.authority || DEFAULT_AUTHORITY;
        // track login and acquireToken in progress
        this.loginInProgress = false;
        this.acquireTokenInProgress = false;
        // cache keys msal - typescript throws an error if any value other than "localStorage" or "sessionStorage" is passed
        try {
            this.cacheStorage = new Storage_1.Storage(this.config.cache.cacheLocation);
        }
        catch (e) {
            throw ClientConfigurationError_1.ClientConfigurationError.createInvalidCacheLocationConfigError(this.config.cache.cacheLocation);
        }
        // Initialize window handling code
        window.activeRenewals = {};
        window.renewStates = [];
        window.callbackMappedToRenewStates = {};
        window.promiseMappedToRenewStates = {};
        window.msal = this;
        var urlHash = window.location.hash;
        var urlContainsHash = UrlUtils_1.UrlUtils.urlContainsHash(urlHash);
        // On the server 302 - Redirect, handle this
        if (!this.config.framework.isAngular && urlContainsHash && !WindowUtils_1.WindowUtils.isInIframe() && !WindowUtils_1.WindowUtils.isInPopup()) {
            this.handleAuthenticationResponse(urlHash);
        }
    }
    Object.defineProperty(UserAgentApplication.prototype, "authority", {
        /**
         * Method to manage the authority URL.
         *
         * @returns {string} authority
         */
        get: function () {
            return this.authorityInstance.CanonicalAuthority;
        },
        /**
         * setter for the authority URL
         * @param {string} authority
         */
        // If the developer passes an authority, create an instance
        set: function (val) {
            this.authorityInstance = AuthorityFactory_1.AuthorityFactory.CreateInstance(val, this.config.auth.validateAuthority);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Get the current authority instance from the MSAL configuration object
     *
     * @returns {@link Authority} authority instance
     */
    UserAgentApplication.prototype.getAuthorityInstance = function () {
        return this.authorityInstance;
    };
    UserAgentApplication.prototype.handleRedirectCallback = function (authOrTokenCallback, errorReceivedCallback) {
        if (!authOrTokenCallback) {
            this.redirectCallbacksSet = false;
            throw ClientConfigurationError_1.ClientConfigurationError.createInvalidCallbackObjectError(authOrTokenCallback);
        }
        // Set callbacks
        if (errorReceivedCallback) {
            this.tokenReceivedCallback = authOrTokenCallback;
            this.errorReceivedCallback = errorReceivedCallback;
            this.logger.warning("This overload for callback is deprecated - please change the format of the callbacks to a single callback as shown: (err: AuthError, response: AuthResponse).");
        }
        else {
            this.authResponseCallback = authOrTokenCallback;
        }
        this.redirectCallbacksSet = true;
        // On the server 302 - Redirect, handle this
        if (!this.config.framework.isAngular) {
            var cachedHash = this.cacheStorage.getItem(Constants_1.Constants.urlHash);
            if (cachedHash) {
                this.processCallBack(cachedHash, null);
            }
        }
    };
    UserAgentApplication.prototype.authResponseHandler = function (interactionType, response, resolve) {
        if (interactionType === Constants_1.Constants.interactionTypeRedirect) {
            if (this.errorReceivedCallback) {
                this.tokenReceivedCallback(response);
            }
            else if (this.authResponseCallback) {
                this.authResponseCallback(null, response);
            }
        }
        else if (interactionType === Constants_1.Constants.interactionTypePopup) {
            resolve(response);
        }
        else {
            throw ClientAuthError_1.ClientAuthError.createInvalidInteractionTypeError();
        }
    };
    UserAgentApplication.prototype.authErrorHandler = function (interactionType, authErr, response, reject) {
        if (interactionType === Constants_1.Constants.interactionTypeRedirect) {
            if (this.errorReceivedCallback) {
                this.errorReceivedCallback(authErr, response.accountState);
            }
            else {
                this.authResponseCallback(authErr, response);
            }
        }
        else if (interactionType === Constants_1.Constants.interactionTypePopup) {
            reject(authErr);
        }
        else {
            throw ClientAuthError_1.ClientAuthError.createInvalidInteractionTypeError();
        }
    };
    // #endregion
    /**
     * Use when initiating the login process by redirecting the user's browser to the authorization endpoint.
     * @param {@link (AuthenticationParameters:type)}
     */
    UserAgentApplication.prototype.loginRedirect = function (request) {
        // Throw error if callbacks are not set before redirect
        if (!this.redirectCallbacksSet) {
            throw ClientConfigurationError_1.ClientConfigurationError.createRedirectCallbacksNotSetError();
        }
        this.acquireTokenInteractive(Constants_1.Constants.interactionTypeRedirect, true, request);
    };
    /**
     * Use when you want to obtain an access_token for your API by redirecting the user's browser window to the authorization endpoint.
     * @param {@link (AuthenticationParameters:type)}
     *
     * To renew idToken, please pass clientId as the only scope in the Authentication Parameters
     */
    UserAgentApplication.prototype.acquireTokenRedirect = function (request) {
        if (!request) {
            throw ClientConfigurationError_1.ClientConfigurationError.createEmptyRequestError();
        }
        // Throw error if callbacks are not set before redirect
        if (!this.redirectCallbacksSet) {
            throw ClientConfigurationError_1.ClientConfigurationError.createRedirectCallbacksNotSetError();
        }
        this.acquireTokenInteractive(Constants_1.Constants.interactionTypeRedirect, false, request);
    };
    /**
     * Use when initiating the login process via opening a popup window in the user's browser
     *
     * @param {@link (AuthenticationParameters:type)}
     *
     * @returns {Promise.<AuthResponse>} - a promise that is fulfilled when this function has completed, or rejected if an error was raised. Returns the {@link AuthResponse} object
     */
    UserAgentApplication.prototype.loginPopup = function (request) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.acquireTokenInteractive(Constants_1.Constants.interactionTypePopup, true, request, resolve, reject);
        });
    };
    /**
     * Use when you want to obtain an access_token for your API via opening a popup window in the user's browser
     * @param {@link AuthenticationParameters}
     *
     * To renew idToken, please pass clientId as the only scope in the Authentication Parameters
     * @returns {Promise.<AuthResponse>} - a promise that is fulfilled when this function has completed, or rejected if an error was raised. Returns the {@link AuthResponse} object
     */
    UserAgentApplication.prototype.acquireTokenPopup = function (request) {
        var _this = this;
        if (!request) {
            throw ClientConfigurationError_1.ClientConfigurationError.createEmptyRequestError();
        }
        return new Promise(function (resolve, reject) {
            _this.acquireTokenInteractive(Constants_1.Constants.interactionTypePopup, false, request, resolve, reject);
        });
    };
    // #region Acquire Token
    /**
     * Use when initiating the login process or when you want to obtain an access_token for your API,
     * either by redirecting the user's browser window to the authorization endpoint or via opening a popup window in the user's browser.
     * @param {@link (AuthenticationParameters:type)}
     *
     * To renew idToken, please pass clientId as the only scope in the Authentication Parameters
     */
    UserAgentApplication.prototype.acquireTokenInteractive = function (interactionType, isLoginCall, request, resolve, reject) {
        var _this = this;
        // If already in progress, do not proceed
        if (this.loginInProgress || this.acquireTokenInProgress) {
            var thrownError = this.loginInProgress ? ClientAuthError_1.ClientAuthError.createLoginInProgressError() : ClientAuthError_1.ClientAuthError.createAcquireTokenInProgressError();
            var stateOnlyResponse = AuthResponse_1.buildResponseStateOnly(this.getAccountState(request && request.state));
            this.authErrorHandler(interactionType, thrownError, stateOnlyResponse, reject);
            return;
        }
        // if extraScopesToConsent is passed in loginCall, append them to the login request
        var scopes = isLoginCall ? this.appendScopes(request) : request.scopes;
        // Validate and filter scopes (the validate function will throw if validation fails)
        this.validateInputScope(scopes, !isLoginCall);
        // Get the account object if a session exists
        var account = (request && request.account && !isLoginCall) ? request.account : this.getAccount();
        // If no session exists, prompt the user to login.
        if (!account && !ServerRequestParameters_1.ServerRequestParameters.isSSOParam(request)) {
            if (isLoginCall) {
                // extract ADAL id_token if exists
                var adalIdToken = this.extractADALIdToken();
                // silent login if ADAL id_token is retrieved successfully - SSO
                if (adalIdToken && !scopes) {
                    this.logger.info("ADAL's idToken exists. Extracting login information from ADAL's idToken ");
                    var tokenRequest = this.buildIDTokenRequest(request);
                    this.silentLogin = true;
                    this.acquireTokenSilent(tokenRequest).then(function (response) {
                        _this.silentLogin = false;
                        _this.logger.info("Unified cache call is successful");
                        _this.authResponseHandler(interactionType, response, resolve);
                        return;
                    }, function (error) {
                        _this.silentLogin = false;
                        _this.logger.error("Error occurred during unified cache ATS: " + error);
                        // proceed to login since ATS failed
                        _this.acquireTokenHelper(null, interactionType, isLoginCall, request, scopes, resolve, reject);
                    });
                }
                // No ADAL token found, proceed to login
                else {
                    this.acquireTokenHelper(null, interactionType, isLoginCall, request, scopes, resolve, reject);
                }
            }
            // AcquireToken call, but no account or context given, so throw error
            else {
                this.logger.info("User login is required");
                throw ClientAuthError_1.ClientAuthError.createUserLoginRequiredError();
            }
        }
        // User session exists
        else {
            this.acquireTokenHelper(account, interactionType, isLoginCall, request, scopes, resolve, reject);
        }
    };
    /**
     * @hidden
     * @ignore
     * Helper function to acquireToken
     *
     */
    UserAgentApplication.prototype.acquireTokenHelper = function (account, interactionType, isLoginCall, request, scopes, resolve, reject) {
        var _this = this;
        // Track the acquireToken progress
        if (isLoginCall) {
            this.loginInProgress = true;
        }
        else {
            this.acquireTokenInProgress = true;
        }
        var scope = scopes ? scopes.join(" ").toLowerCase() : this.clientId.toLowerCase();
        var serverAuthenticationRequest;
        var acquireTokenAuthority = (request && request.authority) ? AuthorityFactory_1.AuthorityFactory.CreateInstance(request.authority, this.config.auth.validateAuthority) : this.authorityInstance;
        var popUpWindow;
        if (interactionType === Constants_1.Constants.interactionTypePopup) {
            // Generate a popup window
            try {
                popUpWindow = this.openPopup("about:blank", "msal", Constants_1.Constants.popUpWidth, Constants_1.Constants.popUpHeight);
                // Push popup window handle onto stack for tracking
                WindowUtils_1.WindowUtils.trackPopup(popUpWindow);
            }
            catch (e) {
                this.loginInProgress = false;
                this.acquireTokenInProgress = false;
                this.logger.info(ClientAuthError_1.ClientAuthErrorMessage.popUpWindowError.code + ":" + ClientAuthError_1.ClientAuthErrorMessage.popUpWindowError.desc);
                this.cacheStorage.setItem(Constants_1.Constants.msalError, ClientAuthError_1.ClientAuthErrorMessage.popUpWindowError.code);
                this.cacheStorage.setItem(Constants_1.Constants.msalErrorDescription, ClientAuthError_1.ClientAuthErrorMessage.popUpWindowError.desc);
                if (reject) {
                    reject(ClientAuthError_1.ClientAuthError.createPopupWindowError());
                }
            }
            if (!popUpWindow) {
                return;
            }
        }
        acquireTokenAuthority.resolveEndpointsAsync().then(function () { return tslib_1.__awaiter(_this, void 0, void 0, function () {
            var responseType, loginStartPage, urlNavigate, hash;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        responseType = isLoginCall ? ResponseTypes.id_token : this.getTokenType(account, scopes, false);
                        if (isLoginCall) {
                            // if the user sets the login start page - angular only??
                            loginStartPage = this.cacheStorage.getItem(Constants_1.Constants.angularLoginRequest);
                            if (!loginStartPage || loginStartPage === "") {
                                loginStartPage = window.location.href;
                            }
                            else {
                                this.cacheStorage.setItem(Constants_1.Constants.angularLoginRequest, "");
                            }
                        }
                        serverAuthenticationRequest = new ServerRequestParameters_1.ServerRequestParameters(acquireTokenAuthority, this.clientId, scopes, responseType, this.getRedirectUri(), request && request.state);
                        this.updateCacheEntries(serverAuthenticationRequest, account, loginStartPage);
                        // populate QueryParameters (sid/login_hint/domain_hint) and any other extraQueryParameters set by the developer
                        serverAuthenticationRequest.populateQueryParams(account, request);
                        urlNavigate = UrlUtils_1.UrlUtils.createNavigateUrl(serverAuthenticationRequest) + Constants_1.Constants.response_mode_fragment;
                        // set state in cache
                        if (interactionType === Constants_1.Constants.interactionTypeRedirect) {
                            if (!isLoginCall) {
                                this.cacheStorage.setItem(Constants_1.Constants.stateAcquireToken, serverAuthenticationRequest.state, this.inCookie);
                            }
                        }
                        else if (interactionType === Constants_1.Constants.interactionTypePopup) {
                            window.renewStates.push(serverAuthenticationRequest.state);
                            window.requestType = isLoginCall ? Constants_1.Constants.login : Constants_1.Constants.renewToken;
                            // Register callback to capture results from server
                            this.registerCallback(serverAuthenticationRequest.state, scope, resolve, reject);
                        }
                        else {
                            throw ClientAuthError_1.ClientAuthError.createInvalidInteractionTypeError();
                        }
                        // prompt user for interaction
                        this.navigateWindow(urlNavigate, popUpWindow);
                        if (!popUpWindow) return [3 /*break*/, 2];
                        return [4 /*yield*/, WindowUtils_1.WindowUtils.monitorWindowForHash(popUpWindow, this.config.system.loadFrameTimeout)];
                    case 1:
                        hash = _a.sent();
                        if (hash) {
                            // Hash found
                            this.handleAuthenticationResponse(hash);
                            this.loginInProgress = false;
                            this.acquireTokenInProgress = false;
                            this.logger.info("Closing popup window");
                            // TODO: Check how this can be extracted for any framework specific code?
                            if (this.config.framework.isAngular) {
                                this.broadcast("msal:popUpHashChanged", hash);
                                WindowUtils_1.WindowUtils.closePopups();
                            }
                        }
                        else {
                            // Window closed
                            if (reject) {
                                reject(ClientAuthError_1.ClientAuthError.createUserCancelledError());
                            }
                            if (this.config.framework.isAngular) {
                                this.broadcast("msal:popUpClosed", ClientAuthError_1.ClientAuthErrorMessage.userCancelledError.code + Constants_1.Constants.resourceDelimiter + ClientAuthError_1.ClientAuthErrorMessage.userCancelledError.desc);
                                return [2 /*return*/];
                            }
                            this.loginInProgress = false;
                            this.acquireTokenInProgress = false;
                        }
                        _a.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        }); }).catch(function (err) {
            _this.logger.warning("could not resolve endpoints");
            _this.authErrorHandler(interactionType, ClientAuthError_1.ClientAuthError.createEndpointResolutionError(err.toString), AuthResponse_1.buildResponseStateOnly(request.state), reject);
            if (popUpWindow) {
                popUpWindow.close();
            }
        });
    };
    /**
     * Use this function to obtain a token before every call to the API / resource provider
     *
     * MSAL return's a cached token when available
     * Or it send's a request to the STS to obtain a new token using a hidden iframe.
     *
     * @param {@link AuthenticationParameters}
     *
     * To renew idToken, please pass clientId as the only scope in the Authentication Parameters
     * @returns {Promise.<AuthResponse>} - a promise that is fulfilled when this function has completed, or rejected if an error was raised. Returns the {@link AuthResponse} object
     *
     */
    UserAgentApplication.prototype.acquireTokenSilent = function (request) {
        var _this = this;
        if (!request) {
            throw ClientConfigurationError_1.ClientConfigurationError.createEmptyRequestError();
        }
        return new Promise(function (resolve, reject) {
            // Validate and filter scopes (the validate function will throw if validation fails)
            _this.validateInputScope(request.scopes, true);
            var scope = request.scopes.join(" ").toLowerCase();
            // if the developer passes an account, give that account the priority
            var account = request.account || _this.getAccount();
            // extract if there is an adalIdToken stashed in the cache
            var adalIdToken = _this.cacheStorage.getItem(Constants_1.Constants.adalIdToken);
            // if there is no account logged in and no login_hint/sid is passed in the request
            if (!account && !(request.sid || request.loginHint) && StringUtils_1.StringUtils.isEmpty(adalIdToken)) {
                _this.logger.info("User login is required");
                return reject(ClientAuthError_1.ClientAuthError.createUserLoginRequiredError());
            }
            var responseType = _this.getTokenType(account, request.scopes, true);
            var serverAuthenticationRequest = new ServerRequestParameters_1.ServerRequestParameters(AuthorityFactory_1.AuthorityFactory.CreateInstance(request.authority, _this.config.auth.validateAuthority), _this.clientId, request.scopes, responseType, _this.getRedirectUri(), request && request.state);
            // populate QueryParameters (sid/login_hint/domain_hint) and any other extraQueryParameters set by the developer
            if (ServerRequestParameters_1.ServerRequestParameters.isSSOParam(request) || account) {
                serverAuthenticationRequest.populateQueryParams(account, request);
            }
            // if user didn't pass login_hint/sid and adal's idtoken is present, extract the login_hint from the adalIdToken
            else if (!account && !StringUtils_1.StringUtils.isEmpty(adalIdToken)) {
                // if adalIdToken exists, extract the SSO info from the same
                var adalIdTokenObject = TokenUtils_1.TokenUtils.extractIdToken(adalIdToken);
                _this.logger.verbose("ADAL's idToken exists. Extracting login information from ADAL's idToken ");
                serverAuthenticationRequest.populateQueryParams(account, null, adalIdTokenObject);
            }
            var userContainedClaims = request.claimsRequest || serverAuthenticationRequest.claimsValue;
            var authErr;
            var cacheResultResponse;
            if (!userContainedClaims && !request.forceRefresh) {
                try {
                    cacheResultResponse = _this.getCachedToken(serverAuthenticationRequest, account);
                }
                catch (e) {
                    authErr = e;
                }
            }
            // resolve/reject based on cacheResult
            if (cacheResultResponse) {
                _this.logger.info("Token is already in cache for scope:" + scope);
                resolve(cacheResultResponse);
                return null;
            }
            else if (authErr) {
                _this.logger.infoPii(authErr.errorCode + ":" + authErr.errorMessage);
                reject(authErr);
                return null;
            }
            // else proceed with login
            else {
                var logMessage = void 0;
                if (userContainedClaims) {
                    logMessage = "Skipped cache lookup since claims were given.";
                }
                else if (request.forceRefresh) {
                    logMessage = "Skipped cache lookup since request.forceRefresh option was set to true";
                }
                else {
                    logMessage = "Token is not in cache for scope:" + scope;
                }
                _this.logger.verbose(logMessage);
                // Cache result can return null if cache is empty. In that case, set authority to default value if no authority is passed to the api.
                if (!serverAuthenticationRequest.authorityInstance) {
                    serverAuthenticationRequest.authorityInstance = request.authority ? AuthorityFactory_1.AuthorityFactory.CreateInstance(request.authority, _this.config.auth.validateAuthority) : _this.authorityInstance;
                }
                // cache miss
                return serverAuthenticationRequest.authorityInstance.resolveEndpointsAsync()
                    .then(function () {
                    /*
                     * refresh attempt with iframe
                     * Already renewing for this scope, callback when we get the token.
                     */
                    if (window.activeRenewals[scope]) {
                        _this.logger.verbose("Renew token for scope: " + scope + " is in progress. Registering callback");
                        // Active renewals contains the state for each renewal.
                        _this.registerCallback(window.activeRenewals[scope], scope, resolve, reject);
                    }
                    else {
                        if (request.scopes && request.scopes.indexOf(_this.clientId) > -1 && request.scopes.length === 1) {
                            /*
                             * App uses idToken to send to api endpoints
                             * Default scope is tracked as clientId to store this token
                             */
                            _this.logger.verbose("renewing idToken");
                            _this.silentLogin = true;
                            _this.renewIdToken(request.scopes, resolve, reject, account, serverAuthenticationRequest);
                        }
                        else {
                            // renew access token
                            _this.logger.verbose("renewing accesstoken");
                            _this.renewToken(request.scopes, resolve, reject, account, serverAuthenticationRequest);
                        }
                    }
                }).catch(function (err) {
                    _this.logger.warning("could not resolve endpoints");
                    reject(ClientAuthError_1.ClientAuthError.createEndpointResolutionError(err.toString()));
                    return null;
                });
            }
        });
    };
    // #endregion
    // #region Popup Window Creation
    /**
     * @hidden
     *
     * Configures popup window for login.
     *
     * @param urlNavigate
     * @param title
     * @param popUpWidth
     * @param popUpHeight
     * @ignore
     * @hidden
     */
    UserAgentApplication.prototype.openPopup = function (urlNavigate, title, popUpWidth, popUpHeight) {
        try {
            /**
             * adding winLeft and winTop to account for dual monitor
             * using screenLeft and screenTop for IE8 and earlier
             */
            var winLeft = window.screenLeft ? window.screenLeft : window.screenX;
            var winTop = window.screenTop ? window.screenTop : window.screenY;
            /**
             * window.innerWidth displays browser window"s height and width excluding toolbars
             * using document.documentElement.clientWidth for IE8 and earlier
             */
            var width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
            var height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
            var left = ((width / 2) - (popUpWidth / 2)) + winLeft;
            var top = ((height / 2) - (popUpHeight / 2)) + winTop;
            // open the window
            var popupWindow = window.open(urlNavigate, title, "width=" + popUpWidth + ", height=" + popUpHeight + ", top=" + top + ", left=" + left);
            if (!popupWindow) {
                throw ClientAuthError_1.ClientAuthError.createPopupWindowError();
            }
            if (popupWindow.focus) {
                popupWindow.focus();
            }
            return popupWindow;
        }
        catch (e) {
            this.logger.error("error opening popup " + e.message);
            this.loginInProgress = false;
            this.acquireTokenInProgress = false;
            throw ClientAuthError_1.ClientAuthError.createPopupWindowError(e.toString());
        }
    };
    // #endregion
    // #region Iframe Management
    /**
     * @hidden
     * Calling _loadFrame but with a timeout to signal failure in loadframeStatus. Callbacks are left.
     * registered when network errors occur and subsequent token requests for same resource are registered to the pending request.
     * @ignore
     */
    UserAgentApplication.prototype.loadIframeTimeout = function (urlNavigate, frameName, scope) {
        return tslib_1.__awaiter(this, void 0, Promise, function () {
            var expectedState, iframe, hash;
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        expectedState = window.activeRenewals[scope];
                        this.logger.verbose("Set loading state to pending for: " + scope + ":" + expectedState);
                        this.cacheStorage.setItem(Constants_1.Constants.renewStatus + expectedState, Constants_1.Constants.tokenRenewStatusInProgress);
                        setTimeout(function () {
                            if (_this.cacheStorage.getItem(Constants_1.Constants.renewStatus + expectedState) === Constants_1.Constants.tokenRenewStatusInProgress) {
                                // fail the iframe session if it's in pending state
                                _this.logger.verbose("Loading frame has timed out after: " + (_this.config.system.loadFrameTimeout / 1000) + " seconds for scope " + scope + ":" + expectedState);
                                // Error after timeout
                                if (expectedState && window.callbackMappedToRenewStates[expectedState]) {
                                    window.callbackMappedToRenewStates[expectedState](null, ClientAuthError_1.ClientAuthError.createTokenRenewalTimeoutError());
                                }
                                _this.cacheStorage.setItem(Constants_1.Constants.renewStatus + expectedState, Constants_1.Constants.tokenRenewStatusCancelled);
                            }
                        }, this.config.system.loadFrameTimeout);
                        return [4 /*yield*/, WindowUtils_1.WindowUtils.loadFrame(urlNavigate, frameName, this.config.system.navigateFrameWait, this.logger)];
                    case 1:
                        iframe = _a.sent();
                        return [4 /*yield*/, WindowUtils_1.WindowUtils.monitorWindowForHash(iframe.contentWindow, this.config.system.loadFrameTimeout)];
                    case 2:
                        hash = _a.sent();
                        if (hash) {
                            this.handleAuthenticationResponse(hash);
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    // #endregion
    // #region General Helpers
    /**
     * @hidden
     * Used to redirect the browser to the STS authorization endpoint
     * @param {string} urlNavigate - URL of the authorization endpoint
     */
    UserAgentApplication.prototype.navigateWindow = function (urlNavigate, popupWindow) {
        // Navigate if valid URL
        if (urlNavigate && !StringUtils_1.StringUtils.isEmpty(urlNavigate)) {
            var navigateWindow = popupWindow ? popupWindow : window;
            var logMessage = popupWindow ? "Navigated Popup window to:" + urlNavigate : "Navigate to:" + urlNavigate;
            this.logger.infoPii(logMessage);
            navigateWindow.location.replace(urlNavigate);
        }
        else {
            this.logger.info("Navigate url is empty");
            throw AuthError_1.AuthError.createUnexpectedError("Navigate url is empty");
        }
    };
    /**
     * @hidden
     * Used to add the developer requested callback to the array of callbacks for the specified scopes. The updated array is stored on the window object
     * @param {string} expectedState - Unique state identifier (guid).
     * @param {string} scope - Developer requested permissions. Not all scopes are guaranteed to be included in the access token returned.
     * @param {Function} resolve - The resolve function of the promise object.
     * @param {Function} reject - The reject function of the promise object.
     * @ignore
     */
    UserAgentApplication.prototype.registerCallback = function (expectedState, scope, resolve, reject) {
        var _this = this;
        // track active renewals
        window.activeRenewals[scope] = expectedState;
        // initialize callbacks mapped array
        if (!window.promiseMappedToRenewStates[expectedState]) {
            window.promiseMappedToRenewStates[expectedState] = [];
        }
        // indexing on the current state, push the callback params to callbacks mapped
        window.promiseMappedToRenewStates[expectedState].push({ resolve: resolve, reject: reject });
        // Store the server response in the current window??
        if (!window.callbackMappedToRenewStates[expectedState]) {
            window.callbackMappedToRenewStates[expectedState] =
                function (response, error) {
                    // reset active renewals
                    window.activeRenewals[scope] = null;
                    // for all promiseMappedtoRenewStates for a given 'state' - call the reject/resolve with error/token respectively
                    for (var i = 0; i < window.promiseMappedToRenewStates[expectedState].length; ++i) {
                        try {
                            if (error) {
                                window.promiseMappedToRenewStates[expectedState][i].reject(error);
                            }
                            else if (response) {
                                window.promiseMappedToRenewStates[expectedState][i].resolve(response);
                            }
                            else {
                                throw AuthError_1.AuthError.createUnexpectedError("Error and response are both null");
                            }
                        }
                        catch (e) {
                            _this.logger.warning(e);
                        }
                    }
                    // reset
                    window.promiseMappedToRenewStates[expectedState] = null;
                    window.callbackMappedToRenewStates[expectedState] = null;
                };
        }
    };
    // #endregion
    // #region Logout
    /**
     * Use to log out the current user, and redirect the user to the postLogoutRedirectUri.
     * Default behaviour is to redirect the user to `window.location.href`.
     */
    UserAgentApplication.prototype.logout = function () {
        var _this = this;
        this.clearCache();
        this.account = null;
        var logout = "";
        if (this.getPostLogoutRedirectUri()) {
            logout = "post_logout_redirect_uri=" + encodeURIComponent(this.getPostLogoutRedirectUri());
        }
        this.authorityInstance.resolveEndpointsAsync().then(function (authority) {
            var urlNavigate = authority.EndSessionEndpoint
                ? authority.EndSessionEndpoint + "?" + logout
                : _this.authority + "oauth2/v2.0/logout?" + logout;
            _this.navigateWindow(urlNavigate);
        });
    };
    /**
     * @hidden
     * Clear all access tokens in the cache.
     * @ignore
     */
    UserAgentApplication.prototype.clearCache = function () {
        window.renewStates = [];
        var accessTokenItems = this.cacheStorage.getAllAccessTokens(Constants_1.Constants.clientId, Constants_1.Constants.homeAccountIdentifier);
        for (var i = 0; i < accessTokenItems.length; i++) {
            this.cacheStorage.removeItem(JSON.stringify(accessTokenItems[i].key));
        }
        this.cacheStorage.resetCacheItems();
        this.cacheStorage.clearCookie();
    };
    /**
     * @hidden
     * Clear a given access token from the cache.
     *
     * @param accessToken
     */
    UserAgentApplication.prototype.clearCacheForScope = function (accessToken) {
        var accessTokenItems = this.cacheStorage.getAllAccessTokens(Constants_1.Constants.clientId, Constants_1.Constants.homeAccountIdentifier);
        for (var i = 0; i < accessTokenItems.length; i++) {
            var token = accessTokenItems[i];
            if (token.value.accessToken === accessToken) {
                this.cacheStorage.removeItem(JSON.stringify(token.key));
            }
        }
    };
    // #endregion
    // #region Response
    /**
     * @hidden
     * @ignore
     * Checks if the redirect response is received from the STS. In case of redirect, the url fragment has either id_token, access_token or error.
     * @param {string} hash - Hash passed from redirect page.
     * @returns {Boolean} - true if response contains id_token, access_token or error, false otherwise.
     */
    UserAgentApplication.prototype.isCallback = function (hash) {
        this.logger.info("isCallback will be deprecated in favor of urlContainsHash in MSAL.js v2.0.");
        return UrlUtils_1.UrlUtils.urlContainsHash(hash);
    };
    /**
     * @hidden
     * Used to call the constructor callback with the token/error
     * @param {string} [hash=window.location.hash] - Hash fragment of Url.
     */
    UserAgentApplication.prototype.processCallBack = function (hash, stateInfo, parentCallback) {
        this.logger.info("Processing the callback from redirect response");
        // get the state info from the hash
        if (!stateInfo) {
            stateInfo = this.getResponseState(hash);
        }
        var response;
        var authErr;
        // Save the token info from the hash
        try {
            response = this.saveTokenFromHash(hash, stateInfo);
        }
        catch (err) {
            authErr = err;
        }
        // remove hash from the cache
        this.cacheStorage.removeItem(Constants_1.Constants.urlHash);
        try {
            // Clear the cookie in the hash
            this.cacheStorage.clearCookie();
            var accountState = this.getAccountState(stateInfo.state);
            if (response) {
                if ((stateInfo.requestType === Constants_1.Constants.renewToken) || response.accessToken) {
                    if (window.parent !== window) {
                        this.logger.verbose("Window is in iframe, acquiring token silently");
                    }
                    else {
                        this.logger.verbose("acquiring token interactive in progress");
                    }
                    response.tokenType = Constants_1.Constants.accessToken;
                }
                else if (stateInfo.requestType === Constants_1.Constants.login) {
                    response.tokenType = Constants_1.Constants.idToken;
                }
                if (!parentCallback) {
                    this.authResponseHandler(Constants_1.Constants.interactionTypeRedirect, response);
                    return;
                }
            }
            else if (!parentCallback) {
                this.authErrorHandler(Constants_1.Constants.interactionTypeRedirect, authErr, AuthResponse_1.buildResponseStateOnly(accountState));
                return;
            }
            parentCallback(response, authErr);
        }
        catch (err) {
            this.logger.error("Error occurred in token received callback function: " + err);
            throw ClientAuthError_1.ClientAuthError.createErrorInCallbackFunction(err.toString());
        }
    };
    /**
     * @hidden
     * This method must be called for processing the response received from the STS. It extracts the hash, processes the token or error information and saves it in the cache. It then
     * calls the registered callbacks in case of redirect or resolves the promises with the result.
     * @param {string} [hash=window.location.hash] - Hash fragment of Url.
     */
    UserAgentApplication.prototype.handleAuthenticationResponse = function (hash) {
        // retrieve the hash
        var locationHash = hash || window.location.hash;
        // Check if the current flow is popup or hidden iframe
        var iframeWithHash = WindowUtils_1.WindowUtils.getIframeWithHash(locationHash);
        var popUpWithHash = WindowUtils_1.WindowUtils.getPopUpWithHash(locationHash);
        var isPopupOrIframe = !!(iframeWithHash || popUpWithHash);
        // if (window.parent !== window), by using self, window.parent becomes equal to window in getResponseState method specifically
        var stateInfo = this.getResponseState(locationHash);
        var tokenResponseCallback = null;
        this.logger.info("Returned from redirect url");
        // If parent window is the msal instance which opened the current window (iframe)
        if (isPopupOrIframe) {
            tokenResponseCallback = window.callbackMappedToRenewStates[stateInfo.state];
        }
        else {
            // Redirect cases
            tokenResponseCallback = null;
            // if set to navigate to loginRequest page post login
            if (this.config.auth.navigateToLoginRequestUrl) {
                this.cacheStorage.setItem(Constants_1.Constants.urlHash, locationHash);
                if (window.parent === window) {
                    window.location.href = this.cacheStorage.getItem(Constants_1.Constants.loginRequest, this.inCookie);
                }
                return;
            }
            else {
                window.location.hash = "";
            }
            if (!this.redirectCallbacksSet) {
                // We reached this point too early - cache hash, return and process in handleRedirectCallbacks
                this.cacheStorage.setItem(Constants_1.Constants.urlHash, locationHash);
                return;
            }
        }
        this.processCallBack(locationHash, stateInfo, tokenResponseCallback);
        // If current window is opener, close all windows
        if (isPopupOrIframe) {
            WindowUtils_1.WindowUtils.closePopups();
        }
    };
    /**
     * @hidden
     * Creates a stateInfo object from the URL fragment and returns it.
     * @param {string} hash  -  Hash passed from redirect page
     * @returns {TokenResponse} an object created from the redirect response from AAD comprising of the keys - parameters, requestType, stateMatch, stateResponse and valid.
     * @ignore
     */
    UserAgentApplication.prototype.getResponseState = function (hash) {
        var parameters = UrlUtils_1.UrlUtils.deserializeHash(hash);
        var stateResponse;
        if (!parameters) {
            throw AuthError_1.AuthError.createUnexpectedError("Hash was not parsed correctly.");
        }
        if (parameters.hasOwnProperty("state")) {
            stateResponse = {
                requestType: Constants_1.Constants.unknown,
                state: parameters.state,
                stateMatch: false
            };
        }
        else {
            throw AuthError_1.AuthError.createUnexpectedError("Hash does not contain state.");
        }
        /*
         * async calls can fire iframe and login request at the same time if developer does not use the API as expected
         * incoming callback needs to be looked up to find the request type
         */
        // loginRedirect
        if (stateResponse.state === this.cacheStorage.getItem(Constants_1.Constants.stateLogin, this.inCookie) || stateResponse.state === this.silentAuthenticationState) { // loginRedirect
            stateResponse.requestType = Constants_1.Constants.login;
            stateResponse.stateMatch = true;
            return stateResponse;
        }
        // acquireTokenRedirect
        else if (stateResponse.state === this.cacheStorage.getItem(Constants_1.Constants.stateAcquireToken, this.inCookie)) { // acquireTokenRedirect
            stateResponse.requestType = Constants_1.Constants.renewToken;
            stateResponse.stateMatch = true;
            return stateResponse;
        }
        // external api requests may have many renewtoken requests for different resource
        if (!stateResponse.stateMatch) {
            stateResponse.requestType = window.requestType;
            var statesInParentContext = window.renewStates;
            for (var i = 0; i < statesInParentContext.length; i++) {
                if (statesInParentContext[i] === stateResponse.state) {
                    stateResponse.stateMatch = true;
                    break;
                }
            }
        }
        return stateResponse;
    };
    // #endregion
    // #region Token Processing (Extract to TokenProcessing.ts)
    /**
     * @hidden
     * Used to get token for the specified set of scopes from the cache
     * @param {@link ServerRequestParameters} - Request sent to the STS to obtain an id_token/access_token
     * @param {Account} account - Account for which the scopes were requested
     */
    UserAgentApplication.prototype.getCachedToken = function (serverAuthenticationRequest, account) {
        var accessTokenCacheItem = null;
        var scopes = serverAuthenticationRequest.scopes;
        // filter by clientId and account
        var tokenCacheItems = this.cacheStorage.getAllAccessTokens(this.clientId, account ? account.homeAccountIdentifier : null);
        // No match found after initial filtering
        if (tokenCacheItems.length === 0) {
            return null;
        }
        var filteredItems = [];
        // if no authority passed
        if (!serverAuthenticationRequest.authority) {
            // filter by scope
            for (var i = 0; i < tokenCacheItems.length; i++) {
                var cacheItem = tokenCacheItems[i];
                var cachedScopes = cacheItem.key.scopes.split(" ");
                if (ScopeSet_1.ScopeSet.containsScope(cachedScopes, scopes)) {
                    filteredItems.push(cacheItem);
                }
            }
            // if only one cached token found
            if (filteredItems.length === 1) {
                accessTokenCacheItem = filteredItems[0];
                serverAuthenticationRequest.authorityInstance = AuthorityFactory_1.AuthorityFactory.CreateInstance(accessTokenCacheItem.key.authority, this.config.auth.validateAuthority);
            }
            // if more than one cached token is found
            else if (filteredItems.length > 1) {
                throw ClientAuthError_1.ClientAuthError.createMultipleMatchingTokensInCacheError(scopes.toString());
            }
            // if no match found, check if there was a single authority used
            else {
                var authorityList = this.getUniqueAuthority(tokenCacheItems, "authority");
                if (authorityList.length > 1) {
                    throw ClientAuthError_1.ClientAuthError.createMultipleAuthoritiesInCacheError(scopes.toString());
                }
                serverAuthenticationRequest.authorityInstance = AuthorityFactory_1.AuthorityFactory.CreateInstance(authorityList[0], this.config.auth.validateAuthority);
            }
        }
        // if an authority is passed in the API
        else {
            // filter by authority and scope
            for (var i = 0; i < tokenCacheItems.length; i++) {
                var cacheItem = tokenCacheItems[i];
                var cachedScopes = cacheItem.key.scopes.split(" ");
                if (ScopeSet_1.ScopeSet.containsScope(cachedScopes, scopes) && UrlUtils_1.UrlUtils.CanonicalizeUri(cacheItem.key.authority) === serverAuthenticationRequest.authority) {
                    filteredItems.push(cacheItem);
                }
            }
            // no match
            if (filteredItems.length === 0) {
                return null;
            }
            // if only one cachedToken Found
            else if (filteredItems.length === 1) {
                accessTokenCacheItem = filteredItems[0];
            }
            else {
                // if more than one cached token is found
                throw ClientAuthError_1.ClientAuthError.createMultipleMatchingTokensInCacheError(scopes.toString());
            }
        }
        if (accessTokenCacheItem != null) {
            var expired = Number(accessTokenCacheItem.value.expiresIn);
            // If expiration is within offset, it will force renew
            var offset = this.config.system.tokenRenewalOffsetSeconds || 300;
            if (expired && (expired > TimeUtils_1.TimeUtils.now() + offset)) {
                var idTokenObj = new IdToken_1.IdToken(accessTokenCacheItem.value.idToken);
                if (!account) {
                    account = this.getAccount();
                    if (!account) {
                        throw AuthError_1.AuthError.createUnexpectedError("Account should not be null here.");
                    }
                }
                var aState = this.getAccountState(serverAuthenticationRequest.state);
                var response = {
                    uniqueId: "",
                    tenantId: "",
                    tokenType: (accessTokenCacheItem.value.idToken === accessTokenCacheItem.value.accessToken) ? Constants_1.Constants.idToken : Constants_1.Constants.accessToken,
                    idToken: idTokenObj,
                    idTokenClaims: idTokenObj.claims,
                    accessToken: accessTokenCacheItem.value.accessToken,
                    scopes: accessTokenCacheItem.key.scopes.split(" "),
                    expiresOn: new Date(expired * 1000),
                    account: account,
                    accountState: aState
                };
                ResponseUtils_1.ResponseUtils.setResponseIdToken(response, idTokenObj);
                return response;
            }
            else {
                this.cacheStorage.removeItem(JSON.stringify(filteredItems[0].key));
                return null;
            }
        }
        else {
            return null;
        }
    };
    /**
     * @hidden
     * Used to get a unique list of authorities from the cache
     * @param {Array<AccessTokenCacheItem>}  accessTokenCacheItems - accessTokenCacheItems saved in the cache
     * @ignore
     */
    UserAgentApplication.prototype.getUniqueAuthority = function (accessTokenCacheItems, property) {
        var authorityList = [];
        var flags = [];
        accessTokenCacheItems.forEach(function (element) {
            if (element.key.hasOwnProperty(property) && (flags.indexOf(element.key[property]) === -1)) {
                flags.push(element.key[property]);
                authorityList.push(element.key[property]);
            }
        });
        return authorityList;
    };
    /**
     * @hidden
     * Check if ADAL id_token exists and return if exists.
     *
     */
    UserAgentApplication.prototype.extractADALIdToken = function () {
        var adalIdToken = this.cacheStorage.getItem(Constants_1.Constants.adalIdToken);
        if (!StringUtils_1.StringUtils.isEmpty(adalIdToken)) {
            return TokenUtils_1.TokenUtils.extractIdToken(adalIdToken);
        }
        return null;
    };
    /**
     * @hidden
     * Acquires access token using a hidden iframe.
     * @ignore
     */
    UserAgentApplication.prototype.renewToken = function (scopes, resolve, reject, account, serverAuthenticationRequest) {
        var scope = scopes.join(" ").toLowerCase();
        this.logger.verbose("renewToken is called for scope:" + scope);
        var frameName = "msalRenewFrame" + scope;
        var frameHandle = WindowUtils_1.WindowUtils.addHiddenIFrame(frameName, this.logger);
        this.updateCacheEntries(serverAuthenticationRequest, account);
        this.logger.verbose("Renew token Expected state: " + serverAuthenticationRequest.state);
        // Build urlNavigate with "prompt=none" and navigate to URL in hidden iFrame
        var urlNavigate = UrlUtils_1.UrlUtils.urlRemoveQueryStringParameter(UrlUtils_1.UrlUtils.createNavigateUrl(serverAuthenticationRequest), Constants_1.Constants.prompt) + Constants_1.Constants.prompt_none;
        window.renewStates.push(serverAuthenticationRequest.state);
        window.requestType = Constants_1.Constants.renewToken;
        this.registerCallback(serverAuthenticationRequest.state, scope, resolve, reject);
        this.logger.infoPii("Navigate to:" + urlNavigate);
        frameHandle.src = "about:blank";
        this.loadIframeTimeout(urlNavigate, frameName, scope);
    };
    /**
     * @hidden
     * Renews idtoken for app's own backend when clientId is passed as a single scope in the scopes array.
     * @ignore
     */
    UserAgentApplication.prototype.renewIdToken = function (scopes, resolve, reject, account, serverAuthenticationRequest) {
        this.logger.info("renewidToken is called");
        var frameName = "msalIdTokenFrame";
        var frameHandle = WindowUtils_1.WindowUtils.addHiddenIFrame(frameName, this.logger);
        this.updateCacheEntries(serverAuthenticationRequest, account);
        this.logger.verbose("Renew Idtoken Expected state: " + serverAuthenticationRequest.state);
        // Build urlNavigate with "prompt=none" and navigate to URL in hidden iFrame
        var urlNavigate = UrlUtils_1.UrlUtils.urlRemoveQueryStringParameter(UrlUtils_1.UrlUtils.createNavigateUrl(serverAuthenticationRequest), Constants_1.Constants.prompt) + Constants_1.Constants.prompt_none;
        if (this.silentLogin) {
            window.requestType = Constants_1.Constants.login;
            this.silentAuthenticationState = serverAuthenticationRequest.state;
        }
        else {
            window.requestType = Constants_1.Constants.renewToken;
            window.renewStates.push(serverAuthenticationRequest.state);
        }
        // note: scope here is clientId
        this.registerCallback(serverAuthenticationRequest.state, this.clientId, resolve, reject);
        this.logger.infoPii("Navigate to:" + urlNavigate);
        frameHandle.src = "about:blank";
        this.loadIframeTimeout(urlNavigate, frameName, this.clientId);
    };
    /**
     * @hidden
     *
     * This method must be called for processing the response received from AAD. It extracts the hash, processes the token or error, saves it in the cache and calls the registered callbacks with the result.
     * @param {string} authority authority received in the redirect response from AAD.
     * @param {TokenResponse} requestInfo an object created from the redirect response from AAD comprising of the keys - parameters, requestType, stateMatch, stateResponse and valid.
     * @param {Account} account account object for which scopes are consented for. The default account is the logged in account.
     * @param {ClientInfo} clientInfo clientInfo received as part of the response comprising of fields uid and utid.
     * @param {IdToken} idToken idToken received as part of the response.
     * @ignore
     * @private
     */
    /* tslint:disable:no-string-literal */
    UserAgentApplication.prototype.saveAccessToken = function (response, authority, parameters, clientInfo, idTokenObj) {
        var scope;
        var accessTokenResponse = tslib_1.__assign({}, response);
        var clientObj = new ClientInfo_1.ClientInfo(clientInfo);
        var expiration;
        // if the response contains "scope"
        if (parameters.hasOwnProperty("scope")) {
            // read the scopes
            scope = parameters["scope"];
            var consentedScopes = scope.split(" ");
            // retrieve all access tokens from the cache, remove the dup scores
            var accessTokenCacheItems = this.cacheStorage.getAllAccessTokens(this.clientId, authority);
            for (var i = 0; i < accessTokenCacheItems.length; i++) {
                var accessTokenCacheItem = accessTokenCacheItems[i];
                if (accessTokenCacheItem.key.homeAccountIdentifier === response.account.homeAccountIdentifier) {
                    var cachedScopes = accessTokenCacheItem.key.scopes.split(" ");
                    if (ScopeSet_1.ScopeSet.isIntersectingScopes(cachedScopes, consentedScopes)) {
                        this.cacheStorage.removeItem(JSON.stringify(accessTokenCacheItem.key));
                    }
                }
            }
            // Generate and cache accessTokenKey and accessTokenValue
            var expiresIn = TimeUtils_1.TimeUtils.parseExpiresIn(parameters[Constants_1.Constants.expiresIn]);
            expiration = TimeUtils_1.TimeUtils.now() + expiresIn;
            var accessTokenKey = new AccessTokenKey_1.AccessTokenKey(authority, this.clientId, scope, clientObj.uid, clientObj.utid);
            var accessTokenValue = new AccessTokenValue_1.AccessTokenValue(parameters[Constants_1.Constants.accessToken], idTokenObj.rawIdToken, expiration.toString(), clientInfo);
            this.cacheStorage.setItem(JSON.stringify(accessTokenKey), JSON.stringify(accessTokenValue));
            accessTokenResponse.accessToken = parameters[Constants_1.Constants.accessToken];
            accessTokenResponse.scopes = consentedScopes;
        }
        // if the response does not contain "scope" - scope is usually client_id and the token will be id_token
        else {
            scope = this.clientId;
            // Generate and cache accessTokenKey and accessTokenValue
            var accessTokenKey = new AccessTokenKey_1.AccessTokenKey(authority, this.clientId, scope, clientObj.uid, clientObj.utid);
            expiration = Number(idTokenObj.expiration);
            var accessTokenValue = new AccessTokenValue_1.AccessTokenValue(parameters[Constants_1.Constants.idToken], parameters[Constants_1.Constants.idToken], expiration.toString(), clientInfo);
            this.cacheStorage.setItem(JSON.stringify(accessTokenKey), JSON.stringify(accessTokenValue));
            accessTokenResponse.scopes = [scope];
            accessTokenResponse.accessToken = parameters[Constants_1.Constants.idToken];
        }
        if (expiration) {
            accessTokenResponse.expiresOn = new Date(expiration * 1000);
        }
        else {
            this.logger.error("Could not parse expiresIn parameter");
        }
        return accessTokenResponse;
    };
    /**
     * @hidden
     * Saves token or error received in the response from AAD in the cache. In case of id_token, it also creates the account object.
     * @ignore
     */
    UserAgentApplication.prototype.saveTokenFromHash = function (hash, stateInfo) {
        this.logger.info("State status:" + stateInfo.stateMatch + "; Request type:" + stateInfo.requestType);
        var response = {
            uniqueId: "",
            tenantId: "",
            tokenType: "",
            idToken: null,
            idTokenClaims: null,
            accessToken: null,
            scopes: [],
            expiresOn: null,
            account: null,
            accountState: "",
        };
        var error;
        var hashParams = UrlUtils_1.UrlUtils.deserializeHash(hash);
        var authorityKey = "";
        var acquireTokenAccountKey = "";
        var idTokenObj = null;
        // If server returns an error
        if (hashParams.hasOwnProperty(Constants_1.Constants.errorDescription) || hashParams.hasOwnProperty(Constants_1.Constants.error)) {
            this.logger.infoPii("Error :" + hashParams[Constants_1.Constants.error] + "; Error description:" + hashParams[Constants_1.Constants.errorDescription]);
            this.cacheStorage.setItem(Constants_1.Constants.msalError, hashParams[Constants_1.Constants.error]);
            this.cacheStorage.setItem(Constants_1.Constants.msalErrorDescription, hashParams[Constants_1.Constants.errorDescription]);
            // login
            if (stateInfo.requestType === Constants_1.Constants.login) {
                this.loginInProgress = false;
                this.cacheStorage.setItem(Constants_1.Constants.loginError, hashParams[Constants_1.Constants.errorDescription] + ":" + hashParams[Constants_1.Constants.error]);
                authorityKey = Storage_1.Storage.generateAuthorityKey(stateInfo.state);
            }
            // acquireToken
            if (stateInfo.requestType === Constants_1.Constants.renewToken) {
                this.acquireTokenInProgress = false;
                authorityKey = Storage_1.Storage.generateAuthorityKey(stateInfo.state);
                var account = this.getAccount();
                var accountId = void 0;
                if (account && !StringUtils_1.StringUtils.isEmpty(account.homeAccountIdentifier)) {
                    accountId = account.homeAccountIdentifier;
                }
                else {
                    accountId = Constants_1.Constants.no_account;
                }
                acquireTokenAccountKey = Storage_1.Storage.generateAcquireTokenAccountKey(accountId, stateInfo.state);
            }
            var _a = Constants_1.Constants.error, hashErr = hashParams[_a], _b = Constants_1.Constants.errorDescription, hashErrDesc = hashParams[_b];
            if (InteractionRequiredAuthError_1.InteractionRequiredAuthError.isInteractionRequiredError(hashErr) ||
                InteractionRequiredAuthError_1.InteractionRequiredAuthError.isInteractionRequiredError(hashErrDesc)) {
                error = new InteractionRequiredAuthError_1.InteractionRequiredAuthError(hashParams[Constants_1.Constants.error], hashParams[Constants_1.Constants.errorDescription]);
            }
            else {
                error = new ServerError_1.ServerError(hashParams[Constants_1.Constants.error], hashParams[Constants_1.Constants.errorDescription]);
            }
        }
        // If the server returns "Success"
        else {
            // Verify the state from redirect and record tokens to storage if exists
            if (stateInfo.stateMatch) {
                this.logger.info("State is right");
                if (hashParams.hasOwnProperty(Constants_1.Constants.sessionState)) {
                    this.cacheStorage.setItem(Constants_1.Constants.msalSessionState, hashParams[Constants_1.Constants.sessionState]);
                }
                response.accountState = this.getAccountState(stateInfo.state);
                var clientInfo = "";
                // Process access_token
                if (hashParams.hasOwnProperty(Constants_1.Constants.accessToken)) {
                    this.logger.info("Fragment has access token");
                    this.acquireTokenInProgress = false;
                    // retrieve the id_token from response if present
                    if (hashParams.hasOwnProperty(Constants_1.Constants.idToken)) {
                        idTokenObj = new IdToken_1.IdToken(hashParams[Constants_1.Constants.idToken]);
                        response.idToken = idTokenObj;
                        response.idTokenClaims = idTokenObj.claims;
                    }
                    else {
                        idTokenObj = new IdToken_1.IdToken(this.cacheStorage.getItem(Constants_1.Constants.idTokenKey));
                        response = ResponseUtils_1.ResponseUtils.setResponseIdToken(response, idTokenObj);
                    }
                    // set authority
                    var authority = this.populateAuthority(stateInfo.state, this.inCookie, this.cacheStorage, idTokenObj);
                    // retrieve client_info - if it is not found, generate the uid and utid from idToken
                    if (hashParams.hasOwnProperty(Constants_1.Constants.clientInfo)) {
                        clientInfo = hashParams[Constants_1.Constants.clientInfo];
                    }
                    else {
                        this.logger.warning("ClientInfo not received in the response from AAD");
                        throw ClientAuthError_1.ClientAuthError.createClientInfoNotPopulatedError("ClientInfo not received in the response from the server");
                    }
                    response.account = Account_1.Account.createAccount(idTokenObj, new ClientInfo_1.ClientInfo(clientInfo));
                    var accountKey = void 0;
                    if (response.account && !StringUtils_1.StringUtils.isEmpty(response.account.homeAccountIdentifier)) {
                        accountKey = response.account.homeAccountIdentifier;
                    }
                    else {
                        accountKey = Constants_1.Constants.no_account;
                    }
                    acquireTokenAccountKey = Storage_1.Storage.generateAcquireTokenAccountKey(accountKey, stateInfo.state);
                    var acquireTokenAccountKey_noaccount = Storage_1.Storage.generateAcquireTokenAccountKey(Constants_1.Constants.no_account, stateInfo.state);
                    var cachedAccount = this.cacheStorage.getItem(acquireTokenAccountKey);
                    var acquireTokenAccount = void 0;
                    // Check with the account in the Cache
                    if (!StringUtils_1.StringUtils.isEmpty(cachedAccount)) {
                        acquireTokenAccount = JSON.parse(cachedAccount);
                        if (response.account && acquireTokenAccount && Account_1.Account.compareAccounts(response.account, acquireTokenAccount)) {
                            response = this.saveAccessToken(response, authority, hashParams, clientInfo, idTokenObj);
                            this.logger.info("The user object received in the response is the same as the one passed in the acquireToken request");
                        }
                        else {
                            this.logger.warning("The account object created from the response is not the same as the one passed in the acquireToken request");
                        }
                    }
                    else if (!StringUtils_1.StringUtils.isEmpty(this.cacheStorage.getItem(acquireTokenAccountKey_noaccount))) {
                        response = this.saveAccessToken(response, authority, hashParams, clientInfo, idTokenObj);
                    }
                }
                // Process id_token
                if (hashParams.hasOwnProperty(Constants_1.Constants.idToken)) {
                    this.logger.info("Fragment has id token");
                    // login no longer in progress
                    this.loginInProgress = false;
                    // set the idToken
                    idTokenObj = new IdToken_1.IdToken(hashParams[Constants_1.Constants.idToken]);
                    response = ResponseUtils_1.ResponseUtils.setResponseIdToken(response, idTokenObj);
                    if (hashParams.hasOwnProperty(Constants_1.Constants.clientInfo)) {
                        clientInfo = hashParams[Constants_1.Constants.clientInfo];
                    }
                    else {
                        this.logger.warning("ClientInfo not received in the response from AAD");
                    }
                    // set authority
                    var authority = this.populateAuthority(stateInfo.state, this.inCookie, this.cacheStorage, idTokenObj);
                    this.account = Account_1.Account.createAccount(idTokenObj, new ClientInfo_1.ClientInfo(clientInfo));
                    response.account = this.account;
                    if (idTokenObj && idTokenObj.nonce) {
                        // check nonce integrity if idToken has nonce - throw an error if not matched
                        if (idTokenObj.nonce !== this.cacheStorage.getItem(Constants_1.Constants.nonceIdToken, this.inCookie)) {
                            this.account = null;
                            this.cacheStorage.setItem(Constants_1.Constants.loginError, "Nonce Mismatch. Expected Nonce: " + this.cacheStorage.getItem(Constants_1.Constants.nonceIdToken, this.inCookie) + "," + "Actual Nonce: " + idTokenObj.nonce);
                            this.logger.error("Nonce Mismatch.Expected Nonce: " + this.cacheStorage.getItem(Constants_1.Constants.nonceIdToken, this.inCookie) + "," + "Actual Nonce: " + idTokenObj.nonce);
                            error = ClientAuthError_1.ClientAuthError.createNonceMismatchError(this.cacheStorage.getItem(Constants_1.Constants.nonceIdToken, this.inCookie), idTokenObj.nonce);
                        }
                        // Save the token
                        else {
                            this.cacheStorage.setItem(Constants_1.Constants.idTokenKey, hashParams[Constants_1.Constants.idToken]);
                            this.cacheStorage.setItem(Constants_1.Constants.msalClientInfo, clientInfo);
                            // Save idToken as access token for app itself
                            this.saveAccessToken(response, authority, hashParams, clientInfo, idTokenObj);
                        }
                    }
                    else {
                        authorityKey = stateInfo.state;
                        acquireTokenAccountKey = stateInfo.state;
                        this.logger.error("Invalid id_token received in the response");
                        error = ClientAuthError_1.ClientAuthError.createInvalidIdTokenError(idTokenObj);
                        this.cacheStorage.setItem(Constants_1.Constants.msalError, error.errorCode);
                        this.cacheStorage.setItem(Constants_1.Constants.msalErrorDescription, error.errorMessage);
                    }
                }
            }
            // State mismatch - unexpected/invalid state
            else {
                authorityKey = stateInfo.state;
                acquireTokenAccountKey = stateInfo.state;
                var expectedState = this.cacheStorage.getItem(Constants_1.Constants.stateLogin, this.inCookie);
                this.logger.error("State Mismatch.Expected State: " + expectedState + "," + "Actual State: " + stateInfo.state);
                error = ClientAuthError_1.ClientAuthError.createInvalidStateError(stateInfo.state, expectedState);
                this.cacheStorage.setItem(Constants_1.Constants.msalError, error.errorCode);
                this.cacheStorage.setItem(Constants_1.Constants.msalErrorDescription, error.errorMessage);
            }
        }
        this.cacheStorage.setItem(Constants_1.Constants.renewStatus + stateInfo.state, Constants_1.Constants.tokenRenewStatusCompleted);
        this.cacheStorage.removeAcquireTokenEntries(stateInfo.state);
        // this is required if navigateToLoginRequestUrl=false
        if (this.inCookie) {
            this.cacheStorage.setItemCookie(authorityKey, "", -1);
            this.cacheStorage.clearCookie();
        }
        if (error) {
            throw error;
        }
        if (!response) {
            throw AuthError_1.AuthError.createUnexpectedError("Response is null");
        }
        return response;
    };
    /**
     * Set Authority when saving Token from the hash
     * @param state
     * @param inCookie
     * @param cacheStorage
     * @param idTokenObj
     * @param response
     */
    UserAgentApplication.prototype.populateAuthority = function (state, inCookie, cacheStorage, idTokenObj) {
        var authorityKey = Storage_1.Storage.generateAuthorityKey(state);
        var cachedAuthority = cacheStorage.getItem(authorityKey, inCookie);
        // retrieve the authority from cache and replace with tenantID
        return StringUtils_1.StringUtils.isEmpty(cachedAuthority) ? cachedAuthority : UrlUtils_1.UrlUtils.replaceTenantPath(cachedAuthority, idTokenObj.tenantId);
    };
    /* tslint:enable:no-string-literal */
    // #endregion
    // #region Account
    /**
     * Returns the signed in account
     * (the account object is created at the time of successful login)
     * or null when no state is found
     * @returns {@link Account} - the account object stored in MSAL
     */
    UserAgentApplication.prototype.getAccount = function () {
        // if a session already exists, get the account from the session
        if (this.account) {
            return this.account;
        }
        // frame is used to get idToken and populate the account for the given session
        var rawIdToken = this.cacheStorage.getItem(Constants_1.Constants.idTokenKey);
        var rawClientInfo = this.cacheStorage.getItem(Constants_1.Constants.msalClientInfo);
        if (!StringUtils_1.StringUtils.isEmpty(rawIdToken) && !StringUtils_1.StringUtils.isEmpty(rawClientInfo)) {
            var idToken = new IdToken_1.IdToken(rawIdToken);
            var clientInfo = new ClientInfo_1.ClientInfo(rawClientInfo);
            this.account = Account_1.Account.createAccount(idToken, clientInfo);
            return this.account;
        }
        // if login not yet done, return null
        return null;
    };
    /**
     * @hidden
     *
     * Extracts state value from the accountState sent with the authentication request.
     * @returns {string} scope.
     * @ignore
     */
    UserAgentApplication.prototype.getAccountState = function (state) {
        if (state) {
            var splitIndex = state.indexOf("|");
            if (splitIndex > -1 && splitIndex + 1 < state.length) {
                return state.substring(splitIndex + 1);
            }
        }
        return state;
    };
    /**
     * Use to get a list of unique accounts in MSAL cache based on homeAccountIdentifier.
     *
     * @param {@link Array<Account>} Account - all unique accounts in MSAL cache.
     */
    UserAgentApplication.prototype.getAllAccounts = function () {
        var accounts = [];
        var accessTokenCacheItems = this.cacheStorage.getAllAccessTokens(Constants_1.Constants.clientId, Constants_1.Constants.homeAccountIdentifier);
        for (var i = 0; i < accessTokenCacheItems.length; i++) {
            var idToken = new IdToken_1.IdToken(accessTokenCacheItems[i].value.idToken);
            var clientInfo = new ClientInfo_1.ClientInfo(accessTokenCacheItems[i].value.homeAccountIdentifier);
            var account = Account_1.Account.createAccount(idToken, clientInfo);
            accounts.push(account);
        }
        return this.getUniqueAccounts(accounts);
    };
    /**
     * @hidden
     *
     * Used to filter accounts based on homeAccountIdentifier
     * @param {Array<Account>}  Accounts - accounts saved in the cache
     * @ignore
     */
    UserAgentApplication.prototype.getUniqueAccounts = function (accounts) {
        if (!accounts || accounts.length <= 1) {
            return accounts;
        }
        var flags = [];
        var uniqueAccounts = [];
        for (var index = 0; index < accounts.length; ++index) {
            if (accounts[index].homeAccountIdentifier && flags.indexOf(accounts[index].homeAccountIdentifier) === -1) {
                flags.push(accounts[index].homeAccountIdentifier);
                uniqueAccounts.push(accounts[index]);
            }
        }
        return uniqueAccounts;
    };
    // #endregion
    // #region Scopes (Extract to Scopes.ts)
    /*
     * Note: "this" dependency in this section is minimal.
     * If pCacheStorage is separated from the class object, or passed as a fn param, scopesUtils.ts can be created
     */
    /**
     * @hidden
     *
     * Used to validate the scopes input parameter requested  by the developer.
     * @param {Array<string>} scopes - Developer requested permissions. Not all scopes are guaranteed to be included in the access token returned.
     * @param {boolean} scopesRequired - Boolean indicating whether the scopes array is required or not
     * @ignore
     */
    UserAgentApplication.prototype.validateInputScope = function (scopes, scopesRequired) {
        if (!scopes) {
            if (scopesRequired) {
                throw ClientConfigurationError_1.ClientConfigurationError.createScopesRequiredError(scopes);
            }
            else {
                return;
            }
        }
        // Check that scopes is an array object (also throws error if scopes == null)
        if (!Array.isArray(scopes)) {
            throw ClientConfigurationError_1.ClientConfigurationError.createScopesNonArrayError(scopes);
        }
        // Check that scopes is not an empty array
        if (scopes.length < 1) {
            throw ClientConfigurationError_1.ClientConfigurationError.createEmptyScopesArrayError(scopes.toString());
        }
        // Check that clientId is passed as single scope
        if (scopes.indexOf(this.clientId) > -1) {
            if (scopes.length > 1) {
                throw ClientConfigurationError_1.ClientConfigurationError.createClientIdSingleScopeError(scopes.toString());
            }
        }
    };
    /**
     * @hidden
     *
     * Extracts scope value from the state sent with the authentication request.
     * @param {string} state
     * @returns {string} scope.
     * @ignore
     */
    UserAgentApplication.prototype.getScopeFromState = function (state) {
        if (state) {
            var splitIndex = state.indexOf("|");
            if (splitIndex > -1 && splitIndex + 1 < state.length) {
                return state.substring(splitIndex + 1);
            }
        }
        return "";
    };
    /**
     * @ignore
     * Appends extraScopesToConsent if passed
     * @param {@link AuthenticationParameters}
     */
    UserAgentApplication.prototype.appendScopes = function (request) {
        var scopes;
        if (request && request.scopes) {
            if (request.extraScopesToConsent) {
                scopes = request.scopes.concat(request.extraScopesToConsent);
            }
            else {
                scopes = request.scopes;
            }
        }
        return scopes;
    };
    // #endregion
    // #region Angular
    /**
     * @hidden
     *
     * Broadcast messages - Used only for Angular?  *
     * @param eventName
     * @param data
     */
    UserAgentApplication.prototype.broadcast = function (eventName, data) {
        var evt = new CustomEvent(eventName, { detail: data });
        window.dispatchEvent(evt);
    };
    /**
     * @hidden
     *
     * Helper function to retrieve the cached token
     *
     * @param scopes
     * @param {@link Account} account
     * @param state
     * @return {@link AuthResponse} AuthResponse
     */
    UserAgentApplication.prototype.getCachedTokenInternal = function (scopes, account, state) {
        // Get the current session's account object
        var accountObject = account || this.getAccount();
        if (!accountObject) {
            return null;
        }
        // Construct AuthenticationRequest based on response type
        var newAuthority = this.authorityInstance ? this.authorityInstance : AuthorityFactory_1.AuthorityFactory.CreateInstance(this.authority, this.config.auth.validateAuthority);
        var responseType = this.getTokenType(accountObject, scopes, true);
        var serverAuthenticationRequest = new ServerRequestParameters_1.ServerRequestParameters(newAuthority, this.clientId, scopes, responseType, this.getRedirectUri(), state);
        // get cached token
        return this.getCachedToken(serverAuthenticationRequest, account);
    };
    /**
     * @hidden
     *
     * Get scopes for the Endpoint - Used in Angular to track protected and unprotected resources without interaction from the developer app
     *
     * @param endpoint
     */
    UserAgentApplication.prototype.getScopesForEndpoint = function (endpoint) {
        // if user specified list of unprotectedResources, no need to send token to these endpoints, return null.
        if (this.config.framework.unprotectedResources.length > 0) {
            for (var i = 0; i < this.config.framework.unprotectedResources.length; i++) {
                if (endpoint.indexOf(this.config.framework.unprotectedResources[i]) > -1) {
                    return null;
                }
            }
        }
        // process all protected resources and send the matched one
        if (this.config.framework.protectedResourceMap.size > 0) {
            for (var _i = 0, _a = Array.from(this.config.framework.protectedResourceMap.keys()); _i < _a.length; _i++) {
                var key = _a[_i];
                // configEndpoint is like /api/Todo requested endpoint can be /api/Todo/1
                if (endpoint.indexOf(key) > -1) {
                    return this.config.framework.protectedResourceMap.get(key);
                }
            }
        }
        /*
         * default resource will be clientid if nothing specified
         * App will use idtoken for calls to itself
         * check if it's staring from http or https, needs to match with app host
         */
        if (endpoint.indexOf("http://") > -1 || endpoint.indexOf("https://") > -1) {
            if (this.getHostFromUri(endpoint) === this.getHostFromUri(this.getRedirectUri())) {
                return new Array(this.clientId);
            }
        }
        else {
            /*
             * in angular level, the url for $http interceptor call could be relative url,
             * if it's relative call, we'll treat it as app backend call.
             */
            return new Array(this.clientId);
        }
        // if not the app's own backend or not a domain listed in the endpoints structure
        return null;
    };
    /**
     * Return boolean flag to developer to help inform if login is in progress
     * @returns {boolean} true/false
     */
    UserAgentApplication.prototype.getLoginInProgress = function () {
        var pendingCallback = this.cacheStorage.getItem(Constants_1.Constants.urlHash);
        if (pendingCallback) {
            return true;
        }
        return this.loginInProgress;
    };
    /**
     * @hidden
     * @ignore
     *
     * @param loginInProgress
     */
    UserAgentApplication.prototype.setloginInProgress = function (loginInProgress) {
        this.loginInProgress = loginInProgress;
    };
    /**
     * @hidden
     * @ignore
     *
     * returns the status of acquireTokenInProgress
     */
    UserAgentApplication.prototype.getAcquireTokenInProgress = function () {
        return this.acquireTokenInProgress;
    };
    /**
     * @hidden
     * @ignore
     *
     * @param acquireTokenInProgress
     */
    UserAgentApplication.prototype.setAcquireTokenInProgress = function (acquireTokenInProgress) {
        this.acquireTokenInProgress = acquireTokenInProgress;
    };
    /**
     * @hidden
     * @ignore
     *
     * returns the logger handle
     */
    UserAgentApplication.prototype.getLogger = function () {
        return this.config.system.logger;
    };
    // #endregion
    // #region Getters and Setters
    /**
     *
     * Use to get the redirect uri configured in MSAL or null.
     * Evaluates redirectUri if its a function, otherwise simply returns its value.
     * @returns {string} redirect URL
     *
     */
    UserAgentApplication.prototype.getRedirectUri = function () {
        if (typeof this.config.auth.redirectUri === "function") {
            return this.config.auth.redirectUri();
        }
        return this.config.auth.redirectUri;
    };
    /**
     * Use to get the post logout redirect uri configured in MSAL or null.
     * Evaluates postLogoutredirectUri if its a function, otherwise simply returns its value.
     *
     * @returns {string} post logout redirect URL
     */
    UserAgentApplication.prototype.getPostLogoutRedirectUri = function () {
        if (typeof this.config.auth.postLogoutRedirectUri === "function") {
            return this.config.auth.postLogoutRedirectUri();
        }
        return this.config.auth.postLogoutRedirectUri;
    };
    /**
     * Use to get the current {@link Configuration} object in MSAL
     *
     * @returns {@link Configuration}
     */
    UserAgentApplication.prototype.getCurrentConfiguration = function () {
        if (!this.config) {
            throw ClientConfigurationError_1.ClientConfigurationError.createNoSetConfigurationError();
        }
        return this.config;
    };
    // #endregion
    // #region String Util (Should be extracted to Utils.ts)
    /**
     * @hidden
     * @ignore
     *
     * extract URI from the host
     *
     * @param {string} URI
     * @returns {string} host from the URI
     */
    UserAgentApplication.prototype.getHostFromUri = function (uri) {
        // remove http:// or https:// from uri
        var extractedUri = String(uri).replace(/^(https?:)\/\//, "");
        extractedUri = extractedUri.split("/")[0];
        return extractedUri;
    };
    /**
     * @hidden
     * @ignore
     *
     * Utils function to create the Authentication
     * @param {@link account} account object
     * @param scopes
     * @param silentCall
     *
     * @returns {string} token type: id_token or access_token
     *
     */
    UserAgentApplication.prototype.getTokenType = function (accountObject, scopes, silentCall) {
        /*
         * if account is passed and matches the account object/or set to getAccount() from cache
         * if client-id is passed as scope, get id_token else token/id_token_token (in case no session exists)
         */
        var tokenType;
        // acquireTokenSilent
        if (silentCall) {
            if (Account_1.Account.compareAccounts(accountObject, this.getAccount())) {
                tokenType = (scopes.indexOf(this.config.auth.clientId) > -1) ? ResponseTypes.id_token : ResponseTypes.token;
            }
            else {
                tokenType = (scopes.indexOf(this.config.auth.clientId) > -1) ? ResponseTypes.id_token : ResponseTypes.id_token_token;
            }
            return tokenType;
        }
        // all other cases
        else {
            if (!Account_1.Account.compareAccounts(accountObject, this.getAccount())) {
                tokenType = ResponseTypes.id_token_token;
            }
            else {
                tokenType = (scopes.indexOf(this.clientId) > -1) ? ResponseTypes.id_token : ResponseTypes.token;
            }
            return tokenType;
        }
    };
    /**
     * @hidden
     * @ignore
     *
     * Sets the cachekeys for and stores the account information in cache
     * @param account
     * @param state
     * @hidden
     */
    UserAgentApplication.prototype.setAccountCache = function (account, state) {
        // Cache acquireTokenAccountKey
        var accountId = account ? this.getAccountId(account) : Constants_1.Constants.no_account;
        var acquireTokenAccountKey = Storage_1.Storage.generateAcquireTokenAccountKey(accountId, state);
        this.cacheStorage.setItem(acquireTokenAccountKey, JSON.stringify(account));
    };
    /**
     * @hidden
     * @ignore
     *
     * Sets the cacheKey for and stores the authority information in cache
     * @param state
     * @param authority
     * @hidden
     */
    UserAgentApplication.prototype.setAuthorityCache = function (state, authority) {
        // Cache authorityKey
        var authorityKey = Storage_1.Storage.generateAuthorityKey(state);
        this.cacheStorage.setItem(authorityKey, UrlUtils_1.UrlUtils.CanonicalizeUri(authority), this.inCookie);
    };
    /**
     * Updates account, authority, and nonce in cache
     * @param serverAuthenticationRequest
     * @param account
     * @hidden
     * @ignore
     */
    UserAgentApplication.prototype.updateCacheEntries = function (serverAuthenticationRequest, account, loginStartPage) {
        // Cache account and authority
        if (loginStartPage) {
            // Cache the state, nonce, and login request data
            this.cacheStorage.setItem(Constants_1.Constants.loginRequest, loginStartPage, this.inCookie);
            this.cacheStorage.setItem(Constants_1.Constants.stateLogin, serverAuthenticationRequest.state, this.inCookie);
        }
        else {
            this.setAccountCache(account, serverAuthenticationRequest.state);
        }
        // Cache authorityKey
        this.setAuthorityCache(serverAuthenticationRequest.state, serverAuthenticationRequest.authority);
        // Cache nonce
        this.cacheStorage.setItem(Constants_1.Constants.nonceIdToken, serverAuthenticationRequest.nonce, this.inCookie);
    };
    /**
     * Returns the unique identifier for the logged in account
     * @param account
     * @hidden
     * @ignore
     */
    UserAgentApplication.prototype.getAccountId = function (account) {
        // return `${account.accountIdentifier}` + Constants.resourceDelimiter + `${account.homeAccountIdentifier}`;
        var accountId;
        if (!StringUtils_1.StringUtils.isEmpty(account.homeAccountIdentifier)) {
            accountId = account.homeAccountIdentifier;
        }
        else {
            accountId = Constants_1.Constants.no_account;
        }
        return accountId;
    };
    /**
     * @hidden
     * @ignore
     *
     * Construct 'tokenRequest' from the available data in adalIdToken
     * @param extraQueryParameters
     * @hidden
     */
    UserAgentApplication.prototype.buildIDTokenRequest = function (request) {
        var tokenRequest = {
            scopes: [this.clientId],
            authority: this.authority,
            account: this.getAccount(),
            extraQueryParameters: request.extraQueryParameters
        };
        return tokenRequest;
    };
    // #endregion
    UserAgentApplication.prototype.getTelemetryManagerFromConfig = function (config, clientId) {
        if (!config) { // if unset
            return null;
        }
        // if set then validate
        var applicationName = config.applicationName, applicationVersion = config.applicationVersion, telemetryEmitter = config.telemetryEmitter;
        if (!applicationName || !applicationVersion || !telemetryEmitter) {
            throw ClientConfigurationError_1.ClientConfigurationError.createTelemetryConfigError(config);
        }
        // if valid then construct
        var telemetryPlatform = {
            sdk: "msal.js",
            sdkVersion: Constants_1.libraryVersion(),
            applicationName: applicationName,
            applicationVersion: applicationVersion
        };
        var telemetryManagerConfig = {
            platform: telemetryPlatform,
            clientId: clientId
        };
        return new TelemetryManager_1.default(telemetryManagerConfig, telemetryEmitter);
    };
    return UserAgentApplication;
}());
exports.UserAgentApplication = UserAgentApplication;


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
Object.defineProperty(exports, "__esModule", { value: true });
var ScopeSet = /** @class */ (function () {
    function ScopeSet() {
    }
    /**
     * Check if there are dup scopes in a given request
     *
     * @param cachedScopes
     * @param scopes
     */
    // TODO: Rename this, intersecting scopes isn't a great name for duplicate checker
    ScopeSet.isIntersectingScopes = function (cachedScopes, scopes) {
        cachedScopes = this.convertToLowerCase(cachedScopes);
        for (var i = 0; i < scopes.length; i++) {
            if (cachedScopes.indexOf(scopes[i].toLowerCase()) > -1) {
                return true;
            }
        }
        return false;
    };
    /**
     * Check if a given scope is present in the request
     *
     * @param cachedScopes
     * @param scopes
     */
    ScopeSet.containsScope = function (cachedScopes, scopes) {
        cachedScopes = this.convertToLowerCase(cachedScopes);
        return scopes.every(function (value) { return cachedScopes.indexOf(value.toString().toLowerCase()) >= 0; });
    };
    /**
     * toLower
     *
     * @param scopes
     */
    // TODO: Rename this, too generic name for a function that only deals with scopes
    ScopeSet.convertToLowerCase = function (scopes) {
        return scopes.map(function (scope) { return scope.toLowerCase(); });
    };
    /**
     * remove one element from a scope array
     *
     * @param scopes
     * @param scope
     */
    // TODO: Rename this, too generic name for a function that only deals with scopes
    ScopeSet.removeElement = function (scopes, scope) {
        return scopes.filter(function (value) { return value !== scope; });
    };
    /**
     * Parse the scopes into a formatted scopeList
     * @param scopes
     */
    ScopeSet.parseScope = function (scopes) {
        var scopeList = "";
        if (scopes) {
            for (var i = 0; i < scopes.length; ++i) {
                scopeList += (i !== scopes.length - 1) ? scopes[i] + " " : scopes[i];
            }
        }
        return scopeList;
    };
    return ScopeSet;
}());
exports.ScopeSet = ScopeSet;


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
Object.defineProperty(exports, "__esModule", { value: true });
var ClientConfigurationError_1 = __webpack_require__(5);
function validateClaimsRequest(request) {
    if (!request.claimsRequest) {
        return;
    }
    var claims;
    try {
        claims = JSON.parse(request.claimsRequest);
    }
    catch (e) {
        throw ClientConfigurationError_1.ClientConfigurationError.createClaimsRequestParsingError(e);
    }
    // TODO: More validation will be added when the server team tells us how they have actually implemented claims
}
exports.validateClaimsRequest = validateClaimsRequest;


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
Object.defineProperty(exports, "__esModule", { value: true });
var CryptoUtils_1 = __webpack_require__(3);
var StringUtils_1 = __webpack_require__(1);
/**
 * @hidden
 */
var TokenUtils = /** @class */ (function () {
    function TokenUtils() {
    }
    /**
     * decode a JWT
     *
     * @param jwtToken
     */
    TokenUtils.decodeJwt = function (jwtToken) {
        if (StringUtils_1.StringUtils.isEmpty(jwtToken)) {
            return null;
        }
        var idTokenPartsRegex = /^([^\.\s]*)\.([^\.\s]+)\.([^\.\s]*)$/;
        var matches = idTokenPartsRegex.exec(jwtToken);
        if (!matches || matches.length < 4) {
            // this._requestContext.logger.warn("The returned id_token is not parseable.");
            return null;
        }
        var crackedToken = {
            header: matches[1],
            JWSPayload: matches[2],
            JWSSig: matches[3]
        };
        return crackedToken;
    };
    /**
     * Extract IdToken by decoding the RAWIdToken
     *
     * @param encodedIdToken
     */
    TokenUtils.extractIdToken = function (encodedIdToken) {
        // id token will be decoded to get the username
        var decodedToken = this.decodeJwt(encodedIdToken);
        if (!decodedToken) {
            return null;
        }
        try {
            var base64IdToken = decodedToken.JWSPayload;
            var base64Decoded = CryptoUtils_1.CryptoUtils.base64Decode(base64IdToken);
            if (!base64Decoded) {
                // this._requestContext.logger.info("The returned id_token could not be base64 url safe decoded.");
                return null;
            }
            // ECMA script has JSON built-in support
            return JSON.parse(base64Decoded);
        }
        catch (err) {
            // this._requestContext.logger.error("The returned id_token could not be decoded" + err);
        }
        return null;
    };
    return TokenUtils;
}());
exports.TokenUtils = TokenUtils;


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
Object.defineProperty(exports, "__esModule", { value: true });
var CryptoUtils_1 = __webpack_require__(3);
var StringUtils_1 = __webpack_require__(1);
/**
 * accountIdentifier       combination of idToken.uid and idToken.utid
 * homeAccountIdentifier   combination of clientInfo.uid and clientInfo.utid
 * userName                idToken.preferred_username
 * name                    idToken.name
 * idToken                 idToken
 * sid                     idToken.sid - session identifier
 * environment             idtoken.issuer (the authority that issues the token)
 */
var Account = /** @class */ (function () {
    /**
     * Creates an Account Object
     * @praram accountIdentifier
     * @param homeAccountIdentifier
     * @param userName
     * @param name
     * @param idToken
     * @param sid
     * @param environment
     */
    function Account(accountIdentifier, homeAccountIdentifier, userName, name, idTokenClaims, sid, environment) {
        this.accountIdentifier = accountIdentifier;
        this.homeAccountIdentifier = homeAccountIdentifier;
        this.userName = userName;
        this.name = name;
        // will be deprecated soon
        this.idToken = idTokenClaims;
        this.idTokenClaims = idTokenClaims;
        this.sid = sid;
        this.environment = environment;
    }
    /**
     * @hidden
     * @param idToken
     * @param clientInfo
     */
    Account.createAccount = function (idToken, clientInfo) {
        // create accountIdentifier
        var accountIdentifier = idToken.objectId || idToken.subject;
        // create homeAccountIdentifier
        var uid = clientInfo ? clientInfo.uid : "";
        var utid = clientInfo ? clientInfo.utid : "";
        var homeAccountIdentifier;
        if (!StringUtils_1.StringUtils.isEmpty(uid) && !StringUtils_1.StringUtils.isEmpty(utid)) {
            homeAccountIdentifier = CryptoUtils_1.CryptoUtils.base64Encode(uid) + "." + CryptoUtils_1.CryptoUtils.base64Encode(utid);
        }
        return new Account(accountIdentifier, homeAccountIdentifier, idToken.preferredName, idToken.name, idToken.claims, idToken.sid, idToken.issuer);
    };
    /**
     * Utils function to compare two Account objects - used to check if the same user account is logged in
     *
     * @param a1: Account object
     * @param a2: Account object
     */
    Account.compareAccounts = function (a1, a2) {
        if (!a1 || !a2) {
            return false;
        }
        if (a1.homeAccountIdentifier && a2.homeAccountIdentifier) {
            if (a1.homeAccountIdentifier === a2.homeAccountIdentifier) {
                return true;
            }
        }
        return false;
    };
    return Account;
}());
exports.Account = Account;


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var Authority_1 = __webpack_require__(8);
var XHRClient_1 = __webpack_require__(18);
var Constants_1 = __webpack_require__(2);
/**
 * @hidden
 */
var AadAuthority = /** @class */ (function (_super) {
    tslib_1.__extends(AadAuthority, _super);
    function AadAuthority(authority, validateAuthority) {
        return _super.call(this, authority, validateAuthority) || this;
    }
    Object.defineProperty(AadAuthority.prototype, "AadInstanceDiscoveryEndpointUrl", {
        get: function () {
            return AadAuthority.AadInstanceDiscoveryEndpoint + "?api-version=1.0&authorization_endpoint=" + this.CanonicalAuthority + "oauth2/v2.0/authorize";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AadAuthority.prototype, "AuthorityType", {
        get: function () {
            return Authority_1.AuthorityType.Aad;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Returns a promise which resolves to the OIDC endpoint
     * Only responds with the endpoint
     */
    AadAuthority.prototype.GetOpenIdConfigurationEndpointAsync = function () {
        return tslib_1.__awaiter(this, void 0, Promise, function () {
            var client;
            return tslib_1.__generator(this, function (_a) {
                if (!this.IsValidationEnabled || this.IsInTrustedHostList(this.CanonicalAuthorityUrlComponents.HostNameAndPort)) {
                    return [2 /*return*/, this.DefaultOpenIdConfigurationEndpoint];
                }
                client = new XHRClient_1.XhrClient();
                return [2 /*return*/, client.sendRequestAsync(this.AadInstanceDiscoveryEndpointUrl, "GET", true)
                        .then(function (response) {
                        return response.tenant_discovery_endpoint;
                    })];
            });
        });
    };
    /**
     * Checks to see if the host is in a list of trusted hosts
     * @param {string} The host to look up
     */
    AadAuthority.prototype.IsInTrustedHostList = function (host) {
        return Constants_1.AADTrustedHostList[host.toLowerCase()];
    };
    AadAuthority.AadInstanceDiscoveryEndpoint = "https://login.microsoftonline.com/common/discovery/instance";
    return AadAuthority;
}(Authority_1.Authority));
exports.AadAuthority = AadAuthority;


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * XHR client for JSON endpoints
 * https://www.npmjs.com/package/async-promise
 * @hidden
 */
var XhrClient = /** @class */ (function () {
    function XhrClient() {
    }
    XhrClient.prototype.sendRequestAsync = function (url, method, enableCaching) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var xhr = new XMLHttpRequest();
            xhr.open(method, url, /* async: */ true);
            if (enableCaching) {
                /*
                 * TODO: (shivb) ensure that this can be cached
                 * xhr.setRequestHeader("Cache-Control", "Public");
                 */
            }
            xhr.onload = function (ev) {
                if (xhr.status < 200 || xhr.status >= 300) {
                    reject(_this.handleError(xhr.responseText));
                }
                var jsonResponse;
                try {
                    jsonResponse = JSON.parse(xhr.responseText);
                }
                catch (e) {
                    reject(_this.handleError(xhr.responseText));
                }
                resolve(jsonResponse);
            };
            xhr.onerror = function (ev) {
                reject(xhr.status);
            };
            if (method === "GET") {
                xhr.send();
            }
            else {
                throw "not implemented";
            }
        });
    };
    XhrClient.prototype.handleError = function (responseText) {
        var jsonResponse;
        try {
            jsonResponse = JSON.parse(responseText);
            if (jsonResponse.error) {
                return jsonResponse.error;
            }
            else {
                throw responseText;
            }
        }
        catch (e) {
            return responseText;
        }
    };
    return XhrClient;
}());
exports.XhrClient = XhrClient;


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var AadAuthority_1 = __webpack_require__(17);
var Authority_1 = __webpack_require__(8);
var ClientConfigurationError_1 = __webpack_require__(5);
var UrlUtils_1 = __webpack_require__(4);
/**
 * @hidden
 */
var B2cAuthority = /** @class */ (function (_super) {
    tslib_1.__extends(B2cAuthority, _super);
    function B2cAuthority(authority, validateAuthority) {
        var _this = _super.call(this, authority, validateAuthority) || this;
        var urlComponents = UrlUtils_1.UrlUtils.GetUrlComponents(authority);
        var pathSegments = urlComponents.PathSegments;
        if (pathSegments.length < 3) {
            throw ClientConfigurationError_1.ClientConfigurationErrorMessage.b2cAuthorityUriInvalidPath;
        }
        _this.CanonicalAuthority = "https://" + urlComponents.HostNameAndPort + "/" + pathSegments[0] + "/" + pathSegments[1] + "/" + pathSegments[2] + "/";
        return _this;
    }
    Object.defineProperty(B2cAuthority.prototype, "AuthorityType", {
        get: function () {
            return Authority_1.AuthorityType.B2C;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Returns a promise with the TenantDiscoveryEndpoint
     */
    B2cAuthority.prototype.GetOpenIdConfigurationEndpointAsync = function () {
        return tslib_1.__awaiter(this, void 0, Promise, function () {
            return tslib_1.__generator(this, function (_a) {
                if (!this.IsValidationEnabled || this.IsInTrustedHostList(this.CanonicalAuthorityUrlComponents.HostNameAndPort)) {
                    return [2 /*return*/, this.DefaultOpenIdConfigurationEndpoint];
                }
                throw ClientConfigurationError_1.ClientConfigurationErrorMessage.unsupportedAuthorityValidation;
            });
        });
    };
    B2cAuthority.B2C_PREFIX = "tfp";
    return B2cAuthority;
}(AadAuthority_1.AadAuthority));
exports.B2cAuthority = B2cAuthority;


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var Logger_1 = __webpack_require__(10);
var UrlUtils_1 = __webpack_require__(4);
/**
 * Defaults for the Configuration Options
 */
var FRAME_TIMEOUT = 6000;
var OFFSET = 300;
var NAVIGATE_FRAME_WAIT = 500;
var DEFAULT_AUTH_OPTIONS = {
    clientId: "",
    authority: null,
    validateAuthority: true,
    redirectUri: function () { return UrlUtils_1.UrlUtils.getDefaultRedirectUri(); },
    postLogoutRedirectUri: function () { return UrlUtils_1.UrlUtils.getDefaultRedirectUri(); },
    navigateToLoginRequestUrl: true
};
var DEFAULT_CACHE_OPTIONS = {
    cacheLocation: "sessionStorage",
    storeAuthStateInCookie: false
};
var DEFAULT_SYSTEM_OPTIONS = {
    logger: new Logger_1.Logger(null),
    loadFrameTimeout: FRAME_TIMEOUT,
    tokenRenewalOffsetSeconds: OFFSET,
    navigateFrameWait: NAVIGATE_FRAME_WAIT
};
var DEFAULT_FRAMEWORK_OPTIONS = {
    isAngular: false,
    unprotectedResources: new Array(),
    protectedResourceMap: new Map()
};
/**
 * MSAL function that sets the default options when not explicitly configured from app developer
 *
 * @param TAuthOptions
 * @param TCacheOptions
 * @param TSystemOptions
 * @param TFrameworkOptions
 *
 * @returns TConfiguration object
 */
function buildConfiguration(_a) {
    var auth = _a.auth, _b = _a.cache, cache = _b === void 0 ? {} : _b, _c = _a.system, system = _c === void 0 ? {} : _c, _d = _a.framework, framework = _d === void 0 ? {} : _d;
    var overlayedConfig = {
        auth: tslib_1.__assign({}, DEFAULT_AUTH_OPTIONS, auth),
        cache: tslib_1.__assign({}, DEFAULT_CACHE_OPTIONS, cache),
        system: tslib_1.__assign({}, DEFAULT_SYSTEM_OPTIONS, system),
        framework: tslib_1.__assign({}, DEFAULT_FRAMEWORK_OPTIONS, framework)
    };
    return overlayedConfig;
}
exports.buildConfiguration = buildConfiguration;


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var ServerError_1 = __webpack_require__(11);
exports.InteractionRequiredAuthErrorMessage = {
    interactionRequired: {
        code: "interaction_required"
    },
    consentRequired: {
        code: "consent_required"
    },
    loginRequired: {
        code: "login_required"
    },
};
/**
 * Error thrown when the user is required to perform an interactive token request.
 */
var InteractionRequiredAuthError = /** @class */ (function (_super) {
    tslib_1.__extends(InteractionRequiredAuthError, _super);
    function InteractionRequiredAuthError(errorCode, errorMessage) {
        var _this = _super.call(this, errorCode, errorMessage) || this;
        _this.name = "InteractionRequiredAuthError";
        Object.setPrototypeOf(_this, InteractionRequiredAuthError.prototype);
        return _this;
    }
    InteractionRequiredAuthError.isInteractionRequiredError = function (errorString) {
        var interactionRequiredCodes = [
            exports.InteractionRequiredAuthErrorMessage.interactionRequired.code,
            exports.InteractionRequiredAuthErrorMessage.consentRequired.code,
            exports.InteractionRequiredAuthErrorMessage.loginRequired.code
        ];
        return errorString && interactionRequiredCodes.indexOf(errorString) > -1;
    };
    InteractionRequiredAuthError.createLoginRequiredAuthError = function (errorDesc) {
        return new InteractionRequiredAuthError(exports.InteractionRequiredAuthErrorMessage.loginRequired.code, errorDesc);
    };
    InteractionRequiredAuthError.createInteractionRequiredAuthError = function (errorDesc) {
        return new InteractionRequiredAuthError(exports.InteractionRequiredAuthErrorMessage.interactionRequired.code, errorDesc);
    };
    InteractionRequiredAuthError.createConsentRequiredAuthError = function (errorDesc) {
        return new InteractionRequiredAuthError(exports.InteractionRequiredAuthErrorMessage.consentRequired.code, errorDesc);
    };
    return InteractionRequiredAuthError;
}(ServerError_1.ServerError));
exports.InteractionRequiredAuthError = InteractionRequiredAuthError;


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
Object.defineProperty(exports, "__esModule", { value: true });
function buildResponseStateOnly(state) {
    return {
        uniqueId: "",
        tenantId: "",
        tokenType: "",
        idToken: null,
        idTokenClaims: null,
        accessToken: "",
        scopes: null,
        expiresOn: null,
        account: null,
        accountState: state
    };
}
exports.buildResponseStateOnly = buildResponseStateOnly;


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var B2cAuthority_1 = __webpack_require__(19);
var Constants_1 = __webpack_require__(2);
var TelemetryConstants_1 = __webpack_require__(9);
var CryptoUtils_1 = __webpack_require__(3);
var UrlUtils_1 = __webpack_require__(4);
exports.scrubTenantFromUri = function (uri) {
    var url = UrlUtils_1.UrlUtils.GetUrlComponents(uri);
    // validate trusted host
    if (!Constants_1.AADTrustedHostList[url.HostNameAndPort.toLocaleLowerCase()]) {
        // Should this return null or what was passed?
        return null;
    }
    var pathParams = url.PathSegments;
    if (pathParams && pathParams.length >= 2) {
        var tenantPosition = pathParams[1] === B2cAuthority_1.B2cAuthority.B2C_PREFIX ? 2 : 1;
        if (tenantPosition < pathParams.length) {
            pathParams[tenantPosition] = TelemetryConstants_1.TENANT_PLACEHOLDER;
        }
    }
    return url.Protocol + "//" + url.HostNameAndPort + "/" + pathParams.join("/");
};
exports.hashPersonalIdentifier = function (valueToHash) {
    /*
     * TODO sha256 this
     * Current test runner is being funny with node libs that are webpacked anyway
     * need a different solution
     */
    return CryptoUtils_1.CryptoUtils.base64Encode(valueToHash);
};
exports.prependEventNamePrefix = function (suffix) { return "" + TelemetryConstants_1.EVENT_NAME_PREFIX + (suffix || ""); };


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(25);


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var UserAgentApplication_1 = __webpack_require__(12);
exports.UserAgentApplication = UserAgentApplication_1.UserAgentApplication;
var Logger_1 = __webpack_require__(10);
exports.Logger = Logger_1.Logger;
var Logger_2 = __webpack_require__(10);
exports.LogLevel = Logger_2.LogLevel;
var Account_1 = __webpack_require__(16);
exports.Account = Account_1.Account;
var Constants_1 = __webpack_require__(2);
exports.Constants = Constants_1.Constants;
var Authority_1 = __webpack_require__(8);
exports.Authority = Authority_1.Authority;
var UserAgentApplication_2 = __webpack_require__(12);
exports.CacheResult = UserAgentApplication_2.CacheResult;
var Configuration_1 = __webpack_require__(20);
exports.CacheLocation = Configuration_1.CacheLocation;
exports.Configuration = Configuration_1.Configuration;
var AuthenticationParameters_1 = __webpack_require__(14);
exports.AuthenticationParameters = AuthenticationParameters_1.AuthenticationParameters;
var AuthResponse_1 = __webpack_require__(22);
exports.AuthResponse = AuthResponse_1.AuthResponse;
// Errors
var AuthError_1 = __webpack_require__(7);
exports.AuthError = AuthError_1.AuthError;
var ClientAuthError_1 = __webpack_require__(6);
exports.ClientAuthError = ClientAuthError_1.ClientAuthError;
var ServerError_1 = __webpack_require__(11);
exports.ServerError = ServerError_1.ServerError;
var ClientConfigurationError_1 = __webpack_require__(5);
exports.ClientConfigurationError = ClientConfigurationError_1.ClientConfigurationError;
var InteractionRequiredAuthError_1 = __webpack_require__(21);
exports.InteractionRequiredAuthError = InteractionRequiredAuthError_1.InteractionRequiredAuthError;


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
Object.defineProperty(exports, "__esModule", { value: true });
var CryptoUtils_1 = __webpack_require__(3);
var UrlUtils_1 = __webpack_require__(4);
/**
 * @hidden
 */
var AccessTokenKey = /** @class */ (function () {
    function AccessTokenKey(authority, clientId, scopes, uid, utid) {
        this.authority = UrlUtils_1.UrlUtils.CanonicalizeUri(authority);
        this.clientId = clientId;
        this.scopes = scopes;
        this.homeAccountIdentifier = CryptoUtils_1.CryptoUtils.base64Encode(uid) + "." + CryptoUtils_1.CryptoUtils.base64Encode(utid);
    }
    return AccessTokenKey;
}());
exports.AccessTokenKey = AccessTokenKey;


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @hidden
 */
var AccessTokenValue = /** @class */ (function () {
    function AccessTokenValue(accessToken, idToken, expiresIn, homeAccountIdentifier) {
        this.accessToken = accessToken;
        this.idToken = idToken;
        this.expiresIn = expiresIn;
        this.homeAccountIdentifier = homeAccountIdentifier;
    }
    return AccessTokenValue;
}());
exports.AccessTokenValue = AccessTokenValue;


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
Object.defineProperty(exports, "__esModule", { value: true });
var CryptoUtils_1 = __webpack_require__(3);
var AuthenticationParameters_1 = __webpack_require__(14);
var Constants_1 = __webpack_require__(2);
var ClientConfigurationError_1 = __webpack_require__(5);
var StringUtils_1 = __webpack_require__(1);
/**
 * Nonce: OIDC Nonce definition: https://openid.net/specs/openid-connect-core-1_0.html#IDToken
 * State: OAuth Spec: https://tools.ietf.org/html/rfc6749#section-10.12
 * @hidden
 */
var ServerRequestParameters = /** @class */ (function () {
    /**
     * Constructor
     * @param authority
     * @param clientId
     * @param scope
     * @param responseType
     * @param redirectUri
     * @param state
     */
    function ServerRequestParameters(authority, clientId, scope, responseType, redirectUri, state) {
        this.authorityInstance = authority;
        this.clientId = clientId;
        if (!scope) {
            this.scopes = [clientId];
        }
        else {
            this.scopes = scope.slice();
        }
        this.nonce = CryptoUtils_1.CryptoUtils.createNewGuid();
        this.state = state && !StringUtils_1.StringUtils.isEmpty(state) ? CryptoUtils_1.CryptoUtils.createNewGuid() + "|" + state : CryptoUtils_1.CryptoUtils.createNewGuid();
        // TODO: Change this to user passed vs generated with the new PR
        this.correlationId = CryptoUtils_1.CryptoUtils.createNewGuid();
        // telemetry information
        this.xClientSku = "MSAL.JS";
        this.xClientVer = Constants_1.libraryVersion();
        this.responseType = responseType;
        this.redirectUri = redirectUri;
    }
    Object.defineProperty(ServerRequestParameters.prototype, "authority", {
        get: function () {
            return this.authorityInstance ? this.authorityInstance.CanonicalAuthority : null;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @hidden
     * @ignore
     *
     * Utility to populate QueryParameters and ExtraQueryParameters to ServerRequestParamerers
     * @param request
     * @param serverAuthenticationRequest
     */
    ServerRequestParameters.prototype.populateQueryParams = function (account, request, adalIdTokenObject) {
        var queryParameters = {};
        if (request) {
            // add the prompt parameter to serverRequestParameters if passed
            if (request.prompt) {
                this.validatePromptParameter(request.prompt);
                this.promptValue = request.prompt;
            }
            // Add claims challenge to serverRequestParameters if passed
            if (request.claimsRequest) {
                AuthenticationParameters_1.validateClaimsRequest(request);
                this.claimsValue = request.claimsRequest;
            }
            // if the developer provides one of these, give preference to developer choice
            if (ServerRequestParameters.isSSOParam(request)) {
                queryParameters = this.constructUnifiedCacheQueryParameter(request, null);
            }
        }
        if (adalIdTokenObject) {
            queryParameters = this.constructUnifiedCacheQueryParameter(null, adalIdTokenObject);
        }
        /*
         * adds sid/login_hint if not populated; populates domain_req, login_req and domain_hint
         * this.logger.verbose("Calling addHint parameters");
         */
        queryParameters = this.addHintParameters(account, queryParameters);
        // sanity check for developer passed extraQueryParameters
        var eQParams;
        if (request) {
            eQParams = this.sanitizeEQParams(request);
        }
        // Populate the extraQueryParameters to be sent to the server
        this.queryParameters = ServerRequestParameters.generateQueryParametersString(queryParameters);
        this.extraQueryParameters = ServerRequestParameters.generateQueryParametersString(eQParams);
    };
    // #region QueryParam helpers
    /**
     * @hidden
     * @ignore
     *
     * Utility to test if valid prompt value is passed in the request
     * @param request
     */
    ServerRequestParameters.prototype.validatePromptParameter = function (prompt) {
        if (!([Constants_1.PromptState.LOGIN, Constants_1.PromptState.SELECT_ACCOUNT, Constants_1.PromptState.CONSENT, Constants_1.PromptState.NONE].indexOf(prompt) >= 0)) {
            throw ClientConfigurationError_1.ClientConfigurationError.createInvalidPromptError(prompt);
        }
    };
    /**
     * Constructs extraQueryParameters to be sent to the server for the AuthenticationParameters set by the developer
     * in any login() or acquireToken() calls
     * @param idTokenObject
     * @param extraQueryParameters
     * @param sid
     * @param loginHint
     */
    // TODO: check how this behaves when domain_hint only is sent in extraparameters and idToken has no upn.
    ServerRequestParameters.prototype.constructUnifiedCacheQueryParameter = function (request, idTokenObject) {
        // preference order: account > sid > login_hint
        var ssoType;
        var ssoData;
        var serverReqParam = {};
        // if account info is passed, account.sid > account.login_hint
        if (request) {
            if (request.account) {
                var account = request.account;
                if (account.sid) {
                    ssoType = Constants_1.SSOTypes.SID;
                    ssoData = account.sid;
                }
                else if (account.userName) {
                    ssoType = Constants_1.SSOTypes.LOGIN_HINT;
                    ssoData = account.userName;
                }
            }
            // sid from request
            else if (request.sid) {
                ssoType = Constants_1.SSOTypes.SID;
                ssoData = request.sid;
            }
            // loginHint from request
            else if (request.loginHint) {
                ssoType = Constants_1.SSOTypes.LOGIN_HINT;
                ssoData = request.loginHint;
            }
        }
        // adalIdToken retrieved from cache
        else if (idTokenObject) {
            if (idTokenObject.hasOwnProperty(Constants_1.Constants.upn)) {
                ssoType = Constants_1.SSOTypes.ID_TOKEN;
                ssoData = idTokenObject.upn;
            }
            else {
                ssoType = Constants_1.SSOTypes.ORGANIZATIONS;
                ssoData = null;
            }
        }
        serverReqParam = this.addSSOParameter(ssoType, ssoData);
        // add the HomeAccountIdentifier info/ domain_hint
        if (request && request.account && request.account.homeAccountIdentifier) {
            serverReqParam = this.addSSOParameter(Constants_1.SSOTypes.HOMEACCOUNT_ID, request.account.homeAccountIdentifier, serverReqParam);
        }
        return serverReqParam;
    };
    /**
     * @hidden
     *
     * Adds login_hint to authorization URL which is used to pre-fill the username field of sign in page for the user if known ahead of time
     * domain_hint can be one of users/organizations which when added skips the email based discovery process of the user
     * domain_req utid received as part of the clientInfo
     * login_req uid received as part of clientInfo
     * Also does a sanity check for extraQueryParameters passed by the user to ensure no repeat queryParameters
     *
     * @param {@link Account} account - Account for which the token is requested
     * @param queryparams
     * @param {@link ServerRequestParameters}
     * @ignore
     */
    ServerRequestParameters.prototype.addHintParameters = function (account, qParams) {
        /*
         * This is a final check for all queryParams added so far; preference order: sid > login_hint
         * sid cannot be passed along with login_hint or domain_hint, hence we check both are not populated yet in queryParameters
         */
        if (account && !qParams[Constants_1.SSOTypes.SID]) {
            // sid - populate only if login_hint is not already populated and the account has sid
            var populateSID = !qParams[Constants_1.SSOTypes.LOGIN_HINT] && account.sid && this.promptValue === Constants_1.PromptState.NONE;
            if (populateSID) {
                qParams = this.addSSOParameter(Constants_1.SSOTypes.SID, account.sid, qParams);
            }
            // login_hint - account.userName
            else {
                var populateLoginHint = !qParams[Constants_1.SSOTypes.LOGIN_HINT] && account.userName && !StringUtils_1.StringUtils.isEmpty(account.userName);
                if (populateLoginHint) {
                    qParams = this.addSSOParameter(Constants_1.SSOTypes.LOGIN_HINT, account.userName, qParams);
                }
            }
            var populateReqParams = !qParams[Constants_1.SSOTypes.DOMAIN_REQ] && !qParams[Constants_1.SSOTypes.LOGIN_REQ];
            if (populateReqParams) {
                qParams = this.addSSOParameter(Constants_1.SSOTypes.HOMEACCOUNT_ID, account.homeAccountIdentifier, qParams);
            }
        }
        return qParams;
    };
    /**
     * Add SID to extraQueryParameters
     * @param sid
     */
    ServerRequestParameters.prototype.addSSOParameter = function (ssoType, ssoData, ssoParam) {
        if (!ssoParam) {
            ssoParam = {};
        }
        if (!ssoData) {
            return ssoParam;
        }
        switch (ssoType) {
            case Constants_1.SSOTypes.SID: {
                ssoParam[Constants_1.SSOTypes.SID] = ssoData;
                break;
            }
            case Constants_1.SSOTypes.ID_TOKEN: {
                ssoParam[Constants_1.SSOTypes.LOGIN_HINT] = ssoData;
                ssoParam[Constants_1.SSOTypes.DOMAIN_HINT] = Constants_1.SSOTypes.ORGANIZATIONS;
                break;
            }
            case Constants_1.SSOTypes.LOGIN_HINT: {
                ssoParam[Constants_1.SSOTypes.LOGIN_HINT] = ssoData;
                break;
            }
            case Constants_1.SSOTypes.ORGANIZATIONS: {
                ssoParam[Constants_1.SSOTypes.DOMAIN_HINT] = Constants_1.SSOTypes.ORGANIZATIONS;
                break;
            }
            case Constants_1.SSOTypes.CONSUMERS: {
                ssoParam[Constants_1.SSOTypes.DOMAIN_HINT] = Constants_1.SSOTypes.CONSUMERS;
                break;
            }
            case Constants_1.SSOTypes.HOMEACCOUNT_ID: {
                var homeAccountId = ssoData.split(".");
                var uid = CryptoUtils_1.CryptoUtils.base64Decode(homeAccountId[0]);
                var utid = CryptoUtils_1.CryptoUtils.base64Decode(homeAccountId[1]);
                // TODO: domain_req and login_req are not needed according to eSTS team
                ssoParam[Constants_1.SSOTypes.LOGIN_REQ] = uid;
                ssoParam[Constants_1.SSOTypes.DOMAIN_REQ] = utid;
                if (utid === Constants_1.Constants.consumersUtid) {
                    ssoParam[Constants_1.SSOTypes.DOMAIN_HINT] = Constants_1.SSOTypes.CONSUMERS;
                }
                else {
                    ssoParam[Constants_1.SSOTypes.DOMAIN_HINT] = Constants_1.SSOTypes.ORGANIZATIONS;
                }
                break;
            }
            case Constants_1.SSOTypes.LOGIN_REQ: {
                ssoParam[Constants_1.SSOTypes.LOGIN_REQ] = ssoData;
                break;
            }
            case Constants_1.SSOTypes.DOMAIN_REQ: {
                ssoParam[Constants_1.SSOTypes.DOMAIN_REQ] = ssoData;
                break;
            }
        }
        return ssoParam;
    };
    /**
     * @hidden
     * @ignore
     * Removes unnecessary or duplicate query parameters from extraQueryParameters
     * @param request
     */
    ServerRequestParameters.prototype.sanitizeEQParams = function (request) {
        var eQParams = request.extraQueryParameters;
        if (!eQParams) {
            return null;
        }
        if (request.claimsRequest) {
            // this.logger.warning("Removed duplicate claims from extraQueryParameters. Please use either the claimsRequest field OR pass as extraQueryParameter - not both.");
            delete eQParams[Constants_1.Constants.claims];
        }
        Constants_1.BlacklistedEQParams.forEach(function (param) {
            if (eQParams[param]) {
                // this.logger.warning("Removed duplicate " + param + " from extraQueryParameters. Please use the " + param + " field in request object.");
                delete eQParams[param];
            }
        });
        return eQParams;
    };
    /**
     * Utility to generate a QueryParameterString from a Key-Value mapping of extraQueryParameters passed
     * @param extraQueryParameters
     */
    ServerRequestParameters.generateQueryParametersString = function (queryParameters) {
        var paramsString = null;
        if (queryParameters) {
            Object.keys(queryParameters).forEach(function (key) {
                if (paramsString == null) {
                    paramsString = key + "=" + encodeURIComponent(queryParameters[key]);
                }
                else {
                    paramsString += "&" + key + "=" + encodeURIComponent(queryParameters[key]);
                }
            });
        }
        return paramsString;
    };
    // #endregion
    /**
     * Check to see if there are SSO params set in the Request
     * @param request
     */
    ServerRequestParameters.isSSOParam = function (request) {
        return request && (request.account || request.sid || request.loginHint);
    };
    return ServerRequestParameters;
}());
exports.ServerRequestParameters = ServerRequestParameters;


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
Object.defineProperty(exports, "__esModule", { value: true });
var CryptoUtils_1 = __webpack_require__(3);
var ClientAuthError_1 = __webpack_require__(6);
var StringUtils_1 = __webpack_require__(1);
/**
 * @hidden
 */
var ClientInfo = /** @class */ (function () {
    function ClientInfo(rawClientInfo) {
        if (!rawClientInfo || StringUtils_1.StringUtils.isEmpty(rawClientInfo)) {
            this.uid = "";
            this.utid = "";
            return;
        }
        try {
            var decodedClientInfo = CryptoUtils_1.CryptoUtils.base64Decode(rawClientInfo);
            var clientInfo = JSON.parse(decodedClientInfo);
            if (clientInfo) {
                if (clientInfo.hasOwnProperty("uid")) {
                    this.uid = clientInfo.uid;
                }
                if (clientInfo.hasOwnProperty("utid")) {
                    this.utid = clientInfo.utid;
                }
            }
        }
        catch (e) {
            throw ClientAuthError_1.ClientAuthError.createClientInfoDecodingError(e);
        }
    }
    Object.defineProperty(ClientInfo.prototype, "uid", {
        get: function () {
            return this._uid ? this._uid : "";
        },
        set: function (uid) {
            this._uid = uid;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ClientInfo.prototype, "utid", {
        get: function () {
            return this._utid ? this._utid : "";
        },
        set: function (utid) {
            this._utid = utid;
        },
        enumerable: true,
        configurable: true
    });
    return ClientInfo;
}());
exports.ClientInfo = ClientInfo;


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
Object.defineProperty(exports, "__esModule", { value: true });
var ClientAuthError_1 = __webpack_require__(6);
var TokenUtils_1 = __webpack_require__(15);
var StringUtils_1 = __webpack_require__(1);
/**
 * @hidden
 */
var IdToken = /** @class */ (function () {
    /* tslint:disable:no-string-literal */
    function IdToken(rawIdToken) {
        if (StringUtils_1.StringUtils.isEmpty(rawIdToken)) {
            throw ClientAuthError_1.ClientAuthError.createIdTokenNullOrEmptyError(rawIdToken);
        }
        try {
            this.rawIdToken = rawIdToken;
            this.claims = TokenUtils_1.TokenUtils.extractIdToken(rawIdToken);
            if (this.claims) {
                if (this.claims.hasOwnProperty("iss")) {
                    this.issuer = this.claims["iss"];
                }
                if (this.claims.hasOwnProperty("oid")) {
                    this.objectId = this.claims["oid"];
                }
                if (this.claims.hasOwnProperty("sub")) {
                    this.subject = this.claims["sub"];
                }
                if (this.claims.hasOwnProperty("tid")) {
                    this.tenantId = this.claims["tid"];
                }
                if (this.claims.hasOwnProperty("ver")) {
                    this.version = this.claims["ver"];
                }
                if (this.claims.hasOwnProperty("preferred_username")) {
                    this.preferredName = this.claims["preferred_username"];
                }
                if (this.claims.hasOwnProperty("name")) {
                    this.name = this.claims["name"];
                }
                if (this.claims.hasOwnProperty("nonce")) {
                    this.nonce = this.claims["nonce"];
                }
                if (this.claims.hasOwnProperty("exp")) {
                    this.expiration = this.claims["exp"];
                }
                if (this.claims.hasOwnProperty("home_oid")) {
                    this.homeObjectId = this.claims["home_oid"];
                }
                if (this.claims.hasOwnProperty("sid")) {
                    this.sid = this.claims["sid"];
                }
                if (this.claims.hasOwnProperty("cloud_instance_host_name")) {
                    this.cloudInstance = this.claims["cloud_instance_host_name"];
                }
                /* tslint:enable:no-string-literal */
            }
        }
        catch (e) {
            /*
             * TODO: This error here won't really every be thrown, since extractIdToken() returns null if the decodeJwt() fails.
             * Need to add better error handling here to account for being unable to decode jwts.
             */
            throw ClientAuthError_1.ClientAuthError.createIdTokenParsingError(e);
        }
    }
    return IdToken;
}());
exports.IdToken = IdToken;


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
Object.defineProperty(exports, "__esModule", { value: true });
var Constants_1 = __webpack_require__(2);
var AccessTokenCacheItem_1 = __webpack_require__(32);
var ClientConfigurationError_1 = __webpack_require__(5);
/**
 * @hidden
 */
var Storage = /** @class */ (function () {
    function Storage(cacheLocation) {
        if (Storage.instance) {
            return Storage.instance;
        }
        this.cacheLocation = cacheLocation;
        this.localStorageSupported = typeof window[this.cacheLocation] !== "undefined" && window[this.cacheLocation] != null;
        this.sessionStorageSupported = typeof window[cacheLocation] !== "undefined" && window[cacheLocation] != null;
        Storage.instance = this;
        if (!this.localStorageSupported && !this.sessionStorageSupported) {
            throw ClientConfigurationError_1.ClientConfigurationError.createNoStorageSupportedError();
        }
        return Storage.instance;
    }
    // add value to storage
    Storage.prototype.setItem = function (key, value, enableCookieStorage) {
        if (window[this.cacheLocation]) {
            window[this.cacheLocation].setItem(key, value);
        }
        if (enableCookieStorage) {
            this.setItemCookie(key, value);
        }
    };
    // get one item by key from storage
    Storage.prototype.getItem = function (key, enableCookieStorage) {
        if (enableCookieStorage && this.getItemCookie(key)) {
            return this.getItemCookie(key);
        }
        if (window[this.cacheLocation]) {
            return window[this.cacheLocation].getItem(key);
        }
        return null;
    };
    // remove value from storage
    Storage.prototype.removeItem = function (key) {
        if (window[this.cacheLocation]) {
            return window[this.cacheLocation].removeItem(key);
        }
    };
    // clear storage (remove all items from it)
    Storage.prototype.clear = function () {
        if (window[this.cacheLocation]) {
            return window[this.cacheLocation].clear();
        }
    };
    Storage.prototype.getAllAccessTokens = function (clientId, homeAccountIdentifier) {
        var results = [];
        var accessTokenCacheItem;
        var storage = window[this.cacheLocation];
        if (storage) {
            var key = void 0;
            for (key in storage) {
                if (storage.hasOwnProperty(key)) {
                    if (key.match(clientId) && key.match(homeAccountIdentifier)) {
                        var value = this.getItem(key);
                        if (value) {
                            accessTokenCacheItem = new AccessTokenCacheItem_1.AccessTokenCacheItem(JSON.parse(key), JSON.parse(value));
                            results.push(accessTokenCacheItem);
                        }
                    }
                }
            }
        }
        return results;
    };
    Storage.prototype.removeAcquireTokenEntries = function (state) {
        var storage = window[this.cacheLocation];
        if (storage) {
            var key = void 0;
            for (key in storage) {
                if (storage.hasOwnProperty(key)) {
                    if ((key.indexOf(Constants_1.CacheKeys.AUTHORITY) !== -1 || key.indexOf(Constants_1.CacheKeys.ACQUIRE_TOKEN_ACCOUNT) !== 1) && (!state || key.indexOf(state) !== -1)) {
                        var splitKey = key.split(Constants_1.Constants.resourceDelimiter);
                        var state_1 = void 0;
                        if (splitKey.length > 1) {
                            state_1 = splitKey[1];
                        }
                        if (state_1 && !this.tokenRenewalInProgress(state_1)) {
                            this.removeItem(key);
                            this.removeItem(Constants_1.Constants.renewStatus + state_1);
                            this.removeItem(Constants_1.Constants.stateLogin);
                            this.removeItem(Constants_1.Constants.stateAcquireToken);
                            this.removeItem(Constants_1.Constants.nonceIdToken);
                            this.removeItem(Constants_1.Constants.loginRequest);
                            this.setItemCookie(key, "", -1);
                        }
                    }
                }
            }
        }
        this.clearCookie();
    };
    Storage.prototype.tokenRenewalInProgress = function (stateValue) {
        var storage = window[this.cacheLocation];
        var renewStatus = storage[Constants_1.Constants.renewStatus + stateValue];
        return !(!renewStatus || renewStatus !== Constants_1.Constants.tokenRenewStatusInProgress);
    };
    Storage.prototype.resetCacheItems = function () {
        var storage = window[this.cacheLocation];
        if (storage) {
            var key = void 0;
            for (key in storage) {
                if (storage.hasOwnProperty(key)) {
                    if (key.indexOf(Constants_1.Constants.msal) !== -1) {
                        this.removeItem(key);
                    }
                }
            }
            this.removeAcquireTokenEntries();
        }
    };
    Storage.prototype.setItemCookie = function (cName, cValue, expires) {
        var cookieStr = cName + "=" + cValue + ";";
        if (expires) {
            var expireTime = this.getCookieExpirationTime(expires);
            cookieStr += "expires=" + expireTime + ";";
        }
        document.cookie = cookieStr;
    };
    Storage.prototype.getItemCookie = function (cName) {
        var name = cName + "=";
        var ca = document.cookie.split(";");
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) === " ") {
                c = c.substring(1);
            }
            if (c.indexOf(name) === 0) {
                return c.substring(name.length, c.length);
            }
        }
        return "";
    };
    Storage.prototype.getCookieExpirationTime = function (cookieLifeDays) {
        var today = new Date();
        var expr = new Date(today.getTime() + cookieLifeDays * 24 * 60 * 60 * 1000);
        return expr.toUTCString();
    };
    Storage.prototype.clearCookie = function () {
        this.setItemCookie(Constants_1.Constants.nonceIdToken, "", -1);
        this.setItemCookie(Constants_1.Constants.stateLogin, "", -1);
        this.setItemCookie(Constants_1.Constants.loginRequest, "", -1);
        this.setItemCookie(Constants_1.Constants.stateAcquireToken, "", -1);
    };
    /**
     * Create acquireTokenAccountKey to cache account object
     * @param accountId
     * @param state
     */
    Storage.generateAcquireTokenAccountKey = function (accountId, state) {
        return Constants_1.CacheKeys.ACQUIRE_TOKEN_ACCOUNT + Constants_1.Constants.resourceDelimiter +
            ("" + accountId) + Constants_1.Constants.resourceDelimiter + ("" + state);
    };
    /**
     * Create authorityKey to cache authority
     * @param state
     */
    Storage.generateAuthorityKey = function (state) {
        return Constants_1.CacheKeys.AUTHORITY + Constants_1.Constants.resourceDelimiter + ("" + state);
    };
    return Storage;
}());
exports.Storage = Storage;


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @hidden
 */
var AccessTokenCacheItem = /** @class */ (function () {
    function AccessTokenCacheItem(key, value) {
        this.key = key;
        this.value = value;
    }
    return AccessTokenCacheItem;
}());
exports.AccessTokenCacheItem = AccessTokenCacheItem;


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ClientAuthError_1 = __webpack_require__(6);
var UrlUtils_1 = __webpack_require__(4);
var WindowUtils = /** @class */ (function () {
    function WindowUtils() {
    }
    /**
     * @hidden
     * Checks if the current page is running in an iframe.
     * @ignore
     */
    WindowUtils.isInIframe = function () {
        return window.parent !== window;
    };
    /**
     * @hidden
     * Check if the current page is running in a popup.
     * @ignore
     */
    WindowUtils.isInPopup = function () {
        return !!(window.opener && window.opener !== window);
    };
    /**
     * @hidden
     * Monitors a window until it loads a url with a hash
     * @ignore
     */
    WindowUtils.monitorWindowForHash = function (contentWindow, timeout) {
        return new Promise(function (resolve, reject) {
            var maxTicks = timeout / WindowUtils.POLLING_INTERVAL_MS;
            var ticks = 0;
            var intervalId = setInterval(function () {
                if (contentWindow.closed) {
                    clearInterval(intervalId);
                    resolve();
                }
                var href;
                try {
                    /*
                     * Will throw if cross origin,
                     * which should be caught and ignored
                     * since we need the interval to keep running while on STS UI.
                     */
                    href = contentWindow.location.href;
                }
                catch (e) { }
                // Don't process blank pages or cross domain
                if (!href || href === "about:blank") {
                    return;
                }
                // Only run clock when we are on same domain
                ticks++;
                if (UrlUtils_1.UrlUtils.urlContainsHash(href)) {
                    clearInterval(intervalId);
                    resolve(contentWindow.location.hash);
                }
                else if (ticks > maxTicks) {
                    clearInterval(intervalId);
                    reject(ClientAuthError_1.ClientAuthError.createTokenRenewalTimeoutError()); // better error?
                }
            }, WindowUtils.POLLING_INTERVAL_MS);
        });
    };
    /**
     * @hidden
     * Loads iframe with authorization endpoint URL
     * @ignore
     */
    WindowUtils.loadFrame = function (urlNavigate, frameName, timeoutMs, logger) {
        /*
         * This trick overcomes iframe navigation in IE
         * IE does not load the page consistently in iframe
         */
        logger.info("LoadFrame: " + frameName);
        return new Promise(function (resolve, reject) {
            setTimeout(function () {
                var frameHandle = WindowUtils.addHiddenIFrame(frameName, logger);
                if (!frameHandle) {
                    reject("Unable to load iframe with name: " + frameName);
                    return;
                }
                if (frameHandle.src === "" || frameHandle.src === "about:blank") {
                    frameHandle.src = urlNavigate;
                    logger.infoPii("Frame Name : " + frameName + " Navigated to: " + urlNavigate);
                }
                resolve(frameHandle);
            }, timeoutMs);
        });
    };
    /**
     * @hidden
     * Adds the hidden iframe for silent token renewal.
     * @ignore
     */
    WindowUtils.addHiddenIFrame = function (iframeId, logger) {
        if (typeof iframeId === "undefined") {
            return null;
        }
        logger.info("Add msal frame to document:" + iframeId);
        var adalFrame = document.getElementById(iframeId);
        if (!adalFrame) {
            if (document.createElement &&
                document.documentElement &&
                (window.navigator.userAgent.indexOf("MSIE 5.0") === -1)) {
                var ifr = document.createElement("iframe");
                ifr.setAttribute("id", iframeId);
                ifr.style.visibility = "hidden";
                ifr.style.position = "absolute";
                ifr.style.width = ifr.style.height = "0";
                ifr.style.border = "0";
                ifr.setAttribute("sandbox", "allow-same-origin");
                adalFrame = document.getElementsByTagName("body")[0].appendChild(ifr);
            }
            else if (document.body && document.body.insertAdjacentHTML) {
                document.body.insertAdjacentHTML("beforeend", "<iframe name='" + iframeId + "' id='" + iframeId + "' style='display:none'></iframe>");
            }
            if (window.frames && window.frames[iframeId]) {
                adalFrame = window.frames[iframeId];
            }
        }
        return adalFrame;
    };
    /**
     * @hidden
     * Find and return the iframe element with the given hash
     * @ignore
     */
    WindowUtils.getIframeWithHash = function (hash) {
        return Array.from(document.getElementsByTagName("iframe")).find(function (iframe) {
            try {
                return iframe.contentWindow.location.hash === hash;
            }
            catch (e) {
                return false;
            }
        });
    };
    /**
     * @hidden
     * Returns an array of all the popups opened by MSAL
     * @ignore
     */
    WindowUtils.getPopups = function () {
        if (!window.openedWindows) {
            window.openedWindows = [];
        }
        return window.openedWindows;
    };
    /**
     * @hidden
     * Find and return the popup with the given hash
     * @ignore
     */
    WindowUtils.getPopUpWithHash = function (hash) {
        return WindowUtils.getPopups().find(function (popup) {
            try {
                return popup.location.hash === hash;
            }
            catch (e) {
                return false;
            }
        });
    };
    /**
     * @hidden
     * Add the popup to the known list of popups
     * @ignore
     */
    WindowUtils.trackPopup = function (popup) {
        WindowUtils.getPopups().push(popup);
    };
    /**
     * @hidden
     * Close all popups
     * @ignore
     */
    WindowUtils.closePopups = function () {
        WindowUtils.getPopups().forEach(function (popup) { return popup.close(); });
    };
    /**
     * @hidden
     * Interval in milliseconds that we poll a window
     * @ignore
     */
    WindowUtils.POLLING_INTERVAL_MS = 50;
    return WindowUtils;
}());
exports.WindowUtils = WindowUtils;


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @hidden
 */
var TimeUtils = /** @class */ (function () {
    function TimeUtils() {
    }
    /**
     * Returns time in seconds for expiration based on string value passed in.
     *
     * @param expiresIn
     */
    TimeUtils.parseExpiresIn = function (expiresIn) {
        // if AAD did not send "expires_in" property, use default expiration of 3599 seconds, for some reason AAD sends 3599 as "expires_in" value instead of 3600
        if (!expiresIn) {
            expiresIn = "3599";
        }
        return parseInt(expiresIn, 10);
    };
    /**
     * return the current time in Unix time. Date.getTime() returns in milliseconds.
     */
    TimeUtils.now = function () {
        return Math.round(new Date().getTime() / 1000.0);
    };
    return TimeUtils;
}());
exports.TimeUtils = TimeUtils;


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
/**
 * @hidden
 */
var ResponseUtils = /** @class */ (function () {
    function ResponseUtils() {
    }
    ResponseUtils.setResponseIdToken = function (originalResponse, idTokenObj) {
        if (!originalResponse) {
            return null;
        }
        else if (!idTokenObj) {
            return originalResponse;
        }
        var exp = Number(idTokenObj.expiration);
        if (exp && !originalResponse.expiresOn) {
            originalResponse.expiresOn = new Date(exp * 1000);
        }
        return tslib_1.__assign({}, originalResponse, { idToken: idTokenObj, idTokenClaims: idTokenObj.claims, uniqueId: idTokenObj.objectId || idTokenObj.subject, tenantId: idTokenObj.tenantId });
    };
    return ResponseUtils;
}());
exports.ResponseUtils = ResponseUtils;


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @hidden
 */
var AadAuthority_1 = __webpack_require__(17);
var B2cAuthority_1 = __webpack_require__(19);
var Authority_1 = __webpack_require__(8);
var ClientConfigurationError_1 = __webpack_require__(5);
var UrlUtils_1 = __webpack_require__(4);
var StringUtils_1 = __webpack_require__(1);
var AuthorityFactory = /** @class */ (function () {
    function AuthorityFactory() {
    }
    /**
     * Parse the url and determine the type of authority
     */
    AuthorityFactory.DetectAuthorityFromUrl = function (authorityUrl) {
        authorityUrl = UrlUtils_1.UrlUtils.CanonicalizeUri(authorityUrl);
        var components = UrlUtils_1.UrlUtils.GetUrlComponents(authorityUrl);
        var pathSegments = components.PathSegments;
        switch (pathSegments[0]) {
            case "tfp":
                return Authority_1.AuthorityType.B2C;
            default:
                return Authority_1.AuthorityType.Aad;
        }
    };
    /**
     * Create an authority object of the correct type based on the url
     * Performs basic authority validation - checks to see if the authority is of a valid type (eg aad, b2c)
     */
    AuthorityFactory.CreateInstance = function (authorityUrl, validateAuthority) {
        if (StringUtils_1.StringUtils.isEmpty(authorityUrl)) {
            return null;
        }
        var type = AuthorityFactory.DetectAuthorityFromUrl(authorityUrl);
        // Depending on above detection, create the right type.
        switch (type) {
            case Authority_1.AuthorityType.B2C:
                return new B2cAuthority_1.B2cAuthority(authorityUrl, validateAuthority);
            case Authority_1.AuthorityType.Aad:
                return new AadAuthority_1.AadAuthority(authorityUrl, validateAuthority);
            default:
                throw ClientConfigurationError_1.ClientConfigurationErrorMessage.invalidAuthorityType;
        }
    };
    return AuthorityFactory;
}());
exports.AuthorityFactory = AuthorityFactory;


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var DefaultEvent_1 = tslib_1.__importDefault(__webpack_require__(38));
// for use in cache events
var MSAL_CACHE_EVENT_VALUE_PREFIX = "msal.token";
var MSAL_CACHE_EVENT_NAME = "msal.cache_event";
var createEventKey = function (event) { return (event.telemetryCorrelationId + "-" + event.eventId + "-" + event.eventName); };
var TelemetryManager = /** @class */ (function () {
    function TelemetryManager(config, telemetryEmitter) {
        // correlation Id to list of events
        this.completedEvents = {};
        // event key to event
        this.inProgressEvents = {};
        // correlation id to map of eventname to count
        this.eventCountByCorrelationId = {};
        // Implement after API EVENT
        this.onlySendFailureTelemetry = false;
        // TODO THROW if bad options
        this.telemetryPlatform = config.platform;
        this.clientId = config.clientId;
        this.onlySendFailureTelemetry = config.onlySendFailureTelemetry;
        /*
         * TODO, when i get to wiring this through, think about what it means if
         * a developer does not implement telem at all, we still instrument, but telemetryEmitter can be
         * optional?
         */
        this.telemetryEmitter = telemetryEmitter;
    }
    TelemetryManager.prototype.startEvent = function (event) {
        if (!this.telemetryEmitter) {
            return;
        }
        var eventKey = createEventKey(event);
        this.inProgressEvents[eventKey] = event;
    };
    TelemetryManager.prototype.stopEvent = function (event) {
        var eventKey = createEventKey(event);
        if (!this.telemetryEmitter || !this.inProgressEvents[eventKey]) {
            return;
        }
        event.stop();
        this.incrementEventCount(event);
        var completedEvents = this.completedEvents[event.telemetryCorrelationId];
        this.completedEvents[event.telemetryCorrelationId] = (completedEvents || []).concat([event]);
        delete this.inProgressEvents[eventKey];
    };
    TelemetryManager.prototype.flush = function (correlationId) {
        var _this = this;
        // If there is only unfinished events should this still return them?
        if (!this.telemetryEmitter || !this.completedEvents[correlationId]) {
            return;
        }
        var orphanedEvents = this.getOrphanedEvents(correlationId);
        orphanedEvents.forEach(function (event) { return _this.incrementEventCount(event); });
        var eventsToFlush = this.completedEvents[correlationId].concat(orphanedEvents);
        delete this.completedEvents[correlationId];
        var eventCountsToFlush = this.eventCountByCorrelationId[correlationId];
        delete this.eventCountByCorrelationId[correlationId];
        // TODO add funcitonality for onlyFlushFailures after implementing api event? ??
        if (!eventsToFlush || !eventsToFlush.length) {
            return;
        }
        var defaultEvent = new DefaultEvent_1.default(this.telemetryPlatform, correlationId, this.clientId, eventCountsToFlush);
        var eventsWithDefaultEvent = eventsToFlush.concat([defaultEvent]);
        this.telemetryEmitter(eventsWithDefaultEvent.map(function (e) { return e.get(); }));
    };
    TelemetryManager.prototype.incrementEventCount = function (event) {
        var _a;
        /*
         * TODO, name cache event different?
         * if type is cache event, change name
         */
        var eventName = event.eventName;
        var eventCount = this.eventCountByCorrelationId[event.telemetryCorrelationId];
        if (!eventCount) {
            this.eventCountByCorrelationId[event.telemetryCorrelationId] = (_a = {},
                _a[eventName] = 1,
                _a);
        }
        else {
            eventCount[eventName] = eventCount[eventName] ? eventCount[eventName] + 1 : 1;
        }
    };
    TelemetryManager.prototype.getOrphanedEvents = function (correlationId) {
        var _this = this;
        return Object.keys(this.inProgressEvents)
            .reduce(function (memo, eventKey) {
            if (eventKey.indexOf(correlationId) !== -1) {
                var event = _this.inProgressEvents[eventKey];
                delete _this.inProgressEvents[eventKey];
                return memo.concat([event]);
            }
            return memo;
        }, []);
    };
    return TelemetryManager;
}());
exports.default = TelemetryManager;


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var TelemetryConstants_1 = __webpack_require__(9);
var TelemetryEvent_1 = tslib_1.__importDefault(__webpack_require__(39));
var TelemetryUtils_1 = __webpack_require__(23);
var DefaultEvent = /** @class */ (function (_super) {
    tslib_1.__extends(DefaultEvent, _super);
    // TODO Platform Type
    function DefaultEvent(platform, correlationId, clientId, eventCount) {
        var _this = _super.call(this, TelemetryUtils_1.prependEventNamePrefix("default_event"), correlationId) || this;
        _this.event[TelemetryUtils_1.prependEventNamePrefix("client_id")] = clientId;
        _this.event[TelemetryUtils_1.prependEventNamePrefix("sdk_plaform")] = platform.sdk;
        _this.event[TelemetryUtils_1.prependEventNamePrefix("sdk_version")] = platform.sdkVersion;
        _this.event[TelemetryUtils_1.prependEventNamePrefix("application_name")] = platform.applicationName;
        _this.event[TelemetryUtils_1.prependEventNamePrefix("application_version")] = platform.applicationVersion;
        _this.event["" + TelemetryConstants_1.TELEMETRY_BLOB_EVENT_NAMES.UiEventCountTelemetryBatchKey] = _this.getEventCount(TelemetryUtils_1.prependEventNamePrefix("ui_event"), eventCount);
        _this.event["" + TelemetryConstants_1.TELEMETRY_BLOB_EVENT_NAMES.HttpEventCountTelemetryBatchKey] = _this.getEventCount(TelemetryUtils_1.prependEventNamePrefix("http_event"), eventCount);
        _this.event["" + TelemetryConstants_1.TELEMETRY_BLOB_EVENT_NAMES.CacheEventCountConstStrKey] = _this.getEventCount(TelemetryUtils_1.prependEventNamePrefix("cache_event"), eventCount);
        return _this;
        // / Device id?
    }
    DefaultEvent.prototype.getEventCount = function (eventName, eventCount) {
        if (!eventCount[eventName]) {
            return 0;
        }
        return eventCount[eventName];
    };
    return DefaultEvent;
}(TelemetryEvent_1.default));
exports.default = DefaultEvent;


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var TelemetryConstants_1 = __webpack_require__(9);
var TelemetryConstants_2 = __webpack_require__(9);
var TelemetryUtils_1 = __webpack_require__(23);
var CryptoUtils_1 = __webpack_require__(3);
var TelemetryEvent = /** @class */ (function () {
    function TelemetryEvent(eventName, correlationId) {
        var _a;
        this.startTimestamp = Date.now();
        this.eventId = CryptoUtils_1.CryptoUtils.createNewGuid();
        this.event = (_a = {},
            _a[TelemetryUtils_1.prependEventNamePrefix(TelemetryConstants_2.EVENT_NAME_KEY)] = eventName,
            _a[TelemetryUtils_1.prependEventNamePrefix(TelemetryConstants_2.START_TIME_KEY)] = this.startTimestamp,
            _a[TelemetryUtils_1.prependEventNamePrefix(TelemetryConstants_2.ELAPSED_TIME_KEY)] = -1,
            _a["" + TelemetryConstants_1.TELEMETRY_BLOB_EVENT_NAMES.MsalCorrelationIdConstStrKey] = correlationId,
            _a);
    }
    TelemetryEvent.prototype.setElapsedTime = function (time) {
        this.event[TelemetryUtils_1.prependEventNamePrefix(TelemetryConstants_2.ELAPSED_TIME_KEY)] = time;
    };
    TelemetryEvent.prototype.stop = function () {
        // Set duration of event
        this.setElapsedTime(+Date.now() - +this.startTimestamp);
    };
    Object.defineProperty(TelemetryEvent.prototype, "telemetryCorrelationId", {
        get: function () {
            return this.event["" + TelemetryConstants_1.TELEMETRY_BLOB_EVENT_NAMES.MsalCorrelationIdConstStrKey];
        },
        set: function (value) {
            this.event["" + TelemetryConstants_1.TELEMETRY_BLOB_EVENT_NAMES.MsalCorrelationIdConstStrKey] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TelemetryEvent.prototype, "eventName", {
        get: function () {
            return this.event[TelemetryUtils_1.prependEventNamePrefix(TelemetryConstants_2.EVENT_NAME_KEY)];
        },
        enumerable: true,
        configurable: true
    });
    TelemetryEvent.prototype.get = function () {
        return tslib_1.__assign({}, this.event, { eventId: this.eventId });
    };
    return TelemetryEvent;
}());
exports.default = TelemetryEvent;


/***/ })
/******/ ]);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9Nc2FsL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9Nc2FsL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL01zYWwvLi9ub2RlX21vZHVsZXMvdHNsaWIvdHNsaWIuZXM2LmpzIiwid2VicGFjazovL01zYWwvLi9zcmMvdXRpbHMvU3RyaW5nVXRpbHMudHMiLCJ3ZWJwYWNrOi8vTXNhbC8uL3NyYy91dGlscy9Db25zdGFudHMudHMiLCJ3ZWJwYWNrOi8vTXNhbC8uL3NyYy91dGlscy9DcnlwdG9VdGlscy50cyIsIndlYnBhY2s6Ly9Nc2FsLy4vc3JjL3V0aWxzL1VybFV0aWxzLnRzIiwid2VicGFjazovL01zYWwvLi9zcmMvZXJyb3IvQ2xpZW50Q29uZmlndXJhdGlvbkVycm9yLnRzIiwid2VicGFjazovL01zYWwvLi9zcmMvZXJyb3IvQ2xpZW50QXV0aEVycm9yLnRzIiwid2VicGFjazovL01zYWwvLi9zcmMvZXJyb3IvQXV0aEVycm9yLnRzIiwid2VicGFjazovL01zYWwvLi9zcmMvYXV0aG9yaXR5L0F1dGhvcml0eS50cyIsIndlYnBhY2s6Ly9Nc2FsLy4vc3JjL3RlbGVtZXRyeS9UZWxlbWV0cnlDb25zdGFudHMudHMiLCJ3ZWJwYWNrOi8vTXNhbC8uL3NyYy9Mb2dnZXIudHMiLCJ3ZWJwYWNrOi8vTXNhbC8uL3NyYy9lcnJvci9TZXJ2ZXJFcnJvci50cyIsIndlYnBhY2s6Ly9Nc2FsLy4vc3JjL1VzZXJBZ2VudEFwcGxpY2F0aW9uLnRzIiwid2VicGFjazovL01zYWwvLi9zcmMvU2NvcGVTZXQudHMiLCJ3ZWJwYWNrOi8vTXNhbC8uL3NyYy9BdXRoZW50aWNhdGlvblBhcmFtZXRlcnMudHMiLCJ3ZWJwYWNrOi8vTXNhbC8uL3NyYy91dGlscy9Ub2tlblV0aWxzLnRzIiwid2VicGFjazovL01zYWwvLi9zcmMvQWNjb3VudC50cyIsIndlYnBhY2s6Ly9Nc2FsLy4vc3JjL2F1dGhvcml0eS9BYWRBdXRob3JpdHkudHMiLCJ3ZWJwYWNrOi8vTXNhbC8uL3NyYy9YSFJDbGllbnQudHMiLCJ3ZWJwYWNrOi8vTXNhbC8uL3NyYy9hdXRob3JpdHkvQjJjQXV0aG9yaXR5LnRzIiwid2VicGFjazovL01zYWwvLi9zcmMvQ29uZmlndXJhdGlvbi50cyIsIndlYnBhY2s6Ly9Nc2FsLy4vc3JjL2Vycm9yL0ludGVyYWN0aW9uUmVxdWlyZWRBdXRoRXJyb3IudHMiLCJ3ZWJwYWNrOi8vTXNhbC8uL3NyYy9BdXRoUmVzcG9uc2UudHMiLCJ3ZWJwYWNrOi8vTXNhbC8uL3NyYy90ZWxlbWV0cnkvVGVsZW1ldHJ5VXRpbHMudHMiLCJ3ZWJwYWNrOi8vTXNhbC8uL3NyYy9pbmRleC50cyIsIndlYnBhY2s6Ly9Nc2FsLy4vc3JjL0FjY2Vzc1Rva2VuS2V5LnRzIiwid2VicGFjazovL01zYWwvLi9zcmMvQWNjZXNzVG9rZW5WYWx1ZS50cyIsIndlYnBhY2s6Ly9Nc2FsLy4vc3JjL1NlcnZlclJlcXVlc3RQYXJhbWV0ZXJzLnRzIiwid2VicGFjazovL01zYWwvLi9zcmMvQ2xpZW50SW5mby50cyIsIndlYnBhY2s6Ly9Nc2FsLy4vc3JjL0lkVG9rZW4udHMiLCJ3ZWJwYWNrOi8vTXNhbC8uL3NyYy9TdG9yYWdlLnRzIiwid2VicGFjazovL01zYWwvLi9zcmMvQWNjZXNzVG9rZW5DYWNoZUl0ZW0udHMiLCJ3ZWJwYWNrOi8vTXNhbC8uL3NyYy91dGlscy9XaW5kb3dVdGlscy50cyIsIndlYnBhY2s6Ly9Nc2FsLy4vc3JjL3V0aWxzL1RpbWVVdGlscy50cyIsIndlYnBhY2s6Ly9Nc2FsLy4vc3JjL3V0aWxzL1Jlc3BvbnNlVXRpbHMudHMiLCJ3ZWJwYWNrOi8vTXNhbC8uL3NyYy9hdXRob3JpdHkvQXV0aG9yaXR5RmFjdG9yeS50cyIsIndlYnBhY2s6Ly9Nc2FsLy4vc3JjL3RlbGVtZXRyeS9UZWxlbWV0cnlNYW5hZ2VyLnRzIiwid2VicGFjazovL01zYWwvLi9zcmMvdGVsZW1ldHJ5L0RlZmF1bHRFdmVudC50cyIsIndl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Q0FBQztvQkFDeEQsS0FBSyxDQUFDO3dCQUFFLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQzt3QkFBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO3dCQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO3dCQUFDLFNBQVM7b0JBQ2pELEtBQUssQ0FBQzt3QkFBRSxFQUFFLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQzt3QkFBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDO3dCQUFDLFNBQVM7b0JBQ2pEO3dCQUNJLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUU7NEJBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQzs0QkFBQyxTQUFTO3lCQUFFO3dCQUM1RyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUU7NEJBQUUsQ0FBQyxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7NEJBQUMsTUFBTTt5QkFBRTt3QkFDdEYsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFOzRCQUFFLENBQUMsQ0FBQyxLQUFLLEdBQUcs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RSxDQUFDLENBQUM7SUFDdEgsU0FBUyxJQUFJLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxVQUFVLENBQUMsSUFBSSxPQUFPLElBQUksT0FBTyxDQUFDLFVBQVUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUMxSSxTQUFTLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLElBQUk7UUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7S0FBRTtJQUFDLE9BQU8sQ0FBQyxFQUFFO1FBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztLQUFFLENBQUMsQ0FBQztJQUNsRixTQUFTLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLEtBQUssWUFBWSxPQUFPLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN4SCxTQUFTLE9BQU8sQ0FBQyxLQUFLLElBQUksTUFBTSxDQUFDLE1BQU0sRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDbEQsU0FBUyxNQUFNLENBQUMsS0FBSyxJQUFJLE1BQU0sQ0FBQyxPQUFPLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ2xELFNBQVMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQyxNQUFNO1FBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDdEYsQ0FBQztBQVZELDRDQVVDO0FBRUQsU0FBZ0IsZ0JBQWdCLENBQUMsQ0FBQztJQUM5QixJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDVCxPQUFPLENBQUMsR0FBRyxFQUFFLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLElBQUksQ0FBQyxPQUFPLEVBQUUsVUFBVSxDQUFDLElBQUksTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsR0FBRyxjQUFjLE9BQU8sSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUM1SSxTQUFTLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxJQUFJLE9BQU8sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxLQUFLLEVBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDLEtBQUssUUFBUSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMs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QUMsbUNBQWMsQ0FBQyxDQUFDLENBQUM7UUFDOUQsQ0FBQzs7O09BQUE7SUFFTSw0QkFBRyxHQUFWO1FBQ0ksNEJBQ08sSUFBSSxDQUFDLEtBQUssSUFDYixPQUFPLEVBQUUsSUFBSSxDQUFDLE9BQU8sSUFDdkI7SUFDTixDQUFDO0lBQ0wscUJBQUM7QUFBRCxDQUFDIiwiZmlsZSI6Im1zYWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShcIk1zYWxcIiwgW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiTXNhbFwiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJNc2FsXCJdID0gZmFjdG9yeSgpO1xufSkod2luZG93LCBmdW5jdGlvbigpIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMjQpO1xuIiwiLyohICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbkNvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG5MaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpOyB5b3UgbWF5IG5vdCB1c2VcclxudGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGVcclxuTGljZW5zZSBhdCBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcclxuXHJcblRISVMgQ09ERSBJUyBQUk9WSURFRCBPTiBBTiAqQVMgSVMqIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTllcclxuS0lORCwgRUlUSEVSIEVYUFJFU1MgT1IgSU1QTElFRCwgSU5DTFVESU5HIFdJVEhPVVQgTElNSVRBVElPTiBBTlkgSU1QTElFRFxyXG5XQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgVElUTEUsIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLFxyXG5NRVJDSEFOVEFCTElUWSBPUiBOT04tSU5GUklOR0VNRU5ULlxyXG5cclxuU2VlIHRoZSBBcGFjaGUgVmVyc2lvbiAyLjAgTGljZW5zZSBmb3Igc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zXHJcbmFuZCBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cclxuKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogKi9cclxuLyogZ2xvYmFsIFJlZmxlY3QsIFByb21pc2UgKi9cclxuXHJcbnZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24oZCwgYikge1xyXG4gICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxyXG4gICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcclxuICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTsgfTtcclxuICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZXh0ZW5kcyhkLCBiKSB7XHJcbiAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XHJcbiAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XHJcbn1cclxuXHJcbmV4cG9ydCB2YXIgX19hc3NpZ24gPSBmdW5jdGlvbigpIHtcclxuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiBfX2Fzc2lnbih0KSB7XHJcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XHJcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XHJcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSkgdFtwXSA9IHNbcF07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0O1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3Jlc3QocywgZSkge1xyXG4gICAgdmFyIHQgPSB7fTtcclxuICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSAmJiBlLmluZGV4T2YocCkgPCAwKVxyXG4gICAgICAgIHRbcF0gPSBzW3BdO1xyXG4gICAgaWYgKHMgIT0gbnVsbCAmJiB0eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyA9PT0gXCJmdW5jdGlvblwiKVxyXG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBwID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzKTsgaSA8IHAubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKGUuaW5kZXhPZihwW2ldKSA8IDAgJiYgT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKHMsIHBbaV0pKVxyXG4gICAgICAgICAgICAgICAgdFtwW2ldXSA9IHNbcFtpXV07XHJcbiAgICAgICAgfVxyXG4gICAgcmV0dXJuIHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2RlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XHJcbiAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcclxuICAgIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XHJcbiAgICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19wYXJhbShwYXJhbUluZGV4LCBkZWNvcmF0b3IpIHtcclxuICAgIHJldHVybiBmdW5jdGlvbiAodGFyZ2V0LCBrZXkpIHsgZGVjb3JhdG9yKHRhcmdldCwga2V5LCBwYXJhbUluZGV4KTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19tZXRhZGF0YShtZXRhZGF0YUtleSwgbWV0YWRhdGFWYWx1ZSkge1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0Lm1ldGFkYXRhID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiBSZWZsZWN0Lm1ldGFkYXRhKG1ldGFkYXRhS2V5LCBtZXRhZGF0YVZhbHVlKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXdhaXRlcih0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcclxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUocmVzdWx0LnZhbHVlKTsgfSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxyXG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19nZW5lcmF0b3IodGhpc0FyZywgYm9keSkge1xyXG4gICAgdmFyIF8gPSB7IGxhYmVsOiAwLCBzZW50OiBmdW5jdGlvbigpIHsgaWYgKHRbMF0gJiAxKSB0aHJvdyB0WzFdOyByZXR1cm4gdFsxXTsgfSwgdHJ5czogW10sIG9wczogW10gfSwgZiwgeSwgdCwgZztcclxuICAgIHJldHVybiBnID0geyBuZXh0OiB2ZXJiKDApLCBcInRocm93XCI6IHZlcmIoMSksIFwicmV0dXJuXCI6IHZlcmIoMikgfSwgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIChnW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXM7IH0pLCBnO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IHJldHVybiBmdW5jdGlvbiAodikgeyByZXR1cm4gc3RlcChbbiwgdl0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiBzdGVwKG9wKSB7XHJcbiAgICAgICAgaWYgKGYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBleGVjdXRpbmcuXCIpO1xyXG4gICAgICAgIHdoaWxlIChfKSB0cnkge1xyXG4gICAgICAgICAgICBpZiAoZiA9IDEsIHkgJiYgKHQgPSBvcFswXSAmIDIgPyB5W1wicmV0dXJuXCJdIDogb3BbMF0gPyB5W1widGhyb3dcIl0gfHwgKCh0ID0geVtcInJldHVyblwiXSkgJiYgdC5jYWxsKHkpLCAwKSA6IHkubmV4dCkgJiYgISh0ID0gdC5jYWxsKHksIG9wWzFdKSkuZG9uZSkgcmV0dXJuIHQ7XHJcbiAgICAgICAgICAgIGlmICh5ID0gMCwgdCkgb3AgPSBbb3BbMF0gJiAyLCB0LnZhbHVlXTtcclxuICAgICAgICAgICAgc3dpdGNoIChvcFswXSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAwOiBjYXNlIDE6IHQgPSBvcDsgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDQ6IF8ubGFiZWwrKzsgcmV0dXJuIHsgdmFsdWU6IG9wWzFdLCBkb25lOiBmYWxzZSB9O1xyXG4gICAgICAgICAgICAgICAgY2FzZSA1OiBfLmxhYmVsKys7IHkgPSBvcFsxXTsgb3AgPSBbMF07IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA3OiBvcCA9IF8ub3BzLnBvcCgpOyBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICBpZiAoISh0ID0gXy50cnlzLCB0ID0gdC5sZW5ndGggPiAwICYmIHRbdC5sZW5ndGggLSAxXSkgJiYgKG9wWzBdID09PSA2IHx8IG9wWzBdID09PSAyKSkgeyBfID0gMDsgY29udGludWU7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDMgJiYgKCF0IHx8IChvcFsxXSA+IHRbMF0gJiYgb3BbMV0gPCB0WzNdKSkpIHsgXy5sYWJlbCA9IG9wWzFdOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gNiAmJiBfLmxhYmVsIDwgdFsxXSkgeyBfLmxhYmVsID0gdFsxXTsgdCA9IG9wOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0ICYmIF8ubGFiZWwgPCB0WzJdKSB7IF8ubGFiZWwgPSB0WzJdOyBfLm9wcy5wdXNoKG9wKTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodFsyXSkgXy5vcHMucG9wKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBvcCA9IGJvZHkuY2FsbCh0aGlzQXJnLCBfKTtcclxuICAgICAgICB9IGNhdGNoIChlKSB7IG9wID0gWzYsIGVdOyB5ID0gMDsgfSBmaW5hbGx5IHsgZiA9IHQgPSAwOyB9XHJcbiAgICAgICAgaWYgKG9wWzBdICYgNSkgdGhyb3cgb3BbMV07IHJldHVybiB7IHZhbHVlOiBvcFswXSA/IG9wWzFdIDogdm9pZCAwLCBkb25lOiB0cnVlIH07XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2V4cG9ydFN0YXIobSwgZXhwb3J0cykge1xyXG4gICAgZm9yICh2YXIgcCBpbiBtKSBpZiAoIWV4cG9ydHMuaGFzT3duUHJvcGVydHkocCkpIGV4cG9ydHNbcF0gPSBtW3BdO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX192YWx1ZXMobykge1xyXG4gICAgdmFyIG0gPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb1tTeW1ib2wuaXRlcmF0b3JdLCBpID0gMDtcclxuICAgIGlmIChtKSByZXR1cm4gbS5jYWxsKG8pO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBuZXh0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmIChvICYmIGkgPj0gby5sZW5ndGgpIG8gPSB2b2lkIDA7XHJcbiAgICAgICAgICAgIHJldHVybiB7IHZhbHVlOiBvICYmIG9baSsrXSwgZG9uZTogIW8gfTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19yZWFkKG8sIG4pIHtcclxuICAgIHZhciBtID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9bU3ltYm9sLml0ZXJhdG9yXTtcclxuICAgIGlmICghbSkgcmV0dXJuIG87XHJcbiAgICB2YXIgaSA9IG0uY2FsbChvKSwgciwgYXIgPSBbXSwgZTtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgd2hpbGUgKChuID09PSB2b2lkIDAgfHwgbi0tID4gMCkgJiYgIShyID0gaS5uZXh0KCkpLmRvbmUpIGFyLnB1c2goci52YWx1ZSk7XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoZXJyb3IpIHsgZSA9IHsgZXJyb3I6IGVycm9yIH07IH1cclxuICAgIGZpbmFsbHkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChyICYmICFyLmRvbmUgJiYgKG0gPSBpW1wicmV0dXJuXCJdKSkgbS5jYWxsKGkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmaW5hbGx5IHsgaWYgKGUpIHRocm93IGUuZXJyb3I7IH1cclxuICAgIH1cclxuICAgIHJldHVybiBhcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fc3ByZWFkKCkge1xyXG4gICAgZm9yICh2YXIgYXIgPSBbXSwgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspXHJcbiAgICAgICAgYXIgPSBhci5jb25jYXQoX19yZWFkKGFyZ3VtZW50c1tpXSkpO1xyXG4gICAgcmV0dXJuIGFyO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19zcHJlYWRBcnJheXMoKSB7XHJcbiAgICBmb3IgKHZhciBzID0gMCwgaSA9IDAsIGlsID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IGlsOyBpKyspIHMgKz0gYXJndW1lbnRzW2ldLmxlbmd0aDtcclxuICAgIGZvciAodmFyIHIgPSBBcnJheShzKSwgayA9IDAsIGkgPSAwOyBpIDwgaWw7IGkrKylcclxuICAgICAgICBmb3IgKHZhciBhID0gYXJndW1lbnRzW2ldLCBqID0gMCwgamwgPSBhLmxlbmd0aDsgaiA8IGpsOyBqKyssIGsrKylcclxuICAgICAgICAgICAgcltrXSA9IGFbal07XHJcbiAgICByZXR1cm4gcjtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2F3YWl0KHYpIHtcclxuICAgIHJldHVybiB0aGlzIGluc3RhbmNlb2YgX19hd2FpdCA/ICh0aGlzLnYgPSB2LCB0aGlzKSA6IG5ldyBfX2F3YWl0KHYpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY0dlbmVyYXRvcih0aGlzQXJnLCBfYXJndW1lbnRzLCBnZW5lcmF0b3IpIHtcclxuICAgIGlmICghU3ltYm9sLmFzeW5jSXRlcmF0b3IpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTeW1ib2wuYXN5bmNJdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XHJcbiAgICB2YXIgZyA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSwgaSwgcSA9IFtdO1xyXG4gICAgcmV0dXJuIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiKSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IGlmIChnW25dKSBpW25dID0gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChhLCBiKSB7IHEucHVzaChbbiwgdiwgYSwgYl0pID4gMSB8fCByZXN1bWUobiwgdik7IH0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiByZXN1bWUobiwgdikgeyB0cnkgeyBzdGVwKGdbbl0odikpOyB9IGNhdGNoIChlKSB7IHNldHRsZShxWzBdWzNdLCBlKTsgfSB9XHJcbiAgICBmdW5jdGlvbiBzdGVwKHIpIHsgci52YWx1ZSBpbnN0YW5jZW9mIF9fYXdhaXQgPyBQcm9taXNlLnJlc29sdmUoci52YWx1ZS52KS50aGVuKGZ1bGZpbGwsIHJlamVjdCkgOiBzZXR0bGUocVswXVsyXSwgcik7IH1cclxuICAgIGZ1bmN0aW9uIGZ1bGZpbGwodmFsdWUpIHsgcmVzdW1lKFwibmV4dFwiLCB2YWx1ZSk7IH1cclxuICAgIGZ1bmN0aW9uIHJlamVjdCh2YWx1ZSkgeyByZXN1bWUoXCJ0aHJvd1wiLCB2YWx1ZSk7IH1cclxuICAgIGZ1bmN0aW9uIHNldHRsZShmLCB2KSB7IGlmIChmKHYpLCBxLnNoaWZ0KCksIHEubGVuZ3RoKSByZXN1bWUocVswXVswXSwgcVswXVsxXSk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNEZWxlZ2F0b3Iobykge1xyXG4gICAgdmFyIGksIHA7XHJcbiAgICByZXR1cm4gaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIsIGZ1bmN0aW9uIChlKSB7IHRocm93IGU7IH0pLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuLCBmKSB7IGlbbl0gPSBvW25dID8gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIChwID0gIXApID8geyB2YWx1ZTogX19hd2FpdChvW25dKHYpKSwgZG9uZTogbiA9PT0gXCJyZXR1cm5cIiB9IDogZiA/IGYodikgOiB2OyB9IDogZjsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY1ZhbHVlcyhvKSB7XHJcbiAgICBpZiAoIVN5bWJvbC5hc3luY0l0ZXJhdG9yKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3ltYm9sLmFzeW5jSXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG4gICAgdmFyIG0gPSBvW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSwgaTtcclxuICAgIHJldHVybiBtID8gbS5jYWxsKG8pIDogKG8gPSB0eXBlb2YgX192YWx1ZXMgPT09IFwiZnVuY3Rpb25cIiA/IF9fdmFsdWVzKG8pIDogb1tTeW1ib2wuaXRlcmF0b3JdKCksIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiKSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpKTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyBpW25dID0gb1tuXSAmJiBmdW5jdGlvbiAodikgeyByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkgeyB2ID0gb1tuXSh2KSwgc2V0dGxlKHJlc29sdmUsIHJlamVjdCwgdi5kb25lLCB2LnZhbHVlKTsgfSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHNldHRsZShyZXNvbHZlLCByZWplY3QsIGQsIHYpIHsgUHJvbWlzZS5yZXNvbHZlKHYpLnRoZW4oZnVuY3Rpb24odikgeyByZXNvbHZlKHsgdmFsdWU6IHYsIGRvbmU6IGQgfSk7IH0sIHJlamVjdCk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fbWFrZVRlbXBsYXRlT2JqZWN0KGNvb2tlZCwgcmF3KSB7XHJcbiAgICBpZiAoT2JqZWN0LmRlZmluZVByb3BlcnR5KSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjb29rZWQsIFwicmF3XCIsIHsgdmFsdWU6IHJhdyB9KTsgfSBlbHNlIHsgY29va2VkLnJhdyA9IHJhdzsgfVxyXG4gICAgcmV0dXJuIGNvb2tlZDtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2ltcG9ydFN0YXIobW9kKSB7XHJcbiAgICBpZiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSByZXR1cm4gbW9kO1xyXG4gICAgdmFyIHJlc3VsdCA9IHt9O1xyXG4gICAgaWYgKG1vZCAhPSBudWxsKSBmb3IgKHZhciBrIGluIG1vZCkgaWYgKE9iamVjdC5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vZCwgaykpIHJlc3VsdFtrXSA9IG1vZFtrXTtcclxuICAgIHJlc3VsdC5kZWZhdWx0ID0gbW9kO1xyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9faW1wb3J0RGVmYXVsdChtb2QpIHtcclxuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgZGVmYXVsdDogbW9kIH07XHJcbn1cclxuIiwiLypcbiAqIENvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxuICovXG5cbi8qKlxuICogQGhpZGRlblxuICovXG5leHBvcnQgY2xhc3MgU3RyaW5nVXRpbHMge1xuICAgIC8qKlxuICAgICAqIENoZWNrIGlmIGEgc3RyaW5nIGlzIGVtcHR5XG4gICAgICpcbiAgICAgKiBAcGFyYW0gc3RyXG4gICAgICovXG4gICAgc3RhdGljIGlzRW1wdHkoc3RyOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuICh0eXBlb2Ygc3RyID09PSBcInVuZGVmaW5lZFwiIHx8ICFzdHIgfHwgMCA9PT0gc3RyLmxlbmd0aCk7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgQ2FjaGVMb2NhdGlvbiB9IGZyb20gXCIuLi9Db25maWd1cmF0aW9uXCI7XHJcblxyXG4vKlxyXG4gKiBDb3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxyXG4gKi9cclxuXHJcbi8qKlxyXG4gKiBAaGlkZGVuXHJcbiAqIENvbnN0YW50c1xyXG4gKi9cclxuZXhwb3J0IGNsYXNzIENvbnN0YW50cyB7XHJcbiAgICBzdGF0aWMgZ2V0IGVycm9yRGVzY3JpcHRpb24oKTogc3RyaW5nIHsgcmV0dXJuIFwiZXJyb3JfZGVzY3JpcHRpb25cIjsgfVxyXG4gICAgc3RhdGljIGdldCBlcnJvcigpOiBzdHJpbmcgeyByZXR1cm4gXCJlcnJvclwiOyB9XHJcblxyXG4gICAgc3RhdGljIGdldCBzY29wZSgpOiBzdHJpbmcgeyByZXR1cm4gXCJzY29wZVwiOyB9XHJcbiAgICBzdGF0aWMgZ2V0IGNsaWVudEluZm8oKTogc3RyaW5nIHsgcmV0dXJuIFwiY2xpZW50X2luZm9cIjsgfVxyXG4gICAgc3RhdGljIGdldCBjbGllbnRJZCgpOiBzdHJpbmcgeyByZXR1cm4gXCJjbGllbnRJZFwiOyB9XHJcblxyXG4gICAgc3RhdGljIGdldCBpZFRva2VuKCk6IHN0cmluZyB7IHJldHVybiBcImlkX3Rva2VuXCI7IH1cclxuICAgIHN0YXRpYyBnZXQgYWRhbElkVG9rZW4oKTogc3RyaW5nIHsgcmV0dXJuIFwiYWRhbC5pZHRva2VuXCI7IH1cclxuICAgIHN0YXRpYyBnZXQgYWNjZXNzVG9rZW4oKTogc3RyaW5nIHsgcmV0dXJuIFwiYWNjZXNzX3Rva2VuXCI7IH1cclxuICAgIHN0YXRpYyBnZXQgZXhwaXJlc0luKCk6IHN0cmluZyB7IHJldHVybiBcImV4cGlyZXNfaW5cIjsgfVxyXG4gICAgc3RhdGljIGdldCBzZXNzaW9uU3RhdGUoKTogc3RyaW5nIHsgcmV0dXJuIFwic2Vzc2lvbl9zdGF0ZVwiOyB9XHJcbiAgICBzdGF0aWMgZ2V0IGNsYWltcygpOiBzdHJpbmcgeyByZXR1cm4gXCJjbGFpbXNcIjsgfVxyXG5cclxuICAgIHN0YXRpYyBnZXQgbXNhbENsaWVudEluZm8oKTogc3RyaW5nIHsgcmV0dXJuIFwibXNhbC5jbGllbnQuaW5mb1wiOyB9XHJcbiAgICBzdGF0aWMgZ2V0IG1zYWxFcnJvcigpOiBzdHJpbmcgeyByZXR1cm4gXCJtc2FsLmVycm9yXCI7IH1cclxuICAgIHN0YXRpYyBnZXQgbXNhbEVycm9yRGVzY3JpcHRpb24oKTogc3RyaW5nIHsgcmV0dXJuIFwibXNhbC5lcnJvci5kZXNjcmlwdGlvblwiOyB9XHJcblxyXG4gICAgc3RhdGljIGdldCBtc2FsU2Vzc2lvblN0YXRlKCk6IHN0cmluZyB7IHJldHVybiBcIm1zYWwuc2Vzc2lvbi5zdGF0ZVwiOyB9XHJcbiAgICBzdGF0aWMgZ2V0IHRva2VuS2V5cygpOiBzdHJpbmcgeyByZXR1cm4gXCJtc2FsLnRva2VuLmtleXNcIjsgfVxyXG4gICAgc3RhdGljIGdldCBhY2Nlc3NUb2tlbktleSgpOiBzdHJpbmcgeyByZXR1cm4gXCJtc2FsLmFjY2Vzcy50b2tlbi5rZXlcIjsgfVxyXG4gICAgc3RhdGljIGdldCBleHBpcmF0aW9uS2V5KCk6IHN0cmluZyB7IHJldHVybiBcIm1zYWwuZXhwaXJhdGlvbi5rZXlcIjsgfVxyXG4gICAgc3RhdGljIGdldCBzdGF0ZUxvZ2luKCk6IHN0cmluZyB7IHJldHVybiBcIm1zYWwuc3RhdGUubG9naW5cIjsgfVxyXG4gICAgc3RhdGljIGdldCBzdGF0ZUFjcXVpcmVUb2tlbigpOiBzdHJpbmcgeyByZXR1cm4gXCJtc2FsLnN0YXRlLmFjcXVpcmVUb2tlblwiOyB9XHJcbiAgICBzdGF0aWMgZ2V0IHN0YXRlUmVuZXcoKTogc3RyaW5nIHsgcmV0dXJuIFwibXNhbC5zdGF0ZS5yZW5ld1wiOyB9XHJcbiAgICBzdGF0aWMgZ2V0IG5vbmNlSWRUb2tlbigpOiBzdHJpbmcgeyByZXR1cm4gXCJtc2FsLm5vbmNlLmlkdG9rZW5cIjsgfVxyXG4gICAgc3RhdGljIGdldCB1c2VyTmFtZSgpOiBzdHJpbmcgeyByZXR1cm4gXCJtc2FsLnVzZXJuYW1lXCI7IH1cclxuICAgIHN0YXRpYyBnZXQgaWRUb2tlbktleSgpOiBzdHJpbmcgeyByZXR1cm4gXCJtc2FsLmlkdG9rZW5cIjsgfVxyXG4gICAgc3RhdGljIGdldCBsb2dpblJlcXVlc3QoKTogc3RyaW5nIHsgcmV0dXJuIFwibXNhbC5sb2dpbi5yZXF1ZXN0XCI7IH1cclxuICAgIHN0YXRpYyBnZXQgbG9naW5FcnJvcigpOiBzdHJpbmcgeyByZXR1cm4gXCJtc2FsLmxvZ2luLmVycm9yXCI7IH1cclxuICAgIHN0YXRpYyBnZXQgcmVuZXdTdGF0dXMoKTogc3RyaW5nIHsgcmV0dXJuIFwibXNhbC50b2tlbi5yZW5ldy5zdGF0dXNcIjsgfVxyXG4gICAgc3RhdGljIGdldCB1cmxIYXNoKCk6IHN0cmluZyB7IHJldHVybiBcIm1zYWwudXJsSGFzaFwiOyB9XHJcbiAgICBzdGF0aWMgZ2V0IGFuZ3VsYXJMb2dpblJlcXVlc3QoKTogc3RyaW5nIHsgcmV0dXJuIFwibXNhbC5hbmd1bGFyLmxvZ2luLnJlcXVlc3RcIjsgfVxyXG4gICAgc3RhdGljIGdldCBtc2FsKCk6IHN0cmluZyB7IHJldHVybiBcIm1zYWxcIjsgfVxyXG5cclxuICAgIHN0YXRpYyBnZXQgbm9fYWNjb3VudCgpOiBzdHJpbmcgeyByZXR1cm4gXCJOT19BQ0NPVU5UXCI7IH1cclxuICAgIHN0YXRpYyBnZXQgY29uc3VtZXJzVXRpZCgpOiBzdHJpbmcgeyByZXR1cm4gXCI5MTg4MDQwZC02YzY3LTRjNWItYjExMi0zNmEzMDRiNjZkYWRcIjsgfVxyXG4gICAgc3RhdGljIGdldCB1cG4oKTogc3RyaW5nIHsgcmV0dXJuIFwidXBuXCI7IH1cclxuXHJcbiAgICBzdGF0aWMgZ2V0IHByb21wdF9zZWxlY3RfYWNjb3VudCgpOiBzdHJpbmcgeyByZXR1cm4gXCImcHJvbXB0PXNlbGVjdF9hY2NvdW50XCI7IH1cclxuICAgIHN0YXRpYyBnZXQgcHJvbXB0X25vbmUoKTogc3RyaW5nIHsgcmV0dXJuIFwiJnByb21wdD1ub25lXCI7IH1cclxuICAgIHN0YXRpYyBnZXQgcHJvbXB0KCk6IHN0cmluZyB7IHJldHVybiBcInByb21wdFwiOyB9XHJcblxyXG4gICAgc3RhdGljIGdldCByZXNwb25zZV9tb2RlX2ZyYWdtZW50KCk6IHN0cmluZyB7IHJldHVybiBcIiZyZXNwb25zZV9tb2RlPWZyYWdtZW50XCI7IH1cclxuICAgIHN0YXRpYyBnZXQgcmVzb3VyY2VEZWxpbWl0ZXIoKTogc3RyaW5nIHsgcmV0dXJuIFwifFwiOyB9XHJcblxyXG4gICAgc3RhdGljIGdldCB0b2tlblJlbmV3U3RhdHVzQ2FuY2VsbGVkKCk6IHN0cmluZyB7IHJldHVybiBcIkNhbmNlbGVkXCI7IH1cclxuICAgIHN0YXRpYyBnZXQgdG9rZW5SZW5ld1N0YXR1c0NvbXBsZXRlZCgpOiBzdHJpbmcgeyByZXR1cm4gXCJDb21wbGV0ZWRcIjsgfVxyXG4gICAgc3RhdGljIGdldCB0b2tlblJlbmV3U3RhdHVzSW5Qcm9ncmVzcygpOiBzdHJpbmcgeyByZXR1cm4gXCJJbiBQcm9ncmVzc1wiOyB9XHJcblxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgX3BvcFVwV2lkdGg6IG51bWJlciA9IDQ4MztcclxuICAgIHN0YXRpYyBnZXQgcG9wVXBXaWR0aCgpOiBudW1iZXIgeyByZXR1cm4gdGhpcy5fcG9wVXBXaWR0aDsgfVxyXG4gICAgc3RhdGljIHNldCBwb3BVcFdpZHRoKHdpZHRoOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLl9wb3BVcFdpZHRoID0gd2lkdGg7XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIHN0YXRpYyBfcG9wVXBIZWlnaHQ6IG51bWJlciA9IDYwMDtcclxuICAgIHN0YXRpYyBnZXQgcG9wVXBIZWlnaHQoKTogbnVtYmVyIHsgcmV0dXJuIHRoaXMuX3BvcFVwSGVpZ2h0OyB9XHJcbiAgICBzdGF0aWMgc2V0IHBvcFVwSGVpZ2h0KGhlaWdodDogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5fcG9wVXBIZWlnaHQgPSBoZWlnaHQ7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGdldCBsb2dpbigpOiBzdHJpbmcgeyByZXR1cm4gXCJMT0dJTlwiOyB9XHJcbiAgICBzdGF0aWMgZ2V0IHJlbmV3VG9rZW4oKTogc3RyaW5nIHsgcmV0dXJuIFwiUkVORVdfVE9LRU5cIjsgfVxyXG4gICAgc3RhdGljIGdldCB1bmtub3duKCk6IHN0cmluZyB7IHJldHVybiBcIlVOS05PV05cIjsgfVxyXG5cclxuICAgIHN0YXRpYyBnZXQgaG9tZUFjY291bnRJZGVudGlmaWVyKCk6IHN0cmluZyB7IHJldHVybiBcImhvbWVBY2NvdW50SWRlbnRpZmllclwiOyB9XHJcblxyXG4gICAgc3RhdGljIGdldCBjb21tb24oKTogc3RyaW5nIHsgcmV0dXJuIFwiY29tbW9uXCI7IH1cclxuICAgIHN0YXRpYyBnZXQgb3BlbmlkU2NvcGUoKTogc3RyaW5nIHsgcmV0dXJuIFwib3BlbmlkXCI7IH1cclxuICAgIHN0YXRpYyBnZXQgcHJvZmlsZVNjb3BlKCk6IHN0cmluZyB7IHJldHVybiBcInByb2ZpbGVcIjsgfVxyXG5cclxuICAgIHN0YXRpYyBnZXQgY2FjaGVMb2NhdGlvbkxvY2FsKCk6IENhY2hlTG9jYXRpb24geyByZXR1cm4gXCJsb2NhbFN0b3JhZ2VcIjsgfVxyXG4gICAgc3RhdGljIGdldCBjYWNoZUxvY2F0aW9uU2Vzc2lvbigpOiBDYWNoZUxvY2F0aW9uIHsgcmV0dXJuIFwic2Vzc2lvblN0b3JhZ2VcIjsgfVxyXG5cclxuICAgIHN0YXRpYyBnZXQgaW50ZXJhY3Rpb25UeXBlUmVkaXJlY3QoKTogSW50ZXJhY3Rpb25UeXBlIHsgcmV0dXJuIFwicmVkaXJlY3RJbnRlcmFjdGlvblwiOyB9XHJcbiAgICBzdGF0aWMgZ2V0IGludGVyYWN0aW9uVHlwZVBvcHVwKCk6IEludGVyYWN0aW9uVHlwZSB7IHJldHVybiBcInBvcHVwSW50ZXJhY3Rpb25cIjsgfVxyXG59XHJcblxyXG4vKipcclxuICogQGhpZGRlblxyXG4gKiBDYWNoZUtleXMgZm9yICdhdXRob3JpdHknIGFuZCAnYWNjb3VudCdcclxuICovXHJcbmV4cG9ydCBjb25zdCBDYWNoZUtleXMgPSB7XHJcbiAgICBBVVRIT1JJVFk6IFwibXNhbC5hdXRob3JpdHlcIixcclxuICAgIEFDUVVJUkVfVE9LRU5fQUNDT1VOVDogXCJtc2FsLmFjcXVpcmVUb2tlbkFjY291bnRcIlxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IEFBRFRydXN0ZWRIb3N0TGlzdCA9ICB7XHJcbiAgICBcImxvZ2luLndpbmRvd3MubmV0XCI6IFwibG9naW4ud2luZG93cy5uZXRcIixcclxuICAgIFwibG9naW4uY2hpbmFjbG91ZGFwaS5jblwiOiBcImxvZ2luLmNoaW5hY2xvdWRhcGkuY25cIixcclxuICAgIFwibG9naW4uY2xvdWRnb3ZhcGkudXNcIjogXCJsb2dpbi5jbG91ZGdvdmFwaS51c1wiLFxyXG4gICAgXCJsb2dpbi5taWNyb3NvZnRvbmxpbmUuY29tXCI6IFwibG9naW4ubWljcm9zb2Z0b25saW5lLmNvbVwiLFxyXG4gICAgXCJsb2dpbi5taWNyb3NvZnRvbmxpbmUuZGVcIjogXCJsb2dpbi5taWNyb3NvZnRvbmxpbmUuZGVcIixcclxuICAgIFwibG9naW4ubWljcm9zb2Z0b25saW5lLnVzXCI6IFwibG9naW4ubWljcm9zb2Z0b25saW5lLnVzXCJcclxufTtcclxuXHJcbi8qKlxyXG4gKiBAaGlkZGVuXHJcbiAqIFNTTyBUeXBlcyAtIGdlbmVyYXRlZCB0byBwb3B1bGF0ZSBoaW50c1xyXG4gKi9cclxuZXhwb3J0IGNvbnN0IFNTT1R5cGVzID0ge1xyXG4gICAgQUNDT1VOVDogXCJhY2NvdW50XCIsXHJcbiAgICBTSUQ6IFwic2lkXCIsXHJcbiAgICBMT0dJTl9ISU5UOiBcImxvZ2luX2hpbnRcIixcclxuICAgIElEX1RPS0VOOiBcImlkX3Rva2VuXCIsXHJcbiAgICBET01BSU5fSElOVDogXCJkb21haW5faGludFwiLFxyXG4gICAgT1JHQU5JWkFUSU9OUzogXCJvcmdhbml6YXRpb25zXCIsXHJcbiAgICBDT05TVU1FUlM6IFwiY29uc3VtZXJzXCIsXHJcbiAgICBBQ0NPVU5UX0lEOiBcImFjY291bnRJZGVudGlmaWVyXCIsXHJcbiAgICBIT01FQUNDT1VOVF9JRDogXCJob21lQWNjb3VudElkZW50aWZpZXJcIixcclxuICAgIExPR0lOX1JFUTogXCJsb2dpbl9yZXFcIixcclxuICAgIERPTUFJTl9SRVE6IFwiZG9tYWluX3JlcVwiXHJcbn07XHJcblxyXG4vKipcclxuICogQGhpZGRlblxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IEJsYWNrbGlzdGVkRVFQYXJhbXMgPSBbXHJcbiAgICBTU09UeXBlcy5TSUQsXHJcbiAgICBTU09UeXBlcy5MT0dJTl9ISU5UXHJcbl07XHJcblxyXG5leHBvcnQgdHlwZSBJbnRlcmFjdGlvblR5cGUgPSBcInJlZGlyZWN0SW50ZXJhY3Rpb25cIiB8IFwicG9wdXBJbnRlcmFjdGlvblwiO1xyXG5cclxuLyoqXHJcbiAqIHdlIGNvbnNpZGVyZWQgbWFraW5nIHRoaXMgXCJlbnVtXCIgaW4gdGhlIHJlcXVlc3QgaW5zdGVhZCBvZiBzdHJpbmcsIGhvd2V2ZXIgaXQgbG9va3MgbGlrZSB0aGUgYWxsb3dlZCBsaXN0IG9mXHJcbiAqIHByb21wdCB2YWx1ZXMga2VwdCBjaGFuZ2luZyBvdmVyIHBhc3QgY291cGxlIG9mIHllYXJzLiBUaGVyZSBhcmUgc29tZSB1bmRvY3VtZW50ZWQgcHJvbXB0IHZhbHVlcyBmb3Igc29tZVxyXG4gKiBpbnRlcm5hbCBwYXJ0bmVycyB0b28sIGhlbmNlIHRoZSBjaG9pY2Ugb2YgZ2VuZXJpYyBcInN0cmluZ1wiIHR5cGUgaW5zdGVhZCBvZiB0aGUgXCJlbnVtXCJcclxuICogQGhpZGRlblxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IFByb21wdFN0YXRlID0ge1xyXG4gICAgTE9HSU46IFwibG9naW5cIixcclxuICAgIFNFTEVDVF9BQ0NPVU5UOiBcInNlbGVjdF9hY2NvdW50XCIsXHJcbiAgICBDT05TRU5UOiBcImNvbnNlbnRcIixcclxuICAgIE5PTkU6IFwibm9uZVwiLFxyXG59O1xyXG5cclxuLyoqXHJcbiAqIE1TQUwgSlMgTGlicmFyeSBWZXJzaW9uXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gbGlicmFyeVZlcnNpb24oKTogc3RyaW5nIHtcclxuICAgIHJldHVybiBcIjEuMi4wLWJldGEuMFwiO1xyXG59XHJcbiIsIi8qXG4gKiBDb3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cbiAqL1xuXG4vKipcbiAqIEBoaWRkZW5cbiAqL1xuZXhwb3J0IGNsYXNzIENyeXB0b1V0aWxzIHtcblxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYSBuZXcgcmFuZG9tIEdVSUQgLSB1c2VkIHRvIHBvcHVsYXRlIHN0YXRlP1xuICAgICAqIEByZXR1cm5zIHN0cmluZyAoR1VJRClcbiAgICAgKi9cbiAgICBzdGF0aWMgY3JlYXRlTmV3R3VpZCgpOiBzdHJpbmcge1xuICAgICAgICAvKlxuICAgICAgICAgKiBSRkM0MTIyOiBUaGUgdmVyc2lvbiA0IFVVSUQgaXMgbWVhbnQgZm9yIGdlbmVyYXRpbmcgVVVJRHMgZnJvbSB0cnVseS1yYW5kb20gb3JcbiAgICAgICAgICogcHNldWRvLXJhbmRvbSBudW1iZXJzLlxuICAgICAgICAgKiBUaGUgYWxnb3JpdGhtIGlzIGFzIGZvbGxvd3M6XG4gICAgICAgICAqICAgICBTZXQgdGhlIHR3byBtb3N0IHNpZ25pZmljYW50IGJpdHMgKGJpdHMgNiBhbmQgNykgb2YgdGhlXG4gICAgICAgICAqICAgICAgICBjbG9ja19zZXFfaGlfYW5kX3Jlc2VydmVkIHRvIHplcm8gYW5kIG9uZSwgcmVzcGVjdGl2ZWx5LlxuICAgICAgICAgKiAgICAgU2V0IHRoZSBmb3VyIG1vc3Qgc2lnbmlmaWNhbnQgYml0cyAoYml0cyAxMiB0aHJvdWdoIDE1KSBvZiB0aGVcbiAgICAgICAgICogICAgICAgIHRpbWVfaGlfYW5kX3ZlcnNpb24gZmllbGQgdG8gdGhlIDQtYml0IHZlcnNpb24gbnVtYmVyIGZyb21cbiAgICAgICAgICogICAgICAgIFNlY3Rpb24gNC4xLjMuIFZlcnNpb240XG4gICAgICAgICAqICAgICBTZXQgYWxsIHRoZSBvdGhlciBiaXRzIHRvIHJhbmRvbWx5IChvciBwc2V1ZG8tcmFuZG9tbHkpIGNob3NlblxuICAgICAgICAgKiAgICAgdmFsdWVzLlxuICAgICAgICAgKiBVVUlEICAgICAgICAgICAgICAgICAgID0gdGltZS1sb3cgXCItXCIgdGltZS1taWQgXCItXCJ0aW1lLWhpZ2gtYW5kLXZlcnNpb24gXCItXCJjbG9jay1zZXEtcmVzZXJ2ZWQgYW5kIGxvdygyaGV4T2N0ZXQpXCItXCIgbm9kZVxuICAgICAgICAgKiB0aW1lLWxvdyAgICAgICAgICAgICAgID0gNGhleE9jdGV0XG4gICAgICAgICAqIHRpbWUtbWlkICAgICAgICAgICAgICAgPSAyaGV4T2N0ZXRcbiAgICAgICAgICogdGltZS1oaWdoLWFuZC12ZXJzaW9uICA9IDJoZXhPY3RldFxuICAgICAgICAgKiBjbG9jay1zZXEtYW5kLXJlc2VydmVkID0gaGV4T2N0ZXQ6XG4gICAgICAgICAqIGNsb2NrLXNlcS1sb3cgICAgICAgICAgPSBoZXhPY3RldFxuICAgICAgICAgKiBub2RlICAgICAgICAgICAgICAgICAgID0gNmhleE9jdGV0XG4gICAgICAgICAqIEZvcm1hdDogeHh4eHh4eHgteHh4eC00eHh4LXl4eHgteHh4eHh4eHh4eHh4XG4gICAgICAgICAqIHkgY291bGQgYmUgMTAwMCwgMTAwMSwgMTAxMCwgMTAxMSBzaW5jZSBtb3N0IHNpZ25pZmljYW50IHR3byBiaXRzIG5lZWRzIHRvIGJlIDEwXG4gICAgICAgICAqIHkgdmFsdWVzIGFyZSA4LCA5LCBBLCBCXG4gICAgICAgICAqL1xuXG4gICAgICAgIGNvbnN0IGNyeXB0b09iajogQ3J5cHRvID0gd2luZG93LmNyeXB0bzsgLy8gZm9yIElFIDExXG4gICAgICAgIGlmIChjcnlwdG9PYmogJiYgY3J5cHRvT2JqLmdldFJhbmRvbVZhbHVlcykge1xuICAgICAgICAgICAgY29uc3QgYnVmZmVyOiBVaW50OEFycmF5ID0gbmV3IFVpbnQ4QXJyYXkoMTYpO1xuICAgICAgICAgICAgY3J5cHRvT2JqLmdldFJhbmRvbVZhbHVlcyhidWZmZXIpO1xuXG4gICAgICAgICAgICAvLyBidWZmZXJbNl0gYW5kIGJ1ZmZlcls3XSByZXByZXNlbnRzIHRoZSB0aW1lX2hpX2FuZF92ZXJzaW9uIGZpZWxkLiBXZSB3aWxsIHNldCB0aGUgZm91ciBtb3N0IHNpZ25pZmljYW50IGJpdHMgKDQgdGhyb3VnaCA3KSBvZiBidWZmZXJbNl0gdG8gcmVwcmVzZW50IGRlY2ltYWwgbnVtYmVyIDQgKFVVSUQgdmVyc2lvbiBudW1iZXIpLlxuICAgICAgICAgICAgYnVmZmVyWzZdIHw9IDB4NDA7IC8vIGJ1ZmZlcls2XSB8IDAxMDAwMDAwIHdpbGwgc2V0IHRoZSA2IGJpdCB0byAxLlxuICAgICAgICAgICAgYnVmZmVyWzZdICY9IDB4NGY7IC8vIGJ1ZmZlcls2XSAmIDAxMDAxMTExIHdpbGwgc2V0IHRoZSA0LCA1LCBhbmQgNyBiaXQgdG8gMCBzdWNoIHRoYXQgYml0cyA0LTcgPT0gMDEwMCA9IFwiNFwiLlxuXG4gICAgICAgICAgICAvLyBidWZmZXJbOF0gcmVwcmVzZW50cyB0aGUgY2xvY2tfc2VxX2hpX2FuZF9yZXNlcnZlZCBmaWVsZC4gV2Ugd2lsbCBzZXQgdGhlIHR3byBtb3N0IHNpZ25pZmljYW50IGJpdHMgKDYgYW5kIDcpIG9mIHRoZSBjbG9ja19zZXFfaGlfYW5kX3Jlc2VydmVkIHRvIHplcm8gYW5kIG9uZSwgcmVzcGVjdGl2ZWx5LlxuICAgICAgICAgICAgYnVmZmVyWzhdIHw9IDB4ODA7IC8vIGJ1ZmZlcls4XSB8IDEwMDAwMDAwIHdpbGwgc2V0IHRoZSA3IGJpdCB0byAxLlxuICAgICAgICAgICAgYnVmZmVyWzhdICY9IDB4YmY7IC8vIGJ1ZmZlcls4XSAmIDEwMTExMTExIHdpbGwgc2V0IHRoZSA2IGJpdCB0byAwLlxuXG4gICAgICAgICAgICByZXR1cm4gQ3J5cHRvVXRpbHMuZGVjaW1hbFRvSGV4KGJ1ZmZlclswXSkgKyBDcnlwdG9VdGlscy5kZWNpbWFsVG9IZXgoYnVmZmVyWzFdKVxuICAgICAgICAgICAgKyBDcnlwdG9VdGlscy5kZWNpbWFsVG9IZXgoYnVmZmVyWzJdKSArIENyeXB0b1V0aWxzLmRlY2ltYWxUb0hleChidWZmZXJbM10pXG4gICAgICAgICAgICArIFwiLVwiICsgQ3J5cHRvVXRpbHMuZGVjaW1hbFRvSGV4KGJ1ZmZlcls0XSkgKyBDcnlwdG9VdGlscy5kZWNpbWFsVG9IZXgoYnVmZmVyWzVdKVxuICAgICAgICAgICAgKyBcIi1cIiArIENyeXB0b1V0aWxzLmRlY2ltYWxUb0hleChidWZmZXJbNl0pICsgQ3J5cHRvVXRpbHMuZGVjaW1hbFRvSGV4KGJ1ZmZlcls3XSlcbiAgICAgICAgICAgICsgXCItXCIgKyBDcnlwdG9VdGlscy5kZWNpbWFsVG9IZXgoYnVmZmVyWzhdKSArIENyeXB0b1V0aWxzLmRlY2ltYWxUb0hleChidWZmZXJbOV0pXG4gICAgICAgICAgICArIFwiLVwiICsgQ3J5cHRvVXRpbHMuZGVjaW1hbFRvSGV4KGJ1ZmZlclsxMF0pICsgQ3J5cHRvVXRpbHMuZGVjaW1hbFRvSGV4KGJ1ZmZlclsxMV0pXG4gICAgICAgICAgICArIENyeXB0b1V0aWxzLmRlY2ltYWxUb0hleChidWZmZXJbMTJdKSArIENyeXB0b1V0aWxzLmRlY2ltYWxUb0hleChidWZmZXJbMTNdKVxuICAgICAgICAgICAgKyBDcnlwdG9VdGlscy5kZWNpbWFsVG9IZXgoYnVmZmVyWzE0XSkgKyBDcnlwdG9VdGlscy5kZWNpbWFsVG9IZXgoYnVmZmVyWzE1XSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjb25zdCBndWlkSG9sZGVyOiBzdHJpbmcgPSBcInh4eHh4eHh4LXh4eHgtNHh4eC15eHh4LXh4eHh4eHh4eHh4eFwiO1xuICAgICAgICAgICAgY29uc3QgaGV4OiBzdHJpbmcgPSBcIjAxMjM0NTY3ODlhYmNkZWZcIjtcbiAgICAgICAgICAgIGxldCByOiBudW1iZXIgPSAwO1xuICAgICAgICAgICAgbGV0IGd1aWRSZXNwb25zZTogc3RyaW5nID0gXCJcIjtcbiAgICAgICAgICAgIGZvciAobGV0IGk6IG51bWJlciA9IDA7IGkgPCAzNjsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaWYgKGd1aWRIb2xkZXJbaV0gIT09IFwiLVwiICYmIGd1aWRIb2xkZXJbaV0gIT09IFwiNFwiKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGVhY2ggeCBhbmQgeSBuZWVkcyB0byBiZSByYW5kb21cbiAgICAgICAgICAgICAgICAgICAgciA9IE1hdGgucmFuZG9tKCkgICogMTYgfCAwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoZ3VpZEhvbGRlcltpXSA9PT0gXCJ4XCIpIHtcbiAgICAgICAgICAgICAgICAgICAgZ3VpZFJlc3BvbnNlICs9IGhleFtyXTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGd1aWRIb2xkZXJbaV0gPT09IFwieVwiKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGNsb2NrLXNlcS1hbmQtcmVzZXJ2ZWQgZmlyc3QgaGV4IGlzIGZpbHRlcmVkIGFuZCByZW1haW5pbmcgaGV4IHZhbHVlcyBhcmUgcmFuZG9tXG4gICAgICAgICAgICAgICAgICAgIHIgJj0gMHgzOyAvLyBiaXQgYW5kIHdpdGggMDAxMSB0byBzZXQgcG9zIDIgdG8gemVybyA/MD8/XG4gICAgICAgICAgICAgICAgICAgIHIgfD0gMHg4OyAvLyBzZXQgcG9zIDMgdG8gMSBhcyAxPz8/XG4gICAgICAgICAgICAgICAgICAgIGd1aWRSZXNwb25zZSArPSBoZXhbcl07XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgZ3VpZFJlc3BvbnNlICs9IGd1aWRIb2xkZXJbaV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGd1aWRSZXNwb25zZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIERlY2ltYWwgdG8gSGV4XG4gICAgICpcbiAgICAgKiBAcGFyYW0gbnVtXG4gICAgICovXG4gICAgc3RhdGljIGRlY2ltYWxUb0hleChudW06IG51bWJlcik6IHN0cmluZyB7XG4gICAgICAgIGxldCBoZXg6IHN0cmluZyA9IG51bS50b1N0cmluZygxNik7XG4gICAgICAgIHdoaWxlIChoZXgubGVuZ3RoIDwgMikge1xuICAgICAgICAgICAgaGV4ID0gXCIwXCIgKyBoZXg7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGhleDtcbiAgICB9XG4gICAgXG4gICAgLy8gU2VlOiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvV2luZG93QmFzZTY0L0Jhc2U2NF9lbmNvZGluZ19hbmRfZGVjb2RpbmcjU29sdXRpb25fNF8lRTIlODAlOTNfZXNjYXBpbmdfdGhlX3N0cmluZ19iZWZvcmVfZW5jb2RpbmdfaXRcblxuICAgIC8qKlxuICAgICAqIGVuY29kaW5nIHN0cmluZyB0byBiYXNlNjQgLSBwbGF0Zm9ybSBzcGVjaWZpYyBjaGVja1xuICAgICAqXG4gICAgICogQHBhcmFtIGlucHV0XG4gICAgICovXG4gICAgc3RhdGljIGJhc2U2NEVuY29kZShpbnB1dDogc3RyaW5nKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIGJ0b2EoZW5jb2RlVVJJQ29tcG9uZW50KGlucHV0KS5yZXBsYWNlKC8lKFswLTlBLUZdezJ9KS9nLFxuICAgICAgICAgICAgZnVuY3Rpb24gdG9Tb2xpZEJ5dGVzKG1hdGNoLCBwMSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBTdHJpbmcuZnJvbUNoYXJDb2RlKE51bWJlcihcIjB4XCIgKyBwMSkpO1xuICAgICAgICAgICAgfSkpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIGRlY29kaW5nIGJhc2U2NCB0b2tlbiAtIHBsYXRmb3JtIHNwZWNpZmljIGNoZWNrXG4gICAgICpcbiAgICAgKiBAcGFyYW0gYmFzZTY0SWRUb2tlblxuICAgICAqL1xuICAgIHN0YXRpYyBiYXNlNjREZWNvZGUoaW5wdXQ6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiBkZWNvZGVVUklDb21wb25lbnQoYXRvYihpbnB1dCkuc3BsaXQoXCJcIikubWFwKGZ1bmN0aW9uKGMpIHtcbiAgICAgICAgICAgIHJldHVybiBcIiVcIiArIChcIjAwXCIgKyBjLmNoYXJDb2RlQXQoMCkudG9TdHJpbmcoMTYpKS5zbGljZSgtMik7XG4gICAgICAgIH0pLmpvaW4oXCJcIikpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIGRlc2VyaWFsaXplIGEgc3RyaW5nXG4gICAgICpcbiAgICAgKiBAcGFyYW0gcXVlcnlcbiAgICAgKi9cbiAgICBzdGF0aWMgZGVzZXJpYWxpemUocXVlcnk6IHN0cmluZyk6IGFueSB7XG4gICAgICAgIGxldCBtYXRjaDogQXJyYXk8c3RyaW5nPjsgLy8gUmVnZXggZm9yIHJlcGxhY2luZyBhZGRpdGlvbiBzeW1ib2wgd2l0aCBhIHNwYWNlXG4gICAgICAgIGNvbnN0IHBsID0gL1xcKy9nO1xuICAgICAgICBjb25zdCBzZWFyY2ggPSAvKFteJj1dKyk9KFteJl0qKS9nO1xuICAgICAgICBjb25zdCBkZWNvZGUgPSAoczogc3RyaW5nKSA9PiBkZWNvZGVVUklDb21wb25lbnQocy5yZXBsYWNlKHBsLCBcIiBcIikpO1xuICAgICAgICBjb25zdCBvYmo6IHt9ID0ge307XG4gICAgICAgIG1hdGNoID0gc2VhcmNoLmV4ZWMocXVlcnkpO1xuICAgICAgICB3aGlsZSAobWF0Y2gpIHtcbiAgICAgICAgICAgIG9ialtkZWNvZGUobWF0Y2hbMV0pXSA9IGRlY29kZShtYXRjaFsyXSk7XG4gICAgICAgICAgICBtYXRjaCA9IHNlYXJjaC5leGVjKHF1ZXJ5KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gb2JqO1xuICAgIH1cblxufVxuIiwiLypcbiAqIENvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxuICovXG5cbmltcG9ydCB7IElVcmkgfSBmcm9tIFwiLi4vSVVyaVwiO1xuaW1wb3J0IHsgQ29uc3RhbnRzLCBTU09UeXBlcyB9IGZyb20gXCIuL0NvbnN0YW50c1wiO1xuaW1wb3J0IHsgU2VydmVyUmVxdWVzdFBhcmFtZXRlcnMgfSBmcm9tIFwiLi4vU2VydmVyUmVxdWVzdFBhcmFtZXRlcnNcIjtcbmltcG9ydCB7IFNjb3BlU2V0IH0gZnJvbSBcIi4uL1Njb3BlU2V0XCI7XG5pbXBvcnQgeyBTdHJpbmdVdGlscyB9IGZyb20gXCIuL1N0cmluZ1V0aWxzXCI7XG5pbXBvcnQgeyBDcnlwdG9VdGlscyB9IGZyb20gXCIuL0NyeXB0b1V0aWxzXCI7XG5cbi8qKlxuICogQGhpZGRlblxuICovXG5leHBvcnQgY2xhc3MgVXJsVXRpbHMge1xuXG4gICAgLyoqXG4gICAgICogZ2VuZXJhdGVzIHRoZSBVUkwgd2l0aCBRdWVyeVN0cmluZyBQYXJhbWV0ZXJzXG4gICAgICogQHBhcmFtIHNjb3Blc1xuICAgICAqL1xuICAgIHN0YXRpYyBjcmVhdGVOYXZpZ2F0ZVVybChzZXJ2ZXJSZXF1ZXN0UGFyYW1zOiBTZXJ2ZXJSZXF1ZXN0UGFyYW1ldGVycyk6IHN0cmluZyB7XG4gICAgICAgIGNvbnN0IHN0ciA9IHRoaXMuY3JlYXRlTmF2aWdhdGlvblVybFN0cmluZyhzZXJ2ZXJSZXF1ZXN0UGFyYW1zKTtcbiAgICAgICAgbGV0IGF1dGhFbmRwb2ludDogc3RyaW5nID0gc2VydmVyUmVxdWVzdFBhcmFtcy5hdXRob3JpdHlJbnN0YW5jZS5BdXRob3JpemF0aW9uRW5kcG9pbnQ7XG4gICAgICAgIC8vIGlmIHRoZSBlbmRwb2ludCBhbHJlYWR5IGhhcyBxdWVyeXBhcmFtcywgbGV0cyBhZGQgdG8gaXQsIG90aGVyd2lzZSBhZGQgdGhlIGZpcnN0IG9uZVxuICAgICAgICBpZiAoYXV0aEVuZHBvaW50LmluZGV4T2YoXCI/XCIpIDwgMCkge1xuICAgICAgICAgICAgYXV0aEVuZHBvaW50ICs9IFwiP1wiO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYXV0aEVuZHBvaW50ICs9IFwiJlwiO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgcmVxdWVzdFVybDogc3RyaW5nID0gYCR7YXV0aEVuZHBvaW50fSR7c3RyLmpvaW4oXCImXCIpfWA7XG4gICAgICAgIHJldHVybiByZXF1ZXN0VXJsO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdlbmVyYXRlIHRoZSBhcnJheSBvZiBhbGwgUXVlcnlTdHJpbmdQYXJhbXMgdG8gYmUgc2VudCB0byB0aGUgc2VydmVyXG4gICAgICogQHBhcmFtIHNjb3Blc1xuICAgICAqL1xuICAgIHN0YXRpYyBjcmVhdGVOYXZpZ2F0aW9uVXJsU3RyaW5nKHNlcnZlclJlcXVlc3RQYXJhbXM6IFNlcnZlclJlcXVlc3RQYXJhbWV0ZXJzKTogQXJyYXk8c3RyaW5nPiB7XG4gICAgICAgIGNvbnN0IHNjb3BlcyA9IHNlcnZlclJlcXVlc3RQYXJhbXMuc2NvcGVzO1xuXG4gICAgICAgIGlmIChzY29wZXMuaW5kZXhPZihzZXJ2ZXJSZXF1ZXN0UGFyYW1zLmNsaWVudElkKSA9PT0gLTEpIHtcbiAgICAgICAgICAgIHNjb3Blcy5wdXNoKHNlcnZlclJlcXVlc3RQYXJhbXMuY2xpZW50SWQpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHN0cjogQXJyYXk8c3RyaW5nPiA9IFtdO1xuICAgICAgICBzdHIucHVzaChcInJlc3BvbnNlX3R5cGU9XCIgKyBzZXJ2ZXJSZXF1ZXN0UGFyYW1zLnJlc3BvbnNlVHlwZSk7XG5cbiAgICAgICAgdGhpcy50cmFuc2xhdGVjbGllbnRJZFVzZWRJblNjb3BlKHNjb3Blcywgc2VydmVyUmVxdWVzdFBhcmFtcy5jbGllbnRJZCk7XG4gICAgICAgIHN0ci5wdXNoKFwic2NvcGU9XCIgKyBlbmNvZGVVUklDb21wb25lbnQoU2NvcGVTZXQucGFyc2VTY29wZShzY29wZXMpKSk7XG4gICAgICAgIHN0ci5wdXNoKFwiY2xpZW50X2lkPVwiICsgZW5jb2RlVVJJQ29tcG9uZW50KHNlcnZlclJlcXVlc3RQYXJhbXMuY2xpZW50SWQpKTtcbiAgICAgICAgc3RyLnB1c2goXCJyZWRpcmVjdF91cmk9XCIgKyBlbmNvZGVVUklDb21wb25lbnQoc2VydmVyUmVxdWVzdFBhcmFtcy5yZWRpcmVjdFVyaSkpO1xuXG4gICAgICAgIHN0ci5wdXNoKFwic3RhdGU9XCIgKyBlbmNvZGVVUklDb21wb25lbnQoc2VydmVyUmVxdWVzdFBhcmFtcy5zdGF0ZSkpO1xuICAgICAgICBzdHIucHVzaChcIm5vbmNlPVwiICsgZW5jb2RlVVJJQ29tcG9uZW50KHNlcnZlclJlcXVlc3RQYXJhbXMubm9uY2UpKTtcblxuICAgICAgICBzdHIucHVzaChcImNsaWVudF9pbmZvPTFcIik7XG4gICAgICAgIHN0ci5wdXNoKGB4LWNsaWVudC1TS1U9JHtzZXJ2ZXJSZXF1ZXN0UGFyYW1zLnhDbGllbnRTa3V9YCk7XG4gICAgICAgIHN0ci5wdXNoKGB4LWNsaWVudC1WZXI9JHtzZXJ2ZXJSZXF1ZXN0UGFyYW1zLnhDbGllbnRWZXJ9YCk7XG4gICAgICAgIGlmIChzZXJ2ZXJSZXF1ZXN0UGFyYW1zLnByb21wdFZhbHVlKSB7XG4gICAgICAgICAgICBzdHIucHVzaChcInByb21wdD1cIiArIGVuY29kZVVSSUNvbXBvbmVudChzZXJ2ZXJSZXF1ZXN0UGFyYW1zLnByb21wdFZhbHVlKSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoc2VydmVyUmVxdWVzdFBhcmFtcy5jbGFpbXNWYWx1ZSkge1xuICAgICAgICAgICAgc3RyLnB1c2goXCJjbGFpbXM9XCIgKyBlbmNvZGVVUklDb21wb25lbnQoc2VydmVyUmVxdWVzdFBhcmFtcy5jbGFpbXNWYWx1ZSkpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHNlcnZlclJlcXVlc3RQYXJhbXMucXVlcnlQYXJhbWV0ZXJzKSB7XG4gICAgICAgICAgICBzdHIucHVzaChzZXJ2ZXJSZXF1ZXN0UGFyYW1zLnF1ZXJ5UGFyYW1ldGVycyk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoc2VydmVyUmVxdWVzdFBhcmFtcy5leHRyYVF1ZXJ5UGFyYW1ldGVycykge1xuICAgICAgICAgICAgc3RyLnB1c2goc2VydmVyUmVxdWVzdFBhcmFtcy5leHRyYVF1ZXJ5UGFyYW1ldGVycyk7XG4gICAgICAgIH1cblxuICAgICAgICBzdHIucHVzaChcImNsaWVudC1yZXF1ZXN0LWlkPVwiICsgZW5jb2RlVVJJQ29tcG9uZW50KHNlcnZlclJlcXVlc3RQYXJhbXMuY29ycmVsYXRpb25JZCkpO1xuICAgICAgICByZXR1cm4gc3RyO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIGFwcGVuZCB0aGUgcmVxdWlyZWQgc2NvcGVzOiBodHRwczovL29wZW5pZC5uZXQvc3BlY3Mvb3BlbmlkLWNvbm5lY3QtYmFzaWMtMV8wLmh0bWwjU2NvcGVzXG4gICAgICogQHBhcmFtIHNjb3Blc1xuICAgICAqL1xuICAgIHByaXZhdGUgc3RhdGljIHRyYW5zbGF0ZWNsaWVudElkVXNlZEluU2NvcGUoc2NvcGVzOiBBcnJheTxzdHJpbmc+LCBjbGllbnRJZDogc3RyaW5nKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IGNsaWVudElkSW5kZXg6IG51bWJlciA9IHNjb3Blcy5pbmRleE9mKGNsaWVudElkKTtcbiAgICAgICAgaWYgKGNsaWVudElkSW5kZXggPj0gMCkge1xuICAgICAgICAgICAgc2NvcGVzLnNwbGljZShjbGllbnRJZEluZGV4LCAxKTtcbiAgICAgICAgICAgIGlmIChzY29wZXMuaW5kZXhPZihcIm9wZW5pZFwiKSA9PT0gLTEpIHtcbiAgICAgICAgICAgICAgICBzY29wZXMucHVzaChcIm9wZW5pZFwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChzY29wZXMuaW5kZXhPZihcInByb2ZpbGVcIikgPT09IC0xKSB7XG4gICAgICAgICAgICAgICAgc2NvcGVzLnB1c2goXCJwcm9maWxlXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyBjdXJyZW50IHdpbmRvdyBVUkwgYXMgcmVkaXJlY3QgdXJpXG4gICAgICovXG4gICAgc3RhdGljIGdldERlZmF1bHRSZWRpcmVjdFVyaSgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gd2luZG93LmxvY2F0aW9uLmhyZWYuc3BsaXQoXCI/XCIpWzBdLnNwbGl0KFwiI1wiKVswXTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHaXZlbiBhIHVybCBsaWtlIGh0dHBzOi8vYTpiL2NvbW1vbi9kP2U9ZiNnLCBhbmQgYSB0ZW5hbnRJZCwgcmV0dXJucyBodHRwczovL2E6Yi90ZW5hbnRJZC9kXG4gICAgICogQHBhcmFtIGhyZWYgVGhlIHVybFxuICAgICAqIEBwYXJhbSB0ZW5hbnRJZCBUaGUgdGVuYW50IGlkIHRvIHJlcGxhY2VcbiAgICAgKi9cbiAgICBzdGF0aWMgcmVwbGFjZVRlbmFudFBhdGgodXJsOiBzdHJpbmcsIHRlbmFudElkOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgICAgICB1cmwgPSB1cmwudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgY29uc3QgdXJsT2JqZWN0ID0gdGhpcy5HZXRVcmxDb21wb25lbnRzKHVybCk7XG4gICAgICAgIGNvbnN0IHBhdGhBcnJheSA9IHVybE9iamVjdC5QYXRoU2VnbWVudHM7XG4gICAgICAgIGlmICh0ZW5hbnRJZCAmJiAocGF0aEFycmF5Lmxlbmd0aCAhPT0gMCAmJiAocGF0aEFycmF5WzBdID09PSBDb25zdGFudHMuY29tbW9uIHx8IHBhdGhBcnJheVswXSA9PT0gU1NPVHlwZXMuT1JHQU5JWkFUSU9OUykpKSB7XG4gICAgICAgICAgICBwYXRoQXJyYXlbMF0gPSB0ZW5hbnRJZDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5jb25zdHJ1Y3RBdXRob3JpdHlVcmlGcm9tT2JqZWN0KHVybE9iamVjdCwgcGF0aEFycmF5KTtcbiAgICB9XG5cbiAgICBzdGF0aWMgY29uc3RydWN0QXV0aG9yaXR5VXJpRnJvbU9iamVjdCh1cmxPYmplY3Q6IElVcmksIHBhdGhBcnJheTogc3RyaW5nW10pIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuQ2Fub25pY2FsaXplVXJpKHVybE9iamVjdC5Qcm90b2NvbCArIFwiLy9cIiArIHVybE9iamVjdC5Ib3N0TmFtZUFuZFBvcnQgKyBcIi9cIiArIHBhdGhBcnJheS5qb2luKFwiL1wiKSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUGFyc2VzIG91dCB0aGUgY29tcG9uZW50cyBmcm9tIGEgdXJsIHN0cmluZy5cbiAgICAgKiBAcmV0dXJucyBBbiBvYmplY3Qgd2l0aCB0aGUgdmFyaW91cyBjb21wb25lbnRzLiBQbGVhc2UgY2FjaGUgdGhpcyB2YWx1ZSBpbnN0ZWQgb2YgY2FsbGluZyB0aGlzIG11bHRpcGxlIHRpbWVzIG9uIHRoZSBzYW1lIHVybC5cbiAgICAgKi9cbiAgICBzdGF0aWMgR2V0VXJsQ29tcG9uZW50cyh1cmw6IHN0cmluZyk6IElVcmkge1xuICAgICAgICBpZiAoIXVybCkge1xuICAgICAgICAgICAgdGhyb3cgXCJVcmwgcmVxdWlyZWRcIjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGh0dHBzOi8vZ2lzdC5naXRodWIuY29tL2N1cnRpc3ovMTExMzliMmNmY2FlZjRhMjYxZTBcbiAgICAgICAgY29uc3QgcmVnRXggPSBSZWdFeHAoXCJeKChbXjovPyNdKyk6KT8oLy8oW14vPyNdKikpPyhbXj8jXSopKFxcXFw/KFteI10qKSk/KCMoLiopKT9cIik7XG5cbiAgICAgICAgY29uc3QgbWF0Y2ggPSB1cmwubWF0Y2gocmVnRXgpO1xuXG4gICAgICAgIGlmICghbWF0Y2ggfHwgbWF0Y2gubGVuZ3RoIDwgNikge1xuICAgICAgICAgICAgdGhyb3cgXCJWYWxpZCB1cmwgcmVxdWlyZWRcIjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHVybENvbXBvbmVudHMgPSA8SVVyaT57XG4gICAgICAgICAgICBQcm90b2NvbDogbWF0Y2hbMV0sXG4gICAgICAgICAgICBIb3N0TmFtZUFuZFBvcnQ6IG1hdGNoWzRdLFxuICAgICAgICAgICAgQWJzb2x1dGVQYXRoOiBtYXRjaFs1XVxuICAgICAgICB9O1xuXG4gICAgICAgIGxldCBwYXRoU2VnbWVudHMgPSB1cmxDb21wb25lbnRzLkFic29sdXRlUGF0aC5zcGxpdChcIi9cIik7XG4gICAgICAgIHBhdGhTZWdtZW50cyA9IHBhdGhTZWdtZW50cy5maWx0ZXIoKHZhbCkgPT4gdmFsICYmIHZhbC5sZW5ndGggPiAwKTsgLy8gcmVtb3ZlIGVtcHR5IGVsZW1lbnRzXG4gICAgICAgIHVybENvbXBvbmVudHMuUGF0aFNlZ21lbnRzID0gcGF0aFNlZ21lbnRzO1xuICAgICAgICByZXR1cm4gdXJsQ29tcG9uZW50cztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHaXZlbiBhIHVybCBvciBwYXRoLCBhcHBlbmQgYSB0cmFpbGluZyBzbGFzaCBpZiBvbmUgZG9lc250IGV4aXN0XG4gICAgICpcbiAgICAgKiBAcGFyYW0gdXJsXG4gICAgICovXG4gICAgc3RhdGljIENhbm9uaWNhbGl6ZVVyaSh1cmw6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgICAgIGlmICh1cmwpIHtcbiAgICAgICAgICAgIHVybCA9IHVybC50b0xvd2VyQ2FzZSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHVybCAmJiAhVXJsVXRpbHMuZW5kc1dpdGgodXJsLCBcIi9cIikpIHtcbiAgICAgICAgICAgIHVybCArPSBcIi9cIjtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB1cmw7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2hlY2tzIHRvIHNlZSBpZiB0aGUgdXJsIGVuZHMgd2l0aCB0aGUgc3VmZml4XG4gICAgICogUmVxdWlyZWQgYmVjYXVzZSB3ZSBhcmUgY29tcGlsaW5nIGZvciBlczUgaW5zdGVhZCBvZiBlczZcbiAgICAgKiBAcGFyYW0gdXJsXG4gICAgICogQHBhcmFtIHN0clxuICAgICAqL1xuICAgIC8vIFRPRE86IFJlbmFtZSB0aGlzLCBub3QgY2xlYXIgd2hhdCBpdCBpcyBzdXBwb3NlZCB0byBkb1xuICAgIHN0YXRpYyBlbmRzV2l0aCh1cmw6IHN0cmluZywgc3VmZml4OiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICAgICAgaWYgKCF1cmwgfHwgIXN1ZmZpeCkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHVybC5pbmRleE9mKHN1ZmZpeCwgdXJsLmxlbmd0aCAtIHN1ZmZpeC5sZW5ndGgpICE9PSAtMTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBVdGlscyBmdW5jdGlvbiB0byByZW1vdmUgdGhlIGxvZ2luX2hpbnQgYW5kIGRvbWFpbl9oaW50IGZyb20gdGhlIGkvcCBleHRyYVF1ZXJ5UGFyYW1ldGVyc1xuICAgICAqIEBwYXJhbSB1cmxcbiAgICAgKiBAcGFyYW0gbmFtZVxuICAgICAqL1xuICAgIHN0YXRpYyB1cmxSZW1vdmVRdWVyeVN0cmluZ1BhcmFtZXRlcih1cmw6IHN0cmluZywgbmFtZTogc3RyaW5nKTogc3RyaW5nIHtcbiAgICAgICAgaWYgKFN0cmluZ1V0aWxzLmlzRW1wdHkodXJsKSkge1xuICAgICAgICAgICAgcmV0dXJuIHVybDtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCByZWdleCA9IG5ldyBSZWdFeHAoXCIoXFxcXCZcIiArIG5hbWUgKyBcIj0pW15cXCZdK1wiKTtcbiAgICAgICAgdXJsID0gdXJsLnJlcGxhY2UocmVnZXgsIFwiXCIpO1xuICAgICAgICAvLyBuYW1lPXZhbHVlJlxuICAgICAgICByZWdleCA9IG5ldyBSZWdFeHAoXCIoXCIgKyBuYW1lICsgXCI9KVteXFwmXSsmXCIpO1xuICAgICAgICB1cmwgPSB1cmwucmVwbGFjZShyZWdleCwgXCJcIik7XG4gICAgICAgIC8vIG5hbWU9dmFsdWVcbiAgICAgICAgcmVnZXggPSBuZXcgUmVnRXhwKFwiKFwiICsgbmFtZSArIFwiPSlbXlxcJl0rXCIpO1xuICAgICAgICB1cmwgPSB1cmwucmVwbGFjZShyZWdleCwgXCJcIik7XG4gICAgICAgIHJldHVybiB1cmw7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqIEBpZ25vcmVcbiAgICAgKlxuICAgICAqIFJldHVybnMgdGhlIGFuY2hvciBwYXJ0KCMpIG9mIHRoZSBVUkxcbiAgICAgKi9cbiAgICBzdGF0aWMgZ2V0SGFzaEZyb21VcmwodXJsU3RyaW5nT3JGcmFnbWVudDogc3RyaW5nKTogc3RyaW5nIHtcbiAgICAgICAgY29uc3QgaGFzaEluZGV4MSA9IHVybFN0cmluZ09yRnJhZ21lbnQuaW5kZXhPZihcIiNcIik7XG4gICAgICAgIGNvbnN0IGhhc2hJbmRleDIgPSB1cmxTdHJpbmdPckZyYWdtZW50LmluZGV4T2YoXCIjL1wiKTtcbiAgICAgICAgaWYgKGhhc2hJbmRleDIgPiAtMSkge1xuICAgICAgICAgICAgcmV0dXJuIHVybFN0cmluZ09yRnJhZ21lbnQuc3Vic3RyaW5nKGhhc2hJbmRleDIgKyAyKTtcbiAgICAgICAgfSBlbHNlIGlmIChoYXNoSW5kZXgxID4gLTEpIHtcbiAgICAgICAgICAgIHJldHVybiB1cmxTdHJpbmdPckZyYWdtZW50LnN1YnN0cmluZyhoYXNoSW5kZXgxICsgMSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHVybFN0cmluZ09yRnJhZ21lbnQ7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqIENoZWNrIGlmIHRoZSB1cmwgY29udGFpbnMgYSBoYXNoIHdpdGgga25vd24gcHJvcGVydGllc1xuICAgICAqIEBpZ25vcmVcbiAgICAgKi9cbiAgICBzdGF0aWMgdXJsQ29udGFpbnNIYXNoKHVybFN0cmluZzogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgICAgIGNvbnN0IHBhcmFtZXRlcnMgPSBVcmxVdGlscy5kZXNlcmlhbGl6ZUhhc2godXJsU3RyaW5nKTtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIHBhcmFtZXRlcnMuaGFzT3duUHJvcGVydHkoQ29uc3RhbnRzLmVycm9yRGVzY3JpcHRpb24pIHx8XG4gICAgICAgICAgICBwYXJhbWV0ZXJzLmhhc093blByb3BlcnR5KENvbnN0YW50cy5lcnJvcikgfHxcbiAgICAgICAgICAgIHBhcmFtZXRlcnMuaGFzT3duUHJvcGVydHkoQ29uc3RhbnRzLmFjY2Vzc1Rva2VuKSB8fFxuICAgICAgICAgICAgcGFyYW1ldGVycy5oYXNPd25Qcm9wZXJ0eShDb25zdGFudHMuaWRUb2tlbilcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICogUmV0dXJucyBkZXNlcmlhbGl6ZWQgcG9ydGlvbiBvZiBVUkwgaGFzaFxuICAgICAqIEBpZ25vcmVcbiAgICAgKi9cbiAgICBzdGF0aWMgZGVzZXJpYWxpemVIYXNoKHVybEZyYWdtZW50OiBzdHJpbmcpIHtcbiAgICAgICAgY29uc3QgaGFzaCA9IFVybFV0aWxzLmdldEhhc2hGcm9tVXJsKHVybEZyYWdtZW50KTtcbiAgICAgICAgcmV0dXJuIENyeXB0b1V0aWxzLmRlc2VyaWFsaXplKGhhc2gpO1xuICAgIH1cbn1cbiIsIi8qXG4gKiBDb3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cbiAqL1xuXG5pbXBvcnQgeyBDb25zdGFudHMgfSBmcm9tIFwiLi4vdXRpbHMvQ29uc3RhbnRzXCI7XG5pbXBvcnQgeyBDbGllbnRBdXRoRXJyb3IgfSBmcm9tIFwiLi9DbGllbnRBdXRoRXJyb3JcIjtcbmltcG9ydCB7IFRlbGVtZXRyeU9wdGlvbnMgfSBmcm9tIFwiLi4vQ29uZmlndXJhdGlvblwiO1xuXG5leHBvcnQgY29uc3QgQ2xpZW50Q29uZmlndXJhdGlvbkVycm9yTWVzc2FnZSA9IHtcbiAgICBjb25maWd1cmF0aW9uTm90U2V0OiB7XG4gICAgICAgIGNvZGU6IFwibm9fY29uZmlnX3NldFwiLFxuICAgICAgICBkZXNjOiBcIkNvbmZpZ3VyYXRpb24gaGFzIG5vdCBiZWVuIHNldC4gUGxlYXNlIGNhbGwgdGhlIFVzZXJBZ2VudEFwcGxpY2F0aW9uIGNvbnN0cnVjdG9yIHdpdGggYSB2YWxpZCBDb25maWd1cmF0aW9uIG9iamVjdC5cIlxuICAgIH0sXG4gICAgaW52YWxpZENhY2hlTG9jYXRpb246IHtcbiAgICAgICAgY29kZTogXCJpbnZhbGlkX2NhY2hlX2xvY2F0aW9uXCIsXG4gICAgICAgIGRlc2M6IFwiVGhlIGNhY2hlIGxvY2F0aW9uIHByb3ZpZGVkIGlzIG5vdCB2YWxpZC5cIlxuICAgIH0sXG4gICAgbm9TdG9yYWdlU3VwcG9ydGVkOiB7XG4gICAgICAgIGNvZGU6IFwiYnJvd3Nlcl9zdG9yYWdlX25vdF9zdXBwb3J0ZWRcIixcbiAgICAgICAgZGVzYzogXCJsb2NhbFN0b3JhZ2UgYW5kIHNlc3Npb25TdG9yYWdlIGFyZSBub3Qgc3VwcG9ydGVkLlwiXG4gICAgfSxcbiAgICBub1JlZGlyZWN0Q2FsbGJhY2tzU2V0OiB7XG4gICAgICAgIGNvZGU6IFwibm9fcmVkaXJlY3RfY2FsbGJhY2tzXCIsXG4gICAgICAgIGRlc2M6IFwiTm8gcmVkaXJlY3QgY2FsbGJhY2tzIGhhdmUgYmVlbiBzZXQuIFBsZWFzZSBjYWxsIHNldFJlZGlyZWN0Q2FsbGJhY2tzKCkgd2l0aCB0aGUgYXBwcm9wcmlhdGUgZnVuY3Rpb24gYXJndW1lbnRzIGJlZm9yZSBjb250aW51aW5nLiBcIiArXG4gICAgICAgICAgICBcIk1vcmUgaW5mb3JtYXRpb24gaXMgYXZhaWxhYmxlIGhlcmU6IGh0dHBzOi8vZ2l0aHViLmNvbS9BenVyZUFEL21pY3Jvc29mdC1hdXRoZW50aWNhdGlvbi1saWJyYXJ5LWZvci1qcy93aWtpL01TQUwtYmFzaWNzLlwiXG4gICAgfSxcbiAgICBpbnZhbGlkQ2FsbGJhY2tPYmplY3Q6IHtcbiAgICAgICAgY29kZTogXCJpbnZhbGlkX2NhbGxiYWNrX29iamVjdFwiLFxuICAgICAgICBkZXNjOiBcIlRoZSBvYmplY3QgcGFzc2VkIGZvciB0aGUgY2FsbGJhY2sgd2FzIGludmFsaWQuIFwiICtcbiAgICAgICAgICBcIk1vcmUgaW5mb3JtYXRpb24gaXMgYXZhaWxhYmxlIGhlcmU6IGh0dHBzOi8vZ2l0aHViLmNvbS9BenVyZUFEL21pY3Jvc29mdC1hdXRoZW50aWNhdGlvbi1saWJyYXJ5LWZvci1qcy93aWtpL01TQUwtYmFzaWNzLlwiXG4gICAgfSxcbiAgICBzY29wZXNSZXF1aXJlZDoge1xuICAgICAgICBjb2RlOiBcInNjb3Blc19yZXF1aXJlZFwiLFxuICAgICAgICBkZXNjOiBcIlNjb3BlcyBhcmUgcmVxdWlyZWQgdG8gb2J0YWluIGFuIGFjY2VzcyB0b2tlbi5cIlxuICAgIH0sXG4gICAgZW1wdHlTY29wZXM6IHtcbiAgICAgICAgY29kZTogXCJlbXB0eV9pbnB1dF9zY29wZXNfZXJyb3JcIixcbiAgICAgICAgZGVzYzogXCJTY29wZXMgY2Fubm90IGJlIHBhc3NlZCBhcyBlbXB0eSBhcnJheS5cIlxuICAgIH0sXG4gICAgbm9uQXJyYXlTY29wZXM6IHtcbiAgICAgICAgY29kZTogXCJub25hcnJheV9pbnB1dF9zY29wZXNfZXJyb3JcIixcbiAgICAgICAgZGVzYzogXCJTY29wZXMgY2Fubm90IGJlIHBhc3NlZCBhcyBub24tYXJyYXkuXCJcbiAgICB9LFxuICAgIGNsaWVudFNjb3BlOiB7XG4gICAgICAgIGNvZGU6IFwiY2xpZW50aWRfaW5wdXRfc2NvcGVzX2Vycm9yXCIsXG4gICAgICAgIGRlc2M6IFwiQ2xpZW50IElEIGNhbiBvbmx5IGJlIHByb3ZpZGVkIGFzIGEgc2luZ2xlIHNjb3BlLlwiXG4gICAgfSxcbiAgICBpbnZhbGlkUHJvbXB0OiB7XG4gICAgICAgIGNvZGU6IFwiaW52YWxpZF9wcm9tcHRfdmFsdWVcIixcbiAgICAgICAgZGVzYzogXCJTdXBwb3J0ZWQgcHJvbXB0IHZhbHVlcyBhcmUgJ2xvZ2luJywgJ3NlbGVjdF9hY2NvdW50JywgJ2NvbnNlbnQnIGFuZCAnbm9uZSdcIixcbiAgICB9LFxuICAgIGludmFsaWRBdXRob3JpdHlUeXBlOiB7XG4gICAgICAgIGNvZGU6IFwiaW52YWxpZF9hdXRob3JpdHlfdHlwZVwiLFxuICAgICAgICBkZXNjOiBcIlRoZSBnaXZlbiBhdXRob3JpdHkgaXMgbm90IGEgdmFsaWQgdHlwZSBvZiBhdXRob3JpdHkgc3VwcG9ydGVkIGJ5IE1TQUwuIFBsZWFzZSBzZWUgaGVyZSBmb3IgdmFsaWQgYXV0aG9yaXRpZXM6IDxpbnNlcnQgVVJMIGhlcmU+LlwiXG4gICAgfSxcbiAgICBhdXRob3JpdHlVcmlJbnNlY3VyZToge1xuICAgICAgICBjb2RlOiBcImF1dGhvcml0eV91cmlfaW5zZWN1cmVcIixcbiAgICAgICAgZGVzYzogXCJBdXRob3JpdHkgVVJJcyBtdXN0IHVzZSBodHRwcy5cIlxuICAgIH0sXG4gICAgYXV0aG9yaXR5VXJpSW52YWxpZFBhdGg6IHtcbiAgICAgICAgY29kZTogXCJhdXRob3JpdHlfdXJpX2ludmFsaWRfcGF0aFwiLFxuICAgICAgICBkZXNjOiBcIkdpdmVuIGF1dGhvcml0eSBVUkkgaXMgaW52YWxpZC5cIlxuICAgIH0sXG4gICAgdW5zdXBwb3J0ZWRBdXRob3JpdHlWYWxpZGF0aW9uOiB7XG4gICAgICAgIGNvZGU6IFwidW5zdXBwb3J0ZWRfYXV0aG9yaXR5X3ZhbGlkYXRpb25cIixcbiAgICAgICAgZGVzYzogXCJUaGUgYXV0aG9yaXR5IHZhbGlkYXRpb24gaXMgbm90IHN1cHBvcnRlZCBmb3IgdGhpcyBhdXRob3JpdHkgdHlwZS5cIlxuICAgIH0sXG4gICAgYjJjQXV0aG9yaXR5VXJpSW52YWxpZFBhdGg6IHtcbiAgICAgICAgY29kZTogXCJiMmNfYXV0aG9yaXR5X3VyaV9pbnZhbGlkX3BhdGhcIixcbiAgICAgICAgZGVzYzogXCJUaGUgZ2l2ZW4gVVJJIGZvciB0aGUgQjJDIGF1dGhvcml0eSBpcyBpbnZhbGlkLlwiXG4gICAgfSxcbiAgICBjbGFpbXNSZXF1ZXN0UGFyc2luZ0Vycm9yOiB7XG4gICAgICAgIGNvZGU6IFwiY2xhaW1zX3JlcXVlc3RfcGFyc2luZ19lcnJvclwiLFxuICAgICAgICBkZXNjOiBcIkNvdWxkIG5vdCBwYXJzZSB0aGUgZ2l2ZW4gY2xhaW1zIHJlcXVlc3Qgb2JqZWN0LlwiXG4gICAgfSxcbiAgICBlbXB0eVJlcXVlc3RFcnJvcjoge1xuICAgICAgICBjb2RlOiBcImVtcHR5X3JlcXVlc3RfZXJyb3JcIixcbiAgICAgICAgZGVzYzogXCJSZXF1ZXN0IG9iamVjdCBpcyByZXF1aXJlZC5cIlxuICAgIH0sXG4gICAgdGVsZW1ldHJ5Q29uZmlnRXJyb3I6IHtcbiAgICAgICAgY29kZTogXCJ0ZWxlbWV0cnlfY29uZmlnX2Vycm9yXCIsXG4gICAgICAgIGRlc2M6IFwiVGVsZW1ldHJ5IGNvbmZpZyBpcyBub3QgY29uZmlndXJlZCB3aXRoIHJlcXVpcmVkIHZhbHVlc1wiXG4gICAgfVxufTtcblxuLyoqXG4gKiBFcnJvciB0aHJvd24gd2hlbiB0aGVyZSBpcyBhbiBlcnJvciBpbiBjb25maWd1cmF0aW9uIG9mIHRoZSAuanMgbGlicmFyeS5cbiAqL1xuZXhwb3J0IGNsYXNzIENsaWVudENvbmZpZ3VyYXRpb25FcnJvciBleHRlbmRzIENsaWVudEF1dGhFcnJvciB7XG5cbiAgICBjb25zdHJ1Y3RvcihlcnJvckNvZGU6IHN0cmluZywgZXJyb3JNZXNzYWdlPzogc3RyaW5nKSB7XG4gICAgICAgIHN1cGVyKGVycm9yQ29kZSwgZXJyb3JNZXNzYWdlKTtcbiAgICAgICAgdGhpcy5uYW1lID0gXCJDbGllbnRDb25maWd1cmF0aW9uRXJyb3JcIjtcbiAgICAgICAgT2JqZWN0LnNldFByb3RvdHlwZU9mKHRoaXMsIENsaWVudENvbmZpZ3VyYXRpb25FcnJvci5wcm90b3R5cGUpO1xuICAgIH1cblxuICAgIHN0YXRpYyBjcmVhdGVOb1NldENvbmZpZ3VyYXRpb25FcnJvcigpOiBDbGllbnRDb25maWd1cmF0aW9uRXJyb3Ige1xuICAgICAgICByZXR1cm4gbmV3IENsaWVudENvbmZpZ3VyYXRpb25FcnJvcihDbGllbnRDb25maWd1cmF0aW9uRXJyb3JNZXNzYWdlLmNvbmZpZ3VyYXRpb25Ob3RTZXQuY29kZSxcbiAgICAgICAgICAgIGAke0NsaWVudENvbmZpZ3VyYXRpb25FcnJvck1lc3NhZ2UuY29uZmlndXJhdGlvbk5vdFNldC5kZXNjfWApO1xuICAgIH1cblxuICAgIHN0YXRpYyBjcmVhdGVJbnZhbGlkQ2FjaGVMb2NhdGlvbkNvbmZpZ0Vycm9yKGdpdmVuQ2FjaGVMb2NhdGlvbjogc3RyaW5nKTogQ2xpZW50Q29uZmlndXJhdGlvbkVycm9yIHtcbiAgICAgICAgcmV0dXJuIG5ldyBDbGllbnRDb25maWd1cmF0aW9uRXJyb3IoQ2xpZW50Q29uZmlndXJhdGlvbkVycm9yTWVzc2FnZS5pbnZhbGlkQ2FjaGVMb2NhdGlvbi5jb2RlLFxuICAgICAgICAgICAgYCR7Q2xpZW50Q29uZmlndXJhdGlvbkVycm9yTWVzc2FnZS5pbnZhbGlkQ2FjaGVMb2NhdGlvbi5kZXNjfSBQcm92aWRlZCB2YWx1ZTogJHtnaXZlbkNhY2hlTG9jYXRpb259LiBQb3NzaWJsZSB2YWx1ZXMgYXJlOiAke0NvbnN0YW50cy5jYWNoZUxvY2F0aW9uTG9jYWx9LCAke0NvbnN0YW50cy5jYWNoZUxvY2F0aW9uU2Vzc2lvbn0uYCk7XG4gICAgfVxuXG4gICAgc3RhdGljIGNyZWF0ZU5vU3RvcmFnZVN1cHBvcnRlZEVycm9yKCkgOiBDbGllbnRDb25maWd1cmF0aW9uRXJyb3Ige1xuICAgICAgICByZXR1cm4gbmV3IENsaWVudENvbmZpZ3VyYXRpb25FcnJvcihDbGllbnRDb25maWd1cmF0aW9uRXJyb3JNZXNzYWdlLm5vU3RvcmFnZVN1cHBvcnRlZC5jb2RlLFxuICAgICAgICAgICAgQ2xpZW50Q29uZmlndXJhdGlvbkVycm9yTWVzc2FnZS5ub1N0b3JhZ2VTdXBwb3J0ZWQuZGVzYyk7XG4gICAgfVxuXG4gICAgc3RhdGljIGNyZWF0ZVJlZGlyZWN0Q2FsbGJhY2tzTm90U2V0RXJyb3IoKTogQ2xpZW50Q29uZmlndXJhdGlvbkVycm9yIHtcbiAgICAgICAgcmV0dXJuIG5ldyBDbGllbnRDb25maWd1cmF0aW9uRXJyb3IoQ2xpZW50Q29uZmlndXJhdGlvbkVycm9yTWVzc2FnZS5ub1JlZGlyZWN0Q2FsbGJhY2tzU2V0LmNvZGUsIENsaWVudENvbmZpZ3VyYXRpb25FcnJvck1lc3NhZ2Uubm9SZWRpcmVjdENhbGxiYWNrc1NldC5kZXNjKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgY3JlYXRlSW52YWxpZENhbGxiYWNrT2JqZWN0RXJyb3IoY2FsbGJhY2tPYmplY3Q6IG9iamVjdCk6IENsaWVudENvbmZpZ3VyYXRpb25FcnJvciB7XG4gICAgICAgIHJldHVybiBuZXcgQ2xpZW50Q29uZmlndXJhdGlvbkVycm9yKENsaWVudENvbmZpZ3VyYXRpb25FcnJvck1lc3NhZ2UuaW52YWxpZENhbGxiYWNrT2JqZWN0LmNvZGUsXG4gICAgICAgICAgICBgJHtDbGllbnRDb25maWd1cmF0aW9uRXJyb3JNZXNzYWdlLmludmFsaWRDYWxsYmFja09iamVjdC5kZXNjfSBHaXZlbiB2YWx1ZSBmb3IgY2FsbGJhY2sgZnVuY3Rpb246ICR7Y2FsbGJhY2tPYmplY3R9YCk7XG4gICAgfVxuXG4gICAgc3RhdGljIGNyZWF0ZUVtcHR5U2NvcGVzQXJyYXlFcnJvcihzY29wZXNWYWx1ZTogc3RyaW5nKTogQ2xpZW50Q29uZmlndXJhdGlvbkVycm9yIHtcbiAgICAgICAgcmV0dXJuIG5ldyBDbGllbnRDb25maWd1cmF0aW9uRXJyb3IoQ2xpZW50Q29uZmlndXJhdGlvbkVycm9yTWVzc2FnZS5lbXB0eVNjb3Blcy5jb2RlLFxuICAgICAgICAgICAgYCR7Q2xpZW50Q29uZmlndXJhdGlvbkVycm9yTWVzc2FnZS5lbXB0eVNjb3Blcy5kZXNjfSBHaXZlbiB2YWx1ZTogJHtzY29wZXNWYWx1ZX0uYCk7XG4gICAgfVxuXG4gICAgc3RhdGljIGNyZWF0ZVNjb3Blc05vbkFycmF5RXJyb3Ioc2NvcGVzVmFsdWU6IHN0cmluZyk6IENsaWVudENvbmZpZ3VyYXRpb25FcnJvciB7XG4gICAgICAgIHJldHVybiBuZXcgQ2xpZW50Q29uZmlndXJhdGlvbkVycm9yKENsaWVudENvbmZpZ3VyYXRpb25FcnJvck1lc3NhZ2Uubm9uQXJyYXlTY29wZXMuY29kZSxcbiAgICAgICAgICAgIGAke0NsaWVudENvbmZpZ3VyYXRpb25FcnJvck1lc3NhZ2Uubm9uQXJyYXlTY29wZXMuZGVzY30gR2l2ZW4gdmFsdWU6ICR7c2NvcGVzVmFsdWV9LmApO1xuICAgIH1cblxuICAgIHN0YXRpYyBjcmVhdGVDbGllbnRJZFNpbmdsZVNjb3BlRXJyb3Ioc2NvcGVzVmFsdWU6IHN0cmluZyk6IENsaWVudENvbmZpZ3VyYXRpb25FcnJvciB7XG4gICAgICAgIHJldHVybiBuZXcgQ2xpZW50Q29uZmlndXJhdGlvbkVycm9yKENsaWVudENvbmZpZ3VyYXRpb25FcnJvck1lc3NhZ2UuY2xpZW50U2NvcGUuY29kZSxcbiAgICAgICAgICAgIGAke0NsaWVudENvbmZpZ3VyYXRpb25FcnJvck1lc3NhZ2UuY2xpZW50U2NvcGUuZGVzY30gR2l2ZW4gdmFsdWU6ICR7c2NvcGVzVmFsdWV9LmApO1xuICAgIH1cblxuICAgIHN0YXRpYyBjcmVhdGVTY29wZXNSZXF1aXJlZEVycm9yKHNjb3Blc1ZhbHVlOiBhbnkpOiBDbGllbnRDb25maWd1cmF0aW9uRXJyb3Ige1xuICAgICAgICByZXR1cm4gbmV3IENsaWVudENvbmZpZ3VyYXRpb25FcnJvcihDbGllbnRDb25maWd1cmF0aW9uRXJyb3JNZXNzYWdlLnNjb3Blc1JlcXVpcmVkLmNvZGUsXG4gICAgICAgICAgICBgJHtDbGllbnRDb25maWd1cmF0aW9uRXJyb3JNZXNzYWdlLnNjb3Blc1JlcXVpcmVkLmRlc2N9IEdpdmVuIHZhbHVlOiAke3Njb3Blc1ZhbHVlfWApO1xuICAgIH1cblxuICAgIHN0YXRpYyBjcmVhdGVJbnZhbGlkUHJvbXB0RXJyb3IocHJvbXB0VmFsdWU6IGFueSk6IENsaWVudENvbmZpZ3VyYXRpb25FcnJvciB7XG4gICAgICAgIHJldHVybiBuZXcgQ2xpZW50Q29uZmlndXJhdGlvbkVycm9yKENsaWVudENvbmZpZ3VyYXRpb25FcnJvck1lc3NhZ2UuaW52YWxpZFByb21wdC5jb2RlLFxuICAgICAgICAgICAgYCR7Q2xpZW50Q29uZmlndXJhdGlvbkVycm9yTWVzc2FnZS5pbnZhbGlkUHJvbXB0LmRlc2N9IEdpdmVuIHZhbHVlOiAke3Byb21wdFZhbHVlfWApO1xuICAgIH1cblxuICAgIHN0YXRpYyBjcmVhdGVDbGFpbXNSZXF1ZXN0UGFyc2luZ0Vycm9yKGNsYWltc1JlcXVlc3RQYXJzZUVycm9yOiBzdHJpbmcpOiBDbGllbnRDb25maWd1cmF0aW9uRXJyb3Ige1xuICAgICAgICByZXR1cm4gbmV3IENsaWVudENvbmZpZ3VyYXRpb25FcnJvcihDbGllbnRDb25maWd1cmF0aW9uRXJyb3JNZXNzYWdlLmNsYWltc1JlcXVlc3RQYXJzaW5nRXJyb3IuY29kZSxcbiAgICAgICAgICAgIGAke0NsaWVudENvbmZpZ3VyYXRpb25FcnJvck1lc3NhZ2UuY2xhaW1zUmVxdWVzdFBhcnNpbmdFcnJvci5kZXNjfSBHaXZlbiB2YWx1ZTogJHtjbGFpbXNSZXF1ZXN0UGFyc2VFcnJvcn1gKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgY3JlYXRlRW1wdHlSZXF1ZXN0RXJyb3IoKTogQ2xpZW50Q29uZmlndXJhdGlvbkVycm9yIHtcbiAgICAgICAgY29uc3QgeyBjb2RlLCBkZXNjIH0gPSBDbGllbnRDb25maWd1cmF0aW9uRXJyb3JNZXNzYWdlLmVtcHR5UmVxdWVzdEVycm9yO1xuICAgICAgICByZXR1cm4gbmV3IENsaWVudENvbmZpZ3VyYXRpb25FcnJvcihjb2RlLCBkZXNjKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgY3JlYXRlVGVsZW1ldHJ5Q29uZmlnRXJyb3IoY29uZmlnOiBUZWxlbWV0cnlPcHRpb25zKTogQ2xpZW50Q29uZmlndXJhdGlvbkVycm9yIHtcbiAgICAgICAgY29uc3QgeyBjb2RlLCBkZXNjIH0gPSBDbGllbnRDb25maWd1cmF0aW9uRXJyb3JNZXNzYWdlLnRlbGVtZXRyeUNvbmZpZ0Vycm9yO1xuICAgICAgICBjb25zdCByZXF1aXJlZEtleXMgPSB7XG4gICAgICAgICAgICBhcHBsaWNhdGlvbk5hbWU6IFwic3RyaW5nXCIsXG4gICAgICAgICAgICBhcHBsaWNhdGlvblZlcnNpb246IFwic3RyaW5nXCIsXG4gICAgICAgICAgICB0ZWxlbWV0cnlFbWl0dGVyOiBcImZ1bmN0aW9uXCJcbiAgICAgICAgfTtcblxuICAgICAgICBjb25zdCBtaXNzaW5nS2V5cyA9IE9iamVjdC5rZXlzKHJlcXVpcmVkS2V5cylcbiAgICAgICAgICAgIC5yZWR1Y2UoKGtleXMsIGtleSkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiBjb25maWdba2V5XSA/IGtleXMgOiBrZXlzLmNvbmNhdChbIGAke2tleX0gKCR7cmVxdWlyZWRLZXlzW2tleV19KWAgXSk7XG4gICAgICAgICAgICB9LCBbXSk7XG5cbiAgICAgICAgcmV0dXJuIG5ldyBDbGllbnRDb25maWd1cmF0aW9uRXJyb3IoY29kZSwgYCR7ZGVzY30gbWlzaW5nIHZhbHVlczogJHttaXNzaW5nS2V5cy5qb2luKFwiLFwiKX1gKTtcbiAgICB9XG59XG4iLCIvKlxuICogQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXG4gKi9cblxuaW1wb3J0IHsgQXV0aEVycm9yIH0gZnJvbSBcIi4vQXV0aEVycm9yXCI7XG5pbXBvcnQgeyBJZFRva2VuIH0gZnJvbSBcIi4uL0lkVG9rZW5cIjtcbmltcG9ydCB7IFN0cmluZ1V0aWxzIH0gZnJvbSBcIi4uL3V0aWxzL1N0cmluZ1V0aWxzXCI7XG5cbmV4cG9ydCBjb25zdCBDbGllbnRBdXRoRXJyb3JNZXNzYWdlID0ge1xuICAgIG11bHRpcGxlTWF0Y2hpbmdUb2tlbnM6IHtcbiAgICAgICAgY29kZTogXCJtdWx0aXBsZV9tYXRjaGluZ190b2tlbnNcIixcbiAgICAgICAgZGVzYzogXCJUaGUgY2FjaGUgY29udGFpbnMgbXVsdGlwbGUgdG9rZW5zIHNhdGlzZnlpbmcgdGhlIHJlcXVpcmVtZW50cy4gXCIgK1xuICAgICAgICAgICAgXCJDYWxsIEFjcXVpcmVUb2tlbiBhZ2FpbiBwcm92aWRpbmcgbW9yZSByZXF1aXJlbWVudHMgbGlrZSBhdXRob3JpdHkuXCJcbiAgICB9LFxuICAgIG11bHRpcGxlQ2FjaGVBdXRob3JpdGllczoge1xuICAgICAgICBjb2RlOiBcIm11bHRpcGxlX2F1dGhvcml0aWVzXCIsXG4gICAgICAgIGRlc2M6IFwiTXVsdGlwbGUgYXV0aG9yaXRpZXMgZm91bmQgaW4gdGhlIGNhY2hlLiBQYXNzIGF1dGhvcml0eSBpbiB0aGUgQVBJIG92ZXJsb2FkLlwiXG4gICAgfSxcbiAgICBlbmRwb2ludFJlc29sdXRpb25FcnJvcjoge1xuICAgICAgICBjb2RlOiBcImVuZHBvaW50c19yZXNvbHV0aW9uX2Vycm9yXCIsXG4gICAgICAgIGRlc2M6IFwiRXJyb3I6IGNvdWxkIG5vdCByZXNvbHZlIGVuZHBvaW50cy4gUGxlYXNlIGNoZWNrIG5ldHdvcmsgYW5kIHRyeSBhZ2Fpbi5cIlxuICAgIH0sXG4gICAgcG9wVXBXaW5kb3dFcnJvcjoge1xuICAgICAgICBjb2RlOiBcInBvcHVwX3dpbmRvd19lcnJvclwiLFxuICAgICAgICBkZXNjOiBcIkVycm9yIG9wZW5pbmcgcG9wdXAgd2luZG93LiBUaGlzIGNhbiBoYXBwZW4gaWYgeW91IGFyZSB1c2luZyBJRSBvciBpZiBwb3B1cHMgYXJlIGJsb2NrZWQgaW4gdGhlIGJyb3dzZXIuXCJcbiAgICB9LFxuICAgIHRva2VuUmVuZXdhbEVycm9yOiB7XG4gICAgICAgIGNvZGU6IFwidG9rZW5fcmVuZXdhbF9lcnJvclwiLFxuICAgICAgICBkZXNjOiBcIlRva2VuIHJlbmV3YWwgb3BlcmF0aW9uIGZhaWxlZCBkdWUgdG8gdGltZW91dC5cIlxuICAgIH0sXG4gICAgaW52YWxpZElkVG9rZW46IHtcbiAgICAgICAgY29kZTogXCJpbnZhbGlkX2lkX3Rva2VuXCIsXG4gICAgICAgIGRlc2M6IFwiSW52YWxpZCBJRCB0b2tlbiBmb3JtYXQuXCJcbiAgICB9LFxuICAgIGludmFsaWRTdGF0ZUVycm9yOiB7XG4gICAgICAgIGNvZGU6IFwiaW52YWxpZF9zdGF0ZV9lcnJvclwiLFxuICAgICAgICBkZXNjOiBcIkludmFsaWQgc3RhdGUuXCJcbiAgICB9LFxuICAgIG5vbmNlTWlzbWF0Y2hFcnJvcjoge1xuICAgICAgICBjb2RlOiBcIm5vbmNlX21pc21hdGNoX2Vycm9yXCIsXG4gICAgICAgIGRlc2M6IFwiTm9uY2UgaXMgbm90IG1hdGNoaW5nLCBOb25jZSByZWNlaXZlZDogXCJcbiAgICB9LFxuICAgIGxvZ2luUHJvZ3Jlc3NFcnJvcjoge1xuICAgICAgICBjb2RlOiBcImxvZ2luX3Byb2dyZXNzX2Vycm9yXCIsXG4gICAgICAgIGRlc2M6IFwiTG9naW5fSW5fUHJvZ3Jlc3M6IEVycm9yIGR1cmluZyBsb2dpbiBjYWxsIC0gbG9naW4gaXMgYWxyZWFkeSBpbiBwcm9ncmVzcy5cIlxuICAgIH0sXG4gICAgYWNxdWlyZVRva2VuUHJvZ3Jlc3NFcnJvcjoge1xuICAgICAgICBjb2RlOiBcImFjcXVpcmV0b2tlbl9wcm9ncmVzc19lcnJvclwiLFxuICAgICAgICBkZXNjOiBcIkFjcXVpcmVUb2tlbl9Jbl9Qcm9ncmVzczogRXJyb3IgZHVyaW5nIGxvZ2luIGNhbGwgLSBsb2dpbiBpcyBhbHJlYWR5IGluIHByb2dyZXNzLlwiXG4gICAgfSxcbiAgICB1c2VyQ2FuY2VsbGVkRXJyb3I6IHtcbiAgICAgICAgY29kZTogXCJ1c2VyX2NhbmNlbGxlZFwiLFxuICAgICAgICBkZXNjOiBcIlVzZXIgY2FuY2VsbGVkIHRoZSBmbG93LlwiXG4gICAgfSxcbiAgICBjYWxsYmFja0Vycm9yOiB7XG4gICAgICAgIGNvZGU6IFwiY2FsbGJhY2tfZXJyb3JcIixcbiAgICAgICAgZGVzYzogXCJFcnJvciBvY2N1cnJlZCBpbiB0b2tlbiByZWNlaXZlZCBjYWxsYmFjayBmdW5jdGlvbi5cIlxuICAgIH0sXG4gICAgdXNlckxvZ2luUmVxdWlyZWRFcnJvcjoge1xuICAgICAgICBjb2RlOiBcInVzZXJfbG9naW5fZXJyb3JcIixcbiAgICAgICAgZGVzYzogXCJVc2VyIGxvZ2luIGlzIHJlcXVpcmVkLlwiXG4gICAgfSxcbiAgICB1c2VyRG9lc05vdEV4aXN0RXJyb3I6IHtcbiAgICAgICAgY29kZTogXCJ1c2VyX25vbl9leGlzdGVudFwiLFxuICAgICAgICBkZXNjOiBcIlVzZXIgb2JqZWN0IGRvZXMgbm90IGV4aXN0LiBQbGVhc2UgY2FsbCBhIGxvZ2luIEFQSS5cIlxuICAgIH0sXG4gICAgY2xpZW50SW5mb0RlY29kaW5nRXJyb3I6IHtcbiAgICAgICAgY29kZTogXCJjbGllbnRfaW5mb19kZWNvZGluZ19lcnJvclwiLFxuICAgICAgICBkZXNjOiBcIlRoZSBjbGllbnQgaW5mbyBjb3VsZCBub3QgYmUgcGFyc2VkL2RlY29kZWQgY29ycmVjdGx5LiBQbGVhc2UgcmV2aWV3IHRoZSB0cmFjZSB0byBkZXRlcm1pbmUgdGhlIHJvb3QgY2F1c2UuXCJcbiAgICB9LFxuICAgIGNsaWVudEluZm9Ob3RQb3B1bGF0ZWRFcnJvcjoge1xuICAgICAgICBjb2RlOiBcImNsaWVudF9pbmZvX25vdF9wb3B1bGF0ZWRfZXJyb3JcIixcbiAgICAgICAgZGVzYzogXCJUaGUgc2VydmljZSBkaWQgbm90IHBvcHVsYXRlIGNsaWVudF9pbmZvIGluIHRoZSByZXNwb25zZSwgUGxlYXNlIHZlcmlmeSB3aXRoIHRoZSBzZXJ2aWNlIHRlYW1cIlxuICAgIH0sXG4gICAgbnVsbE9yRW1wdHlJZFRva2VuOiB7XG4gICAgICAgIGNvZGU6IFwibnVsbF9vcl9lbXB0eV9pZF90b2tlblwiLFxuICAgICAgICBkZXNjOiBcIlRoZSBpZFRva2VuIGlzIG51bGwgb3IgZW1wdHkuIFBsZWFzZSByZXZpZXcgdGhlIHRyYWNlIHRvIGRldGVybWluZSB0aGUgcm9vdCBjYXVzZS5cIlxuICAgIH0sXG4gICAgaWRUb2tlbk5vdFBhcnNlZDoge1xuICAgICAgICBjb2RlOiBcImlkX3Rva2VuX3BhcnNpbmdfZXJyb3JcIixcbiAgICAgICAgZGVzYzogXCJJRCB0b2tlbiBjYW5ub3QgYmUgcGFyc2VkLiBQbGVhc2UgcmV2aWV3IHN0YWNrIHRyYWNlIHRvIGRldGVybWluZSByb290IGNhdXNlLlwiXG4gICAgfSxcbiAgICB0b2tlbkVuY29kaW5nRXJyb3I6IHtcbiAgICAgICAgY29kZTogXCJ0b2tlbl9lbmNvZGluZ19lcnJvclwiLFxuICAgICAgICBkZXNjOiBcIlRoZSB0b2tlbiB0byBiZSBkZWNvZGVkIGlzIG5vdCBlbmNvZGVkIGNvcnJlY3RseS5cIlxuICAgIH0sXG4gICAgaW52YWxpZEludGVyYWN0aW9uVHlwZToge1xuICAgICAgICBjb2RlOiBcImludmFsaWRfaW50ZXJhY3Rpb25fdHlwZVwiLFxuICAgICAgICBkZXNjOiBcIlRoZSBpbnRlcmFjdGlvbiB0eXBlIHBhc3NlZCB0byB0aGUgaGFuZGxlciB3YXMgaW5jb3JyZWN0IG9yIHVua25vd25cIlxuICAgIH1cbn07XG5cbi8qKlxuICogRXJyb3IgdGhyb3duIHdoZW4gdGhlcmUgaXMgYW4gZXJyb3IgaW4gdGhlIGNsaWVudCBjb2RlIHJ1bm5pbmcgb24gdGhlIGJyb3dzZXIuXG4gKi9cbmV4cG9ydCBjbGFzcyBDbGllbnRBdXRoRXJyb3IgZXh0ZW5kcyBBdXRoRXJyb3Ige1xuXG4gICAgY29uc3RydWN0b3IoZXJyb3JDb2RlOiBzdHJpbmcsIGVycm9yTWVzc2FnZT86IHN0cmluZykge1xuICAgICAgICBzdXBlcihlcnJvckNvZGUsIGVycm9yTWVzc2FnZSk7XG4gICAgICAgIHRoaXMubmFtZSA9IFwiQ2xpZW50QXV0aEVycm9yXCI7XG5cbiAgICAgICAgT2JqZWN0LnNldFByb3RvdHlwZU9mKHRoaXMsIENsaWVudEF1dGhFcnJvci5wcm90b3R5cGUpO1xuICAgIH1cblxuICAgIHN0YXRpYyBjcmVhdGVFbmRwb2ludFJlc29sdXRpb25FcnJvcihlcnJEZXRhaWw/OiBzdHJpbmcpOiBDbGllbnRBdXRoRXJyb3Ige1xuICAgICAgICBsZXQgZXJyb3JNZXNzYWdlID0gQ2xpZW50QXV0aEVycm9yTWVzc2FnZS5lbmRwb2ludFJlc29sdXRpb25FcnJvci5kZXNjO1xuICAgICAgICBpZiAoZXJyRGV0YWlsICYmICFTdHJpbmdVdGlscy5pc0VtcHR5KGVyckRldGFpbCkpIHtcbiAgICAgICAgICAgIGVycm9yTWVzc2FnZSArPSBgIERldGFpbHM6ICR7ZXJyRGV0YWlsfWA7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5ldyBDbGllbnRBdXRoRXJyb3IoQ2xpZW50QXV0aEVycm9yTWVzc2FnZS5lbmRwb2ludFJlc29sdXRpb25FcnJvci5jb2RlLCBlcnJvck1lc3NhZ2UpO1xuICAgIH1cblxuICAgIHN0YXRpYyBjcmVhdGVNdWx0aXBsZU1hdGNoaW5nVG9rZW5zSW5DYWNoZUVycm9yKHNjb3BlOiBzdHJpbmcpOiBDbGllbnRBdXRoRXJyb3Ige1xuICAgICAgICByZXR1cm4gbmV3IENsaWVudEF1dGhFcnJvcihDbGllbnRBdXRoRXJyb3JNZXNzYWdlLm11bHRpcGxlTWF0Y2hpbmdUb2tlbnMuY29kZSxcbiAgICAgICAgICAgIGBDYWNoZSBlcnJvciBmb3Igc2NvcGUgJHtzY29wZX06ICR7Q2xpZW50QXV0aEVycm9yTWVzc2FnZS5tdWx0aXBsZU1hdGNoaW5nVG9rZW5zLmRlc2N9LmApO1xuICAgIH1cblxuICAgIHN0YXRpYyBjcmVhdGVNdWx0aXBsZUF1dGhvcml0aWVzSW5DYWNoZUVycm9yKHNjb3BlOiBzdHJpbmcpOiBDbGllbnRBdXRoRXJyb3Ige1xuICAgICAgICByZXR1cm4gbmV3IENsaWVudEF1dGhFcnJvcihDbGllbnRBdXRoRXJyb3JNZXNzYWdlLm11bHRpcGxlQ2FjaGVBdXRob3JpdGllcy5jb2RlLFxuICAgICAgICAgICAgYENhY2hlIGVycm9yIGZvciBzY29wZSAke3Njb3BlfTogJHtDbGllbnRBdXRoRXJyb3JNZXNzYWdlLm11bHRpcGxlQ2FjaGVBdXRob3JpdGllcy5kZXNjfS5gKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgY3JlYXRlUG9wdXBXaW5kb3dFcnJvcihlcnJEZXRhaWw/OiBzdHJpbmcpOiBDbGllbnRBdXRoRXJyb3Ige1xuICAgICAgICBsZXQgZXJyb3JNZXNzYWdlID0gQ2xpZW50QXV0aEVycm9yTWVzc2FnZS5wb3BVcFdpbmRvd0Vycm9yLmRlc2M7XG4gICAgICAgIGlmIChlcnJEZXRhaWwgJiYgIVN0cmluZ1V0aWxzLmlzRW1wdHkoZXJyRGV0YWlsKSkge1xuICAgICAgICAgICAgZXJyb3JNZXNzYWdlICs9IGAgRGV0YWlsczogJHtlcnJEZXRhaWx9YDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbmV3IENsaWVudEF1dGhFcnJvcihDbGllbnRBdXRoRXJyb3JNZXNzYWdlLnBvcFVwV2luZG93RXJyb3IuY29kZSwgZXJyb3JNZXNzYWdlKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgY3JlYXRlVG9rZW5SZW5ld2FsVGltZW91dEVycm9yKCk6IENsaWVudEF1dGhFcnJvciB7XG4gICAgICAgIHJldHVybiBuZXcgQ2xpZW50QXV0aEVycm9yKENsaWVudEF1dGhFcnJvck1lc3NhZ2UudG9rZW5SZW5ld2FsRXJyb3IuY29kZSxcbiAgICAgICAgICAgIENsaWVudEF1dGhFcnJvck1lc3NhZ2UudG9rZW5SZW5ld2FsRXJyb3IuZGVzYyk7XG4gICAgfVxuXG4gICAgc3RhdGljIGNyZWF0ZUludmFsaWRJZFRva2VuRXJyb3IoaWRUb2tlbjogSWRUb2tlbikgOiBDbGllbnRBdXRoRXJyb3Ige1xuICAgICAgICByZXR1cm4gbmV3IENsaWVudEF1dGhFcnJvcihDbGllbnRBdXRoRXJyb3JNZXNzYWdlLmludmFsaWRJZFRva2VuLmNvZGUsXG4gICAgICAgICAgICBgJHtDbGllbnRBdXRoRXJyb3JNZXNzYWdlLmludmFsaWRJZFRva2VuLmRlc2N9IEdpdmVuIHRva2VuOiAke2lkVG9rZW59YCk7XG4gICAgfVxuXG4gICAgLy8gVE9ETzogSXMgdGhpcyBub3QgYSBzZWN1cml0eSBmbGF3IHRvIHNlbmQgdGhlIHVzZXIgdGhlIHN0YXRlIGV4cGVjdGVkPz9cbiAgICBzdGF0aWMgY3JlYXRlSW52YWxpZFN0YXRlRXJyb3IoaW52YWxpZFN0YXRlOiBzdHJpbmcsIGFjdHVhbFN0YXRlOiBzdHJpbmcpOiBDbGllbnRBdXRoRXJyb3Ige1xuICAgICAgICByZXR1cm4gbmV3IENsaWVudEF1dGhFcnJvcihDbGllbnRBdXRoRXJyb3JNZXNzYWdlLmludmFsaWRTdGF0ZUVycm9yLmNvZGUsXG4gICAgICAgICAgICBgJHtDbGllbnRBdXRoRXJyb3JNZXNzYWdlLmludmFsaWRTdGF0ZUVycm9yLmRlc2N9ICR7aW52YWxpZFN0YXRlfSwgc3RhdGUgZXhwZWN0ZWQgOiAke2FjdHVhbFN0YXRlfS5gKTtcbiAgICB9XG5cbiAgICAvLyBUT0RPOiBJcyB0aGlzIG5vdCBhIHNlY3VyaXR5IGZsYXcgdG8gc2VuZCB0aGUgdXNlciB0aGUgTm9uY2UgZXhwZWN0ZWQ/P1xuICAgIHN0YXRpYyBjcmVhdGVOb25jZU1pc21hdGNoRXJyb3IoaW52YWxpZE5vbmNlOiBzdHJpbmcsIGFjdHVhbE5vbmNlOiBzdHJpbmcpOiBDbGllbnRBdXRoRXJyb3Ige1xuICAgICAgICByZXR1cm4gbmV3IENsaWVudEF1dGhFcnJvcihDbGllbnRBdXRoRXJyb3JNZXNzYWdlLm5vbmNlTWlzbWF0Y2hFcnJvci5jb2RlLFxuICAgICAgICAgICAgYCR7Q2xpZW50QXV0aEVycm9yTWVzc2FnZS5ub25jZU1pc21hdGNoRXJyb3IuZGVzY30gJHtpbnZhbGlkTm9uY2V9LCBub25jZSBleHBlY3RlZCA6ICR7YWN0dWFsTm9uY2V9LmApO1xuICAgIH1cblxuICAgIHN0YXRpYyBjcmVhdGVMb2dpbkluUHJvZ3Jlc3NFcnJvcigpOiBDbGllbnRBdXRoRXJyb3Ige1xuICAgICAgICByZXR1cm4gbmV3IENsaWVudEF1dGhFcnJvcihDbGllbnRBdXRoRXJyb3JNZXNzYWdlLmxvZ2luUHJvZ3Jlc3NFcnJvci5jb2RlLFxuICAgICAgICAgICAgQ2xpZW50QXV0aEVycm9yTWVzc2FnZS5sb2dpblByb2dyZXNzRXJyb3IuZGVzYyk7XG4gICAgfVxuXG4gICAgc3RhdGljIGNyZWF0ZUFjcXVpcmVUb2tlbkluUHJvZ3Jlc3NFcnJvcigpOiBDbGllbnRBdXRoRXJyb3Ige1xuICAgICAgICByZXR1cm4gbmV3IENsaWVudEF1dGhFcnJvcihDbGllbnRBdXRoRXJyb3JNZXNzYWdlLmFjcXVpcmVUb2tlblByb2dyZXNzRXJyb3IuY29kZSxcbiAgICAgICAgICAgIENsaWVudEF1dGhFcnJvck1lc3NhZ2UuYWNxdWlyZVRva2VuUHJvZ3Jlc3NFcnJvci5kZXNjKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgY3JlYXRlVXNlckNhbmNlbGxlZEVycm9yKCk6IENsaWVudEF1dGhFcnJvciB7XG4gICAgICAgIHJldHVybiBuZXcgQ2xpZW50QXV0aEVycm9yKENsaWVudEF1dGhFcnJvck1lc3NhZ2UudXNlckNhbmNlbGxlZEVycm9yLmNvZGUsXG4gICAgICAgICAgICBDbGllbnRBdXRoRXJyb3JNZXNzYWdlLnVzZXJDYW5jZWxsZWRFcnJvci5kZXNjKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgY3JlYXRlRXJyb3JJbkNhbGxiYWNrRnVuY3Rpb24oZXJyb3JEZXNjOiBzdHJpbmcpOiBDbGllbnRBdXRoRXJyb3Ige1xuICAgICAgICByZXR1cm4gbmV3IENsaWVudEF1dGhFcnJvcihDbGllbnRBdXRoRXJyb3JNZXNzYWdlLmNhbGxiYWNrRXJyb3IuY29kZSxcbiAgICAgICAgICAgIGAke0NsaWVudEF1dGhFcnJvck1lc3NhZ2UuY2FsbGJhY2tFcnJvci5kZXNjfSAke2Vycm9yRGVzY30uYCk7XG4gICAgfVxuXG4gICAgc3RhdGljIGNyZWF0ZVVzZXJMb2dpblJlcXVpcmVkRXJyb3IoKSA6IENsaWVudEF1dGhFcnJvciB7XG4gICAgICAgIHJldHVybiBuZXcgQ2xpZW50QXV0aEVycm9yKENsaWVudEF1dGhFcnJvck1lc3NhZ2UudXNlckxvZ2luUmVxdWlyZWRFcnJvci5jb2RlLFxuICAgICAgICAgICAgQ2xpZW50QXV0aEVycm9yTWVzc2FnZS51c2VyTG9naW5SZXF1aXJlZEVycm9yLmRlc2MpO1xuICAgIH1cblxuICAgIHN0YXRpYyBjcmVhdGVVc2VyRG9lc05vdEV4aXN0RXJyb3IoKSA6IENsaWVudEF1dGhFcnJvciB7XG4gICAgICAgIHJldHVybiBuZXcgQ2xpZW50QXV0aEVycm9yKENsaWVudEF1dGhFcnJvck1lc3NhZ2UudXNlckRvZXNOb3RFeGlzdEVycm9yLmNvZGUsXG4gICAgICAgICAgICBDbGllbnRBdXRoRXJyb3JNZXNzYWdlLnVzZXJEb2VzTm90RXhpc3RFcnJvci5kZXNjKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgY3JlYXRlQ2xpZW50SW5mb0RlY29kaW5nRXJyb3IoY2F1Z2h0RXJyb3I6IHN0cmluZykgOiBDbGllbnRBdXRoRXJyb3Ige1xuICAgICAgICByZXR1cm4gbmV3IENsaWVudEF1dGhFcnJvcihDbGllbnRBdXRoRXJyb3JNZXNzYWdlLmNsaWVudEluZm9EZWNvZGluZ0Vycm9yLmNvZGUsXG4gICAgICAgICAgICBgJHtDbGllbnRBdXRoRXJyb3JNZXNzYWdlLmNsaWVudEluZm9EZWNvZGluZ0Vycm9yLmRlc2N9IEZhaWxlZCB3aXRoIGVycm9yOiAke2NhdWdodEVycm9yfWApO1xuICAgIH1cblxuICAgIHN0YXRpYyBjcmVhdGVDbGllbnRJbmZvTm90UG9wdWxhdGVkRXJyb3IoY2F1Z2h0RXJyb3I6IHN0cmluZykgOiBDbGllbnRBdXRoRXJyb3Ige1xuICAgICAgICByZXR1cm4gbmV3IENsaWVudEF1dGhFcnJvcihDbGllbnRBdXRoRXJyb3JNZXNzYWdlLmNsaWVudEluZm9Ob3RQb3B1bGF0ZWRFcnJvci5jb2RlLFxuICAgICAgICAgICAgYCR7Q2xpZW50QXV0aEVycm9yTWVzc2FnZS5jbGllbnRJbmZvTm90UG9wdWxhdGVkRXJyb3IuZGVzY30gRmFpbGVkIHdpdGggZXJyb3I6ICR7Y2F1Z2h0RXJyb3J9YCk7XG4gICAgfVxuXG4gICAgc3RhdGljIGNyZWF0ZUlkVG9rZW5OdWxsT3JFbXB0eUVycm9yKGludmFsaWRSYXdUb2tlblN0cmluZzogc3RyaW5nKSA6IENsaWVudEF1dGhFcnJvciB7XG4gICAgICAgIHJldHVybiBuZXcgQ2xpZW50QXV0aEVycm9yKENsaWVudEF1dGhFcnJvck1lc3NhZ2UubnVsbE9yRW1wdHlJZFRva2VuLmNvZGUsXG4gICAgICAgICAgICBgJHtDbGllbnRBdXRoRXJyb3JNZXNzYWdlLm51bGxPckVtcHR5SWRUb2tlbi5kZXNjfSBSYXcgSUQgVG9rZW4gVmFsdWU6ICR7aW52YWxpZFJhd1Rva2VuU3RyaW5nfWApO1xuICAgIH1cblxuICAgIHN0YXRpYyBjcmVhdGVJZFRva2VuUGFyc2luZ0Vycm9yKGNhdWdodFBhcnNpbmdFcnJvcjogc3RyaW5nKSA6IENsaWVudEF1dGhFcnJvciB7XG4gICAgICAgIHJldHVybiBuZXcgQ2xpZW50QXV0aEVycm9yKENsaWVudEF1dGhFcnJvck1lc3NhZ2UuaWRUb2tlbk5vdFBhcnNlZC5jb2RlLFxuICAgICAgICAgICAgYCR7Q2xpZW50QXV0aEVycm9yTWVzc2FnZS5pZFRva2VuTm90UGFyc2VkLmRlc2N9IEZhaWxlZCB3aXRoIGVycm9yOiAke2NhdWdodFBhcnNpbmdFcnJvcn1gKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgY3JlYXRlVG9rZW5FbmNvZGluZ0Vycm9yKGluY29ycmVjdGx5RW5jb2RlZFRva2VuOiBzdHJpbmcpIDogQ2xpZW50QXV0aEVycm9yIHtcbiAgICAgICAgcmV0dXJuIG5ldyBDbGllbnRBdXRoRXJyb3IoQ2xpZW50QXV0aEVycm9yTWVzc2FnZS50b2tlbkVuY29kaW5nRXJyb3IuY29kZSxcbiAgICAgICAgICAgIGAke0NsaWVudEF1dGhFcnJvck1lc3NhZ2UudG9rZW5FbmNvZGluZ0Vycm9yLmRlc2N9IEF0dGVtcHRlZCB0byBkZWNvZGU6ICR7aW5jb3JyZWN0bHlFbmNvZGVkVG9rZW59YCk7XG4gICAgfVxuXG4gICAgc3RhdGljIGNyZWF0ZUludmFsaWRJbnRlcmFjdGlvblR5cGVFcnJvcigpIDogQ2xpZW50QXV0aEVycm9yIHtcbiAgICAgICAgcmV0dXJuIG5ldyBDbGllbnRBdXRoRXJyb3IoQ2xpZW50QXV0aEVycm9yTWVzc2FnZS5pbnZhbGlkSW50ZXJhY3Rpb25UeXBlLmNvZGUsXG4gICAgICAgICAgICBDbGllbnRBdXRoRXJyb3JNZXNzYWdlLmludmFsaWRJbnRlcmFjdGlvblR5cGUuZGVzYyk7XG4gICAgfVxufVxuIiwiLypcbiAqIENvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxuICovXG5cbmV4cG9ydCBjb25zdCBBdXRoRXJyb3JNZXNzYWdlID0ge1xuICAgIHVuZXhwZWN0ZWRFcnJvcjoge1xuICAgICAgICBjb2RlOiBcInVuZXhwZWN0ZWRfZXJyb3JcIixcbiAgICAgICAgZGVzYzogXCJVbmV4cGVjdGVkIGVycm9yIGluIGF1dGhlbnRpY2F0aW9uLlwiXG4gICAgfVxufTtcblxuLyoqXG4gKiBHZW5lcmFsIGVycm9yIGNsYXNzIHRocm93biBieSB0aGUgTVNBTC5qcyBsaWJyYXJ5LlxuICovXG5leHBvcnQgY2xhc3MgQXV0aEVycm9yIGV4dGVuZHMgRXJyb3Ige1xuXG4gICAgZXJyb3JDb2RlOiBzdHJpbmc7XG4gICAgZXJyb3JNZXNzYWdlOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3RvcihlcnJvckNvZGU6IHN0cmluZywgZXJyb3JNZXNzYWdlPzogc3RyaW5nKSB7XG4gICAgICAgIHN1cGVyKGVycm9yTWVzc2FnZSk7XG4gICAgICAgIE9iamVjdC5zZXRQcm90b3R5cGVPZih0aGlzLCBBdXRoRXJyb3IucHJvdG90eXBlKTtcblxuICAgICAgICB0aGlzLmVycm9yQ29kZSA9IGVycm9yQ29kZTtcbiAgICAgICAgdGhpcy5lcnJvck1lc3NhZ2UgPSBlcnJvck1lc3NhZ2U7XG4gICAgICAgIHRoaXMubmFtZSA9IFwiQXV0aEVycm9yXCI7XG4gICAgfVxuXG4gICAgc3RhdGljIGNyZWF0ZVVuZXhwZWN0ZWRFcnJvcihlcnJEZXNjOiBzdHJpbmcpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBBdXRoRXJyb3IoQXV0aEVycm9yTWVzc2FnZS51bmV4cGVjdGVkRXJyb3IuY29kZSwgYCR7QXV0aEVycm9yTWVzc2FnZS51bmV4cGVjdGVkRXJyb3IuZGVzY306ICR7ZXJyRGVzY31gKTtcbiAgICB9XG59XG4iLCIvKlxuICogQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXG4gKi9cblxuaW1wb3J0IHsgSVVyaSB9IGZyb20gXCIuLi9JVXJpXCI7XG5pbXBvcnQgeyBJVGVuYW50RGlzY292ZXJ5UmVzcG9uc2UgfSBmcm9tIFwiLi9JVGVuYW50RGlzY292ZXJ5UmVzcG9uc2VcIjtcbmltcG9ydCB7IENsaWVudENvbmZpZ3VyYXRpb25FcnJvck1lc3NhZ2UgfSBmcm9tIFwiLi4vZXJyb3IvQ2xpZW50Q29uZmlndXJhdGlvbkVycm9yXCI7XG5pbXBvcnQgeyBYaHJDbGllbnQgfSBmcm9tIFwiLi4vWEhSQ2xpZW50XCI7XG5pbXBvcnQgeyBVcmxVdGlscyB9IGZyb20gXCIuLi91dGlscy9VcmxVdGlsc1wiO1xuXG4vKipcbiAqIEBoaWRkZW5cbiAqL1xuZXhwb3J0IGVudW0gQXV0aG9yaXR5VHlwZSB7XG4gICAgQWFkLFxuICAgIEFkZnMsXG4gICAgQjJDXG59XG5cbi8qKlxuICogQGhpZGRlblxuICovXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgQXV0aG9yaXR5IHtcbiAgICBjb25zdHJ1Y3RvcihhdXRob3JpdHk6IHN0cmluZywgdmFsaWRhdGVBdXRob3JpdHk6IGJvb2xlYW4pIHtcbiAgICAgICAgdGhpcy5Jc1ZhbGlkYXRpb25FbmFibGVkID0gdmFsaWRhdGVBdXRob3JpdHk7XG4gICAgICAgIHRoaXMuQ2Fub25pY2FsQXV0aG9yaXR5ID0gYXV0aG9yaXR5O1xuXG4gICAgICAgIHRoaXMudmFsaWRhdGVBc1VyaSgpO1xuICAgIH1cblxuICAgIHB1YmxpYyBhYnN0cmFjdCBnZXQgQXV0aG9yaXR5VHlwZSgpOiBBdXRob3JpdHlUeXBlO1xuXG4gICAgcHVibGljIElzVmFsaWRhdGlvbkVuYWJsZWQ6IGJvb2xlYW47XG5cbiAgICBwdWJsaWMgZ2V0IFRlbmFudCgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5DYW5vbmljYWxBdXRob3JpdHlVcmxDb21wb25lbnRzLlBhdGhTZWdtZW50c1swXTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHRlbmFudERpc2NvdmVyeVJlc3BvbnNlOiBJVGVuYW50RGlzY292ZXJ5UmVzcG9uc2U7XG5cbiAgICBwdWJsaWMgZ2V0IEF1dGhvcml6YXRpb25FbmRwb2ludCgpOiBzdHJpbmcge1xuICAgICAgICB0aGlzLnZhbGlkYXRlUmVzb2x2ZWQoKTtcbiAgICAgICAgcmV0dXJuIHRoaXMudGVuYW50RGlzY292ZXJ5UmVzcG9uc2UuQXV0aG9yaXphdGlvbkVuZHBvaW50LnJlcGxhY2UoXCJ7dGVuYW50fVwiLCB0aGlzLlRlbmFudCk7XG4gICAgfVxuXG4gICAgcHVibGljIGdldCBFbmRTZXNzaW9uRW5kcG9pbnQoKTogc3RyaW5nIHtcbiAgICAgICAgdGhpcy52YWxpZGF0ZVJlc29sdmVkKCk7XG4gICAgICAgIHJldHVybiB0aGlzLnRlbmFudERpc2NvdmVyeVJlc3BvbnNlLkVuZFNlc3Npb25FbmRwb2ludC5yZXBsYWNlKFwie3RlbmFudH1cIiwgdGhpcy5UZW5hbnQpO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgU2VsZlNpZ25lZEp3dEF1ZGllbmNlKCk6IHN0cmluZyB7XG4gICAgICAgIHRoaXMudmFsaWRhdGVSZXNvbHZlZCgpO1xuICAgICAgICByZXR1cm4gdGhpcy50ZW5hbnREaXNjb3ZlcnlSZXNwb25zZS5Jc3N1ZXIucmVwbGFjZShcInt0ZW5hbnR9XCIsIHRoaXMuVGVuYW50KTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHZhbGlkYXRlUmVzb2x2ZWQoKSB7XG4gICAgICAgIGlmICghdGhpcy50ZW5hbnREaXNjb3ZlcnlSZXNwb25zZSkge1xuICAgICAgICAgICAgdGhyb3cgXCJQbGVhc2UgY2FsbCBSZXNvbHZlRW5kcG9pbnRzQXN5bmMgZmlyc3RcIjtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEEgVVJMIHRoYXQgaXMgdGhlIGF1dGhvcml0eSBzZXQgYnkgdGhlIGRldmVsb3BlclxuICAgICAqL1xuICAgIHB1YmxpYyBnZXQgQ2Fub25pY2FsQXV0aG9yaXR5KCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLmNhbm9uaWNhbEF1dGhvcml0eTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0IENhbm9uaWNhbEF1dGhvcml0eSh1cmw6IHN0cmluZykge1xuICAgICAgICB0aGlzLmNhbm9uaWNhbEF1dGhvcml0eSA9IFVybFV0aWxzLkNhbm9uaWNhbGl6ZVVyaSh1cmwpO1xuICAgICAgICB0aGlzLmNhbm9uaWNhbEF1dGhvcml0eVVybENvbXBvbmVudHMgPSBudWxsO1xuICAgIH1cblxuICAgIHByaXZhdGUgY2Fub25pY2FsQXV0aG9yaXR5OiBzdHJpbmc7XG4gICAgcHJpdmF0ZSBjYW5vbmljYWxBdXRob3JpdHlVcmxDb21wb25lbnRzOiBJVXJpO1xuXG4gICAgcHVibGljIGdldCBDYW5vbmljYWxBdXRob3JpdHlVcmxDb21wb25lbnRzKCk6IElVcmkge1xuICAgICAgICBpZiAoIXRoaXMuY2Fub25pY2FsQXV0aG9yaXR5VXJsQ29tcG9uZW50cykge1xuICAgICAgICAgICAgdGhpcy5jYW5vbmljYWxBdXRob3JpdHlVcmxDb21wb25lbnRzID0gVXJsVXRpbHMuR2V0VXJsQ29tcG9uZW50cyh0aGlzLkNhbm9uaWNhbEF1dGhvcml0eSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcy5jYW5vbmljYWxBdXRob3JpdHlVcmxDb21wb25lbnRzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIC8vIGh0dHA6Ly9vcGVuaWQubmV0L3NwZWNzL29wZW5pZC1jb25uZWN0LWRpc2NvdmVyeS0xXzAuaHRtbCNQcm92aWRlck1ldGFkYXRhXG4gICAgICovXG4gICAgcHJvdGVjdGVkIGdldCBEZWZhdWx0T3BlbklkQ29uZmlndXJhdGlvbkVuZHBvaW50KCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiBgJHt0aGlzLkNhbm9uaWNhbEF1dGhvcml0eX12Mi4wLy53ZWxsLWtub3duL29wZW5pZC1jb25maWd1cmF0aW9uYDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHaXZlbiBhIHN0cmluZywgdmFsaWRhdGUgdGhhdCBpdCBpcyBvZiB0aGUgZm9ybSBodHRwczovL2RvbWFpbi9wYXRoXG4gICAgICovXG4gICAgcHJpdmF0ZSB2YWxpZGF0ZUFzVXJpKCkge1xuICAgICAgICBsZXQgY29tcG9uZW50cztcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbXBvbmVudHMgPSB0aGlzLkNhbm9uaWNhbEF1dGhvcml0eVVybENvbXBvbmVudHM7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIHRocm93IENsaWVudENvbmZpZ3VyYXRpb25FcnJvck1lc3NhZ2UuaW52YWxpZEF1dGhvcml0eVR5cGU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIWNvbXBvbmVudHMuUHJvdG9jb2wgfHwgY29tcG9uZW50cy5Qcm90b2NvbC50b0xvd2VyQ2FzZSgpICE9PSBcImh0dHBzOlwiKSB7XG4gICAgICAgICAgICB0aHJvdyBDbGllbnRDb25maWd1cmF0aW9uRXJyb3JNZXNzYWdlLmF1dGhvcml0eVVyaUluc2VjdXJlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFjb21wb25lbnRzLlBhdGhTZWdtZW50cyB8fCBjb21wb25lbnRzLlBhdGhTZWdtZW50cy5sZW5ndGggPCAxKSB7XG4gICAgICAgICAgICB0aHJvdyBDbGllbnRDb25maWd1cmF0aW9uRXJyb3JNZXNzYWdlLmF1dGhvcml0eVVyaUludmFsaWRQYXRoO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2FsbHMgdGhlIE9JREMgZW5kcG9pbnQgYW5kIHJldHVybnMgdGhlIHJlc3BvbnNlXG4gICAgICovXG4gICAgcHJpdmF0ZSBEaXNjb3ZlckVuZHBvaW50cyhvcGVuSWRDb25maWd1cmF0aW9uRW5kcG9pbnQ6IHN0cmluZyk6IFByb21pc2U8SVRlbmFudERpc2NvdmVyeVJlc3BvbnNlPiB7XG4gICAgICAgIGNvbnN0IGNsaWVudCA9IG5ldyBYaHJDbGllbnQoKTtcbiAgICAgICAgcmV0dXJuIGNsaWVudC5zZW5kUmVxdWVzdEFzeW5jKG9wZW5JZENvbmZpZ3VyYXRpb25FbmRwb2ludCwgXCJHRVRcIiwgLyogZW5hYmxlQ2FjaGluZzogKi8gdHJ1ZSlcbiAgICAgICAgICAgIC50aGVuKChyZXNwb25zZTogYW55KSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIDxJVGVuYW50RGlzY292ZXJ5UmVzcG9uc2U+e1xuICAgICAgICAgICAgICAgICAgICBBdXRob3JpemF0aW9uRW5kcG9pbnQ6IHJlc3BvbnNlLmF1dGhvcml6YXRpb25fZW5kcG9pbnQsXG4gICAgICAgICAgICAgICAgICAgIEVuZFNlc3Npb25FbmRwb2ludDogcmVzcG9uc2UuZW5kX3Nlc3Npb25fZW5kcG9pbnQsXG4gICAgICAgICAgICAgICAgICAgIElzc3VlcjogcmVzcG9uc2UuaXNzdWVyXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgYSBwcm9taXNlLlxuICAgICAqIENoZWNrcyB0byBzZWUgaWYgdGhlIGF1dGhvcml0eSBpcyBpbiB0aGUgY2FjaGVcbiAgICAgKiBEaXNjb3ZlciBlbmRwb2ludHMgdmlhIG9wZW5pZC1jb25maWd1cmF0aW9uXG4gICAgICogSWYgc3VjY2Vzc2Z1bCwgY2FjaGVzIHRoZSBlbmRwb2ludCBmb3IgbGF0ZXIgdXNlIGluIE9JRENcbiAgICAgKi9cbiAgICBwdWJsaWMgYXN5bmMgcmVzb2x2ZUVuZHBvaW50c0FzeW5jKCk6IFByb21pc2U8QXV0aG9yaXR5PiB7XG4gICAgICAgIGNvbnN0IG9wZW5JZENvbmZpZ3VyYXRpb25FbmRwb2ludFJlc3BvbnNlID0gYXdhaXQgdGhpcy5HZXRPcGVuSWRDb25maWd1cmF0aW9uRW5kcG9pbnRBc3luYygpO1xuICAgICAgICB0aGlzLnRlbmFudERpc2NvdmVyeVJlc3BvbnNlID0gYXdhaXQgdGhpcy5EaXNjb3ZlckVuZHBvaW50cyhvcGVuSWRDb25maWd1cmF0aW9uRW5kcG9pbnRSZXNwb25zZSk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyBhIHByb21pc2Ugd2l0aCB0aGUgVGVuYW50RGlzY292ZXJ5RW5kcG9pbnRcbiAgICAgKi9cbiAgICBwdWJsaWMgYWJzdHJhY3QgR2V0T3BlbklkQ29uZmlndXJhdGlvbkVuZHBvaW50QXN5bmMoKTogUHJvbWlzZTxzdHJpbmc+O1xufVxuIiwiZXhwb3J0IGNvbnN0IEVWRU5UX05BTUVfUFJFRklYID0gXCJtc2FsLlwiO1xuZXhwb3J0IGNvbnN0IEVWRU5UX05BTUVfS0VZID0gXCJldmVudF9uYW1lXCI7XG5leHBvcnQgY29uc3QgU1RBUlRfVElNRV9LRVkgPSBcInN0YXJ0X3RpbWVcIjtcbmV4cG9ydCBjb25zdCBFTEFQU0VEX1RJTUVfS0VZICA9IFwiZWxhcHNlZF90aW1lXCI7XG5cbmV4cG9ydCBjb25zdCBURUxFTUVUUllfQkxPQl9FVkVOVF9OQU1FUyA9ICB7XG4gICAgTXNhbENvcnJlbGF0aW9uSWRDb25zdFN0cktleTogXCJNaWNyb3NvZnQuTVNBTC5jb3JyZWxhdGlvbl9pZFwiLFxuICAgIEFwaVRlbGVtSWRDb25zdFN0cktleTogXCJtc2FsLmFwaV90ZWxlbV9pZFwiLFxuICAgIEFwaUlkQ29uc3RTdHJLZXk6IFwibXNhbC5hcGlfaWRcIixcbiAgICBCcm9rZXJBcHBDb25zdFN0cktleTogXCJNaWNyb3NvZnRfTVNBTF9icm9rZXJfYXBwXCIsXG4gICAgQ2FjaGVFdmVudENvdW50Q29uc3RTdHJLZXk6IFwiTWljcm9zb2Z0X01TQUxfY2FjaGVfZXZlbnRfY291bnRcIixcbiAgICBIdHRwRXZlbnRDb3VudFRlbGVtZXRyeUJhdGNoS2V5OiBcIk1pY3Jvc29mdF9NU0FMX2h0dHBfZXZlbnRfY291bnRcIixcbiAgICBJZHBDb25zdFN0cktleTogXCJNaWNyb3NvZnRfTVNBTF9pZHBcIixcbiAgICBJc1NpbGVudFRlbGVtZXRyeUJhdGNoS2V5OiBcIlwiLFxuICAgIElzU3VjY2Vzc2Z1bENvbnN0U3RyS2V5OiBcIk1pY3Jvc29mdF9NU0FMX2lzX3N1Y2Nlc3NmdWxcIixcbiAgICBSZXNwb25zZVRpbWVDb25zdFN0cktleTogXCJNaWNyb3NvZnRfTVNBTF9yZXNwb25zZV90aW1lXCIsXG4gICAgVGVuYW50SWRDb25zdFN0cktleTogXCJNaWNyb3NvZnRfTVNBTF90ZW5hbnRfaWRcIixcbiAgICBVaUV2ZW50Q291bnRUZWxlbWV0cnlCYXRjaEtleTogXCJNaWNyb3NvZnRfTVNBTF91aV9ldmVudF9jb3VudFwiXG59O1xuXG4vLyBUaGlzIGlzIHVzZWQgdG8gcmVwbGFjZSB0aGUgcmVhbCB0ZW5hbnQgaW4gdGVsZW1ldHJ5IGluZm9cbmV4cG9ydCBjb25zdCBURU5BTlRfUExBQ0VIT0xERVIgPSBcIjx0ZW5hbnQ+XCI7XG5cbiIsIi8qXG4gKiBDb3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cbiAqL1xuXG5pbXBvcnQgeyBTdHJpbmdVdGlscyB9IGZyb20gXCIuL3V0aWxzL1N0cmluZ1V0aWxzXCI7XG5pbXBvcnQgeyBsaWJyYXJ5VmVyc2lvbiB9IGZyb20gXCIuL3V0aWxzL0NvbnN0YW50c1wiO1xuXG5leHBvcnQgaW50ZXJmYWNlIElMb2dnZXJDYWxsYmFjayB7XG4gICAgKGxldmVsOiBMb2dMZXZlbCwgbWVzc2FnZTogc3RyaW5nLCBjb250YWluc1BpaTogYm9vbGVhbik6IHZvaWQ7XG59XG5cbmV4cG9ydCBlbnVtIExvZ0xldmVsIHtcbiAgICBFcnJvcixcbiAgICBXYXJuaW5nLFxuICAgIEluZm8sXG4gICAgVmVyYm9zZVxufVxuXG5leHBvcnQgY2xhc3MgTG9nZ2VyIHsvLyBTaW5nbGV0b24gQ2xhc3NcblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICAvLyBUT0RPOiBUaGlzIGRvZXMgbm90IHNlZW0gdG8gYmUgYSBzaW5nbGV0b24hISBDaGFuZ2Ugb3IgRGVsZXRlLlxuICAgIHByaXZhdGUgc3RhdGljIGluc3RhbmNlOiBMb2dnZXI7XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgcHJpdmF0ZSBjb3JyZWxhdGlvbklkOiBzdHJpbmc7XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgcHJpdmF0ZSBsZXZlbDogTG9nTGV2ZWwgPSBMb2dMZXZlbC5JbmZvO1xuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIHByaXZhdGUgcGlpTG9nZ2luZ0VuYWJsZWQ6IGJvb2xlYW47XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgcHJpdmF0ZSBsb2NhbENhbGxiYWNrOiBJTG9nZ2VyQ2FsbGJhY2s7XG5cbiAgICBjb25zdHJ1Y3Rvcihsb2NhbENhbGxiYWNrOiBJTG9nZ2VyQ2FsbGJhY2ssXG4gICAgICAgIG9wdGlvbnM6XG4gICAgICAgIHtcbiAgICAgICAgICAgIGNvcnJlbGF0aW9uSWQ/OiBzdHJpbmcsXG4gICAgICAgICAgICBsZXZlbD86IExvZ0xldmVsLFxuICAgICAgICAgICAgcGlpTG9nZ2luZ0VuYWJsZWQ/OiBib29sZWFuLFxuICAgICAgICB9ID0ge30pIHtcbiAgICAgICAgY29uc3Qge1xuICAgICAgICAgICAgY29ycmVsYXRpb25JZCA9IFwiXCIsXG4gICAgICAgICAgICBsZXZlbCA9IExvZ0xldmVsLkluZm8sXG4gICAgICAgICAgICBwaWlMb2dnaW5nRW5hYmxlZCA9IGZhbHNlXG4gICAgICAgIH0gPSBvcHRpb25zO1xuXG4gICAgICAgIHRoaXMubG9jYWxDYWxsYmFjayA9IGxvY2FsQ2FsbGJhY2s7XG4gICAgICAgIHRoaXMuY29ycmVsYXRpb25JZCA9IGNvcnJlbGF0aW9uSWQ7XG4gICAgICAgIHRoaXMubGV2ZWwgPSBsZXZlbDtcbiAgICAgICAgdGhpcy5waWlMb2dnaW5nRW5hYmxlZCA9IHBpaUxvZ2dpbmdFbmFibGVkO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBwcml2YXRlIGxvZ01lc3NhZ2UobG9nTGV2ZWw6IExvZ0xldmVsLCBsb2dNZXNzYWdlOiBzdHJpbmcsIGNvbnRhaW5zUGlpOiBib29sZWFuKTogdm9pZCB7XG4gICAgICAgIGlmICgobG9nTGV2ZWwgPiB0aGlzLmxldmVsKSB8fCAoIXRoaXMucGlpTG9nZ2luZ0VuYWJsZWQgJiYgY29udGFpbnNQaWkpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgdGltZXN0YW1wID0gbmV3IERhdGUoKS50b1VUQ1N0cmluZygpO1xuICAgICAgICBsZXQgbG9nOiBzdHJpbmc7XG4gICAgICAgIGlmICghU3RyaW5nVXRpbHMuaXNFbXB0eSh0aGlzLmNvcnJlbGF0aW9uSWQpKSB7XG4gICAgICAgICAgICBsb2cgPSB0aW1lc3RhbXAgKyBcIjpcIiArIHRoaXMuY29ycmVsYXRpb25JZCArIFwiLVwiICsgbGlicmFyeVZlcnNpb24oKSArIFwiLVwiICsgTG9nTGV2ZWxbbG9nTGV2ZWxdICsgXCIgXCIgKyBsb2dNZXNzYWdlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgbG9nID0gdGltZXN0YW1wICsgXCI6XCIgKyBsaWJyYXJ5VmVyc2lvbigpICsgXCItXCIgKyBMb2dMZXZlbFtsb2dMZXZlbF0gKyBcIiBcIiArIGxvZ01lc3NhZ2U7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5leGVjdXRlQ2FsbGJhY2sobG9nTGV2ZWwsIGxvZywgY29udGFpbnNQaWkpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBleGVjdXRlQ2FsbGJhY2sobGV2ZWw6IExvZ0xldmVsLCBtZXNzYWdlOiBzdHJpbmcsIGNvbnRhaW5zUGlpOiBib29sZWFuKSB7XG4gICAgICAgIGlmICh0aGlzLmxvY2FsQ2FsbGJhY2spIHtcbiAgICAgICAgICAgIHRoaXMubG9jYWxDYWxsYmFjayhsZXZlbCwgbWVzc2FnZSwgY29udGFpbnNQaWkpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIGVycm9yKG1lc3NhZ2U6IHN0cmluZyk6IHZvaWQge1xuICAgICAgICB0aGlzLmxvZ01lc3NhZ2UoTG9nTGV2ZWwuRXJyb3IsIG1lc3NhZ2UsIGZhbHNlKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgZXJyb3JQaWkobWVzc2FnZTogc3RyaW5nKTogdm9pZCB7XG4gICAgICAgIHRoaXMubG9nTWVzc2FnZShMb2dMZXZlbC5FcnJvciwgbWVzc2FnZSwgdHJ1ZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIHdhcm5pbmcobWVzc2FnZTogc3RyaW5nKTogdm9pZCB7XG4gICAgICAgIHRoaXMubG9nTWVzc2FnZShMb2dMZXZlbC5XYXJuaW5nLCBtZXNzYWdlLCBmYWxzZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIHdhcm5pbmdQaWkobWVzc2FnZTogc3RyaW5nKTogdm9pZCB7XG4gICAgICAgIHRoaXMubG9nTWVzc2FnZShMb2dMZXZlbC5XYXJuaW5nLCBtZXNzYWdlLCB0cnVlKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgaW5mbyhtZXNzYWdlOiBzdHJpbmcpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5sb2dNZXNzYWdlKExvZ0xldmVsLkluZm8sIG1lc3NhZ2UsIGZhbHNlKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgaW5mb1BpaShtZXNzYWdlOiBzdHJpbmcpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5sb2dNZXNzYWdlKExvZ0xldmVsLkluZm8sIG1lc3NhZ2UsIHRydWUpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICB2ZXJib3NlKG1lc3NhZ2U6IHN0cmluZyk6IHZvaWQge1xuICAgICAgICB0aGlzLmxvZ01lc3NhZ2UoTG9nTGV2ZWwuVmVyYm9zZSwgbWVzc2FnZSwgZmFsc2UpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICB2ZXJib3NlUGlpKG1lc3NhZ2U6IHN0cmluZyk6IHZvaWQge1xuICAgICAgICB0aGlzLmxvZ01lc3NhZ2UoTG9nTGV2ZWwuVmVyYm9zZSwgbWVzc2FnZSwgdHJ1ZSk7XG4gICAgfVxuXG4gICAgaXNQaWlMb2dnaW5nRW5hYmxlZCgpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucGlpTG9nZ2luZ0VuYWJsZWQ7XG4gICAgfVxufVxuIiwiLypcbiAqIENvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxuICovXG5cbmltcG9ydCB7IEF1dGhFcnJvciB9IGZyb20gXCIuL0F1dGhFcnJvclwiO1xuXG5leHBvcnQgY29uc3QgU2VydmVyRXJyb3JNZXNzYWdlID0ge1xuICAgIHNlcnZlclVuYXZhaWxhYmxlOiB7XG4gICAgICAgIGNvZGU6IFwic2VydmVyX3VuYXZhaWxhYmxlXCIsXG4gICAgICAgIGRlc2M6IFwiU2VydmVyIGlzIHRlbXBvcmFyaWx5IHVuYXZhaWxhYmxlLlwiXG4gICAgfSxcbiAgICB1bmtub3duU2VydmVyRXJyb3I6IHtcbiAgICAgICAgY29kZTogXCJ1bmtub3duX3NlcnZlcl9lcnJvclwiXG4gICAgfSxcbn07XG5cbi8qKlxuICogRXJyb3IgdGhyb3duIHdoZW4gdGhlcmUgaXMgYW4gZXJyb3Igd2l0aCB0aGUgc2VydmVyIGNvZGUsIGZvciBleGFtcGxlLCB1bmF2YWlsYWJpbGl0eS5cbiAqL1xuZXhwb3J0IGNsYXNzIFNlcnZlckVycm9yIGV4dGVuZHMgQXV0aEVycm9yIHtcblxuICAgIGNvbnN0cnVjdG9yKGVycm9yQ29kZTogc3RyaW5nLCBlcnJvck1lc3NhZ2U/OiBzdHJpbmcpIHtcbiAgICAgICAgc3VwZXIoZXJyb3JDb2RlLCBlcnJvck1lc3NhZ2UpO1xuICAgICAgICB0aGlzLm5hbWUgPSBcIlNlcnZlckVycm9yXCI7XG5cbiAgICAgICAgT2JqZWN0LnNldFByb3RvdHlwZU9mKHRoaXMsIFNlcnZlckVycm9yLnByb3RvdHlwZSk7XG4gICAgfVxuXG4gICAgc3RhdGljIGNyZWF0ZVNlcnZlclVuYXZhaWxhYmxlRXJyb3IoKTogU2VydmVyRXJyb3Ige1xuICAgICAgICByZXR1cm4gbmV3IFNlcnZlckVycm9yKFNlcnZlckVycm9yTWVzc2FnZS5zZXJ2ZXJVbmF2YWlsYWJsZS5jb2RlLFxuICAgICAgICAgICAgU2VydmVyRXJyb3JNZXNzYWdlLnNlcnZlclVuYXZhaWxhYmxlLmRlc2MpO1xuICAgIH1cblxuICAgIHN0YXRpYyBjcmVhdGVVbmtub3duU2VydmVyRXJyb3IoZXJyb3JEZXNjOiBzdHJpbmcpOiBTZXJ2ZXJFcnJvciB7XG4gICAgICAgIHJldHVybiBuZXcgU2VydmVyRXJyb3IoU2VydmVyRXJyb3JNZXNzYWdlLnVua25vd25TZXJ2ZXJFcnJvci5jb2RlLFxuICAgICAgICAgICAgZXJyb3JEZXNjKTtcbiAgICB9XG59XG4iLCIvKlxuICogQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXG4gKi9cblxuaW1wb3J0IHsgQWNjZXNzVG9rZW5DYWNoZUl0ZW0gfSBmcm9tIFwiLi9BY2Nlc3NUb2tlbkNhY2hlSXRlbVwiO1xuaW1wb3J0IHsgQWNjZXNzVG9rZW5LZXkgfSBmcm9tIFwiLi9BY2Nlc3NUb2tlbktleVwiO1xuaW1wb3J0IHsgQWNjZXNzVG9rZW5WYWx1ZSB9IGZyb20gXCIuL0FjY2Vzc1Rva2VuVmFsdWVcIjtcbmltcG9ydCB7IFNlcnZlclJlcXVlc3RQYXJhbWV0ZXJzIH0gZnJvbSBcIi4vU2VydmVyUmVxdWVzdFBhcmFtZXRlcnNcIjtcbmltcG9ydCB7IEF1dGhvcml0eSB9IGZyb20gXCIuL2F1dGhvcml0eS9BdXRob3JpdHlcIjtcbmltcG9ydCB7IENsaWVudEluZm8gfSBmcm9tIFwiLi9DbGllbnRJbmZvXCI7XG5pbXBvcnQgeyBDb25zdGFudHMsIEludGVyYWN0aW9uVHlwZSwgbGlicmFyeVZlcnNpb24gfSBmcm9tIFwiLi91dGlscy9Db25zdGFudHNcIjtcbmltcG9ydCB7IElkVG9rZW4gfSBmcm9tIFwiLi9JZFRva2VuXCI7XG5pbXBvcnQgeyBMb2dnZXIgfSBmcm9tIFwiLi9Mb2dnZXJcIjtcbmltcG9ydCB7IFN0b3JhZ2UgfSBmcm9tIFwiLi9TdG9yYWdlXCI7XG5pbXBvcnQgeyBBY2NvdW50IH0gZnJvbSBcIi4vQWNjb3VudFwiO1xuaW1wb3J0IHsgU2NvcGVTZXQgfSBmcm9tIFwiLi9TY29wZVNldFwiO1xuaW1wb3J0IHsgU3RyaW5nVXRpbHMgfSBmcm9tIFwiLi91dGlscy9TdHJpbmdVdGlsc1wiO1xuaW1wb3J0IHsgV2luZG93VXRpbHMgfSBmcm9tIFwiLi91dGlscy9XaW5kb3dVdGlsc1wiO1xuaW1wb3J0IHsgVG9rZW5VdGlscyB9IGZyb20gXCIuL3V0aWxzL1Rva2VuVXRpbHNcIjtcbmltcG9ydCB7IFRpbWVVdGlscyB9IGZyb20gXCIuL3V0aWxzL1RpbWVVdGlsc1wiO1xuaW1wb3J0IHsgVXJsVXRpbHMgfSBmcm9tIFwiLi91dGlscy9VcmxVdGlsc1wiO1xuaW1wb3J0IHsgUmVzcG9uc2VVdGlscyB9IGZyb20gXCIuL3V0aWxzL1Jlc3BvbnNlVXRpbHNcIjtcbmltcG9ydCB7IEF1dGhvcml0eUZhY3RvcnkgfSBmcm9tIFwiLi9hdXRob3JpdHkvQXV0aG9yaXR5RmFjdG9yeVwiO1xuaW1wb3J0IHsgQ29uZmlndXJhdGlvbiwgYnVpbGRDb25maWd1cmF0aW9uLCBUZWxlbWV0cnlPcHRpb25zIH0gZnJvbSBcIi4vQ29uZmlndXJhdGlvblwiO1xuaW1wb3J0IHsgQXV0aGVudGljYXRpb25QYXJhbWV0ZXJzIH0gZnJvbSBcIi4vQXV0aGVudGljYXRpb25QYXJhbWV0ZXJzXCI7XG5pbXBvcnQgeyBDbGllbnRDb25maWd1cmF0aW9uRXJyb3IgfSBmcm9tIFwiLi9lcnJvci9DbGllbnRDb25maWd1cmF0aW9uRXJyb3JcIjtcbmltcG9ydCB7IEF1dGhFcnJvciB9IGZyb20gXCIuL2Vycm9yL0F1dGhFcnJvclwiO1xuaW1wb3J0IHsgQ2xpZW50QXV0aEVycm9yLCBDbGllbnRBdXRoRXJyb3JNZXNzYWdlIH0gZnJvbSBcIi4vZXJyb3IvQ2xpZW50QXV0aEVycm9yXCI7XG5pbXBvcnQgeyBTZXJ2ZXJFcnJvciB9IGZyb20gXCIuL2Vycm9yL1NlcnZlckVycm9yXCI7XG5pbXBvcnQgeyBJbnRlcmFjdGlvblJlcXVpcmVkQXV0aEVycm9yIH0gZnJvbSBcIi4vZXJyb3IvSW50ZXJhY3Rpb25SZXF1aXJlZEF1dGhFcnJvclwiO1xuaW1wb3J0IHsgQXV0aFJlc3BvbnNlLCBidWlsZFJlc3BvbnNlU3RhdGVPbmx5IH0gZnJvbSBcIi4vQXV0aFJlc3BvbnNlXCI7XG5pbXBvcnQgVGVsZW1ldHJ5TWFuYWdlciBmcm9tIFwiLi90ZWxlbWV0cnkvVGVsZW1ldHJ5TWFuYWdlclwiO1xuaW1wb3J0IHsgVGVsZW1ldHJ5UGxhdGZvcm0sIFRlbGVtZXRyeUNvbmZpZyB9IGZyb20gXCIuL3RlbGVtZXRyeS9UZWxlbWV0cnlUeXBlc1wiO1xuXG4vLyBkZWZhdWx0IGF1dGhvcml0eVxuY29uc3QgREVGQVVMVF9BVVRIT1JJVFkgPSBcImh0dHBzOi8vbG9naW4ubWljcm9zb2Z0b25saW5lLmNvbS9jb21tb25cIjtcblxuLyoqXG4gKiBJbnRlcmZhY2UgdG8gaGFuZGxlIGlGcmFtZSBnZW5lcmF0aW9uLCBQb3B1cCBXaW5kb3cgY3JlYXRpb24gYW5kIHJlZGlyZWN0IGhhbmRsaW5nXG4gKi9cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgICBpbnRlcmZhY2UgV2luZG93IHtcbiAgICAgICAgbXNhbDogT2JqZWN0O1xuICAgICAgICBDdXN0b21FdmVudDogQ3VzdG9tRXZlbnQ7XG4gICAgICAgIEV2ZW50OiBFdmVudDtcbiAgICAgICAgYWN0aXZlUmVuZXdhbHM6IHt9O1xuICAgICAgICByZW5ld1N0YXRlczogQXJyYXk8c3RyaW5nPjtcbiAgICAgICAgY2FsbGJhY2tNYXBwZWRUb1JlbmV3U3RhdGVzIDoge307XG4gICAgICAgIHByb21pc2VNYXBwZWRUb1JlbmV3U3RhdGVzOiB7fTtcbiAgICAgICAgb3BlbmVkV2luZG93czogQXJyYXk8V2luZG93PjtcbiAgICAgICAgcmVxdWVzdFR5cGU6IHN0cmluZztcbiAgICB9XG59XG5cbi8qKlxuICogQGhpZGRlblxuICogQGlnbm9yZVxuICogcmVzcG9uc2VfdHlwZSBmcm9tIE9wZW5JRENvbm5lY3RcbiAqIFJlZmVyZW5jZXM6IGh0dHBzOi8vb3BlbmlkLm5ldC9zcGVjcy9vYXV0aC12Mi1tdWx0aXBsZS1yZXNwb25zZS10eXBlcy0xXzAuaHRtbCAmIGh0dHBzOi8vdG9vbHMuaWV0Zi5vcmcvaHRtbC9yZmM2NzQ5I3NlY3Rpb24tNC4yLjFcbiAqIFNpbmNlIHdlIHN1cHBvcnQgb25seSBpbXBsaWNpdCBmbG93IGluIHRoaXMgbGlicmFyeSwgd2UgcmVzdHJpY3QgdGhlIHJlc3BvbnNlX3R5cGUgc3VwcG9ydCB0byBvbmx5ICd0b2tlbicgYW5kICdpZF90b2tlbidcbiAqXG4gKi9cbmNvbnN0IFJlc3BvbnNlVHlwZXMgPSB7XG4gICAgaWRfdG9rZW46IFwiaWRfdG9rZW5cIixcbiAgICB0b2tlbjogXCJ0b2tlblwiLFxuICAgIGlkX3Rva2VuX3Rva2VuOiBcImlkX3Rva2VuIHRva2VuXCJcbn07XG5cbi8qKlxuICogQGhpZGRlblxuICogQGlnbm9yZVxuICovXG5leHBvcnQgaW50ZXJmYWNlIENhY2hlUmVzdWx0IHtcbiAgICBlcnJvckRlc2M6IHN0cmluZztcbiAgICB0b2tlbjogc3RyaW5nO1xuICAgIGVycm9yOiBzdHJpbmc7XG59XG5cbi8qKlxuICogQGhpZGRlblxuICogQGlnbm9yZVxuICogRGF0YSB0eXBlIHRvIGhvbGQgaW5mb3JtYXRpb24gYWJvdXQgc3RhdGUgcmV0dXJuZWQgZnJvbSB0aGUgc2VydmVyXG4gKi9cbmV4cG9ydCB0eXBlIFJlc3BvbnNlU3RhdGVJbmZvID0ge1xuICAgIHN0YXRlOiBzdHJpbmc7XG4gICAgc3RhdGVNYXRjaDogYm9vbGVhbjtcbiAgICByZXF1ZXN0VHlwZTogc3RyaW5nO1xufTtcblxuLyoqXG4gKiBBIHR5cGUgYWxpYXMgZm9yIGFuIGF1dGhSZXNwb25zZUNhbGxiYWNrIGZ1bmN0aW9uLlxuICoge0BsaW5rIChhdXRoUmVzcG9uc2VDYWxsYmFjazp0eXBlKX1cbiAqIEBwYXJhbSBhdXRoRXJyIGVycm9yIGNyZWF0ZWQgZm9yIGZhaWx1cmUgY2FzZXNcbiAqIEBwYXJhbSByZXNwb25zZSByZXNwb25zZSBjb250YWluaW5nIHRva2VuIHN0cmluZ3MgaW4gc3VjY2VzcyBjYXNlcywgb3IganVzdCBzdGF0ZSB2YWx1ZSBpbiBlcnJvciBjYXNlc1xuICovXG5leHBvcnQgdHlwZSBhdXRoUmVzcG9uc2VDYWxsYmFjayA9IChhdXRoRXJyOiBBdXRoRXJyb3IsIHJlc3BvbnNlPzogQXV0aFJlc3BvbnNlKSA9PiB2b2lkO1xuXG4vKipcbiAqIEEgdHlwZSBhbGlhcyBmb3IgYSB0b2tlblJlY2VpdmVkQ2FsbGJhY2sgZnVuY3Rpb24uXG4gKiB7QGxpbmsgKHRva2VuUmVjZWl2ZWRDYWxsYmFjazp0eXBlKX1cbiAqIEByZXR1cm5zIHJlc3BvbnNlIG9mIHR5cGUge0BsaW5rIChBdXRoUmVzcG9uc2U6dHlwZSl9XG4gKiBUaGUgZnVuY3Rpb24gdGhhdCB3aWxsIGdldCB0aGUgY2FsbCBiYWNrIG9uY2UgdGhpcyBBUEkgaXMgY29tcGxldGVkIChlaXRoZXIgc3VjY2Vzc2Z1bGx5IG9yIHdpdGggYSBmYWlsdXJlKS5cbiAqL1xuZXhwb3J0IHR5cGUgdG9rZW5SZWNlaXZlZENhbGxiYWNrID0gKHJlc3BvbnNlOiBBdXRoUmVzcG9uc2UpID0+IHZvaWQ7XG5cbi8qKlxuICogQSB0eXBlIGFsaWFzIGZvciBhIGVycm9yUmVjZWl2ZWRDYWxsYmFjayBmdW5jdGlvbi5cbiAqIHtAbGluayAoZXJyb3JSZWNlaXZlZENhbGxiYWNrOnR5cGUpfVxuICogQHJldHVybnMgcmVzcG9uc2Ugb2YgdHlwZSB7QGxpbmsgKEF1dGhFcnJvcjpjbGFzcyl9XG4gKiBAcmV0dXJucyB7c3RyaW5nfSBhY2NvdW50IHN0YXRlXG4gKi9cbmV4cG9ydCB0eXBlIGVycm9yUmVjZWl2ZWRDYWxsYmFjayA9IChhdXRoRXJyOiBBdXRoRXJyb3IsIGFjY291bnRTdGF0ZTogc3RyaW5nKSA9PiB2b2lkO1xuXG4vKipcbiAqIFVzZXJBZ2VudEFwcGxpY2F0aW9uIGNsYXNzXG4gKlxuICogT2JqZWN0IEluc3RhbmNlIHRoYXQgdGhlIGRldmVsb3BlciBjYW4gdXNlIHRvIG1ha2UgbG9naW5YWCBPUiBhY3F1aXJlVG9rZW5YWCBmdW5jdGlvbnNcbiAqL1xuZXhwb3J0IGNsYXNzIFVzZXJBZ2VudEFwcGxpY2F0aW9uIHtcblxuICAgIC8vIGlucHV0IENvbmZpZ3VyYXRpb24gYnkgdGhlIGRldmVsb3Blci91c2VyXG4gICAgcHJpdmF0ZSBjb25maWc6IENvbmZpZ3VyYXRpb247XG5cbiAgICAvLyBjYWxsYmFja3MgZm9yIHRva2VuL2Vycm9yXG4gICAgcHJpdmF0ZSBhdXRoUmVzcG9uc2VDYWxsYmFjazogYXV0aFJlc3BvbnNlQ2FsbGJhY2sgPSBudWxsO1xuICAgIHByaXZhdGUgdG9rZW5SZWNlaXZlZENhbGxiYWNrOiB0b2tlblJlY2VpdmVkQ2FsbGJhY2sgPSBudWxsO1xuICAgIHByaXZhdGUgZXJyb3JSZWNlaXZlZENhbGxiYWNrOiBlcnJvclJlY2VpdmVkQ2FsbGJhY2sgPSBudWxsO1xuXG4gICAgLy8gQWRkZWQgZm9yIHJlYWRhYmlsaXR5IGFzIHRoZXNlIHBhcmFtcyBhcmUgdmVyeSBmcmVxdWVudGx5IHVzZWRcbiAgICBwcml2YXRlIGxvZ2dlcjogTG9nZ2VyO1xuICAgIHByaXZhdGUgY2xpZW50SWQ6IHN0cmluZztcbiAgICBwcml2YXRlIGluQ29va2llOiBib29sZWFuO1xuICAgIHByaXZhdGUgdGVsZW1ldHJ5TWFuYWdlcjogVGVsZW1ldHJ5TWFuYWdlcjtcblxuICAgIC8vIENhY2hlIGFuZCBBY2NvdW50IGluZm8gcmVmZXJyZWQgYWNyb3NzIHRva2VuIGdyYW50IGZsb3dcbiAgICBwcm90ZWN0ZWQgY2FjaGVTdG9yYWdlOiBTdG9yYWdlO1xuICAgIHByaXZhdGUgYWNjb3VudDogQWNjb3VudDtcblxuICAgIC8vIHN0YXRlIHZhcmlhYmxlc1xuICAgIHByaXZhdGUgbG9naW5JblByb2dyZXNzOiBib29sZWFuO1xuICAgIHByaXZhdGUgYWNxdWlyZVRva2VuSW5Qcm9ncmVzczogYm9vbGVhbjtcbiAgICBwcml2YXRlIHNpbGVudEF1dGhlbnRpY2F0aW9uU3RhdGU6IHN0cmluZztcbiAgICBwcml2YXRlIHNpbGVudExvZ2luOiBib29sZWFuO1xuICAgIHByaXZhdGUgcmVkaXJlY3RDYWxsYmFja3NTZXQ6IGJvb2xlYW47XG5cbiAgICAvLyBBdXRob3JpdHkgRnVuY3Rpb25hbGl0eVxuICAgIHByb3RlY3RlZCBhdXRob3JpdHlJbnN0YW5jZTogQXV0aG9yaXR5O1xuXG4gICAgLyoqXG4gICAgICogc2V0dGVyIGZvciB0aGUgYXV0aG9yaXR5IFVSTFxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBhdXRob3JpdHlcbiAgICAgKi9cbiAgICAvLyBJZiB0aGUgZGV2ZWxvcGVyIHBhc3NlcyBhbiBhdXRob3JpdHksIGNyZWF0ZSBhbiBpbnN0YW5jZVxuICAgIHB1YmxpYyBzZXQgYXV0aG9yaXR5KHZhbCkge1xuICAgICAgICB0aGlzLmF1dGhvcml0eUluc3RhbmNlID0gQXV0aG9yaXR5RmFjdG9yeS5DcmVhdGVJbnN0YW5jZSh2YWwsIHRoaXMuY29uZmlnLmF1dGgudmFsaWRhdGVBdXRob3JpdHkpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIE1ldGhvZCB0byBtYW5hZ2UgdGhlIGF1dGhvcml0eSBVUkwuXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7c3RyaW5nfSBhdXRob3JpdHlcbiAgICAgKi9cbiAgICBwdWJsaWMgZ2V0IGF1dGhvcml0eSgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5hdXRob3JpdHlJbnN0YW5jZS5DYW5vbmljYWxBdXRob3JpdHk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0IHRoZSBjdXJyZW50IGF1dGhvcml0eSBpbnN0YW5jZSBmcm9tIHRoZSBNU0FMIGNvbmZpZ3VyYXRpb24gb2JqZWN0XG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7QGxpbmsgQXV0aG9yaXR5fSBhdXRob3JpdHkgaW5zdGFuY2VcbiAgICAgKi9cbiAgICBwdWJsaWMgZ2V0QXV0aG9yaXR5SW5zdGFuY2UoKTogQXV0aG9yaXR5IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYXV0aG9yaXR5SW5zdGFuY2U7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGNvbnN0cnVjdG9yXG4gICAgICogQ29uc3RydWN0b3IgZm9yIHRoZSBVc2VyQWdlbnRBcHBsaWNhdGlvbiB1c2VkIHRvIGluc3RhbnRpYXRlIHRoZSBVc2VyQWdlbnRBcHBsaWNhdGlvbiBvYmplY3RcbiAgICAgKlxuICAgICAqIEltcG9ydGFudCBhdHRyaWJ1dGVzIGluIHRoZSBDb25maWd1cmF0aW9uIG9iamVjdCBmb3IgYXV0aCBhcmU6XG4gICAgICogLSBjbGllbnRJRDogdGhlIGFwcGxpY2F0aW9uIElEIG9mIHlvdXIgYXBwbGljYXRpb24uXG4gICAgICogWW91IGNhbiBvYnRhaW4gb25lIGJ5IHJlZ2lzdGVyaW5nIHlvdXIgYXBwbGljYXRpb24gd2l0aCBvdXIgQXBwbGljYXRpb24gcmVnaXN0cmF0aW9uIHBvcnRhbCA6IGh0dHBzOi8vcG9ydGFsLmF6dXJlLmNvbS8jYmxhZGUvTWljcm9zb2Z0X0FBRF9JQU0vQWN0aXZlRGlyZWN0b3J5TWVudUJsYWRlL1JlZ2lzdGVyZWRBcHBzUHJldmlld1xuICAgICAqIC0gYXV0aG9yaXR5OiB0aGUgYXV0aG9yaXR5IFVSTCBmb3IgeW91ciBhcHBsaWNhdGlvbi5cbiAgICAgKlxuICAgICAqIEluIEF6dXJlIEFELCBhdXRob3JpdHkgaXMgYSBVUkwgaW5kaWNhdGluZyB0aGUgQXp1cmUgYWN0aXZlIGRpcmVjdG9yeSB0aGF0IE1TQUwgdXNlcyB0byBvYnRhaW4gdG9rZW5zLlxuICAgICAqIEl0IGlzIG9mIHRoZSBmb3JtIGh0dHBzOi8vbG9naW4ubWljcm9zb2Z0b25saW5lLmNvbS8mbHQ7RW50ZXJfdGhlX1RlbmFudF9JbmZvX0hlcmUmZ3Q7LlxuICAgICAqIElmIHlvdXIgYXBwbGljYXRpb24gc3VwcG9ydHMgQWNjb3VudHMgaW4gb25lIG9yZ2FuaXphdGlvbmFsIGRpcmVjdG9yeSwgcmVwbGFjZSBcIkVudGVyX3RoZV9UZW5hbnRfSW5mb19IZXJlXCIgdmFsdWUgd2l0aCB0aGUgVGVuYW50IElkIG9yIFRlbmFudCBuYW1lIChmb3IgZXhhbXBsZSwgY29udG9zby5taWNyb3NvZnQuY29tKS5cbiAgICAgKiBJZiB5b3VyIGFwcGxpY2F0aW9uIHN1cHBvcnRzIEFjY291bnRzIGluIGFueSBvcmdhbml6YXRpb25hbCBkaXJlY3RvcnksIHJlcGxhY2UgXCJFbnRlcl90aGVfVGVuYW50X0luZm9fSGVyZVwiIHZhbHVlIHdpdGggb3JnYW5pemF0aW9ucy5cbiAgICAgKiBJZiB5b3VyIGFwcGxpY2F0aW9uIHN1cHBvcnRzIEFjY291bnRzIGluIGFueSBvcmdhbml6YXRpb25hbCBkaXJlY3RvcnkgYW5kIHBlcnNvbmFsIE1pY3Jvc29mdCBhY2NvdW50cywgcmVwbGFjZSBcIkVudGVyX3RoZV9UZW5hbnRfSW5mb19IZXJlXCIgdmFsdWUgd2l0aCBjb21tb24uXG4gICAgICogVG8gcmVzdHJpY3Qgc3VwcG9ydCB0byBQZXJzb25hbCBNaWNyb3NvZnQgYWNjb3VudHMgb25seSwgcmVwbGFjZSBcIkVudGVyX3RoZV9UZW5hbnRfSW5mb19IZXJlXCIgdmFsdWUgd2l0aCBjb25zdW1lcnMuXG4gICAgICpcbiAgICAgKlxuICAgICAqIEluIEF6dXJlIEIyQywgYXV0aG9yaXR5IGlzIG9mIHRoZSBmb3JtIGh0dHBzOi8vJmx0O2luc3RhbmNlJmd0Oy90ZnAvJmx0O3RlbmFudCZndDsvJmx0O3BvbGljeU5hbWUmZ3Q7L1xuICAgICAqXG4gICAgICogQHBhcmFtIHtAbGluayAoQ29uZmlndXJhdGlvbjp0eXBlKX0gY29uZmlndXJhdGlvbiBvYmplY3QgZm9yIHRoZSBNU0FMIFVzZXJBZ2VudEFwcGxpY2F0aW9uIGluc3RhbmNlXG4gICAgICovXG4gICAgY29uc3RydWN0b3IoY29uZmlndXJhdGlvbjogQ29uZmlndXJhdGlvbikge1xuXG4gICAgICAgIC8vIFNldCB0aGUgQ29uZmlndXJhdGlvblxuICAgICAgICB0aGlzLmNvbmZpZyA9IGJ1aWxkQ29uZmlndXJhdGlvbihjb25maWd1cmF0aW9uKTtcblxuICAgICAgICAvLyBTZXQgdGhlIGNhbGxiYWNrIGJvb2xlYW5cbiAgICAgICAgdGhpcy5yZWRpcmVjdENhbGxiYWNrc1NldCA9IGZhbHNlO1xuXG4gICAgICAgIHRoaXMubG9nZ2VyID0gdGhpcy5jb25maWcuc3lzdGVtLmxvZ2dlcjtcbiAgICAgICAgdGhpcy5jbGllbnRJZCA9IHRoaXMuY29uZmlnLmF1dGguY2xpZW50SWQ7XG4gICAgICAgIHRoaXMuaW5Db29raWUgPSB0aGlzLmNvbmZpZy5jYWNoZS5zdG9yZUF1dGhTdGF0ZUluQ29va2llO1xuXG4gICAgICAgIHRoaXMudGVsZW1ldHJ5TWFuYWdlciA9IHRoaXMuZ2V0VGVsZW1ldHJ5TWFuYWdlckZyb21Db25maWcodGhpcy5jb25maWcuc3lzdGVtLnRlbGVtZXRyeSwgdGhpcy5jbGllbnRJZCk7XG5cbiAgICAgICAgLy8gaWYgbm8gYXV0aG9yaXR5IGlzIHBhc3NlZCwgc2V0IHRoZSBkZWZhdWx0OiBcImh0dHBzOi8vbG9naW4ubWljcm9zb2Z0b25saW5lLmNvbS9jb21tb25cIlxuICAgICAgICB0aGlzLmF1dGhvcml0eSA9IHRoaXMuY29uZmlnLmF1dGguYXV0aG9yaXR5IHx8IERFRkFVTFRfQVVUSE9SSVRZO1xuXG4gICAgICAgIC8vIHRyYWNrIGxvZ2luIGFuZCBhY3F1aXJlVG9rZW4gaW4gcHJvZ3Jlc3NcbiAgICAgICAgdGhpcy5sb2dpbkluUHJvZ3Jlc3MgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5hY3F1aXJlVG9rZW5JblByb2dyZXNzID0gZmFsc2U7XG5cbiAgICAgICAgLy8gY2FjaGUga2V5cyBtc2FsIC0gdHlwZXNjcmlwdCB0aHJvd3MgYW4gZXJyb3IgaWYgYW55IHZhbHVlIG90aGVyIHRoYW4gXCJsb2NhbFN0b3JhZ2VcIiBvciBcInNlc3Npb25TdG9yYWdlXCIgaXMgcGFzc2VkXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICB0aGlzLmNhY2hlU3RvcmFnZSA9IG5ldyBTdG9yYWdlKHRoaXMuY29uZmlnLmNhY2hlLmNhY2hlTG9jYXRpb24pO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICB0aHJvdyBDbGllbnRDb25maWd1cmF0aW9uRXJyb3IuY3JlYXRlSW52YWxpZENhY2hlTG9jYXRpb25Db25maWdFcnJvcih0aGlzLmNvbmZpZy5jYWNoZS5jYWNoZUxvY2F0aW9uKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEluaXRpYWxpemUgd2luZG93IGhhbmRsaW5nIGNvZGVcbiAgICAgICAgd2luZG93LmFjdGl2ZVJlbmV3YWxzID0ge307XG4gICAgICAgIHdpbmRvdy5yZW5ld1N0YXRlcyA9IFtdO1xuICAgICAgICB3aW5kb3cuY2FsbGJhY2tNYXBwZWRUb1JlbmV3U3RhdGVzID0geyB9O1xuICAgICAgICB3aW5kb3cucHJvbWlzZU1hcHBlZFRvUmVuZXdTdGF0ZXMgPSB7IH07XG4gICAgICAgIHdpbmRvdy5tc2FsID0gdGhpcztcblxuICAgICAgICBjb25zdCB1cmxIYXNoID0gd2luZG93LmxvY2F0aW9uLmhhc2g7XG4gICAgICAgIGNvbnN0IHVybENvbnRhaW5zSGFzaCA9IFVybFV0aWxzLnVybENvbnRhaW5zSGFzaCh1cmxIYXNoKTtcblxuICAgICAgICAvLyBPbiB0aGUgc2VydmVyIDMwMiAtIFJlZGlyZWN0LCBoYW5kbGUgdGhpc1xuICAgICAgICBpZiAoIXRoaXMuY29uZmlnLmZyYW1ld29yay5pc0FuZ3VsYXIgJiYgdXJsQ29udGFpbnNIYXNoICYmICFXaW5kb3dVdGlscy5pc0luSWZyYW1lKCkgJiYgIVdpbmRvd1V0aWxzLmlzSW5Qb3B1cCgpKSB7XG4gICAgICAgICAgICB0aGlzLmhhbmRsZUF1dGhlbnRpY2F0aW9uUmVzcG9uc2UodXJsSGFzaCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyAjcmVnaW9uIFJlZGlyZWN0IENhbGxiYWNrc1xuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKiBAaWdub3JlXG4gICAgICogU2V0IHRoZSBjYWxsYmFjayBmdW5jdGlvbnMgZm9yIHRoZSByZWRpcmVjdCBmbG93IHRvIHNlbmQgYmFjayB0aGUgc3VjY2VzcyBvciBlcnJvciBvYmplY3QuXG4gICAgICogQHBhcmFtIHtAbGluayAodG9rZW5SZWNlaXZlZENhbGxiYWNrOnR5cGUpfSBzdWNjZXNzQ2FsbGJhY2sgLSBDYWxsYmFjayB3aGljaCBjb250YWlucyB0aGUgQXV0aFJlc3BvbnNlIG9iamVjdCwgY29udGFpbmluZyBkYXRhIGZyb20gdGhlIHNlcnZlci5cbiAgICAgKiBAcGFyYW0ge0BsaW5rIChlcnJvclJlY2VpdmVkQ2FsbGJhY2s6dHlwZSl9IGVycm9yQ2FsbGJhY2sgLSBDYWxsYmFjayB3aGljaCBjb250YWlucyBhIEF1dGhFcnJvciBvYmplY3QsIGNvbnRhaW5pbmcgZXJyb3IgZGF0YSBmcm9tIGVpdGhlciB0aGUgc2VydmVyXG4gICAgICogb3IgdGhlIGxpYnJhcnksIGRlcGVuZGluZyBvbiB0aGUgb3JpZ2luIG9mIHRoZSBlcnJvci5cbiAgICAgKi9cbiAgICBoYW5kbGVSZWRpcmVjdENhbGxiYWNrKHRva2VuUmVjZWl2ZWRDYWxsYmFjazogdG9rZW5SZWNlaXZlZENhbGxiYWNrLCBlcnJvclJlY2VpdmVkQ2FsbGJhY2s6IGVycm9yUmVjZWl2ZWRDYWxsYmFjayk6IHZvaWQ7XG4gICAgaGFuZGxlUmVkaXJlY3RDYWxsYmFjayhhdXRoQ2FsbGJhY2s6IGF1dGhSZXNwb25zZUNhbGxiYWNrKTogdm9pZDtcbiAgICBoYW5kbGVSZWRpcmVjdENhbGxiYWNrKGF1dGhPclRva2VuQ2FsbGJhY2s6IGF1dGhSZXNwb25zZUNhbGxiYWNrIHwgdG9rZW5SZWNlaXZlZENhbGxiYWNrLCBlcnJvclJlY2VpdmVkQ2FsbGJhY2s/OiBlcnJvclJlY2VpdmVkQ2FsbGJhY2spOiB2b2lkIHtcbiAgICAgICAgaWYgKCFhdXRoT3JUb2tlbkNhbGxiYWNrKSB7XG4gICAgICAgICAgICB0aGlzLnJlZGlyZWN0Q2FsbGJhY2tzU2V0ID0gZmFsc2U7XG4gICAgICAgICAgICB0aHJvdyBDbGllbnRDb25maWd1cmF0aW9uRXJyb3IuY3JlYXRlSW52YWxpZENhbGxiYWNrT2JqZWN0RXJyb3IoYXV0aE9yVG9rZW5DYWxsYmFjayk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBTZXQgY2FsbGJhY2tzXG4gICAgICAgIGlmIChlcnJvclJlY2VpdmVkQ2FsbGJhY2spIHtcbiAgICAgICAgICAgIHRoaXMudG9rZW5SZWNlaXZlZENhbGxiYWNrID0gYXV0aE9yVG9rZW5DYWxsYmFjayBhcyB0b2tlblJlY2VpdmVkQ2FsbGJhY2s7XG4gICAgICAgICAgICB0aGlzLmVycm9yUmVjZWl2ZWRDYWxsYmFjayA9IGVycm9yUmVjZWl2ZWRDYWxsYmFjaztcbiAgICAgICAgICAgIHRoaXMubG9nZ2VyLndhcm5pbmcoXCJUaGlzIG92ZXJsb2FkIGZvciBjYWxsYmFjayBpcyBkZXByZWNhdGVkIC0gcGxlYXNlIGNoYW5nZSB0aGUgZm9ybWF0IG9mIHRoZSBjYWxsYmFja3MgdG8gYSBzaW5nbGUgY2FsbGJhY2sgYXMgc2hvd246IChlcnI6IEF1dGhFcnJvciwgcmVzcG9uc2U6IEF1dGhSZXNwb25zZSkuXCIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5hdXRoUmVzcG9uc2VDYWxsYmFjayA9IGF1dGhPclRva2VuQ2FsbGJhY2sgYXMgYXV0aFJlc3BvbnNlQ2FsbGJhY2s7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnJlZGlyZWN0Q2FsbGJhY2tzU2V0ID0gdHJ1ZTtcblxuICAgICAgICAvLyBPbiB0aGUgc2VydmVyIDMwMiAtIFJlZGlyZWN0LCBoYW5kbGUgdGhpc1xuICAgICAgICBpZiAoIXRoaXMuY29uZmlnLmZyYW1ld29yay5pc0FuZ3VsYXIpIHtcbiAgICAgICAgICAgIGNvbnN0IGNhY2hlZEhhc2ggPSB0aGlzLmNhY2hlU3RvcmFnZS5nZXRJdGVtKENvbnN0YW50cy51cmxIYXNoKTtcbiAgICAgICAgICAgIGlmIChjYWNoZWRIYXNoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wcm9jZXNzQ2FsbEJhY2soY2FjaGVkSGFzaCwgbnVsbCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIGF1dGhSZXNwb25zZUhhbmRsZXIoaW50ZXJhY3Rpb25UeXBlOiBJbnRlcmFjdGlvblR5cGUsIHJlc3BvbnNlOiBBdXRoUmVzcG9uc2UsIHJlc29sdmU/OiBhbnkpIDogdm9pZCB7XG4gICAgICAgIGlmIChpbnRlcmFjdGlvblR5cGUgPT09IENvbnN0YW50cy5pbnRlcmFjdGlvblR5cGVSZWRpcmVjdCkge1xuICAgICAgICAgICAgaWYgKHRoaXMuZXJyb3JSZWNlaXZlZENhbGxiYWNrKSB7XG4gICAgICAgICAgICAgICAgdGhpcy50b2tlblJlY2VpdmVkQ2FsbGJhY2socmVzcG9uc2UpO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLmF1dGhSZXNwb25zZUNhbGxiYWNrKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5hdXRoUmVzcG9uc2VDYWxsYmFjayhudWxsLCByZXNwb25zZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAoaW50ZXJhY3Rpb25UeXBlID09PSBDb25zdGFudHMuaW50ZXJhY3Rpb25UeXBlUG9wdXApIHtcbiAgICAgICAgICAgIHJlc29sdmUocmVzcG9uc2UpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhyb3cgQ2xpZW50QXV0aEVycm9yLmNyZWF0ZUludmFsaWRJbnRlcmFjdGlvblR5cGVFcnJvcigpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBhdXRoRXJyb3JIYW5kbGVyKGludGVyYWN0aW9uVHlwZTogSW50ZXJhY3Rpb25UeXBlLCBhdXRoRXJyOiBBdXRoRXJyb3IsIHJlc3BvbnNlOiBBdXRoUmVzcG9uc2UsIHJlamVjdD86IGFueSkgOiB2b2lkIHtcbiAgICAgICAgaWYgKGludGVyYWN0aW9uVHlwZSA9PT0gQ29uc3RhbnRzLmludGVyYWN0aW9uVHlwZVJlZGlyZWN0KSB7XG4gICAgICAgICAgICBpZiAodGhpcy5lcnJvclJlY2VpdmVkQ2FsbGJhY2spIHtcbiAgICAgICAgICAgICAgICB0aGlzLmVycm9yUmVjZWl2ZWRDYWxsYmFjayhhdXRoRXJyLCByZXNwb25zZS5hY2NvdW50U3RhdGUpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLmF1dGhSZXNwb25zZUNhbGxiYWNrKGF1dGhFcnIsIHJlc3BvbnNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChpbnRlcmFjdGlvblR5cGUgPT09IENvbnN0YW50cy5pbnRlcmFjdGlvblR5cGVQb3B1cCkge1xuICAgICAgICAgICAgcmVqZWN0KGF1dGhFcnIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhyb3cgQ2xpZW50QXV0aEVycm9yLmNyZWF0ZUludmFsaWRJbnRlcmFjdGlvblR5cGVFcnJvcigpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gI2VuZHJlZ2lvblxuICAgIC8qKlxuICAgICAqIFVzZSB3aGVuIGluaXRpYXRpbmcgdGhlIGxvZ2luIHByb2Nlc3MgYnkgcmVkaXJlY3RpbmcgdGhlIHVzZXIncyBicm93c2VyIHRvIHRoZSBhdXRob3JpemF0aW9uIGVuZHBvaW50LlxuICAgICAqIEBwYXJhbSB7QGxpbmsgKEF1dGhlbnRpY2F0aW9uUGFyYW1ldGVyczp0eXBlKX1cbiAgICAgKi9cbiAgICBsb2dpblJlZGlyZWN0KHJlcXVlc3Q/OiBBdXRoZW50aWNhdGlvblBhcmFtZXRlcnMpOiB2b2lkIHtcbiAgICAgICAgLy8gVGhyb3cgZXJyb3IgaWYgY2FsbGJhY2tzIGFyZSBub3Qgc2V0IGJlZm9yZSByZWRpcmVjdFxuICAgICAgICBpZiAoIXRoaXMucmVkaXJlY3RDYWxsYmFja3NTZXQpIHtcbiAgICAgICAgICAgIHRocm93IENsaWVudENvbmZpZ3VyYXRpb25FcnJvci5jcmVhdGVSZWRpcmVjdENhbGxiYWNrc05vdFNldEVycm9yKCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5hY3F1aXJlVG9rZW5JbnRlcmFjdGl2ZShDb25zdGFudHMuaW50ZXJhY3Rpb25UeXBlUmVkaXJlY3QsIHRydWUsIHJlcXVlc3QpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFVzZSB3aGVuIHlvdSB3YW50IHRvIG9idGFpbiBhbiBhY2Nlc3NfdG9rZW4gZm9yIHlvdXIgQVBJIGJ5IHJlZGlyZWN0aW5nIHRoZSB1c2VyJ3MgYnJvd3NlciB3aW5kb3cgdG8gdGhlIGF1dGhvcml6YXRpb24gZW5kcG9pbnQuXG4gICAgICogQHBhcmFtIHtAbGluayAoQXV0aGVudGljYXRpb25QYXJhbWV0ZXJzOnR5cGUpfVxuICAgICAqXG4gICAgICogVG8gcmVuZXcgaWRUb2tlbiwgcGxlYXNlIHBhc3MgY2xpZW50SWQgYXMgdGhlIG9ubHkgc2NvcGUgaW4gdGhlIEF1dGhlbnRpY2F0aW9uIFBhcmFtZXRlcnNcbiAgICAgKi9cbiAgICBhY3F1aXJlVG9rZW5SZWRpcmVjdChyZXF1ZXN0OiBBdXRoZW50aWNhdGlvblBhcmFtZXRlcnMpOiB2b2lkIHtcbiAgICAgICAgaWYgKCFyZXF1ZXN0KSB7XG4gICAgICAgICAgICB0aHJvdyBDbGllbnRDb25maWd1cmF0aW9uRXJyb3IuY3JlYXRlRW1wdHlSZXF1ZXN0RXJyb3IoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFRocm93IGVycm9yIGlmIGNhbGxiYWNrcyBhcmUgbm90IHNldCBiZWZvcmUgcmVkaXJlY3RcbiAgICAgICAgaWYgKCF0aGlzLnJlZGlyZWN0Q2FsbGJhY2tzU2V0KSB7XG4gICAgICAgICAgICB0aHJvdyBDbGllbnRDb25maWd1cmF0aW9uRXJyb3IuY3JlYXRlUmVkaXJlY3RDYWxsYmFja3NOb3RTZXRFcnJvcigpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuYWNxdWlyZVRva2VuSW50ZXJhY3RpdmUoQ29uc3RhbnRzLmludGVyYWN0aW9uVHlwZVJlZGlyZWN0LCBmYWxzZSwgcmVxdWVzdCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVXNlIHdoZW4gaW5pdGlhdGluZyB0aGUgbG9naW4gcHJvY2VzcyB2aWEgb3BlbmluZyBhIHBvcHVwIHdpbmRvdyBpbiB0aGUgdXNlcidzIGJyb3dzZXJcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7QGxpbmsgKEF1dGhlbnRpY2F0aW9uUGFyYW1ldGVyczp0eXBlKX1cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtQcm9taXNlLjxBdXRoUmVzcG9uc2U+fSAtIGEgcHJvbWlzZSB0aGF0IGlzIGZ1bGZpbGxlZCB3aGVuIHRoaXMgZnVuY3Rpb24gaGFzIGNvbXBsZXRlZCwgb3IgcmVqZWN0ZWQgaWYgYW4gZXJyb3Igd2FzIHJhaXNlZC4gUmV0dXJucyB0aGUge0BsaW5rIEF1dGhSZXNwb25zZX0gb2JqZWN0XG4gICAgICovXG4gICAgbG9naW5Qb3B1cChyZXF1ZXN0PzogQXV0aGVudGljYXRpb25QYXJhbWV0ZXJzKTogUHJvbWlzZTxBdXRoUmVzcG9uc2U+IHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlPEF1dGhSZXNwb25zZT4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5hY3F1aXJlVG9rZW5JbnRlcmFjdGl2ZShDb25zdGFudHMuaW50ZXJhY3Rpb25UeXBlUG9wdXAsIHRydWUsIHJlcXVlc3QsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFVzZSB3aGVuIHlvdSB3YW50IHRvIG9idGFpbiBhbiBhY2Nlc3NfdG9rZW4gZm9yIHlvdXIgQVBJIHZpYSBvcGVuaW5nIGEgcG9wdXAgd2luZG93IGluIHRoZSB1c2VyJ3MgYnJvd3NlclxuICAgICAqIEBwYXJhbSB7QGxpbmsgQXV0aGVudGljYXRpb25QYXJhbWV0ZXJzfVxuICAgICAqXG4gICAgICogVG8gcmVuZXcgaWRUb2tlbiwgcGxlYXNlIHBhc3MgY2xpZW50SWQgYXMgdGhlIG9ubHkgc2NvcGUgaW4gdGhlIEF1dGhlbnRpY2F0aW9uIFBhcmFtZXRlcnNcbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZS48QXV0aFJlc3BvbnNlPn0gLSBhIHByb21pc2UgdGhhdCBpcyBmdWxmaWxsZWQgd2hlbiB0aGlzIGZ1bmN0aW9uIGhhcyBjb21wbGV0ZWQsIG9yIHJlamVjdGVkIGlmIGFuIGVycm9yIHdhcyByYWlzZWQuIFJldHVybnMgdGhlIHtAbGluayBBdXRoUmVzcG9uc2V9IG9iamVjdFxuICAgICAqL1xuICAgIGFjcXVpcmVUb2tlblBvcHVwKHJlcXVlc3Q6IEF1dGhlbnRpY2F0aW9uUGFyYW1ldGVycyk6IFByb21pc2U8QXV0aFJlc3BvbnNlPiB7XG4gICAgICAgIGlmICghcmVxdWVzdCkge1xuICAgICAgICAgICAgdGhyb3cgQ2xpZW50Q29uZmlndXJhdGlvbkVycm9yLmNyZWF0ZUVtcHR5UmVxdWVzdEVycm9yKCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2U8QXV0aFJlc3BvbnNlPigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICB0aGlzLmFjcXVpcmVUb2tlbkludGVyYWN0aXZlKENvbnN0YW50cy5pbnRlcmFjdGlvblR5cGVQb3B1cCwgZmFsc2UsIHJlcXVlc3QsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vICNyZWdpb24gQWNxdWlyZSBUb2tlblxuXG4gICAgLyoqXG4gICAgICogVXNlIHdoZW4gaW5pdGlhdGluZyB0aGUgbG9naW4gcHJvY2VzcyBvciB3aGVuIHlvdSB3YW50IHRvIG9idGFpbiBhbiBhY2Nlc3NfdG9rZW4gZm9yIHlvdXIgQVBJLFxuICAgICAqIGVpdGhlciBieSByZWRpcmVjdGluZyB0aGUgdXNlcidzIGJyb3dzZXIgd2luZG93IHRvIHRoZSBhdXRob3JpemF0aW9uIGVuZHBvaW50IG9yIHZpYSBvcGVuaW5nIGEgcG9wdXAgd2luZG93IGluIHRoZSB1c2VyJ3MgYnJvd3Nlci5cbiAgICAgKiBAcGFyYW0ge0BsaW5rIChBdXRoZW50aWNhdGlvblBhcmFtZXRlcnM6dHlwZSl9XG4gICAgICpcbiAgICAgKiBUbyByZW5ldyBpZFRva2VuLCBwbGVhc2UgcGFzcyBjbGllbnRJZCBhcyB0aGUgb25seSBzY29wZSBpbiB0aGUgQXV0aGVudGljYXRpb24gUGFyYW1ldGVyc1xuICAgICAqL1xuICAgIHByaXZhdGUgYWNxdWlyZVRva2VuSW50ZXJhY3RpdmUoaW50ZXJhY3Rpb25UeXBlOiBJbnRlcmFjdGlvblR5cGUsIGlzTG9naW5DYWxsOiBib29sZWFuLCByZXF1ZXN0PzogQXV0aGVudGljYXRpb25QYXJhbWV0ZXJzLCByZXNvbHZlPzogYW55LCByZWplY3Q/OiBhbnkpOiB2b2lkIHtcblxuICAgICAgICAvLyBJZiBhbHJlYWR5IGluIHByb2dyZXNzLCBkbyBub3QgcHJvY2VlZFxuICAgICAgICBpZiAodGhpcy5sb2dpbkluUHJvZ3Jlc3MgfHwgdGhpcy5hY3F1aXJlVG9rZW5JblByb2dyZXNzKSB7XG4gICAgICAgICAgICBjb25zdCB0aHJvd25FcnJvciA9IHRoaXMubG9naW5JblByb2dyZXNzID8gQ2xpZW50QXV0aEVycm9yLmNyZWF0ZUxvZ2luSW5Qcm9ncmVzc0Vycm9yKCkgOiBDbGllbnRBdXRoRXJyb3IuY3JlYXRlQWNxdWlyZVRva2VuSW5Qcm9ncmVzc0Vycm9yKCk7XG4gICAgICAgICAgICBjb25zdCBzdGF0ZU9ubHlSZXNwb25zZSA9IGJ1aWxkUmVzcG9uc2VTdGF0ZU9ubHkodGhpcy5nZXRBY2NvdW50U3RhdGUocmVxdWVzdCAmJiByZXF1ZXN0LnN0YXRlKSk7XG4gICAgICAgICAgICB0aGlzLmF1dGhFcnJvckhhbmRsZXIoaW50ZXJhY3Rpb25UeXBlLFxuICAgICAgICAgICAgICAgIHRocm93bkVycm9yLFxuICAgICAgICAgICAgICAgIHN0YXRlT25seVJlc3BvbnNlLFxuICAgICAgICAgICAgICAgIHJlamVjdCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICAvLyBpZiBleHRyYVNjb3Blc1RvQ29uc2VudCBpcyBwYXNzZWQgaW4gbG9naW5DYWxsLCBhcHBlbmQgdGhlbSB0byB0aGUgbG9naW4gcmVxdWVzdFxuICAgICAgICBjb25zdCBzY29wZXM6IEFycmF5PHN0cmluZz4gPSBpc0xvZ2luQ2FsbCA/IHRoaXMuYXBwZW5kU2NvcGVzKHJlcXVlc3QpIDogcmVxdWVzdC5zY29wZXM7XG5cbiAgICAgICAgLy8gVmFsaWRhdGUgYW5kIGZpbHRlciBzY29wZXMgKHRoZSB2YWxpZGF0ZSBmdW5jdGlvbiB3aWxsIHRocm93IGlmIHZhbGlkYXRpb24gZmFpbHMpXG4gICAgICAgIHRoaXMudmFsaWRhdGVJbnB1dFNjb3BlKHNjb3BlcywgIWlzTG9naW5DYWxsKTtcblxuICAgICAgICAvLyBHZXQgdGhlIGFjY291bnQgb2JqZWN0IGlmIGEgc2Vzc2lvbiBleGlzdHNcbiAgICAgICAgY29uc3QgYWNjb3VudDogQWNjb3VudCA9IChyZXF1ZXN0ICYmIHJlcXVlc3QuYWNjb3VudCAmJiAhaXNMb2dpbkNhbGwpID8gcmVxdWVzdC5hY2NvdW50IDogdGhpcy5nZXRBY2NvdW50KCk7XG5cbiAgICAgICAgLy8gSWYgbm8gc2Vzc2lvbiBleGlzdHMsIHByb21wdCB0aGUgdXNlciB0byBsb2dpbi5cbiAgICAgICAgaWYgKCFhY2NvdW50ICYmICFTZXJ2ZXJSZXF1ZXN0UGFyYW1ldGVycy5pc1NTT1BhcmFtKHJlcXVlc3QpKSB7XG4gICAgICAgICAgICBpZiAoaXNMb2dpbkNhbGwpIHtcbiAgICAgICAgICAgICAgICAvLyBleHRyYWN0IEFEQUwgaWRfdG9rZW4gaWYgZXhpc3RzXG4gICAgICAgICAgICAgICAgY29uc3QgYWRhbElkVG9rZW4gPSB0aGlzLmV4dHJhY3RBREFMSWRUb2tlbigpO1xuXG4gICAgICAgICAgICAgICAgLy8gc2lsZW50IGxvZ2luIGlmIEFEQUwgaWRfdG9rZW4gaXMgcmV0cmlldmVkIHN1Y2Nlc3NmdWxseSAtIFNTT1xuICAgICAgICAgICAgICAgIGlmIChhZGFsSWRUb2tlbiAmJiAhc2NvcGVzKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubG9nZ2VyLmluZm8oXCJBREFMJ3MgaWRUb2tlbiBleGlzdHMuIEV4dHJhY3RpbmcgbG9naW4gaW5mb3JtYXRpb24gZnJvbSBBREFMJ3MgaWRUb2tlbiBcIik7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHRva2VuUmVxdWVzdDogQXV0aGVudGljYXRpb25QYXJhbWV0ZXJzID0gdGhpcy5idWlsZElEVG9rZW5SZXF1ZXN0KHJlcXVlc3QpO1xuXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2lsZW50TG9naW4gPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmFjcXVpcmVUb2tlblNpbGVudCh0b2tlblJlcXVlc3QpLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zaWxlbnRMb2dpbiA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2dnZXIuaW5mbyhcIlVuaWZpZWQgY2FjaGUgY2FsbCBpcyBzdWNjZXNzZnVsXCIpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmF1dGhSZXNwb25zZUhhbmRsZXIoaW50ZXJhY3Rpb25UeXBlLCByZXNwb25zZSwgcmVzb2x2ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgIH0sIChlcnJvcikgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zaWxlbnRMb2dpbiA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2dnZXIuZXJyb3IoXCJFcnJvciBvY2N1cnJlZCBkdXJpbmcgdW5pZmllZCBjYWNoZSBBVFM6IFwiICsgZXJyb3IpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBwcm9jZWVkIHRvIGxvZ2luIHNpbmNlIEFUUyBmYWlsZWRcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYWNxdWlyZVRva2VuSGVscGVyKG51bGwsIGludGVyYWN0aW9uVHlwZSwgaXNMb2dpbkNhbGwsIHJlcXVlc3QsIHNjb3BlcywgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIE5vIEFEQUwgdG9rZW4gZm91bmQsIHByb2NlZWQgdG8gbG9naW5cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hY3F1aXJlVG9rZW5IZWxwZXIobnVsbCwgaW50ZXJhY3Rpb25UeXBlLCBpc0xvZ2luQ2FsbCwgcmVxdWVzdCwgc2NvcGVzLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIEFjcXVpcmVUb2tlbiBjYWxsLCBidXQgbm8gYWNjb3VudCBvciBjb250ZXh0IGdpdmVuLCBzbyB0aHJvdyBlcnJvclxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5sb2dnZXIuaW5mbyhcIlVzZXIgbG9naW4gaXMgcmVxdWlyZWRcIik7XG4gICAgICAgICAgICAgICAgdGhyb3cgQ2xpZW50QXV0aEVycm9yLmNyZWF0ZVVzZXJMb2dpblJlcXVpcmVkRXJyb3IoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyBVc2VyIHNlc3Npb24gZXhpc3RzXG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5hY3F1aXJlVG9rZW5IZWxwZXIoYWNjb3VudCwgaW50ZXJhY3Rpb25UeXBlLCBpc0xvZ2luQ2FsbCwgcmVxdWVzdCwgc2NvcGVzLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqIEBpZ25vcmVcbiAgICAgKiBIZWxwZXIgZnVuY3Rpb24gdG8gYWNxdWlyZVRva2VuXG4gICAgICpcbiAgICAgKi9cbiAgICBwcml2YXRlIGFjcXVpcmVUb2tlbkhlbHBlcihhY2NvdW50OiBBY2NvdW50LCBpbnRlcmFjdGlvblR5cGU6IEludGVyYWN0aW9uVHlwZSwgaXNMb2dpbkNhbGw6IGJvb2xlYW4sIHJlcXVlc3Q/OiBBdXRoZW50aWNhdGlvblBhcmFtZXRlcnMsIHNjb3Blcz86IEFycmF5PHN0cmluZz4sIHJlc29sdmU/OiBhbnksIHJlamVjdD86IGFueSk6IHZvaWQge1xuICAgIC8vIFRyYWNrIHRoZSBhY3F1aXJlVG9rZW4gcHJvZ3Jlc3NcbiAgICAgICAgaWYgKGlzTG9naW5DYWxsKSB7XG4gICAgICAgICAgICB0aGlzLmxvZ2luSW5Qcm9ncmVzcyA9IHRydWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmFjcXVpcmVUb2tlbkluUHJvZ3Jlc3MgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3Qgc2NvcGUgPSBzY29wZXMgPyBzY29wZXMuam9pbihcIiBcIikudG9Mb3dlckNhc2UoKSA6IHRoaXMuY2xpZW50SWQudG9Mb3dlckNhc2UoKTtcblxuICAgICAgICBsZXQgc2VydmVyQXV0aGVudGljYXRpb25SZXF1ZXN0OiBTZXJ2ZXJSZXF1ZXN0UGFyYW1ldGVycztcbiAgICAgICAgY29uc3QgYWNxdWlyZVRva2VuQXV0aG9yaXR5ID0gKHJlcXVlc3QgJiYgcmVxdWVzdC5hdXRob3JpdHkpID8gQXV0aG9yaXR5RmFjdG9yeS5DcmVhdGVJbnN0YW5jZShyZXF1ZXN0LmF1dGhvcml0eSwgdGhpcy5jb25maWcuYXV0aC52YWxpZGF0ZUF1dGhvcml0eSkgOiB0aGlzLmF1dGhvcml0eUluc3RhbmNlO1xuXG4gICAgICAgIGxldCBwb3BVcFdpbmRvdzogV2luZG93O1xuICAgICAgICBpZiAoaW50ZXJhY3Rpb25UeXBlID09PSBDb25zdGFudHMuaW50ZXJhY3Rpb25UeXBlUG9wdXApIHtcbiAgICAgICAgICAgIC8vIEdlbmVyYXRlIGEgcG9wdXAgd2luZG93XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIHBvcFVwV2luZG93ID0gdGhpcy5vcGVuUG9wdXAoXCJhYm91dDpibGFua1wiLCBcIm1zYWxcIiwgQ29uc3RhbnRzLnBvcFVwV2lkdGgsIENvbnN0YW50cy5wb3BVcEhlaWdodCk7XG5cbiAgICAgICAgICAgICAgICAvLyBQdXNoIHBvcHVwIHdpbmRvdyBoYW5kbGUgb250byBzdGFjayBmb3IgdHJhY2tpbmdcbiAgICAgICAgICAgICAgICBXaW5kb3dVdGlscy50cmFja1BvcHVwKHBvcFVwV2luZG93KTtcbiAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmxvZ2luSW5Qcm9ncmVzcyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHRoaXMuYWNxdWlyZVRva2VuSW5Qcm9ncmVzcyA9IGZhbHNlO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5sb2dnZXIuaW5mbyhDbGllbnRBdXRoRXJyb3JNZXNzYWdlLnBvcFVwV2luZG93RXJyb3IuY29kZSArIFwiOlwiICsgQ2xpZW50QXV0aEVycm9yTWVzc2FnZS5wb3BVcFdpbmRvd0Vycm9yLmRlc2MpO1xuICAgICAgICAgICAgICAgIHRoaXMuY2FjaGVTdG9yYWdlLnNldEl0ZW0oQ29uc3RhbnRzLm1zYWxFcnJvciwgQ2xpZW50QXV0aEVycm9yTWVzc2FnZS5wb3BVcFdpbmRvd0Vycm9yLmNvZGUpO1xuICAgICAgICAgICAgICAgIHRoaXMuY2FjaGVTdG9yYWdlLnNldEl0ZW0oQ29uc3RhbnRzLm1zYWxFcnJvckRlc2NyaXB0aW9uLCBDbGllbnRBdXRoRXJyb3JNZXNzYWdlLnBvcFVwV2luZG93RXJyb3IuZGVzYyk7XG4gICAgICAgICAgICAgICAgaWYgKHJlamVjdCkge1xuICAgICAgICAgICAgICAgICAgICByZWplY3QoQ2xpZW50QXV0aEVycm9yLmNyZWF0ZVBvcHVwV2luZG93RXJyb3IoKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoIXBvcFVwV2luZG93KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgYWNxdWlyZVRva2VuQXV0aG9yaXR5LnJlc29sdmVFbmRwb2ludHNBc3luYygpLnRoZW4oYXN5bmMgKCkgPT4ge1xuICAgICAgICAgICAgLy8gT24gRnVsZmlsbG1lbnRcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlVHlwZTogc3RyaW5nID0gaXNMb2dpbkNhbGwgPyBSZXNwb25zZVR5cGVzLmlkX3Rva2VuIDogdGhpcy5nZXRUb2tlblR5cGUoYWNjb3VudCwgc2NvcGVzLCBmYWxzZSk7XG4gICAgICAgICAgICBsZXQgbG9naW5TdGFydFBhZ2U6IHN0cmluZztcblxuICAgICAgICAgICAgaWYgKGlzTG9naW5DYWxsKSB7XG4gICAgICAgICAgICAgICAgLy8gaWYgdGhlIHVzZXIgc2V0cyB0aGUgbG9naW4gc3RhcnQgcGFnZSAtIGFuZ3VsYXIgb25seT8/XG4gICAgICAgICAgICAgICAgbG9naW5TdGFydFBhZ2UgPSB0aGlzLmNhY2hlU3RvcmFnZS5nZXRJdGVtKENvbnN0YW50cy5hbmd1bGFyTG9naW5SZXF1ZXN0KTtcbiAgICAgICAgICAgICAgICBpZiAoIWxvZ2luU3RhcnRQYWdlIHx8IGxvZ2luU3RhcnRQYWdlID09PSBcIlwiKSB7XG4gICAgICAgICAgICAgICAgICAgIGxvZ2luU3RhcnRQYWdlID0gd2luZG93LmxvY2F0aW9uLmhyZWY7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jYWNoZVN0b3JhZ2Uuc2V0SXRlbShDb25zdGFudHMuYW5ndWxhckxvZ2luUmVxdWVzdCwgXCJcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBzZXJ2ZXJBdXRoZW50aWNhdGlvblJlcXVlc3QgPSBuZXcgU2VydmVyUmVxdWVzdFBhcmFtZXRlcnMoXG4gICAgICAgICAgICAgICAgYWNxdWlyZVRva2VuQXV0aG9yaXR5LFxuICAgICAgICAgICAgICAgIHRoaXMuY2xpZW50SWQsXG4gICAgICAgICAgICAgICAgc2NvcGVzLFxuICAgICAgICAgICAgICAgIHJlc3BvbnNlVHlwZSxcbiAgICAgICAgICAgICAgICB0aGlzLmdldFJlZGlyZWN0VXJpKCksXG4gICAgICAgICAgICAgICAgcmVxdWVzdCAmJiByZXF1ZXN0LnN0YXRlXG4gICAgICAgICAgICApO1xuXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZUNhY2hlRW50cmllcyhzZXJ2ZXJBdXRoZW50aWNhdGlvblJlcXVlc3QsIGFjY291bnQsIGxvZ2luU3RhcnRQYWdlKTtcblxuICAgICAgICAgICAgLy8gcG9wdWxhdGUgUXVlcnlQYXJhbWV0ZXJzIChzaWQvbG9naW5faGludC9kb21haW5faGludCkgYW5kIGFueSBvdGhlciBleHRyYVF1ZXJ5UGFyYW1ldGVycyBzZXQgYnkgdGhlIGRldmVsb3BlclxuICAgICAgICAgICAgc2VydmVyQXV0aGVudGljYXRpb25SZXF1ZXN0LnBvcHVsYXRlUXVlcnlQYXJhbXMoYWNjb3VudCwgcmVxdWVzdCk7XG5cbiAgICAgICAgICAgIC8vIENvbnN0cnVjdCB1cmxOYXZpZ2F0ZVxuICAgICAgICAgICAgY29uc3QgdXJsTmF2aWdhdGUgPSBVcmxVdGlscy5jcmVhdGVOYXZpZ2F0ZVVybChzZXJ2ZXJBdXRoZW50aWNhdGlvblJlcXVlc3QpICsgQ29uc3RhbnRzLnJlc3BvbnNlX21vZGVfZnJhZ21lbnQ7XG5cbiAgICAgICAgICAgIC8vIHNldCBzdGF0ZSBpbiBjYWNoZVxuICAgICAgICAgICAgaWYgKGludGVyYWN0aW9uVHlwZSA9PT0gQ29uc3RhbnRzLmludGVyYWN0aW9uVHlwZVJlZGlyZWN0KSB7XG4gICAgICAgICAgICAgICAgaWYgKCFpc0xvZ2luQ2FsbCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNhY2hlU3RvcmFnZS5zZXRJdGVtKENvbnN0YW50cy5zdGF0ZUFjcXVpcmVUb2tlbiwgc2VydmVyQXV0aGVudGljYXRpb25SZXF1ZXN0LnN0YXRlLCB0aGlzLmluQ29va2llKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGludGVyYWN0aW9uVHlwZSA9PT0gQ29uc3RhbnRzLmludGVyYWN0aW9uVHlwZVBvcHVwKSB7XG4gICAgICAgICAgICAgICAgd2luZG93LnJlbmV3U3RhdGVzLnB1c2goc2VydmVyQXV0aGVudGljYXRpb25SZXF1ZXN0LnN0YXRlKTtcbiAgICAgICAgICAgICAgICB3aW5kb3cucmVxdWVzdFR5cGUgPSBpc0xvZ2luQ2FsbCA/IENvbnN0YW50cy5sb2dpbiA6IENvbnN0YW50cy5yZW5ld1Rva2VuO1xuXG4gICAgICAgICAgICAgICAgLy8gUmVnaXN0ZXIgY2FsbGJhY2sgdG8gY2FwdHVyZSByZXN1bHRzIGZyb20gc2VydmVyXG4gICAgICAgICAgICAgICAgdGhpcy5yZWdpc3RlckNhbGxiYWNrKHNlcnZlckF1dGhlbnRpY2F0aW9uUmVxdWVzdC5zdGF0ZSwgc2NvcGUsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRocm93IENsaWVudEF1dGhFcnJvci5jcmVhdGVJbnZhbGlkSW50ZXJhY3Rpb25UeXBlRXJyb3IoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gcHJvbXB0IHVzZXIgZm9yIGludGVyYWN0aW9uXG4gICAgICAgICAgICB0aGlzLm5hdmlnYXRlV2luZG93KHVybE5hdmlnYXRlLCBwb3BVcFdpbmRvdyk7XG5cbiAgICAgICAgICAgIC8vIHBvcFVwV2luZG93IHdpbGwgYmUgbnVsbCBmb3IgcmVkaXJlY3RzLCBzbyB3ZSBkb250IG5lZWQgdG8gYXR0ZW1wdCB0byBtb25pdG9yIHRoZSB3aW5kb3dcbiAgICAgICAgICAgIGlmIChwb3BVcFdpbmRvdykge1xuICAgICAgICAgICAgICAgIGNvbnN0IGhhc2ggPSBhd2FpdCBXaW5kb3dVdGlscy5tb25pdG9yV2luZG93Rm9ySGFzaChwb3BVcFdpbmRvdywgdGhpcy5jb25maWcuc3lzdGVtLmxvYWRGcmFtZVRpbWVvdXQpO1xuICAgICAgICAgICAgICAgIGlmIChoYXNoKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIEhhc2ggZm91bmRcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5oYW5kbGVBdXRoZW50aWNhdGlvblJlc3BvbnNlKGhhc2gpO1xuXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubG9naW5JblByb2dyZXNzID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYWNxdWlyZVRva2VuSW5Qcm9ncmVzcyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxvZ2dlci5pbmZvKFwiQ2xvc2luZyBwb3B1cCB3aW5kb3dcIik7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gVE9ETzogQ2hlY2sgaG93IHRoaXMgY2FuIGJlIGV4dHJhY3RlZCBmb3IgYW55IGZyYW1ld29yayBzcGVjaWZpYyBjb2RlP1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5jb25maWcuZnJhbWV3b3JrLmlzQW5ndWxhcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5icm9hZGNhc3QoXCJtc2FsOnBvcFVwSGFzaENoYW5nZWRcIiwgaGFzaCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBXaW5kb3dVdGlscy5jbG9zZVBvcHVwcygpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gV2luZG93IGNsb3NlZFxuICAgICAgICAgICAgICAgICAgICBpZiAocmVqZWN0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZWplY3QoQ2xpZW50QXV0aEVycm9yLmNyZWF0ZVVzZXJDYW5jZWxsZWRFcnJvcigpKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmNvbmZpZy5mcmFtZXdvcmsuaXNBbmd1bGFyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmJyb2FkY2FzdChcIm1zYWw6cG9wVXBDbG9zZWRcIiwgQ2xpZW50QXV0aEVycm9yTWVzc2FnZS51c2VyQ2FuY2VsbGVkRXJyb3IuY29kZSArIENvbnN0YW50cy5yZXNvdXJjZURlbGltaXRlciArIENsaWVudEF1dGhFcnJvck1lc3NhZ2UudXNlckNhbmNlbGxlZEVycm9yLmRlc2MpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2dpbkluUHJvZ3Jlc3MgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hY3F1aXJlVG9rZW5JblByb2dyZXNzID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KS5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmxvZ2dlci53YXJuaW5nKFwiY291bGQgbm90IHJlc29sdmUgZW5kcG9pbnRzXCIpO1xuICAgICAgICAgICAgdGhpcy5hdXRoRXJyb3JIYW5kbGVyKGludGVyYWN0aW9uVHlwZSwgQ2xpZW50QXV0aEVycm9yLmNyZWF0ZUVuZHBvaW50UmVzb2x1dGlvbkVycm9yKGVyci50b1N0cmluZyksIGJ1aWxkUmVzcG9uc2VTdGF0ZU9ubHkocmVxdWVzdC5zdGF0ZSksIHJlamVjdCk7XG4gICAgICAgICAgICBpZiAocG9wVXBXaW5kb3cpIHtcbiAgICAgICAgICAgICAgICBwb3BVcFdpbmRvdy5jbG9zZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBVc2UgdGhpcyBmdW5jdGlvbiB0byBvYnRhaW4gYSB0b2tlbiBiZWZvcmUgZXZlcnkgY2FsbCB0byB0aGUgQVBJIC8gcmVzb3VyY2UgcHJvdmlkZXJcbiAgICAgKlxuICAgICAqIE1TQUwgcmV0dXJuJ3MgYSBjYWNoZWQgdG9rZW4gd2hlbiBhdmFpbGFibGVcbiAgICAgKiBPciBpdCBzZW5kJ3MgYSByZXF1ZXN0IHRvIHRoZSBTVFMgdG8gb2J0YWluIGEgbmV3IHRva2VuIHVzaW5nIGEgaGlkZGVuIGlmcmFtZS5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7QGxpbmsgQXV0aGVudGljYXRpb25QYXJhbWV0ZXJzfVxuICAgICAqXG4gICAgICogVG8gcmVuZXcgaWRUb2tlbiwgcGxlYXNlIHBhc3MgY2xpZW50SWQgYXMgdGhlIG9ubHkgc2NvcGUgaW4gdGhlIEF1dGhlbnRpY2F0aW9uIFBhcmFtZXRlcnNcbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZS48QXV0aFJlc3BvbnNlPn0gLSBhIHByb21pc2UgdGhhdCBpcyBmdWxmaWxsZWQgd2hlbiB0aGlzIGZ1bmN0aW9uIGhhcyBjb21wbGV0ZWQsIG9yIHJlamVjdGVkIGlmIGFuIGVycm9yIHdhcyByYWlzZWQuIFJldHVybnMgdGhlIHtAbGluayBBdXRoUmVzcG9uc2V9IG9iamVjdFxuICAgICAqXG4gICAgICovXG4gICAgYWNxdWlyZVRva2VuU2lsZW50KHJlcXVlc3Q6IEF1dGhlbnRpY2F0aW9uUGFyYW1ldGVycyk6IFByb21pc2U8QXV0aFJlc3BvbnNlPiB7XG4gICAgICAgIGlmICghcmVxdWVzdCkge1xuICAgICAgICAgICAgdGhyb3cgQ2xpZW50Q29uZmlndXJhdGlvbkVycm9yLmNyZWF0ZUVtcHR5UmVxdWVzdEVycm9yKCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlPEF1dGhSZXNwb25zZT4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuXG4gICAgICAgICAgICAvLyBWYWxpZGF0ZSBhbmQgZmlsdGVyIHNjb3BlcyAodGhlIHZhbGlkYXRlIGZ1bmN0aW9uIHdpbGwgdGhyb3cgaWYgdmFsaWRhdGlvbiBmYWlscylcbiAgICAgICAgICAgIHRoaXMudmFsaWRhdGVJbnB1dFNjb3BlKHJlcXVlc3Quc2NvcGVzLCB0cnVlKTtcblxuICAgICAgICAgICAgY29uc3Qgc2NvcGUgPSByZXF1ZXN0LnNjb3Blcy5qb2luKFwiIFwiKS50b0xvd2VyQ2FzZSgpO1xuXG4gICAgICAgICAgICAvLyBpZiB0aGUgZGV2ZWxvcGVyIHBhc3NlcyBhbiBhY2NvdW50LCBnaXZlIHRoYXQgYWNjb3VudCB0aGUgcHJpb3JpdHlcbiAgICAgICAgICAgIGNvbnN0IGFjY291bnQ6IEFjY291bnQgPSByZXF1ZXN0LmFjY291bnQgfHwgdGhpcy5nZXRBY2NvdW50KCk7XG5cbiAgICAgICAgICAgIC8vIGV4dHJhY3QgaWYgdGhlcmUgaXMgYW4gYWRhbElkVG9rZW4gc3Rhc2hlZCBpbiB0aGUgY2FjaGVcbiAgICAgICAgICAgIGNvbnN0IGFkYWxJZFRva2VuID0gdGhpcy5jYWNoZVN0b3JhZ2UuZ2V0SXRlbShDb25zdGFudHMuYWRhbElkVG9rZW4pO1xuXG4gICAgICAgICAgICAvLyBpZiB0aGVyZSBpcyBubyBhY2NvdW50IGxvZ2dlZCBpbiBhbmQgbm8gbG9naW5faGludC9zaWQgaXMgcGFzc2VkIGluIHRoZSByZXF1ZXN0XG4gICAgICAgICAgICBpZiAoIWFjY291bnQgJiYgIShyZXF1ZXN0LnNpZCAgfHwgcmVxdWVzdC5sb2dpbkhpbnQpICYmIFN0cmluZ1V0aWxzLmlzRW1wdHkoYWRhbElkVG9rZW4pICkge1xuICAgICAgICAgICAgICAgIHRoaXMubG9nZ2VyLmluZm8oXCJVc2VyIGxvZ2luIGlzIHJlcXVpcmVkXCIpO1xuICAgICAgICAgICAgICAgIHJldHVybiByZWplY3QoQ2xpZW50QXV0aEVycm9yLmNyZWF0ZVVzZXJMb2dpblJlcXVpcmVkRXJyb3IoKSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlVHlwZSA9IHRoaXMuZ2V0VG9rZW5UeXBlKGFjY291bnQsIHJlcXVlc3Quc2NvcGVzLCB0cnVlKTtcblxuICAgICAgICAgICAgY29uc3Qgc2VydmVyQXV0aGVudGljYXRpb25SZXF1ZXN0ID0gbmV3IFNlcnZlclJlcXVlc3RQYXJhbWV0ZXJzKFxuICAgICAgICAgICAgICAgIEF1dGhvcml0eUZhY3RvcnkuQ3JlYXRlSW5zdGFuY2UocmVxdWVzdC5hdXRob3JpdHksIHRoaXMuY29uZmlnLmF1dGgudmFsaWRhdGVBdXRob3JpdHkpLFxuICAgICAgICAgICAgICAgIHRoaXMuY2xpZW50SWQsXG4gICAgICAgICAgICAgICAgcmVxdWVzdC5zY29wZXMsXG4gICAgICAgICAgICAgICAgcmVzcG9uc2VUeXBlLFxuICAgICAgICAgICAgICAgIHRoaXMuZ2V0UmVkaXJlY3RVcmkoKSxcbiAgICAgICAgICAgICAgICByZXF1ZXN0ICYmIHJlcXVlc3Quc3RhdGVcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICAvLyBwb3B1bGF0ZSBRdWVyeVBhcmFtZXRlcnMgKHNpZC9sb2dpbl9oaW50L2RvbWFpbl9oaW50KSBhbmQgYW55IG90aGVyIGV4dHJhUXVlcnlQYXJhbWV0ZXJzIHNldCBieSB0aGUgZGV2ZWxvcGVyXG4gICAgICAgICAgICBpZiAoU2VydmVyUmVxdWVzdFBhcmFtZXRlcnMuaXNTU09QYXJhbShyZXF1ZXN0KSB8fCBhY2NvdW50KSB7XG4gICAgICAgICAgICAgICAgc2VydmVyQXV0aGVudGljYXRpb25SZXF1ZXN0LnBvcHVsYXRlUXVlcnlQYXJhbXMoYWNjb3VudCwgcmVxdWVzdCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBpZiB1c2VyIGRpZG4ndCBwYXNzIGxvZ2luX2hpbnQvc2lkIGFuZCBhZGFsJ3MgaWR0b2tlbiBpcyBwcmVzZW50LCBleHRyYWN0IHRoZSBsb2dpbl9oaW50IGZyb20gdGhlIGFkYWxJZFRva2VuXG4gICAgICAgICAgICBlbHNlIGlmICghYWNjb3VudCAmJiAhU3RyaW5nVXRpbHMuaXNFbXB0eShhZGFsSWRUb2tlbikpIHtcbiAgICAgICAgICAgICAgICAvLyBpZiBhZGFsSWRUb2tlbiBleGlzdHMsIGV4dHJhY3QgdGhlIFNTTyBpbmZvIGZyb20gdGhlIHNhbWVcbiAgICAgICAgICAgICAgICBjb25zdCBhZGFsSWRUb2tlbk9iamVjdCA9IFRva2VuVXRpbHMuZXh0cmFjdElkVG9rZW4oYWRhbElkVG9rZW4pO1xuICAgICAgICAgICAgICAgIHRoaXMubG9nZ2VyLnZlcmJvc2UoXCJBREFMJ3MgaWRUb2tlbiBleGlzdHMuIEV4dHJhY3RpbmcgbG9naW4gaW5mb3JtYXRpb24gZnJvbSBBREFMJ3MgaWRUb2tlbiBcIik7XG4gICAgICAgICAgICAgICAgc2VydmVyQXV0aGVudGljYXRpb25SZXF1ZXN0LnBvcHVsYXRlUXVlcnlQYXJhbXMoYWNjb3VudCwgbnVsbCwgYWRhbElkVG9rZW5PYmplY3QpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgdXNlckNvbnRhaW5lZENsYWltcyA9IHJlcXVlc3QuY2xhaW1zUmVxdWVzdCB8fCBzZXJ2ZXJBdXRoZW50aWNhdGlvblJlcXVlc3QuY2xhaW1zVmFsdWU7XG5cbiAgICAgICAgICAgIGxldCBhdXRoRXJyOiBBdXRoRXJyb3I7XG4gICAgICAgICAgICBsZXQgY2FjaGVSZXN1bHRSZXNwb25zZTtcblxuICAgICAgICAgICAgaWYgKCF1c2VyQ29udGFpbmVkQ2xhaW1zICYmICFyZXF1ZXN0LmZvcmNlUmVmcmVzaCkge1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIGNhY2hlUmVzdWx0UmVzcG9uc2UgPSB0aGlzLmdldENhY2hlZFRva2VuKHNlcnZlckF1dGhlbnRpY2F0aW9uUmVxdWVzdCwgYWNjb3VudCk7XG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgICAgICBhdXRoRXJyID0gZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIHJlc29sdmUvcmVqZWN0IGJhc2VkIG9uIGNhY2hlUmVzdWx0XG4gICAgICAgICAgICBpZiAoY2FjaGVSZXN1bHRSZXNwb25zZSkge1xuICAgICAgICAgICAgICAgIHRoaXMubG9nZ2VyLmluZm8oXCJUb2tlbiBpcyBhbHJlYWR5IGluIGNhY2hlIGZvciBzY29wZTpcIiArIHNjb3BlKTtcbiAgICAgICAgICAgICAgICByZXNvbHZlKGNhY2hlUmVzdWx0UmVzcG9uc2UpO1xuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoYXV0aEVycikge1xuICAgICAgICAgICAgICAgIHRoaXMubG9nZ2VyLmluZm9QaWkoYXV0aEVyci5lcnJvckNvZGUgKyBcIjpcIiArIGF1dGhFcnIuZXJyb3JNZXNzYWdlKTtcbiAgICAgICAgICAgICAgICByZWplY3QoYXV0aEVycik7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBlbHNlIHByb2NlZWQgd2l0aCBsb2dpblxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgbGV0IGxvZ01lc3NhZ2U7XG4gICAgICAgICAgICAgICAgaWYgKHVzZXJDb250YWluZWRDbGFpbXMpIHtcbiAgICAgICAgICAgICAgICAgICAgbG9nTWVzc2FnZSA9IFwiU2tpcHBlZCBjYWNoZSBsb29rdXAgc2luY2UgY2xhaW1zIHdlcmUgZ2l2ZW4uXCI7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChyZXF1ZXN0LmZvcmNlUmVmcmVzaCkge1xuICAgICAgICAgICAgICAgICAgICBsb2dNZXNzYWdlID0gXCJTa2lwcGVkIGNhY2hlIGxvb2t1cCBzaW5jZSByZXF1ZXN0LmZvcmNlUmVmcmVzaCBvcHRpb24gd2FzIHNldCB0byB0cnVlXCI7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgbG9nTWVzc2FnZSA9IFwiVG9rZW4gaXMgbm90IGluIGNhY2hlIGZvciBzY29wZTpcIiArIHNjb3BlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLmxvZ2dlci52ZXJib3NlKGxvZ01lc3NhZ2UpO1xuXG4gICAgICAgICAgICAgICAgLy8gQ2FjaGUgcmVzdWx0IGNhbiByZXR1cm4gbnVsbCBpZiBjYWNoZSBpcyBlbXB0eS4gSW4gdGhhdCBjYXNlLCBzZXQgYXV0aG9yaXR5IHRvIGRlZmF1bHQgdmFsdWUgaWYgbm8gYXV0aG9yaXR5IGlzIHBhc3NlZCB0byB0aGUgYXBpLlxuICAgICAgICAgICAgICAgIGlmICghc2VydmVyQXV0aGVudGljYXRpb25SZXF1ZXN0LmF1dGhvcml0eUluc3RhbmNlKSB7XG4gICAgICAgICAgICAgICAgICAgIHNlcnZlckF1dGhlbnRpY2F0aW9uUmVxdWVzdC5hdXRob3JpdHlJbnN0YW5jZSA9IHJlcXVlc3QuYXV0aG9yaXR5ID8gQXV0aG9yaXR5RmFjdG9yeS5DcmVhdGVJbnN0YW5jZShyZXF1ZXN0LmF1dGhvcml0eSwgdGhpcy5jb25maWcuYXV0aC52YWxpZGF0ZUF1dGhvcml0eSkgOiB0aGlzLmF1dGhvcml0eUluc3RhbmNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBjYWNoZSBtaXNzXG4gICAgICAgICAgICAgICAgcmV0dXJuIHNlcnZlckF1dGhlbnRpY2F0aW9uUmVxdWVzdC5hdXRob3JpdHlJbnN0YW5jZS5yZXNvbHZlRW5kcG9pbnRzQXN5bmMoKVxuICAgICAgICAgICAgICAgICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvKlxuICAgICAgICAgICAgICAgICAgICAgICAgICogcmVmcmVzaCBhdHRlbXB0IHdpdGggaWZyYW1lXG4gICAgICAgICAgICAgICAgICAgICAgICAgKiBBbHJlYWR5IHJlbmV3aW5nIGZvciB0aGlzIHNjb3BlLCBjYWxsYmFjayB3aGVuIHdlIGdldCB0aGUgdG9rZW4uXG4gICAgICAgICAgICAgICAgICAgICAgICAgKi9cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh3aW5kb3cuYWN0aXZlUmVuZXdhbHNbc2NvcGVdKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2dnZXIudmVyYm9zZShcIlJlbmV3IHRva2VuIGZvciBzY29wZTogXCIgKyBzY29wZSArIFwiIGlzIGluIHByb2dyZXNzLiBSZWdpc3RlcmluZyBjYWxsYmFja1wiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBBY3RpdmUgcmVuZXdhbHMgY29udGFpbnMgdGhlIHN0YXRlIGZvciBlYWNoIHJlbmV3YWwuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZWdpc3RlckNhbGxiYWNrKHdpbmRvdy5hY3RpdmVSZW5ld2Fsc1tzY29wZV0sIHNjb3BlLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlcXVlc3Quc2NvcGVzICYmIHJlcXVlc3Quc2NvcGVzLmluZGV4T2YodGhpcy5jbGllbnRJZCkgPiAtMSAmJiByZXF1ZXN0LnNjb3Blcy5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLypcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICogQXBwIHVzZXMgaWRUb2tlbiB0byBzZW5kIHRvIGFwaSBlbmRwb2ludHNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICogRGVmYXVsdCBzY29wZSBpcyB0cmFja2VkIGFzIGNsaWVudElkIHRvIHN0b3JlIHRoaXMgdG9rZW5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICovXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubG9nZ2VyLnZlcmJvc2UoXCJyZW5ld2luZyBpZFRva2VuXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNpbGVudExvZ2luID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZW5ld0lkVG9rZW4ocmVxdWVzdC5zY29wZXMsIHJlc29sdmUsIHJlamVjdCwgYWNjb3VudCwgc2VydmVyQXV0aGVudGljYXRpb25SZXF1ZXN0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyByZW5ldyBhY2Nlc3MgdG9rZW5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2dnZXIudmVyYm9zZShcInJlbmV3aW5nIGFjY2Vzc3Rva2VuXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJlbmV3VG9rZW4ocmVxdWVzdC5zY29wZXMsIHJlc29sdmUsIHJlamVjdCwgYWNjb3VudCwgc2VydmVyQXV0aGVudGljYXRpb25SZXF1ZXN0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubG9nZ2VyLndhcm5pbmcoXCJjb3VsZCBub3QgcmVzb2x2ZSBlbmRwb2ludHNcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICByZWplY3QoQ2xpZW50QXV0aEVycm9yLmNyZWF0ZUVuZHBvaW50UmVzb2x1dGlvbkVycm9yKGVyci50b1N0cmluZygpKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vICNlbmRyZWdpb25cblxuICAgIC8vICNyZWdpb24gUG9wdXAgV2luZG93IENyZWF0aW9uXG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICpcbiAgICAgKiBDb25maWd1cmVzIHBvcHVwIHdpbmRvdyBmb3IgbG9naW4uXG4gICAgICpcbiAgICAgKiBAcGFyYW0gdXJsTmF2aWdhdGVcbiAgICAgKiBAcGFyYW0gdGl0bGVcbiAgICAgKiBAcGFyYW0gcG9wVXBXaWR0aFxuICAgICAqIEBwYXJhbSBwb3BVcEhlaWdodFxuICAgICAqIEBpZ25vcmVcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgcHJpdmF0ZSBvcGVuUG9wdXAodXJsTmF2aWdhdGU6IHN0cmluZywgdGl0bGU6IHN0cmluZywgcG9wVXBXaWR0aDogbnVtYmVyLCBwb3BVcEhlaWdodDogbnVtYmVyKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIGFkZGluZyB3aW5MZWZ0IGFuZCB3aW5Ub3AgdG8gYWNjb3VudCBmb3IgZHVhbCBtb25pdG9yXG4gICAgICAgICAgICAgKiB1c2luZyBzY3JlZW5MZWZ0IGFuZCBzY3JlZW5Ub3AgZm9yIElFOCBhbmQgZWFybGllclxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBjb25zdCB3aW5MZWZ0ID0gd2luZG93LnNjcmVlbkxlZnQgPyB3aW5kb3cuc2NyZWVuTGVmdCA6IHdpbmRvdy5zY3JlZW5YO1xuICAgICAgICAgICAgY29uc3Qgd2luVG9wID0gd2luZG93LnNjcmVlblRvcCA/IHdpbmRvdy5zY3JlZW5Ub3AgOiB3aW5kb3cuc2NyZWVuWTtcbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogd2luZG93LmlubmVyV2lkdGggZGlzcGxheXMgYnJvd3NlciB3aW5kb3dcInMgaGVpZ2h0IGFuZCB3aWR0aCBleGNsdWRpbmcgdG9vbGJhcnNcbiAgICAgICAgICAgICAqIHVzaW5nIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aCBmb3IgSUU4IGFuZCBlYXJsaWVyXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIGNvbnN0IHdpZHRoID0gd2luZG93LmlubmVyV2lkdGggfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFdpZHRoIHx8IGRvY3VtZW50LmJvZHkuY2xpZW50V2lkdGg7XG4gICAgICAgICAgICBjb25zdCBoZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodCB8fCBkb2N1bWVudC5ib2R5LmNsaWVudEhlaWdodDtcbiAgICAgICAgICAgIGNvbnN0IGxlZnQgPSAoKHdpZHRoIC8gMikgLSAocG9wVXBXaWR0aCAvIDIpKSArIHdpbkxlZnQ7XG4gICAgICAgICAgICBjb25zdCB0b3AgPSAoKGhlaWdodCAvIDIpIC0gKHBvcFVwSGVpZ2h0IC8gMikpICsgd2luVG9wO1xuXG4gICAgICAgICAgICAvLyBvcGVuIHRoZSB3aW5kb3dcbiAgICAgICAgICAgIGNvbnN0IHBvcHVwV2luZG93ID0gd2luZG93Lm9wZW4odXJsTmF2aWdhdGUsIHRpdGxlLCBcIndpZHRoPVwiICsgcG9wVXBXaWR0aCArIFwiLCBoZWlnaHQ9XCIgKyBwb3BVcEhlaWdodCArIFwiLCB0b3A9XCIgKyB0b3AgKyBcIiwgbGVmdD1cIiArIGxlZnQpO1xuICAgICAgICAgICAgaWYgKCFwb3B1cFdpbmRvdykge1xuICAgICAgICAgICAgICAgIHRocm93IENsaWVudEF1dGhFcnJvci5jcmVhdGVQb3B1cFdpbmRvd0Vycm9yKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocG9wdXBXaW5kb3cuZm9jdXMpIHtcbiAgICAgICAgICAgICAgICBwb3B1cFdpbmRvdy5mb2N1cygpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gcG9wdXBXaW5kb3c7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIHRoaXMubG9nZ2VyLmVycm9yKFwiZXJyb3Igb3BlbmluZyBwb3B1cCBcIiArIGUubWVzc2FnZSk7XG4gICAgICAgICAgICB0aGlzLmxvZ2luSW5Qcm9ncmVzcyA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5hY3F1aXJlVG9rZW5JblByb2dyZXNzID0gZmFsc2U7XG4gICAgICAgICAgICB0aHJvdyBDbGllbnRBdXRoRXJyb3IuY3JlYXRlUG9wdXBXaW5kb3dFcnJvcihlLnRvU3RyaW5nKCkpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gI2VuZHJlZ2lvblxuXG4gICAgLy8gI3JlZ2lvbiBJZnJhbWUgTWFuYWdlbWVudFxuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqIENhbGxpbmcgX2xvYWRGcmFtZSBidXQgd2l0aCBhIHRpbWVvdXQgdG8gc2lnbmFsIGZhaWx1cmUgaW4gbG9hZGZyYW1lU3RhdHVzLiBDYWxsYmFja3MgYXJlIGxlZnQuXG4gICAgICogcmVnaXN0ZXJlZCB3aGVuIG5ldHdvcmsgZXJyb3JzIG9jY3VyIGFuZCBzdWJzZXF1ZW50IHRva2VuIHJlcXVlc3RzIGZvciBzYW1lIHJlc291cmNlIGFyZSByZWdpc3RlcmVkIHRvIHRoZSBwZW5kaW5nIHJlcXVlc3QuXG4gICAgICogQGlnbm9yZVxuICAgICAqL1xuICAgIHByaXZhdGUgYXN5bmMgbG9hZElmcmFtZVRpbWVvdXQodXJsTmF2aWdhdGU6IHN0cmluZywgZnJhbWVOYW1lOiBzdHJpbmcsIHNjb3BlOiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgLy8gc2V0IGlmcmFtZSBzZXNzaW9uIHRvIHBlbmRpbmdcbiAgICAgICAgY29uc3QgZXhwZWN0ZWRTdGF0ZSA9IHdpbmRvdy5hY3RpdmVSZW5ld2Fsc1tzY29wZV07XG4gICAgICAgIHRoaXMubG9nZ2VyLnZlcmJvc2UoXCJTZXQgbG9hZGluZyBzdGF0ZSB0byBwZW5kaW5nIGZvcjogXCIgKyBzY29wZSArIFwiOlwiICsgZXhwZWN0ZWRTdGF0ZSk7XG4gICAgICAgIHRoaXMuY2FjaGVTdG9yYWdlLnNldEl0ZW0oQ29uc3RhbnRzLnJlbmV3U3RhdHVzICsgZXhwZWN0ZWRTdGF0ZSwgQ29uc3RhbnRzLnRva2VuUmVuZXdTdGF0dXNJblByb2dyZXNzKTtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBpZiAodGhpcy5jYWNoZVN0b3JhZ2UuZ2V0SXRlbShDb25zdGFudHMucmVuZXdTdGF0dXMgKyBleHBlY3RlZFN0YXRlKSA9PT0gQ29uc3RhbnRzLnRva2VuUmVuZXdTdGF0dXNJblByb2dyZXNzKSB7XG4gICAgICAgICAgICAgICAgLy8gZmFpbCB0aGUgaWZyYW1lIHNlc3Npb24gaWYgaXQncyBpbiBwZW5kaW5nIHN0YXRlXG4gICAgICAgICAgICAgICAgdGhpcy5sb2dnZXIudmVyYm9zZShcIkxvYWRpbmcgZnJhbWUgaGFzIHRpbWVkIG91dCBhZnRlcjogXCIgKyAodGhpcy5jb25maWcuc3lzdGVtLmxvYWRGcmFtZVRpbWVvdXQgLyAxMDAwKSArIFwiIHNlY29uZHMgZm9yIHNjb3BlIFwiICsgc2NvcGUgKyBcIjpcIiArIGV4cGVjdGVkU3RhdGUpO1xuICAgICAgICAgICAgICAgIC8vIEVycm9yIGFmdGVyIHRpbWVvdXRcbiAgICAgICAgICAgICAgICBpZiAoZXhwZWN0ZWRTdGF0ZSAmJiB3aW5kb3cuY2FsbGJhY2tNYXBwZWRUb1JlbmV3U3RhdGVzW2V4cGVjdGVkU3RhdGVdKSB7XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5jYWxsYmFja01hcHBlZFRvUmVuZXdTdGF0ZXNbZXhwZWN0ZWRTdGF0ZV0obnVsbCwgQ2xpZW50QXV0aEVycm9yLmNyZWF0ZVRva2VuUmVuZXdhbFRpbWVvdXRFcnJvcigpKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB0aGlzLmNhY2hlU3RvcmFnZS5zZXRJdGVtKENvbnN0YW50cy5yZW5ld1N0YXR1cyArIGV4cGVjdGVkU3RhdGUsIENvbnN0YW50cy50b2tlblJlbmV3U3RhdHVzQ2FuY2VsbGVkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgdGhpcy5jb25maWcuc3lzdGVtLmxvYWRGcmFtZVRpbWVvdXQpO1xuXG4gICAgICAgIGNvbnN0IGlmcmFtZSA9IGF3YWl0IFdpbmRvd1V0aWxzLmxvYWRGcmFtZSh1cmxOYXZpZ2F0ZSwgZnJhbWVOYW1lLCB0aGlzLmNvbmZpZy5zeXN0ZW0ubmF2aWdhdGVGcmFtZVdhaXQsIHRoaXMubG9nZ2VyKTtcbiAgICAgICAgY29uc3QgaGFzaCA9IGF3YWl0IFdpbmRvd1V0aWxzLm1vbml0b3JXaW5kb3dGb3JIYXNoKGlmcmFtZS5jb250ZW50V2luZG93LCB0aGlzLmNvbmZpZy5zeXN0ZW0ubG9hZEZyYW1lVGltZW91dCk7XG4gICAgICAgIGlmIChoYXNoKSB7XG4gICAgICAgICAgICB0aGlzLmhhbmRsZUF1dGhlbnRpY2F0aW9uUmVzcG9uc2UoaGFzaCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyAjZW5kcmVnaW9uXG5cbiAgICAvLyAjcmVnaW9uIEdlbmVyYWwgSGVscGVyc1xuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqIFVzZWQgdG8gcmVkaXJlY3QgdGhlIGJyb3dzZXIgdG8gdGhlIFNUUyBhdXRob3JpemF0aW9uIGVuZHBvaW50XG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHVybE5hdmlnYXRlIC0gVVJMIG9mIHRoZSBhdXRob3JpemF0aW9uIGVuZHBvaW50XG4gICAgICovXG4gICAgcHJpdmF0ZSBuYXZpZ2F0ZVdpbmRvdyh1cmxOYXZpZ2F0ZTogc3RyaW5nLCBwb3B1cFdpbmRvdz86IFdpbmRvdykge1xuICAgICAgICAvLyBOYXZpZ2F0ZSBpZiB2YWxpZCBVUkxcbiAgICAgICAgaWYgKHVybE5hdmlnYXRlICYmICFTdHJpbmdVdGlscy5pc0VtcHR5KHVybE5hdmlnYXRlKSkge1xuICAgICAgICAgICAgY29uc3QgbmF2aWdhdGVXaW5kb3c6IFdpbmRvdyA9IHBvcHVwV2luZG93ID8gcG9wdXBXaW5kb3cgOiB3aW5kb3c7XG4gICAgICAgICAgICBjb25zdCBsb2dNZXNzYWdlOiBzdHJpbmcgPSBwb3B1cFdpbmRvdyA/IFwiTmF2aWdhdGVkIFBvcHVwIHdpbmRvdyB0bzpcIiArIHVybE5hdmlnYXRlIDogXCJOYXZpZ2F0ZSB0bzpcIiArIHVybE5hdmlnYXRlO1xuICAgICAgICAgICAgdGhpcy5sb2dnZXIuaW5mb1BpaShsb2dNZXNzYWdlKTtcbiAgICAgICAgICAgIG5hdmlnYXRlV2luZG93LmxvY2F0aW9uLnJlcGxhY2UodXJsTmF2aWdhdGUpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5sb2dnZXIuaW5mbyhcIk5hdmlnYXRlIHVybCBpcyBlbXB0eVwiKTtcbiAgICAgICAgICAgIHRocm93IEF1dGhFcnJvci5jcmVhdGVVbmV4cGVjdGVkRXJyb3IoXCJOYXZpZ2F0ZSB1cmwgaXMgZW1wdHlcIik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICogVXNlZCB0byBhZGQgdGhlIGRldmVsb3BlciByZXF1ZXN0ZWQgY2FsbGJhY2sgdG8gdGhlIGFycmF5IG9mIGNhbGxiYWNrcyBmb3IgdGhlIHNwZWNpZmllZCBzY29wZXMuIFRoZSB1cGRhdGVkIGFycmF5IGlzIHN0b3JlZCBvbiB0aGUgd2luZG93IG9iamVjdFxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBleHBlY3RlZFN0YXRlIC0gVW5pcXVlIHN0YXRlIGlkZW50aWZpZXIgKGd1aWQpLlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBzY29wZSAtIERldmVsb3BlciByZXF1ZXN0ZWQgcGVybWlzc2lvbnMuIE5vdCBhbGwgc2NvcGVzIGFyZSBndWFyYW50ZWVkIHRvIGJlIGluY2x1ZGVkIGluIHRoZSBhY2Nlc3MgdG9rZW4gcmV0dXJuZWQuXG4gICAgICogQHBhcmFtIHtGdW5jdGlvbn0gcmVzb2x2ZSAtIFRoZSByZXNvbHZlIGZ1bmN0aW9uIG9mIHRoZSBwcm9taXNlIG9iamVjdC5cbiAgICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSByZWplY3QgLSBUaGUgcmVqZWN0IGZ1bmN0aW9uIG9mIHRoZSBwcm9taXNlIG9iamVjdC5cbiAgICAgKiBAaWdub3JlXG4gICAgICovXG4gICAgcHJpdmF0ZSByZWdpc3RlckNhbGxiYWNrKGV4cGVjdGVkU3RhdGU6IHN0cmluZywgc2NvcGU6IHN0cmluZywgcmVzb2x2ZTogRnVuY3Rpb24sIHJlamVjdDogRnVuY3Rpb24pOiB2b2lkIHtcbiAgICAgICAgLy8gdHJhY2sgYWN0aXZlIHJlbmV3YWxzXG4gICAgICAgIHdpbmRvdy5hY3RpdmVSZW5ld2Fsc1tzY29wZV0gPSBleHBlY3RlZFN0YXRlO1xuXG4gICAgICAgIC8vIGluaXRpYWxpemUgY2FsbGJhY2tzIG1hcHBlZCBhcnJheVxuICAgICAgICBpZiAoIXdpbmRvdy5wcm9taXNlTWFwcGVkVG9SZW5ld1N0YXRlc1tleHBlY3RlZFN0YXRlXSkge1xuICAgICAgICAgICAgd2luZG93LnByb21pc2VNYXBwZWRUb1JlbmV3U3RhdGVzW2V4cGVjdGVkU3RhdGVdID0gW107XG4gICAgICAgIH1cbiAgICAgICAgLy8gaW5kZXhpbmcgb24gdGhlIGN1cnJlbnQgc3RhdGUsIHB1c2ggdGhlIGNhbGxiYWNrIHBhcmFtcyB0byBjYWxsYmFja3MgbWFwcGVkXG4gICAgICAgIHdpbmRvdy5wcm9taXNlTWFwcGVkVG9SZW5ld1N0YXRlc1tleHBlY3RlZFN0YXRlXS5wdXNoKHsgcmVzb2x2ZTogcmVzb2x2ZSwgcmVqZWN0OiByZWplY3QgfSk7XG5cbiAgICAgICAgLy8gU3RvcmUgdGhlIHNlcnZlciByZXNwb25zZSBpbiB0aGUgY3VycmVudCB3aW5kb3c/P1xuICAgICAgICBpZiAoIXdpbmRvdy5jYWxsYmFja01hcHBlZFRvUmVuZXdTdGF0ZXNbZXhwZWN0ZWRTdGF0ZV0pIHtcbiAgICAgICAgICAgIHdpbmRvdy5jYWxsYmFja01hcHBlZFRvUmVuZXdTdGF0ZXNbZXhwZWN0ZWRTdGF0ZV0gPVxuICAgICAgKHJlc3BvbnNlOiBBdXRoUmVzcG9uc2UsIGVycm9yOiBBdXRoRXJyb3IpID0+IHtcbiAgICAgICAgICAvLyByZXNldCBhY3RpdmUgcmVuZXdhbHNcbiAgICAgICAgICB3aW5kb3cuYWN0aXZlUmVuZXdhbHNbc2NvcGVdID0gbnVsbDtcblxuICAgICAgICAgIC8vIGZvciBhbGwgcHJvbWlzZU1hcHBlZHRvUmVuZXdTdGF0ZXMgZm9yIGEgZ2l2ZW4gJ3N0YXRlJyAtIGNhbGwgdGhlIHJlamVjdC9yZXNvbHZlIHdpdGggZXJyb3IvdG9rZW4gcmVzcGVjdGl2ZWx5XG4gICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB3aW5kb3cucHJvbWlzZU1hcHBlZFRvUmVuZXdTdGF0ZXNbZXhwZWN0ZWRTdGF0ZV0ubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgIGlmIChlcnJvcikge1xuICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5wcm9taXNlTWFwcGVkVG9SZW5ld1N0YXRlc1tleHBlY3RlZFN0YXRlXVtpXS5yZWplY3QoZXJyb3IpO1xuICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChyZXNwb25zZSkge1xuICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5wcm9taXNlTWFwcGVkVG9SZW5ld1N0YXRlc1tleHBlY3RlZFN0YXRlXVtpXS5yZXNvbHZlKHJlc3BvbnNlKTtcbiAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgdGhyb3cgQXV0aEVycm9yLmNyZWF0ZVVuZXhwZWN0ZWRFcnJvcihcIkVycm9yIGFuZCByZXNwb25zZSBhcmUgYm90aCBudWxsXCIpO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgICB0aGlzLmxvZ2dlci53YXJuaW5nKGUpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8gcmVzZXRcbiAgICAgICAgICB3aW5kb3cucHJvbWlzZU1hcHBlZFRvUmVuZXdTdGF0ZXNbZXhwZWN0ZWRTdGF0ZV0gPSBudWxsO1xuICAgICAgICAgIHdpbmRvdy5jYWxsYmFja01hcHBlZFRvUmVuZXdTdGF0ZXNbZXhwZWN0ZWRTdGF0ZV0gPSBudWxsO1xuICAgICAgfTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vICNlbmRyZWdpb25cblxuICAgIC8vICNyZWdpb24gTG9nb3V0XG5cbiAgICAvKipcbiAgICAgKiBVc2UgdG8gbG9nIG91dCB0aGUgY3VycmVudCB1c2VyLCBhbmQgcmVkaXJlY3QgdGhlIHVzZXIgdG8gdGhlIHBvc3RMb2dvdXRSZWRpcmVjdFVyaS5cbiAgICAgKiBEZWZhdWx0IGJlaGF2aW91ciBpcyB0byByZWRpcmVjdCB0aGUgdXNlciB0byBgd2luZG93LmxvY2F0aW9uLmhyZWZgLlxuICAgICAqL1xuICAgIGxvZ291dCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5jbGVhckNhY2hlKCk7XG4gICAgICAgIHRoaXMuYWNjb3VudCA9IG51bGw7XG4gICAgICAgIGxldCBsb2dvdXQgPSBcIlwiO1xuICAgICAgICBpZiAodGhpcy5nZXRQb3N0TG9nb3V0UmVkaXJlY3RVcmkoKSkge1xuICAgICAgICAgICAgbG9nb3V0ID0gXCJwb3N0X2xvZ291dF9yZWRpcmVjdF91cmk9XCIgKyBlbmNvZGVVUklDb21wb25lbnQodGhpcy5nZXRQb3N0TG9nb3V0UmVkaXJlY3RVcmkoKSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5hdXRob3JpdHlJbnN0YW5jZS5yZXNvbHZlRW5kcG9pbnRzQXN5bmMoKS50aGVuKGF1dGhvcml0eSA9PiB7XG4gICAgICAgICAgICBjb25zdCB1cmxOYXZpZ2F0ZSA9IGF1dGhvcml0eS5FbmRTZXNzaW9uRW5kcG9pbnRcbiAgICAgICAgICAgICAgICA/IGAke2F1dGhvcml0eS5FbmRTZXNzaW9uRW5kcG9pbnR9PyR7bG9nb3V0fWBcbiAgICAgICAgICAgICAgICA6IGAke3RoaXMuYXV0aG9yaXR5fW9hdXRoMi92Mi4wL2xvZ291dD8ke2xvZ291dH1gO1xuICAgICAgICAgICAgdGhpcy5uYXZpZ2F0ZVdpbmRvdyh1cmxOYXZpZ2F0ZSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKiBDbGVhciBhbGwgYWNjZXNzIHRva2VucyBpbiB0aGUgY2FjaGUuXG4gICAgICogQGlnbm9yZVxuICAgICAqL1xuICAgIHByb3RlY3RlZCBjbGVhckNhY2hlKCk6IHZvaWQge1xuICAgICAgICB3aW5kb3cucmVuZXdTdGF0ZXMgPSBbXTtcbiAgICAgICAgY29uc3QgYWNjZXNzVG9rZW5JdGVtcyA9IHRoaXMuY2FjaGVTdG9yYWdlLmdldEFsbEFjY2Vzc1Rva2VucyhDb25zdGFudHMuY2xpZW50SWQsIENvbnN0YW50cy5ob21lQWNjb3VudElkZW50aWZpZXIpO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFjY2Vzc1Rva2VuSXRlbXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHRoaXMuY2FjaGVTdG9yYWdlLnJlbW92ZUl0ZW0oSlNPTi5zdHJpbmdpZnkoYWNjZXNzVG9rZW5JdGVtc1tpXS5rZXkpKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmNhY2hlU3RvcmFnZS5yZXNldENhY2hlSXRlbXMoKTtcbiAgICAgICAgdGhpcy5jYWNoZVN0b3JhZ2UuY2xlYXJDb29raWUoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICogQ2xlYXIgYSBnaXZlbiBhY2Nlc3MgdG9rZW4gZnJvbSB0aGUgY2FjaGUuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gYWNjZXNzVG9rZW5cbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgY2xlYXJDYWNoZUZvclNjb3BlKGFjY2Vzc1Rva2VuOiBzdHJpbmcpIHtcbiAgICAgICAgY29uc3QgYWNjZXNzVG9rZW5JdGVtcyA9IHRoaXMuY2FjaGVTdG9yYWdlLmdldEFsbEFjY2Vzc1Rva2VucyhDb25zdGFudHMuY2xpZW50SWQsIENvbnN0YW50cy5ob21lQWNjb3VudElkZW50aWZpZXIpO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFjY2Vzc1Rva2VuSXRlbXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IHRva2VuID0gYWNjZXNzVG9rZW5JdGVtc1tpXTtcbiAgICAgICAgICAgIGlmICh0b2tlbi52YWx1ZS5hY2Nlc3NUb2tlbiA9PT0gYWNjZXNzVG9rZW4pIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNhY2hlU3RvcmFnZS5yZW1vdmVJdGVtKEpTT04uc3RyaW5naWZ5KHRva2VuLmtleSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gI2VuZHJlZ2lvblxuXG4gICAgLy8gI3JlZ2lvbiBSZXNwb25zZVxuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqIEBpZ25vcmVcbiAgICAgKiBDaGVja3MgaWYgdGhlIHJlZGlyZWN0IHJlc3BvbnNlIGlzIHJlY2VpdmVkIGZyb20gdGhlIFNUUy4gSW4gY2FzZSBvZiByZWRpcmVjdCwgdGhlIHVybCBmcmFnbWVudCBoYXMgZWl0aGVyIGlkX3Rva2VuLCBhY2Nlc3NfdG9rZW4gb3IgZXJyb3IuXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGhhc2ggLSBIYXNoIHBhc3NlZCBmcm9tIHJlZGlyZWN0IHBhZ2UuXG4gICAgICogQHJldHVybnMge0Jvb2xlYW59IC0gdHJ1ZSBpZiByZXNwb25zZSBjb250YWlucyBpZF90b2tlbiwgYWNjZXNzX3Rva2VuIG9yIGVycm9yLCBmYWxzZSBvdGhlcndpc2UuXG4gICAgICovXG4gICAgaXNDYWxsYmFjayhoYXNoOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICAgICAgdGhpcy5sb2dnZXIuaW5mbyhcImlzQ2FsbGJhY2sgd2lsbCBiZSBkZXByZWNhdGVkIGluIGZhdm9yIG9mIHVybENvbnRhaW5zSGFzaCBpbiBNU0FMLmpzIHYyLjAuXCIpO1xuICAgICAgICByZXR1cm4gVXJsVXRpbHMudXJsQ29udGFpbnNIYXNoKGhhc2gpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKiBVc2VkIHRvIGNhbGwgdGhlIGNvbnN0cnVjdG9yIGNhbGxiYWNrIHdpdGggdGhlIHRva2VuL2Vycm9yXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IFtoYXNoPXdpbmRvdy5sb2NhdGlvbi5oYXNoXSAtIEhhc2ggZnJhZ21lbnQgb2YgVXJsLlxuICAgICAqL1xuICAgIHByaXZhdGUgcHJvY2Vzc0NhbGxCYWNrKGhhc2g6IHN0cmluZywgc3RhdGVJbmZvOiBSZXNwb25zZVN0YXRlSW5mbywgcGFyZW50Q2FsbGJhY2s/OiBGdW5jdGlvbik6IHZvaWQge1xuICAgICAgICB0aGlzLmxvZ2dlci5pbmZvKFwiUHJvY2Vzc2luZyB0aGUgY2FsbGJhY2sgZnJvbSByZWRpcmVjdCByZXNwb25zZVwiKTtcbiAgICAgICAgLy8gZ2V0IHRoZSBzdGF0ZSBpbmZvIGZyb20gdGhlIGhhc2hcbiAgICAgICAgaWYgKCFzdGF0ZUluZm8pIHtcbiAgICAgICAgICAgIHN0YXRlSW5mbyA9IHRoaXMuZ2V0UmVzcG9uc2VTdGF0ZShoYXNoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCByZXNwb25zZSA6IEF1dGhSZXNwb25zZTtcbiAgICAgICAgbGV0IGF1dGhFcnIgOiBBdXRoRXJyb3I7XG4gICAgICAgIC8vIFNhdmUgdGhlIHRva2VuIGluZm8gZnJvbSB0aGUgaGFzaFxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgcmVzcG9uc2UgPSB0aGlzLnNhdmVUb2tlbkZyb21IYXNoKGhhc2gsIHN0YXRlSW5mbyk7XG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgYXV0aEVyciA9IGVycjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHJlbW92ZSBoYXNoIGZyb20gdGhlIGNhY2hlXG4gICAgICAgIHRoaXMuY2FjaGVTdG9yYWdlLnJlbW92ZUl0ZW0oQ29uc3RhbnRzLnVybEhhc2gpO1xuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBDbGVhciB0aGUgY29va2llIGluIHRoZSBoYXNoXG4gICAgICAgICAgICB0aGlzLmNhY2hlU3RvcmFnZS5jbGVhckNvb2tpZSgpO1xuICAgICAgICAgICAgY29uc3QgYWNjb3VudFN0YXRlOiBzdHJpbmcgPSB0aGlzLmdldEFjY291bnRTdGF0ZShzdGF0ZUluZm8uc3RhdGUpO1xuICAgICAgICAgICAgaWYgKHJlc3BvbnNlKSB7XG4gICAgICAgICAgICAgICAgaWYgKChzdGF0ZUluZm8ucmVxdWVzdFR5cGUgPT09IENvbnN0YW50cy5yZW5ld1Rva2VuKSB8fCByZXNwb25zZS5hY2Nlc3NUb2tlbikge1xuICAgICAgICAgICAgICAgICAgICBpZiAod2luZG93LnBhcmVudCAhPT0gd2luZG93KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxvZ2dlci52ZXJib3NlKFwiV2luZG93IGlzIGluIGlmcmFtZSwgYWNxdWlyaW5nIHRva2VuIHNpbGVudGx5XCIpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2dnZXIudmVyYm9zZShcImFjcXVpcmluZyB0b2tlbiBpbnRlcmFjdGl2ZSBpbiBwcm9ncmVzc1wiKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXNwb25zZS50b2tlblR5cGUgPSBDb25zdGFudHMuYWNjZXNzVG9rZW47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHN0YXRlSW5mby5yZXF1ZXN0VHlwZSA9PT0gQ29uc3RhbnRzLmxvZ2luKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlLnRva2VuVHlwZSA9IENvbnN0YW50cy5pZFRva2VuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoIXBhcmVudENhbGxiYWNrKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYXV0aFJlc3BvbnNlSGFuZGxlcihDb25zdGFudHMuaW50ZXJhY3Rpb25UeXBlUmVkaXJlY3QsIHJlc3BvbnNlKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSBpZiAoIXBhcmVudENhbGxiYWNrKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5hdXRoRXJyb3JIYW5kbGVyKENvbnN0YW50cy5pbnRlcmFjdGlvblR5cGVSZWRpcmVjdCwgYXV0aEVyciwgYnVpbGRSZXNwb25zZVN0YXRlT25seShhY2NvdW50U3RhdGUpKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHBhcmVudENhbGxiYWNrKHJlc3BvbnNlLCBhdXRoRXJyKTtcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICB0aGlzLmxvZ2dlci5lcnJvcihcIkVycm9yIG9jY3VycmVkIGluIHRva2VuIHJlY2VpdmVkIGNhbGxiYWNrIGZ1bmN0aW9uOiBcIiArIGVycik7XG4gICAgICAgICAgICB0aHJvdyBDbGllbnRBdXRoRXJyb3IuY3JlYXRlRXJyb3JJbkNhbGxiYWNrRnVuY3Rpb24oZXJyLnRvU3RyaW5nKCkpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqIFRoaXMgbWV0aG9kIG11c3QgYmUgY2FsbGVkIGZvciBwcm9jZXNzaW5nIHRoZSByZXNwb25zZSByZWNlaXZlZCBmcm9tIHRoZSBTVFMuIEl0IGV4dHJhY3RzIHRoZSBoYXNoLCBwcm9jZXNzZXMgdGhlIHRva2VuIG9yIGVycm9yIGluZm9ybWF0aW9uIGFuZCBzYXZlcyBpdCBpbiB0aGUgY2FjaGUuIEl0IHRoZW5cbiAgICAgKiBjYWxscyB0aGUgcmVnaXN0ZXJlZCBjYWxsYmFja3MgaW4gY2FzZSBvZiByZWRpcmVjdCBvciByZXNvbHZlcyB0aGUgcHJvbWlzZXMgd2l0aCB0aGUgcmVzdWx0LlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBbaGFzaD13aW5kb3cubG9jYXRpb24uaGFzaF0gLSBIYXNoIGZyYWdtZW50IG9mIFVybC5cbiAgICAgKi9cbiAgICBwcml2YXRlIGhhbmRsZUF1dGhlbnRpY2F0aW9uUmVzcG9uc2UoaGFzaDogc3RyaW5nKTogdm9pZCB7XG4gICAgICAgIC8vIHJldHJpZXZlIHRoZSBoYXNoXG4gICAgICAgIGNvbnN0IGxvY2F0aW9uSGFzaCA9IGhhc2ggfHwgd2luZG93LmxvY2F0aW9uLmhhc2g7XG5cbiAgICAgICAgLy8gQ2hlY2sgaWYgdGhlIGN1cnJlbnQgZmxvdyBpcyBwb3B1cCBvciBoaWRkZW4gaWZyYW1lXG4gICAgICAgIGNvbnN0IGlmcmFtZVdpdGhIYXNoID0gV2luZG93VXRpbHMuZ2V0SWZyYW1lV2l0aEhhc2gobG9jYXRpb25IYXNoKTtcbiAgICAgICAgY29uc3QgcG9wVXBXaXRoSGFzaCA9IFdpbmRvd1V0aWxzLmdldFBvcFVwV2l0aEhhc2gobG9jYXRpb25IYXNoKTtcbiAgICAgICAgY29uc3QgaXNQb3B1cE9ySWZyYW1lID0gISEoaWZyYW1lV2l0aEhhc2ggfHwgcG9wVXBXaXRoSGFzaCk7XG5cbiAgICAgICAgLy8gaWYgKHdpbmRvdy5wYXJlbnQgIT09IHdpbmRvdyksIGJ5IHVzaW5nIHNlbGYsIHdpbmRvdy5wYXJlbnQgYmVjb21lcyBlcXVhbCB0byB3aW5kb3cgaW4gZ2V0UmVzcG9uc2VTdGF0ZSBtZXRob2Qgc3BlY2lmaWNhbGx5XG4gICAgICAgIGNvbnN0IHN0YXRlSW5mbyA9IHRoaXMuZ2V0UmVzcG9uc2VTdGF0ZShsb2NhdGlvbkhhc2gpO1xuXG4gICAgICAgIGxldCB0b2tlblJlc3BvbnNlQ2FsbGJhY2s6IChyZXNwb25zZTogQXV0aFJlc3BvbnNlLCBlcnJvcjogQXV0aEVycm9yKSA9PiB2b2lkID0gbnVsbDtcblxuICAgICAgICB0aGlzLmxvZ2dlci5pbmZvKFwiUmV0dXJuZWQgZnJvbSByZWRpcmVjdCB1cmxcIik7XG4gICAgICAgIC8vIElmIHBhcmVudCB3aW5kb3cgaXMgdGhlIG1zYWwgaW5zdGFuY2Ugd2hpY2ggb3BlbmVkIHRoZSBjdXJyZW50IHdpbmRvdyAoaWZyYW1lKVxuICAgICAgICBpZiAoaXNQb3B1cE9ySWZyYW1lKSB7XG4gICAgICAgICAgICB0b2tlblJlc3BvbnNlQ2FsbGJhY2sgPSB3aW5kb3cuY2FsbGJhY2tNYXBwZWRUb1JlbmV3U3RhdGVzW3N0YXRlSW5mby5zdGF0ZV07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBSZWRpcmVjdCBjYXNlc1xuICAgICAgICAgICAgdG9rZW5SZXNwb25zZUNhbGxiYWNrID0gbnVsbDtcbiAgICAgICAgICAgIC8vIGlmIHNldCB0byBuYXZpZ2F0ZSB0byBsb2dpblJlcXVlc3QgcGFnZSBwb3N0IGxvZ2luXG4gICAgICAgICAgICBpZiAodGhpcy5jb25maWcuYXV0aC5uYXZpZ2F0ZVRvTG9naW5SZXF1ZXN0VXJsKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jYWNoZVN0b3JhZ2Uuc2V0SXRlbShDb25zdGFudHMudXJsSGFzaCwgbG9jYXRpb25IYXNoKTtcbiAgICAgICAgICAgICAgICBpZiAod2luZG93LnBhcmVudCA9PT0gd2luZG93KSB7XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gdGhpcy5jYWNoZVN0b3JhZ2UuZ2V0SXRlbShDb25zdGFudHMubG9naW5SZXF1ZXN0LCB0aGlzLmluQ29va2llKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhhc2ggPSBcIlwiO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoIXRoaXMucmVkaXJlY3RDYWxsYmFja3NTZXQpIHtcbiAgICAgICAgICAgICAgICAvLyBXZSByZWFjaGVkIHRoaXMgcG9pbnQgdG9vIGVhcmx5IC0gY2FjaGUgaGFzaCwgcmV0dXJuIGFuZCBwcm9jZXNzIGluIGhhbmRsZVJlZGlyZWN0Q2FsbGJhY2tzXG4gICAgICAgICAgICAgICAgdGhpcy5jYWNoZVN0b3JhZ2Uuc2V0SXRlbShDb25zdGFudHMudXJsSGFzaCwgbG9jYXRpb25IYXNoKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnByb2Nlc3NDYWxsQmFjayhsb2NhdGlvbkhhc2gsIHN0YXRlSW5mbywgdG9rZW5SZXNwb25zZUNhbGxiYWNrKTtcblxuICAgICAgICAvLyBJZiBjdXJyZW50IHdpbmRvdyBpcyBvcGVuZXIsIGNsb3NlIGFsbCB3aW5kb3dzXG4gICAgICAgIGlmIChpc1BvcHVwT3JJZnJhbWUpIHtcbiAgICAgICAgICAgIFdpbmRvd1V0aWxzLmNsb3NlUG9wdXBzKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICogQ3JlYXRlcyBhIHN0YXRlSW5mbyBvYmplY3QgZnJvbSB0aGUgVVJMIGZyYWdtZW50IGFuZCByZXR1cm5zIGl0LlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBoYXNoICAtICBIYXNoIHBhc3NlZCBmcm9tIHJlZGlyZWN0IHBhZ2VcbiAgICAgKiBAcmV0dXJucyB7VG9rZW5SZXNwb25zZX0gYW4gb2JqZWN0IGNyZWF0ZWQgZnJvbSB0aGUgcmVkaXJlY3QgcmVzcG9uc2UgZnJvbSBBQUQgY29tcHJpc2luZyBvZiB0aGUga2V5cyAtIHBhcmFtZXRlcnMsIHJlcXVlc3RUeXBlLCBzdGF0ZU1hdGNoLCBzdGF0ZVJlc3BvbnNlIGFuZCB2YWxpZC5cbiAgICAgKiBAaWdub3JlXG4gICAgICovXG4gICAgcHJvdGVjdGVkIGdldFJlc3BvbnNlU3RhdGUoaGFzaDogc3RyaW5nKTogUmVzcG9uc2VTdGF0ZUluZm8ge1xuICAgICAgICBjb25zdCBwYXJhbWV0ZXJzID0gVXJsVXRpbHMuZGVzZXJpYWxpemVIYXNoKGhhc2gpO1xuICAgICAgICBsZXQgc3RhdGVSZXNwb25zZTogUmVzcG9uc2VTdGF0ZUluZm87XG4gICAgICAgIGlmICghcGFyYW1ldGVycykge1xuICAgICAgICAgICAgdGhyb3cgQXV0aEVycm9yLmNyZWF0ZVVuZXhwZWN0ZWRFcnJvcihcIkhhc2ggd2FzIG5vdCBwYXJzZWQgY29ycmVjdGx5LlwiKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocGFyYW1ldGVycy5oYXNPd25Qcm9wZXJ0eShcInN0YXRlXCIpKSB7XG4gICAgICAgICAgICBzdGF0ZVJlc3BvbnNlID0ge1xuICAgICAgICAgICAgICAgIHJlcXVlc3RUeXBlOiBDb25zdGFudHMudW5rbm93bixcbiAgICAgICAgICAgICAgICBzdGF0ZTogcGFyYW1ldGVycy5zdGF0ZSxcbiAgICAgICAgICAgICAgICBzdGF0ZU1hdGNoOiBmYWxzZVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRocm93IEF1dGhFcnJvci5jcmVhdGVVbmV4cGVjdGVkRXJyb3IoXCJIYXNoIGRvZXMgbm90IGNvbnRhaW4gc3RhdGUuXCIpO1xuICAgICAgICB9XG4gICAgICAgIC8qXG4gICAgICAgICAqIGFzeW5jIGNhbGxzIGNhbiBmaXJlIGlmcmFtZSBhbmQgbG9naW4gcmVxdWVzdCBhdCB0aGUgc2FtZSB0aW1lIGlmIGRldmVsb3BlciBkb2VzIG5vdCB1c2UgdGhlIEFQSSBhcyBleHBlY3RlZFxuICAgICAgICAgKiBpbmNvbWluZyBjYWxsYmFjayBuZWVkcyB0byBiZSBsb29rZWQgdXAgdG8gZmluZCB0aGUgcmVxdWVzdCB0eXBlXG4gICAgICAgICAqL1xuXG4gICAgICAgIC8vIGxvZ2luUmVkaXJlY3RcbiAgICAgICAgaWYgKHN0YXRlUmVzcG9uc2Uuc3RhdGUgPT09IHRoaXMuY2FjaGVTdG9yYWdlLmdldEl0ZW0oQ29uc3RhbnRzLnN0YXRlTG9naW4sIHRoaXMuaW5Db29raWUpIHx8IHN0YXRlUmVzcG9uc2Uuc3RhdGUgPT09IHRoaXMuc2lsZW50QXV0aGVudGljYXRpb25TdGF0ZSkgeyAvLyBsb2dpblJlZGlyZWN0XG4gICAgICAgICAgICBzdGF0ZVJlc3BvbnNlLnJlcXVlc3RUeXBlID0gQ29uc3RhbnRzLmxvZ2luO1xuICAgICAgICAgICAgc3RhdGVSZXNwb25zZS5zdGF0ZU1hdGNoID0gdHJ1ZTtcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZVJlc3BvbnNlO1xuICAgICAgICB9XG4gICAgICAgIC8vIGFjcXVpcmVUb2tlblJlZGlyZWN0XG4gICAgICAgIGVsc2UgaWYgKHN0YXRlUmVzcG9uc2Uuc3RhdGUgPT09IHRoaXMuY2FjaGVTdG9yYWdlLmdldEl0ZW0oQ29uc3RhbnRzLnN0YXRlQWNxdWlyZVRva2VuLCB0aGlzLmluQ29va2llKSkgeyAvLyBhY3F1aXJlVG9rZW5SZWRpcmVjdFxuICAgICAgICAgICAgc3RhdGVSZXNwb25zZS5yZXF1ZXN0VHlwZSA9IENvbnN0YW50cy5yZW5ld1Rva2VuO1xuICAgICAgICAgICAgc3RhdGVSZXNwb25zZS5zdGF0ZU1hdGNoID0gdHJ1ZTtcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZVJlc3BvbnNlO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gZXh0ZXJuYWwgYXBpIHJlcXVlc3RzIG1heSBoYXZlIG1hbnkgcmVuZXd0b2tlbiByZXF1ZXN0cyBmb3IgZGlmZmVyZW50IHJlc291cmNlXG4gICAgICAgIGlmICghc3RhdGVSZXNwb25zZS5zdGF0ZU1hdGNoKSB7XG4gICAgICAgICAgICBzdGF0ZVJlc3BvbnNlLnJlcXVlc3RUeXBlID0gd2luZG93LnJlcXVlc3RUeXBlO1xuICAgICAgICAgICAgY29uc3Qgc3RhdGVzSW5QYXJlbnRDb250ZXh0ID0gd2luZG93LnJlbmV3U3RhdGVzO1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdGF0ZXNJblBhcmVudENvbnRleHQubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBpZiAoc3RhdGVzSW5QYXJlbnRDb250ZXh0W2ldID09PSBzdGF0ZVJlc3BvbnNlLnN0YXRlKSB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRlUmVzcG9uc2Uuc3RhdGVNYXRjaCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBzdGF0ZVJlc3BvbnNlO1xuICAgIH1cblxuICAgIC8vICNlbmRyZWdpb25cblxuICAgIC8vICNyZWdpb24gVG9rZW4gUHJvY2Vzc2luZyAoRXh0cmFjdCB0byBUb2tlblByb2Nlc3NpbmcudHMpXG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICogVXNlZCB0byBnZXQgdG9rZW4gZm9yIHRoZSBzcGVjaWZpZWQgc2V0IG9mIHNjb3BlcyBmcm9tIHRoZSBjYWNoZVxuICAgICAqIEBwYXJhbSB7QGxpbmsgU2VydmVyUmVxdWVzdFBhcmFtZXRlcnN9IC0gUmVxdWVzdCBzZW50IHRvIHRoZSBTVFMgdG8gb2J0YWluIGFuIGlkX3Rva2VuL2FjY2Vzc190b2tlblxuICAgICAqIEBwYXJhbSB7QWNjb3VudH0gYWNjb3VudCAtIEFjY291bnQgZm9yIHdoaWNoIHRoZSBzY29wZXMgd2VyZSByZXF1ZXN0ZWRcbiAgICAgKi9cbiAgICBwcml2YXRlIGdldENhY2hlZFRva2VuKHNlcnZlckF1dGhlbnRpY2F0aW9uUmVxdWVzdDogU2VydmVyUmVxdWVzdFBhcmFtZXRlcnMsIGFjY291bnQ6IEFjY291bnQpOiBBdXRoUmVzcG9uc2Uge1xuICAgICAgICBsZXQgYWNjZXNzVG9rZW5DYWNoZUl0ZW06IEFjY2Vzc1Rva2VuQ2FjaGVJdGVtID0gbnVsbDtcbiAgICAgICAgY29uc3Qgc2NvcGVzID0gc2VydmVyQXV0aGVudGljYXRpb25SZXF1ZXN0LnNjb3BlcztcblxuICAgICAgICAvLyBmaWx0ZXIgYnkgY2xpZW50SWQgYW5kIGFjY291bnRcbiAgICAgICAgY29uc3QgdG9rZW5DYWNoZUl0ZW1zID0gdGhpcy5jYWNoZVN0b3JhZ2UuZ2V0QWxsQWNjZXNzVG9rZW5zKHRoaXMuY2xpZW50SWQsIGFjY291bnQgPyBhY2NvdW50LmhvbWVBY2NvdW50SWRlbnRpZmllciA6IG51bGwpO1xuXG4gICAgICAgIC8vIE5vIG1hdGNoIGZvdW5kIGFmdGVyIGluaXRpYWwgZmlsdGVyaW5nXG4gICAgICAgIGlmICh0b2tlbkNhY2hlSXRlbXMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGZpbHRlcmVkSXRlbXM6IEFycmF5PEFjY2Vzc1Rva2VuQ2FjaGVJdGVtPiA9IFtdO1xuXG4gICAgICAgIC8vIGlmIG5vIGF1dGhvcml0eSBwYXNzZWRcbiAgICAgICAgaWYgKCFzZXJ2ZXJBdXRoZW50aWNhdGlvblJlcXVlc3QuYXV0aG9yaXR5KSB7XG4gICAgICAgICAgICAvLyBmaWx0ZXIgYnkgc2NvcGVcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdG9rZW5DYWNoZUl0ZW1zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgY2FjaGVJdGVtID0gdG9rZW5DYWNoZUl0ZW1zW2ldO1xuICAgICAgICAgICAgICAgIGNvbnN0IGNhY2hlZFNjb3BlcyA9IGNhY2hlSXRlbS5rZXkuc2NvcGVzLnNwbGl0KFwiIFwiKTtcbiAgICAgICAgICAgICAgICBpZiAoU2NvcGVTZXQuY29udGFpbnNTY29wZShjYWNoZWRTY29wZXMsIHNjb3BlcykpIHtcbiAgICAgICAgICAgICAgICAgICAgZmlsdGVyZWRJdGVtcy5wdXNoKGNhY2hlSXRlbSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBpZiBvbmx5IG9uZSBjYWNoZWQgdG9rZW4gZm91bmRcbiAgICAgICAgICAgIGlmIChmaWx0ZXJlZEl0ZW1zLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICAgICAgICAgIGFjY2Vzc1Rva2VuQ2FjaGVJdGVtID0gZmlsdGVyZWRJdGVtc1swXTtcbiAgICAgICAgICAgICAgICBzZXJ2ZXJBdXRoZW50aWNhdGlvblJlcXVlc3QuYXV0aG9yaXR5SW5zdGFuY2UgPSBBdXRob3JpdHlGYWN0b3J5LkNyZWF0ZUluc3RhbmNlKGFjY2Vzc1Rva2VuQ2FjaGVJdGVtLmtleS5hdXRob3JpdHksIHRoaXMuY29uZmlnLmF1dGgudmFsaWRhdGVBdXRob3JpdHkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gaWYgbW9yZSB0aGFuIG9uZSBjYWNoZWQgdG9rZW4gaXMgZm91bmRcbiAgICAgICAgICAgIGVsc2UgaWYgKGZpbHRlcmVkSXRlbXMubGVuZ3RoID4gMSkge1xuICAgICAgICAgICAgICAgIHRocm93IENsaWVudEF1dGhFcnJvci5jcmVhdGVNdWx0aXBsZU1hdGNoaW5nVG9rZW5zSW5DYWNoZUVycm9yKHNjb3Blcy50b1N0cmluZygpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIGlmIG5vIG1hdGNoIGZvdW5kLCBjaGVjayBpZiB0aGVyZSB3YXMgYSBzaW5nbGUgYXV0aG9yaXR5IHVzZWRcbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnN0IGF1dGhvcml0eUxpc3QgPSB0aGlzLmdldFVuaXF1ZUF1dGhvcml0eSh0b2tlbkNhY2hlSXRlbXMsIFwiYXV0aG9yaXR5XCIpO1xuICAgICAgICAgICAgICAgIGlmIChhdXRob3JpdHlMaXN0Lmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgQ2xpZW50QXV0aEVycm9yLmNyZWF0ZU11bHRpcGxlQXV0aG9yaXRpZXNJbkNhY2hlRXJyb3Ioc2NvcGVzLnRvU3RyaW5nKCkpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHNlcnZlckF1dGhlbnRpY2F0aW9uUmVxdWVzdC5hdXRob3JpdHlJbnN0YW5jZSA9IEF1dGhvcml0eUZhY3RvcnkuQ3JlYXRlSW5zdGFuY2UoYXV0aG9yaXR5TGlzdFswXSwgdGhpcy5jb25maWcuYXV0aC52YWxpZGF0ZUF1dGhvcml0eSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gaWYgYW4gYXV0aG9yaXR5IGlzIHBhc3NlZCBpbiB0aGUgQVBJXG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgLy8gZmlsdGVyIGJ5IGF1dGhvcml0eSBhbmQgc2NvcGVcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdG9rZW5DYWNoZUl0ZW1zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgY2FjaGVJdGVtID0gdG9rZW5DYWNoZUl0ZW1zW2ldO1xuICAgICAgICAgICAgICAgIGNvbnN0IGNhY2hlZFNjb3BlcyA9IGNhY2hlSXRlbS5rZXkuc2NvcGVzLnNwbGl0KFwiIFwiKTtcbiAgICAgICAgICAgICAgICBpZiAoU2NvcGVTZXQuY29udGFpbnNTY29wZShjYWNoZWRTY29wZXMsIHNjb3BlcykgJiYgVXJsVXRpbHMuQ2Fub25pY2FsaXplVXJpKGNhY2hlSXRlbS5rZXkuYXV0aG9yaXR5KSA9PT0gc2VydmVyQXV0aGVudGljYXRpb25SZXF1ZXN0LmF1dGhvcml0eSkge1xuICAgICAgICAgICAgICAgICAgICBmaWx0ZXJlZEl0ZW1zLnB1c2goY2FjaGVJdGVtKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBubyBtYXRjaFxuICAgICAgICAgICAgaWYgKGZpbHRlcmVkSXRlbXMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBpZiBvbmx5IG9uZSBjYWNoZWRUb2tlbiBGb3VuZFxuICAgICAgICAgICAgZWxzZSBpZiAoZmlsdGVyZWRJdGVtcy5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgICAgICAgICBhY2Nlc3NUb2tlbkNhY2hlSXRlbSA9IGZpbHRlcmVkSXRlbXNbMF07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBpZiBtb3JlIHRoYW4gb25lIGNhY2hlZCB0b2tlbiBpcyBmb3VuZFxuICAgICAgICAgICAgICAgIHRocm93IENsaWVudEF1dGhFcnJvci5jcmVhdGVNdWx0aXBsZU1hdGNoaW5nVG9rZW5zSW5DYWNoZUVycm9yKHNjb3Blcy50b1N0cmluZygpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChhY2Nlc3NUb2tlbkNhY2hlSXRlbSAhPSBudWxsKSB7XG4gICAgICAgICAgICBjb25zdCBleHBpcmVkID0gTnVtYmVyKGFjY2Vzc1Rva2VuQ2FjaGVJdGVtLnZhbHVlLmV4cGlyZXNJbik7XG4gICAgICAgICAgICAvLyBJZiBleHBpcmF0aW9uIGlzIHdpdGhpbiBvZmZzZXQsIGl0IHdpbGwgZm9yY2UgcmVuZXdcbiAgICAgICAgICAgIGNvbnN0IG9mZnNldCA9IHRoaXMuY29uZmlnLnN5c3RlbS50b2tlblJlbmV3YWxPZmZzZXRTZWNvbmRzIHx8IDMwMDtcbiAgICAgICAgICAgIGlmIChleHBpcmVkICYmIChleHBpcmVkID4gVGltZVV0aWxzLm5vdygpICsgb2Zmc2V0KSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGlkVG9rZW5PYmogPSBuZXcgSWRUb2tlbihhY2Nlc3NUb2tlbkNhY2hlSXRlbS52YWx1ZS5pZFRva2VuKTtcbiAgICAgICAgICAgICAgICBpZiAoIWFjY291bnQpIHtcbiAgICAgICAgICAgICAgICAgICAgYWNjb3VudCA9IHRoaXMuZ2V0QWNjb3VudCgpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoIWFjY291bnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IEF1dGhFcnJvci5jcmVhdGVVbmV4cGVjdGVkRXJyb3IoXCJBY2NvdW50IHNob3VsZCBub3QgYmUgbnVsbCBoZXJlLlwiKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb25zdCBhU3RhdGUgPSB0aGlzLmdldEFjY291bnRTdGF0ZShzZXJ2ZXJBdXRoZW50aWNhdGlvblJlcXVlc3Quc3RhdGUpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlIDogQXV0aFJlc3BvbnNlID0ge1xuICAgICAgICAgICAgICAgICAgICB1bmlxdWVJZDogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgdGVuYW50SWQ6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgIHRva2VuVHlwZTogKGFjY2Vzc1Rva2VuQ2FjaGVJdGVtLnZhbHVlLmlkVG9rZW4gPT09IGFjY2Vzc1Rva2VuQ2FjaGVJdGVtLnZhbHVlLmFjY2Vzc1Rva2VuKSA/IENvbnN0YW50cy5pZFRva2VuIDogQ29uc3RhbnRzLmFjY2Vzc1Rva2VuLFxuICAgICAgICAgICAgICAgICAgICBpZFRva2VuOiBpZFRva2VuT2JqLFxuICAgICAgICAgICAgICAgICAgICBpZFRva2VuQ2xhaW1zOiBpZFRva2VuT2JqLmNsYWltcyxcbiAgICAgICAgICAgICAgICAgICAgYWNjZXNzVG9rZW46IGFjY2Vzc1Rva2VuQ2FjaGVJdGVtLnZhbHVlLmFjY2Vzc1Rva2VuLFxuICAgICAgICAgICAgICAgICAgICBzY29wZXM6IGFjY2Vzc1Rva2VuQ2FjaGVJdGVtLmtleS5zY29wZXMuc3BsaXQoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBleHBpcmVzT246IG5ldyBEYXRlKGV4cGlyZWQgKiAxMDAwKSxcbiAgICAgICAgICAgICAgICAgICAgYWNjb3VudDogYWNjb3VudCxcbiAgICAgICAgICAgICAgICAgICAgYWNjb3VudFN0YXRlOiBhU3RhdGVcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIFJlc3BvbnNlVXRpbHMuc2V0UmVzcG9uc2VJZFRva2VuKHJlc3BvbnNlLCBpZFRva2VuT2JqKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzcG9uc2U7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuY2FjaGVTdG9yYWdlLnJlbW92ZUl0ZW0oSlNPTi5zdHJpbmdpZnkoZmlsdGVyZWRJdGVtc1swXS5rZXkpKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqIFVzZWQgdG8gZ2V0IGEgdW5pcXVlIGxpc3Qgb2YgYXV0aG9yaXRpZXMgZnJvbSB0aGUgY2FjaGVcbiAgICAgKiBAcGFyYW0ge0FycmF5PEFjY2Vzc1Rva2VuQ2FjaGVJdGVtPn0gIGFjY2Vzc1Rva2VuQ2FjaGVJdGVtcyAtIGFjY2Vzc1Rva2VuQ2FjaGVJdGVtcyBzYXZlZCBpbiB0aGUgY2FjaGVcbiAgICAgKiBAaWdub3JlXG4gICAgICovXG4gICAgcHJpdmF0ZSBnZXRVbmlxdWVBdXRob3JpdHkoYWNjZXNzVG9rZW5DYWNoZUl0ZW1zOiBBcnJheTxBY2Nlc3NUb2tlbkNhY2hlSXRlbT4sIHByb3BlcnR5OiBzdHJpbmcpOiBBcnJheTxzdHJpbmc+IHtcbiAgICAgICAgY29uc3QgYXV0aG9yaXR5TGlzdDogQXJyYXk8c3RyaW5nPiA9IFtdO1xuICAgICAgICBjb25zdCBmbGFnczogQXJyYXk8c3RyaW5nPiA9IFtdO1xuICAgICAgICBhY2Nlc3NUb2tlbkNhY2hlSXRlbXMuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgICAgIGlmIChlbGVtZW50LmtleS5oYXNPd25Qcm9wZXJ0eShwcm9wZXJ0eSkgJiYgKGZsYWdzLmluZGV4T2YoZWxlbWVudC5rZXlbcHJvcGVydHldKSA9PT0gLTEpKSB7XG4gICAgICAgICAgICAgICAgZmxhZ3MucHVzaChlbGVtZW50LmtleVtwcm9wZXJ0eV0pO1xuICAgICAgICAgICAgICAgIGF1dGhvcml0eUxpc3QucHVzaChlbGVtZW50LmtleVtwcm9wZXJ0eV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIGF1dGhvcml0eUxpc3Q7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqIENoZWNrIGlmIEFEQUwgaWRfdG9rZW4gZXhpc3RzIGFuZCByZXR1cm4gaWYgZXhpc3RzLlxuICAgICAqXG4gICAgICovXG4gICAgcHJpdmF0ZSBleHRyYWN0QURBTElkVG9rZW4oKTogYW55IHtcbiAgICAgICAgY29uc3QgYWRhbElkVG9rZW4gPSB0aGlzLmNhY2hlU3RvcmFnZS5nZXRJdGVtKENvbnN0YW50cy5hZGFsSWRUb2tlbik7XG4gICAgICAgIGlmICghU3RyaW5nVXRpbHMuaXNFbXB0eShhZGFsSWRUb2tlbikpIHtcbiAgICAgICAgICAgIHJldHVybiBUb2tlblV0aWxzLmV4dHJhY3RJZFRva2VuKGFkYWxJZFRva2VuKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICogQWNxdWlyZXMgYWNjZXNzIHRva2VuIHVzaW5nIGEgaGlkZGVuIGlmcmFtZS5cbiAgICAgKiBAaWdub3JlXG4gICAgICovXG4gICAgcHJpdmF0ZSByZW5ld1Rva2VuKHNjb3BlczogQXJyYXk8c3RyaW5nPiwgcmVzb2x2ZTogRnVuY3Rpb24sIHJlamVjdDogRnVuY3Rpb24sIGFjY291bnQ6IEFjY291bnQsIHNlcnZlckF1dGhlbnRpY2F0aW9uUmVxdWVzdDogU2VydmVyUmVxdWVzdFBhcmFtZXRlcnMpOiB2b2lkIHtcbiAgICAgICAgY29uc3Qgc2NvcGUgPSBzY29wZXMuam9pbihcIiBcIikudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgdGhpcy5sb2dnZXIudmVyYm9zZShcInJlbmV3VG9rZW4gaXMgY2FsbGVkIGZvciBzY29wZTpcIiArIHNjb3BlKTtcblxuICAgICAgICBjb25zdCBmcmFtZU5hbWUgPSBgbXNhbFJlbmV3RnJhbWUke3Njb3BlfWA7XG4gICAgICAgIGNvbnN0IGZyYW1lSGFuZGxlID0gV2luZG93VXRpbHMuYWRkSGlkZGVuSUZyYW1lKGZyYW1lTmFtZSwgdGhpcy5sb2dnZXIpO1xuXG4gICAgICAgIHRoaXMudXBkYXRlQ2FjaGVFbnRyaWVzKHNlcnZlckF1dGhlbnRpY2F0aW9uUmVxdWVzdCwgYWNjb3VudCk7XG4gICAgICAgIHRoaXMubG9nZ2VyLnZlcmJvc2UoXCJSZW5ldyB0b2tlbiBFeHBlY3RlZCBzdGF0ZTogXCIgKyBzZXJ2ZXJBdXRoZW50aWNhdGlvblJlcXVlc3Quc3RhdGUpO1xuXG4gICAgICAgIC8vIEJ1aWxkIHVybE5hdmlnYXRlIHdpdGggXCJwcm9tcHQ9bm9uZVwiIGFuZCBuYXZpZ2F0ZSB0byBVUkwgaW4gaGlkZGVuIGlGcmFtZVxuICAgICAgICBjb25zdCB1cmxOYXZpZ2F0ZSA9IFVybFV0aWxzLnVybFJlbW92ZVF1ZXJ5U3RyaW5nUGFyYW1ldGVyKFVybFV0aWxzLmNyZWF0ZU5hdmlnYXRlVXJsKHNlcnZlckF1dGhlbnRpY2F0aW9uUmVxdWVzdCksIENvbnN0YW50cy5wcm9tcHQpICsgQ29uc3RhbnRzLnByb21wdF9ub25lO1xuXG4gICAgICAgIHdpbmRvdy5yZW5ld1N0YXRlcy5wdXNoKHNlcnZlckF1dGhlbnRpY2F0aW9uUmVxdWVzdC5zdGF0ZSk7XG4gICAgICAgIHdpbmRvdy5yZXF1ZXN0VHlwZSA9IENvbnN0YW50cy5yZW5ld1Rva2VuO1xuICAgICAgICB0aGlzLnJlZ2lzdGVyQ2FsbGJhY2soc2VydmVyQXV0aGVudGljYXRpb25SZXF1ZXN0LnN0YXRlLCBzY29wZSwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgdGhpcy5sb2dnZXIuaW5mb1BpaShcIk5hdmlnYXRlIHRvOlwiICsgdXJsTmF2aWdhdGUpO1xuICAgICAgICBmcmFtZUhhbmRsZS5zcmMgPSBcImFib3V0OmJsYW5rXCI7XG4gICAgICAgIHRoaXMubG9hZElmcmFtZVRpbWVvdXQodXJsTmF2aWdhdGUsIGZyYW1lTmFtZSwgc2NvcGUpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKiBSZW5ld3MgaWR0b2tlbiBmb3IgYXBwJ3Mgb3duIGJhY2tlbmQgd2hlbiBjbGllbnRJZCBpcyBwYXNzZWQgYXMgYSBzaW5nbGUgc2NvcGUgaW4gdGhlIHNjb3BlcyBhcnJheS5cbiAgICAgKiBAaWdub3JlXG4gICAgICovXG4gICAgcHJpdmF0ZSByZW5ld0lkVG9rZW4oc2NvcGVzOiBBcnJheTxzdHJpbmc+LCByZXNvbHZlOiBGdW5jdGlvbiwgcmVqZWN0OiBGdW5jdGlvbiwgYWNjb3VudDogQWNjb3VudCwgc2VydmVyQXV0aGVudGljYXRpb25SZXF1ZXN0OiBTZXJ2ZXJSZXF1ZXN0UGFyYW1ldGVycyk6IHZvaWQge1xuICAgICAgICB0aGlzLmxvZ2dlci5pbmZvKFwicmVuZXdpZFRva2VuIGlzIGNhbGxlZFwiKTtcbiAgICAgICAgY29uc3QgZnJhbWVOYW1lID0gXCJtc2FsSWRUb2tlbkZyYW1lXCI7XG4gICAgICAgIGNvbnN0IGZyYW1lSGFuZGxlID0gV2luZG93VXRpbHMuYWRkSGlkZGVuSUZyYW1lKGZyYW1lTmFtZSwgdGhpcy5sb2dnZXIpO1xuXG4gICAgICAgIHRoaXMudXBkYXRlQ2FjaGVFbnRyaWVzKHNlcnZlckF1dGhlbnRpY2F0aW9uUmVxdWVzdCwgYWNjb3VudCk7XG5cbiAgICAgICAgdGhpcy5sb2dnZXIudmVyYm9zZShcIlJlbmV3IElkdG9rZW4gRXhwZWN0ZWQgc3RhdGU6IFwiICsgc2VydmVyQXV0aGVudGljYXRpb25SZXF1ZXN0LnN0YXRlKTtcblxuICAgICAgICAvLyBCdWlsZCB1cmxOYXZpZ2F0ZSB3aXRoIFwicHJvbXB0PW5vbmVcIiBhbmQgbmF2aWdhdGUgdG8gVVJMIGluIGhpZGRlbiBpRnJhbWVcbiAgICAgICAgY29uc3QgdXJsTmF2aWdhdGUgPSBVcmxVdGlscy51cmxSZW1vdmVRdWVyeVN0cmluZ1BhcmFtZXRlcihVcmxVdGlscy5jcmVhdGVOYXZpZ2F0ZVVybChzZXJ2ZXJBdXRoZW50aWNhdGlvblJlcXVlc3QpLCBDb25zdGFudHMucHJvbXB0KSArIENvbnN0YW50cy5wcm9tcHRfbm9uZTtcblxuICAgICAgICBpZiAodGhpcy5zaWxlbnRMb2dpbikge1xuICAgICAgICAgICAgd2luZG93LnJlcXVlc3RUeXBlID0gQ29uc3RhbnRzLmxvZ2luO1xuICAgICAgICAgICAgdGhpcy5zaWxlbnRBdXRoZW50aWNhdGlvblN0YXRlID0gc2VydmVyQXV0aGVudGljYXRpb25SZXF1ZXN0LnN0YXRlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgd2luZG93LnJlcXVlc3RUeXBlID0gQ29uc3RhbnRzLnJlbmV3VG9rZW47XG4gICAgICAgICAgICB3aW5kb3cucmVuZXdTdGF0ZXMucHVzaChzZXJ2ZXJBdXRoZW50aWNhdGlvblJlcXVlc3Quc3RhdGUpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gbm90ZTogc2NvcGUgaGVyZSBpcyBjbGllbnRJZFxuICAgICAgICB0aGlzLnJlZ2lzdGVyQ2FsbGJhY2soc2VydmVyQXV0aGVudGljYXRpb25SZXF1ZXN0LnN0YXRlLCB0aGlzLmNsaWVudElkLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICB0aGlzLmxvZ2dlci5pbmZvUGlpKFwiTmF2aWdhdGUgdG86XCIgKyB1cmxOYXZpZ2F0ZSk7XG4gICAgICAgIGZyYW1lSGFuZGxlLnNyYyA9IFwiYWJvdXQ6YmxhbmtcIjtcbiAgICAgICAgdGhpcy5sb2FkSWZyYW1lVGltZW91dCh1cmxOYXZpZ2F0ZSwgZnJhbWVOYW1lLCB0aGlzLmNsaWVudElkKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICpcbiAgICAgKiBUaGlzIG1ldGhvZCBtdXN0IGJlIGNhbGxlZCBmb3IgcHJvY2Vzc2luZyB0aGUgcmVzcG9uc2UgcmVjZWl2ZWQgZnJvbSBBQUQuIEl0IGV4dHJhY3RzIHRoZSBoYXNoLCBwcm9jZXNzZXMgdGhlIHRva2VuIG9yIGVycm9yLCBzYXZlcyBpdCBpbiB0aGUgY2FjaGUgYW5kIGNhbGxzIHRoZSByZWdpc3RlcmVkIGNhbGxiYWNrcyB3aXRoIHRoZSByZXN1bHQuXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGF1dGhvcml0eSBhdXRob3JpdHkgcmVjZWl2ZWQgaW4gdGhlIHJlZGlyZWN0IHJlc3BvbnNlIGZyb20gQUFELlxuICAgICAqIEBwYXJhbSB7VG9rZW5SZXNwb25zZX0gcmVxdWVzdEluZm8gYW4gb2JqZWN0IGNyZWF0ZWQgZnJvbSB0aGUgcmVkaXJlY3QgcmVzcG9uc2UgZnJvbSBBQUQgY29tcHJpc2luZyBvZiB0aGUga2V5cyAtIHBhcmFtZXRlcnMsIHJlcXVlc3RUeXBlLCBzdGF0ZU1hdGNoLCBzdGF0ZVJlc3BvbnNlIGFuZCB2YWxpZC5cbiAgICAgKiBAcGFyYW0ge0FjY291bnR9IGFjY291bnQgYWNjb3VudCBvYmplY3QgZm9yIHdoaWNoIHNjb3BlcyBhcmUgY29uc2VudGVkIGZvci4gVGhlIGRlZmF1bHQgYWNjb3VudCBpcyB0aGUgbG9nZ2VkIGluIGFjY291bnQuXG4gICAgICogQHBhcmFtIHtDbGllbnRJbmZvfSBjbGllbnRJbmZvIGNsaWVudEluZm8gcmVjZWl2ZWQgYXMgcGFydCBvZiB0aGUgcmVzcG9uc2UgY29tcHJpc2luZyBvZiBmaWVsZHMgdWlkIGFuZCB1dGlkLlxuICAgICAqIEBwYXJhbSB7SWRUb2tlbn0gaWRUb2tlbiBpZFRva2VuIHJlY2VpdmVkIGFzIHBhcnQgb2YgdGhlIHJlc3BvbnNlLlxuICAgICAqIEBpZ25vcmVcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIC8qIHRzbGludDpkaXNhYmxlOm5vLXN0cmluZy1saXRlcmFsICovXG4gICAgcHJpdmF0ZSBzYXZlQWNjZXNzVG9rZW4ocmVzcG9uc2U6IEF1dGhSZXNwb25zZSwgYXV0aG9yaXR5OiBzdHJpbmcsIHBhcmFtZXRlcnM6IGFueSwgY2xpZW50SW5mbzogc3RyaW5nLCBpZFRva2VuT2JqOiBJZFRva2VuKTogQXV0aFJlc3BvbnNlIHtcbiAgICAgICAgbGV0IHNjb3BlOiBzdHJpbmc7XG4gICAgICAgIGNvbnN0IGFjY2Vzc1Rva2VuUmVzcG9uc2UgPSB7IC4uLnJlc3BvbnNlIH07XG4gICAgICAgIGNvbnN0IGNsaWVudE9iajogQ2xpZW50SW5mbyA9IG5ldyBDbGllbnRJbmZvKGNsaWVudEluZm8pO1xuICAgICAgICBsZXQgZXhwaXJhdGlvbjogbnVtYmVyO1xuXG4gICAgICAgIC8vIGlmIHRoZSByZXNwb25zZSBjb250YWlucyBcInNjb3BlXCJcbiAgICAgICAgaWYgKHBhcmFtZXRlcnMuaGFzT3duUHJvcGVydHkoXCJzY29wZVwiKSkge1xuICAgICAgICAgICAgLy8gcmVhZCB0aGUgc2NvcGVzXG4gICAgICAgICAgICBzY29wZSA9IHBhcmFtZXRlcnNbXCJzY29wZVwiXTtcbiAgICAgICAgICAgIGNvbnN0IGNvbnNlbnRlZFNjb3BlcyA9IHNjb3BlLnNwbGl0KFwiIFwiKTtcblxuICAgICAgICAgICAgLy8gcmV0cmlldmUgYWxsIGFjY2VzcyB0b2tlbnMgZnJvbSB0aGUgY2FjaGUsIHJlbW92ZSB0aGUgZHVwIHNjb3Jlc1xuICAgICAgICAgICAgY29uc3QgYWNjZXNzVG9rZW5DYWNoZUl0ZW1zID0gdGhpcy5jYWNoZVN0b3JhZ2UuZ2V0QWxsQWNjZXNzVG9rZW5zKHRoaXMuY2xpZW50SWQsIGF1dGhvcml0eSk7XG5cbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYWNjZXNzVG9rZW5DYWNoZUl0ZW1zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgYWNjZXNzVG9rZW5DYWNoZUl0ZW0gPSBhY2Nlc3NUb2tlbkNhY2hlSXRlbXNbaV07XG5cbiAgICAgICAgICAgICAgICBpZiAoYWNjZXNzVG9rZW5DYWNoZUl0ZW0ua2V5LmhvbWVBY2NvdW50SWRlbnRpZmllciA9PT0gcmVzcG9uc2UuYWNjb3VudC5ob21lQWNjb3VudElkZW50aWZpZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY2FjaGVkU2NvcGVzID0gYWNjZXNzVG9rZW5DYWNoZUl0ZW0ua2V5LnNjb3Blcy5zcGxpdChcIiBcIik7XG4gICAgICAgICAgICAgICAgICAgIGlmIChTY29wZVNldC5pc0ludGVyc2VjdGluZ1Njb3BlcyhjYWNoZWRTY29wZXMsIGNvbnNlbnRlZFNjb3BlcykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2FjaGVTdG9yYWdlLnJlbW92ZUl0ZW0oSlNPTi5zdHJpbmdpZnkoYWNjZXNzVG9rZW5DYWNoZUl0ZW0ua2V5KSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIEdlbmVyYXRlIGFuZCBjYWNoZSBhY2Nlc3NUb2tlbktleSBhbmQgYWNjZXNzVG9rZW5WYWx1ZVxuICAgICAgICAgICAgY29uc3QgZXhwaXJlc0luID0gVGltZVV0aWxzLnBhcnNlRXhwaXJlc0luKHBhcmFtZXRlcnNbQ29uc3RhbnRzLmV4cGlyZXNJbl0pO1xuICAgICAgICAgICAgZXhwaXJhdGlvbiA9IFRpbWVVdGlscy5ub3coKSArIGV4cGlyZXNJbjtcbiAgICAgICAgICAgIGNvbnN0IGFjY2Vzc1Rva2VuS2V5ID0gbmV3IEFjY2Vzc1Rva2VuS2V5KGF1dGhvcml0eSwgdGhpcy5jbGllbnRJZCwgc2NvcGUsIGNsaWVudE9iai51aWQsIGNsaWVudE9iai51dGlkKTtcbiAgICAgICAgICAgIGNvbnN0IGFjY2Vzc1Rva2VuVmFsdWUgPSBuZXcgQWNjZXNzVG9rZW5WYWx1ZShwYXJhbWV0ZXJzW0NvbnN0YW50cy5hY2Nlc3NUb2tlbl0sIGlkVG9rZW5PYmoucmF3SWRUb2tlbiwgZXhwaXJhdGlvbi50b1N0cmluZygpLCBjbGllbnRJbmZvKTtcblxuICAgICAgICAgICAgdGhpcy5jYWNoZVN0b3JhZ2Uuc2V0SXRlbShKU09OLnN0cmluZ2lmeShhY2Nlc3NUb2tlbktleSksIEpTT04uc3RyaW5naWZ5KGFjY2Vzc1Rva2VuVmFsdWUpKTtcblxuICAgICAgICAgICAgYWNjZXNzVG9rZW5SZXNwb25zZS5hY2Nlc3NUb2tlbiAgPSBwYXJhbWV0ZXJzW0NvbnN0YW50cy5hY2Nlc3NUb2tlbl07XG4gICAgICAgICAgICBhY2Nlc3NUb2tlblJlc3BvbnNlLnNjb3BlcyA9IGNvbnNlbnRlZFNjb3BlcztcbiAgICAgICAgfVxuICAgICAgICAvLyBpZiB0aGUgcmVzcG9uc2UgZG9lcyBub3QgY29udGFpbiBcInNjb3BlXCIgLSBzY29wZSBpcyB1c3VhbGx5IGNsaWVudF9pZCBhbmQgdGhlIHRva2VuIHdpbGwgYmUgaWRfdG9rZW5cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBzY29wZSA9IHRoaXMuY2xpZW50SWQ7XG5cbiAgICAgICAgICAgIC8vIEdlbmVyYXRlIGFuZCBjYWNoZSBhY2Nlc3NUb2tlbktleSBhbmQgYWNjZXNzVG9rZW5WYWx1ZVxuICAgICAgICAgICAgY29uc3QgYWNjZXNzVG9rZW5LZXkgPSBuZXcgQWNjZXNzVG9rZW5LZXkoYXV0aG9yaXR5LCB0aGlzLmNsaWVudElkLCBzY29wZSwgY2xpZW50T2JqLnVpZCwgY2xpZW50T2JqLnV0aWQpO1xuICAgICAgICAgICAgZXhwaXJhdGlvbiA9IE51bWJlcihpZFRva2VuT2JqLmV4cGlyYXRpb24pO1xuICAgICAgICAgICAgY29uc3QgYWNjZXNzVG9rZW5WYWx1ZSA9IG5ldyBBY2Nlc3NUb2tlblZhbHVlKHBhcmFtZXRlcnNbQ29uc3RhbnRzLmlkVG9rZW5dLCBwYXJhbWV0ZXJzW0NvbnN0YW50cy5pZFRva2VuXSwgZXhwaXJhdGlvbi50b1N0cmluZygpLCBjbGllbnRJbmZvKTtcbiAgICAgICAgICAgIHRoaXMuY2FjaGVTdG9yYWdlLnNldEl0ZW0oSlNPTi5zdHJpbmdpZnkoYWNjZXNzVG9rZW5LZXkpLCBKU09OLnN0cmluZ2lmeShhY2Nlc3NUb2tlblZhbHVlKSk7XG4gICAgICAgICAgICBhY2Nlc3NUb2tlblJlc3BvbnNlLnNjb3BlcyA9IFtzY29wZV07XG4gICAgICAgICAgICBhY2Nlc3NUb2tlblJlc3BvbnNlLmFjY2Vzc1Rva2VuID0gcGFyYW1ldGVyc1tDb25zdGFudHMuaWRUb2tlbl07XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZXhwaXJhdGlvbikge1xuICAgICAgICAgICAgYWNjZXNzVG9rZW5SZXNwb25zZS5leHBpcmVzT24gPSBuZXcgRGF0ZShleHBpcmF0aW9uICogMTAwMCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmxvZ2dlci5lcnJvcihcIkNvdWxkIG5vdCBwYXJzZSBleHBpcmVzSW4gcGFyYW1ldGVyXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGFjY2Vzc1Rva2VuUmVzcG9uc2U7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqIFNhdmVzIHRva2VuIG9yIGVycm9yIHJlY2VpdmVkIGluIHRoZSByZXNwb25zZSBmcm9tIEFBRCBpbiB0aGUgY2FjaGUuIEluIGNhc2Ugb2YgaWRfdG9rZW4sIGl0IGFsc28gY3JlYXRlcyB0aGUgYWNjb3VudCBvYmplY3QuXG4gICAgICogQGlnbm9yZVxuICAgICAqL1xuICAgIHByb3RlY3RlZCBzYXZlVG9rZW5Gcm9tSGFzaChoYXNoOiBzdHJpbmcsIHN0YXRlSW5mbzogUmVzcG9uc2VTdGF0ZUluZm8pOiBBdXRoUmVzcG9uc2Uge1xuICAgICAgICB0aGlzLmxvZ2dlci5pbmZvKFwiU3RhdGUgc3RhdHVzOlwiICsgc3RhdGVJbmZvLnN0YXRlTWF0Y2ggKyBcIjsgUmVxdWVzdCB0eXBlOlwiICsgc3RhdGVJbmZvLnJlcXVlc3RUeXBlKTtcblxuICAgICAgICBsZXQgcmVzcG9uc2UgOiBBdXRoUmVzcG9uc2UgPSB7XG4gICAgICAgICAgICB1bmlxdWVJZDogXCJcIixcbiAgICAgICAgICAgIHRlbmFudElkOiBcIlwiLFxuICAgICAgICAgICAgdG9rZW5UeXBlOiBcIlwiLFxuICAgICAgICAgICAgaWRUb2tlbjogbnVsbCxcbiAgICAgICAgICAgIGlkVG9rZW5DbGFpbXM6IG51bGwsXG4gICAgICAgICAgICBhY2Nlc3NUb2tlbjogbnVsbCxcbiAgICAgICAgICAgIHNjb3BlczogW10sXG4gICAgICAgICAgICBleHBpcmVzT246IG51bGwsXG4gICAgICAgICAgICBhY2NvdW50OiBudWxsLFxuICAgICAgICAgICAgYWNjb3VudFN0YXRlOiBcIlwiLFxuICAgICAgICB9O1xuXG4gICAgICAgIGxldCBlcnJvcjogQXV0aEVycm9yO1xuICAgICAgICBjb25zdCBoYXNoUGFyYW1zID0gVXJsVXRpbHMuZGVzZXJpYWxpemVIYXNoKGhhc2gpO1xuICAgICAgICBsZXQgYXV0aG9yaXR5S2V5OiBzdHJpbmcgPSBcIlwiO1xuICAgICAgICBsZXQgYWNxdWlyZVRva2VuQWNjb3VudEtleTogc3RyaW5nID0gXCJcIjtcbiAgICAgICAgbGV0IGlkVG9rZW5PYmo6IElkVG9rZW4gPSBudWxsO1xuXG4gICAgICAgIC8vIElmIHNlcnZlciByZXR1cm5zIGFuIGVycm9yXG4gICAgICAgIGlmIChoYXNoUGFyYW1zLmhhc093blByb3BlcnR5KENvbnN0YW50cy5lcnJvckRlc2NyaXB0aW9uKSB8fCBoYXNoUGFyYW1zLmhhc093blByb3BlcnR5KENvbnN0YW50cy5lcnJvcikpIHtcbiAgICAgICAgICAgIHRoaXMubG9nZ2VyLmluZm9QaWkoXCJFcnJvciA6XCIgKyBoYXNoUGFyYW1zW0NvbnN0YW50cy5lcnJvcl0gKyBcIjsgRXJyb3IgZGVzY3JpcHRpb246XCIgKyBoYXNoUGFyYW1zW0NvbnN0YW50cy5lcnJvckRlc2NyaXB0aW9uXSk7XG4gICAgICAgICAgICB0aGlzLmNhY2hlU3RvcmFnZS5zZXRJdGVtKENvbnN0YW50cy5tc2FsRXJyb3IsIGhhc2hQYXJhbXNbQ29uc3RhbnRzLmVycm9yXSk7XG4gICAgICAgICAgICB0aGlzLmNhY2hlU3RvcmFnZS5zZXRJdGVtKENvbnN0YW50cy5tc2FsRXJyb3JEZXNjcmlwdGlvbiwgaGFzaFBhcmFtc1tDb25zdGFudHMuZXJyb3JEZXNjcmlwdGlvbl0pO1xuXG4gICAgICAgICAgICAvLyBsb2dpblxuICAgICAgICAgICAgaWYgKHN0YXRlSW5mby5yZXF1ZXN0VHlwZSA9PT0gQ29uc3RhbnRzLmxvZ2luKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5sb2dpbkluUHJvZ3Jlc3MgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB0aGlzLmNhY2hlU3RvcmFnZS5zZXRJdGVtKENvbnN0YW50cy5sb2dpbkVycm9yLCBoYXNoUGFyYW1zW0NvbnN0YW50cy5lcnJvckRlc2NyaXB0aW9uXSArIFwiOlwiICsgaGFzaFBhcmFtc1tDb25zdGFudHMuZXJyb3JdKTtcbiAgICAgICAgICAgICAgICBhdXRob3JpdHlLZXkgPSBTdG9yYWdlLmdlbmVyYXRlQXV0aG9yaXR5S2V5KHN0YXRlSW5mby5zdGF0ZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIGFjcXVpcmVUb2tlblxuICAgICAgICAgICAgaWYgKHN0YXRlSW5mby5yZXF1ZXN0VHlwZSA9PT0gQ29uc3RhbnRzLnJlbmV3VG9rZW4pIHtcbiAgICAgICAgICAgICAgICB0aGlzLmFjcXVpcmVUb2tlbkluUHJvZ3Jlc3MgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBhdXRob3JpdHlLZXkgPSBTdG9yYWdlLmdlbmVyYXRlQXV0aG9yaXR5S2V5KHN0YXRlSW5mby5zdGF0ZSk7XG5cbiAgICAgICAgICAgICAgICBjb25zdCBhY2NvdW50OiBBY2NvdW50ID0gdGhpcy5nZXRBY2NvdW50KCk7XG4gICAgICAgICAgICAgICAgbGV0IGFjY291bnRJZDtcblxuICAgICAgICAgICAgICAgIGlmIChhY2NvdW50ICYmICFTdHJpbmdVdGlscy5pc0VtcHR5KGFjY291bnQuaG9tZUFjY291bnRJZGVudGlmaWVyKSkge1xuICAgICAgICAgICAgICAgICAgICBhY2NvdW50SWQgPSBhY2NvdW50LmhvbWVBY2NvdW50SWRlbnRpZmllcjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGFjY291bnRJZCA9IENvbnN0YW50cy5ub19hY2NvdW50O1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGFjcXVpcmVUb2tlbkFjY291bnRLZXkgPSBTdG9yYWdlLmdlbmVyYXRlQWNxdWlyZVRva2VuQWNjb3VudEtleShhY2NvdW50SWQsIHN0YXRlSW5mby5zdGF0ZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0IHtcbiAgICAgICAgICAgICAgICBbQ29uc3RhbnRzLmVycm9yXTogaGFzaEVycixcbiAgICAgICAgICAgICAgICBbQ29uc3RhbnRzLmVycm9yRGVzY3JpcHRpb25dOiBoYXNoRXJyRGVzY1xuICAgICAgICAgICAgfSA9IGhhc2hQYXJhbXM7XG4gICAgICAgICAgICBpZiAoSW50ZXJhY3Rpb25SZXF1aXJlZEF1dGhFcnJvci5pc0ludGVyYWN0aW9uUmVxdWlyZWRFcnJvcihoYXNoRXJyKSB8fFxuICAgICAgICBJbnRlcmFjdGlvblJlcXVpcmVkQXV0aEVycm9yLmlzSW50ZXJhY3Rpb25SZXF1aXJlZEVycm9yKGhhc2hFcnJEZXNjKSkge1xuICAgICAgICAgICAgICAgIGVycm9yID0gbmV3IEludGVyYWN0aW9uUmVxdWlyZWRBdXRoRXJyb3IoaGFzaFBhcmFtc1tDb25zdGFudHMuZXJyb3JdLCBoYXNoUGFyYW1zW0NvbnN0YW50cy5lcnJvckRlc2NyaXB0aW9uXSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGVycm9yID0gbmV3IFNlcnZlckVycm9yKGhhc2hQYXJhbXNbQ29uc3RhbnRzLmVycm9yXSwgaGFzaFBhcmFtc1tDb25zdGFudHMuZXJyb3JEZXNjcmlwdGlvbl0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIElmIHRoZSBzZXJ2ZXIgcmV0dXJucyBcIlN1Y2Nlc3NcIlxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIC8vIFZlcmlmeSB0aGUgc3RhdGUgZnJvbSByZWRpcmVjdCBhbmQgcmVjb3JkIHRva2VucyB0byBzdG9yYWdlIGlmIGV4aXN0c1xuICAgICAgICAgICAgaWYgKHN0YXRlSW5mby5zdGF0ZU1hdGNoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5sb2dnZXIuaW5mbyhcIlN0YXRlIGlzIHJpZ2h0XCIpO1xuICAgICAgICAgICAgICAgIGlmIChoYXNoUGFyYW1zLmhhc093blByb3BlcnR5KENvbnN0YW50cy5zZXNzaW9uU3RhdGUpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2FjaGVTdG9yYWdlLnNldEl0ZW0oQ29uc3RhbnRzLm1zYWxTZXNzaW9uU3RhdGUsIGhhc2hQYXJhbXNbQ29uc3RhbnRzLnNlc3Npb25TdGF0ZV0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXNwb25zZS5hY2NvdW50U3RhdGUgPSB0aGlzLmdldEFjY291bnRTdGF0ZShzdGF0ZUluZm8uc3RhdGUpO1xuXG4gICAgICAgICAgICAgICAgbGV0IGNsaWVudEluZm86IHN0cmluZyA9IFwiXCI7XG5cbiAgICAgICAgICAgICAgICAvLyBQcm9jZXNzIGFjY2Vzc190b2tlblxuICAgICAgICAgICAgICAgIGlmIChoYXNoUGFyYW1zLmhhc093blByb3BlcnR5KENvbnN0YW50cy5hY2Nlc3NUb2tlbikpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2dnZXIuaW5mbyhcIkZyYWdtZW50IGhhcyBhY2Nlc3MgdG9rZW5cIik7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYWNxdWlyZVRva2VuSW5Qcm9ncmVzcyA9IGZhbHNlO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIHJldHJpZXZlIHRoZSBpZF90b2tlbiBmcm9tIHJlc3BvbnNlIGlmIHByZXNlbnRcbiAgICAgICAgICAgICAgICAgICAgaWYgKGhhc2hQYXJhbXMuaGFzT3duUHJvcGVydHkoQ29uc3RhbnRzLmlkVG9rZW4pKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZFRva2VuT2JqID0gbmV3IElkVG9rZW4oaGFzaFBhcmFtc1tDb25zdGFudHMuaWRUb2tlbl0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2UuaWRUb2tlbiA9IGlkVG9rZW5PYmo7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXNwb25zZS5pZFRva2VuQ2xhaW1zID0gaWRUb2tlbk9iai5jbGFpbXM7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZFRva2VuT2JqID0gbmV3IElkVG9rZW4odGhpcy5jYWNoZVN0b3JhZ2UuZ2V0SXRlbShDb25zdGFudHMuaWRUb2tlbktleSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2UgPSBSZXNwb25zZVV0aWxzLnNldFJlc3BvbnNlSWRUb2tlbihyZXNwb25zZSwgaWRUb2tlbk9iaik7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAvLyBzZXQgYXV0aG9yaXR5XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGF1dGhvcml0eTogc3RyaW5nID0gdGhpcy5wb3B1bGF0ZUF1dGhvcml0eShzdGF0ZUluZm8uc3RhdGUsIHRoaXMuaW5Db29raWUsIHRoaXMuY2FjaGVTdG9yYWdlLCBpZFRva2VuT2JqKTtcblxuICAgICAgICAgICAgICAgICAgICAvLyByZXRyaWV2ZSBjbGllbnRfaW5mbyAtIGlmIGl0IGlzIG5vdCBmb3VuZCwgZ2VuZXJhdGUgdGhlIHVpZCBhbmQgdXRpZCBmcm9tIGlkVG9rZW5cbiAgICAgICAgICAgICAgICAgICAgaWYgKGhhc2hQYXJhbXMuaGFzT3duUHJvcGVydHkoQ29uc3RhbnRzLmNsaWVudEluZm8pKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGllbnRJbmZvID0gaGFzaFBhcmFtc1tDb25zdGFudHMuY2xpZW50SW5mb107XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxvZ2dlci53YXJuaW5nKFwiQ2xpZW50SW5mbyBub3QgcmVjZWl2ZWQgaW4gdGhlIHJlc3BvbnNlIGZyb20gQUFEXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgQ2xpZW50QXV0aEVycm9yLmNyZWF0ZUNsaWVudEluZm9Ob3RQb3B1bGF0ZWRFcnJvcihcIkNsaWVudEluZm8gbm90IHJlY2VpdmVkIGluIHRoZSByZXNwb25zZSBmcm9tIHRoZSBzZXJ2ZXJcIik7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICByZXNwb25zZS5hY2NvdW50ID0gQWNjb3VudC5jcmVhdGVBY2NvdW50KGlkVG9rZW5PYmosIG5ldyBDbGllbnRJbmZvKGNsaWVudEluZm8pKTtcblxuICAgICAgICAgICAgICAgICAgICBsZXQgYWNjb3VudEtleTogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2UuYWNjb3VudCAmJiAhU3RyaW5nVXRpbHMuaXNFbXB0eShyZXNwb25zZS5hY2NvdW50LmhvbWVBY2NvdW50SWRlbnRpZmllcikpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjY291bnRLZXkgPSByZXNwb25zZS5hY2NvdW50LmhvbWVBY2NvdW50SWRlbnRpZmllcjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjY291bnRLZXkgPSBDb25zdGFudHMubm9fYWNjb3VudDtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGFjcXVpcmVUb2tlbkFjY291bnRLZXkgPSBTdG9yYWdlLmdlbmVyYXRlQWNxdWlyZVRva2VuQWNjb3VudEtleShhY2NvdW50S2V5LCBzdGF0ZUluZm8uc3RhdGUpO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBhY3F1aXJlVG9rZW5BY2NvdW50S2V5X25vYWNjb3VudCA9IFN0b3JhZ2UuZ2VuZXJhdGVBY3F1aXJlVG9rZW5BY2NvdW50S2V5KENvbnN0YW50cy5ub19hY2NvdW50LCBzdGF0ZUluZm8uc3RhdGUpO1xuXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNhY2hlZEFjY291bnQ6IHN0cmluZyA9IHRoaXMuY2FjaGVTdG9yYWdlLmdldEl0ZW0oYWNxdWlyZVRva2VuQWNjb3VudEtleSk7XG4gICAgICAgICAgICAgICAgICAgIGxldCBhY3F1aXJlVG9rZW5BY2NvdW50OiBBY2NvdW50O1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIENoZWNrIHdpdGggdGhlIGFjY291bnQgaW4gdGhlIENhY2hlXG4gICAgICAgICAgICAgICAgICAgIGlmICghU3RyaW5nVXRpbHMuaXNFbXB0eShjYWNoZWRBY2NvdW50KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYWNxdWlyZVRva2VuQWNjb3VudCA9IEpTT04ucGFyc2UoY2FjaGVkQWNjb3VudCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2UuYWNjb3VudCAmJiBhY3F1aXJlVG9rZW5BY2NvdW50ICYmIEFjY291bnQuY29tcGFyZUFjY291bnRzKHJlc3BvbnNlLmFjY291bnQsIGFjcXVpcmVUb2tlbkFjY291bnQpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2UgPSB0aGlzLnNhdmVBY2Nlc3NUb2tlbihyZXNwb25zZSwgYXV0aG9yaXR5LCBoYXNoUGFyYW1zLCBjbGllbnRJbmZvLCBpZFRva2VuT2JqKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxvZ2dlci5pbmZvKFwiVGhlIHVzZXIgb2JqZWN0IHJlY2VpdmVkIGluIHRoZSByZXNwb25zZSBpcyB0aGUgc2FtZSBhcyB0aGUgb25lIHBhc3NlZCBpbiB0aGUgYWNxdWlyZVRva2VuIHJlcXVlc3RcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxvZ2dlci53YXJuaW5nKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlRoZSBhY2NvdW50IG9iamVjdCBjcmVhdGVkIGZyb20gdGhlIHJlc3BvbnNlIGlzIG5vdCB0aGUgc2FtZSBhcyB0aGUgb25lIHBhc3NlZCBpbiB0aGUgYWNxdWlyZVRva2VuIHJlcXVlc3RcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoIVN0cmluZ1V0aWxzLmlzRW1wdHkodGhpcy5jYWNoZVN0b3JhZ2UuZ2V0SXRlbShhY3F1aXJlVG9rZW5BY2NvdW50S2V5X25vYWNjb3VudCkpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXNwb25zZSA9IHRoaXMuc2F2ZUFjY2Vzc1Rva2VuKHJlc3BvbnNlLCBhdXRob3JpdHksIGhhc2hQYXJhbXMsIGNsaWVudEluZm8sIGlkVG9rZW5PYmopO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gUHJvY2VzcyBpZF90b2tlblxuICAgICAgICAgICAgICAgIGlmIChoYXNoUGFyYW1zLmhhc093blByb3BlcnR5KENvbnN0YW50cy5pZFRva2VuKSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxvZ2dlci5pbmZvKFwiRnJhZ21lbnQgaGFzIGlkIHRva2VuXCIpO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIGxvZ2luIG5vIGxvbmdlciBpbiBwcm9ncmVzc1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxvZ2luSW5Qcm9ncmVzcyA9IGZhbHNlO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIHNldCB0aGUgaWRUb2tlblxuICAgICAgICAgICAgICAgICAgICBpZFRva2VuT2JqID0gbmV3IElkVG9rZW4oaGFzaFBhcmFtc1tDb25zdGFudHMuaWRUb2tlbl0pO1xuXG4gICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlID0gUmVzcG9uc2VVdGlscy5zZXRSZXNwb25zZUlkVG9rZW4ocmVzcG9uc2UsIGlkVG9rZW5PYmopO1xuICAgICAgICAgICAgICAgICAgICBpZiAoaGFzaFBhcmFtcy5oYXNPd25Qcm9wZXJ0eShDb25zdGFudHMuY2xpZW50SW5mbykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsaWVudEluZm8gPSBoYXNoUGFyYW1zW0NvbnN0YW50cy5jbGllbnRJbmZvXTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubG9nZ2VyLndhcm5pbmcoXCJDbGllbnRJbmZvIG5vdCByZWNlaXZlZCBpbiB0aGUgcmVzcG9uc2UgZnJvbSBBQURcIik7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAvLyBzZXQgYXV0aG9yaXR5XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGF1dGhvcml0eTogc3RyaW5nID0gdGhpcy5wb3B1bGF0ZUF1dGhvcml0eShzdGF0ZUluZm8uc3RhdGUsIHRoaXMuaW5Db29raWUsIHRoaXMuY2FjaGVTdG9yYWdlLCBpZFRva2VuT2JqKTtcblxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFjY291bnQgPSBBY2NvdW50LmNyZWF0ZUFjY291bnQoaWRUb2tlbk9iaiwgbmV3IENsaWVudEluZm8oY2xpZW50SW5mbykpO1xuICAgICAgICAgICAgICAgICAgICByZXNwb25zZS5hY2NvdW50ID0gdGhpcy5hY2NvdW50O1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChpZFRva2VuT2JqICYmIGlkVG9rZW5PYmoubm9uY2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNoZWNrIG5vbmNlIGludGVncml0eSBpZiBpZFRva2VuIGhhcyBub25jZSAtIHRocm93IGFuIGVycm9yIGlmIG5vdCBtYXRjaGVkXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaWRUb2tlbk9iai5ub25jZSAhPT0gdGhpcy5jYWNoZVN0b3JhZ2UuZ2V0SXRlbShDb25zdGFudHMubm9uY2VJZFRva2VuLCB0aGlzLmluQ29va2llKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYWNjb3VudCA9IG51bGw7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jYWNoZVN0b3JhZ2Uuc2V0SXRlbShDb25zdGFudHMubG9naW5FcnJvciwgXCJOb25jZSBNaXNtYXRjaC4gRXhwZWN0ZWQgTm9uY2U6IFwiICsgdGhpcy5jYWNoZVN0b3JhZ2UuZ2V0SXRlbShDb25zdGFudHMubm9uY2VJZFRva2VuLCB0aGlzLmluQ29va2llKSArIFwiLFwiICsgXCJBY3R1YWwgTm9uY2U6IFwiICsgaWRUb2tlbk9iai5ub25jZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2dnZXIuZXJyb3IoXCJOb25jZSBNaXNtYXRjaC5FeHBlY3RlZCBOb25jZTogXCIgKyB0aGlzLmNhY2hlU3RvcmFnZS5nZXRJdGVtKENvbnN0YW50cy5ub25jZUlkVG9rZW4sIHRoaXMuaW5Db29raWUpICsgXCIsXCIgKyBcIkFjdHVhbCBOb25jZTogXCIgKyBpZFRva2VuT2JqLm5vbmNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvciA9IENsaWVudEF1dGhFcnJvci5jcmVhdGVOb25jZU1pc21hdGNoRXJyb3IodGhpcy5jYWNoZVN0b3JhZ2UuZ2V0SXRlbShDb25zdGFudHMubm9uY2VJZFRva2VuLCB0aGlzLmluQ29va2llKSwgaWRUb2tlbk9iai5ub25jZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBTYXZlIHRoZSB0b2tlblxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jYWNoZVN0b3JhZ2Uuc2V0SXRlbShDb25zdGFudHMuaWRUb2tlbktleSwgaGFzaFBhcmFtc1tDb25zdGFudHMuaWRUb2tlbl0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2FjaGVTdG9yYWdlLnNldEl0ZW0oQ29uc3RhbnRzLm1zYWxDbGllbnRJbmZvLCBjbGllbnRJbmZvKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFNhdmUgaWRUb2tlbiBhcyBhY2Nlc3MgdG9rZW4gZm9yIGFwcCBpdHNlbGZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNhdmVBY2Nlc3NUb2tlbihyZXNwb25zZSwgYXV0aG9yaXR5LCBoYXNoUGFyYW1zLCBjbGllbnRJbmZvLCBpZFRva2VuT2JqKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGF1dGhvcml0eUtleSA9IHN0YXRlSW5mby5zdGF0ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjcXVpcmVUb2tlbkFjY291bnRLZXkgPSBzdGF0ZUluZm8uc3RhdGU7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubG9nZ2VyLmVycm9yKFwiSW52YWxpZCBpZF90b2tlbiByZWNlaXZlZCBpbiB0aGUgcmVzcG9uc2VcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICBlcnJvciA9IENsaWVudEF1dGhFcnJvci5jcmVhdGVJbnZhbGlkSWRUb2tlbkVycm9yKGlkVG9rZW5PYmopO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jYWNoZVN0b3JhZ2Uuc2V0SXRlbShDb25zdGFudHMubXNhbEVycm9yLCBlcnJvci5lcnJvckNvZGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jYWNoZVN0b3JhZ2Uuc2V0SXRlbShDb25zdGFudHMubXNhbEVycm9yRGVzY3JpcHRpb24sIGVycm9yLmVycm9yTWVzc2FnZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBTdGF0ZSBtaXNtYXRjaCAtIHVuZXhwZWN0ZWQvaW52YWxpZCBzdGF0ZVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgYXV0aG9yaXR5S2V5ID0gc3RhdGVJbmZvLnN0YXRlO1xuICAgICAgICAgICAgICAgIGFjcXVpcmVUb2tlbkFjY291bnRLZXkgPSBzdGF0ZUluZm8uc3RhdGU7XG5cbiAgICAgICAgICAgICAgICBjb25zdCBleHBlY3RlZFN0YXRlID0gdGhpcy5jYWNoZVN0b3JhZ2UuZ2V0SXRlbShDb25zdGFudHMuc3RhdGVMb2dpbiwgdGhpcy5pbkNvb2tpZSk7XG4gICAgICAgICAgICAgICAgdGhpcy5sb2dnZXIuZXJyb3IoXCJTdGF0ZSBNaXNtYXRjaC5FeHBlY3RlZCBTdGF0ZTogXCIgKyBleHBlY3RlZFN0YXRlICsgXCIsXCIgKyBcIkFjdHVhbCBTdGF0ZTogXCIgKyBzdGF0ZUluZm8uc3RhdGUpO1xuICAgICAgICAgICAgICAgIGVycm9yID0gQ2xpZW50QXV0aEVycm9yLmNyZWF0ZUludmFsaWRTdGF0ZUVycm9yKHN0YXRlSW5mby5zdGF0ZSwgZXhwZWN0ZWRTdGF0ZSk7XG4gICAgICAgICAgICAgICAgdGhpcy5jYWNoZVN0b3JhZ2Uuc2V0SXRlbShDb25zdGFudHMubXNhbEVycm9yLCBlcnJvci5lcnJvckNvZGUpO1xuICAgICAgICAgICAgICAgIHRoaXMuY2FjaGVTdG9yYWdlLnNldEl0ZW0oQ29uc3RhbnRzLm1zYWxFcnJvckRlc2NyaXB0aW9uLCBlcnJvci5lcnJvck1lc3NhZ2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5jYWNoZVN0b3JhZ2Uuc2V0SXRlbShDb25zdGFudHMucmVuZXdTdGF0dXMgKyBzdGF0ZUluZm8uc3RhdGUsIENvbnN0YW50cy50b2tlblJlbmV3U3RhdHVzQ29tcGxldGVkKTtcbiAgICAgICAgdGhpcy5jYWNoZVN0b3JhZ2UucmVtb3ZlQWNxdWlyZVRva2VuRW50cmllcyhzdGF0ZUluZm8uc3RhdGUpO1xuICAgICAgICAvLyB0aGlzIGlzIHJlcXVpcmVkIGlmIG5hdmlnYXRlVG9Mb2dpblJlcXVlc3RVcmw9ZmFsc2VcbiAgICAgICAgaWYgKHRoaXMuaW5Db29raWUpIHtcbiAgICAgICAgICAgIHRoaXMuY2FjaGVTdG9yYWdlLnNldEl0ZW1Db29raWUoYXV0aG9yaXR5S2V5LCBcIlwiLCAtMSk7XG4gICAgICAgICAgICB0aGlzLmNhY2hlU3RvcmFnZS5jbGVhckNvb2tpZSgpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChlcnJvcikge1xuICAgICAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIXJlc3BvbnNlKSB7XG4gICAgICAgICAgICB0aHJvdyBBdXRoRXJyb3IuY3JlYXRlVW5leHBlY3RlZEVycm9yKFwiUmVzcG9uc2UgaXMgbnVsbFwiKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzcG9uc2U7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2V0IEF1dGhvcml0eSB3aGVuIHNhdmluZyBUb2tlbiBmcm9tIHRoZSBoYXNoXG4gICAgICogQHBhcmFtIHN0YXRlXG4gICAgICogQHBhcmFtIGluQ29va2llXG4gICAgICogQHBhcmFtIGNhY2hlU3RvcmFnZVxuICAgICAqIEBwYXJhbSBpZFRva2VuT2JqXG4gICAgICogQHBhcmFtIHJlc3BvbnNlXG4gICAgICovXG4gICAgcHJpdmF0ZSBwb3B1bGF0ZUF1dGhvcml0eShzdGF0ZTogc3RyaW5nLCBpbkNvb2tpZTogYm9vbGVhbiwgY2FjaGVTdG9yYWdlOiBTdG9yYWdlLCBpZFRva2VuT2JqOiBJZFRva2VuKTogc3RyaW5nIHtcbiAgICAgICAgY29uc3QgYXV0aG9yaXR5S2V5OiBzdHJpbmcgPSBTdG9yYWdlLmdlbmVyYXRlQXV0aG9yaXR5S2V5KHN0YXRlKTtcbiAgICAgICAgY29uc3QgY2FjaGVkQXV0aG9yaXR5OiBzdHJpbmcgPSBjYWNoZVN0b3JhZ2UuZ2V0SXRlbShhdXRob3JpdHlLZXksIGluQ29va2llKTtcblxuICAgICAgICAvLyByZXRyaWV2ZSB0aGUgYXV0aG9yaXR5IGZyb20gY2FjaGUgYW5kIHJlcGxhY2Ugd2l0aCB0ZW5hbnRJRFxuICAgICAgICByZXR1cm4gU3RyaW5nVXRpbHMuaXNFbXB0eShjYWNoZWRBdXRob3JpdHkpID8gY2FjaGVkQXV0aG9yaXR5IDogVXJsVXRpbHMucmVwbGFjZVRlbmFudFBhdGgoY2FjaGVkQXV0aG9yaXR5LCBpZFRva2VuT2JqLnRlbmFudElkKTtcbiAgICB9XG5cbiAgICAvKiB0c2xpbnQ6ZW5hYmxlOm5vLXN0cmluZy1saXRlcmFsICovXG5cbiAgICAvLyAjZW5kcmVnaW9uXG5cbiAgICAvLyAjcmVnaW9uIEFjY291bnRcblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIHNpZ25lZCBpbiBhY2NvdW50XG4gICAgICogKHRoZSBhY2NvdW50IG9iamVjdCBpcyBjcmVhdGVkIGF0IHRoZSB0aW1lIG9mIHN1Y2Nlc3NmdWwgbG9naW4pXG4gICAgICogb3IgbnVsbCB3aGVuIG5vIHN0YXRlIGlzIGZvdW5kXG4gICAgICogQHJldHVybnMge0BsaW5rIEFjY291bnR9IC0gdGhlIGFjY291bnQgb2JqZWN0IHN0b3JlZCBpbiBNU0FMXG4gICAgICovXG4gICAgZ2V0QWNjb3VudCgpOiBBY2NvdW50IHtcbiAgICAgICAgLy8gaWYgYSBzZXNzaW9uIGFscmVhZHkgZXhpc3RzLCBnZXQgdGhlIGFjY291bnQgZnJvbSB0aGUgc2Vzc2lvblxuICAgICAgICBpZiAodGhpcy5hY2NvdW50KSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5hY2NvdW50O1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gZnJhbWUgaXMgdXNlZCB0byBnZXQgaWRUb2tlbiBhbmQgcG9wdWxhdGUgdGhlIGFjY291bnQgZm9yIHRoZSBnaXZlbiBzZXNzaW9uXG4gICAgICAgIGNvbnN0IHJhd0lkVG9rZW4gPSB0aGlzLmNhY2hlU3RvcmFnZS5nZXRJdGVtKENvbnN0YW50cy5pZFRva2VuS2V5KTtcbiAgICAgICAgY29uc3QgcmF3Q2xpZW50SW5mbyA9IHRoaXMuY2FjaGVTdG9yYWdlLmdldEl0ZW0oQ29uc3RhbnRzLm1zYWxDbGllbnRJbmZvKTtcblxuICAgICAgICBpZiAoIVN0cmluZ1V0aWxzLmlzRW1wdHkocmF3SWRUb2tlbikgJiYgIVN0cmluZ1V0aWxzLmlzRW1wdHkocmF3Q2xpZW50SW5mbykpIHtcbiAgICAgICAgICAgIGNvbnN0IGlkVG9rZW4gPSBuZXcgSWRUb2tlbihyYXdJZFRva2VuKTtcbiAgICAgICAgICAgIGNvbnN0IGNsaWVudEluZm8gPSBuZXcgQ2xpZW50SW5mbyhyYXdDbGllbnRJbmZvKTtcbiAgICAgICAgICAgIHRoaXMuYWNjb3VudCA9IEFjY291bnQuY3JlYXRlQWNjb3VudChpZFRva2VuLCBjbGllbnRJbmZvKTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmFjY291bnQ7XG4gICAgICAgIH1cbiAgICAgICAgLy8gaWYgbG9naW4gbm90IHlldCBkb25lLCByZXR1cm4gbnVsbFxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICpcbiAgICAgKiBFeHRyYWN0cyBzdGF0ZSB2YWx1ZSBmcm9tIHRoZSBhY2NvdW50U3RhdGUgc2VudCB3aXRoIHRoZSBhdXRoZW50aWNhdGlvbiByZXF1ZXN0LlxuICAgICAqIEByZXR1cm5zIHtzdHJpbmd9IHNjb3BlLlxuICAgICAqIEBpZ25vcmVcbiAgICAgKi9cbiAgICBnZXRBY2NvdW50U3RhdGUgKHN0YXRlOiBzdHJpbmcpIHtcbiAgICAgICAgaWYgKHN0YXRlKSB7XG4gICAgICAgICAgICBjb25zdCBzcGxpdEluZGV4ID0gc3RhdGUuaW5kZXhPZihcInxcIik7XG4gICAgICAgICAgICBpZiAoc3BsaXRJbmRleCA+IC0xICYmIHNwbGl0SW5kZXggKyAxIDwgc3RhdGUubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHN0YXRlLnN1YnN0cmluZyhzcGxpdEluZGV4ICsgMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHN0YXRlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFVzZSB0byBnZXQgYSBsaXN0IG9mIHVuaXF1ZSBhY2NvdW50cyBpbiBNU0FMIGNhY2hlIGJhc2VkIG9uIGhvbWVBY2NvdW50SWRlbnRpZmllci5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7QGxpbmsgQXJyYXk8QWNjb3VudD59IEFjY291bnQgLSBhbGwgdW5pcXVlIGFjY291bnRzIGluIE1TQUwgY2FjaGUuXG4gICAgICovXG4gICAgZ2V0QWxsQWNjb3VudHMoKTogQXJyYXk8QWNjb3VudD4ge1xuICAgICAgICBjb25zdCBhY2NvdW50czogQXJyYXk8QWNjb3VudD4gPSBbXTtcbiAgICAgICAgY29uc3QgYWNjZXNzVG9rZW5DYWNoZUl0ZW1zID0gdGhpcy5jYWNoZVN0b3JhZ2UuZ2V0QWxsQWNjZXNzVG9rZW5zKENvbnN0YW50cy5jbGllbnRJZCwgQ29uc3RhbnRzLmhvbWVBY2NvdW50SWRlbnRpZmllcik7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhY2Nlc3NUb2tlbkNhY2hlSXRlbXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGlkVG9rZW4gPSBuZXcgSWRUb2tlbihhY2Nlc3NUb2tlbkNhY2hlSXRlbXNbaV0udmFsdWUuaWRUb2tlbik7XG4gICAgICAgICAgICBjb25zdCBjbGllbnRJbmZvID0gbmV3IENsaWVudEluZm8oYWNjZXNzVG9rZW5DYWNoZUl0ZW1zW2ldLnZhbHVlLmhvbWVBY2NvdW50SWRlbnRpZmllcik7XG4gICAgICAgICAgICBjb25zdCBhY2NvdW50OiBBY2NvdW50ID0gQWNjb3VudC5jcmVhdGVBY2NvdW50KGlkVG9rZW4sIGNsaWVudEluZm8pO1xuICAgICAgICAgICAgYWNjb3VudHMucHVzaChhY2NvdW50KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzLmdldFVuaXF1ZUFjY291bnRzKGFjY291bnRzKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICpcbiAgICAgKiBVc2VkIHRvIGZpbHRlciBhY2NvdW50cyBiYXNlZCBvbiBob21lQWNjb3VudElkZW50aWZpZXJcbiAgICAgKiBAcGFyYW0ge0FycmF5PEFjY291bnQ+fSAgQWNjb3VudHMgLSBhY2NvdW50cyBzYXZlZCBpbiB0aGUgY2FjaGVcbiAgICAgKiBAaWdub3JlXG4gICAgICovXG4gICAgcHJpdmF0ZSBnZXRVbmlxdWVBY2NvdW50cyhhY2NvdW50czogQXJyYXk8QWNjb3VudD4pOiBBcnJheTxBY2NvdW50PiB7XG4gICAgICAgIGlmICghYWNjb3VudHMgfHwgYWNjb3VudHMubGVuZ3RoIDw9IDEpIHtcbiAgICAgICAgICAgIHJldHVybiBhY2NvdW50cztcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGZsYWdzOiBBcnJheTxzdHJpbmc+ID0gW107XG4gICAgICAgIGNvbnN0IHVuaXF1ZUFjY291bnRzOiBBcnJheTxBY2NvdW50PiA9IFtdO1xuICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgYWNjb3VudHMubGVuZ3RoOyArK2luZGV4KSB7XG4gICAgICAgICAgICBpZiAoYWNjb3VudHNbaW5kZXhdLmhvbWVBY2NvdW50SWRlbnRpZmllciAmJiBmbGFncy5pbmRleE9mKGFjY291bnRzW2luZGV4XS5ob21lQWNjb3VudElkZW50aWZpZXIpID09PSAtMSkge1xuICAgICAgICAgICAgICAgIGZsYWdzLnB1c2goYWNjb3VudHNbaW5kZXhdLmhvbWVBY2NvdW50SWRlbnRpZmllcik7XG4gICAgICAgICAgICAgICAgdW5pcXVlQWNjb3VudHMucHVzaChhY2NvdW50c1tpbmRleF0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHVuaXF1ZUFjY291bnRzO1xuICAgIH1cblxuICAgIC8vICNlbmRyZWdpb25cblxuICAgIC8vICNyZWdpb24gU2NvcGVzIChFeHRyYWN0IHRvIFNjb3Blcy50cylcblxuICAgIC8qXG4gICAgICogTm90ZTogXCJ0aGlzXCIgZGVwZW5kZW5jeSBpbiB0aGlzIHNlY3Rpb24gaXMgbWluaW1hbC5cbiAgICAgKiBJZiBwQ2FjaGVTdG9yYWdlIGlzIHNlcGFyYXRlZCBmcm9tIHRoZSBjbGFzcyBvYmplY3QsIG9yIHBhc3NlZCBhcyBhIGZuIHBhcmFtLCBzY29wZXNVdGlscy50cyBjYW4gYmUgY3JlYXRlZFxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqXG4gICAgICogVXNlZCB0byB2YWxpZGF0ZSB0aGUgc2NvcGVzIGlucHV0IHBhcmFtZXRlciByZXF1ZXN0ZWQgIGJ5IHRoZSBkZXZlbG9wZXIuXG4gICAgICogQHBhcmFtIHtBcnJheTxzdHJpbmc+fSBzY29wZXMgLSBEZXZlbG9wZXIgcmVxdWVzdGVkIHBlcm1pc3Npb25zLiBOb3QgYWxsIHNjb3BlcyBhcmUgZ3VhcmFudGVlZCB0byBiZSBpbmNsdWRlZCBpbiB0aGUgYWNjZXNzIHRva2VuIHJldHVybmVkLlxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gc2NvcGVzUmVxdWlyZWQgLSBCb29sZWFuIGluZGljYXRpbmcgd2hldGhlciB0aGUgc2NvcGVzIGFycmF5IGlzIHJlcXVpcmVkIG9yIG5vdFxuICAgICAqIEBpZ25vcmVcbiAgICAgKi9cbiAgICBwcml2YXRlIHZhbGlkYXRlSW5wdXRTY29wZShzY29wZXM6IEFycmF5PHN0cmluZz4sIHNjb3Blc1JlcXVpcmVkOiBib29sZWFuKTogdm9pZCB7XG4gICAgICAgIGlmICghc2NvcGVzKSB7XG4gICAgICAgICAgICBpZiAoc2NvcGVzUmVxdWlyZWQpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBDbGllbnRDb25maWd1cmF0aW9uRXJyb3IuY3JlYXRlU2NvcGVzUmVxdWlyZWRFcnJvcihzY29wZXMpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBDaGVjayB0aGF0IHNjb3BlcyBpcyBhbiBhcnJheSBvYmplY3QgKGFsc28gdGhyb3dzIGVycm9yIGlmIHNjb3BlcyA9PSBudWxsKVxuICAgICAgICBpZiAoIUFycmF5LmlzQXJyYXkoc2NvcGVzKSkge1xuICAgICAgICAgICAgdGhyb3cgQ2xpZW50Q29uZmlndXJhdGlvbkVycm9yLmNyZWF0ZVNjb3Blc05vbkFycmF5RXJyb3Ioc2NvcGVzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIENoZWNrIHRoYXQgc2NvcGVzIGlzIG5vdCBhbiBlbXB0eSBhcnJheVxuICAgICAgICBpZiAoc2NvcGVzLmxlbmd0aCA8IDEpIHtcbiAgICAgICAgICAgIHRocm93IENsaWVudENvbmZpZ3VyYXRpb25FcnJvci5jcmVhdGVFbXB0eVNjb3Blc0FycmF5RXJyb3Ioc2NvcGVzLnRvU3RyaW5nKCkpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQ2hlY2sgdGhhdCBjbGllbnRJZCBpcyBwYXNzZWQgYXMgc2luZ2xlIHNjb3BlXG4gICAgICAgIGlmIChzY29wZXMuaW5kZXhPZih0aGlzLmNsaWVudElkKSA+IC0xKSB7XG4gICAgICAgICAgICBpZiAoc2NvcGVzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBDbGllbnRDb25maWd1cmF0aW9uRXJyb3IuY3JlYXRlQ2xpZW50SWRTaW5nbGVTY29wZUVycm9yKHNjb3Blcy50b1N0cmluZygpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKlxuICAgICAqIEV4dHJhY3RzIHNjb3BlIHZhbHVlIGZyb20gdGhlIHN0YXRlIHNlbnQgd2l0aCB0aGUgYXV0aGVudGljYXRpb24gcmVxdWVzdC5cbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gc3RhdGVcbiAgICAgKiBAcmV0dXJucyB7c3RyaW5nfSBzY29wZS5cbiAgICAgKiBAaWdub3JlXG4gICAgICovXG4gICAgcHJpdmF0ZSBnZXRTY29wZUZyb21TdGF0ZShzdGF0ZTogc3RyaW5nKTogc3RyaW5nIHtcbiAgICAgICAgaWYgKHN0YXRlKSB7XG4gICAgICAgICAgICBjb25zdCBzcGxpdEluZGV4ID0gc3RhdGUuaW5kZXhPZihcInxcIik7XG4gICAgICAgICAgICBpZiAoc3BsaXRJbmRleCA+IC0xICYmIHNwbGl0SW5kZXggKyAxIDwgc3RhdGUubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHN0YXRlLnN1YnN0cmluZyhzcGxpdEluZGV4ICsgMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIFwiXCI7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGlnbm9yZVxuICAgICAqIEFwcGVuZHMgZXh0cmFTY29wZXNUb0NvbnNlbnQgaWYgcGFzc2VkXG4gICAgICogQHBhcmFtIHtAbGluayBBdXRoZW50aWNhdGlvblBhcmFtZXRlcnN9XG4gICAgICovXG4gICAgcHJpdmF0ZSBhcHBlbmRTY29wZXMocmVxdWVzdDogQXV0aGVudGljYXRpb25QYXJhbWV0ZXJzKTogQXJyYXk8c3RyaW5nPiB7XG5cbiAgICAgICAgbGV0IHNjb3BlczogQXJyYXk8c3RyaW5nPjtcblxuICAgICAgICBpZiAocmVxdWVzdCAmJiByZXF1ZXN0LnNjb3Blcykge1xuICAgICAgICAgICAgaWYgKHJlcXVlc3QuZXh0cmFTY29wZXNUb0NvbnNlbnQpIHtcbiAgICAgICAgICAgICAgICBzY29wZXMgPSBbLi4ucmVxdWVzdC5zY29wZXMsIC4uLnJlcXVlc3QuZXh0cmFTY29wZXNUb0NvbnNlbnRdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgc2NvcGVzID0gcmVxdWVzdC5zY29wZXM7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gc2NvcGVzO1xuICAgIH1cblxuICAgIC8vICNlbmRyZWdpb25cblxuICAgIC8vICNyZWdpb24gQW5ndWxhclxuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqXG4gICAgICogQnJvYWRjYXN0IG1lc3NhZ2VzIC0gVXNlZCBvbmx5IGZvciBBbmd1bGFyPyAgKlxuICAgICAqIEBwYXJhbSBldmVudE5hbWVcbiAgICAgKiBAcGFyYW0gZGF0YVxuICAgICAqL1xuICAgIHByaXZhdGUgYnJvYWRjYXN0KGV2ZW50TmFtZTogc3RyaW5nLCBkYXRhOiBzdHJpbmcpIHtcbiAgICAgICAgY29uc3QgZXZ0ID0gbmV3IEN1c3RvbUV2ZW50KGV2ZW50TmFtZSwgeyBkZXRhaWw6IGRhdGEgfSk7XG4gICAgICAgIHdpbmRvdy5kaXNwYXRjaEV2ZW50KGV2dCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqXG4gICAgICogSGVscGVyIGZ1bmN0aW9uIHRvIHJldHJpZXZlIHRoZSBjYWNoZWQgdG9rZW5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBzY29wZXNcbiAgICAgKiBAcGFyYW0ge0BsaW5rIEFjY291bnR9IGFjY291bnRcbiAgICAgKiBAcGFyYW0gc3RhdGVcbiAgICAgKiBAcmV0dXJuIHtAbGluayBBdXRoUmVzcG9uc2V9IEF1dGhSZXNwb25zZVxuICAgICAqL1xuICAgIHByb3RlY3RlZCBnZXRDYWNoZWRUb2tlbkludGVybmFsKHNjb3BlcyA6IEFycmF5PHN0cmluZz4gLCBhY2NvdW50OiBBY2NvdW50LCBzdGF0ZTogc3RyaW5nKTogQXV0aFJlc3BvbnNlIHtcbiAgICAgICAgLy8gR2V0IHRoZSBjdXJyZW50IHNlc3Npb24ncyBhY2NvdW50IG9iamVjdFxuICAgICAgICBjb25zdCBhY2NvdW50T2JqZWN0OiBBY2NvdW50ID0gYWNjb3VudCB8fCB0aGlzLmdldEFjY291bnQoKTtcbiAgICAgICAgaWYgKCFhY2NvdW50T2JqZWN0KSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIENvbnN0cnVjdCBBdXRoZW50aWNhdGlvblJlcXVlc3QgYmFzZWQgb24gcmVzcG9uc2UgdHlwZVxuICAgICAgICBjb25zdCBuZXdBdXRob3JpdHkgPSB0aGlzLmF1dGhvcml0eUluc3RhbmNlID8gdGhpcy5hdXRob3JpdHlJbnN0YW5jZSA6IEF1dGhvcml0eUZhY3RvcnkuQ3JlYXRlSW5zdGFuY2UodGhpcy5hdXRob3JpdHksIHRoaXMuY29uZmlnLmF1dGgudmFsaWRhdGVBdXRob3JpdHkpO1xuICAgICAgICBjb25zdCByZXNwb25zZVR5cGUgPSB0aGlzLmdldFRva2VuVHlwZShhY2NvdW50T2JqZWN0LCBzY29wZXMsIHRydWUpO1xuICAgICAgICBjb25zdCBzZXJ2ZXJBdXRoZW50aWNhdGlvblJlcXVlc3QgPSBuZXcgU2VydmVyUmVxdWVzdFBhcmFtZXRlcnMoXG4gICAgICAgICAgICBuZXdBdXRob3JpdHksXG4gICAgICAgICAgICB0aGlzLmNsaWVudElkLFxuICAgICAgICAgICAgc2NvcGVzLFxuICAgICAgICAgICAgcmVzcG9uc2VUeXBlLFxuICAgICAgICAgICAgdGhpcy5nZXRSZWRpcmVjdFVyaSgpLFxuICAgICAgICAgICAgc3RhdGVcbiAgICAgICAgKTtcblxuICAgICAgICAvLyBnZXQgY2FjaGVkIHRva2VuXG4gICAgICAgIHJldHVybiB0aGlzLmdldENhY2hlZFRva2VuKHNlcnZlckF1dGhlbnRpY2F0aW9uUmVxdWVzdCwgYWNjb3VudCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqXG4gICAgICogR2V0IHNjb3BlcyBmb3IgdGhlIEVuZHBvaW50IC0gVXNlZCBpbiBBbmd1bGFyIHRvIHRyYWNrIHByb3RlY3RlZCBhbmQgdW5wcm90ZWN0ZWQgcmVzb3VyY2VzIHdpdGhvdXQgaW50ZXJhY3Rpb24gZnJvbSB0aGUgZGV2ZWxvcGVyIGFwcFxuICAgICAqXG4gICAgICogQHBhcmFtIGVuZHBvaW50XG4gICAgICovXG4gICAgcHJvdGVjdGVkIGdldFNjb3Blc0ZvckVuZHBvaW50KGVuZHBvaW50OiBzdHJpbmcpIDogQXJyYXk8c3RyaW5nPiB7XG4gICAgICAgIC8vIGlmIHVzZXIgc3BlY2lmaWVkIGxpc3Qgb2YgdW5wcm90ZWN0ZWRSZXNvdXJjZXMsIG5vIG5lZWQgdG8gc2VuZCB0b2tlbiB0byB0aGVzZSBlbmRwb2ludHMsIHJldHVybiBudWxsLlxuICAgICAgICBpZiAodGhpcy5jb25maWcuZnJhbWV3b3JrLnVucHJvdGVjdGVkUmVzb3VyY2VzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5jb25maWcuZnJhbWV3b3JrLnVucHJvdGVjdGVkUmVzb3VyY2VzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaWYgKGVuZHBvaW50LmluZGV4T2YodGhpcy5jb25maWcuZnJhbWV3b3JrLnVucHJvdGVjdGVkUmVzb3VyY2VzW2ldKSA+IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHByb2Nlc3MgYWxsIHByb3RlY3RlZCByZXNvdXJjZXMgYW5kIHNlbmQgdGhlIG1hdGNoZWQgb25lXG4gICAgICAgIGlmICh0aGlzLmNvbmZpZy5mcmFtZXdvcmsucHJvdGVjdGVkUmVzb3VyY2VNYXAuc2l6ZSA+IDApIHtcbiAgICAgICAgICAgIGZvciAoY29uc3Qga2V5IG9mIEFycmF5LmZyb20odGhpcy5jb25maWcuZnJhbWV3b3JrLnByb3RlY3RlZFJlc291cmNlTWFwLmtleXMoKSkpIHtcbiAgICAgICAgICAgICAgICAvLyBjb25maWdFbmRwb2ludCBpcyBsaWtlIC9hcGkvVG9kbyByZXF1ZXN0ZWQgZW5kcG9pbnQgY2FuIGJlIC9hcGkvVG9kby8xXG4gICAgICAgICAgICAgICAgaWYgKGVuZHBvaW50LmluZGV4T2Yoa2V5KSA+IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmNvbmZpZy5mcmFtZXdvcmsucHJvdGVjdGVkUmVzb3VyY2VNYXAuZ2V0KGtleSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLypcbiAgICAgICAgICogZGVmYXVsdCByZXNvdXJjZSB3aWxsIGJlIGNsaWVudGlkIGlmIG5vdGhpbmcgc3BlY2lmaWVkXG4gICAgICAgICAqIEFwcCB3aWxsIHVzZSBpZHRva2VuIGZvciBjYWxscyB0byBpdHNlbGZcbiAgICAgICAgICogY2hlY2sgaWYgaXQncyBzdGFyaW5nIGZyb20gaHR0cCBvciBodHRwcywgbmVlZHMgdG8gbWF0Y2ggd2l0aCBhcHAgaG9zdFxuICAgICAgICAgKi9cbiAgICAgICAgaWYgKGVuZHBvaW50LmluZGV4T2YoXCJodHRwOi8vXCIpID4gLTEgfHwgZW5kcG9pbnQuaW5kZXhPZihcImh0dHBzOi8vXCIpID4gLTEpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmdldEhvc3RGcm9tVXJpKGVuZHBvaW50KSA9PT0gdGhpcy5nZXRIb3N0RnJvbVVyaSh0aGlzLmdldFJlZGlyZWN0VXJpKCkpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBBcnJheTxzdHJpbmc+KHRoaXMuY2xpZW50SWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLypcbiAgICAgICAgICAgICAqIGluIGFuZ3VsYXIgbGV2ZWwsIHRoZSB1cmwgZm9yICRodHRwIGludGVyY2VwdG9yIGNhbGwgY291bGQgYmUgcmVsYXRpdmUgdXJsLFxuICAgICAgICAgICAgICogaWYgaXQncyByZWxhdGl2ZSBjYWxsLCB3ZSdsbCB0cmVhdCBpdCBhcyBhcHAgYmFja2VuZCBjYWxsLlxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICByZXR1cm4gbmV3IEFycmF5PHN0cmluZz4odGhpcy5jbGllbnRJZCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBpZiBub3QgdGhlIGFwcCdzIG93biBiYWNrZW5kIG9yIG5vdCBhIGRvbWFpbiBsaXN0ZWQgaW4gdGhlIGVuZHBvaW50cyBzdHJ1Y3R1cmVcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJuIGJvb2xlYW4gZmxhZyB0byBkZXZlbG9wZXIgdG8gaGVscCBpbmZvcm0gaWYgbG9naW4gaXMgaW4gcHJvZ3Jlc3NcbiAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn0gdHJ1ZS9mYWxzZVxuICAgICAqL1xuICAgIHB1YmxpYyBnZXRMb2dpbkluUHJvZ3Jlc3MoKTogYm9vbGVhbiB7XG4gICAgICAgIGNvbnN0IHBlbmRpbmdDYWxsYmFjayA9IHRoaXMuY2FjaGVTdG9yYWdlLmdldEl0ZW0oQ29uc3RhbnRzLnVybEhhc2gpO1xuICAgICAgICBpZiAocGVuZGluZ0NhbGxiYWNrKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5sb2dpbkluUHJvZ3Jlc3M7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqIEBpZ25vcmVcbiAgICAgKlxuICAgICAqIEBwYXJhbSBsb2dpbkluUHJvZ3Jlc3NcbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgc2V0bG9naW5JblByb2dyZXNzKGxvZ2luSW5Qcm9ncmVzcyA6IGJvb2xlYW4pIHtcbiAgICAgICAgdGhpcy5sb2dpbkluUHJvZ3Jlc3MgPSBsb2dpbkluUHJvZ3Jlc3M7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqIEBpZ25vcmVcbiAgICAgKlxuICAgICAqIHJldHVybnMgdGhlIHN0YXR1cyBvZiBhY3F1aXJlVG9rZW5JblByb2dyZXNzXG4gICAgICovXG4gICAgcHJvdGVjdGVkIGdldEFjcXVpcmVUb2tlbkluUHJvZ3Jlc3MoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLmFjcXVpcmVUb2tlbkluUHJvZ3Jlc3M7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqIEBpZ25vcmVcbiAgICAgKlxuICAgICAqIEBwYXJhbSBhY3F1aXJlVG9rZW5JblByb2dyZXNzXG4gICAgICovXG4gICAgcHJvdGVjdGVkIHNldEFjcXVpcmVUb2tlbkluUHJvZ3Jlc3MoYWNxdWlyZVRva2VuSW5Qcm9ncmVzcyA6IGJvb2xlYW4pIHtcbiAgICAgICAgdGhpcy5hY3F1aXJlVG9rZW5JblByb2dyZXNzID0gYWNxdWlyZVRva2VuSW5Qcm9ncmVzcztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICogQGlnbm9yZVxuICAgICAqXG4gICAgICogcmV0dXJucyB0aGUgbG9nZ2VyIGhhbmRsZVxuICAgICAqL1xuICAgIHByb3RlY3RlZCBnZXRMb2dnZXIoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbmZpZy5zeXN0ZW0ubG9nZ2VyO1xuICAgIH1cblxuICAgIC8vICNlbmRyZWdpb25cblxuICAgIC8vICNyZWdpb24gR2V0dGVycyBhbmQgU2V0dGVyc1xuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBVc2UgdG8gZ2V0IHRoZSByZWRpcmVjdCB1cmkgY29uZmlndXJlZCBpbiBNU0FMIG9yIG51bGwuXG4gICAgICogRXZhbHVhdGVzIHJlZGlyZWN0VXJpIGlmIGl0cyBhIGZ1bmN0aW9uLCBvdGhlcndpc2Ugc2ltcGx5IHJldHVybnMgaXRzIHZhbHVlLlxuICAgICAqIEByZXR1cm5zIHtzdHJpbmd9IHJlZGlyZWN0IFVSTFxuICAgICAqXG4gICAgICovXG4gICAgcHVibGljIGdldFJlZGlyZWN0VXJpKCk6IHN0cmluZyB7XG4gICAgICAgIGlmICh0eXBlb2YgdGhpcy5jb25maWcuYXV0aC5yZWRpcmVjdFVyaSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jb25maWcuYXV0aC5yZWRpcmVjdFVyaSgpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLmNvbmZpZy5hdXRoLnJlZGlyZWN0VXJpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFVzZSB0byBnZXQgdGhlIHBvc3QgbG9nb3V0IHJlZGlyZWN0IHVyaSBjb25maWd1cmVkIGluIE1TQUwgb3IgbnVsbC5cbiAgICAgKiBFdmFsdWF0ZXMgcG9zdExvZ291dHJlZGlyZWN0VXJpIGlmIGl0cyBhIGZ1bmN0aW9uLCBvdGhlcndpc2Ugc2ltcGx5IHJldHVybnMgaXRzIHZhbHVlLlxuICAgICAqXG4gICAgICogQHJldHVybnMge3N0cmluZ30gcG9zdCBsb2dvdXQgcmVkaXJlY3QgVVJMXG4gICAgICovXG4gICAgcHVibGljIGdldFBvc3RMb2dvdXRSZWRpcmVjdFVyaSgpOiBzdHJpbmcge1xuICAgICAgICBpZiAodHlwZW9mIHRoaXMuY29uZmlnLmF1dGgucG9zdExvZ291dFJlZGlyZWN0VXJpID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNvbmZpZy5hdXRoLnBvc3RMb2dvdXRSZWRpcmVjdFVyaSgpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLmNvbmZpZy5hdXRoLnBvc3RMb2dvdXRSZWRpcmVjdFVyaTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBVc2UgdG8gZ2V0IHRoZSBjdXJyZW50IHtAbGluayBDb25maWd1cmF0aW9ufSBvYmplY3QgaW4gTVNBTFxuICAgICAqXG4gICAgICogQHJldHVybnMge0BsaW5rIENvbmZpZ3VyYXRpb259XG4gICAgICovXG4gICAgcHVibGljIGdldEN1cnJlbnRDb25maWd1cmF0aW9uKCk6IENvbmZpZ3VyYXRpb24ge1xuICAgICAgICBpZiAoIXRoaXMuY29uZmlnKSB7XG4gICAgICAgICAgICB0aHJvdyBDbGllbnRDb25maWd1cmF0aW9uRXJyb3IuY3JlYXRlTm9TZXRDb25maWd1cmF0aW9uRXJyb3IoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5jb25maWc7XG4gICAgfVxuXG4gICAgLy8gI2VuZHJlZ2lvblxuXG4gICAgLy8gI3JlZ2lvbiBTdHJpbmcgVXRpbCAoU2hvdWxkIGJlIGV4dHJhY3RlZCB0byBVdGlscy50cylcblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKiBAaWdub3JlXG4gICAgICpcbiAgICAgKiBleHRyYWN0IFVSSSBmcm9tIHRoZSBob3N0XG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gVVJJXG4gICAgICogQHJldHVybnMge3N0cmluZ30gaG9zdCBmcm9tIHRoZSBVUklcbiAgICAgKi9cbiAgICBwcml2YXRlIGdldEhvc3RGcm9tVXJpKHVyaTogc3RyaW5nKTogc3RyaW5nIHtcbiAgICAgICAgLy8gcmVtb3ZlIGh0dHA6Ly8gb3IgaHR0cHM6Ly8gZnJvbSB1cmlcbiAgICAgICAgbGV0IGV4dHJhY3RlZFVyaSA9IFN0cmluZyh1cmkpLnJlcGxhY2UoL14oaHR0cHM/OilcXC9cXC8vLCBcIlwiKTtcbiAgICAgICAgZXh0cmFjdGVkVXJpID0gZXh0cmFjdGVkVXJpLnNwbGl0KFwiL1wiKVswXTtcbiAgICAgICAgcmV0dXJuIGV4dHJhY3RlZFVyaTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICogQGlnbm9yZVxuICAgICAqXG4gICAgICogVXRpbHMgZnVuY3Rpb24gdG8gY3JlYXRlIHRoZSBBdXRoZW50aWNhdGlvblxuICAgICAqIEBwYXJhbSB7QGxpbmsgYWNjb3VudH0gYWNjb3VudCBvYmplY3RcbiAgICAgKiBAcGFyYW0gc2NvcGVzXG4gICAgICogQHBhcmFtIHNpbGVudENhbGxcbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtzdHJpbmd9IHRva2VuIHR5cGU6IGlkX3Rva2VuIG9yIGFjY2Vzc190b2tlblxuICAgICAqXG4gICAgICovXG4gICAgcHJpdmF0ZSBnZXRUb2tlblR5cGUoYWNjb3VudE9iamVjdDogQWNjb3VudCwgc2NvcGVzOiBzdHJpbmdbXSwgc2lsZW50Q2FsbDogYm9vbGVhbik6IHN0cmluZyB7XG5cbiAgICAgICAgLypcbiAgICAgICAgICogaWYgYWNjb3VudCBpcyBwYXNzZWQgYW5kIG1hdGNoZXMgdGhlIGFjY291bnQgb2JqZWN0L29yIHNldCB0byBnZXRBY2NvdW50KCkgZnJvbSBjYWNoZVxuICAgICAgICAgKiBpZiBjbGllbnQtaWQgaXMgcGFzc2VkIGFzIHNjb3BlLCBnZXQgaWRfdG9rZW4gZWxzZSB0b2tlbi9pZF90b2tlbl90b2tlbiAoaW4gY2FzZSBubyBzZXNzaW9uIGV4aXN0cylcbiAgICAgICAgICovXG4gICAgICAgIGxldCB0b2tlblR5cGU6IHN0cmluZztcblxuICAgICAgICAvLyBhY3F1aXJlVG9rZW5TaWxlbnRcbiAgICAgICAgaWYgKHNpbGVudENhbGwpIHtcbiAgICAgICAgICAgIGlmIChBY2NvdW50LmNvbXBhcmVBY2NvdW50cyhhY2NvdW50T2JqZWN0LCB0aGlzLmdldEFjY291bnQoKSkpIHtcbiAgICAgICAgICAgICAgICB0b2tlblR5cGUgPSAoc2NvcGVzLmluZGV4T2YodGhpcy5jb25maWcuYXV0aC5jbGllbnRJZCkgPiAtMSkgPyBSZXNwb25zZVR5cGVzLmlkX3Rva2VuIDogUmVzcG9uc2VUeXBlcy50b2tlbjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRva2VuVHlwZSAgPSAoc2NvcGVzLmluZGV4T2YodGhpcy5jb25maWcuYXV0aC5jbGllbnRJZCkgPiAtMSkgPyBSZXNwb25zZVR5cGVzLmlkX3Rva2VuIDogUmVzcG9uc2VUeXBlcy5pZF90b2tlbl90b2tlbjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIHRva2VuVHlwZTtcbiAgICAgICAgfVxuICAgICAgICAvLyBhbGwgb3RoZXIgY2FzZXNcbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBpZiAoIUFjY291bnQuY29tcGFyZUFjY291bnRzKGFjY291bnRPYmplY3QsIHRoaXMuZ2V0QWNjb3VudCgpKSkge1xuICAgICAgICAgICAgICAgIHRva2VuVHlwZSA9IFJlc3BvbnNlVHlwZXMuaWRfdG9rZW5fdG9rZW47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0b2tlblR5cGUgPSAoc2NvcGVzLmluZGV4T2YodGhpcy5jbGllbnRJZCkgPiAtMSkgPyBSZXNwb25zZVR5cGVzLmlkX3Rva2VuIDogUmVzcG9uc2VUeXBlcy50b2tlbjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIHRva2VuVHlwZTtcbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqIEBpZ25vcmVcbiAgICAgKlxuICAgICAqIFNldHMgdGhlIGNhY2hla2V5cyBmb3IgYW5kIHN0b3JlcyB0aGUgYWNjb3VudCBpbmZvcm1hdGlvbiBpbiBjYWNoZVxuICAgICAqIEBwYXJhbSBhY2NvdW50XG4gICAgICogQHBhcmFtIHN0YXRlXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIHByaXZhdGUgc2V0QWNjb3VudENhY2hlKGFjY291bnQ6IEFjY291bnQsIHN0YXRlOiBzdHJpbmcpIHtcblxuICAgICAgICAvLyBDYWNoZSBhY3F1aXJlVG9rZW5BY2NvdW50S2V5XG4gICAgICAgIGNvbnN0IGFjY291bnRJZCA9IGFjY291bnQgPyB0aGlzLmdldEFjY291bnRJZChhY2NvdW50KSA6IENvbnN0YW50cy5ub19hY2NvdW50O1xuXG4gICAgICAgIGNvbnN0IGFjcXVpcmVUb2tlbkFjY291bnRLZXkgPSBTdG9yYWdlLmdlbmVyYXRlQWNxdWlyZVRva2VuQWNjb3VudEtleShhY2NvdW50SWQsIHN0YXRlKTtcbiAgICAgICAgdGhpcy5jYWNoZVN0b3JhZ2Uuc2V0SXRlbShhY3F1aXJlVG9rZW5BY2NvdW50S2V5LCBKU09OLnN0cmluZ2lmeShhY2NvdW50KSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqIEBpZ25vcmVcbiAgICAgKlxuICAgICAqIFNldHMgdGhlIGNhY2hlS2V5IGZvciBhbmQgc3RvcmVzIHRoZSBhdXRob3JpdHkgaW5mb3JtYXRpb24gaW4gY2FjaGVcbiAgICAgKiBAcGFyYW0gc3RhdGVcbiAgICAgKiBAcGFyYW0gYXV0aG9yaXR5XG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIHByaXZhdGUgc2V0QXV0aG9yaXR5Q2FjaGUoc3RhdGU6IHN0cmluZywgYXV0aG9yaXR5OiBzdHJpbmcpIHtcbiAgICAgICAgLy8gQ2FjaGUgYXV0aG9yaXR5S2V5XG4gICAgICAgIGNvbnN0IGF1dGhvcml0eUtleSA9IFN0b3JhZ2UuZ2VuZXJhdGVBdXRob3JpdHlLZXkoc3RhdGUpO1xuICAgICAgICB0aGlzLmNhY2hlU3RvcmFnZS5zZXRJdGVtKGF1dGhvcml0eUtleSwgVXJsVXRpbHMuQ2Fub25pY2FsaXplVXJpKGF1dGhvcml0eSksIHRoaXMuaW5Db29raWUpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFVwZGF0ZXMgYWNjb3VudCwgYXV0aG9yaXR5LCBhbmQgbm9uY2UgaW4gY2FjaGVcbiAgICAgKiBAcGFyYW0gc2VydmVyQXV0aGVudGljYXRpb25SZXF1ZXN0XG4gICAgICogQHBhcmFtIGFjY291bnRcbiAgICAgKiBAaGlkZGVuXG4gICAgICogQGlnbm9yZVxuICAgICAqL1xuICAgIHByaXZhdGUgdXBkYXRlQ2FjaGVFbnRyaWVzKHNlcnZlckF1dGhlbnRpY2F0aW9uUmVxdWVzdDogU2VydmVyUmVxdWVzdFBhcmFtZXRlcnMsIGFjY291bnQ6IEFjY291bnQsIGxvZ2luU3RhcnRQYWdlPzogYW55KSB7XG4gICAgICAgIC8vIENhY2hlIGFjY291bnQgYW5kIGF1dGhvcml0eVxuICAgICAgICBpZiAobG9naW5TdGFydFBhZ2UpIHtcbiAgICAgICAgICAgIC8vIENhY2hlIHRoZSBzdGF0ZSwgbm9uY2UsIGFuZCBsb2dpbiByZXF1ZXN0IGRhdGFcbiAgICAgICAgICAgIHRoaXMuY2FjaGVTdG9yYWdlLnNldEl0ZW0oQ29uc3RhbnRzLmxvZ2luUmVxdWVzdCwgbG9naW5TdGFydFBhZ2UsIHRoaXMuaW5Db29raWUpO1xuICAgICAgICAgICAgdGhpcy5jYWNoZVN0b3JhZ2Uuc2V0SXRlbShDb25zdGFudHMuc3RhdGVMb2dpbiwgc2VydmVyQXV0aGVudGljYXRpb25SZXF1ZXN0LnN0YXRlLCB0aGlzLmluQ29va2llKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc2V0QWNjb3VudENhY2hlKGFjY291bnQsIHNlcnZlckF1dGhlbnRpY2F0aW9uUmVxdWVzdC5zdGF0ZSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gQ2FjaGUgYXV0aG9yaXR5S2V5XG4gICAgICAgIHRoaXMuc2V0QXV0aG9yaXR5Q2FjaGUoc2VydmVyQXV0aGVudGljYXRpb25SZXF1ZXN0LnN0YXRlLCBzZXJ2ZXJBdXRoZW50aWNhdGlvblJlcXVlc3QuYXV0aG9yaXR5KTtcblxuICAgICAgICAvLyBDYWNoZSBub25jZVxuICAgICAgICB0aGlzLmNhY2hlU3RvcmFnZS5zZXRJdGVtKENvbnN0YW50cy5ub25jZUlkVG9rZW4sIHNlcnZlckF1dGhlbnRpY2F0aW9uUmVxdWVzdC5ub25jZSwgdGhpcy5pbkNvb2tpZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgdW5pcXVlIGlkZW50aWZpZXIgZm9yIHRoZSBsb2dnZWQgaW4gYWNjb3VudFxuICAgICAqIEBwYXJhbSBhY2NvdW50XG4gICAgICogQGhpZGRlblxuICAgICAqIEBpZ25vcmVcbiAgICAgKi9cbiAgICBwcml2YXRlIGdldEFjY291bnRJZChhY2NvdW50OiBBY2NvdW50KTogYW55IHtcbiAgICAgICAgLy8gcmV0dXJuIGAke2FjY291bnQuYWNjb3VudElkZW50aWZpZXJ9YCArIENvbnN0YW50cy5yZXNvdXJjZURlbGltaXRlciArIGAke2FjY291bnQuaG9tZUFjY291bnRJZGVudGlmaWVyfWA7XG4gICAgICAgIGxldCBhY2NvdW50SWQ6IHN0cmluZztcbiAgICAgICAgaWYgKCFTdHJpbmdVdGlscy5pc0VtcHR5KGFjY291bnQuaG9tZUFjY291bnRJZGVudGlmaWVyKSkge1xuICAgICAgICAgICAgYWNjb3VudElkID0gYWNjb3VudC5ob21lQWNjb3VudElkZW50aWZpZXI7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBhY2NvdW50SWQgPSBDb25zdGFudHMubm9fYWNjb3VudDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBhY2NvdW50SWQ7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqIEBpZ25vcmVcbiAgICAgKlxuICAgICAqIENvbnN0cnVjdCAndG9rZW5SZXF1ZXN0JyBmcm9tIHRoZSBhdmFpbGFibGUgZGF0YSBpbiBhZGFsSWRUb2tlblxuICAgICAqIEBwYXJhbSBleHRyYVF1ZXJ5UGFyYW1ldGVyc1xuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBwcml2YXRlIGJ1aWxkSURUb2tlblJlcXVlc3QocmVxdWVzdDogQXV0aGVudGljYXRpb25QYXJhbWV0ZXJzKTogQXV0aGVudGljYXRpb25QYXJhbWV0ZXJzIHtcblxuICAgICAgICBjb25zdCB0b2tlblJlcXVlc3Q6IEF1dGhlbnRpY2F0aW9uUGFyYW1ldGVycyA9IHtcbiAgICAgICAgICAgIHNjb3BlczogW3RoaXMuY2xpZW50SWRdLFxuICAgICAgICAgICAgYXV0aG9yaXR5OiB0aGlzLmF1dGhvcml0eSxcbiAgICAgICAgICAgIGFjY291bnQ6IHRoaXMuZ2V0QWNjb3VudCgpLFxuICAgICAgICAgICAgZXh0cmFRdWVyeVBhcmFtZXRlcnM6IHJlcXVlc3QuZXh0cmFRdWVyeVBhcmFtZXRlcnNcbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4gdG9rZW5SZXF1ZXN0O1xuICAgIH1cblxuICAgIC8vICNlbmRyZWdpb25cblxuICAgIHByaXZhdGUgZ2V0VGVsZW1ldHJ5TWFuYWdlckZyb21Db25maWcoY29uZmlnOiBUZWxlbWV0cnlPcHRpb25zLCBjbGllbnRJZDogc3RyaW5nKTogVGVsZW1ldHJ5TWFuYWdlciB7XG4gICAgICAgIGlmICghY29uZmlnKSB7IC8vIGlmIHVuc2V0XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICAvLyBpZiBzZXQgdGhlbiB2YWxpZGF0ZVxuICAgICAgICBjb25zdCB7IGFwcGxpY2F0aW9uTmFtZSwgYXBwbGljYXRpb25WZXJzaW9uLCB0ZWxlbWV0cnlFbWl0dGVyIH0gPSBjb25maWc7XG4gICAgICAgIGlmICghYXBwbGljYXRpb25OYW1lIHx8ICFhcHBsaWNhdGlvblZlcnNpb24gfHwgISB0ZWxlbWV0cnlFbWl0dGVyKSB7XG4gICAgICAgICAgICB0aHJvdyBDbGllbnRDb25maWd1cmF0aW9uRXJyb3IuY3JlYXRlVGVsZW1ldHJ5Q29uZmlnRXJyb3IoY29uZmlnKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBpZiB2YWxpZCB0aGVuIGNvbnN0cnVjdFxuICAgICAgICBjb25zdCB0ZWxlbWV0cnlQbGF0Zm9ybTogVGVsZW1ldHJ5UGxhdGZvcm0gPSB7XG4gICAgICAgICAgICBzZGs6IFwibXNhbC5qc1wiLCAvLyBUT0RPIG5lZWQgdG8gYmUgYWJsZSB0byBvdmVycmlkZSB0aGlzIGZvciBhbmd1bGFyLCByZWFjdCwgZXRjXG4gICAgICAgICAgICBzZGtWZXJzaW9uOiBsaWJyYXJ5VmVyc2lvbigpLFxuICAgICAgICAgICAgYXBwbGljYXRpb25OYW1lLFxuICAgICAgICAgICAgYXBwbGljYXRpb25WZXJzaW9uXG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IHRlbGVtZXRyeU1hbmFnZXJDb25maWc6IFRlbGVtZXRyeUNvbmZpZyA9IHtcbiAgICAgICAgICAgIHBsYXRmb3JtOiB0ZWxlbWV0cnlQbGF0Zm9ybSxcbiAgICAgICAgICAgIGNsaWVudElkOiBjbGllbnRJZFxuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gbmV3IFRlbGVtZXRyeU1hbmFnZXIodGVsZW1ldHJ5TWFuYWdlckNvbmZpZywgdGVsZW1ldHJ5RW1pdHRlcik7XG4gICAgfVxufVxuIiwiLypcbiAqIENvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxuICovXG5cbmV4cG9ydCBjbGFzcyBTY29wZVNldCB7XG5cbiAgICAvKipcbiAgICAgKiBDaGVjayBpZiB0aGVyZSBhcmUgZHVwIHNjb3BlcyBpbiBhIGdpdmVuIHJlcXVlc3RcbiAgICAgKlxuICAgICAqIEBwYXJhbSBjYWNoZWRTY29wZXNcbiAgICAgKiBAcGFyYW0gc2NvcGVzXG4gICAgICovXG4gICAgLy8gVE9ETzogUmVuYW1lIHRoaXMsIGludGVyc2VjdGluZyBzY29wZXMgaXNuJ3QgYSBncmVhdCBuYW1lIGZvciBkdXBsaWNhdGUgY2hlY2tlclxuICAgIHN0YXRpYyBpc0ludGVyc2VjdGluZ1Njb3BlcyhjYWNoZWRTY29wZXM6IEFycmF5PHN0cmluZz4sIHNjb3BlczogQXJyYXk8c3RyaW5nPik6IGJvb2xlYW4ge1xuICAgICAgICBjYWNoZWRTY29wZXMgPSB0aGlzLmNvbnZlcnRUb0xvd2VyQ2FzZShjYWNoZWRTY29wZXMpO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNjb3Blcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKGNhY2hlZFNjb3Blcy5pbmRleE9mKHNjb3Blc1tpXS50b0xvd2VyQ2FzZSgpKSA+IC0xKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENoZWNrIGlmIGEgZ2l2ZW4gc2NvcGUgaXMgcHJlc2VudCBpbiB0aGUgcmVxdWVzdFxuICAgICAqXG4gICAgICogQHBhcmFtIGNhY2hlZFNjb3Blc1xuICAgICAqIEBwYXJhbSBzY29wZXNcbiAgICAgKi9cbiAgICBzdGF0aWMgY29udGFpbnNTY29wZShjYWNoZWRTY29wZXM6IEFycmF5PHN0cmluZz4sIHNjb3BlczogQXJyYXk8c3RyaW5nPik6IGJvb2xlYW4ge1xuICAgICAgICBjYWNoZWRTY29wZXMgPSB0aGlzLmNvbnZlcnRUb0xvd2VyQ2FzZShjYWNoZWRTY29wZXMpO1xuICAgICAgICByZXR1cm4gc2NvcGVzLmV2ZXJ5KCh2YWx1ZTogYW55KTogYm9vbGVhbiA9PiBjYWNoZWRTY29wZXMuaW5kZXhPZih2YWx1ZS50b1N0cmluZygpLnRvTG93ZXJDYXNlKCkpID49IDApO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIHRvTG93ZXJcbiAgICAgKlxuICAgICAqIEBwYXJhbSBzY29wZXNcbiAgICAgKi9cbiAgICAvLyBUT0RPOiBSZW5hbWUgdGhpcywgdG9vIGdlbmVyaWMgbmFtZSBmb3IgYSBmdW5jdGlvbiB0aGF0IG9ubHkgZGVhbHMgd2l0aCBzY29wZXNcbiAgICBzdGF0aWMgY29udmVydFRvTG93ZXJDYXNlKHNjb3BlczogQXJyYXk8c3RyaW5nPik6IEFycmF5PHN0cmluZz4ge1xuICAgICAgICByZXR1cm4gc2NvcGVzLm1hcChzY29wZSA9PiBzY29wZS50b0xvd2VyQ2FzZSgpKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiByZW1vdmUgb25lIGVsZW1lbnQgZnJvbSBhIHNjb3BlIGFycmF5XG4gICAgICpcbiAgICAgKiBAcGFyYW0gc2NvcGVzXG4gICAgICogQHBhcmFtIHNjb3BlXG4gICAgICovXG4gICAgLy8gVE9ETzogUmVuYW1lIHRoaXMsIHRvbyBnZW5lcmljIG5hbWUgZm9yIGEgZnVuY3Rpb24gdGhhdCBvbmx5IGRlYWxzIHdpdGggc2NvcGVzXG4gICAgc3RhdGljIHJlbW92ZUVsZW1lbnQoc2NvcGVzOiBBcnJheTxzdHJpbmc+LCBzY29wZTogc3RyaW5nKTogQXJyYXk8c3RyaW5nPiB7XG4gICAgICAgIHJldHVybiBzY29wZXMuZmlsdGVyKHZhbHVlID0+IHZhbHVlICE9PSBzY29wZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUGFyc2UgdGhlIHNjb3BlcyBpbnRvIGEgZm9ybWF0dGVkIHNjb3BlTGlzdFxuICAgICAqIEBwYXJhbSBzY29wZXNcbiAgICAgKi9cbiAgICBzdGF0aWMgcGFyc2VTY29wZShzY29wZXM6IEFycmF5PHN0cmluZz4pOiBzdHJpbmcge1xuICAgICAgICBsZXQgc2NvcGVMaXN0OiBzdHJpbmcgPSBcIlwiO1xuICAgICAgICBpZiAoc2NvcGVzKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpOiBudW1iZXIgPSAwOyBpIDwgc2NvcGVzLmxlbmd0aDsgKytpKSB7XG4gICAgICAgICAgICAgICAgc2NvcGVMaXN0ICs9IChpICE9PSBzY29wZXMubGVuZ3RoIC0gMSkgPyBzY29wZXNbaV0gKyBcIiBcIiA6IHNjb3Blc1tpXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBzY29wZUxpc3Q7XG4gICAgfVxufVxuIiwiLypcbiAqIENvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxuICovXG5cbmltcG9ydCB7IEFjY291bnQgfSBmcm9tIFwiLi9BY2NvdW50XCI7XG5pbXBvcnQgeyBDbGllbnRDb25maWd1cmF0aW9uRXJyb3IgfSBmcm9tIFwiLi9lcnJvci9DbGllbnRDb25maWd1cmF0aW9uRXJyb3JcIjtcbmltcG9ydCB7IFN0cmluZ0RpY3QgfSBmcm9tIFwiLi9Nc2FsVHlwZXNcIjtcblxuLyoqXG4gKiBAbGluayBBdXRoZW50aWNhdGlvblBhcmFtZXRlcnN9QXV0aGVudGljYXRpb25QYXJhbWV0ZXJzXG4gKi9cbmV4cG9ydCB0eXBlIEF1dGhlbnRpY2F0aW9uUGFyYW1ldGVycyA9IHtcbiAgICBzY29wZXM/OiBBcnJheTxzdHJpbmc+O1xuICAgIGV4dHJhU2NvcGVzVG9Db25zZW50PzogQXJyYXk8c3RyaW5nPjtcbiAgICBwcm9tcHQ/OiBzdHJpbmc7XG4gICAgZXh0cmFRdWVyeVBhcmFtZXRlcnM/OiBTdHJpbmdEaWN0O1xuICAgIGNsYWltc1JlcXVlc3Q/OiBzdHJpbmc7XG4gICAgYXV0aG9yaXR5Pzogc3RyaW5nO1xuICAgIHN0YXRlPzogc3RyaW5nO1xuICAgIGNvcnJlbGF0aW9uSWQ/OiBzdHJpbmc7XG4gICAgYWNjb3VudD86IEFjY291bnQ7XG4gICAgc2lkPzogc3RyaW5nO1xuICAgIGxvZ2luSGludD86IHN0cmluZztcbiAgICBmb3JjZVJlZnJlc2g/OiBib29sZWFuO1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIHZhbGlkYXRlQ2xhaW1zUmVxdWVzdChyZXF1ZXN0OiBBdXRoZW50aWNhdGlvblBhcmFtZXRlcnMpIHtcbiAgICBpZiAoIXJlcXVlc3QuY2xhaW1zUmVxdWVzdCkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGxldCBjbGFpbXM7XG4gICAgdHJ5IHtcbiAgICAgICAgY2xhaW1zID0gSlNPTi5wYXJzZShyZXF1ZXN0LmNsYWltc1JlcXVlc3QpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgdGhyb3cgQ2xpZW50Q29uZmlndXJhdGlvbkVycm9yLmNyZWF0ZUNsYWltc1JlcXVlc3RQYXJzaW5nRXJyb3IoZSk7XG4gICAgfVxuXG4gICAgLy8gVE9ETzogTW9yZSB2YWxpZGF0aW9uIHdpbGwgYmUgYWRkZWQgd2hlbiB0aGUgc2VydmVyIHRlYW0gdGVsbHMgdXMgaG93IHRoZXkgaGF2ZSBhY3R1YWxseSBpbXBsZW1lbnRlZCBjbGFpbXNcbn1cbiIsIi8qXG4gKiBDb3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cbiAqL1xuXG5pbXBvcnQgeyBDcnlwdG9VdGlscyB9IGZyb20gXCIuL0NyeXB0b1V0aWxzXCI7XG5pbXBvcnQgeyBTdHJpbmdVdGlscyB9IGZyb20gXCIuL1N0cmluZ1V0aWxzXCI7XG5cbi8qKlxuICogQGhpZGRlblxuICovXG5leHBvcnQgY2xhc3MgVG9rZW5VdGlscyB7XG5cbiAgICAvKipcbiAgICAgKiBkZWNvZGUgYSBKV1RcbiAgICAgKlxuICAgICAqIEBwYXJhbSBqd3RUb2tlblxuICAgICAqL1xuICAgIHN0YXRpYyBkZWNvZGVKd3Qoand0VG9rZW46IHN0cmluZyk6IGFueSB7XG4gICAgICAgIGlmIChTdHJpbmdVdGlscy5pc0VtcHR5KGp3dFRva2VuKSkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgaWRUb2tlblBhcnRzUmVnZXggPSAvXihbXlxcLlxcc10qKVxcLihbXlxcLlxcc10rKVxcLihbXlxcLlxcc10qKSQvO1xuICAgICAgICBjb25zdCBtYXRjaGVzID0gaWRUb2tlblBhcnRzUmVnZXguZXhlYyhqd3RUb2tlbik7XG4gICAgICAgIGlmICghbWF0Y2hlcyB8fCBtYXRjaGVzLmxlbmd0aCA8IDQpIHtcbiAgICAgICAgICAgIC8vIHRoaXMuX3JlcXVlc3RDb250ZXh0LmxvZ2dlci53YXJuKFwiVGhlIHJldHVybmVkIGlkX3Rva2VuIGlzIG5vdCBwYXJzZWFibGUuXCIpO1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgY3JhY2tlZFRva2VuID0ge1xuICAgICAgICAgICAgaGVhZGVyOiBtYXRjaGVzWzFdLFxuICAgICAgICAgICAgSldTUGF5bG9hZDogbWF0Y2hlc1syXSxcbiAgICAgICAgICAgIEpXU1NpZzogbWF0Y2hlc1szXVxuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gY3JhY2tlZFRva2VuO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEV4dHJhY3QgSWRUb2tlbiBieSBkZWNvZGluZyB0aGUgUkFXSWRUb2tlblxuICAgICAqXG4gICAgICogQHBhcmFtIGVuY29kZWRJZFRva2VuXG4gICAgICovXG4gICAgc3RhdGljIGV4dHJhY3RJZFRva2VuKGVuY29kZWRJZFRva2VuOiBzdHJpbmcpOiBhbnkge1xuICAgIC8vIGlkIHRva2VuIHdpbGwgYmUgZGVjb2RlZCB0byBnZXQgdGhlIHVzZXJuYW1lXG4gICAgICAgIGNvbnN0IGRlY29kZWRUb2tlbiA9IHRoaXMuZGVjb2RlSnd0KGVuY29kZWRJZFRva2VuKTtcbiAgICAgICAgaWYgKCFkZWNvZGVkVG9rZW4pIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCBiYXNlNjRJZFRva2VuID0gZGVjb2RlZFRva2VuLkpXU1BheWxvYWQ7XG4gICAgICAgICAgICBjb25zdCBiYXNlNjREZWNvZGVkID0gQ3J5cHRvVXRpbHMuYmFzZTY0RGVjb2RlKGJhc2U2NElkVG9rZW4pO1xuICAgICAgICAgICAgaWYgKCFiYXNlNjREZWNvZGVkKSB7XG4gICAgICAgICAgICAgICAgLy8gdGhpcy5fcmVxdWVzdENvbnRleHQubG9nZ2VyLmluZm8oXCJUaGUgcmV0dXJuZWQgaWRfdG9rZW4gY291bGQgbm90IGJlIGJhc2U2NCB1cmwgc2FmZSBkZWNvZGVkLlwiKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIEVDTUEgc2NyaXB0IGhhcyBKU09OIGJ1aWx0LWluIHN1cHBvcnRcbiAgICAgICAgICAgIHJldHVybiBKU09OLnBhcnNlKGJhc2U2NERlY29kZWQpO1xuICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgIC8vIHRoaXMuX3JlcXVlc3RDb250ZXh0LmxvZ2dlci5lcnJvcihcIlRoZSByZXR1cm5lZCBpZF90b2tlbiBjb3VsZCBub3QgYmUgZGVjb2RlZFwiICsgZXJyKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbn1cbiIsIi8qXG4gKiBDb3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cbiAqL1xuXG5pbXBvcnQgeyBDbGllbnRJbmZvIH0gZnJvbSBcIi4vQ2xpZW50SW5mb1wiO1xuaW1wb3J0IHsgSWRUb2tlbiB9IGZyb20gXCIuL0lkVG9rZW5cIjtcbmltcG9ydCB7IENyeXB0b1V0aWxzIH0gZnJvbSBcIi4vdXRpbHMvQ3J5cHRvVXRpbHNcIjtcbmltcG9ydCB7IFN0cmluZ1V0aWxzIH0gZnJvbSBcIi4vdXRpbHMvU3RyaW5nVXRpbHNcIjtcbmltcG9ydCB7IFN0cmluZ0RpY3QgfSBmcm9tIFwiLi9Nc2FsVHlwZXNcIjtcblxuLyoqXG4gKiBhY2NvdW50SWRlbnRpZmllciAgICAgICBjb21iaW5hdGlvbiBvZiBpZFRva2VuLnVpZCBhbmQgaWRUb2tlbi51dGlkXG4gKiBob21lQWNjb3VudElkZW50aWZpZXIgICBjb21iaW5hdGlvbiBvZiBjbGllbnRJbmZvLnVpZCBhbmQgY2xpZW50SW5mby51dGlkXG4gKiB1c2VyTmFtZSAgICAgICAgICAgICAgICBpZFRva2VuLnByZWZlcnJlZF91c2VybmFtZVxuICogbmFtZSAgICAgICAgICAgICAgICAgICAgaWRUb2tlbi5uYW1lXG4gKiBpZFRva2VuICAgICAgICAgICAgICAgICBpZFRva2VuXG4gKiBzaWQgICAgICAgICAgICAgICAgICAgICBpZFRva2VuLnNpZCAtIHNlc3Npb24gaWRlbnRpZmllclxuICogZW52aXJvbm1lbnQgICAgICAgICAgICAgaWR0b2tlbi5pc3N1ZXIgKHRoZSBhdXRob3JpdHkgdGhhdCBpc3N1ZXMgdGhlIHRva2VuKVxuICovXG5leHBvcnQgY2xhc3MgQWNjb3VudCB7XG5cbiAgICBhY2NvdW50SWRlbnRpZmllcjogc3RyaW5nO1xuICAgIGhvbWVBY2NvdW50SWRlbnRpZmllcjogc3RyaW5nO1xuICAgIHVzZXJOYW1lOiBzdHJpbmc7XG4gICAgbmFtZTogc3RyaW5nO1xuICAgIGlkVG9rZW46IFN0cmluZ0RpY3Q7IC8vIHdpbGwgYmUgZGVwcmVjYXRlZCBzb29uXG4gICAgaWRUb2tlbkNsYWltczogU3RyaW5nRGljdDtcbiAgICBzaWQ6IHN0cmluZztcbiAgICBlbnZpcm9ubWVudDogc3RyaW5nO1xuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhbiBBY2NvdW50IE9iamVjdFxuICAgICAqIEBwcmFyYW0gYWNjb3VudElkZW50aWZpZXJcbiAgICAgKiBAcGFyYW0gaG9tZUFjY291bnRJZGVudGlmaWVyXG4gICAgICogQHBhcmFtIHVzZXJOYW1lXG4gICAgICogQHBhcmFtIG5hbWVcbiAgICAgKiBAcGFyYW0gaWRUb2tlblxuICAgICAqIEBwYXJhbSBzaWRcbiAgICAgKiBAcGFyYW0gZW52aXJvbm1lbnRcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihhY2NvdW50SWRlbnRpZmllcjogc3RyaW5nLCBob21lQWNjb3VudElkZW50aWZpZXI6IHN0cmluZywgdXNlck5hbWU6IHN0cmluZywgbmFtZTogc3RyaW5nLCBpZFRva2VuQ2xhaW1zOiBTdHJpbmdEaWN0LCBzaWQ6IHN0cmluZywgIGVudmlyb25tZW50OiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5hY2NvdW50SWRlbnRpZmllciA9IGFjY291bnRJZGVudGlmaWVyO1xuICAgICAgICB0aGlzLmhvbWVBY2NvdW50SWRlbnRpZmllciA9IGhvbWVBY2NvdW50SWRlbnRpZmllcjtcbiAgICAgICAgdGhpcy51c2VyTmFtZSA9IHVzZXJOYW1lO1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICAvLyB3aWxsIGJlIGRlcHJlY2F0ZWQgc29vblxuICAgICAgICB0aGlzLmlkVG9rZW4gPSBpZFRva2VuQ2xhaW1zO1xuICAgICAgICB0aGlzLmlkVG9rZW5DbGFpbXMgPSBpZFRva2VuQ2xhaW1zO1xuICAgICAgICB0aGlzLnNpZCA9IHNpZDtcbiAgICAgICAgdGhpcy5lbnZpcm9ubWVudCA9IGVudmlyb25tZW50O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKiBAcGFyYW0gaWRUb2tlblxuICAgICAqIEBwYXJhbSBjbGllbnRJbmZvXG4gICAgICovXG4gICAgc3RhdGljIGNyZWF0ZUFjY291bnQoaWRUb2tlbjogSWRUb2tlbiwgY2xpZW50SW5mbzogQ2xpZW50SW5mbyk6IEFjY291bnQge1xuXG4gICAgICAgIC8vIGNyZWF0ZSBhY2NvdW50SWRlbnRpZmllclxuICAgICAgICBjb25zdCBhY2NvdW50SWRlbnRpZmllcjogc3RyaW5nID0gaWRUb2tlbi5vYmplY3RJZCB8fCAgaWRUb2tlbi5zdWJqZWN0O1xuXG4gICAgICAgIC8vIGNyZWF0ZSBob21lQWNjb3VudElkZW50aWZpZXJcbiAgICAgICAgY29uc3QgdWlkOiBzdHJpbmcgPSBjbGllbnRJbmZvID8gY2xpZW50SW5mby51aWQgOiBcIlwiO1xuICAgICAgICBjb25zdCB1dGlkOiBzdHJpbmcgPSBjbGllbnRJbmZvID8gY2xpZW50SW5mby51dGlkIDogXCJcIjtcblxuICAgICAgICBsZXQgaG9tZUFjY291bnRJZGVudGlmaWVyOiBzdHJpbmc7XG4gICAgICAgIGlmICghU3RyaW5nVXRpbHMuaXNFbXB0eSh1aWQpICYmICFTdHJpbmdVdGlscy5pc0VtcHR5KHV0aWQpKSB7XG4gICAgICAgICAgICBob21lQWNjb3VudElkZW50aWZpZXIgPSBDcnlwdG9VdGlscy5iYXNlNjRFbmNvZGUodWlkKSArIFwiLlwiICsgQ3J5cHRvVXRpbHMuYmFzZTY0RW5jb2RlKHV0aWQpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBuZXcgQWNjb3VudChhY2NvdW50SWRlbnRpZmllciwgaG9tZUFjY291bnRJZGVudGlmaWVyLCBpZFRva2VuLnByZWZlcnJlZE5hbWUsIGlkVG9rZW4ubmFtZSwgaWRUb2tlbi5jbGFpbXMsIGlkVG9rZW4uc2lkLCBpZFRva2VuLmlzc3Vlcik7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVXRpbHMgZnVuY3Rpb24gdG8gY29tcGFyZSB0d28gQWNjb3VudCBvYmplY3RzIC0gdXNlZCB0byBjaGVjayBpZiB0aGUgc2FtZSB1c2VyIGFjY291bnQgaXMgbG9nZ2VkIGluXG4gICAgICpcbiAgICAgKiBAcGFyYW0gYTE6IEFjY291bnQgb2JqZWN0XG4gICAgICogQHBhcmFtIGEyOiBBY2NvdW50IG9iamVjdFxuICAgICAqL1xuICAgIHN0YXRpYyBjb21wYXJlQWNjb3VudHMoYTE6IEFjY291bnQsIGEyOiBBY2NvdW50KTogYm9vbGVhbiB7XG4gICAgICAgIGlmICghYTEgfHwgIWEyKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGExLmhvbWVBY2NvdW50SWRlbnRpZmllciAmJiBhMi5ob21lQWNjb3VudElkZW50aWZpZXIpIHtcbiAgICAgICAgICAgIGlmIChhMS5ob21lQWNjb3VudElkZW50aWZpZXIgPT09IGEyLmhvbWVBY2NvdW50SWRlbnRpZmllcikge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG59XG4iLCIvKlxuICogQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXG4gKi9cblxuaW1wb3J0IHsgQXV0aG9yaXR5LCBBdXRob3JpdHlUeXBlIH0gZnJvbSBcIi4vQXV0aG9yaXR5XCI7XG5pbXBvcnQgeyBYaHJDbGllbnQgfSBmcm9tIFwiLi4vWEhSQ2xpZW50XCI7XG5pbXBvcnQgeyBBQURUcnVzdGVkSG9zdExpc3QgfSBmcm9tIFwiLi4vdXRpbHMvQ29uc3RhbnRzXCI7XG5cbi8qKlxuICogQGhpZGRlblxuICovXG5leHBvcnQgY2xhc3MgQWFkQXV0aG9yaXR5IGV4dGVuZHMgQXV0aG9yaXR5IHtcbiAgICBwcml2YXRlIHN0YXRpYyByZWFkb25seSBBYWRJbnN0YW5jZURpc2NvdmVyeUVuZHBvaW50OiBzdHJpbmcgPSBcImh0dHBzOi8vbG9naW4ubWljcm9zb2Z0b25saW5lLmNvbS9jb21tb24vZGlzY292ZXJ5L2luc3RhbmNlXCI7XG5cbiAgICBwcml2YXRlIGdldCBBYWRJbnN0YW5jZURpc2NvdmVyeUVuZHBvaW50VXJsKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiBgJHtBYWRBdXRob3JpdHkuQWFkSW5zdGFuY2VEaXNjb3ZlcnlFbmRwb2ludH0/YXBpLXZlcnNpb249MS4wJmF1dGhvcml6YXRpb25fZW5kcG9pbnQ9JHt0aGlzLkNhbm9uaWNhbEF1dGhvcml0eX1vYXV0aDIvdjIuMC9hdXRob3JpemVgO1xuICAgIH1cblxuICAgIHB1YmxpYyBjb25zdHJ1Y3RvcihhdXRob3JpdHk6IHN0cmluZywgdmFsaWRhdGVBdXRob3JpdHk6IGJvb2xlYW4pIHtcbiAgICAgICAgc3VwZXIoYXV0aG9yaXR5LCB2YWxpZGF0ZUF1dGhvcml0eSk7XG4gICAgfVxuXG4gICAgcHVibGljIGdldCBBdXRob3JpdHlUeXBlKCk6IEF1dGhvcml0eVR5cGUge1xuICAgICAgICByZXR1cm4gQXV0aG9yaXR5VHlwZS5BYWQ7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyBhIHByb21pc2Ugd2hpY2ggcmVzb2x2ZXMgdG8gdGhlIE9JREMgZW5kcG9pbnRcbiAgICAgKiBPbmx5IHJlc3BvbmRzIHdpdGggdGhlIGVuZHBvaW50XG4gICAgICovXG4gICAgcHVibGljIGFzeW5jIEdldE9wZW5JZENvbmZpZ3VyYXRpb25FbmRwb2ludEFzeW5jKCk6IFByb21pc2U8c3RyaW5nPiB7XG4gICAgICAgIGlmICghdGhpcy5Jc1ZhbGlkYXRpb25FbmFibGVkIHx8IHRoaXMuSXNJblRydXN0ZWRIb3N0TGlzdCh0aGlzLkNhbm9uaWNhbEF1dGhvcml0eVVybENvbXBvbmVudHMuSG9zdE5hbWVBbmRQb3J0KSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuRGVmYXVsdE9wZW5JZENvbmZpZ3VyYXRpb25FbmRwb2ludDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGZvciBjdXN0b20gZG9tYWlucyBpbiBBQUQgd2hlcmUgd2UgcXVlcnkgdGhlIHNlcnZpY2UgZm9yIHRoZSBJbnN0YW5jZSBkaXNjb3ZlcnlcbiAgICAgICAgY29uc3QgY2xpZW50OiBYaHJDbGllbnQgPSBuZXcgWGhyQ2xpZW50KCk7XG5cbiAgICAgICAgcmV0dXJuIGNsaWVudC5zZW5kUmVxdWVzdEFzeW5jKHRoaXMuQWFkSW5zdGFuY2VEaXNjb3ZlcnlFbmRwb2ludFVybCwgXCJHRVRcIiwgdHJ1ZSlcbiAgICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiByZXNwb25zZS50ZW5hbnRfZGlzY292ZXJ5X2VuZHBvaW50O1xuICAgICAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2hlY2tzIHRvIHNlZSBpZiB0aGUgaG9zdCBpcyBpbiBhIGxpc3Qgb2YgdHJ1c3RlZCBob3N0c1xuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBUaGUgaG9zdCB0byBsb29rIHVwXG4gICAgICovXG4gICAgcHVibGljIElzSW5UcnVzdGVkSG9zdExpc3QoaG9zdDogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiBBQURUcnVzdGVkSG9zdExpc3RbaG9zdC50b0xvd2VyQ2FzZSgpXTtcbiAgICB9XG59XG4iLCIvKlxuICogQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXG4gKi9cblxuLyoqXG4gKiBYSFIgY2xpZW50IGZvciBKU09OIGVuZHBvaW50c1xuICogaHR0cHM6Ly93d3cubnBtanMuY29tL3BhY2thZ2UvYXN5bmMtcHJvbWlzZVxuICogQGhpZGRlblxuICovXG5leHBvcnQgY2xhc3MgWGhyQ2xpZW50IHtcbiAgICBwdWJsaWMgc2VuZFJlcXVlc3RBc3luYyh1cmw6IHN0cmluZywgbWV0aG9kOiBzdHJpbmcsIGVuYWJsZUNhY2hpbmc/OiBib29sZWFuKTogUHJvbWlzZTxhbnk+IHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlPHN0cmluZz4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG4gICAgICAgICAgICB4aHIub3BlbihtZXRob2QsIHVybCwgLyogYXN5bmM6ICovIHRydWUpO1xuICAgICAgICAgICAgaWYgKGVuYWJsZUNhY2hpbmcpIHtcbiAgICAgICAgICAgICAgICAvKlxuICAgICAgICAgICAgICAgICAqIFRPRE86IChzaGl2YikgZW5zdXJlIHRoYXQgdGhpcyBjYW4gYmUgY2FjaGVkXG4gICAgICAgICAgICAgICAgICogeGhyLnNldFJlcXVlc3RIZWFkZXIoXCJDYWNoZS1Db250cm9sXCIsIFwiUHVibGljXCIpO1xuICAgICAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB4aHIub25sb2FkID0gKGV2KSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHhoci5zdGF0dXMgPCAyMDAgfHwgeGhyLnN0YXR1cyA+PSAzMDApIHtcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KHRoaXMuaGFuZGxlRXJyb3IoeGhyLnJlc3BvbnNlVGV4dCkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBsZXQganNvblJlc3BvbnNlO1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIGpzb25SZXNwb25zZSA9IEpTT04ucGFyc2UoeGhyLnJlc3BvbnNlVGV4dCk7XG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgICAgICByZWplY3QodGhpcy5oYW5kbGVFcnJvcih4aHIucmVzcG9uc2VUZXh0KSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcmVzb2x2ZShqc29uUmVzcG9uc2UpO1xuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgeGhyLm9uZXJyb3IgPSAoZXYpID0+IHtcbiAgICAgICAgICAgICAgICByZWplY3QoeGhyLnN0YXR1cyk7XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICBpZiAobWV0aG9kID09PSBcIkdFVFwiKSB7XG4gICAgICAgICAgICAgICAgeGhyLnNlbmQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRocm93IFwibm90IGltcGxlbWVudGVkXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBoYW5kbGVFcnJvcihyZXNwb25zZVRleHQ6IHN0cmluZyk6IGFueSB7XG4gICAgICAgIGxldCBqc29uUmVzcG9uc2U7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBqc29uUmVzcG9uc2UgPSBKU09OLnBhcnNlKHJlc3BvbnNlVGV4dCk7XG4gICAgICAgICAgICBpZiAoanNvblJlc3BvbnNlLmVycm9yKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGpzb25SZXNwb25zZS5lcnJvcjtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgcmVzcG9uc2VUZXh0O1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICByZXR1cm4gcmVzcG9uc2VUZXh0O1xuICAgICAgICB9XG4gICAgfVxufVxuIiwiLypcbiAqIENvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxuICovXG5cbmltcG9ydCB7IEFhZEF1dGhvcml0eSB9IGZyb20gXCIuL0FhZEF1dGhvcml0eVwiO1xuaW1wb3J0IHsgQXV0aG9yaXR5VHlwZSB9IGZyb20gXCIuL0F1dGhvcml0eVwiO1xuaW1wb3J0IHsgQ2xpZW50Q29uZmlndXJhdGlvbkVycm9yTWVzc2FnZSB9IGZyb20gXCIuLi9lcnJvci9DbGllbnRDb25maWd1cmF0aW9uRXJyb3JcIjtcbmltcG9ydCB7IFVybFV0aWxzIH0gZnJvbSBcIi4uL3V0aWxzL1VybFV0aWxzXCI7XG5cbi8qKlxuICogQGhpZGRlblxuICovXG5leHBvcnQgY2xhc3MgQjJjQXV0aG9yaXR5IGV4dGVuZHMgQWFkQXV0aG9yaXR5IHtcbiAgICBwdWJsaWMgc3RhdGljIEIyQ19QUkVGSVg6IFN0cmluZyA9IFwidGZwXCI7XG4gICAgcHVibGljIGNvbnN0cnVjdG9yKGF1dGhvcml0eTogc3RyaW5nLCB2YWxpZGF0ZUF1dGhvcml0eTogYm9vbGVhbikge1xuICAgICAgICBzdXBlcihhdXRob3JpdHksIHZhbGlkYXRlQXV0aG9yaXR5KTtcbiAgICAgICAgY29uc3QgdXJsQ29tcG9uZW50cyA9IFVybFV0aWxzLkdldFVybENvbXBvbmVudHMoYXV0aG9yaXR5KTtcblxuICAgICAgICBjb25zdCBwYXRoU2VnbWVudHMgPSB1cmxDb21wb25lbnRzLlBhdGhTZWdtZW50cztcbiAgICAgICAgaWYgKHBhdGhTZWdtZW50cy5sZW5ndGggPCAzKSB7XG4gICAgICAgICAgICB0aHJvdyBDbGllbnRDb25maWd1cmF0aW9uRXJyb3JNZXNzYWdlLmIyY0F1dGhvcml0eVVyaUludmFsaWRQYXRoO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5DYW5vbmljYWxBdXRob3JpdHkgPSBgaHR0cHM6Ly8ke3VybENvbXBvbmVudHMuSG9zdE5hbWVBbmRQb3J0fS8ke3BhdGhTZWdtZW50c1swXX0vJHtwYXRoU2VnbWVudHNbMV19LyR7cGF0aFNlZ21lbnRzWzJdfS9gO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgQXV0aG9yaXR5VHlwZSgpOiBBdXRob3JpdHlUeXBlIHtcbiAgICAgICAgcmV0dXJuIEF1dGhvcml0eVR5cGUuQjJDO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgYSBwcm9taXNlIHdpdGggdGhlIFRlbmFudERpc2NvdmVyeUVuZHBvaW50XG4gICAgICovXG4gICAgcHVibGljIGFzeW5jIEdldE9wZW5JZENvbmZpZ3VyYXRpb25FbmRwb2ludEFzeW5jKCk6IFByb21pc2U8c3RyaW5nPiB7XG4gICAgICAgIGlmICghdGhpcy5Jc1ZhbGlkYXRpb25FbmFibGVkIHx8IHRoaXMuSXNJblRydXN0ZWRIb3N0TGlzdCh0aGlzLkNhbm9uaWNhbEF1dGhvcml0eVVybENvbXBvbmVudHMuSG9zdE5hbWVBbmRQb3J0KSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuRGVmYXVsdE9wZW5JZENvbmZpZ3VyYXRpb25FbmRwb2ludDtcbiAgICAgICAgfVxuXG4gICAgICAgIHRocm93IENsaWVudENvbmZpZ3VyYXRpb25FcnJvck1lc3NhZ2UudW5zdXBwb3J0ZWRBdXRob3JpdHlWYWxpZGF0aW9uO1xuICAgIH1cbn1cbiIsIi8qXG4gKiBDb3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cbiAqL1xuXG5pbXBvcnQgeyBMb2dnZXIgfSBmcm9tIFwiLi9Mb2dnZXJcIjtcbmltcG9ydCB7IFVybFV0aWxzIH0gZnJvbSBcIi4vdXRpbHMvVXJsVXRpbHNcIjtcbmltcG9ydCB7IFRlbGVtZXRyeUVtaXR0ZXIgfSBmcm9tIFwiLi90ZWxlbWV0cnkvVGVsZW1ldHJ5VHlwZXNcIjtcblxuLyoqXG4gKiBDYWNoZSBsb2NhdGlvbiBvcHRpb25zIHN1cHBvcnRlZCBieSBNU0FMIGFyZTpcbiAqIC0gbG9jYWwgc3RvcmFnZTogTVNBTCB1c2VzIGJyb3dzZXJzIGxvY2FsIHN0b3JhZ2UgdG8gc3RvcmUgaXRzIGNhY2hlXG4gKiAtIHNlc3Npb24gc3RvcmFnZTogTVNBTCB1c2VzIHRoZSBicm93c2VycyBzZXNzaW9uIHN0b3JhZ2UgdG8gc3RvcmUgaXRzIGNhY2hlXG4gKi9cbmV4cG9ydCB0eXBlIENhY2hlTG9jYXRpb24gPSBcImxvY2FsU3RvcmFnZVwiIHwgXCJzZXNzaW9uU3RvcmFnZVwiO1xuXG4vKipcbiAqIERlZmF1bHRzIGZvciB0aGUgQ29uZmlndXJhdGlvbiBPcHRpb25zXG4gKi9cbmNvbnN0IEZSQU1FX1RJTUVPVVQgPSA2MDAwO1xuY29uc3QgT0ZGU0VUID0gMzAwO1xuY29uc3QgTkFWSUdBVEVfRlJBTUVfV0FJVCA9IDUwMDtcblxuLyoqXG4gKiBAdHlwZSBBdXRoT3B0aW9uczogVXNlIHRoaXMgdG8gY29uZmlndXJlIHRoZSBhdXRoIG9wdGlvbnMgaW4gdGhlIENvbmZpZ3VyYXRpb24gb2JqZWN0XG4gKlxuICogIC0gY2xpZW50SWQgICAgICAgICAgICAgICAgICAgIC0gQ2xpZW50IElEIG9mIHlvdXIgYXBwIHJlZ2lzdGVyZWQgd2l0aCBvdXIgQXBwbGljYXRpb24gcmVnaXN0cmF0aW9uIHBvcnRhbCA6IGh0dHBzOi8vcG9ydGFsLmF6dXJlLmNvbS8jYmxhZGUvTWljcm9zb2Z0X0FBRF9JQU0vQWN0aXZlRGlyZWN0b3J5TWVudUJsYWRlL1JlZ2lzdGVyZWRBcHBzUHJldmlldyBpbiBNaWNyb3NvZnQgSWRlbnRpdHkgUGxhdGZvcm1cbiAqICAtIGF1dGhvcml0eSAgICAgICAgICAgICAgICAgICAtIFlvdSBjYW4gY29uZmlndXJlIGEgc3BlY2lmaWMgYXV0aG9yaXR5LCBkZWZhdWx0cyB0byBcIiBcIiBvciBcImh0dHBzOi8vbG9naW4ubWljcm9zb2Z0b25saW5lLmNvbS9jb21tb25cIlxuICogIC0gdmFsaWRhdGVBdXRob3JpdHkgICAgICAgICAgIC0gVXNlZCB0byB0dXJuIGF1dGhvcml0eSB2YWxpZGF0aW9uIG9uL29mZi4gV2hlbiBzZXQgdG8gdHJ1ZSAoZGVmYXVsdCksIE1TQUwgd2lsbCBjb21wYXJlIHRoZSBhcHBsaWNhdGlvbidzIGF1dGhvcml0eSBhZ2FpbnN0IHdlbGwta25vd24gVVJMcyB0ZW1wbGF0ZXMgcmVwcmVzZW50aW5nIHdlbGwtZm9ybWVkIGF1dGhvcml0aWVzLiBJdCBpcyB1c2VmdWwgd2hlbiB0aGUgYXV0aG9yaXR5IGlzIG9idGFpbmVkIGF0IHJ1biB0aW1lIHRvIHByZXZlbnQgTVNBTCBmcm9tIGRpc3BsYXlpbmcgYXV0aGVudGljYXRpb24gcHJvbXB0cyBmcm9tIG1hbGljaW91cyBwYWdlcy5cbiAqICAtIHJlZGlyZWN0VXJpICAgICAgICAgICAgICAgICAtIFRoZSByZWRpcmVjdCBVUkkgb2YgdGhlIGFwcGxpY2F0aW9uLCB0aGlzIHNob3VsZCBiZSBzYW1lIGFzIHRoZSB2YWx1ZSBpbiB0aGUgYXBwbGljYXRpb24gcmVnaXN0cmF0aW9uIHBvcnRhbC5EZWZhdWx0cyB0byBgd2luZG93LmxvY2F0aW9uLmhyZWZgLlxuICogIC0gcG9zdExvZ291dFJlZGlyZWN0VXJpICAgICAgIC0gVXNlZCB0byByZWRpcmVjdCB0aGUgdXNlciB0byB0aGlzIGxvY2F0aW9uIGFmdGVyIGxvZ291dC4gRGVmYXVsdHMgdG8gYHdpbmRvdy5sb2NhdGlvbi5ocmVmYC5cbiAqICAtIG5hdmlnYXRlVG9Mb2dpblJlcXVlc3RVcmwgICAtIFVzZWQgdG8gdHVybiBvZmYgZGVmYXVsdCBuYXZpZ2F0aW9uIHRvIHN0YXJ0IHBhZ2UgYWZ0ZXIgbG9naW4uIERlZmF1bHQgaXMgdHJ1ZS4gVGhpcyBpcyB1c2VkIG9ubHkgZm9yIHJlZGlyZWN0IGZsb3dzLlxuICpcbiAqL1xuZXhwb3J0IHR5cGUgQXV0aE9wdGlvbnMgPSB7XG4gICAgY2xpZW50SWQ6IHN0cmluZztcbiAgICBhdXRob3JpdHk/OiBzdHJpbmc7XG4gICAgdmFsaWRhdGVBdXRob3JpdHk/OiBib29sZWFuO1xuICAgIHJlZGlyZWN0VXJpPzogc3RyaW5nIHwgKCgpID0+IHN0cmluZyk7XG4gICAgcG9zdExvZ291dFJlZGlyZWN0VXJpPzogc3RyaW5nIHwgKCgpID0+IHN0cmluZyk7XG4gICAgbmF2aWdhdGVUb0xvZ2luUmVxdWVzdFVybD86IGJvb2xlYW47XG59O1xuXG4vKipcbiAqIFVzZSB0aGlzIHRvIGNvbmZpZ3VyZSB0aGUgYmVsb3cgY2FjaGUgY29uZmlndXJhdGlvbiBvcHRpb25zOlxuICpcbiAqIC0gY2FjaGVMb2NhdGlvbiAgICAgICAgICAgIC0gVXNlZCB0byBzcGVjaWZ5IHRoZSBjYWNoZUxvY2F0aW9uIHVzZXIgd2FudHMgdG8gc2V0LiBWYWxpZCB2YWx1ZXMgYXJlIFwibG9jYWxTdG9yYWdlXCIgYW5kIFwic2Vzc2lvblN0b3JhZ2VcIlxuICogLSBzdG9yZUF1dGhTdGF0ZUluQ29va2llICAgLSBJZiBzZXQsIE1TQUwgc3RvcmUncyB0aGUgYXV0aCByZXF1ZXN0IHN0YXRlIHJlcXVpcmVkIGZvciB2YWxpZGF0aW9uIG9mIHRoZSBhdXRoIGZsb3dzIGluIHRoZSBicm93c2VyIGNvb2tpZXMuIEJ5IGRlZmF1bHQgdGhpcyBmbGFnIGlzIHNldCB0byBmYWxzZS5cbiAqL1xuZXhwb3J0IHR5cGUgQ2FjaGVPcHRpb25zID0ge1xuICAgIGNhY2hlTG9jYXRpb24/OiBDYWNoZUxvY2F0aW9uO1xuICAgIHN0b3JlQXV0aFN0YXRlSW5Db29raWU/OiBib29sZWFuO1xufTtcblxuLyoqXG4gKiBUZWxlbWV0cnkgQ29uZmlnIE9wdGlvbnNcbiAqIC0gYXBwbGljYXRpb25OYW1lICAgICAgICAgICAgICAtIE5hbWUgb2YgdGhlIGNvbnN1bWluZyBhcHBzIGFwcGxpY2F0aW9uXG4gKiAtIGFwcGxpY2F0aW9uVmVyc2lvbiAgICAgICAgICAgLSBWZXJpc29uIG9mIHRoZSBjb25zdW1pbmcgYXBwbGljYXRpb25cbiAqIC0gdGVsZW1ldHJ5RW1pdHRlciAgICAgICAgICAgICAtIEZ1bmN0aW9uIHdoZXJlIHRlbGVtZXRyeSBldmVudHMgYXJlIGZsdXNoZWQgdG9cbiAqL1xuZXhwb3J0IHR5cGUgVGVsZW1ldHJ5T3B0aW9ucyA9IHtcbiAgICBhcHBsaWNhdGlvbk5hbWU6IHN0cmluZztcbiAgICBhcHBsaWNhdGlvblZlcnNpb246IHN0cmluZztcbiAgICB0ZWxlbWV0cnlFbWl0dGVyOiBUZWxlbWV0cnlFbWl0dGVyXG4gICAgLy8gVE9ETywgYWRkIG9ubHlBZGRGYWlsdXJlVGVsZW1ldHJ5IG9wdGlvblxufTtcblxuLyoqXG4gKiBMaWJyYXJ5IFNwZWNpZmljIE9wdGlvbnNcbiAqXG4gKiAtIGxvZ2dlciAgICAgICAgICAgICAgICAgICAgICAgLSBVc2VkIHRvIGluaXRpYWxpemUgdGhlIExvZ2dlciBvYmplY3Q7IFRPRE86IEV4cGFuZCBvbiBsb2dnZXIgZGV0YWlscyBvciBsaW5rIHRvIHRoZSBkb2N1bWVudGF0aW9uIG9uIGxvZ2dlclxuICogLSBsb2FkRnJhbWVUaW1lb3V0ICAgICAgICAgICAgIC0gbWF4aW11bSB0aW1lIHRoZSBsaWJyYXJ5IHNob3VsZCB3YWl0IGZvciBhIGZyYW1lIHRvIGxvYWRcbiAqIC0gdG9rZW5SZW5ld2FsT2Zmc2V0U2Vjb25kcyAgICAtIHNldHMgdGhlIHdpbmRvdyBvZiBvZmZzZXQgbmVlZGVkIHRvIHJlbmV3IHRoZSB0b2tlbiBiZWZvcmUgZXhwaXJ5XG4gKiAtIG5hdmlnYXRlRnJhbWVXYWl0ICAgICAgICAgICAgLSBzZXRzIHRoZSB3YWl0IHRpbWUgZm9yIGhpZGRlbiBpRnJhbWUgbmF2aWdhdGlvblxuICovXG5leHBvcnQgdHlwZSBTeXN0ZW1PcHRpb25zID0ge1xuICAgIGxvZ2dlcj86IExvZ2dlcjtcbiAgICBsb2FkRnJhbWVUaW1lb3V0PzogbnVtYmVyO1xuICAgIHRva2VuUmVuZXdhbE9mZnNldFNlY29uZHM/OiBudW1iZXI7XG4gICAgbmF2aWdhdGVGcmFtZVdhaXQ/OiBudW1iZXI7XG4gICAgdGVsZW1ldHJ5PzogVGVsZW1ldHJ5T3B0aW9uc1xufTtcblxuLyoqXG4gKiBBcHAvRnJhbWV3b3JrIHNwZWNpZmljIGVudmlyb25tZW50IHN1cHBvcnRcbiAqXG4gKiAtIGlzQW5ndWxhciAgICAgICAgICAgICAgICAtIGZsYWcgc2V0IHRvIGRldGVybWluZSBpZiBpdCBpcyBBbmd1bGFyIEZyYW1ld29yay4gTVNBTCB1c2VzIHRoaXMgdG8gYnJvYWRjYXN0IHRva2Vucy4gTW9yZSB0byBjb21lIGhlcmU6IGRldGFuZ2xlIHRoaXMgZGVwZW5kZW5jeSBmcm9tIGNvcmUuXG4gKiAtIHVucHJvdGVjdGVkUmVzb3VyY2VzICAgICAtIEFycmF5IG9mIFVSSSdzIHdoaWNoIGFyZSB1bnByb3RlY3RlZCByZXNvdXJjZXMuIE1TQUwgd2lsbCBub3QgYXR0YWNoIGEgdG9rZW4gdG8gb3V0Z29pbmcgcmVxdWVzdHMgdGhhdCBoYXZlIHRoZXNlIFVSSS4gRGVmYXVsdHMgdG8gJ251bGwnLlxuICogLSBwcm90ZWN0ZWRSZXNvdXJjZU1hcCAgICAgLSBUaGlzIGlzIG1hcHBpbmcgb2YgcmVzb3VyY2VzIHRvIHNjb3BlcyB1c2VkIGJ5IE1TQUwgZm9yIGF1dG9tYXRpY2FsbHkgYXR0YWNoaW5nIGFjY2VzcyB0b2tlbnMgaW4gd2ViIEFQSSBjYWxscy5BIHNpbmdsZSBhY2Nlc3MgdG9rZW4gaXMgb2J0YWluZWQgZm9yIHRoZSByZXNvdXJjZS4gU28geW91IGNhbiBtYXAgYSBzcGVjaWZpYyByZXNvdXJjZSBwYXRoIGFzIGZvbGxvd3M6IHtcImh0dHBzOi8vZ3JhcGgubWljcm9zb2Z0LmNvbS92MS4wL21lXCIsIFtcInVzZXIucmVhZFwiXX0sIG9yIHRoZSBhcHAgVVJMIG9mIHRoZSByZXNvdXJjZSBhczoge1wiaHR0cHM6Ly9ncmFwaC5taWNyb3NvZnQuY29tL1wiLCBbXCJ1c2VyLnJlYWRcIiwgXCJtYWlsLnNlbmRcIl19LiBUaGlzIGlzIHJlcXVpcmVkIGZvciBDT1JTIGNhbGxzLlxuICpcbiAqL1xuZXhwb3J0IHR5cGUgRnJhbWV3b3JrT3B0aW9ucyA9IHtcbiAgICBpc0FuZ3VsYXI/OiBib29sZWFuO1xuICAgIHVucHJvdGVjdGVkUmVzb3VyY2VzPzogQXJyYXk8c3RyaW5nPjtcbiAgICBwcm90ZWN0ZWRSZXNvdXJjZU1hcD86IE1hcDxzdHJpbmcsIEFycmF5PHN0cmluZz4+O1xufTtcblxuLyoqXG4gKiBVc2UgdGhlIGNvbmZpZ3VyYXRpb24gb2JqZWN0IHRvIGNvbmZpZ3VyZSBNU0FMIGFuZCBpbml0aWFsaXplIHRoZSBVc2VyQWdlbnRBcHBsaWNhdGlvbi5cbiAqXG4gKiBUaGlzIG9iamVjdCBhbGxvd3MgeW91IHRvIGNvbmZpZ3VyZSBpbXBvcnRhbnQgZWxlbWVudHMgb2YgTVNBTCBmdW5jdGlvbmFsaXR5OlxuICogLSBhdXRoOiB0aGlzIGlzIHdoZXJlIHlvdSBjb25maWd1cmUgYXV0aCBlbGVtZW50cyBsaWtlIGNsaWVudElELCAgYXV0aG9yaXR5IHVzZWQgZm9yIGF1dGhlbnRpY2F0aW5nIGFnYWluc3QgdGhlIE1pY3Jvc29mdCBJZGVudGl0eSBQbGF0Zm9ybVxuICogLSBjYWNoZTogdGhpcyBpcyB3aGVyZSB5b3UgY29uZmlndXJlIGNhY2hlIGxvY2F0aW9uIGFuZCB3aGV0aGVyIHRvIHN0b3JlIGNhY2hlIGluIGNvb2tpZXNcbiAqIC0gc3lzdGVtOiB0aGlzIGlzIHdoZXJlIHlvdSBjYW4gY29uZmlndXJlIHRoZSBsb2dnZXIsIGZyYW1lIHRpbWVvdXQgZXRjLlxuICogLSBmcmFtZXdvcms6IHRoaXMgaXMgd2hlcmUgeW91IGNhbiBjb25maWd1cmUgdGhlIHJ1bm5pbmcgbW9kZSBvZiBhbmd1bGFyLiBNb3JlIHRvIGNvbWUgaGVyZSBzb29uLlxuICovXG5leHBvcnQgdHlwZSBDb25maWd1cmF0aW9uID0ge1xuICAgIGF1dGg6IEF1dGhPcHRpb25zLFxuICAgIGNhY2hlPzogQ2FjaGVPcHRpb25zLFxuICAgIHN5c3RlbT86IFN5c3RlbU9wdGlvbnMsXG4gICAgZnJhbWV3b3JrPzogRnJhbWV3b3JrT3B0aW9uc1xufTtcblxuY29uc3QgREVGQVVMVF9BVVRIX09QVElPTlM6IEF1dGhPcHRpb25zID0ge1xuICAgIGNsaWVudElkOiBcIlwiLFxuICAgIGF1dGhvcml0eTogbnVsbCxcbiAgICB2YWxpZGF0ZUF1dGhvcml0eTogdHJ1ZSxcbiAgICByZWRpcmVjdFVyaTogKCkgPT4gVXJsVXRpbHMuZ2V0RGVmYXVsdFJlZGlyZWN0VXJpKCksXG4gICAgcG9zdExvZ291dFJlZGlyZWN0VXJpOiAoKSA9PiBVcmxVdGlscy5nZXREZWZhdWx0UmVkaXJlY3RVcmkoKSxcbiAgICBuYXZpZ2F0ZVRvTG9naW5SZXF1ZXN0VXJsOiB0cnVlXG59O1xuXG5jb25zdCBERUZBVUxUX0NBQ0hFX09QVElPTlM6IENhY2hlT3B0aW9ucyA9IHtcbiAgICBjYWNoZUxvY2F0aW9uOiBcInNlc3Npb25TdG9yYWdlXCIsXG4gICAgc3RvcmVBdXRoU3RhdGVJbkNvb2tpZTogZmFsc2Vcbn07XG5cbmNvbnN0IERFRkFVTFRfU1lTVEVNX09QVElPTlM6IFN5c3RlbU9wdGlvbnMgPSB7XG4gICAgbG9nZ2VyOiBuZXcgTG9nZ2VyKG51bGwpLFxuICAgIGxvYWRGcmFtZVRpbWVvdXQ6IEZSQU1FX1RJTUVPVVQsXG4gICAgdG9rZW5SZW5ld2FsT2Zmc2V0U2Vjb25kczogT0ZGU0VULFxuICAgIG5hdmlnYXRlRnJhbWVXYWl0OiBOQVZJR0FURV9GUkFNRV9XQUlUXG59O1xuXG5jb25zdCBERUZBVUxUX0ZSQU1FV09SS19PUFRJT05TOiBGcmFtZXdvcmtPcHRpb25zID0ge1xuICAgIGlzQW5ndWxhcjogZmFsc2UsXG4gICAgdW5wcm90ZWN0ZWRSZXNvdXJjZXM6IG5ldyBBcnJheTxzdHJpbmc+KCksXG4gICAgcHJvdGVjdGVkUmVzb3VyY2VNYXA6IG5ldyBNYXA8c3RyaW5nLCBBcnJheTxzdHJpbmc+PigpXG59O1xuXG4vKipcbiAqIE1TQUwgZnVuY3Rpb24gdGhhdCBzZXRzIHRoZSBkZWZhdWx0IG9wdGlvbnMgd2hlbiBub3QgZXhwbGljaXRseSBjb25maWd1cmVkIGZyb20gYXBwIGRldmVsb3BlclxuICpcbiAqIEBwYXJhbSBUQXV0aE9wdGlvbnNcbiAqIEBwYXJhbSBUQ2FjaGVPcHRpb25zXG4gKiBAcGFyYW0gVFN5c3RlbU9wdGlvbnNcbiAqIEBwYXJhbSBURnJhbWV3b3JrT3B0aW9uc1xuICpcbiAqIEByZXR1cm5zIFRDb25maWd1cmF0aW9uIG9iamVjdFxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBidWlsZENvbmZpZ3VyYXRpb24oeyBhdXRoLCBjYWNoZSA9IHt9LCBzeXN0ZW0gPSB7fSwgZnJhbWV3b3JrID0ge319OiBDb25maWd1cmF0aW9uKTogQ29uZmlndXJhdGlvbiB7XG4gICAgY29uc3Qgb3ZlcmxheWVkQ29uZmlnOiBDb25maWd1cmF0aW9uID0ge1xuICAgICAgICBhdXRoOiB7IC4uLkRFRkFVTFRfQVVUSF9PUFRJT05TLCAuLi5hdXRoIH0sXG4gICAgICAgIGNhY2hlOiB7IC4uLkRFRkFVTFRfQ0FDSEVfT1BUSU9OUywgLi4uY2FjaGUgfSxcbiAgICAgICAgc3lzdGVtOiB7IC4uLkRFRkFVTFRfU1lTVEVNX09QVElPTlMsIC4uLnN5c3RlbSB9LFxuICAgICAgICBmcmFtZXdvcms6IHsgLi4uREVGQVVMVF9GUkFNRVdPUktfT1BUSU9OUywgLi4uZnJhbWV3b3JrIH1cbiAgICB9O1xuICAgIHJldHVybiBvdmVybGF5ZWRDb25maWc7XG59XG5cbiIsIi8qXG4gKiBDb3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cbiAqL1xuXG5pbXBvcnQgeyBTZXJ2ZXJFcnJvciB9IGZyb20gXCIuL1NlcnZlckVycm9yXCI7XG5cbmV4cG9ydCBjb25zdCBJbnRlcmFjdGlvblJlcXVpcmVkQXV0aEVycm9yTWVzc2FnZSA9IHtcbiAgICBpbnRlcmFjdGlvblJlcXVpcmVkOiB7XG4gICAgICAgIGNvZGU6IFwiaW50ZXJhY3Rpb25fcmVxdWlyZWRcIlxuICAgIH0sXG4gICAgY29uc2VudFJlcXVpcmVkOiB7XG4gICAgICAgIGNvZGU6IFwiY29uc2VudF9yZXF1aXJlZFwiXG4gICAgfSxcbiAgICBsb2dpblJlcXVpcmVkOiB7XG4gICAgICAgIGNvZGU6IFwibG9naW5fcmVxdWlyZWRcIlxuICAgIH0sXG59O1xuXG4vKipcbiAqIEVycm9yIHRocm93biB3aGVuIHRoZSB1c2VyIGlzIHJlcXVpcmVkIHRvIHBlcmZvcm0gYW4gaW50ZXJhY3RpdmUgdG9rZW4gcmVxdWVzdC5cbiAqL1xuZXhwb3J0IGNsYXNzIEludGVyYWN0aW9uUmVxdWlyZWRBdXRoRXJyb3IgZXh0ZW5kcyBTZXJ2ZXJFcnJvciB7XG5cbiAgICBjb25zdHJ1Y3RvcihlcnJvckNvZGU6IHN0cmluZywgZXJyb3JNZXNzYWdlPzogc3RyaW5nKSB7XG4gICAgICAgIHN1cGVyKGVycm9yQ29kZSwgZXJyb3JNZXNzYWdlKTtcbiAgICAgICAgdGhpcy5uYW1lID0gXCJJbnRlcmFjdGlvblJlcXVpcmVkQXV0aEVycm9yXCI7XG5cbiAgICAgICAgT2JqZWN0LnNldFByb3RvdHlwZU9mKHRoaXMsIEludGVyYWN0aW9uUmVxdWlyZWRBdXRoRXJyb3IucHJvdG90eXBlKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgaXNJbnRlcmFjdGlvblJlcXVpcmVkRXJyb3IoZXJyb3JTdHJpbmc6IHN0cmluZykgOiBib29sZWFuIHtcbiAgICAgICAgY29uc3QgaW50ZXJhY3Rpb25SZXF1aXJlZENvZGVzID0gW1xuICAgICAgICAgICAgSW50ZXJhY3Rpb25SZXF1aXJlZEF1dGhFcnJvck1lc3NhZ2UuaW50ZXJhY3Rpb25SZXF1aXJlZC5jb2RlLFxuICAgICAgICAgICAgSW50ZXJhY3Rpb25SZXF1aXJlZEF1dGhFcnJvck1lc3NhZ2UuY29uc2VudFJlcXVpcmVkLmNvZGUsXG4gICAgICAgICAgICBJbnRlcmFjdGlvblJlcXVpcmVkQXV0aEVycm9yTWVzc2FnZS5sb2dpblJlcXVpcmVkLmNvZGVcbiAgICAgICAgXTtcblxuICAgICAgICByZXR1cm4gZXJyb3JTdHJpbmcgJiYgaW50ZXJhY3Rpb25SZXF1aXJlZENvZGVzLmluZGV4T2YoZXJyb3JTdHJpbmcpID4gLTE7XG4gICAgfVxuXG4gICAgc3RhdGljIGNyZWF0ZUxvZ2luUmVxdWlyZWRBdXRoRXJyb3IoZXJyb3JEZXNjOiBzdHJpbmcpOiBJbnRlcmFjdGlvblJlcXVpcmVkQXV0aEVycm9yIHtcbiAgICAgICAgcmV0dXJuIG5ldyBJbnRlcmFjdGlvblJlcXVpcmVkQXV0aEVycm9yKEludGVyYWN0aW9uUmVxdWlyZWRBdXRoRXJyb3JNZXNzYWdlLmxvZ2luUmVxdWlyZWQuY29kZSwgZXJyb3JEZXNjKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgY3JlYXRlSW50ZXJhY3Rpb25SZXF1aXJlZEF1dGhFcnJvcihlcnJvckRlc2M6IHN0cmluZyk6IEludGVyYWN0aW9uUmVxdWlyZWRBdXRoRXJyb3Ige1xuICAgICAgICByZXR1cm4gbmV3IEludGVyYWN0aW9uUmVxdWlyZWRBdXRoRXJyb3IoSW50ZXJhY3Rpb25SZXF1aXJlZEF1dGhFcnJvck1lc3NhZ2UuaW50ZXJhY3Rpb25SZXF1aXJlZC5jb2RlLCBlcnJvckRlc2MpO1xuICAgIH1cblxuICAgIHN0YXRpYyBjcmVhdGVDb25zZW50UmVxdWlyZWRBdXRoRXJyb3IoZXJyb3JEZXNjOiBzdHJpbmcpOiBJbnRlcmFjdGlvblJlcXVpcmVkQXV0aEVycm9yIHtcbiAgICAgICAgcmV0dXJuIG5ldyBJbnRlcmFjdGlvblJlcXVpcmVkQXV0aEVycm9yKEludGVyYWN0aW9uUmVxdWlyZWRBdXRoRXJyb3JNZXNzYWdlLmNvbnNlbnRSZXF1aXJlZC5jb2RlLCBlcnJvckRlc2MpO1xuICAgIH1cbn1cbiIsIi8qXG4gKiBDb3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cbiAqL1xuXG5pbXBvcnQgeyBBY2NvdW50IH0gZnJvbSBcIi4vQWNjb3VudFwiO1xuaW1wb3J0IHsgSWRUb2tlbiB9IGZyb20gXCIuL0lkVG9rZW5cIjtcbmltcG9ydCB7IFN0cmluZ0RpY3QgfSBmcm9tIFwiLi9Nc2FsVHlwZXNcIjtcblxuZXhwb3J0IHR5cGUgQXV0aFJlc3BvbnNlID0ge1xuICAgIHVuaXF1ZUlkOiBzdHJpbmc7XG4gICAgdGVuYW50SWQ6IHN0cmluZztcbiAgICB0b2tlblR5cGU6IHN0cmluZztcbiAgICBpZFRva2VuOiBJZFRva2VuO1xuICAgIGlkVG9rZW5DbGFpbXM6IFN0cmluZ0RpY3Q7XG4gICAgYWNjZXNzVG9rZW46IHN0cmluZztcbiAgICBzY29wZXM6IEFycmF5PHN0cmluZz47XG4gICAgZXhwaXJlc09uOiBEYXRlO1xuICAgIGFjY291bnQ6IEFjY291bnQ7XG4gICAgYWNjb3VudFN0YXRlOiBzdHJpbmc7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gYnVpbGRSZXNwb25zZVN0YXRlT25seShzdGF0ZTogc3RyaW5nKSA6IEF1dGhSZXNwb25zZSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdW5pcXVlSWQ6IFwiXCIsXG4gICAgICAgIHRlbmFudElkOiBcIlwiLFxuICAgICAgICB0b2tlblR5cGU6IFwiXCIsXG4gICAgICAgIGlkVG9rZW46IG51bGwsXG4gICAgICAgIGlkVG9rZW5DbGFpbXM6IG51bGwsXG4gICAgICAgIGFjY2Vzc1Rva2VuOiBcIlwiLFxuICAgICAgICBzY29wZXM6IG51bGwsXG4gICAgICAgIGV4cGlyZXNPbjogbnVsbCxcbiAgICAgICAgYWNjb3VudDogbnVsbCxcbiAgICAgICAgYWNjb3VudFN0YXRlOiBzdGF0ZVxuICAgIH07XG59XG4iLCJpbXBvcnQgeyBCMmNBdXRob3JpdHkgfSBmcm9tIFwiLi4vYXV0aG9yaXR5L0IyY0F1dGhvcml0eVwiO1xuaW1wb3J0IHsgQUFEVHJ1c3RlZEhvc3RMaXN0IH0gZnJvbSBcIi4uL3V0aWxzL0NvbnN0YW50c1wiO1xuaW1wb3J0IHsgVEVOQU5UX1BMQUNFSE9MREVSLCBFVkVOVF9OQU1FX1BSRUZJWCB9IGZyb20gXCIuL1RlbGVtZXRyeUNvbnN0YW50c1wiO1xuaW1wb3J0IHsgQ3J5cHRvVXRpbHMgfSBmcm9tIFwiLi4vdXRpbHMvQ3J5cHRvVXRpbHNcIjtcbmltcG9ydCB7IFVybFV0aWxzIH0gZnJvbSBcIi4uL3V0aWxzL1VybFV0aWxzXCI7XG5cbmV4cG9ydCBjb25zdCBzY3J1YlRlbmFudEZyb21VcmkgPSAodXJpOiBzdHJpbmcpOiBTdHJpbmcgPT4ge1xuXG4gICAgY29uc3QgdXJsID0gVXJsVXRpbHMuR2V0VXJsQ29tcG9uZW50cyh1cmkpO1xuXG4gICAgLy8gdmFsaWRhdGUgdHJ1c3RlZCBob3N0XG4gICAgaWYgKCFBQURUcnVzdGVkSG9zdExpc3RbdXJsLkhvc3ROYW1lQW5kUG9ydC50b0xvY2FsZUxvd2VyQ2FzZSgpXSkge1xuICAgICAgICAvLyBTaG91bGQgdGhpcyByZXR1cm4gbnVsbCBvciB3aGF0IHdhcyBwYXNzZWQ/XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGNvbnN0IHBhdGhQYXJhbXMgPSB1cmwuUGF0aFNlZ21lbnRzO1xuXG4gICAgaWYgKHBhdGhQYXJhbXMgJiYgcGF0aFBhcmFtcy5sZW5ndGggPj0gMikge1xuICAgICAgICBjb25zdCB0ZW5hbnRQb3NpdGlvbiA9IHBhdGhQYXJhbXNbMV0gPT09ICBCMmNBdXRob3JpdHkuQjJDX1BSRUZJWCA/IDIgOiAxO1xuICAgICAgICBpZiAodGVuYW50UG9zaXRpb24gPCBwYXRoUGFyYW1zLmxlbmd0aCkge1xuICAgICAgICAgICAgcGF0aFBhcmFtc1t0ZW5hbnRQb3NpdGlvbl0gPSBURU5BTlRfUExBQ0VIT0xERVI7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gIGAke3VybC5Qcm90b2NvbH0vLyR7dXJsLkhvc3ROYW1lQW5kUG9ydH0vJHtwYXRoUGFyYW1zLmpvaW4oXCIvXCIpfWA7XG59O1xuXG5leHBvcnQgY29uc3QgaGFzaFBlcnNvbmFsSWRlbnRpZmllciA9ICh2YWx1ZVRvSGFzaDogc3RyaW5nKSA9PiB7XG4gICAgLypcbiAgICAgKiBUT0RPIHNoYTI1NiB0aGlzXG4gICAgICogQ3VycmVudCB0ZXN0IHJ1bm5lciBpcyBiZWluZyBmdW5ueSB3aXRoIG5vZGUgbGlicyB0aGF0IGFyZSB3ZWJwYWNrZWQgYW55d2F5XG4gICAgICogbmVlZCBhIGRpZmZlcmVudCBzb2x1dGlvblxuICAgICAqL1xuICAgIHJldHVybiBDcnlwdG9VdGlscy5iYXNlNjRFbmNvZGUodmFsdWVUb0hhc2gpO1xufTtcblxuZXhwb3J0IGNvbnN0IHByZXBlbmRFdmVudE5hbWVQcmVmaXggPSAoc3VmZml4OiBzdHJpbmcpOiBzdHJpbmcgPT4gYCR7RVZFTlRfTkFNRV9QUkVGSVh9JHtzdWZmaXggfHwgXCJcIn1gO1xuIiwiZXhwb3J0IHsgVXNlckFnZW50QXBwbGljYXRpb24gfSBmcm9tIFwiLi9Vc2VyQWdlbnRBcHBsaWNhdGlvblwiO1xuZXhwb3J0IHsgTG9nZ2VyIH0gZnJvbSBcIi4vTG9nZ2VyXCI7XG5leHBvcnQgeyBMb2dMZXZlbCB9IGZyb20gXCIuL0xvZ2dlclwiO1xuZXhwb3J0IHsgQWNjb3VudCB9IGZyb20gXCIuL0FjY291bnRcIjtcbmV4cG9ydCB7IENvbnN0YW50cyB9IGZyb20gXCIuL3V0aWxzL0NvbnN0YW50c1wiO1xuZXhwb3J0IHsgQXV0aG9yaXR5IH0gZnJvbSBcIi4vYXV0aG9yaXR5L0F1dGhvcml0eVwiO1xuZXhwb3J0IHsgQ2FjaGVSZXN1bHQgfSBmcm9tIFwiLi9Vc2VyQWdlbnRBcHBsaWNhdGlvblwiO1xuZXhwb3J0IHsgQ2FjaGVMb2NhdGlvbiwgQ29uZmlndXJhdGlvbiB9IGZyb20gXCIuL0NvbmZpZ3VyYXRpb25cIjtcbmV4cG9ydCB7IEF1dGhlbnRpY2F0aW9uUGFyYW1ldGVycyB9IGZyb20gXCIuL0F1dGhlbnRpY2F0aW9uUGFyYW1ldGVyc1wiO1xuZXhwb3J0IHsgQXV0aFJlc3BvbnNlIH0gZnJvbSBcIi4vQXV0aFJlc3BvbnNlXCI7XG5cbi8vIEVycm9yc1xuZXhwb3J0IHsgQXV0aEVycm9yIH0gZnJvbSBcIi4vZXJyb3IvQXV0aEVycm9yXCI7XG5leHBvcnQgeyBDbGllbnRBdXRoRXJyb3IgfSBmcm9tIFwiLi9lcnJvci9DbGllbnRBdXRoRXJyb3JcIjtcbmV4cG9ydCB7IFNlcnZlckVycm9yIH0gZnJvbSBcIi4vZXJyb3IvU2VydmVyRXJyb3JcIjtcbmV4cG9ydCB7IENsaWVudENvbmZpZ3VyYXRpb25FcnJvciB9IGZyb20gXCIuL2Vycm9yL0NsaWVudENvbmZpZ3VyYXRpb25FcnJvclwiO1xuZXhwb3J0IHsgSW50ZXJhY3Rpb25SZXF1aXJlZEF1dGhFcnJvciB9IGZyb20gXCIuL2Vycm9yL0ludGVyYWN0aW9uUmVxdWlyZWRBdXRoRXJyb3JcIjtcbiIsIi8qXG4gKiBDb3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cbiAqL1xuXG5pbXBvcnQgeyBDcnlwdG9VdGlscyB9IGZyb20gXCIuL3V0aWxzL0NyeXB0b1V0aWxzXCI7XG5pbXBvcnQgeyBVcmxVdGlscyB9IGZyb20gXCIuL3V0aWxzL1VybFV0aWxzXCI7XG5cbi8qKlxuICogQGhpZGRlblxuICovXG5leHBvcnQgY2xhc3MgQWNjZXNzVG9rZW5LZXkge1xuXG4gICAgYXV0aG9yaXR5OiBzdHJpbmc7XG4gICAgY2xpZW50SWQ6IHN0cmluZztcbiAgICBzY29wZXM6IHN0cmluZztcbiAgICBob21lQWNjb3VudElkZW50aWZpZXI6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKGF1dGhvcml0eTogc3RyaW5nLCBjbGllbnRJZDogc3RyaW5nLCBzY29wZXM6IHN0cmluZywgdWlkOiBzdHJpbmcsIHV0aWQ6IHN0cmluZykge1xuICAgICAgICB0aGlzLmF1dGhvcml0eSA9IFVybFV0aWxzLkNhbm9uaWNhbGl6ZVVyaShhdXRob3JpdHkpO1xuICAgICAgICB0aGlzLmNsaWVudElkID0gY2xpZW50SWQ7XG4gICAgICAgIHRoaXMuc2NvcGVzID0gc2NvcGVzO1xuICAgICAgICB0aGlzLmhvbWVBY2NvdW50SWRlbnRpZmllciA9IENyeXB0b1V0aWxzLmJhc2U2NEVuY29kZSh1aWQpICsgXCIuXCIgKyBDcnlwdG9VdGlscy5iYXNlNjRFbmNvZGUodXRpZCk7XG4gICAgfVxufVxuIiwiLypcbiAqIENvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxuICovXG5cbi8qKlxuICogQGhpZGRlblxuICovXG5leHBvcnQgY2xhc3MgQWNjZXNzVG9rZW5WYWx1ZSB7XG5cbiAgICBhY2Nlc3NUb2tlbjogc3RyaW5nO1xuICAgIGlkVG9rZW46IHN0cmluZztcbiAgICBleHBpcmVzSW46IHN0cmluZztcbiAgICBob21lQWNjb3VudElkZW50aWZpZXI6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKGFjY2Vzc1Rva2VuOiBzdHJpbmcsIGlkVG9rZW46IHN0cmluZywgZXhwaXJlc0luOiBzdHJpbmcsIGhvbWVBY2NvdW50SWRlbnRpZmllcjogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMuYWNjZXNzVG9rZW4gPSBhY2Nlc3NUb2tlbjtcbiAgICAgICAgdGhpcy5pZFRva2VuID0gaWRUb2tlbjtcbiAgICAgICAgdGhpcy5leHBpcmVzSW4gPSBleHBpcmVzSW47XG4gICAgICAgIHRoaXMuaG9tZUFjY291bnRJZGVudGlmaWVyID0gaG9tZUFjY291bnRJZGVudGlmaWVyO1xuICAgIH1cbn1cbiIsIi8qXG4gKiBDb3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cbiAqL1xuXG5pbXBvcnQgeyBBdXRob3JpdHkgfSBmcm9tIFwiLi9hdXRob3JpdHkvQXV0aG9yaXR5XCI7XG5pbXBvcnQgeyBDcnlwdG9VdGlscyB9IGZyb20gXCIuL3V0aWxzL0NyeXB0b1V0aWxzXCI7XG5pbXBvcnQgeyBBdXRoZW50aWNhdGlvblBhcmFtZXRlcnMsIHZhbGlkYXRlQ2xhaW1zUmVxdWVzdCB9IGZyb20gXCIuL0F1dGhlbnRpY2F0aW9uUGFyYW1ldGVyc1wiO1xuaW1wb3J0IHsgU3RyaW5nRGljdCB9IGZyb20gXCIuL01zYWxUeXBlc1wiO1xuaW1wb3J0IHsgQWNjb3VudCB9IGZyb20gXCIuL0FjY291bnRcIjtcbmltcG9ydCB7IFNTT1R5cGVzLCBDb25zdGFudHMsIFByb21wdFN0YXRlLCBCbGFja2xpc3RlZEVRUGFyYW1zLCBsaWJyYXJ5VmVyc2lvbiB9IGZyb20gXCIuL3V0aWxzL0NvbnN0YW50c1wiO1xuaW1wb3J0IHsgQ2xpZW50Q29uZmlndXJhdGlvbkVycm9yIH0gZnJvbSBcIi4vZXJyb3IvQ2xpZW50Q29uZmlndXJhdGlvbkVycm9yXCI7XG5pbXBvcnQgeyBTdHJpbmdVdGlscyB9IGZyb20gXCIuL3V0aWxzL1N0cmluZ1V0aWxzXCI7XG5cbi8qKlxuICogTm9uY2U6IE9JREMgTm9uY2UgZGVmaW5pdGlvbjogaHR0cHM6Ly9vcGVuaWQubmV0L3NwZWNzL29wZW5pZC1jb25uZWN0LWNvcmUtMV8wLmh0bWwjSURUb2tlblxuICogU3RhdGU6IE9BdXRoIFNwZWM6IGh0dHBzOi8vdG9vbHMuaWV0Zi5vcmcvaHRtbC9yZmM2NzQ5I3NlY3Rpb24tMTAuMTJcbiAqIEBoaWRkZW5cbiAqL1xuZXhwb3J0IGNsYXNzIFNlcnZlclJlcXVlc3RQYXJhbWV0ZXJzIHtcblxuICAgIGF1dGhvcml0eUluc3RhbmNlOiBBdXRob3JpdHk7XG4gICAgY2xpZW50SWQ6IHN0cmluZztcbiAgICBzY29wZXM6IEFycmF5PHN0cmluZz47XG5cbiAgICBub25jZTogc3RyaW5nO1xuICAgIHN0YXRlOiBzdHJpbmc7XG5cbiAgICAvLyB0ZWxlbWV0cnkgaW5mb3JtYXRpb25cbiAgICB4Q2xpZW50VmVyOiBzdHJpbmc7XG4gICAgeENsaWVudFNrdTogc3RyaW5nO1xuICAgIGNvcnJlbGF0aW9uSWQ6IHN0cmluZztcblxuICAgIHJlc3BvbnNlVHlwZTogc3RyaW5nO1xuICAgIHJlZGlyZWN0VXJpOiBzdHJpbmc7XG5cbiAgICBwcm9tcHRWYWx1ZTogc3RyaW5nO1xuICAgIGNsYWltc1ZhbHVlOiBzdHJpbmc7XG5cbiAgICBxdWVyeVBhcmFtZXRlcnM6IHN0cmluZztcbiAgICBleHRyYVF1ZXJ5UGFyYW1ldGVyczogc3RyaW5nO1xuXG4gICAgcHVibGljIGdldCBhdXRob3JpdHkoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYXV0aG9yaXR5SW5zdGFuY2UgPyB0aGlzLmF1dGhvcml0eUluc3RhbmNlLkNhbm9uaWNhbEF1dGhvcml0eSA6IG51bGw7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ29uc3RydWN0b3JcbiAgICAgKiBAcGFyYW0gYXV0aG9yaXR5XG4gICAgICogQHBhcmFtIGNsaWVudElkXG4gICAgICogQHBhcmFtIHNjb3BlXG4gICAgICogQHBhcmFtIHJlc3BvbnNlVHlwZVxuICAgICAqIEBwYXJhbSByZWRpcmVjdFVyaVxuICAgICAqIEBwYXJhbSBzdGF0ZVxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yIChhdXRob3JpdHk6IEF1dGhvcml0eSwgY2xpZW50SWQ6IHN0cmluZywgc2NvcGU6IEFycmF5PHN0cmluZz4sIHJlc3BvbnNlVHlwZTogc3RyaW5nLCByZWRpcmVjdFVyaTogc3RyaW5nLCBzdGF0ZTogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMuYXV0aG9yaXR5SW5zdGFuY2UgPSBhdXRob3JpdHk7XG4gICAgICAgIHRoaXMuY2xpZW50SWQgPSBjbGllbnRJZDtcbiAgICAgICAgaWYgKCFzY29wZSkge1xuICAgICAgICAgICAgdGhpcy5zY29wZXMgPSBbY2xpZW50SWRdO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zY29wZXMgPSBbIC4uLnNjb3BlIF07XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLm5vbmNlID0gQ3J5cHRvVXRpbHMuY3JlYXRlTmV3R3VpZCgpO1xuICAgICAgICB0aGlzLnN0YXRlID0gc3RhdGUgJiYgIVN0cmluZ1V0aWxzLmlzRW1wdHkoc3RhdGUpID8gIENyeXB0b1V0aWxzLmNyZWF0ZU5ld0d1aWQoKSArIFwifFwiICsgc3RhdGUgICA6IENyeXB0b1V0aWxzLmNyZWF0ZU5ld0d1aWQoKTtcblxuICAgICAgICAvLyBUT0RPOiBDaGFuZ2UgdGhpcyB0byB1c2VyIHBhc3NlZCB2cyBnZW5lcmF0ZWQgd2l0aCB0aGUgbmV3IFBSXG4gICAgICAgIHRoaXMuY29ycmVsYXRpb25JZCA9IENyeXB0b1V0aWxzLmNyZWF0ZU5ld0d1aWQoKTtcblxuICAgICAgICAvLyB0ZWxlbWV0cnkgaW5mb3JtYXRpb25cbiAgICAgICAgdGhpcy54Q2xpZW50U2t1ID0gXCJNU0FMLkpTXCI7XG4gICAgICAgIHRoaXMueENsaWVudFZlciA9IGxpYnJhcnlWZXJzaW9uKCk7XG5cbiAgICAgICAgdGhpcy5yZXNwb25zZVR5cGUgPSByZXNwb25zZVR5cGU7XG4gICAgICAgIHRoaXMucmVkaXJlY3RVcmkgPSByZWRpcmVjdFVyaTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICogQGlnbm9yZVxuICAgICAqXG4gICAgICogVXRpbGl0eSB0byBwb3B1bGF0ZSBRdWVyeVBhcmFtZXRlcnMgYW5kIEV4dHJhUXVlcnlQYXJhbWV0ZXJzIHRvIFNlcnZlclJlcXVlc3RQYXJhbWVyZXJzXG4gICAgICogQHBhcmFtIHJlcXVlc3RcbiAgICAgKiBAcGFyYW0gc2VydmVyQXV0aGVudGljYXRpb25SZXF1ZXN0XG4gICAgICovXG4gICAgcG9wdWxhdGVRdWVyeVBhcmFtcyhhY2NvdW50OiBBY2NvdW50LCByZXF1ZXN0OiBBdXRoZW50aWNhdGlvblBhcmFtZXRlcnMsIGFkYWxJZFRva2VuT2JqZWN0PzogYW55KTogdm9pZCB7XG4gICAgICAgIGxldCBxdWVyeVBhcmFtZXRlcnM6IFN0cmluZ0RpY3QgPSB7fTtcblxuICAgICAgICBpZiAocmVxdWVzdCkge1xuICAgICAgICAgICAgLy8gYWRkIHRoZSBwcm9tcHQgcGFyYW1ldGVyIHRvIHNlcnZlclJlcXVlc3RQYXJhbWV0ZXJzIGlmIHBhc3NlZFxuICAgICAgICAgICAgaWYgKHJlcXVlc3QucHJvbXB0KSB7XG4gICAgICAgICAgICAgICAgdGhpcy52YWxpZGF0ZVByb21wdFBhcmFtZXRlcihyZXF1ZXN0LnByb21wdCk7XG4gICAgICAgICAgICAgICAgdGhpcy5wcm9tcHRWYWx1ZSA9IHJlcXVlc3QucHJvbXB0O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBBZGQgY2xhaW1zIGNoYWxsZW5nZSB0byBzZXJ2ZXJSZXF1ZXN0UGFyYW1ldGVycyBpZiBwYXNzZWRcbiAgICAgICAgICAgIGlmIChyZXF1ZXN0LmNsYWltc1JlcXVlc3QpIHtcbiAgICAgICAgICAgICAgICB2YWxpZGF0ZUNsYWltc1JlcXVlc3QocmVxdWVzdCk7XG4gICAgICAgICAgICAgICAgdGhpcy5jbGFpbXNWYWx1ZSA9IHJlcXVlc3QuY2xhaW1zUmVxdWVzdDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gaWYgdGhlIGRldmVsb3BlciBwcm92aWRlcyBvbmUgb2YgdGhlc2UsIGdpdmUgcHJlZmVyZW5jZSB0byBkZXZlbG9wZXIgY2hvaWNlXG4gICAgICAgICAgICBpZiAoU2VydmVyUmVxdWVzdFBhcmFtZXRlcnMuaXNTU09QYXJhbShyZXF1ZXN0KSkge1xuICAgICAgICAgICAgICAgIHF1ZXJ5UGFyYW1ldGVycyA9IHRoaXMuY29uc3RydWN0VW5pZmllZENhY2hlUXVlcnlQYXJhbWV0ZXIocmVxdWVzdCwgbnVsbCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoYWRhbElkVG9rZW5PYmplY3QpIHtcbiAgICAgICAgICAgIHF1ZXJ5UGFyYW1ldGVycyA9IHRoaXMuY29uc3RydWN0VW5pZmllZENhY2hlUXVlcnlQYXJhbWV0ZXIobnVsbCwgYWRhbElkVG9rZW5PYmplY3QpO1xuICAgICAgICB9XG5cbiAgICAgICAgLypcbiAgICAgICAgICogYWRkcyBzaWQvbG9naW5faGludCBpZiBub3QgcG9wdWxhdGVkOyBwb3B1bGF0ZXMgZG9tYWluX3JlcSwgbG9naW5fcmVxIGFuZCBkb21haW5faGludFxuICAgICAgICAgKiB0aGlzLmxvZ2dlci52ZXJib3NlKFwiQ2FsbGluZyBhZGRIaW50IHBhcmFtZXRlcnNcIik7XG4gICAgICAgICAqL1xuICAgICAgICBxdWVyeVBhcmFtZXRlcnMgPSB0aGlzLmFkZEhpbnRQYXJhbWV0ZXJzKGFjY291bnQsIHF1ZXJ5UGFyYW1ldGVycyk7XG5cbiAgICAgICAgLy8gc2FuaXR5IGNoZWNrIGZvciBkZXZlbG9wZXIgcGFzc2VkIGV4dHJhUXVlcnlQYXJhbWV0ZXJzXG4gICAgICAgIGxldCBlUVBhcmFtczogU3RyaW5nRGljdDtcbiAgICAgICAgaWYgKHJlcXVlc3QpIHtcbiAgICAgICAgICAgIGVRUGFyYW1zID0gdGhpcy5zYW5pdGl6ZUVRUGFyYW1zKHJlcXVlc3QpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gUG9wdWxhdGUgdGhlIGV4dHJhUXVlcnlQYXJhbWV0ZXJzIHRvIGJlIHNlbnQgdG8gdGhlIHNlcnZlclxuICAgICAgICB0aGlzLnF1ZXJ5UGFyYW1ldGVycyA9IFNlcnZlclJlcXVlc3RQYXJhbWV0ZXJzLmdlbmVyYXRlUXVlcnlQYXJhbWV0ZXJzU3RyaW5nKHF1ZXJ5UGFyYW1ldGVycyk7XG4gICAgICAgIHRoaXMuZXh0cmFRdWVyeVBhcmFtZXRlcnMgPSBTZXJ2ZXJSZXF1ZXN0UGFyYW1ldGVycy5nZW5lcmF0ZVF1ZXJ5UGFyYW1ldGVyc1N0cmluZyhlUVBhcmFtcyk7XG4gICAgfVxuXG4gICAgLy8gI3JlZ2lvbiBRdWVyeVBhcmFtIGhlbHBlcnNcblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKiBAaWdub3JlXG4gICAgICpcbiAgICAgKiBVdGlsaXR5IHRvIHRlc3QgaWYgdmFsaWQgcHJvbXB0IHZhbHVlIGlzIHBhc3NlZCBpbiB0aGUgcmVxdWVzdFxuICAgICAqIEBwYXJhbSByZXF1ZXN0XG4gICAgICovXG4gICAgcHJpdmF0ZSB2YWxpZGF0ZVByb21wdFBhcmFtZXRlciAocHJvbXB0OiBzdHJpbmcpIHtcbiAgICAgICAgaWYgKCEoW1Byb21wdFN0YXRlLkxPR0lOLCBQcm9tcHRTdGF0ZS5TRUxFQ1RfQUNDT1VOVCwgUHJvbXB0U3RhdGUuQ09OU0VOVCwgUHJvbXB0U3RhdGUuTk9ORV0uaW5kZXhPZihwcm9tcHQpID49IDApKSB7XG4gICAgICAgICAgICB0aHJvdyBDbGllbnRDb25maWd1cmF0aW9uRXJyb3IuY3JlYXRlSW52YWxpZFByb21wdEVycm9yKHByb21wdCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDb25zdHJ1Y3RzIGV4dHJhUXVlcnlQYXJhbWV0ZXJzIHRvIGJlIHNlbnQgdG8gdGhlIHNlcnZlciBmb3IgdGhlIEF1dGhlbnRpY2F0aW9uUGFyYW1ldGVycyBzZXQgYnkgdGhlIGRldmVsb3BlclxuICAgICAqIGluIGFueSBsb2dpbigpIG9yIGFjcXVpcmVUb2tlbigpIGNhbGxzXG4gICAgICogQHBhcmFtIGlkVG9rZW5PYmplY3RcbiAgICAgKiBAcGFyYW0gZXh0cmFRdWVyeVBhcmFtZXRlcnNcbiAgICAgKiBAcGFyYW0gc2lkXG4gICAgICogQHBhcmFtIGxvZ2luSGludFxuICAgICAqL1xuICAgIC8vIFRPRE86IGNoZWNrIGhvdyB0aGlzIGJlaGF2ZXMgd2hlbiBkb21haW5faGludCBvbmx5IGlzIHNlbnQgaW4gZXh0cmFwYXJhbWV0ZXJzIGFuZCBpZFRva2VuIGhhcyBubyB1cG4uXG4gICAgcHJpdmF0ZSBjb25zdHJ1Y3RVbmlmaWVkQ2FjaGVRdWVyeVBhcmFtZXRlcihyZXF1ZXN0OiBBdXRoZW50aWNhdGlvblBhcmFtZXRlcnMsIGlkVG9rZW5PYmplY3Q6IGFueSk6IFN0cmluZ0RpY3Qge1xuXG4gICAgICAgIC8vIHByZWZlcmVuY2Ugb3JkZXI6IGFjY291bnQgPiBzaWQgPiBsb2dpbl9oaW50XG4gICAgICAgIGxldCBzc29UeXBlO1xuICAgICAgICBsZXQgc3NvRGF0YTtcbiAgICAgICAgbGV0IHNlcnZlclJlcVBhcmFtOiBTdHJpbmdEaWN0ID0ge307XG4gICAgICAgIC8vIGlmIGFjY291bnQgaW5mbyBpcyBwYXNzZWQsIGFjY291bnQuc2lkID4gYWNjb3VudC5sb2dpbl9oaW50XG4gICAgICAgIGlmIChyZXF1ZXN0KSB7XG4gICAgICAgICAgICBpZiAocmVxdWVzdC5hY2NvdW50KSB7XG4gICAgICAgICAgICAgICAgY29uc3QgYWNjb3VudDogQWNjb3VudCA9IHJlcXVlc3QuYWNjb3VudDtcbiAgICAgICAgICAgICAgICBpZiAoYWNjb3VudC5zaWQpIHtcbiAgICAgICAgICAgICAgICAgICAgc3NvVHlwZSA9IFNTT1R5cGVzLlNJRDtcbiAgICAgICAgICAgICAgICAgICAgc3NvRGF0YSA9IGFjY291bnQuc2lkO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChhY2NvdW50LnVzZXJOYW1lKSB7XG4gICAgICAgICAgICAgICAgICAgIHNzb1R5cGUgPSBTU09UeXBlcy5MT0dJTl9ISU5UO1xuICAgICAgICAgICAgICAgICAgICBzc29EYXRhID0gYWNjb3VudC51c2VyTmFtZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBzaWQgZnJvbSByZXF1ZXN0XG4gICAgICAgICAgICBlbHNlIGlmIChyZXF1ZXN0LnNpZCkge1xuICAgICAgICAgICAgICAgIHNzb1R5cGUgPSBTU09UeXBlcy5TSUQ7XG4gICAgICAgICAgICAgICAgc3NvRGF0YSA9IHJlcXVlc3Quc2lkO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gbG9naW5IaW50IGZyb20gcmVxdWVzdFxuICAgICAgICAgICAgZWxzZSBpZiAocmVxdWVzdC5sb2dpbkhpbnQpIHtcbiAgICAgICAgICAgICAgICBzc29UeXBlID0gU1NPVHlwZXMuTE9HSU5fSElOVDtcbiAgICAgICAgICAgICAgICBzc29EYXRhID0gcmVxdWVzdC5sb2dpbkhpbnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gYWRhbElkVG9rZW4gcmV0cmlldmVkIGZyb20gY2FjaGVcbiAgICAgICAgZWxzZSBpZiAoaWRUb2tlbk9iamVjdCkge1xuICAgICAgICAgICAgaWYgKGlkVG9rZW5PYmplY3QuaGFzT3duUHJvcGVydHkoQ29uc3RhbnRzLnVwbikpIHtcbiAgICAgICAgICAgICAgICBzc29UeXBlID0gU1NPVHlwZXMuSURfVE9LRU47XG4gICAgICAgICAgICAgICAgc3NvRGF0YSA9IGlkVG9rZW5PYmplY3QudXBuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgc3NvVHlwZSA9IFNTT1R5cGVzLk9SR0FOSVpBVElPTlM7XG4gICAgICAgICAgICAgICAgc3NvRGF0YSA9IG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBzZXJ2ZXJSZXFQYXJhbSA9IHRoaXMuYWRkU1NPUGFyYW1ldGVyKHNzb1R5cGUsIHNzb0RhdGEpO1xuXG4gICAgICAgIC8vIGFkZCB0aGUgSG9tZUFjY291bnRJZGVudGlmaWVyIGluZm8vIGRvbWFpbl9oaW50XG4gICAgICAgIGlmIChyZXF1ZXN0ICYmIHJlcXVlc3QuYWNjb3VudCAmJiByZXF1ZXN0LmFjY291bnQuaG9tZUFjY291bnRJZGVudGlmaWVyKSB7XG4gICAgICAgICAgICBzZXJ2ZXJSZXFQYXJhbSA9IHRoaXMuYWRkU1NPUGFyYW1ldGVyKFNTT1R5cGVzLkhPTUVBQ0NPVU5UX0lELCByZXF1ZXN0LmFjY291bnQuaG9tZUFjY291bnRJZGVudGlmaWVyLCBzZXJ2ZXJSZXFQYXJhbSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gc2VydmVyUmVxUGFyYW07XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqXG4gICAgICogQWRkcyBsb2dpbl9oaW50IHRvIGF1dGhvcml6YXRpb24gVVJMIHdoaWNoIGlzIHVzZWQgdG8gcHJlLWZpbGwgdGhlIHVzZXJuYW1lIGZpZWxkIG9mIHNpZ24gaW4gcGFnZSBmb3IgdGhlIHVzZXIgaWYga25vd24gYWhlYWQgb2YgdGltZVxuICAgICAqIGRvbWFpbl9oaW50IGNhbiBiZSBvbmUgb2YgdXNlcnMvb3JnYW5pemF0aW9ucyB3aGljaCB3aGVuIGFkZGVkIHNraXBzIHRoZSBlbWFpbCBiYXNlZCBkaXNjb3ZlcnkgcHJvY2VzcyBvZiB0aGUgdXNlclxuICAgICAqIGRvbWFpbl9yZXEgdXRpZCByZWNlaXZlZCBhcyBwYXJ0IG9mIHRoZSBjbGllbnRJbmZvXG4gICAgICogbG9naW5fcmVxIHVpZCByZWNlaXZlZCBhcyBwYXJ0IG9mIGNsaWVudEluZm9cbiAgICAgKiBBbHNvIGRvZXMgYSBzYW5pdHkgY2hlY2sgZm9yIGV4dHJhUXVlcnlQYXJhbWV0ZXJzIHBhc3NlZCBieSB0aGUgdXNlciB0byBlbnN1cmUgbm8gcmVwZWF0IHF1ZXJ5UGFyYW1ldGVyc1xuICAgICAqXG4gICAgICogQHBhcmFtIHtAbGluayBBY2NvdW50fSBhY2NvdW50IC0gQWNjb3VudCBmb3Igd2hpY2ggdGhlIHRva2VuIGlzIHJlcXVlc3RlZFxuICAgICAqIEBwYXJhbSBxdWVyeXBhcmFtc1xuICAgICAqIEBwYXJhbSB7QGxpbmsgU2VydmVyUmVxdWVzdFBhcmFtZXRlcnN9XG4gICAgICogQGlnbm9yZVxuICAgICAqL1xuICAgIHByaXZhdGUgYWRkSGludFBhcmFtZXRlcnMoYWNjb3VudDogQWNjb3VudCwgcVBhcmFtczogU3RyaW5nRGljdCk6IFN0cmluZ0RpY3Qge1xuICAgIC8qXG4gICAgICogVGhpcyBpcyBhIGZpbmFsIGNoZWNrIGZvciBhbGwgcXVlcnlQYXJhbXMgYWRkZWQgc28gZmFyOyBwcmVmZXJlbmNlIG9yZGVyOiBzaWQgPiBsb2dpbl9oaW50XG4gICAgICogc2lkIGNhbm5vdCBiZSBwYXNzZWQgYWxvbmcgd2l0aCBsb2dpbl9oaW50IG9yIGRvbWFpbl9oaW50LCBoZW5jZSB3ZSBjaGVjayBib3RoIGFyZSBub3QgcG9wdWxhdGVkIHlldCBpbiBxdWVyeVBhcmFtZXRlcnNcbiAgICAgKi9cbiAgICAgICAgaWYgKGFjY291bnQgJiYgIXFQYXJhbXNbU1NPVHlwZXMuU0lEXSkge1xuICAgICAgICAgICAgLy8gc2lkIC0gcG9wdWxhdGUgb25seSBpZiBsb2dpbl9oaW50IGlzIG5vdCBhbHJlYWR5IHBvcHVsYXRlZCBhbmQgdGhlIGFjY291bnQgaGFzIHNpZFxuICAgICAgICAgICAgY29uc3QgcG9wdWxhdGVTSUQgPSAhcVBhcmFtc1tTU09UeXBlcy5MT0dJTl9ISU5UXSAmJiBhY2NvdW50LnNpZCAmJiB0aGlzLnByb21wdFZhbHVlID09PSBQcm9tcHRTdGF0ZS5OT05FO1xuICAgICAgICAgICAgaWYgKHBvcHVsYXRlU0lEKSB7XG4gICAgICAgICAgICAgICAgcVBhcmFtcyA9IHRoaXMuYWRkU1NPUGFyYW1ldGVyKFNTT1R5cGVzLlNJRCwgYWNjb3VudC5zaWQsIHFQYXJhbXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gbG9naW5faGludCAtIGFjY291bnQudXNlck5hbWVcbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnN0IHBvcHVsYXRlTG9naW5IaW50ID0gIXFQYXJhbXNbU1NPVHlwZXMuTE9HSU5fSElOVF0gJiYgYWNjb3VudC51c2VyTmFtZSAmJiAhU3RyaW5nVXRpbHMuaXNFbXB0eShhY2NvdW50LnVzZXJOYW1lKTtcbiAgICAgICAgICAgICAgICBpZiAocG9wdWxhdGVMb2dpbkhpbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgcVBhcmFtcyA9IHRoaXMuYWRkU1NPUGFyYW1ldGVyKFNTT1R5cGVzLkxPR0lOX0hJTlQsIGFjY291bnQudXNlck5hbWUsIHFQYXJhbXMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc3QgcG9wdWxhdGVSZXFQYXJhbXMgPSAhcVBhcmFtc1tTU09UeXBlcy5ET01BSU5fUkVRXSAmJiAhcVBhcmFtc1tTU09UeXBlcy5MT0dJTl9SRVFdO1xuICAgICAgICAgICAgaWYgKHBvcHVsYXRlUmVxUGFyYW1zKSB7XG4gICAgICAgICAgICAgICAgcVBhcmFtcyA9IHRoaXMuYWRkU1NPUGFyYW1ldGVyKFNTT1R5cGVzLkhPTUVBQ0NPVU5UX0lELCBhY2NvdW50LmhvbWVBY2NvdW50SWRlbnRpZmllciwgcVBhcmFtcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcVBhcmFtcztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBZGQgU0lEIHRvIGV4dHJhUXVlcnlQYXJhbWV0ZXJzXG4gICAgICogQHBhcmFtIHNpZFxuICAgICAqL1xuICAgIHByaXZhdGUgYWRkU1NPUGFyYW1ldGVyKHNzb1R5cGU6IHN0cmluZywgc3NvRGF0YTogc3RyaW5nLCBzc29QYXJhbT86IFN0cmluZ0RpY3QpOiBTdHJpbmdEaWN0IHtcbiAgICAgICAgaWYgKCFzc29QYXJhbSkge1xuICAgICAgICAgICAgc3NvUGFyYW0gPSB7fTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghc3NvRGF0YSkge1xuICAgICAgICAgICAgcmV0dXJuIHNzb1BhcmFtO1xuICAgICAgICB9XG5cbiAgICAgICAgc3dpdGNoIChzc29UeXBlKSB7XG4gICAgICAgICAgICBjYXNlIFNTT1R5cGVzLlNJRDoge1xuICAgICAgICAgICAgICAgIHNzb1BhcmFtW1NTT1R5cGVzLlNJRF0gPSBzc29EYXRhO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2FzZSBTU09UeXBlcy5JRF9UT0tFTjoge1xuICAgICAgICAgICAgICAgIHNzb1BhcmFtW1NTT1R5cGVzLkxPR0lOX0hJTlRdID0gc3NvRGF0YTtcbiAgICAgICAgICAgICAgICBzc29QYXJhbVtTU09UeXBlcy5ET01BSU5fSElOVF0gPSBTU09UeXBlcy5PUkdBTklaQVRJT05TO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2FzZSBTU09UeXBlcy5MT0dJTl9ISU5UOiB7XG4gICAgICAgICAgICAgICAgc3NvUGFyYW1bU1NPVHlwZXMuTE9HSU5fSElOVF0gPSBzc29EYXRhO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2FzZSBTU09UeXBlcy5PUkdBTklaQVRJT05TOiB7XG4gICAgICAgICAgICAgICAgc3NvUGFyYW1bU1NPVHlwZXMuRE9NQUlOX0hJTlRdID0gU1NPVHlwZXMuT1JHQU5JWkFUSU9OUztcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhc2UgU1NPVHlwZXMuQ09OU1VNRVJTOiB7XG4gICAgICAgICAgICAgICAgc3NvUGFyYW1bU1NPVHlwZXMuRE9NQUlOX0hJTlRdID0gU1NPVHlwZXMuQ09OU1VNRVJTO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2FzZSBTU09UeXBlcy5IT01FQUNDT1VOVF9JRDoge1xuICAgICAgICAgICAgICAgIGNvbnN0IGhvbWVBY2NvdW50SWQgPSBzc29EYXRhLnNwbGl0KFwiLlwiKTtcbiAgICAgICAgICAgICAgICBjb25zdCB1aWQgPSBDcnlwdG9VdGlscy5iYXNlNjREZWNvZGUoaG9tZUFjY291bnRJZFswXSk7XG4gICAgICAgICAgICAgICAgY29uc3QgdXRpZCA9IENyeXB0b1V0aWxzLmJhc2U2NERlY29kZShob21lQWNjb3VudElkWzFdKTtcblxuICAgICAgICAgICAgICAgIC8vIFRPRE86IGRvbWFpbl9yZXEgYW5kIGxvZ2luX3JlcSBhcmUgbm90IG5lZWRlZCBhY2NvcmRpbmcgdG8gZVNUUyB0ZWFtXG4gICAgICAgICAgICAgICAgc3NvUGFyYW1bU1NPVHlwZXMuTE9HSU5fUkVRXSA9IHVpZDtcbiAgICAgICAgICAgICAgICBzc29QYXJhbVtTU09UeXBlcy5ET01BSU5fUkVRXSA9IHV0aWQ7XG5cbiAgICAgICAgICAgICAgICBpZiAodXRpZCA9PT0gQ29uc3RhbnRzLmNvbnN1bWVyc1V0aWQpIHtcbiAgICAgICAgICAgICAgICAgICAgc3NvUGFyYW1bU1NPVHlwZXMuRE9NQUlOX0hJTlRdID0gU1NPVHlwZXMuQ09OU1VNRVJTO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgc3NvUGFyYW1bU1NPVHlwZXMuRE9NQUlOX0hJTlRdID0gU1NPVHlwZXMuT1JHQU5JWkFUSU9OUztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXNlIFNTT1R5cGVzLkxPR0lOX1JFUToge1xuICAgICAgICAgICAgICAgIHNzb1BhcmFtW1NTT1R5cGVzLkxPR0lOX1JFUV0gPSBzc29EYXRhO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2FzZSBTU09UeXBlcy5ET01BSU5fUkVROiB7XG4gICAgICAgICAgICAgICAgc3NvUGFyYW1bU1NPVHlwZXMuRE9NQUlOX1JFUV0gPSBzc29EYXRhO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHNzb1BhcmFtO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKiBAaWdub3JlXG4gICAgICogUmVtb3ZlcyB1bm5lY2Vzc2FyeSBvciBkdXBsaWNhdGUgcXVlcnkgcGFyYW1ldGVycyBmcm9tIGV4dHJhUXVlcnlQYXJhbWV0ZXJzXG4gICAgICogQHBhcmFtIHJlcXVlc3RcbiAgICAgKi9cbiAgICBwcml2YXRlIHNhbml0aXplRVFQYXJhbXMocmVxdWVzdDogQXV0aGVudGljYXRpb25QYXJhbWV0ZXJzKSA6IFN0cmluZ0RpY3Qge1xuICAgICAgICBjb25zdCBlUVBhcmFtcyA6IFN0cmluZ0RpY3QgPSByZXF1ZXN0LmV4dHJhUXVlcnlQYXJhbWV0ZXJzO1xuICAgICAgICBpZiAoIWVRUGFyYW1zKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICBpZiAocmVxdWVzdC5jbGFpbXNSZXF1ZXN0KSB7XG4gICAgICAgICAgICAvLyB0aGlzLmxvZ2dlci53YXJuaW5nKFwiUmVtb3ZlZCBkdXBsaWNhdGUgY2xhaW1zIGZyb20gZXh0cmFRdWVyeVBhcmFtZXRlcnMuIFBsZWFzZSB1c2UgZWl0aGVyIHRoZSBjbGFpbXNSZXF1ZXN0IGZpZWxkIE9SIHBhc3MgYXMgZXh0cmFRdWVyeVBhcmFtZXRlciAtIG5vdCBib3RoLlwiKTtcbiAgICAgICAgICAgIGRlbGV0ZSBlUVBhcmFtc1tDb25zdGFudHMuY2xhaW1zXTtcbiAgICAgICAgfVxuICAgICAgICBCbGFja2xpc3RlZEVRUGFyYW1zLmZvckVhY2gocGFyYW0gPT4ge1xuICAgICAgICAgICAgaWYgKGVRUGFyYW1zW3BhcmFtXSkge1xuICAgICAgICAgICAgICAgIC8vIHRoaXMubG9nZ2VyLndhcm5pbmcoXCJSZW1vdmVkIGR1cGxpY2F0ZSBcIiArIHBhcmFtICsgXCIgZnJvbSBleHRyYVF1ZXJ5UGFyYW1ldGVycy4gUGxlYXNlIHVzZSB0aGUgXCIgKyBwYXJhbSArIFwiIGZpZWxkIGluIHJlcXVlc3Qgb2JqZWN0LlwiKTtcbiAgICAgICAgICAgICAgICBkZWxldGUgZVFQYXJhbXNbcGFyYW1dO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIGVRUGFyYW1zO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFV0aWxpdHkgdG8gZ2VuZXJhdGUgYSBRdWVyeVBhcmFtZXRlclN0cmluZyBmcm9tIGEgS2V5LVZhbHVlIG1hcHBpbmcgb2YgZXh0cmFRdWVyeVBhcmFtZXRlcnMgcGFzc2VkXG4gICAgICogQHBhcmFtIGV4dHJhUXVlcnlQYXJhbWV0ZXJzXG4gICAgICovXG4gICAgc3RhdGljIGdlbmVyYXRlUXVlcnlQYXJhbWV0ZXJzU3RyaW5nKHF1ZXJ5UGFyYW1ldGVyczogU3RyaW5nRGljdCk6IHN0cmluZyB7XG4gICAgICAgIGxldCBwYXJhbXNTdHJpbmc6IHN0cmluZyA9IG51bGw7XG5cbiAgICAgICAgaWYgKHF1ZXJ5UGFyYW1ldGVycykge1xuICAgICAgICAgICAgT2JqZWN0LmtleXMocXVlcnlQYXJhbWV0ZXJzKS5mb3JFYWNoKChrZXk6IHN0cmluZykgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChwYXJhbXNTdHJpbmcgPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICBwYXJhbXNTdHJpbmcgPSBgJHtrZXl9PSR7ZW5jb2RlVVJJQ29tcG9uZW50KHF1ZXJ5UGFyYW1ldGVyc1trZXldKX1gO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcGFyYW1zU3RyaW5nICs9IGAmJHtrZXl9PSR7ZW5jb2RlVVJJQ29tcG9uZW50KHF1ZXJ5UGFyYW1ldGVyc1trZXldKX1gO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHBhcmFtc1N0cmluZztcbiAgICB9XG5cbiAgICAvLyAjZW5kcmVnaW9uXG5cbiAgICAvKipcbiAgICAgKiBDaGVjayB0byBzZWUgaWYgdGhlcmUgYXJlIFNTTyBwYXJhbXMgc2V0IGluIHRoZSBSZXF1ZXN0XG4gICAgICogQHBhcmFtIHJlcXVlc3RcbiAgICAgKi9cbiAgICBzdGF0aWMgaXNTU09QYXJhbShyZXF1ZXN0OiBBdXRoZW50aWNhdGlvblBhcmFtZXRlcnMpIHtcbiAgICAgICAgcmV0dXJuIHJlcXVlc3QgJiYgKHJlcXVlc3QuYWNjb3VudCB8fCByZXF1ZXN0LnNpZCB8fCByZXF1ZXN0LmxvZ2luSGludCk7XG4gICAgfVxufVxuIiwiLypcbiAqIENvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxuICovXG5cbmltcG9ydCB7IENyeXB0b1V0aWxzIH0gZnJvbSBcIi4vdXRpbHMvQ3J5cHRvVXRpbHNcIjtcbmltcG9ydCB7IENsaWVudEF1dGhFcnJvciB9IGZyb20gXCIuL2Vycm9yL0NsaWVudEF1dGhFcnJvclwiO1xuaW1wb3J0IHsgU3RyaW5nVXRpbHMgfSBmcm9tIFwiLi91dGlscy9TdHJpbmdVdGlsc1wiO1xuXG4vKipcbiAqIEBoaWRkZW5cbiAqL1xuZXhwb3J0IGNsYXNzIENsaWVudEluZm8ge1xuXG4gICAgcHJpdmF0ZSBfdWlkOiBzdHJpbmc7XG4gICAgZ2V0IHVpZCgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5fdWlkID8gdGhpcy5fdWlkIDogXCJcIjtcbiAgICB9XG5cbiAgICBzZXQgdWlkKHVpZDogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMuX3VpZCA9IHVpZDtcbiAgICB9XG5cbiAgICBwcml2YXRlIF91dGlkOiBzdHJpbmc7XG4gICAgZ2V0IHV0aWQoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3V0aWQgPyB0aGlzLl91dGlkIDogXCJcIjtcbiAgICB9XG5cbiAgICBzZXQgdXRpZCh1dGlkOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5fdXRpZCA9IHV0aWQ7XG4gICAgfVxuXG4gICAgY29uc3RydWN0b3IocmF3Q2xpZW50SW5mbzogc3RyaW5nKSB7XG4gICAgICAgIGlmICghcmF3Q2xpZW50SW5mbyB8fCBTdHJpbmdVdGlscy5pc0VtcHR5KHJhd0NsaWVudEluZm8pKSB7XG4gICAgICAgICAgICB0aGlzLnVpZCA9IFwiXCI7XG4gICAgICAgICAgICB0aGlzLnV0aWQgPSBcIlwiO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IGRlY29kZWRDbGllbnRJbmZvOiBzdHJpbmcgPSBDcnlwdG9VdGlscy5iYXNlNjREZWNvZGUocmF3Q2xpZW50SW5mbyk7XG4gICAgICAgICAgICBjb25zdCBjbGllbnRJbmZvOiBDbGllbnRJbmZvID0gPENsaWVudEluZm8+SlNPTi5wYXJzZShkZWNvZGVkQ2xpZW50SW5mbyk7XG4gICAgICAgICAgICBpZiAoY2xpZW50SW5mbykge1xuICAgICAgICAgICAgICAgIGlmIChjbGllbnRJbmZvLmhhc093blByb3BlcnR5KFwidWlkXCIpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudWlkID0gY2xpZW50SW5mby51aWQ7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKGNsaWVudEluZm8uaGFzT3duUHJvcGVydHkoXCJ1dGlkXCIpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudXRpZCA9IGNsaWVudEluZm8udXRpZDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIHRocm93IENsaWVudEF1dGhFcnJvci5jcmVhdGVDbGllbnRJbmZvRGVjb2RpbmdFcnJvcihlKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsIi8qXG4gKiBDb3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cbiAqL1xuXG5pbXBvcnQgeyBDbGllbnRBdXRoRXJyb3IgfSBmcm9tIFwiLi9lcnJvci9DbGllbnRBdXRoRXJyb3JcIjtcbmltcG9ydCB7IFRva2VuVXRpbHMgfSBmcm9tIFwiLi91dGlscy9Ub2tlblV0aWxzXCI7XG5pbXBvcnQgeyBTdHJpbmdEaWN0IH0gZnJvbSBcIi4vTXNhbFR5cGVzXCI7XG5pbXBvcnQgeyBTdHJpbmdVdGlscyB9IGZyb20gXCIuL3V0aWxzL1N0cmluZ1V0aWxzXCI7XG5cbi8qKlxuICogQGhpZGRlblxuICovXG5leHBvcnQgY2xhc3MgSWRUb2tlbiB7XG5cbiAgICBpc3N1ZXI6IHN0cmluZztcbiAgICBvYmplY3RJZDogc3RyaW5nO1xuICAgIHN1YmplY3Q6IHN0cmluZztcbiAgICB0ZW5hbnRJZDogc3RyaW5nO1xuICAgIHZlcnNpb246IHN0cmluZztcbiAgICBwcmVmZXJyZWROYW1lOiBzdHJpbmc7XG4gICAgbmFtZTogc3RyaW5nO1xuICAgIGhvbWVPYmplY3RJZDogc3RyaW5nO1xuICAgIG5vbmNlOiBzdHJpbmc7XG4gICAgZXhwaXJhdGlvbjogc3RyaW5nO1xuICAgIHJhd0lkVG9rZW46IHN0cmluZztcbiAgICBjbGFpbXM6IFN0cmluZ0RpY3Q7XG4gICAgc2lkOiBzdHJpbmc7XG4gICAgY2xvdWRJbnN0YW5jZTogc3RyaW5nO1xuICAgIC8qIHRzbGludDpkaXNhYmxlOm5vLXN0cmluZy1saXRlcmFsICovXG4gICAgY29uc3RydWN0b3IocmF3SWRUb2tlbjogc3RyaW5nKSB7XG4gICAgICAgIGlmIChTdHJpbmdVdGlscy5pc0VtcHR5KHJhd0lkVG9rZW4pKSB7XG4gICAgICAgICAgICB0aHJvdyBDbGllbnRBdXRoRXJyb3IuY3JlYXRlSWRUb2tlbk51bGxPckVtcHR5RXJyb3IocmF3SWRUb2tlbik7XG4gICAgICAgIH1cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHRoaXMucmF3SWRUb2tlbiA9IHJhd0lkVG9rZW47XG4gICAgICAgICAgICB0aGlzLmNsYWltcyA9IFRva2VuVXRpbHMuZXh0cmFjdElkVG9rZW4ocmF3SWRUb2tlbik7XG4gICAgICAgICAgICBpZiAodGhpcy5jbGFpbXMpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5jbGFpbXMuaGFzT3duUHJvcGVydHkoXCJpc3NcIikpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pc3N1ZXIgPSB0aGlzLmNsYWltc1tcImlzc1wiXTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAodGhpcy5jbGFpbXMuaGFzT3duUHJvcGVydHkoXCJvaWRcIikpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vYmplY3RJZCA9IHRoaXMuY2xhaW1zW1wib2lkXCJdO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmNsYWltcy5oYXNPd25Qcm9wZXJ0eShcInN1YlwiKSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnN1YmplY3QgPSB0aGlzLmNsYWltc1tcInN1YlwiXTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAodGhpcy5jbGFpbXMuaGFzT3duUHJvcGVydHkoXCJ0aWRcIikpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50ZW5hbnRJZCA9IHRoaXMuY2xhaW1zW1widGlkXCJdO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmNsYWltcy5oYXNPd25Qcm9wZXJ0eShcInZlclwiKSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnZlcnNpb24gPSB0aGlzLmNsYWltc1tcInZlclwiXTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAodGhpcy5jbGFpbXMuaGFzT3duUHJvcGVydHkoXCJwcmVmZXJyZWRfdXNlcm5hbWVcIikpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcmVmZXJyZWROYW1lID0gdGhpcy5jbGFpbXNbXCJwcmVmZXJyZWRfdXNlcm5hbWVcIl07XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuY2xhaW1zLmhhc093blByb3BlcnR5KFwibmFtZVwiKSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm5hbWUgPSB0aGlzLmNsYWltc1tcIm5hbWVcIl07XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuY2xhaW1zLmhhc093blByb3BlcnR5KFwibm9uY2VcIikpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ub25jZSA9IHRoaXMuY2xhaW1zW1wibm9uY2VcIl07XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuY2xhaW1zLmhhc093blByb3BlcnR5KFwiZXhwXCIpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZXhwaXJhdGlvbiA9IHRoaXMuY2xhaW1zW1wiZXhwXCJdO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmNsYWltcy5oYXNPd25Qcm9wZXJ0eShcImhvbWVfb2lkXCIpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaG9tZU9iamVjdElkID0gdGhpcy5jbGFpbXNbXCJob21lX29pZFwiXTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAodGhpcy5jbGFpbXMuaGFzT3duUHJvcGVydHkoXCJzaWRcIikpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zaWQgPSB0aGlzLmNsYWltc1tcInNpZFwiXTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAodGhpcy5jbGFpbXMuaGFzT3duUHJvcGVydHkoXCJjbG91ZF9pbnN0YW5jZV9ob3N0X25hbWVcIikpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jbG91ZEluc3RhbmNlID0gdGhpcy5jbGFpbXNbXCJjbG91ZF9pbnN0YW5jZV9ob3N0X25hbWVcIl07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8qIHRzbGludDplbmFibGU6bm8tc3RyaW5nLWxpdGVyYWwgKi9cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgLypcbiAgICAgICAgICAgICAqIFRPRE86IFRoaXMgZXJyb3IgaGVyZSB3b24ndCByZWFsbHkgZXZlcnkgYmUgdGhyb3duLCBzaW5jZSBleHRyYWN0SWRUb2tlbigpIHJldHVybnMgbnVsbCBpZiB0aGUgZGVjb2RlSnd0KCkgZmFpbHMuXG4gICAgICAgICAgICAgKiBOZWVkIHRvIGFkZCBiZXR0ZXIgZXJyb3IgaGFuZGxpbmcgaGVyZSB0byBhY2NvdW50IGZvciBiZWluZyB1bmFibGUgdG8gZGVjb2RlIGp3dHMuXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIHRocm93IENsaWVudEF1dGhFcnJvci5jcmVhdGVJZFRva2VuUGFyc2luZ0Vycm9yKGUpO1xuICAgICAgICB9XG4gICAgfVxuXG59XG4iLCIvKlxuICogQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXG4gKi9cblxuaW1wb3J0IHsgQ29uc3RhbnRzLCBDYWNoZUtleXMgfSBmcm9tIFwiLi91dGlscy9Db25zdGFudHNcIjtcbmltcG9ydCB7IEFjY2Vzc1Rva2VuQ2FjaGVJdGVtIH0gZnJvbSBcIi4vQWNjZXNzVG9rZW5DYWNoZUl0ZW1cIjtcbmltcG9ydCB7IENhY2hlTG9jYXRpb24gfSBmcm9tIFwiLi9Db25maWd1cmF0aW9uXCI7XG5pbXBvcnQgeyBDbGllbnRDb25maWd1cmF0aW9uRXJyb3IgfSBmcm9tIFwiLi9lcnJvci9DbGllbnRDb25maWd1cmF0aW9uRXJyb3JcIjtcblxuLyoqXG4gKiBAaGlkZGVuXG4gKi9cbmV4cG9ydCBjbGFzcyBTdG9yYWdlIHsvLyBTaW5nbGV0b25cblxuICAgIHByaXZhdGUgc3RhdGljIGluc3RhbmNlOiBTdG9yYWdlO1xuICAgIHByaXZhdGUgbG9jYWxTdG9yYWdlU3VwcG9ydGVkOiBib29sZWFuO1xuICAgIHByaXZhdGUgc2Vzc2lvblN0b3JhZ2VTdXBwb3J0ZWQ6IGJvb2xlYW47XG4gICAgcHJpdmF0ZSBjYWNoZUxvY2F0aW9uOiBDYWNoZUxvY2F0aW9uO1xuXG4gICAgY29uc3RydWN0b3IoY2FjaGVMb2NhdGlvbjogQ2FjaGVMb2NhdGlvbikge1xuICAgICAgICBpZiAoU3RvcmFnZS5pbnN0YW5jZSkge1xuICAgICAgICAgICAgcmV0dXJuIFN0b3JhZ2UuaW5zdGFuY2U7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmNhY2hlTG9jYXRpb24gPSBjYWNoZUxvY2F0aW9uO1xuICAgICAgICB0aGlzLmxvY2FsU3RvcmFnZVN1cHBvcnRlZCA9IHR5cGVvZiB3aW5kb3dbdGhpcy5jYWNoZUxvY2F0aW9uXSAhPT0gXCJ1bmRlZmluZWRcIiAmJiB3aW5kb3dbdGhpcy5jYWNoZUxvY2F0aW9uXSAhPSBudWxsO1xuICAgICAgICB0aGlzLnNlc3Npb25TdG9yYWdlU3VwcG9ydGVkID0gdHlwZW9mIHdpbmRvd1tjYWNoZUxvY2F0aW9uXSAhPT0gXCJ1bmRlZmluZWRcIiAmJiB3aW5kb3dbY2FjaGVMb2NhdGlvbl0gIT0gbnVsbDtcbiAgICAgICAgU3RvcmFnZS5pbnN0YW5jZSA9IHRoaXM7XG4gICAgICAgIGlmICghdGhpcy5sb2NhbFN0b3JhZ2VTdXBwb3J0ZWQgJiYgIXRoaXMuc2Vzc2lvblN0b3JhZ2VTdXBwb3J0ZWQpIHtcbiAgICAgICAgICAgIHRocm93IENsaWVudENvbmZpZ3VyYXRpb25FcnJvci5jcmVhdGVOb1N0b3JhZ2VTdXBwb3J0ZWRFcnJvcigpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIFN0b3JhZ2UuaW5zdGFuY2U7XG4gICAgfVxuXG4gICAgLy8gYWRkIHZhbHVlIHRvIHN0b3JhZ2VcbiAgICBzZXRJdGVtKGtleTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nLCBlbmFibGVDb29raWVTdG9yYWdlPzogYm9vbGVhbik6IHZvaWQge1xuICAgICAgICBpZiAod2luZG93W3RoaXMuY2FjaGVMb2NhdGlvbl0pIHtcbiAgICAgICAgICAgIHdpbmRvd1t0aGlzLmNhY2hlTG9jYXRpb25dLnNldEl0ZW0oa2V5LCB2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGVuYWJsZUNvb2tpZVN0b3JhZ2UpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0SXRlbUNvb2tpZShrZXksIHZhbHVlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIGdldCBvbmUgaXRlbSBieSBrZXkgZnJvbSBzdG9yYWdlXG4gICAgZ2V0SXRlbShrZXk6IHN0cmluZywgZW5hYmxlQ29va2llU3RvcmFnZT86IGJvb2xlYW4pOiBzdHJpbmcge1xuICAgICAgICBpZiAoZW5hYmxlQ29va2llU3RvcmFnZSAmJiB0aGlzLmdldEl0ZW1Db29raWUoa2V5KSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ2V0SXRlbUNvb2tpZShrZXkpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh3aW5kb3dbdGhpcy5jYWNoZUxvY2F0aW9uXSkge1xuICAgICAgICAgICAgcmV0dXJuIHdpbmRvd1t0aGlzLmNhY2hlTG9jYXRpb25dLmdldEl0ZW0oa2V5KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICAvLyByZW1vdmUgdmFsdWUgZnJvbSBzdG9yYWdlXG4gICAgcmVtb3ZlSXRlbShrZXk6IHN0cmluZyk6IHZvaWQge1xuICAgICAgICBpZiAod2luZG93W3RoaXMuY2FjaGVMb2NhdGlvbl0pIHtcbiAgICAgICAgICAgIHJldHVybiB3aW5kb3dbdGhpcy5jYWNoZUxvY2F0aW9uXS5yZW1vdmVJdGVtKGtleSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBjbGVhciBzdG9yYWdlIChyZW1vdmUgYWxsIGl0ZW1zIGZyb20gaXQpXG4gICAgY2xlYXIoKTogdm9pZCB7XG4gICAgICAgIGlmICh3aW5kb3dbdGhpcy5jYWNoZUxvY2F0aW9uXSkge1xuICAgICAgICAgICAgcmV0dXJuIHdpbmRvd1t0aGlzLmNhY2hlTG9jYXRpb25dLmNsZWFyKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXRBbGxBY2Nlc3NUb2tlbnMoY2xpZW50SWQ6IHN0cmluZywgaG9tZUFjY291bnRJZGVudGlmaWVyOiBzdHJpbmcpOiBBcnJheTxBY2Nlc3NUb2tlbkNhY2hlSXRlbT4ge1xuICAgICAgICBjb25zdCByZXN1bHRzOiBBcnJheTxBY2Nlc3NUb2tlbkNhY2hlSXRlbT4gPSBbXTtcbiAgICAgICAgbGV0IGFjY2Vzc1Rva2VuQ2FjaGVJdGVtOiBBY2Nlc3NUb2tlbkNhY2hlSXRlbTtcbiAgICAgICAgY29uc3Qgc3RvcmFnZSA9IHdpbmRvd1t0aGlzLmNhY2hlTG9jYXRpb25dO1xuICAgICAgICBpZiAoc3RvcmFnZSkge1xuICAgICAgICAgICAgbGV0IGtleTogc3RyaW5nO1xuICAgICAgICAgICAgZm9yIChrZXkgaW4gc3RvcmFnZSkge1xuICAgICAgICAgICAgICAgIGlmIChzdG9yYWdlLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGtleS5tYXRjaChjbGllbnRJZCkgJiYga2V5Lm1hdGNoKGhvbWVBY2NvdW50SWRlbnRpZmllcikpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gdGhpcy5nZXRJdGVtKGtleSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY2Nlc3NUb2tlbkNhY2hlSXRlbSA9IG5ldyBBY2Nlc3NUb2tlbkNhY2hlSXRlbShKU09OLnBhcnNlKGtleSksIEpTT04ucGFyc2UodmFsdWUpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXN1bHRzLnB1c2goYWNjZXNzVG9rZW5DYWNoZUl0ZW0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdHM7XG4gICAgfVxuXG4gICAgcmVtb3ZlQWNxdWlyZVRva2VuRW50cmllcyhzdGF0ZT86IHN0cmluZyk6IHZvaWQge1xuICAgICAgICBjb25zdCBzdG9yYWdlID0gd2luZG93W3RoaXMuY2FjaGVMb2NhdGlvbl07XG4gICAgICAgIGlmIChzdG9yYWdlKSB7XG4gICAgICAgICAgICBsZXQga2V5OiBzdHJpbmc7XG4gICAgICAgICAgICBmb3IgKGtleSBpbiBzdG9yYWdlKSB7XG4gICAgICAgICAgICAgICAgaWYgKHN0b3JhZ2UuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoKGtleS5pbmRleE9mKENhY2hlS2V5cy5BVVRIT1JJVFkpICE9PSAtMSB8fCBrZXkuaW5kZXhPZihDYWNoZUtleXMuQUNRVUlSRV9UT0tFTl9BQ0NPVU5UKSAhPT0gMSkgJiYgKCFzdGF0ZSB8fCBrZXkuaW5kZXhPZihzdGF0ZSkgIT09IC0xKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3BsaXRLZXkgPSBrZXkuc3BsaXQoQ29uc3RhbnRzLnJlc291cmNlRGVsaW1pdGVyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBzdGF0ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzcGxpdEtleS5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGUgPSBzcGxpdEtleVsxXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzdGF0ZSAmJiAhdGhpcy50b2tlblJlbmV3YWxJblByb2dyZXNzKHN0YXRlKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVtb3ZlSXRlbShrZXkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVtb3ZlSXRlbShDb25zdGFudHMucmVuZXdTdGF0dXMgKyBzdGF0ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZW1vdmVJdGVtKENvbnN0YW50cy5zdGF0ZUxvZ2luKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJlbW92ZUl0ZW0oQ29uc3RhbnRzLnN0YXRlQWNxdWlyZVRva2VuKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJlbW92ZUl0ZW0oQ29uc3RhbnRzLm5vbmNlSWRUb2tlbik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZW1vdmVJdGVtKENvbnN0YW50cy5sb2dpblJlcXVlc3QpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0SXRlbUNvb2tpZShrZXksIFwiXCIsIC0xKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuY2xlYXJDb29raWUoKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHRva2VuUmVuZXdhbEluUHJvZ3Jlc3Moc3RhdGVWYWx1ZTogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgICAgIGNvbnN0IHN0b3JhZ2UgPSB3aW5kb3dbdGhpcy5jYWNoZUxvY2F0aW9uXTtcbiAgICAgICAgY29uc3QgcmVuZXdTdGF0dXMgPSBzdG9yYWdlW0NvbnN0YW50cy5yZW5ld1N0YXR1cyArIHN0YXRlVmFsdWVdO1xuICAgICAgICByZXR1cm4gISghcmVuZXdTdGF0dXMgfHwgcmVuZXdTdGF0dXMgIT09IENvbnN0YW50cy50b2tlblJlbmV3U3RhdHVzSW5Qcm9ncmVzcyk7XG4gICAgfVxuXG4gICAgcmVzZXRDYWNoZUl0ZW1zKCk6IHZvaWQge1xuICAgICAgICBjb25zdCBzdG9yYWdlID0gd2luZG93W3RoaXMuY2FjaGVMb2NhdGlvbl07XG4gICAgICAgIGlmIChzdG9yYWdlKSB7XG4gICAgICAgICAgICBsZXQga2V5OiBzdHJpbmc7XG4gICAgICAgICAgICBmb3IgKGtleSBpbiBzdG9yYWdlKSB7XG4gICAgICAgICAgICAgICAgaWYgKHN0b3JhZ2UuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoa2V5LmluZGV4T2YoQ29uc3RhbnRzLm1zYWwpICE9PSAtMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZW1vdmVJdGVtKGtleSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnJlbW92ZUFjcXVpcmVUb2tlbkVudHJpZXMoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHNldEl0ZW1Db29raWUoY05hbWU6IHN0cmluZywgY1ZhbHVlOiBzdHJpbmcsIGV4cGlyZXM/OiBudW1iZXIpOiB2b2lkIHtcbiAgICAgICAgbGV0IGNvb2tpZVN0ciA9IGNOYW1lICsgXCI9XCIgKyBjVmFsdWUgKyBcIjtcIjtcbiAgICAgICAgaWYgKGV4cGlyZXMpIHtcbiAgICAgICAgICAgIGNvbnN0IGV4cGlyZVRpbWUgPSB0aGlzLmdldENvb2tpZUV4cGlyYXRpb25UaW1lKGV4cGlyZXMpO1xuICAgICAgICAgICAgY29va2llU3RyICs9IFwiZXhwaXJlcz1cIiArIGV4cGlyZVRpbWUgKyBcIjtcIjtcbiAgICAgICAgfVxuXG4gICAgICAgIGRvY3VtZW50LmNvb2tpZSA9IGNvb2tpZVN0cjtcbiAgICB9XG5cbiAgICBnZXRJdGVtQ29va2llKGNOYW1lOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgICAgICBjb25zdCBuYW1lID0gY05hbWUgKyBcIj1cIjtcbiAgICAgICAgY29uc3QgY2EgPSBkb2N1bWVudC5jb29raWUuc3BsaXQoXCI7XCIpO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNhLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgYyA9IGNhW2ldO1xuICAgICAgICAgICAgd2hpbGUgKGMuY2hhckF0KDApID09PSBcIiBcIikge1xuICAgICAgICAgICAgICAgIGMgPSBjLnN1YnN0cmluZygxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChjLmluZGV4T2YobmFtZSkgPT09IDApIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gYy5zdWJzdHJpbmcobmFtZS5sZW5ndGgsIGMubGVuZ3RoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gXCJcIjtcbiAgICB9XG5cbiAgICBnZXRDb29raWVFeHBpcmF0aW9uVGltZShjb29raWVMaWZlRGF5czogbnVtYmVyKTogc3RyaW5nIHtcbiAgICAgICAgY29uc3QgdG9kYXkgPSBuZXcgRGF0ZSgpO1xuICAgICAgICBjb25zdCBleHByID0gbmV3IERhdGUodG9kYXkuZ2V0VGltZSgpICsgY29va2llTGlmZURheXMgKiAyNCAqIDYwICogNjAgKiAxMDAwKTtcbiAgICAgICAgcmV0dXJuIGV4cHIudG9VVENTdHJpbmcoKTtcbiAgICB9XG5cbiAgICBjbGVhckNvb2tpZSgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5zZXRJdGVtQ29va2llKENvbnN0YW50cy5ub25jZUlkVG9rZW4sIFwiXCIsIC0xKTtcbiAgICAgICAgdGhpcy5zZXRJdGVtQ29va2llKENvbnN0YW50cy5zdGF0ZUxvZ2luLCBcIlwiLCAtMSk7XG4gICAgICAgIHRoaXMuc2V0SXRlbUNvb2tpZShDb25zdGFudHMubG9naW5SZXF1ZXN0LCBcIlwiLCAtMSk7XG4gICAgICAgIHRoaXMuc2V0SXRlbUNvb2tpZShDb25zdGFudHMuc3RhdGVBY3F1aXJlVG9rZW4sIFwiXCIsIC0xKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGUgYWNxdWlyZVRva2VuQWNjb3VudEtleSB0byBjYWNoZSBhY2NvdW50IG9iamVjdFxuICAgICAqIEBwYXJhbSBhY2NvdW50SWRcbiAgICAgKiBAcGFyYW0gc3RhdGVcbiAgICAgKi9cbiAgICBzdGF0aWMgZ2VuZXJhdGVBY3F1aXJlVG9rZW5BY2NvdW50S2V5KGFjY291bnRJZDogYW55LCBzdGF0ZTogc3RyaW5nKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIENhY2hlS2V5cy5BQ1FVSVJFX1RPS0VOX0FDQ09VTlQgKyBDb25zdGFudHMucmVzb3VyY2VEZWxpbWl0ZXIgK1xuICAgICAgICAgICAgYCR7YWNjb3VudElkfWAgKyBDb25zdGFudHMucmVzb3VyY2VEZWxpbWl0ZXIgICsgYCR7c3RhdGV9YDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGUgYXV0aG9yaXR5S2V5IHRvIGNhY2hlIGF1dGhvcml0eVxuICAgICAqIEBwYXJhbSBzdGF0ZVxuICAgICAqL1xuICAgIHN0YXRpYyBnZW5lcmF0ZUF1dGhvcml0eUtleShzdGF0ZTogc3RyaW5nKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIENhY2hlS2V5cy5BVVRIT1JJVFkgKyBDb25zdGFudHMucmVzb3VyY2VEZWxpbWl0ZXIgKyBgJHtzdGF0ZX1gO1xuICAgIH1cbn1cbiIsIi8qXG4gKiBDb3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cbiAqL1xuXG5pbXBvcnQgeyBBY2Nlc3NUb2tlbktleSB9IGZyb20gXCIuL0FjY2Vzc1Rva2VuS2V5XCI7XG5pbXBvcnQgeyBBY2Nlc3NUb2tlblZhbHVlIH0gZnJvbSBcIi4vQWNjZXNzVG9rZW5WYWx1ZVwiO1xuXG4vKipcbiAqIEBoaWRkZW5cbiAqL1xuZXhwb3J0IGNsYXNzIEFjY2Vzc1Rva2VuQ2FjaGVJdGVtIHtcblxuICAgIGtleTogQWNjZXNzVG9rZW5LZXk7XG4gICAgdmFsdWU6IEFjY2Vzc1Rva2VuVmFsdWU7XG5cbiAgICBjb25zdHJ1Y3RvcihrZXk6IEFjY2Vzc1Rva2VuS2V5LCB2YWx1ZTogQWNjZXNzVG9rZW5WYWx1ZSkge1xuICAgICAgICB0aGlzLmtleSA9IGtleTtcbiAgICAgICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IENsaWVudEF1dGhFcnJvciB9IGZyb20gXCIuLi9lcnJvci9DbGllbnRBdXRoRXJyb3JcIjtcbmltcG9ydCB7IFVybFV0aWxzIH0gZnJvbSBcIi4vVXJsVXRpbHNcIjtcbmltcG9ydCB7IExvZ2dlciB9IGZyb20gXCIuLi9Mb2dnZXJcIjtcblxuZXhwb3J0IGNsYXNzIFdpbmRvd1V0aWxzIHtcbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICogSW50ZXJ2YWwgaW4gbWlsbGlzZWNvbmRzIHRoYXQgd2UgcG9sbCBhIHdpbmRvd1xuICAgICAqIEBpZ25vcmVcbiAgICAgKi9cbiAgICBwcml2YXRlIHN0YXRpYyBQT0xMSU5HX0lOVEVSVkFMX01TID0gNTA7XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICogQ2hlY2tzIGlmIHRoZSBjdXJyZW50IHBhZ2UgaXMgcnVubmluZyBpbiBhbiBpZnJhbWUuXG4gICAgICogQGlnbm9yZVxuICAgICAqL1xuICAgIHN0YXRpYyBpc0luSWZyYW1lKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gd2luZG93LnBhcmVudCAhPT0gd2luZG93O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKiBDaGVjayBpZiB0aGUgY3VycmVudCBwYWdlIGlzIHJ1bm5pbmcgaW4gYSBwb3B1cC5cbiAgICAgKiBAaWdub3JlXG4gICAgICovXG4gICAgc3RhdGljIGlzSW5Qb3B1cCgpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuICEhKHdpbmRvdy5vcGVuZXIgJiYgd2luZG93Lm9wZW5lciAhPT0gd2luZG93KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICogTW9uaXRvcnMgYSB3aW5kb3cgdW50aWwgaXQgbG9hZHMgYSB1cmwgd2l0aCBhIGhhc2hcbiAgICAgKiBAaWdub3JlXG4gICAgICovXG4gICAgc3RhdGljIG1vbml0b3JXaW5kb3dGb3JIYXNoKGNvbnRlbnRXaW5kb3c6IFdpbmRvdywgdGltZW91dDogbnVtYmVyKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG1heFRpY2tzID0gdGltZW91dCAvIFdpbmRvd1V0aWxzLlBPTExJTkdfSU5URVJWQUxfTVM7XG4gICAgICAgICAgICBsZXQgdGlja3MgPSAwO1xuXG4gICAgICAgICAgICBjb25zdCBpbnRlcnZhbElkID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChjb250ZW50V2luZG93LmNsb3NlZCkge1xuICAgICAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKGludGVydmFsSWQpO1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgbGV0IGhyZWY7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgLypcbiAgICAgICAgICAgICAgICAgICAgICogV2lsbCB0aHJvdyBpZiBjcm9zcyBvcmlnaW4sXG4gICAgICAgICAgICAgICAgICAgICAqIHdoaWNoIHNob3VsZCBiZSBjYXVnaHQgYW5kIGlnbm9yZWRcbiAgICAgICAgICAgICAgICAgICAgICogc2luY2Ugd2UgbmVlZCB0aGUgaW50ZXJ2YWwgdG8ga2VlcCBydW5uaW5nIHdoaWxlIG9uIFNUUyBVSS5cbiAgICAgICAgICAgICAgICAgICAgICovXG4gICAgICAgICAgICAgICAgICAgIGhyZWYgPSBjb250ZW50V2luZG93LmxvY2F0aW9uLmhyZWY7XG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZSkge31cblxuICAgICAgICAgICAgICAgIC8vIERvbid0IHByb2Nlc3MgYmxhbmsgcGFnZXMgb3IgY3Jvc3MgZG9tYWluXG4gICAgICAgICAgICAgICAgaWYgKCFocmVmIHx8IGhyZWYgPT09IFwiYWJvdXQ6YmxhbmtcIikge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gT25seSBydW4gY2xvY2sgd2hlbiB3ZSBhcmUgb24gc2FtZSBkb21haW5cbiAgICAgICAgICAgICAgICB0aWNrcysrO1xuXG4gICAgICAgICAgICAgICAgaWYgKFVybFV0aWxzLnVybENvbnRhaW5zSGFzaChocmVmKSkge1xuICAgICAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKGludGVydmFsSWQpO1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKGNvbnRlbnRXaW5kb3cubG9jYXRpb24uaGFzaCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0aWNrcyA+IG1heFRpY2tzKSB7XG4gICAgICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWxJZCk7XG4gICAgICAgICAgICAgICAgICAgIHJlamVjdChDbGllbnRBdXRoRXJyb3IuY3JlYXRlVG9rZW5SZW5ld2FsVGltZW91dEVycm9yKCkpOyAvLyBiZXR0ZXIgZXJyb3I/XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwgV2luZG93VXRpbHMuUE9MTElOR19JTlRFUlZBTF9NUyk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKiBMb2FkcyBpZnJhbWUgd2l0aCBhdXRob3JpemF0aW9uIGVuZHBvaW50IFVSTFxuICAgICAqIEBpZ25vcmVcbiAgICAgKi9cbiAgICBzdGF0aWMgbG9hZEZyYW1lKHVybE5hdmlnYXRlOiBzdHJpbmcsIGZyYW1lTmFtZTogc3RyaW5nLCB0aW1lb3V0TXM6IG51bWJlciwgbG9nZ2VyOiBMb2dnZXIpOiBQcm9taXNlPEhUTUxJRnJhbWVFbGVtZW50PiB7XG4gICAgICAgIC8qXG4gICAgICAgICAqIFRoaXMgdHJpY2sgb3ZlcmNvbWVzIGlmcmFtZSBuYXZpZ2F0aW9uIGluIElFXG4gICAgICAgICAqIElFIGRvZXMgbm90IGxvYWQgdGhlIHBhZ2UgY29uc2lzdGVudGx5IGluIGlmcmFtZVxuICAgICAgICAgKi9cbiAgICAgICAgbG9nZ2VyLmluZm8oXCJMb2FkRnJhbWU6IFwiICsgZnJhbWVOYW1lKTtcblxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgZnJhbWVIYW5kbGUgPSBXaW5kb3dVdGlscy5hZGRIaWRkZW5JRnJhbWUoZnJhbWVOYW1lLCBsb2dnZXIpO1xuXG4gICAgICAgICAgICAgICAgaWYgKCFmcmFtZUhhbmRsZSkge1xuICAgICAgICAgICAgICAgICAgICByZWplY3QoYFVuYWJsZSB0byBsb2FkIGlmcmFtZSB3aXRoIG5hbWU6ICR7ZnJhbWVOYW1lfWApO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKGZyYW1lSGFuZGxlLnNyYyA9PT0gXCJcIiB8fCBmcmFtZUhhbmRsZS5zcmMgPT09IFwiYWJvdXQ6YmxhbmtcIikge1xuICAgICAgICAgICAgICAgICAgICBmcmFtZUhhbmRsZS5zcmMgPSB1cmxOYXZpZ2F0ZTtcbiAgICAgICAgICAgICAgICAgICAgbG9nZ2VyLmluZm9QaWkoXCJGcmFtZSBOYW1lIDogXCIgKyBmcmFtZU5hbWUgKyBcIiBOYXZpZ2F0ZWQgdG86IFwiICsgdXJsTmF2aWdhdGUpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHJlc29sdmUoZnJhbWVIYW5kbGUpO1xuICAgICAgICAgICAgfSwgdGltZW91dE1zKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqIEFkZHMgdGhlIGhpZGRlbiBpZnJhbWUgZm9yIHNpbGVudCB0b2tlbiByZW5ld2FsLlxuICAgICAqIEBpZ25vcmVcbiAgICAgKi9cbiAgICBzdGF0aWMgYWRkSGlkZGVuSUZyYW1lKGlmcmFtZUlkOiBzdHJpbmcsIGxvZ2dlcjogTG9nZ2VyKTogSFRNTElGcmFtZUVsZW1lbnQge1xuICAgICAgICBpZiAodHlwZW9mIGlmcmFtZUlkID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIGxvZ2dlci5pbmZvKFwiQWRkIG1zYWwgZnJhbWUgdG8gZG9jdW1lbnQ6XCIgKyBpZnJhbWVJZCk7XG4gICAgICAgIGxldCBhZGFsRnJhbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZnJhbWVJZCkgYXMgSFRNTElGcmFtZUVsZW1lbnQ7XG4gICAgICAgIGlmICghYWRhbEZyYW1lKSB7XG4gICAgICAgICAgICBpZiAoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCAmJlxuICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQgJiZcbiAgICAgICAgKHdpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50LmluZGV4T2YoXCJNU0lFIDUuMFwiKSA9PT0gLTEpKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgaWZyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlmcmFtZVwiKTtcbiAgICAgICAgICAgICAgICBpZnIuc2V0QXR0cmlidXRlKFwiaWRcIiwgaWZyYW1lSWQpO1xuICAgICAgICAgICAgICAgIGlmci5zdHlsZS52aXNpYmlsaXR5ID0gXCJoaWRkZW5cIjtcbiAgICAgICAgICAgICAgICBpZnIuc3R5bGUucG9zaXRpb24gPSBcImFic29sdXRlXCI7XG4gICAgICAgICAgICAgICAgaWZyLnN0eWxlLndpZHRoID0gaWZyLnN0eWxlLmhlaWdodCA9IFwiMFwiO1xuICAgICAgICAgICAgICAgIGlmci5zdHlsZS5ib3JkZXIgPSBcIjBcIjtcbiAgICAgICAgICAgICAgICBpZnIuc2V0QXR0cmlidXRlKFwic2FuZGJveFwiLCBcImFsbG93LXNhbWUtb3JpZ2luXCIpO1xuICAgICAgICAgICAgICAgIGFkYWxGcmFtZSA9IChkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcImJvZHlcIilbMF0uYXBwZW5kQ2hpbGQoaWZyKSBhcyBIVE1MSUZyYW1lRWxlbWVudCk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGRvY3VtZW50LmJvZHkgJiYgZG9jdW1lbnQuYm9keS5pbnNlcnRBZGphY2VudEhUTUwpIHtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5ib2R5Lmluc2VydEFkamFjZW50SFRNTChcImJlZm9yZWVuZFwiLCBcIjxpZnJhbWUgbmFtZT0nXCIgKyBpZnJhbWVJZCArIFwiJyBpZD0nXCIgKyBpZnJhbWVJZCArIFwiJyBzdHlsZT0nZGlzcGxheTpub25lJz48L2lmcmFtZT5cIik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh3aW5kb3cuZnJhbWVzICYmIHdpbmRvdy5mcmFtZXNbaWZyYW1lSWRdKSB7XG4gICAgICAgICAgICAgICAgYWRhbEZyYW1lID0gd2luZG93LmZyYW1lc1tpZnJhbWVJZF07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gYWRhbEZyYW1lO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKiBGaW5kIGFuZCByZXR1cm4gdGhlIGlmcmFtZSBlbGVtZW50IHdpdGggdGhlIGdpdmVuIGhhc2hcbiAgICAgKiBAaWdub3JlXG4gICAgICovXG4gICAgc3RhdGljIGdldElmcmFtZVdpdGhIYXNoKGhhc2g6IHN0cmluZykge1xuICAgICAgICByZXR1cm4gQXJyYXkuZnJvbShkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcImlmcmFtZVwiKSkuZmluZChpZnJhbWUgPT4ge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gaWZyYW1lLmNvbnRlbnRXaW5kb3cubG9jYXRpb24uaGFzaCA9PT0gaGFzaDtcbiAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKiBSZXR1cm5zIGFuIGFycmF5IG9mIGFsbCB0aGUgcG9wdXBzIG9wZW5lZCBieSBNU0FMXG4gICAgICogQGlnbm9yZVxuICAgICAqL1xuICAgIHN0YXRpYyBnZXRQb3B1cHMoKTogQXJyYXk8V2luZG93PiB7XG4gICAgICAgIGlmICghd2luZG93Lm9wZW5lZFdpbmRvd3MpIHtcbiAgICAgICAgICAgIHdpbmRvdy5vcGVuZWRXaW5kb3dzID0gW107XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gd2luZG93Lm9wZW5lZFdpbmRvd3M7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqIEZpbmQgYW5kIHJldHVybiB0aGUgcG9wdXAgd2l0aCB0aGUgZ2l2ZW4gaGFzaFxuICAgICAqIEBpZ25vcmVcbiAgICAgKi9cbiAgICBzdGF0aWMgZ2V0UG9wVXBXaXRoSGFzaChoYXNoOiBzdHJpbmcpOiBXaW5kb3cge1xuICAgICAgICByZXR1cm4gV2luZG93VXRpbHMuZ2V0UG9wdXBzKCkuZmluZChwb3B1cCA9PiB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIHJldHVybiBwb3B1cC5sb2NhdGlvbi5oYXNoID09PSBoYXNoO1xuICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqIEFkZCB0aGUgcG9wdXAgdG8gdGhlIGtub3duIGxpc3Qgb2YgcG9wdXBzXG4gICAgICogQGlnbm9yZVxuICAgICAqL1xuICAgIHN0YXRpYyB0cmFja1BvcHVwKHBvcHVwOiBXaW5kb3cpOiB2b2lkIHtcbiAgICAgICAgV2luZG93VXRpbHMuZ2V0UG9wdXBzKCkucHVzaChwb3B1cCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqIENsb3NlIGFsbCBwb3B1cHNcbiAgICAgKiBAaWdub3JlXG4gICAgICovXG4gICAgc3RhdGljIGNsb3NlUG9wdXBzKCk6IHZvaWQge1xuICAgICAgICBXaW5kb3dVdGlscy5nZXRQb3B1cHMoKS5mb3JFYWNoKHBvcHVwID0+IHBvcHVwLmNsb3NlKCkpO1xuICAgIH1cblxufVxuIiwiLypcbiAqIENvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxuICovXG5cbi8qKlxuICogQGhpZGRlblxuICovXG5leHBvcnQgY2xhc3MgVGltZVV0aWxzIHtcbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRpbWUgaW4gc2Vjb25kcyBmb3IgZXhwaXJhdGlvbiBiYXNlZCBvbiBzdHJpbmcgdmFsdWUgcGFzc2VkIGluLlxuICAgICAqXG4gICAgICogQHBhcmFtIGV4cGlyZXNJblxuICAgICAqL1xuICAgIHN0YXRpYyBwYXJzZUV4cGlyZXNJbihleHBpcmVzSW46IHN0cmluZyk6IG51bWJlciB7XG4gICAgICAgIC8vIGlmIEFBRCBkaWQgbm90IHNlbmQgXCJleHBpcmVzX2luXCIgcHJvcGVydHksIHVzZSBkZWZhdWx0IGV4cGlyYXRpb24gb2YgMzU5OSBzZWNvbmRzLCBmb3Igc29tZSByZWFzb24gQUFEIHNlbmRzIDM1OTkgYXMgXCJleHBpcmVzX2luXCIgdmFsdWUgaW5zdGVhZCBvZiAzNjAwXG4gICAgICAgIGlmICghZXhwaXJlc0luKSB7XG4gICAgICAgICAgICBleHBpcmVzSW4gPSBcIjM1OTlcIjtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcGFyc2VJbnQoZXhwaXJlc0luLCAxMCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogcmV0dXJuIHRoZSBjdXJyZW50IHRpbWUgaW4gVW5peCB0aW1lLiBEYXRlLmdldFRpbWUoKSByZXR1cm5zIGluIG1pbGxpc2Vjb25kcy5cbiAgICAgKi9cbiAgICBzdGF0aWMgbm93KCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiBNYXRoLnJvdW5kKG5ldyBEYXRlKCkuZ2V0VGltZSgpIC8gMTAwMC4wKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBBdXRoUmVzcG9uc2UgfSBmcm9tIFwiLi4vQXV0aFJlc3BvbnNlXCI7XG5pbXBvcnQgeyBJZFRva2VuIH0gZnJvbSBcIi4uL0lkVG9rZW5cIjtcblxuLypcbiAqIENvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxuICovXG5cbi8qKlxuICogQGhpZGRlblxuICovXG5leHBvcnQgY2xhc3MgUmVzcG9uc2VVdGlscyB7XG5cbiAgICBzdGF0aWMgc2V0UmVzcG9uc2VJZFRva2VuKG9yaWdpbmFsUmVzcG9uc2U6IEF1dGhSZXNwb25zZSwgaWRUb2tlbk9iajogSWRUb2tlbikgOiBBdXRoUmVzcG9uc2Uge1xuICAgICAgICBpZiAoIW9yaWdpbmFsUmVzcG9uc2UpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9IGVsc2UgaWYgKCFpZFRva2VuT2JqKSB7XG4gICAgICAgICAgICByZXR1cm4gb3JpZ2luYWxSZXNwb25zZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGV4cCA9IE51bWJlcihpZFRva2VuT2JqLmV4cGlyYXRpb24pO1xuICAgICAgICBpZiAoZXhwICYmICFvcmlnaW5hbFJlc3BvbnNlLmV4cGlyZXNPbikge1xuICAgICAgICAgICAgb3JpZ2luYWxSZXNwb25zZS5leHBpcmVzT24gPSBuZXcgRGF0ZShleHAgKiAxMDAwKTtcbiAgICAgICAgfVxuICAgIFxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgLi4ub3JpZ2luYWxSZXNwb25zZSxcbiAgICAgICAgICAgIGlkVG9rZW46IGlkVG9rZW5PYmosXG4gICAgICAgICAgICBpZFRva2VuQ2xhaW1zOiBpZFRva2VuT2JqLmNsYWltcyxcbiAgICAgICAgICAgIHVuaXF1ZUlkOiBpZFRva2VuT2JqLm9iamVjdElkIHx8IGlkVG9rZW5PYmouc3ViamVjdCxcbiAgICAgICAgICAgIHRlbmFudElkOiBpZFRva2VuT2JqLnRlbmFudElkLFxuICAgICAgICB9O1xuICAgIH1cbn1cbiIsIi8qXG4gKiBDb3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cbiAqL1xuXG4vKipcbiAqIEBoaWRkZW5cbiAqL1xuaW1wb3J0IHsgQWFkQXV0aG9yaXR5IH0gZnJvbSBcIi4vQWFkQXV0aG9yaXR5XCI7XG5pbXBvcnQgeyBCMmNBdXRob3JpdHkgfSBmcm9tIFwiLi9CMmNBdXRob3JpdHlcIjtcbmltcG9ydCB7IEF1dGhvcml0eSwgQXV0aG9yaXR5VHlwZSB9IGZyb20gXCIuL0F1dGhvcml0eVwiO1xuaW1wb3J0IHsgQ2xpZW50Q29uZmlndXJhdGlvbkVycm9yTWVzc2FnZSB9IGZyb20gXCIuLi9lcnJvci9DbGllbnRDb25maWd1cmF0aW9uRXJyb3JcIjtcbmltcG9ydCB7IFVybFV0aWxzIH0gZnJvbSBcIi4uL3V0aWxzL1VybFV0aWxzXCI7XG5pbXBvcnQgeyBTdHJpbmdVdGlscyB9IGZyb20gXCIuLi91dGlscy9TdHJpbmdVdGlsc1wiO1xuXG5leHBvcnQgY2xhc3MgQXV0aG9yaXR5RmFjdG9yeSB7XG4gICAgLyoqXG4gICAgICogUGFyc2UgdGhlIHVybCBhbmQgZGV0ZXJtaW5lIHRoZSB0eXBlIG9mIGF1dGhvcml0eVxuICAgICAqL1xuICAgIHByaXZhdGUgc3RhdGljIERldGVjdEF1dGhvcml0eUZyb21VcmwoYXV0aG9yaXR5VXJsOiBzdHJpbmcpOiBBdXRob3JpdHlUeXBlIHtcbiAgICAgICAgYXV0aG9yaXR5VXJsID0gVXJsVXRpbHMuQ2Fub25pY2FsaXplVXJpKGF1dGhvcml0eVVybCk7XG4gICAgICAgIGNvbnN0IGNvbXBvbmVudHMgPSBVcmxVdGlscy5HZXRVcmxDb21wb25lbnRzKGF1dGhvcml0eVVybCk7XG4gICAgICAgIGNvbnN0IHBhdGhTZWdtZW50cyA9IGNvbXBvbmVudHMuUGF0aFNlZ21lbnRzO1xuICAgICAgICBzd2l0Y2ggKHBhdGhTZWdtZW50c1swXSkge1xuICAgICAgICAgICAgY2FzZSBcInRmcFwiOlxuICAgICAgICAgICAgICAgIHJldHVybiBBdXRob3JpdHlUeXBlLkIyQztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIEF1dGhvcml0eVR5cGUuQWFkO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlIGFuIGF1dGhvcml0eSBvYmplY3Qgb2YgdGhlIGNvcnJlY3QgdHlwZSBiYXNlZCBvbiB0aGUgdXJsXG4gICAgICogUGVyZm9ybXMgYmFzaWMgYXV0aG9yaXR5IHZhbGlkYXRpb24gLSBjaGVja3MgdG8gc2VlIGlmIHRoZSBhdXRob3JpdHkgaXMgb2YgYSB2YWxpZCB0eXBlIChlZyBhYWQsIGIyYylcbiAgICAgKi9cbiAgICBwdWJsaWMgc3RhdGljIENyZWF0ZUluc3RhbmNlKGF1dGhvcml0eVVybDogc3RyaW5nLCB2YWxpZGF0ZUF1dGhvcml0eTogYm9vbGVhbik6IEF1dGhvcml0eSB7XG4gICAgICAgIGlmIChTdHJpbmdVdGlscy5pc0VtcHR5KGF1dGhvcml0eVVybCkpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHR5cGUgPSBBdXRob3JpdHlGYWN0b3J5LkRldGVjdEF1dGhvcml0eUZyb21VcmwoYXV0aG9yaXR5VXJsKTtcbiAgICAgICAgLy8gRGVwZW5kaW5nIG9uIGFib3ZlIGRldGVjdGlvbiwgY3JlYXRlIHRoZSByaWdodCB0eXBlLlxuICAgICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgQXV0aG9yaXR5VHlwZS5CMkM6XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBCMmNBdXRob3JpdHkoYXV0aG9yaXR5VXJsLCB2YWxpZGF0ZUF1dGhvcml0eSk7XG4gICAgICAgICAgICBjYXNlIEF1dGhvcml0eVR5cGUuQWFkOlxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgQWFkQXV0aG9yaXR5KGF1dGhvcml0eVVybCwgdmFsaWRhdGVBdXRob3JpdHkpO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICB0aHJvdyBDbGllbnRDb25maWd1cmF0aW9uRXJyb3JNZXNzYWdlLmludmFsaWRBdXRob3JpdHlUeXBlO1xuICAgICAgICB9XG4gICAgfVxuXG59XG4iLCJpbXBvcnQgVGVsZW1ldHJ5RXZlbnQgZnJvbSBcIi4vVGVsZW1ldHJ5RXZlbnRcIjtcbmltcG9ydCB7XG4gICAgQ29tcGxldGVkRXZlbnRzLFxuICAgIEV2ZW50Q291bnQsXG4gICAgRXZlbnRDb3VudEJ5Q29ycmVsYXRpb25JZCxcbiAgICBJblByb2dyZXNzRXZlbnRzLFxuICAgIFRlbGVtZXRyeUNvbmZpZyxcbiAgICBUZWxlbWV0cnlQbGF0Zm9ybSxcbiAgICBUZWxlbWV0cnlFbWl0dGVyXG59IGZyb20gXCIuL1RlbGVtZXRyeVR5cGVzXCI7XG5pbXBvcnQgRGVmYXVsdEV2ZW50IGZyb20gXCIuL0RlZmF1bHRFdmVudFwiO1xuXG4vLyBmb3IgdXNlIGluIGNhY2hlIGV2ZW50c1xuY29uc3QgTVNBTF9DQUNIRV9FVkVOVF9WQUxVRV9QUkVGSVggPSBcIm1zYWwudG9rZW5cIjtcbmNvbnN0IE1TQUxfQ0FDSEVfRVZFTlRfTkFNRSA9IFwibXNhbC5jYWNoZV9ldmVudFwiO1xuXG5jb25zdCBjcmVhdGVFdmVudEtleSA9IChldmVudDogVGVsZW1ldHJ5RXZlbnQpOiBzdHJpbmcgPT4gKFxuICAgIGAke2V2ZW50LnRlbGVtZXRyeUNvcnJlbGF0aW9uSWR9LSR7ZXZlbnQuZXZlbnRJZH0tJHtldmVudC5ldmVudE5hbWV9YFxuKTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGVsZW1ldHJ5TWFuYWdlciB7XG5cbiAgICAvLyBjb3JyZWxhdGlvbiBJZCB0byBsaXN0IG9mIGV2ZW50c1xuICAgIHByaXZhdGUgY29tcGxldGVkRXZlbnRzOiBDb21wbGV0ZWRFdmVudHMgPSB7fTtcbiAgICAvLyBldmVudCBrZXkgdG8gZXZlbnRcbiAgICBwcml2YXRlIGluUHJvZ3Jlc3NFdmVudHM6IEluUHJvZ3Jlc3NFdmVudHMgPSB7fTtcbiAgICAvLyBjb3JyZWxhdGlvbiBpZCB0byBtYXAgb2YgZXZlbnRuYW1lIHRvIGNvdW50XG4gICAgcHJpdmF0ZSBldmVudENvdW50QnlDb3JyZWxhdGlvbklkOiBFdmVudENvdW50QnlDb3JyZWxhdGlvbklkID0ge307XG5cbiAgICAvLyBJbXBsZW1lbnQgYWZ0ZXIgQVBJIEVWRU5UXG4gICAgcHJpdmF0ZSBvbmx5U2VuZEZhaWx1cmVUZWxlbWV0cnk6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBwcml2YXRlIHRlbGVtZXRyeVBsYXRmb3JtOiBUZWxlbWV0cnlQbGF0Zm9ybTtcbiAgICBwcml2YXRlIGNsaWVudElkOiBzdHJpbmc7XG4gICAgcHJpdmF0ZSB0ZWxlbWV0cnlFbWl0dGVyOiBUZWxlbWV0cnlFbWl0dGVyO1xuXG4gICAgY29uc3RydWN0b3IoY29uZmlnOiBUZWxlbWV0cnlDb25maWcsIHRlbGVtZXRyeUVtaXR0ZXI6IFRlbGVtZXRyeUVtaXR0ZXIpIHtcbiAgICAgICAgLy8gVE9ETyBUSFJPVyBpZiBiYWQgb3B0aW9uc1xuICAgICAgICB0aGlzLnRlbGVtZXRyeVBsYXRmb3JtID0gY29uZmlnLnBsYXRmb3JtO1xuICAgICAgICB0aGlzLmNsaWVudElkID0gY29uZmlnLmNsaWVudElkO1xuICAgICAgICB0aGlzLm9ubHlTZW5kRmFpbHVyZVRlbGVtZXRyeSA9IGNvbmZpZy5vbmx5U2VuZEZhaWx1cmVUZWxlbWV0cnk7XG4gICAgICAgIC8qXG4gICAgICAgICAqIFRPRE8sIHdoZW4gaSBnZXQgdG8gd2lyaW5nIHRoaXMgdGhyb3VnaCwgdGhpbmsgYWJvdXQgd2hhdCBpdCBtZWFucyBpZlxuICAgICAgICAgKiBhIGRldmVsb3BlciBkb2VzIG5vdCBpbXBsZW1lbnQgdGVsZW0gYXQgYWxsLCB3ZSBzdGlsbCBpbnN0cnVtZW50LCBidXQgdGVsZW1ldHJ5RW1pdHRlciBjYW4gYmVcbiAgICAgICAgICogb3B0aW9uYWw/XG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLnRlbGVtZXRyeUVtaXR0ZXIgPSB0ZWxlbWV0cnlFbWl0dGVyO1xuICAgIH1cblxuICAgIHN0YXJ0RXZlbnQoZXZlbnQ6IFRlbGVtZXRyeUV2ZW50KSB7XG4gICAgICAgIGlmICghdGhpcy50ZWxlbWV0cnlFbWl0dGVyKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgZXZlbnRLZXkgPSBjcmVhdGVFdmVudEtleShldmVudCk7XG4gICAgICAgIHRoaXMuaW5Qcm9ncmVzc0V2ZW50c1tldmVudEtleV0gPSBldmVudDtcbiAgICB9XG5cbiAgICBzdG9wRXZlbnQoZXZlbnQ6IFRlbGVtZXRyeUV2ZW50KSB7XG4gICAgICAgIGNvbnN0IGV2ZW50S2V5ID0gY3JlYXRlRXZlbnRLZXkoZXZlbnQpO1xuICAgICAgICBpZiAoIXRoaXMudGVsZW1ldHJ5RW1pdHRlciB8fCAhdGhpcy5pblByb2dyZXNzRXZlbnRzW2V2ZW50S2V5XSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGV2ZW50LnN0b3AoKTtcbiAgICAgICAgdGhpcy5pbmNyZW1lbnRFdmVudENvdW50KGV2ZW50KTtcblxuICAgICAgICBjb25zdCBjb21wbGV0ZWRFdmVudHMgPSB0aGlzLmNvbXBsZXRlZEV2ZW50c1tldmVudC50ZWxlbWV0cnlDb3JyZWxhdGlvbklkXTtcblxuICAgICAgICB0aGlzLmNvbXBsZXRlZEV2ZW50c1tldmVudC50ZWxlbWV0cnlDb3JyZWxhdGlvbklkXSA9IFsuLi4oY29tcGxldGVkRXZlbnRzIHx8IFtdKSwgZXZlbnRdO1xuXG4gICAgICAgIGRlbGV0ZSB0aGlzLmluUHJvZ3Jlc3NFdmVudHNbZXZlbnRLZXldO1xuICAgIH1cblxuICAgIGZsdXNoKGNvcnJlbGF0aW9uSWQ6IHN0cmluZyk6IHZvaWQge1xuXG4gICAgICAgIC8vIElmIHRoZXJlIGlzIG9ubHkgdW5maW5pc2hlZCBldmVudHMgc2hvdWxkIHRoaXMgc3RpbGwgcmV0dXJuIHRoZW0/XG4gICAgICAgIGlmICghdGhpcy50ZWxlbWV0cnlFbWl0dGVyIHx8ICF0aGlzLmNvbXBsZXRlZEV2ZW50c1tjb3JyZWxhdGlvbklkXSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3Qgb3JwaGFuZWRFdmVudHMgPSB0aGlzLmdldE9ycGhhbmVkRXZlbnRzKGNvcnJlbGF0aW9uSWQpO1xuICAgICAgICBvcnBoYW5lZEV2ZW50cy5mb3JFYWNoKGV2ZW50ID0+IHRoaXMuaW5jcmVtZW50RXZlbnRDb3VudChldmVudCkpO1xuICAgICAgICBjb25zdCBldmVudHNUb0ZsdXNoOiBBcnJheTxUZWxlbWV0cnlFdmVudD4gPSBbXG4gICAgICAgICAgICAuLi50aGlzLmNvbXBsZXRlZEV2ZW50c1tjb3JyZWxhdGlvbklkXSxcbiAgICAgICAgICAgIC4uLm9ycGhhbmVkRXZlbnRzXG4gICAgICAgIF07XG5cbiAgICAgICAgZGVsZXRlIHRoaXMuY29tcGxldGVkRXZlbnRzW2NvcnJlbGF0aW9uSWRdO1xuICAgICAgICBjb25zdCBldmVudENvdW50c1RvRmx1c2g6IEV2ZW50Q291bnQgPSB0aGlzLmV2ZW50Q291bnRCeUNvcnJlbGF0aW9uSWRbY29ycmVsYXRpb25JZF07XG5cbiAgICAgICAgZGVsZXRlIHRoaXMuZXZlbnRDb3VudEJ5Q29ycmVsYXRpb25JZFtjb3JyZWxhdGlvbklkXTtcbiAgICAgICAgLy8gVE9ETyBhZGQgZnVuY2l0b25hbGl0eSBmb3Igb25seUZsdXNoRmFpbHVyZXMgYWZ0ZXIgaW1wbGVtZW50aW5nIGFwaSBldmVudD8gPz9cblxuICAgICAgICBpZiAoIWV2ZW50c1RvRmx1c2ggfHwgIWV2ZW50c1RvRmx1c2gubGVuZ3RoKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBkZWZhdWx0RXZlbnQ6IERlZmF1bHRFdmVudCA9IG5ldyBEZWZhdWx0RXZlbnQoXG4gICAgICAgICAgICB0aGlzLnRlbGVtZXRyeVBsYXRmb3JtLFxuICAgICAgICAgICAgY29ycmVsYXRpb25JZCxcbiAgICAgICAgICAgIHRoaXMuY2xpZW50SWQsXG4gICAgICAgICAgICBldmVudENvdW50c1RvRmx1c2hcbiAgICAgICAgKTtcblxuICAgICAgICBjb25zdCBldmVudHNXaXRoRGVmYXVsdEV2ZW50ID0gWyAuLi5ldmVudHNUb0ZsdXNoLCBkZWZhdWx0RXZlbnQgXTtcblxuICAgICAgICB0aGlzLnRlbGVtZXRyeUVtaXR0ZXIoZXZlbnRzV2l0aERlZmF1bHRFdmVudC5tYXAoZSA9PiBlLmdldCgpKSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBpbmNyZW1lbnRFdmVudENvdW50KGV2ZW50OiBUZWxlbWV0cnlFdmVudCk6IHZvaWQge1xuICAgICAgICAvKlxuICAgICAgICAgKiBUT0RPLCBuYW1lIGNhY2hlIGV2ZW50IGRpZmZlcmVudD9cbiAgICAgICAgICogaWYgdHlwZSBpcyBjYWNoZSBldmVudCwgY2hhbmdlIG5hbWVcbiAgICAgICAgICovXG4gICAgICAgIGNvbnN0IGV2ZW50TmFtZSA9IGV2ZW50LmV2ZW50TmFtZTtcbiAgICAgICAgY29uc3QgZXZlbnRDb3VudCA9IHRoaXMuZXZlbnRDb3VudEJ5Q29ycmVsYXRpb25JZFtldmVudC50ZWxlbWV0cnlDb3JyZWxhdGlvbklkXTtcbiAgICAgICAgaWYgKCFldmVudENvdW50KSB7XG4gICAgICAgICAgICB0aGlzLmV2ZW50Q291bnRCeUNvcnJlbGF0aW9uSWRbZXZlbnQudGVsZW1ldHJ5Q29ycmVsYXRpb25JZF0gPSB7XG4gICAgICAgICAgICAgICAgW2V2ZW50TmFtZV06IDFcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBldmVudENvdW50W2V2ZW50TmFtZV0gPSBldmVudENvdW50W2V2ZW50TmFtZV0gPyBldmVudENvdW50W2V2ZW50TmFtZV0gKyAxIDogMTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgZ2V0T3JwaGFuZWRFdmVudHMoY29ycmVsYXRpb25JZDogc3RyaW5nKTogQXJyYXk8VGVsZW1ldHJ5RXZlbnQ+IHtcbiAgICAgICAgcmV0dXJuIE9iamVjdC5rZXlzKHRoaXMuaW5Qcm9ncmVzc0V2ZW50cylcbiAgICAgICAgICAgIC5yZWR1Y2UoKG1lbW8sIGV2ZW50S2V5KSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGV2ZW50S2V5LmluZGV4T2YoY29ycmVsYXRpb25JZCkgIT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGV2ZW50ID0gdGhpcy5pblByb2dyZXNzRXZlbnRzW2V2ZW50S2V5XTtcbiAgICAgICAgICAgICAgICAgICAgZGVsZXRlIHRoaXMuaW5Qcm9ncmVzc0V2ZW50c1tldmVudEtleV07XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbLi4ubWVtbywgZXZlbnRdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gbWVtbztcbiAgICAgICAgICAgIH0sIFtdKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBFVkVOVF9OQU1FX1BSRUZJWCwgVEVMRU1FVFJZX0JMT0JfRVZFTlRfTkFNRVMgfSBmcm9tIFwiLi9UZWxlbWV0cnlDb25zdGFudHNcIjtcbmltcG9ydCBUZWxlbWV0cnlFdmVudCBmcm9tIFwiLi9UZWxlbWV0cnlFdmVudFwiO1xuaW1wb3J0IHsgRXZlbnRDb3VudCwgVGVsZW1ldHJ5UGxhdGZvcm0gfSBmcm9tIFwiLi9UZWxlbWV0cnlUeXBlc1wiO1xuaW1wb3J0IHsgcHJlcGVuZEV2ZW50TmFtZVByZWZpeCB9IGZyb20gXCIuL1RlbGVtZXRyeVV0aWxzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERlZmF1bHRFdmVudCBleHRlbmRzIFRlbGVtZXRyeUV2ZW50IHtcbiAgICAvLyBUT0RPIFBsYXRmb3JtIFR5cGVcbiAgICBjb25zdHJ1Y3RvcihwbGF0Zm9ybTogVGVsZW1ldHJ5UGxhdGZvcm0sIGNvcnJlbGF0aW9uSWQ6IHN0cmluZywgY2xpZW50SWQ6IHN0cmluZywgZXZlbnRDb3VudDogRXZlbnRDb3VudCkge1xuICAgICAgICBzdXBlcihwcmVwZW5kRXZlbnROYW1lUHJlZml4KFwiZGVmYXVsdF9ldmVudFwiKSwgY29ycmVsYXRpb25JZCk7XG4gICAgICAgIHRoaXMuZXZlbnRbcHJlcGVuZEV2ZW50TmFtZVByZWZpeChcImNsaWVudF9pZFwiKV0gPSBjbGllbnRJZDtcbiAgICAgICAgdGhpcy5ldmVudFtwcmVwZW5kRXZlbnROYW1lUHJlZml4KFwic2RrX3BsYWZvcm1cIildID0gcGxhdGZvcm0uc2RrO1xuICAgICAgICB0aGlzLmV2ZW50W3ByZXBlbmRFdmVudE5hbWVQcmVmaXgoXCJzZGtfdmVyc2lvblwiKV0gPSBwbGF0Zm9ybS5zZGtWZXJzaW9uO1xuICAgICAgICB0aGlzLmV2ZW50W3ByZXBlbmRFdmVudE5hbWVQcmVmaXgoXCJhcHBsaWNhdGlvbl9uYW1lXCIpXSA9IHBsYXRmb3JtLmFwcGxpY2F0aW9uTmFtZTtcbiAgICAgICAgdGhpcy5ldmVudFtwcmVwZW5kRXZlbnROYW1lUHJlZml4KFwiYXBwbGljYXRpb25fdmVyc2lvblwiKV0gPSBwbGF0Zm9ybS5hcHBsaWNhdGlvblZlcnNpb247XG4gICAgICAgIHRoaXMuZXZlbnRbYCR7VEVMRU1FVFJZX0JMT0JfRVZFTlRfTkFNRVMuVWlFdmVudENvdW50VGVsZW1ldHJ5QmF0Y2hLZXl9YF0gPSB0aGlzLmdldEV2ZW50Q291bnQocHJlcGVuZEV2ZW50TmFtZVByZWZpeChcInVpX2V2ZW50XCIpLCBldmVudENvdW50KTtcbiAgICAgICAgdGhpcy5ldmVudFtgJHtURUxFTUVUUllfQkxPQl9FVkVOVF9OQU1FUy5IdHRwRXZlbnRDb3VudFRlbGVtZXRyeUJhdGNoS2V5fWBdID0gdGhpcy5nZXRFdmVudENvdW50KHByZXBlbmRFdmVudE5hbWVQcmVmaXgoXCJodHRwX2V2ZW50XCIpLCBldmVudENvdW50KTtcbiAgICAgICAgdGhpcy5ldmVudFtgJHtURUxFTUVUUllfQkxPQl9FVkVOVF9OQU1FUy5DYWNoZUV2ZW50Q291bnRDb25zdFN0cktleX1gXSA9IHRoaXMuZ2V0RXZlbnRDb3VudChwcmVwZW5kRXZlbnROYW1lUHJlZml4KFwiY2FjaGVfZXZlbnRcIiksIGV2ZW50Q291bnQpO1xuICAgICAgICAvLyAvIERldmljZSBpZD9cbiAgICB9XG5cbiAgICBwcml2YXRlIGdldEV2ZW50Q291bnQoZXZlbnROYW1lOiBzdHJpbmcsIGV2ZW50Q291bnQ6IEV2ZW50Q291bnQpOiBudW1iZXIge1xuICAgICAgICBpZiAoIWV2ZW50Q291bnRbZXZlbnROYW1lXSkge1xuICAgICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGV2ZW50Q291bnRbZXZlbnROYW1lXTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBURUxFTUVUUllfQkxPQl9FVkVOVF9OQU1FUyB9IGZyb20gXCIuL1RlbGVtZXRyeUNvbnN0YW50c1wiO1xuaW1wb3J0IHtcbiAgICBFVkVOVF9OQU1FX0tFWSxcbiAgICBTVEFSVF9USU1FX0tFWSxcbiAgICBFTEFQU0VEX1RJTUVfS0VZXG59IGZyb20gXCIuL1RlbGVtZXRyeUNvbnN0YW50c1wiO1xuaW1wb3J0IHsgcHJlcGVuZEV2ZW50TmFtZVByZWZpeCB9IGZyb20gXCIuL1RlbGVtZXRyeVV0aWxzXCI7XG5pbXBvcnQgeyBDcnlwdG9VdGlscyB9IGZyb20gXCIuLi91dGlscy9DcnlwdG9VdGlsc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUZWxlbWV0cnlFdmVudCB7XG5cbiAgICBwcml2YXRlIHN0YXJ0VGltZXN0YW1wOiBudW1iZXI7XG4gICAgcHJvdGVjdGVkIGV2ZW50OiBhbnk7IC8vIFRPRE8gVFlQRSBUSElTXG4gICAgcHVibGljIGV2ZW50SWQ6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKGV2ZW50TmFtZTogc3RyaW5nLCBjb3JyZWxhdGlvbklkOiBzdHJpbmcpIHtcblxuICAgICAgICB0aGlzLnN0YXJ0VGltZXN0YW1wID0gRGF0ZS5ub3coKTtcbiAgICAgICAgdGhpcy5ldmVudElkID0gQ3J5cHRvVXRpbHMuY3JlYXRlTmV3R3VpZCgpO1xuICAgICAgICB0aGlzLmV2ZW50ID0ge1xuICAgICAgICAgICAgW3ByZXBlbmRFdmVudE5hbWVQcmVmaXgoRVZFTlRfTkFNRV9LRVkpXTogZXZlbnROYW1lLFxuICAgICAgICAgICAgW3ByZXBlbmRFdmVudE5hbWVQcmVmaXgoU1RBUlRfVElNRV9LRVkpXTogdGhpcy5zdGFydFRpbWVzdGFtcCxcbiAgICAgICAgICAgIFtwcmVwZW5kRXZlbnROYW1lUHJlZml4KEVMQVBTRURfVElNRV9LRVkpXTogLTEsXG4gICAgICAgICAgICBbYCR7VEVMRU1FVFJZX0JMT0JfRVZFTlRfTkFNRVMuTXNhbENvcnJlbGF0aW9uSWRDb25zdFN0cktleX1gXTogY29ycmVsYXRpb25JZFxuICAgICAgICB9O1xuICAgIH1cblxuICAgIHByaXZhdGUgc2V0RWxhcHNlZFRpbWUodGltZTogTnVtYmVyKTogdm9pZCB7XG4gICAgICAgIHRoaXMuZXZlbnRbcHJlcGVuZEV2ZW50TmFtZVByZWZpeChFTEFQU0VEX1RJTUVfS0VZKV0gPSB0aW1lO1xuICAgIH1cblxuICAgIHB1YmxpYyBzdG9wKCk6IHZvaWQge1xuICAgICAgICAvLyBTZXQgZHVyYXRpb24gb2YgZXZlbnRcbiAgICAgICAgdGhpcy5zZXRFbGFwc2VkVGltZSgrRGF0ZS5ub3coKSAtICt0aGlzLnN0YXJ0VGltZXN0YW1wKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0IHRlbGVtZXRyeUNvcnJlbGF0aW9uSWQoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZXZlbnRbYCR7VEVMRU1FVFJZX0JMT0JfRVZFTlRfTkFNRVMuTXNhbENvcnJlbGF0aW9uSWRDb25zdFN0cktleX1gXTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0IHRlbGVtZXRyeUNvcnJlbGF0aW9uSWQodmFsdWU6IHN0cmluZykge1xuICAgICAgICB0aGlzLmV2ZW50W2Ake1RFTEVNRVRSWV9CTE9CX0VWRU5UX05BTUVTLk1zYWxDb3JyZWxhdGlvbklkQ29uc3RTdHJLZXl9YF0gPSB2YWx1ZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0IGV2ZW50TmFtZSgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5ldmVudFtwcmVwZW5kRXZlbnROYW1lUHJlZml4KEVWRU5UX05BTUVfS0VZKV07XG4gICAgfVxuXG4gICAgcHVibGljIGdldCgpOiBvYmplY3Qge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgLi4udGhpcy5ldmVudCxcbiAgICAgICAgICAgIGV2ZW50SWQ6IHRoaXMuZXZlbnRJZFxuICAgICAgICB9O1xuICAgIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=