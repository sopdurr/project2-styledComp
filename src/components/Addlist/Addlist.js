import styled from 'styled-components';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

// Smá prufa á material ui

const StyledButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Add = ({ name, onChange, onAdd, className }) => {
  return (
    <div>
      <form>
        <TextField label='name' type='text' value={name} onChange={onChange} />
      </form>
      <StyledButton className={className}>
        <Button
          variant='contained'
          color='primary'
          type='button'
          onClick={onAdd}
          width='100%'
        >
          Add
        </Button>
      </StyledButton>
    </div>
  );
};

export default Add;
