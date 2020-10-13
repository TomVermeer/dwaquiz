"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SharedActions = void 0;
var SharedActions = Object.freeze({
  NEXT_QUESTION: 0,
  NEXT_ROUND: 1,
  NIGHT_END: 2
});
exports.SharedActions = SharedActions;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GameProgress = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var GameProgress = function GameProgress(props) {
  return /*#__PURE__*/_react["default"].createElement("h1", null, "Test vanuit shared");
};

exports.GameProgress = GameProgress;
