import { Typography } from '@mui/material';
import { NEOs } from '../mock';
import { NEOList } from '../components/NEOList';
import { useEffect, useState } from 'react';
import { getData } from '../api/getData';
import { INEO } from '../types/NEO';



export const NEOPage = () => {
    const today = '2023-07-03';
    const [newNEO, setNewNEO] = useState();
    // useEffect(() => {
    //     getData().then((r) => normalizeNEO(r, today))
    // }, [])


    return (
        <div style={{
            width: '1100px',
            display: 'flex',
            flexDirection: 'column',
            alignContent: 'center',
            justifyContent: 'center',
            margin: '0 auto'
        }}
        >
            <Typography align='center' variant='h1' sx={{ fontWeight: 900, color: '#533566', marginBottom: '50px' }}>
                🌠 Space Statistics
            </Typography>
            
            <NEOList neoData={NEOs} />
        </div>
    )
}
