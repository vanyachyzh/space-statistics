import List from '@mui/material/List';
import { INEO } from '../types/NEO';
import { NEOCard } from './NEOCard';

type Props = {
    neoData: INEO[]
}

export const NEOList: React.FC<Props> = ({neoData}) => {

    return (
        <List sx={{ width: '1100px', display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '20px' }}>
            {neoData.map(neoInfo => (
                <NEOCard key={neoInfo.id} neoInfo={neoInfo} />
            ))}

        </List>
    );
}