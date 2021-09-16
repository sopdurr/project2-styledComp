import styled from 'styled-components';
import TextField from '@material-ui/core/TextField';

const StyledNumber = styled.div`
  align-content: center;
  display: flex;
  justify-content: center;
`;

const Calculator = ({ sum, onChange, className }) => {
  return (
    <div>
      <TextField
        id='standard-basic'
        label='number'
        type='number'
        onChange={onChange}
      />
      <StyledNumber className={className}>
        <div>{sum}</div>
      </StyledNumber>
    </div>
  );
};

export default Calculator;
