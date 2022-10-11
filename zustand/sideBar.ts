import create, { StoreApi, UseBoundStore } from 'zustand';
import { SidebarInterface, board } from './interfaces';

const useSidebarStore: UseBoundStore<StoreApi<SidebarInterface>> = create(
  (set) => ({
    boards: [],
    activeBoard: '',
    setBoards: (items: board[]) =>
      set((state) => ({
        ...state,
        boards: items,
      })),
    setActiveBoard: (item: string) =>
      set((state) => ({
        ...state,
        activeBoard: item,
      })),
  })
);

export default useSidebarStore;
