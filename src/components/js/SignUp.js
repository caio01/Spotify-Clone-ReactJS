import "./../css/SignUp.css";
import { Link } from "react-router-dom";

export default function SignUp() {
	return (
		<>
			<main>
                <div class="div-logo">
                    <a href="index.html"><img src="./assets/img/logo-spotify.png" alt="logo-spotify"/></a>
                </div>
                <div class="div-title">
                    <h1>Inscreva-se grátis e comece a curtir.</h1>
                </div>
                <div class="div-img-sing-up">
                    <div class="div-img-sing-up-facebook">
                        <a href="#"><img src="./assets/img/sign-up-facebook.png" alt="sign-up-facebook"/></a>
                    </div>
                    <div class="div-img-sing-up-google">
                        <a href="#"><img src="./assets/img/sign-up-google.png" alt="sign-up-google"/></a>
                    </div>
                </div>
                <div class="div-line-or">
                    <div class="div-line-1"></div>
                    <div class="div-or">ou</div>
                    <div class="div-line-2"></div>
                </div>
                <div class="div-form">
                    <div class="form-cmp">
                        <h3>Qual é seu email?</h3>
                        <input type="text" placeholder="Insira seu e-mail."/>
                    </div>
                    <div class="form-cmp">
                        <h3>Confirme seu email</h3>
                        <input type="text" placeholder="Insira o e-mail novamente."/>
                    </div>
                    <div class="form-cmp">
                        <h3>Crie uma senha</h3>
                        <input type="password" placeholder="Crie uma senha."/>
                    </div>
                    <div class="form-cmp">
                        <h3>Como devemos chamar você?</h3>
                        <input type="text" placeholder="Insira um nome de perfil."/>
                    </div>
                    <div class="form-cmp">
                        <h3>Qual a sua data de nascimento?</h3>
                        <div class="form-cmp-birth">
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
                    <div class="form-cmp">
                        <h3>Qual é o seu genêro?</h3>
                        <div class="form-cmp-sex">
                            <input type="radio" name="sex"/>
                            <h3>Masculino</h3>
                            <input type="radio" name="sex"/>
                            <h3>Feminino</h3>
                            <input type="radio" name="sex"/>
                            <h3>Não informar</h3>
                        </div>
                    </div>
                    <div class="form-cmp">
                        <div class="div-checkbox">
                            <input type="checkbox"/>
                            <h3>Não quero receber mensagens de marketing do Spotify.</h3>
                        </div>
                        <div class="div-checkbox">
                            <input type="checkbox"/>
                            <h3>Compartilhar meus dados cadastrais com os provedores de conteúdo do Spotify para fins de marketing.</h3>
                        </div>
                        <div class="div-checkbox">
                            <input type="checkbox"/>
                            <h3>Eu concordo com os Termos e Condições de Uso do Spotify.</h3>
                        </div>
                        <div class="div-btn">
                            <a href="#"><button>Increver-se</button></a>
                        </div>
                    </div>
                </div>
            </main>
        </>
	);
}
