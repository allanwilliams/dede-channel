import * as React from 'react';

import Router from 'next/router'
import { useSession, signIn } from "next-auth/react"

import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

function Copyright(props) {
    return (
        <div align="center" {...props}>
            {'Copyright © '}
            <a style={{color: "#fff"}} href="https://www.defensoria.ce.def.br/">
                Defensoria Geral do Estado do Ceará
            </a>{' '}
            {new Date().getFullYear()}
            {'.'}
        </div>
    );
}

export default function SignIn({ children }) {
    const { data: session, status } = useSession()
    const isUser = !!session?.user
    // const { setLoading } = React.useContext(AuthContext);

    const [error, setError] = React.useState(false)

    React.useEffect(() => {
        if (status === "loading") return
        if (isUser) Router.push('/')
    }, [isUser, status])

    const handleSubmit = async (event) => {
        setError(false)
        event.preventDefault()

        const email = event.target.email.value
        const password = event.target.password.value
        // setLoading(true)
        const res = await signIn('credentials', { redirect: false, password: password, email: email, callbackUrl: `${window.location.origin}/home` })
        // setLoading(false)
        // if (!res){
        //     setError('Falha de comunicação com servidor')
        //     return
        // }
        if (res?.error) {
            setError('Usuário e(ou) senha inválidos!')
        }
        
        // if (res.url) Router.push(res.url);
        if (res.url) Router.push('/');
    };

    // return children
    if (isUser) {
        return children
    }

    if (status === 'loading') {
        return (<div style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
            minHeight: '100vh'
        }}>
            <img src="/images/loading.gif"
                alt="LOGO"
                width="400"
            />
            <h3 style={{ margin: 0, marginTop: '-1em', color: 'green', fontSize: 50 }}>carregando...</h3>
        </div>
        )
    }

    return (
        <div
            style={{
                width: '100wh',
                height: '100vh',
                background: 'radial-gradient(circle, rgb(0, 94, 60) 0%, rgb(1, 54, 34) 75%, rgb(0, 54, 34) 100%)',
            }}
        >
            <div
                className='d-flex flex-column h-100'
                style={{
                    width: '100wh',
                    position: 'fixed',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                }}>
                
                <div
                    style={{
                        height: '100vh',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        flexDirection: 'column'
                    }}
                >
                    <img
                        // src={'/images/logo-braso.png'}
                        src={'/images/defensoria_logo_branca.png'}
                        alt={'Dedé Channel'}
                        width="550em"
                        height="173em"
                    />
                    <div
                        style={{
                            width: '600px',
                            borderRadius: '10px',
                            justifyContent: 'center',
                            alignItems: 'center',
                            display: 'flex',
                            flexDirection: 'column',
                            padding: '30px',
                            background: '#fff'
                        }}
                    >
                        
                        <h1 style={{ marginTop: '20px' }}>
                            Dedé Channel
                        </h1>
                        {error && 
                            <div className={styles.error}>
                                <span>{error}</span>
                                <button onClick={()=>{setError(false)}} className={styles.closeButton} type="button">×</button>
                            </div>
                        }
                        <div className='w-100' onSubmit={handleSubmit} style={{ mt: 1 }}>
                            <InputGroup className="mb-3">
                                <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
                                <Form.Control
                                placeholder="E-mail"
                                aria-label="Email"
                                aria-describedby="basic-addon1"
                                />
                            </InputGroup>
                            <InputGroup className="mb-3">
                                <InputGroup.Text id="basic-addon1">Password</InputGroup.Text>
                                <Form.Control
                                placeholder="Password"
                                aria-label="Password"
                                aria-describedby="basic-addon1"
                                />
                            </InputGroup>
                            
                            <button
                                className='btn btn-block'
                                type="submit"
                                fullWidth
                                variant="contained"
                                style={{
                                    padding: '8px',
                                    backgroundColor: '#f7ab67',
                                    color: 'white',
                                }}
                            >
                                ACESSAR
                            </button>
                        </div>
                    </div>
                </div>
                <Copyright style={{ margin: "8px 4px", color:"#fff" }} />
            </div>
        </div>
    );
}