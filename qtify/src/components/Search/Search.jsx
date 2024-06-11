import React from 'react';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';
import styles from '../Search/Search.module.css';
import SearchIcon from '@mui/icons-material/Search';
import Box from '@mui/material/Box';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';


const Search = () => {
  

  return (
    <TextField
    className={styles.Searchbox}
    placeholder='Search a album of your choice'
    variant="outlined"
   
    InputProps={{
      endAdornment: (
        <InputAdornment position="end" >
          <Box  className={styles.Button} >
            <IconButton edge="end">
              <SearchIcon style={{ color: 'black' }}/>
            </IconButton>
          </Box>
        </InputAdornment>
      ),
    }}
  />
  ); 
}
export default Search; 

