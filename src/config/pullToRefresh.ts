export const htmlMarkup = (): string => {
    return `
        <div class="__PREFIX__box h-full flex flex-col justify-center">
            <div class="__PREFIX__content font-medium px-4 gap-2 justify-center flex items-center w-full">
                <div class="w-3 h-3 relative flex items-center justify-center" role="status" aria-label="loading">
                    <div class="__PREFIX__icon absolute left-0 right-0 top-0 bottom-0"></div>
                </div>
                <div class="__PREFIX__text text-xs text-gray-400"></div>
            </div>
        </div>
    `;
};

export const arrowMarkup = (): string => {
    return `
        <svg class="h-full w-full text-gray-400" width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11.0001 12.2967L5.52877 6.82535C4.93596 6.23253 3.97371 6.23253 3.38089 6.82535C2.78808 7.41816 2.78808 8.38042 3.38089 8.97323L9.98778 15.5801C10.5477 16.14 11.4541 16.14 12.0125 15.5801L18.6194 8.97323C19.2122 8.38042 19.2122 7.41816 18.6194 6.82535C18.0266 6.23253 17.0643 6.23253 16.4715 6.82535L11.0001 12.2967Z" fill="currentColor"/>
        </svg>
    `;
};

export const spinnerMarkup = (): string => {
    return `<div class="animate-spin absolute left-0 right-0 h-3 inline-block border-[2px] border-current border-t-transparent text-orange-400 rounded-full" role="status" aria-label="loading"></div>`;
};

export const cssMarkup = (): string => {
    return `
        .__PREFIX__ptr {
            pointer-events: none;
            top: 0;
            height: 0;
            transition: height 0.3s, min-height 0.3s;
            text-align: center;
            width: 100%;
            overflow: hidden;
            display: flex;
            align-items: flex-end;
            align-content: stretch;
        }
        
        .__PREFIX__box {
            padding: 2px;
            flex-basis: 100%;
        }
        .__PREFIX__pull {
            transition: none;
        }
        .__PREFIX__icon {
            transition: transform .3s;
        }
        /*
        When at the top of the page, disable vertical overscroll so passive touch
        listeners can take over.
        */
        .__PREFIX__top {
            touch-action: pan-x pan-down pinch-zoom;
        }
        .__PREFIX__release .__PREFIX__icon {
            transform: rotate(180deg);
        }
    `;
};