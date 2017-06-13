export declare function getValue(el: HTMLInputElement): string;
export declare function insertValue(el: HTMLInputElement, start: number, end: number, text: string, iframe: HTMLIFrameElement, noRecursion?: boolean): void;
export declare function isInputOrTextAreaElement(el: HTMLElement): boolean;
export declare function isTextElement(el: HTMLElement): boolean;
export declare function setCaretPosition(el: HTMLInputElement, pos: number, iframe?: HTMLIFrameElement): void;
export declare function getCaretPosition(el: HTMLInputElement, iframe?: HTMLIFrameElement): number;
export declare function getContentEditableCaretCoords(ctx: {
    iframe: HTMLIFrameElement;
    parent?: Element;
}): {
    left: number;
    top: number;
};
