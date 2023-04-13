import { useBase } from '@/contexts/base';
import Alert from 'react-bootstrap/Alert';



export default function AlertBootstrap(props: {variant: string}) {
    
    const { alertOpen, alertText } = useBase();

    return (
        <Alert show={alertOpen} key={props.variant} variant={props.variant}>
            {alertText}
        </Alert>
    )
}
