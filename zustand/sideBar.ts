import create, { StoreApi, UseBoundStore } from 'zustand';
import { SidebarInterface, board } from './interfaces';

const useSidebarStore: UseBoundStore<StoreApi<SidebarInterface>> = create(
  (set) => ({
    boards: [],
    activeBoard: {
      _id: '',
      name: '',
      columns: [],
      __v: 0,
    },
    setBoards: (items: board[]) =>
      set((state) => ({
        ...state,
        boards: items,
      })),
    setActiveBoard: (item: board) =>
      set((state) => ({
        ...state,
        activeBoard: item,
      })),
  })
);

export default useSidebarStore;
