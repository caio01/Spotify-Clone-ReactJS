import "./../css/Support.css";
import { Link } from "react-router-dom";

export default function Support() {
	return (
		<>
			<main>
				<h1 class="title">
					<Link to="/">
						<img src="./assets/img/spotify.svg" alt="Spotify" /> Spotify
					</Link>
				</h1>
				<h2>Perguntas Frequentes</h2>
				<table>
					<tr>
						<td class="pergunta">Endereço de e-mail antigo?</td>
						<td class="resposta">
							Você precisa ter acesso ao endereço de e-mail cadastrado na sua
							conta do Spotify para abrir o link de redefinição de senha que nós
							enviamos. Caso você não tenha acesso, estas são algumas opções:
							Recupere o acesso ao endereço de e-mail, se possível. Crie uma
							nova conta e comece do zero.
						</td>
					</tr>
					<tr>
						<td class="pergunta">
							Nenhuma conta associada ao endereço de e-mail?
						</td>
						<td class="resposta">
							Tente inserir qualquer outro endereço de e-mail que você possa ter
							usado para criar uma conta.
							<br />
							Observação: existem várias maneiras de se inscrever: usando um
							e-mail, um número de telefone, o Facebook, a Apple ou o Google.
							Tente fazer login usando essas opções para localizar sua conta.
						</td>
					</tr>
					<tr>
						<td class="pergunta">
							Não recebeu o e-mail de redefinição de senha?
						</td>
						<td class="resposta">
							Verifique as pastas de spam/lixo eletrônico ou qualquer outra
							pasta filtrada. Se você não tiver acesso ao seu endereço de
							e-mail, consulte “Endereço de e-mail antigo?”.
						</td>
					</tr>
					<tr>
						<td class="pergunta">
							O link para redefinição de senha não funciona?
						</td>
						<td class="resposta">
							Redefina a senha novamente, mas desta vez abra o link do e-mail em
							uma janela anônima/privada do navegador.
						</td>
					</tr>
					<tr>
						<td class="pergunta">Como criar um plano Premium Família?</td>
						<td class="resposta">
							A pessoa que quiser administrar o plano deve se inscrever. Para
							isso, ela pode usar uma conta que já existe ou criar uma nova.
						</td>
					</tr>
					<tr>
						<td class="pergunta">Não achou o endereço?</td>
						<td class="resposta">
							Se ele não aparecer automaticamente, insira o endereço completo e
							selecione Encontrar. Se mesmo assim ele não aparecer, selecione
							seu edifício, o nome da sua rua ou um espaço ou edifício público
							próximo. Só não use o endereço de outra pessoa.
						</td>
					</tr>
					<tr>
						<td class="pergunta">Falha na verificação de endereço?</td>
						<td class="resposta">
							Se não conseguirmos confirmar alguma informação fornecida pela
							pessoa convidada, enviaremos um e-mail para fazer uma nova
							verificação. Ela só precisa inserir o endereço completo dela
							dentro de 7 dias após o recebimento do e-mail. Se tudo der certo,
							a conta será mantida no plano Premium Família.
						</td>
					</tr>
				</table>
			</main>
		</>
	);
}
