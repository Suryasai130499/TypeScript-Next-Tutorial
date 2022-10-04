import type { NextPage } from 'next';
import Dropdown from '../components/dropdown';
import Button from '../components/button';
import Checkbox from '../components/checkbox';
import TextField from '../components/textField';
import { useTheme } from 'next-themes';

const Test: NextPage = () => {
  const { theme, setTheme } = useTheme();

  const ToggleTheme = () => {
    if (theme === 'light') setTheme('dark');
    else setTheme('light');
  };

  return (
    <div
      style={{
        height: '80vh',
        width: '90%',
        paddingBlock: '10vh',
        margin: 'auto',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >
      <button onClick={ToggleTheme}>ClickMe</button>
      <Dropdown listItems={['Hello', 'World', 'One']} />
      <Button type="primary">Primary Button</Button>
      <Button type="secondary">secondary Button</Button>
      <Button type="destructive">destructive Button</Button>
      <Checkbox item="Hello" />
      <TextField name="title" placeholder="Hello here!!!" />
    </div>
  );
};

export default Test;
