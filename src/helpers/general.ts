import validUrl from "valid-url";
import { TEMP_HOST } from "@/helpers/api";

export const isScrollable = function (element: HTMLElement) {
    return element.scrollWidth > element.clientWidth || element.scrollHeight > element.clientHeight;
};

export const executeAfter = function (callback: Function, timeout: number = 40) {
    new Promise<void>((resolve) => {
        if (timeout === 0) {
            resolve(callback());
            return;
        }

        setTimeout(() => {
            resolve(callback());
        }, timeout);
    }).then(() => {});
};

export const executeOnce = function (fn: Function | null, context?: any) {
    let result: any;
    // return function that accepts arguments as fn does
    const e = function () {
        if (fn) {
            result = fn.apply(context || e, arguments);
            fn = null;
        }

        return result;
    };
    return e;
};

// /upload/..
export const resolveFileUrl = function (url: string) {
    if (!url || !url.trim()) return null;
    if (validUrl.isUri(url)) return url;
    return `${TEMP_HOST}${url}`;
};