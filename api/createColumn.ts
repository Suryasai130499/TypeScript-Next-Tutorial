import axios from 'axios';

const createColumn = async (id: string, columns: string[]) => {
  const result = await axios.put(
    'https://server-surya1304.vercel.app/board',
    {
      id: id,
      columns: columns,
    },
    {}
  );
  return {
    ...result.data,
  };
};

export default createColumn;
