import type { EventBusKey } from "@vueuse/core";

export type GlobalEventType =
    "open:sheet"
    | "close:sheet"
    | "open:modal"
    | "close:modal"
    | "trigger:sheet";

export interface GlobalEvent {
    type: GlobalEventType;
    trigger?: boolean;
    event?: string;
    payload?: any;
}

export const globalEventKey: EventBusKey<GlobalEvent> = Symbol("global-event");