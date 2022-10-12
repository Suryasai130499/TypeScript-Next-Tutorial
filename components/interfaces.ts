import { board } from '../zustand/interfaces';

export interface ButtonInterface {
  paddingInline?: string;
  paddingBlock?: string;
  fontSize?: string;
  children: any;
  type: string;
  disabled?: string;
}

export interface CheckboxInterface {
  item: string;
}

export interface TextFieldInterface {
  name: string;
  placeholder: string;
}

export interface DropdownInterface {
  listItems?: string[];
}

export interface HeaderInterface {
  boardData: board;
}

export interface FrameInterface {
  children?: any;
  boardData: board;
}
