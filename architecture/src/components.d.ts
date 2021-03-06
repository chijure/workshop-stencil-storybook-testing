/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface DemoEvents {
    }
    interface DemoLabel {
        "lastname": string;
        "value": string;
    }
    interface DemoProps {
        "age": number;
        "city": string;
        "country": string;
        "province": string;
    }
    interface DemoSlot {
    }
    interface DemoSlotChild {
    }
    interface DemoStates {
        "firstName": string;
        "lastname": string;
    }
    interface DemoSwitcher {
        "buttonNames": string[];
        "label": string;
    }
    interface DemoText {
        "lastname": string;
    }
    interface MyComponent {
        /**
          * The first name
         */
        "first": string;
        /**
          * The last name
         */
        "last": string;
        /**
          * The middle name
         */
        "middle": string;
    }
}
declare global {
    interface HTMLDemoEventsElement extends Components.DemoEvents, HTMLStencilElement {
    }
    var HTMLDemoEventsElement: {
        prototype: HTMLDemoEventsElement;
        new (): HTMLDemoEventsElement;
    };
    interface HTMLDemoLabelElement extends Components.DemoLabel, HTMLStencilElement {
    }
    var HTMLDemoLabelElement: {
        prototype: HTMLDemoLabelElement;
        new (): HTMLDemoLabelElement;
    };
    interface HTMLDemoPropsElement extends Components.DemoProps, HTMLStencilElement {
    }
    var HTMLDemoPropsElement: {
        prototype: HTMLDemoPropsElement;
        new (): HTMLDemoPropsElement;
    };
    interface HTMLDemoSlotElement extends Components.DemoSlot, HTMLStencilElement {
    }
    var HTMLDemoSlotElement: {
        prototype: HTMLDemoSlotElement;
        new (): HTMLDemoSlotElement;
    };
    interface HTMLDemoSlotChildElement extends Components.DemoSlotChild, HTMLStencilElement {
    }
    var HTMLDemoSlotChildElement: {
        prototype: HTMLDemoSlotChildElement;
        new (): HTMLDemoSlotChildElement;
    };
    interface HTMLDemoStatesElement extends Components.DemoStates, HTMLStencilElement {
    }
    var HTMLDemoStatesElement: {
        prototype: HTMLDemoStatesElement;
        new (): HTMLDemoStatesElement;
    };
    interface HTMLDemoSwitcherElement extends Components.DemoSwitcher, HTMLStencilElement {
    }
    var HTMLDemoSwitcherElement: {
        prototype: HTMLDemoSwitcherElement;
        new (): HTMLDemoSwitcherElement;
    };
    interface HTMLDemoTextElement extends Components.DemoText, HTMLStencilElement {
    }
    var HTMLDemoTextElement: {
        prototype: HTMLDemoTextElement;
        new (): HTMLDemoTextElement;
    };
    interface HTMLMyComponentElement extends Components.MyComponent, HTMLStencilElement {
    }
    var HTMLMyComponentElement: {
        prototype: HTMLMyComponentElement;
        new (): HTMLMyComponentElement;
    };
    interface HTMLElementTagNameMap {
        "demo-events": HTMLDemoEventsElement;
        "demo-label": HTMLDemoLabelElement;
        "demo-props": HTMLDemoPropsElement;
        "demo-slot": HTMLDemoSlotElement;
        "demo-slot-child": HTMLDemoSlotChildElement;
        "demo-states": HTMLDemoStatesElement;
        "demo-switcher": HTMLDemoSwitcherElement;
        "demo-text": HTMLDemoTextElement;
        "my-component": HTMLMyComponentElement;
    }
}
declare namespace LocalJSX {
    interface DemoEvents {
        "onClickEmit"?: (event: CustomEvent<any>) => void;
    }
    interface DemoLabel {
        "lastname"?: string;
        "value"?: string;
    }
    interface DemoProps {
        "age"?: number;
        "city"?: string;
        "country"?: string;
        "province"?: string;
    }
    interface DemoSlot {
    }
    interface DemoSlotChild {
    }
    interface DemoStates {
        "firstName"?: string;
        "lastname"?: string;
    }
    interface DemoSwitcher {
        "buttonNames"?: string[];
        "label"?: string;
    }
    interface DemoText {
        "lastname"?: string;
    }
    interface MyComponent {
        /**
          * The first name
         */
        "first"?: string;
        /**
          * The last name
         */
        "last"?: string;
        /**
          * The middle name
         */
        "middle"?: string;
    }
    interface IntrinsicElements {
        "demo-events": DemoEvents;
        "demo-label": DemoLabel;
        "demo-props": DemoProps;
        "demo-slot": DemoSlot;
        "demo-slot-child": DemoSlotChild;
        "demo-states": DemoStates;
        "demo-switcher": DemoSwitcher;
        "demo-text": DemoText;
        "my-component": MyComponent;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "demo-events": LocalJSX.DemoEvents & JSXBase.HTMLAttributes<HTMLDemoEventsElement>;
            "demo-label": LocalJSX.DemoLabel & JSXBase.HTMLAttributes<HTMLDemoLabelElement>;
            "demo-props": LocalJSX.DemoProps & JSXBase.HTMLAttributes<HTMLDemoPropsElement>;
            "demo-slot": LocalJSX.DemoSlot & JSXBase.HTMLAttributes<HTMLDemoSlotElement>;
            "demo-slot-child": LocalJSX.DemoSlotChild & JSXBase.HTMLAttributes<HTMLDemoSlotChildElement>;
            "demo-states": LocalJSX.DemoStates & JSXBase.HTMLAttributes<HTMLDemoStatesElement>;
            "demo-switcher": LocalJSX.DemoSwitcher & JSXBase.HTMLAttributes<HTMLDemoSwitcherElement>;
            "demo-text": LocalJSX.DemoText & JSXBase.HTMLAttributes<HTMLDemoTextElement>;
            "my-component": LocalJSX.MyComponent & JSXBase.HTMLAttributes<HTMLMyComponentElement>;
        }
    }
}
