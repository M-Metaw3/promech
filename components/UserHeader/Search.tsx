import React, { useRef, useState } from 'react';
import { TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import { colors } from '../ThemeRegistry/variables';

const Search = () => {
    const [query, setQuery] = useState('');
    const [focus, setFocus] = useState(false);
    const ref = useRef<HTMLInputElement>(null);

    return (
        <>
            <TextField
                name='search' type='search' size='small'
                inputRef={ref}
                value={query} onChange={e => setQuery(e.target.value)}
                onFocus={() => setFocus(true)} onBlur={() => setFocus(false)}
                InputProps={{
                    endAdornment: <SearchIcon color='success' fontSize='large' sx={{ cursor: 'pointer' }} onClick={() => ref.current?.focus()} />,
                    startAdornment: focus ? <CloseIcon  fontSize='small' sx={{ cursor: 'pointer' }} onClick={() => ref.current?.blur()} /> : undefined
                }}
                sx={{
                    display: { xs: 'none', md: 'flex' },
                    width: focus ? { xs: 100, sm: 200 } : 42,
                    height: 42,
                    transition: 'all 0.2s ease-in-out',
                    '& .MuiInputBase-root': {
                        height: '100%', justifyContent: 'center',
                        paddingRight: focus ? undefined : 0,
                    },
                    '& input': {
                        width: focus ? undefined : 0,
                        padding: focus ? undefined : 0,
                    },
                    '& fieldset': { borderColor: colors.primary+'!important' }
                }}
			/>
        </>
    )
}

export default Search;