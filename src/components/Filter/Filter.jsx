import { Label, Input } from './Filter.styled';
import { useDispatch } from 'react-redux';
import { filterContacts } from 'redux/filterSlice';

export function Filter() {
  const dispatch = useDispatch();
  const handleChange = e => {
    dispatch(filterContacts(e.target.value));
  };

  return (
    <Label>
      Find contacts by name
      <Input
        onChange={handleChange}
        type="text"
        name="filter"
        placeholder="Find contacts by name"
      />
    </Label>
  );
}
