"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var mention_utils_1 = require("./mention-utils");
var caret_coords_1 = require("./caret-coords");
/**
 * Angular 2 Mentions.
 * https://github.com/dmacfarlane/angular2-mentions
 *
 * Copyright (c) 2016 Dan MacFarlane
 */
var MentionListComponent = /** @class */ (function () {
    function MentionListComponent(_element) {
        this._element = _element;
        this.items = [];
        this.activeIndex = 0;
        this.hidden = false;
        this.itemClick = new core_1.EventEmitter();
    }
    // lots of confusion here between relative coordinates and containers
    MentionListComponent.prototype.position = function (nativeParentElement, iframe) {
        if (iframe === void 0) { iframe = null; }
        var coords = { top: 0, left: 0 };
        if (mention_utils_1.isInputOrTextAreaElement(nativeParentElement)) {
            // parent elements need to have postition:relative for this to work correctly?
            coords = caret_coords_1.getCaretCoordinates(nativeParentElement, nativeParentElement.selectionStart);
            coords.top = nativeParentElement.offsetTop + coords.top + 16;
            coords.left = nativeParentElement.offsetLeft + coords.left;
        }
        else if (iframe) {
            var context = { iframe: iframe, parent: iframe.offsetParent };
            coords = mention_utils_1.getContentEditableCaretCoords(context);
        }
        else {
            var doc = document.documentElement;
            var scrollLeft = (window.pageXOffset || doc.scrollLeft) - (doc.clientLeft || 0);
            var scrollTop = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
            // bounding rectangles are relative to view, offsets are relative to container?
            var caretRelativeToView = mention_utils_1.getContentEditableCaretCoords({ iframe: iframe });
            var parentRelativeToContainer = nativeParentElement.getBoundingClientRect();
            coords.top = caretRelativeToView.top - parentRelativeToContainer.top + nativeParentElement.offsetTop - scrollTop;
            coords.left = caretRelativeToView.left - parentRelativeToContainer.left + nativeParentElement.offsetLeft - scrollLeft;
        }
        var el = this._element.nativeElement;
        el.style.position = "absolute";
        el.style.left = coords.left + 'px';
        el.style.top = coords.top + 'px';
    };
    Object.defineProperty(MentionListComponent.prototype, "activeItem", {
        get: function () {
            return this.items[this.activeIndex];
        },
        enumerable: true,
        configurable: true
    });
    MentionListComponent.prototype.activateNextItem = function () {
        // adjust scrollable-menu offset if the next item is out of view
        var listEl = this.list.nativeElement;
        var activeEl = listEl.getElementsByClassName('active').item(0);
        if (activeEl) {
            var nextLiEl = activeEl.nextSibling;
            if (nextLiEl && nextLiEl.nodeName == "LI") {
                var nextLiRect = nextLiEl.getBoundingClientRect();
                if (nextLiRect.bottom > listEl.getBoundingClientRect().bottom) {
                    listEl.scrollTop = nextLiEl.offsetTop + nextLiRect.height - listEl.clientHeight;
                }
            }
        }
        // select the next item
        this.activeIndex = Math.max(Math.min(this.activeIndex + 1, this.items.length - 1), 0);
    };
    MentionListComponent.prototype.activatePreviousItem = function () {
        // adjust the scrollable-menu offset if the previous item is out of view
        var listEl = this.list.nativeElement;
        var activeEl = listEl.getElementsByClassName('active').item(0);
        if (activeEl) {
            var prevLiEl = activeEl.previousSibling;
            if (prevLiEl && prevLiEl.nodeName == "LI") {
                var prevLiRect = prevLiEl.getBoundingClientRect();
                if (prevLiRect.top < listEl.getBoundingClientRect().top) {
                    listEl.scrollTop = prevLiEl.offsetTop;
                }
            }
        }
        // select the previous item
        this.activeIndex = Math.max(Math.min(this.activeIndex - 1, this.items.length - 1), 0);
    };
    MentionListComponent.prototype.resetScroll = function () {
        this.list.nativeElement.scrollTop = 0;
    };
    MentionListComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'mention-list',
                    styles: ["\n      .scrollable-menu {\n        display: block;\n        height: auto;\n        max-height: 300px;\n        overflow: auto;\n      }\n    ", "\n      [hidden] {\n        display: none;\n      }\n    "],
                    template: "\n    <ul class=\"dropdown-menu scrollable-menu\" #list [hidden]=\"hidden\">\n        <li *ngFor=\"let item of items; let i = index\" [class.active]=\"activeIndex==i\">\n            <a class=\"text-primary\" (mousedown)=\"activeIndex=i;itemClick.emit();$event.preventDefault()\">\n              <ng-template *ngTemplateOutlet=\"listTemplate;context:{'item': item}\"></ng-template>\n            </a>\n        </li>\n    </ul>\n    "
                },] },
    ];
    /** @nocollapse */
    MentionListComponent.ctorParameters = function () { return [
        { type: core_1.ElementRef }
    ]; };
    MentionListComponent.propDecorators = {
        list: [{ type: core_1.ViewChild, args: ['list',] }],
        itemClick: [{ type: core_1.Output }],
        listTemplate: [{ type: core_1.Input }]
    };
    return MentionListComponent;
}());
exports.MentionListComponent = MentionListComponent;
