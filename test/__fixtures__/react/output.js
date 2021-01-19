import { jsxs as _jsxs } from "react/jsx-runtime";
import { jsx as _jsx } from "react/jsx-runtime";
import { useState } from "react";
const styles = "count_styles";

function App() {
  const [count, setCount] = useState(0);
  return /*#__PURE__*/ _jsxs("div", {
    className: "App",
    dr: "test\\__fixtures__\\react\\code.js:9:4",
    children: [
      /*#__PURE__*/ _jsxs("header", {
        className: "App-header",
        dr: "test\\__fixtures__\\react\\code.js:10:6",
        children: [
          /*#__PURE__*/ _jsx("img", {
            className: "App-logo",
            alt: "logo",
            dr: "test\\__fixtures__\\react\\code.js:11:8",
          }),
          /*#__PURE__*/ _jsxs("p", {
            dr: "test\\__fixtures__\\react\\code.js:12:8",
            children: [
              "Edit ",
              /*#__PURE__*/ _jsx("code", {
                dr: "test\\__fixtures__\\react\\code.js:13:15",
                children: "src/App.js",
              }),
              " and save to reload.",
            ],
          }),
        ],
      }),
      /*#__PURE__*/ _jsx("p", {
        className: styles,
        dr: "test\\__fixtures__\\react\\code.js:16:6",
        children: count,
      }),
    ],
  });
}

export default App;