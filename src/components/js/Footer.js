import "./../css/Footer.css";

export default function Footer() {
	return (
		<>
			<footer>
				<div class="footer__container--flex">
					<div class="empresa">
						<ul class="empresa__list">
							<li class="empresa__item--title">EMPRESA</li>
							<li class="empresa__item">Sobre</li>
							<li class="empresa__item">Empregos</li>
							<li class="empresa__item">For the Record</li>
						</ul>
					</div>
					<div class="comunidades">
						<ul class="comunidades__list">
							<li class="comunidades__item--title">COMUNIDADES</li>
							<li class="comunidades__item">Para Artistas</li>
							<li class="comunidades__item">Desenvolvedores</li>
							<li class="comunidades__item">Pucblicidade</li>
							<li class="comunidades__item">Investidores</li>
							<li class="comunidades__item">Fornecedores</li>
						</ul>
					</div>
					<div class="uteis">
						<ul class="uteis__list">
							<li class="uteis__item--title">LINKS ÚTEIS</li>
							<li class="uteis__item">Suporte</li>
							<li class="uteis__item">Player da Web</li>
							<li class="uteis__item">Aplicativo móvel grátis</li>
						</ul>
					</div>
				</div>
			</footer>
		</>
	);
}
