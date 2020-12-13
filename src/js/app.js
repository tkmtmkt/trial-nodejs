var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
var jsdom = require("jsdom");
var jQuery = require("jquery");

const { JSDOM } = jsdom;
const dom = new JSDOM("<html><head><title>hoge</title></head><body></body></html>");
global.window = dom.window
global.document = dom.window.document
global.XMLHttpRequest = XMLHttpRequest;
global.$ = jQuery;

require("./index.js");

console.log(document.title);
console.log($("*").html());
