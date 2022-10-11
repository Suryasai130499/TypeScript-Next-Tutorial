import axios from 'axios';

const getBoards = async () => {
  const result = await axios.get('https://server-surya1304.vercel.app', {});
  return {
    boardsData: result.data,
  };
};

export default getBoards;
