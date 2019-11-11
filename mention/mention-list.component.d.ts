import { ElementRef, EventEmitter, TemplateRef } from '@angular/core';
/**
 * Angular 2 Mentions.
 * https://github.com/dmacfarlane/angular2-mentions
 *
 * Copyright (c) 2016 Dan MacFarlane
 */
export declare class MentionListComponent {
    private _element;
    items: any[];
    activeIndex: number;
    hidden: boolean;
    list: ElementRef;
    itemClick: EventEmitter<{}>;
    listTemplate: TemplateRef<any>;
    constructor(_element: ElementRef);
    position(nativeParentElement: HTMLInputElement, iframe?: HTMLIFrameElement): void;
    readonly activeItem: any;
    activateNextItem(): void;
    activatePreviousItem(): void;
    resetScroll(): void;
}
