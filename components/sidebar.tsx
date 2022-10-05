import type { NextPage } from 'next';
import { useRef } from 'react';
import styles from './componentCSS/sidebar.module.css';
import useSidebarStore from '../zustand/sideBar';

const Sidebar: NextPage = () => {
  const NavbarRef = useRef<HTMLDivElement>(null);

  const boards = useSidebarStore((state) => state.boards);
  const activeBoard = useSidebarStore((state) => state.activeBoard);
  const setBoards = useSidebarStore((state) => state.setBoards);
  const setActiveBoard = useSidebarStore((state) => state.setActiveBoard);

  return <div ref={NavbarRef} className={styles.navbar}></div>;
};

export default Sidebar;
