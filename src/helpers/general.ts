import validUrl from "valid-url";
import { TEMP_HOST } from "@/helpers/api";

export const isScrollable = function (element: HTMLElement) {
    return element.scrollWidth > element.clientWidth || element.scrollHeight > element.clientHeight;
};

export const executeAfter = function (callback: Function, timeout: number = 40) {
    new Promise<void>((resolve) => {
        setTimeout(() => {
            resolve(callback());
        }, timeout);
    }).then(() => {});
};

export const resolveFileUrl = function (url: string) {
    if (!url || !url.trim()) return null;
    if (validUrl.isUri(url)) return url;
    return `${TEMP_HOST}${url}`;
};