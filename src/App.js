import styled from 'styled-components';
import { Header, Input } from './components';
import './App.css';

const StyledHeader = styled(Header)`
  header {
    text-align: center;
  }
`;

const App = () => {
  return (
    <div className='App'>
      <div>
        <StyledHeader text='INPUT APP' />
        <hr />
        <Input />
      </div>
    </div>
  );
};

export default App;
