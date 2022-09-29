import "./../css/SignUp.css";
import { Link } from "react-router-dom";
import { useState } from "react";

function submit(values) {
    if (values.email == values.emailConfirm) {
        alert("Usuário cadastrado com sucesso!")
    }
    else {
        alert("Email de confirmação é diferente do email original!")
    }
}

function SignUp() {

    const[ email, setEmail ] = useState('');
    const[ emailConfirm, setEmailConfirm ] = useState('');
    
	return (
		<>
			<main>
                <section className="signup-content">
                    <div className="div-logo">
                        <Link to={"/"}>
                            <img src="./assets/img/logo-spotify.png" alt="logo-spotify"/>
                        </Link>
                    </div>
                    <div className="div-title">
                        <h1>Inscreva-se grátis e comece a curtir.</h1>
                    </div>
                    <div className="div-img-sing-up">
                        <div className="div-img-sing-up-facebook">
                            <a href="#"><img src="./assets/img/sign-up-facebook.png" alt="sign-up-facebook"/></a>
                        </div>
                        <div className="div-img-sing-up-google">
                            <a href="#"><img src="./assets/img/sign-up-google.png" alt="sign-up-google"/></a>
                        </div>
                    </div>
                    <div className="div-line-or">
                        <div className="div-line-1"></div>
                        <div className="div-or">ou</div>
                        <div className="div-line-2"></div>
                    </div>
                    <form>
                        <div className="div-form">
                            <div className="form-cmp">
                                <h3>Qual é seu email?</h3>
                                <input type="text" placeholder="Insira seu e-mail." value={email} onChange={(e)=>setEmail(e.target.value)}/>
                            </div>
                            <div className="form-cmp">
                                <h3>Confirme seu email</h3>
                                <input type="text" placeholder="Insira o e-mail novamente." value={emailConfirm} onChange={(e)=>setEmailConfirm(e.target.value)}/>
                            </div>
                            <div className="form-cmp">
                                <h3>Crie uma senha</h3>
                                <input type="password" placeholder="Crie uma senha."/>
                            </div>
                            <div className="form-cmp">
                                <h3>Como devemos chamar você?</h3>
                                <input type="text" placeholder="Insira um nome de perfil."/>
                            </div>
                            <div className="form-cmp">
                                <h3>Qual a sua data de nascimento?</h3>
                                <div className="form-cmp-birth">
                                    <div>
                                        <h3>Dia</h3>
                                        <input type="number" placeholder="DD"/>
                                    </div>
                                    <div>
                                        <h3>Mês</h3>
                                        <input type="number" placeholder="MM"/>
                                    </div>
                                    <div>
                                        <h3>Ano</h3>
                                        <input type="number" placeholder="AAAA"/>
                                    </div>
                                </div>
                            </div>
                            <div className="form-cmp">
                                <h3>Qual é o seu genêro?</h3>
                                <div className="form-cmp-sex">
                                    <input type="radio" name="sex"/>
                                    <h3>Masculino</h3>
                                    <input type="radio" name="sex"/>
                                    <h3>Feminino</h3>
                                    <input type="radio" name="sex"/>
                                    <h3>Não informar</h3>
                                </div>
                            </div>
                            <div className="form-cmp">
                                <div className="div-checkbox">
                                    <input type="checkbox"/>
                                    <h3>Não quero receber mensagens de marketing do Spotify.</h3>
                                </div>
                                <div className="div-checkbox">
                                    <input type="checkbox"/>
                                    <h3>Compartilhar meus dados cadastrais com os provedores de conteúdo do Spotify para fins de marketing.</h3>
                                </div>
                                <div className="div-checkbox">
                                    <input type="checkbox"/>
                                    <h3>Eu concordo com os Termos e Condições de Uso do Spotify.</h3>
                                </div>
                                <div className="div-btn">
                                    <button type="submit">Increver-se</button>
                                </div>
                            </div>
                        </div>
                    </form>
                </section>
            </main>
        </>
	);
}

export default SignUp;