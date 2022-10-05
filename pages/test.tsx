import type { NextPage } from 'next';
import Sidebar from '../components/sidebar';
import { useTheme } from 'next-themes';

const Test: NextPage = () => {
  const { theme, setTheme } = useTheme();

  const ToggleTheme = () => {
    if (theme === 'light') setTheme('dark');
    else setTheme('light');
  };

  return <Sidebar />;
};

export default Test;
