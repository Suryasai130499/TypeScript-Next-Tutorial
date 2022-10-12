export interface board {
  _id: string;
  name: string;
  columns: string[];
  __v: number;
}
export interface SidebarInterface {
  boards: board[];
  activeBoard: board;
  setBoards: (items: board[]) => void;
  setActiveBoard: (item: board) => void;
}

export interface DropdownInterface {
  listofStatuses: string[];
  setListofStatuses: (value: string[]) => void;
  currentStatus: string;
  setCurrentStatus: (value: string) => void;
}
