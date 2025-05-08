import { useDispatch, useSelector } from 'react-redux';
import { changeFilter } from '../../redux/filters/slice';
import { InputAdornment, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

function SearchBox() {
  const dispatch = useDispatch();
  const { name: search } = useSelector(state => state.filters);

  return (
    <TextField
      type='search'
      value={search}
      onChange={e => dispatch(changeFilter(e.target.value))}
      slotProps={{
        input: {
          startAdornment: (
            <InputAdornment position='start'>
              <SearchIcon />
            </InputAdornment>
          ),
          sx: { backgroundColor: 'white' },
        },
      }}
      size='small'
    ></TextField>
  );
}

export default SearchBox;
