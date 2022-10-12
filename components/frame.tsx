import type { NextPage } from 'next';
//components
import Sidebar from './sidebar';
import Header from './header';
//interface
import { FrameInterface } from './interfaces';

const Frame: NextPage<FrameInterface> = ({ children, boardData }) => {
  return (
    <>
      <Header boardData={boardData} />
      {children}
      <Sidebar />
    </>
  );
};

export default Frame;
