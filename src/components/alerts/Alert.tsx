import Alert from 'react-bootstrap/Alert';
export default function AlertCustom(props: { variant: string, texto:string }){

return (
    <Alert key={props.variant} variant={props.variant}>
        {props.texto}
    </Alert>
)}