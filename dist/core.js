"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PayRateCrawler = void 0;
var axios_1 = __importDefault(require("axios"));
var PayRateCrawler = /** @class */ (function () {
    function PayRateCrawler() {
        this.instance = axios_1.default.create({ baseURL: "http://wzdig.pbc.gov.cn:8080" });
    }
    PayRateCrawler.prototype.getData = function () {
        var formData = new FormData();
        formData.append("q", "lpr");
        this.instance
            .post("search/pcRender?pageId=fa445f64514c40c68b1c8ffe859c649e", formData, { headers: { "Content-Type": "application/x-www-form-urlencoded" } })
            .then(function (res) {
            console.log(res);
        })
            .catch(function (err) {
            console.log(err);
        });
    };
    return PayRateCrawler;
}());
exports.PayRateCrawler = PayRateCrawler;
