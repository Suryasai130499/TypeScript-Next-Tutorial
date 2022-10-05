import create, { StoreApi, UseBoundStore } from 'zustand';
import { SidebarInterface } from './interfaces';

const useSidebarStore: UseBoundStore<StoreApi<SidebarInterface>> = create(
  (set) => ({
    boards: ['Platform Launch', 'Marketing Plan', 'Roadmap'],
    activeBoard: '',
    setBoards: (items: string[]) =>
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
