import type { NextPage } from 'next';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import { useEffect } from 'react';
//api
import getBoards from '../api/getBoards';
import getBoardbyID from '../api/getBoardbyID';
//compoennts
import Frame from '../components/frame';
//state
import useSidebarStore from '../zustand/sideBar';
import { board } from '../zustand/interfaces';

const Home: NextPage = ({
  data,
  firstBoard,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const boards: board[] = useSidebarStore((state) => state.boards);
  const setBoards = useSidebarStore((state) => state.setBoards);
  // const activeBoard = useSidebarStore((state) => state.activeBoard);
  const setActiveBoard = useSidebarStore((state) => state.setActiveBoard);

  useEffect(() => {
    setBoards(data);
    setActiveBoard(boards ? boards[0]?.name : '');
  }, [boards]);

  return (
    <>
      <Frame boardData={firstBoard} />
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const data = await (await getBoards()).boardsData;
  const id = data[0]._id;
  const firstBoard = await getBoardbyID(id);
  return {
    props: {
      data,
      firstBoard: firstBoard.boardData[0],
    },
  };
};

export default Home;
