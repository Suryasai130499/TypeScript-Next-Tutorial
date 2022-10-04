export interface ButtonInterface {
  paddingInline?: string;
  paddingBlock?: string;
  fontSize?: string;
  children: any;
  type: string;
}

export interface CheckboxInterface {
  item: string;
}

export interface TextFieldInterface {
  name: string;
  placeholder: string;
}

export interface DropdownInterface {
  listItems: string[];
}
