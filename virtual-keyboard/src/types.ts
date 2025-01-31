export interface Keys {
  eng : string[][];
  ru: string[][];
  special: Special;
  specialCode: string[];
}

export interface Special {
  ControlLeft: string;
  MetaLeft: string;
  AltLeft: string;
  Space: string;
  ShiftLeft: string;
  CapsLock: string;
  Enter: string;
  Delete: string;
  Backspace: string;
  Tab: string;
  AltRight: string;
  ShiftRight: string;
  ControlRight: string;
  [key: string]: string;
}