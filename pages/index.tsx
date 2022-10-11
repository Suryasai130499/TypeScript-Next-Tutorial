import type { NextPage } from 'next';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import getBoards from '../api/getBoards';
import Sidebar from '../components/sidebar';
import useSidebarStore from '../zustand/sideBar';
import { board } from '../zustand/interfaces';

const Home: NextPage = ({
  data,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const boards: board[] = useSidebarStore((state) => state.boards);
  const setBoards = useSidebarStore((state) => state.setBoards);
  const activeBoard = useSidebarStore((state) => state.activeBoard);
  const setActiveBoard = useSidebarStore((state) => state.setActiveBoard);

  setBoards(data);
  setActiveBoard(boards ? boards[0]?.name : '');

  return (
    <>
      <Sidebar />
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const data = await (await getBoards()).boardsData;
  return {
    props: {
      data,
    },
  };
};

export default Home;
