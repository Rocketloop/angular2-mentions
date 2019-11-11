"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var common_1 = require("@angular/common");
var core_1 = require("@angular/core");
var mention_directive_1 = require("./mention.directive");
var mention_list_component_1 = require("./mention-list.component");
var MentionModule = /** @class */ (function () {
    function MentionModule() {
    }
    MentionModule.forRoot = function () {
        return {
            ngModule: MentionModule
        };
    };
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
    return MentionModule;
}());
exports.MentionModule = MentionModule;
