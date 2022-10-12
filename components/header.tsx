import type { NextPage } from 'next';
import styles from './componentCSS/header.module.css';
//components
import Button from './button';
//state
import useSidebarStore from '../zustand/sideBar';
//interface
import { HeaderInterface } from './interfaces';

const Header: NextPage<HeaderInterface> = ({ boardData }) => {
  const activeBoard = useSidebarStore((state) => state.activeBoard);

  return (
    <div className={styles.wrapper}>
      <div className={styles.firstPart}>
        <img src="/logo.svg" alt="" className={styles.logo} />
        <h1 className={styles.text}>kanban</h1>
      </div>
      <div className={styles.secondPart}>
        <h2 className={styles.title}>{activeBoard.name}</h2>
        <div className={styles.lastpart}>
          <Button
            type="primary"
            disabled={boardData.columns.length === 0 ? 'true' : 'false'}
          >
            +Add New Task
          </Button>
          <div className={styles.wrap}>
            <span className={styles.threedotmenu}></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
