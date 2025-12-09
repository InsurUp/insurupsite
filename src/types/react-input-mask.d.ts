declare module 'react-input-mask' {
  import { ComponentPropsWithoutRef, ForwardRefExoticComponent, RefAttributes } from 'react';

  type SelectionRange = { start: number; end: number } | null;

  export type InputMaskProps = ComponentPropsWithoutRef<'input'> & {
    mask?: string | Array<string | RegExp>;
    maskChar?: string | null;
    formatChars?: Record<string, string>;
    alwaysShowMask?: boolean;
    beforeMaskedValueChange?: (
      newState: { value: string; selection: SelectionRange },
      oldState: { value: string; selection: SelectionRange },
      userInput: string
    ) => { value: string; selection: SelectionRange } | void;
  };

  const InputMask: ForwardRefExoticComponent<InputMaskProps & RefAttributes<HTMLInputElement>>;
  export default InputMask;
}

