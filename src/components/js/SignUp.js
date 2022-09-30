import "./../css/SignUp.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import users from "./services/users.js";

function SignUp() {

    const[ email, setEmail ] = useState('');
    const[ emailConfirm, setEmailConfirm ] = useState('');
    const[ password, setPassword ] = useState('');
    const[ name, setName ] = useState('');
    const[ dayBirth, setDayBirth ] = useState('');
    const[ monthBirth, setMonthBirth ] = useState('');
    const[ yearBirth, setYearBirth ] = useState('');
    const[ gender, setGender ] = useState('');
    const[ check1, setCheck1 ] = useState('');
    const[ check2, setCheck2 ] = useState('');
    const[ check3, setCheck3 ] = useState('');

    function handleSubmit(e) {

        e.preventDefault();

        if(email == emailConfirm) {
            users.push({
                email: email,
                emailConfirm: emailConfirm,
                password: password,
                name: name,
                dayBirth: dayBirth,
                monthBirth: monthBirth,
                yearBirth: yearBirth,
                gender: gender,
                check1: check1,
                check2: check2,
                check3: check3
            });
            console.log(users);
            resetForm();
            alert('User registered successfully');
        } else {
            alert('Invalid email confirm');
        }
    }

    function resetForm() {
        setEmail('');
        setEmailConfirm('');
        setPassword('');
        setName('');
        setDayBirth('');
        setMonthBirth('');
        setYearBirth('');
        setGender('');
        setCheck1('');
        setCheck2('');
        setCheck3('');
        document.getElementById("masc").checked = false;
        document.getElementById("fem").checked = false;
        document.getElementById("none").checked = false;
        document.getElementById("check1").checked = false;
        document.getElementById("check2").checked = false;
        document.getElementById("check3").checked = false;
    }
    
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
                    <form onSubmit={e => handleSubmit(e)}>
                        <div className="div-form">
                            <div className="form-cmp">
                                <h3>Qual é seu email?</h3>
                                <input type="email" placeholder="Insira seu e-mail." value={email} onChange={(e)=>setEmail(e.target.value)}/>
                            </div>
                            <div className="form-cmp">
                                <h3>Confirme seu email</h3>
                                <input type="email" placeholder="Insira o e-mail novamente." value={emailConfirm} onChange={(e)=>setEmailConfirm(e.target.value)}/>
                            </div>
                            <div className="form-cmp">
                                <h3>Crie uma senha</h3>
                                <input type="password" placeholder="Crie uma senha." value={password} onChange={(e)=>setPassword(e.target.value)}/>
                            </div>
                            <div className="form-cmp">
                                <h3>Como devemos chamar você?</h3>
                                <input type="text" placeholder="Insira um nome de perfil." value={name} onChange={(e)=>setName(e.target.value)}/>
                            </div>
                            <div className="form-cmp">
                                <h3>Qual a sua data de Birthimento?</h3>
                                <div className="form-cmp-birth">
                                    <div>
                                        <h3>Dia</h3>
                                        <input type="number" placeholder="DD" value={dayBirth} onChange={(e)=>setDayBirth(e.target.value)}/>
                                    </div>
                                    <div>
                                        <h3>Mês</h3>
                                        <input type="number" placeholder="MM" value={monthBirth} onChange={(e)=>setMonthBirth(e.target.value)}/>
                                    </div>
                                    <div>
                                        <h3>Ano</h3>
                                        <input type="number" placeholder="AAAA" value={yearBirth} onChange={(e)=>setYearBirth(e.target.value)}/>
                                    </div>
                                </div>
                            </div>
                            <div className="form-cmp">
                                <h3>Qual é o seu genêro?</h3>
                                <div className="form-cmp-sex">
                                    <input type="radio" name="sex" id="masc" onChange={()=>setGender('M')}/>
                                    <h3>Masculino</h3>
                                    <input type="radio" name="sex" id="fem" onChange={()=>setGender('F')}/>
                                    <h3>Feminino</h3>
                                    <input type="radio" name="sex" id="none" onChange={()=>setGender('N')}/>
                                    <h3>Não informar</h3>
                                </div>
                            </div>
                            <div className="form-cmp">
                                <div className="div-checkbox">
                                    <input type="checkbox" id="check1" onSelect={()=>setCheck1('C')}/>
                                    <h3>Não quero receber mensagens de marketing do Spotify.</h3>
                                </div>
                                <div className="div-checkbox">
                                    <input type="checkbox" id="check2" onSelect={()=>setCheck2('C')}/>
                                    <h3>Compartilhar meus dados cadastrais com os provedores de conteúdo do Spotify para fins de marketing.</h3>
                                </div>
                                <div className="div-checkbox">
                                    <input type="checkbox" id="check3" onSelect={()=>setCheck3('C')}/>
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