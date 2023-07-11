import { Typography } from '@mui/material';
import { NEOList } from '../components/NEOList';
import { useEffect, useState } from 'react';
import { INEO } from '../types/NEO';
import { setHasLargeNumber } from '../utils/setHasLargeNumber';
import { getData } from '../api/getData';

export const NEOPage = () => {
    const [datesArray, setDatesArray] = useState<Date[]>([]);
    const [neoList, setNeoList] = useState<INEO[]>([])

    useEffect(() => {
        const addDate = () => {
            const currentDate = new Date();
            const lastDate = datesArray.length > 0 ? datesArray[datesArray.length - 1] : new Date(currentDate.getFullYear(), currentDate.getMonth(), 0);
            const nextDate = new Date(lastDate.getFullYear(), lastDate.getMonth(), lastDate.getDate() + 1);

            const updatedDatesArray = [...datesArray, nextDate];

            if (updatedDatesArray.length > 6) {
                updatedDatesArray.shift();
            }

            if (nextDate > currentDate) {
                nextDate.setDate(1);
            }

            setDatesArray(updatedDatesArray);
        };

        const intervalId = setInterval(addDate, 3000);
        getData(datesArray).then(response => setNeoList(response))
        return () => {
            clearInterval(intervalId);
        };


    }, [datesArray]);

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

            <NEOList neoData={setHasLargeNumber(neoList)} />
        </div>
    )
}
