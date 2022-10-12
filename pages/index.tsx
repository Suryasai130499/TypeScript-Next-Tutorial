import type { NextPage } from 'next';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import { useEffect } from 'react';
//styles
import styles from '../styles/home.module.css';
//api
import getBoards from '../api/getBoards';
import createColumn from '../api/createColumn';
//compoennts
import Frame from '../components/frame';
import Button from '../components/button';
import NewColumnModel from '../components/NewColumnModel';
//state
import useSidebarStore from '../zustand/sideBar';
import { board } from '../zustand/interfaces';

const Home: NextPage = ({
  data,
  firstBoard,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const boards: board[] = useSidebarStore((state) => state.boards);
  const setBoards: (items: board[]) => void = useSidebarStore(
    (state) => state.setBoards
  );
  const activeBoard: board = useSidebarStore((state) => state.activeBoard);
  const setActiveBoard: (item: board) => void = useSidebarStore(
    (state) => state.setActiveBoard
  );

  useEffect(() => {
    setBoards(data);
    setActiveBoard(firstBoard);
  }, [boards]);

  return (
    <>
      <Frame boardData={activeBoard} />
      {/* <div className={styles.wrapper}>
        {activeBoard.columns.length === 0 ? (
          <div className={styles.empty}>
            <div className={styles.lappy}>
              <p className={styles.text}>
                This board is empty. Create a new column to get started.
              </p>
              <Button type="primary">+Add New Column</Button>
            </div>
          </div>
        ) : null}
      </div> */}
      <NewColumnModel />
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const data = await (await getBoards()).boardsData;
  const firstBoard = data[0];

  return {
    props: {
      data,
      firstBoard,
    },
  };
};

export default Home;
