"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Summery = void 0;
var WinsAnalysis_1 = require("./analyzers/WinsAnalysis");
var HtmlReports_1 = require("./reportTargets/HtmlReports");
var Summery = /** @class */ (function () {
    function Summery(analyzer, outputTarget) {
        this.analyzer = analyzer;
        this.outputTarget = outputTarget;
    }
    Summery.winsAnalysisWithHtmlReport = function (team) {
        return new Summery(new WinsAnalysis_1.WinsAnalysis(team), new HtmlReports_1.HtmlReports('report.html'));
    };
    Summery.prototype.buildAndPrintReport = function (matches) {
        var output = this.analyzer.run(matches);
        this.outputTarget.print(output);
    };
    return Summery;
}());
exports.Summery = Summery;
