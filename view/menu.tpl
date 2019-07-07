<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">

<!-- 		<link rel="stylesheet" href="https://openlayers.org/en/v4.6.5/css/ol.css" type="text/css"> -->

<!-- 		<link rel="stylesheet" type="text/css" href="../view/css/index.css"> -->
<link rel="stylesheet" type="text/css"
	href="../view/lib/js/theme/default/style.css">
<link rel="stylesheet" type="text/css"
	href="../view/css/bootstrap.min.css">
<link rel="stylesheet" type="text/css" href="../view/css/responsive.css">
<link rel="stylesheet" type="text/css"
	href="../view/css/font-awesome.css">
<link rel="stylesheet" type="text/css"
	href="../view/css/jquerysmoothness.css">
<link rel="stylesheet" type="text/css" href="../view/css/lightbox.css"
	media="screen">
	
<script src="https://openlayers.org/en/v4.6.5/build/ol.js"
	type="text/javascript"></script>

<!-- BIBLIOTECAS JS -->
<script type="text/javascript" src="../view/lib/js/OpenLayers.js"></script>
<script type="text/javascript" src="../view/lib/js/jquery.js"></script>
<script type="text/javascript" src="../view/lib/js/jquery-2.2.4.min.js"></script>
<script type="text/javascript" src="../view/lib/js/lightbox.js"></script>
<script type="text/javascript" src="../view/lib/js/bootstrap.min.js"></script>
<!-- Waypoints -->
    <script src="../view/lib/js/jquery.waypoints.min.js"></script>


<script type="text/javascript" src="../view/lib/js/fontes.js"></script>
<script type="text/javascript" src="../view/lib/js/DynamicMeasure.js"></script>
<script type="text/javascript" src="../view/lib/js/Format.js"></script>
<script type="text/javascript" src="../view/lib/js/bootbox.js"></script>
<script type="text/javascript" src="../view/lib/js/jquery.cookie.js"></script>


<!-- Animate.css -->
<link rel="stylesheet" href="../view/css/animate.css">
<!-- Icomoon Icon Fonts-->
<link rel="stylesheet" href="../view/css/icomoon.css">
<!-- Themify Icons-->
<link rel="stylesheet" href="../view/css/themify-icons.css">
<!-- Bootstrap  -->
<link rel="stylesheet" href="../view/css/bootstrap.css">

<!-- Magnific Popup -->
<link rel="stylesheet" href="../view/css/magnific-popup.css">


<!-- Owl Carousel  -->
        <link rel="stylesheet" href="../view/css/owl.carousel.min.css">
        <link rel="stylesheet" href="../view/css/owl.theme.default.min.css">

<title>Jaguariaíva</title>
</head>

<div>
	<nav class="navbar navbar-expand-lg navbar-light bg-light">
		<div class="row">
			<a class="brasao" target="_blank"> <img
				src="http://portal.jaguariaiva.pr.gov.br/transparencia/view/imagens/logo.png"
				alt="brasão">
			</a>
		</div>
		<div class="row" style="margin-left: 5px;">
			<div class=" collapse navbar-collapse" id="navbarNavDropdown">
				<ul class="navbar-nav">
					<table>
						<tr align="center">
							<th>
								<ul class="navbar-nav">
									<li>
										<!-- 										Navegação --> <a id="map_move">
											<button title="Limpar Mapa">
												<img id="map_move" src="../view/img/btn/image.svg">
											</button>
									</a>
									</li>
								</ul>
							</th>
							<th>
								<ul class="navbar-nav">
									<li>
										<!-- 										Medição Linear --> <a>
											<button type="button" value="line" id="map_medir"
												onclick="toggleControl(this);" title="Medição Linear">
												<img src="../view/img/btn/resize-width.svg">
											</button> <a class="legenda-btn" style="color: #888888"></a>
									</a>
									</li>
								</ul>
							</th>
							<th>
								<ul class="navbar-nav">
									<li>
										<!-- 											Medição Área --> <a>
											<button type="button" value="polygon" id="map_area"
												onclick="toggleControl(this);" title="Medição Área">
												<img src="../view/img/btn/resize-both.svg">
											</button>
									</a>
									</li>
								</ul>
							</th>
							<th>
								<ul class="navbar-nav">
									<!-- 												Camadas -->
									<li class="nav-item dropdown"><a
										class="nav-link dropdown-toggle" href="#"
										id="navbarDropdownMenuLink" data-toggle="dropdown"
										aria-haspopup="true" aria-expanded="false" title="Camadas">
											<img src="../view/img/btn/layers.svg">
									</a>
										<div class="dropdown-menu"
											aria-labelledby="navbarDropdownMenuLink">
											<a class="dropdown-item" href="#"> <input type="checkbox"
												value="" class="checkBox" id="chkMapAeria" />Mapa Aérea
											</a> <a class="dropdown-item" href="#"> <input
												type="checkbox" value="" class="checkBox" id="chkEdificacao" />Edificações
											</a> <a class="dropdown-item" href="#"> <input
												type="checkbox" value="" class="checkBox" id="chkQuadras" />Quadras
											</a> <a class="dropdown-item" href="#"> <input
												type="checkbox" value="" class="checkBox" id="chkLotes" />Lotes
											</a> <a class="dropdown-item" href="#"> <input
												type="checkbox" value="" class="checkBox" id="chkRuas" />Ruas
											</a>
										</div></li>
								</ul>
							</th>
						</tr>

					</table>
				</ul>
			</div>
		</div>
		<!-- 				Campos para busca -->
		<div class="row" style="margin-left: 5px;">
			<div class="col-sm">
				<label for="nome">Bairro</label> <input type="text"
					class="form-control" name="bairro" value="" id="bairro">
			</div>
			<div class="col-sm">
				<label for="nome">Endereço</label> <input type="text"
					class="form-control" name="endereco" value="" id="endereco">
			</div>
			<div class="col-sm">
				<label for="nome">Cadastro</label> <input type="text"
					class="form-control" name="cadastro" value="" id="cadastro">
			</div>
			<div class="col-sm">
				<label for="nome">Inscrição</label> <input type="text"
					class="form-control" name="inscricao" value="" id="inscricao">
			</div>
			<div class="col-sm">
				<button type="button" class="btn btn-info"
					onclick="selectSetorClick()" style="margin-top: 25px;">
					Buscar</button>
			</div>
			<!-- 					Fim do campo de busca -->
		</div>
		<ul class="nav navbar-nav">
			{if $smarty.session.usuario.uge_id|default:''}
				<li><a href="../controle/principal.php?acao=sair">Sair</a></li>
			{else}
				<li><a id="modalLogin" data-toggle="modal" data-target="#loginModal">Login</a></li>
			{/if}
		</ul>
	</nav>
</div>
<body class="bg-light">
	{if $msg|default:''}
		<div id="msgDiv" class="alert alert-{$msg.tipo}" role="alert">
			<span class="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span>
			<span class="sr-only">Error:</span>
			{$msg.mensagem}
		</div>
	{/if} 
	{include file=$content}
</body>



<div class="modal fade" id="loginModal" tabindex="-1" role="dialog"
	aria-labelledby="exampleModalLabel" aria-hidden="true">
	<div class="modal-dialog" role="document">
		<div class="modal-content">
			<div class="modal-header">
				<h5 class="modal-title" id="exampleModalLabel">Login</h5>
				<button type="button" class="close" data-dismiss="modal"
					aria-label="Close">
					<span aria-hidden="true">&times;</span>
				</button>
			</div>
			<div class="modal-body">
				<form action="../controle/geo.php" method="POST">
					<div class="row form-group">
						<div class="form-group col-md-6">
							<label for="username">Usuario</label> <input required type="text"
								class="form-control" name="username" id="username">
						</div>
						<div class="form-group col-md-6">
							<label for="password">Password</label> <input required
								type="password" class="form-control" name="password"
								id="password">
						</div>
					</div>

					<div class="row form-group">
						<div class="col-md-12">
							<input type="submit" class="btn btn-primary" value="Login">
							<input type="reset" class="btn btn-danger" value="Cancelar">
						</div>
					</div>
					<input type="hidden" name="acao" value="acessar">
				</form>
			</div>
		</div>
	</div>
</div>
<!-- 	fim do modal Login -->
<!-- ./fim conteudo -->

<script src="../view/js/mapa.js"></script>

</html>



