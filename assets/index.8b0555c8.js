import{j as i,R as s,a as d}from"./vendor.e03c6ed6.js";const u=function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&c(n)}).observe(document,{childList:!0,subtree:!0});function l(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function c(e){if(e.ep)return;e.ep=!0;const t=l(e);fetch(e.href,t)}};u();const r=i.exports.jsx,a=i.exports.jsxs,f=i.exports.Fragment;function h(){return a(f,{children:[r("article",{children:r("h1",{children:"T\xEDtulo 1"})}),r("article",{children:r("h1",{children:"T\xEDtulo 2"})}),r("article",{children:r("h1",{children:"T\xEDtulo 3"})}),r("article",{children:r("h1",{children:"T\xEDtulo 4"})}),r("article",{children:r("h1",{children:"T\xEDtulo 5"})})]})}s.render(r(d.StrictMode,{children:r(h,{})}),document.getElementById("root"));