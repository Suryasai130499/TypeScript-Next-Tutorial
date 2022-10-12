import axios from 'axios';

const getBoardbyID = async (id: string) => {
  const result = await axios.post(
    'https://server-surya1304.vercel.app/board',
    {
      id: id,
    },
    {}
  );
  return {
    boardData: result.data,
  };
};

export default getBoardbyID;
