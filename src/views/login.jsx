import { useState } from 'react';

import axios from 'axios';

import Card from '../components/card';
import FormGroup from '../components/form-group';



function Login() {

    const [email, setEmail] = useState();
    const [senha, setSenha] = useState();

    const logar = async (e) => {
    try {
        e.preventDefault();
        await axios
        .post("http://localhost:8080/api/usuario/autenticar", {
         email: email,
         senha: senha,
        })
        .then((responde) => {
          localStorage.setItem('_usuario_logado', JSON.stringify(response.data))
          navigate("/");
        });

    } catch (erro) {
      setMMensagemErro(erro.response.data);
    }
};    


    return (
        <div className="row">
            <div className="col-md-6" style={{ position: 'relative', left: '300px' }}>
                <Card titulo="Login">
                    <div className='row'>
                        <div className="col-lg-12">
                            <div className="bs-component">
                                <form>
                                    <fieldset>
                                        <FormGroup htmlFor="InputEmail1">
                                            <input
                                                value={email}
                                                type="email"
                                                className="form-control"
                                                name='email'
                                                id='InputEmail'
                                                aria-describedby='emailHelp'
                                                placeholder='Digite seu email'
                                                onChange={e => setEmail(e.target.value)}
                                            />
                                        </FormGroup>
                                        <FormGroup htmlFor="InputSenha1">
                                            <input
                                                value={senha}
                                                type="senha"
                                                className="form-control"
                                                name='senha'
                                                id='InputSenha1'
                                                aria-describedby='senhaHelp'
                                                placeholder='Digite sua senha'
                                                onChange={e => setSenha(e.target.value)}
                                            />
                                        </FormGroup>
                                        <button className="btn btn-success" onClick={logar}>Entrar</button>
                                        <button className="btn btn-danger"> Cadastar </button>
                                    </fieldset>
                                </form>
                            </div>
                        </div>
                    </div>
                </Card>
            </div>
        </div>
    )
}

export default Login; 