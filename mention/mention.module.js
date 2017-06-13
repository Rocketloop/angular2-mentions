"use strict";
var common_1 = require("@angular/common");
var core_1 = require("@angular/core");
var mention_directive_1 = require("./mention.directive");
var mention_list_component_1 = require("./mention-list.component");
var MentionModule = (function () {
    function MentionModule() {
    }
    MentionModule.forRoot = function () {
        return {
            ngModule: MentionModule
        };
    };
    return MentionModule;
}());
MentionModule.decorators = [
    { type: core_1.NgModule, args: [{
                imports: [
                    common_1.CommonModule
                ],
                exports: [
                    mention_directive_1.MentionDirective,
                    mention_list_component_1.MentionListComponent
                ],
                entryComponents: [
                    mention_list_component_1.MentionListComponent
                ],
                declarations: [
                    mention_directive_1.MentionDirective,
                    mention_list_component_1.MentionListComponent
                ]
            },] },
];
/** @nocollapse */
MentionModule.ctorParameters = function () { return []; };
exports.MentionModule = MentionModule;
