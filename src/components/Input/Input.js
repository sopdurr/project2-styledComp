import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid'; // generates a ID
import { Calculator, Thelist, Addlist } from '../index';

const initList = [];

const Input = ({ className }) => {
  const [list, setList] = useState(initList);
  const [name, setName] = useState('');
  const data = {
    amount: 0,
    sum: 0,
  };

  const [state, setState] = useState(data);
  const { amount, sum } = state;

  const handleChange = (event) => {
    setName(event.target.value);
  };

  const changeNumber = (event) => {
    setState({
      ...state,
      amount: parseInt(event.target.value),
    });
  };

  const addToList = () => {
    const newList = list.concat({ name, id: uuidv4() });
    setList(newList);
    setName('');
    setState({ ...state, amount, sum: amount + sum });
  };

  return (
    <div className={className}>
      <div>
        <Calculator sum={sum} onChange={changeNumber} />
        <hr />
        <Addlist name={name} onChange={handleChange} onAdd={addToList} />
        <Thelist list={list} />
      </div>
    </div>
  );
};

export default Input;
