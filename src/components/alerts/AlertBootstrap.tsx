import { useBase } from '@/contexts/base';
import Alert from 'react-bootstrap/Alert';

export default function AlertBootstrap() {
    
    const { alertOpen, alertText, alertVariant } = useBase();

    return (
        <Alert show={alertOpen} key={alertVariant} variant={alertVariant}>
            <p className='text-center'>{alertText}</p>
        </Alert>
    )
}
