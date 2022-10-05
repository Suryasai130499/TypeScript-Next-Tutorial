export interface SidebarInterface {
  boards: string[];
  activeBoard: string;
  setBoards: (items: string[]) => void;
  setActiveBoard: (item: string) => void;
}
