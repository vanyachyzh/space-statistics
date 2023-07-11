import { CardContent, Typography } from '@mui/material'
import Card from '@mui/material/Card'
import { INEO } from '../types/NEO'

type Props = {
    neoInfo: INEO,
}

export const NEOCard: React.FC<Props> = ({neoInfo}) => {
    const {hasLargeNumber, diameter: size, speed, distance, number} = neoInfo;
    return (
        <Card
            sx={{
                maxWidth: 500,
                display: 'flex',
                justifyContent: 'space-around',
                alignItems: 'center',
                backgroundColor: hasLargeNumber ? '#EF6262' : '#fff',
                color: hasLargeNumber ? '#fff' : '#000'
            }}
        >
            <CardContent>
                <Typography>
                    The largest NEO:
                </Typography>

                <Typography>
                    Number of potentially hazardous NEO:
                </Typography>

                <Typography>
                    The closest NEO:
                </Typography>

                <Typography>
                    The fastest NEO:
                </Typography>
            </CardContent>
            <CardContent>

                <Typography variant="body2">
                    {size} km
                </Typography>

                <Typography variant="body2">
                    {number} per day
                </Typography>

                <Typography variant="body2">
                    {distance} km
                </Typography>

                <Typography variant="body2">
                    {speed} kph
                </Typography>
            </CardContent>
        </Card>
    )
}