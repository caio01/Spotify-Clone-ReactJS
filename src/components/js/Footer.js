import "./../css/Footer.css";

export default function Footer() {
	return (
		<>
			<footer>
				<div className="footer__container--flex">
					<div className="empresa">
						<ul className="empresa__list">
							<li className="empresa__item--title">EMPRESA</li>
							<li className="empresa__item">Sobre</li>
							<li className="empresa__item">Empregos</li>
							<li className="empresa__item">For the Record</li>
						</ul>
					</div>
					<div className="comunidades">
						<ul className="comunidades__list">
							<li className="comunidades__item--title">COMUNIDADES</li>
							<li className="comunidades__item">Para Artistas</li>
							<li className="comunidades__item">Desenvolvedores</li>
							<li className="comunidades__item">Publicidade</li>
							<li className="comunidades__item">Investidores</li>
							<li className="comunidades__item">Fornecedores</li>
						</ul>
					</div>
					<div className="uteis">
						<ul className="uteis__list">
							<li className="uteis__item--title">LINKS ÚTEIS</li>
							<li className="uteis__item">Suporte</li>
							<li className="uteis__item">Player da Web</li>
							<li className="uteis__item">Aplicativo móvel grátis</li>
						</ul>
					</div>
				</div>
			</footer>
		</>
	)
}