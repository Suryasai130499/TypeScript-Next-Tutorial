import create, { StoreApi, UseBoundStore } from 'zustand';
import { DropdownInterface } from './interfaces';

const useDropdownStore: UseBoundStore<StoreApi<DropdownInterface>> = create(
  (set) => ({
    listofStatuses: [],
    setListofStatuses: (value) =>
      set((state) => ({
        ...state,
        listofStatuses: value,
      })),
    currentStatus: '',
    setCurrentStatus: (value) =>
      set((state) => ({
        ...state,
        currentStatus: value,
      })),
  })
);

export default useDropdownStore;
