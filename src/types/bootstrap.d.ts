declare module "bootstrap" {
    export class Modal {
        constructor(element: Element | null, options?: Partial<Modal.Options>);
        show(): void;
        hide(): void;
        toggle(): void;
        dispose(): void;
        handleUpdate(): void;
        static getInstance(element: Element): Modal | null;
        static getOrCreateInstance(element: Element): Modal;
    }

    namespace Modal {
        interface Options {
            backdrop: boolean | "static";
            keyboard: boolean;
            focus: boolean;
        }
    }

    export class Collapse {
        constructor(element: Element | null, options?: Partial<Collapse.Options>);
        show(): void;
        hide(): void;
        toggle(): void;
        dispose(): void;
        static getInstance(element: Element): Collapse | null;
        static getOrCreateInstance(element: Element): Collapse;
    }

    namespace Collapse {
        interface Options {
            parent: string | Element;
            toggle: boolean;
        }
    }

    export class Tab {
        constructor(element: Element | null);
        show(): void;
        dispose(): void;
        static getInstance(element: Element): Tab | null;
        static getOrCreateInstance(element: Element): Tab;
    }

    export class Dropdown {
        constructor(element: Element | null, options?: Partial<Dropdown.Options>);
        show(): void;
        hide(): void;
        toggle(): void;
        update(): void;
        dispose(): void;
        static getInstance(element: Element): Dropdown | null;
        static getOrCreateInstance(element: Element): Dropdown;
    }

    namespace Dropdown {
        interface Options {
            boundary: string | Element;
            reference: string | Element;
            display: string;
            offset: [number, number];
            autoClose: boolean | "inside" | "outside";
            popperConfig: object | null;
        }
    }
}

