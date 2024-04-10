import { jsxs as _jsxs, jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import { useState } from "react";
import classes from './App.module.scss';
import { Link } from "react-router-dom";
import About from "@/pages/About/About";
import AvatarPng from '@/assets/graphic.png';
import AvatarJpg from '@/assets/manJPG.jpg';
import SaleSVG from '@/assets/Sale.svg';
function TODO(a) {
    console.log(a);
}
export var App = function () {
    var _a = useState(0), state = _a[0], setState = _a[1];
    var increament = function () { return setState(function (prev) { return prev + 1; }); };
    var decreament = function () { return setState(function (prev) { return prev - 1; }); };
    TODO('54353454');
    return (_jsxs(_Fragment, { children: [_jsxs("h1", { children: ["PLATFORM=", __PLATFORM__] }), _jsxs("div", { children: [_jsx("img", { width: 100, height: 100, src: AvatarPng, alt: "" }), _jsx("img", { width: 100, height: 100, src: AvatarJpg, alt: "" })] }), _jsx("div", { children: _jsx(SaleSVG, { width: 100, height: 100 }) }), _jsx(Link, { to: '/about', children: "about" }), _jsx("br", {}), _jsx(Link, { to: '/shop', children: "shop" }), _jsx("h1", { className: classes.value, children: state }), _jsx("button", { className: classes.button, onClick: increament, children: "Increament" }), _jsx("button", { className: classes.button, onClick: decreament, children: "Decreament" }), _jsx(About, {})] }));
};
