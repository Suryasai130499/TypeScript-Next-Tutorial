import type { NextPage } from 'next';
import Dropdown from '../components/dropdown';

const Test: NextPage = () => {
  return <Dropdown listItems={['Hello', 'World', 'One']} />;
};

export default Test;
