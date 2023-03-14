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