export interface board {
  _id: string;
  id: string;
  name: string;
  columns: string[];
  __v: number;
}
export interface SidebarInterface {
  boards: board[];
  activeBoard: string;
  setBoards: (items: board[]) => void;
  setActiveBoard: (item: string) => void;
}

export interface DropdownInterface {
  listofStatuses: string[];
  setListofStatuses: (value: string[]) => void;
  currentStatus: string;
  setCurrentStatus: (value: string) => void;
}
