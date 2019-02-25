<!DOCTYPE html>
<html>
<head>
  
	<title>Roku Flashback</title>
	<meta charset="utf-8">
	<!-- link the Stylesheet -->
	<link rel="stylesheet" href="css/master.css">
	<link href="https://cdn.jsdelivr.net/npm/animate.css@3.5.1" rel="stylesheet" type="text/css">
		<!-- link Vue.js -->
		<script src="https://unpkg.com/vue"></script>
	<script src="https://unpkg.com/vue-router/dist/vue-router.js"></script>
	
	</head>
<body>

<header id="mainHeader">
          <div id="logo" class="logo">
              <img src="images/roku.svg">
		  </div>
  <nav> 
  <ul>
    <li><a href="music.html">Music</a></li>
    <li><a href="movies">Movies</a></li>
    <li><a href="tv.html">TV</a></li>

  </ul>
</nav>
</header>


<main class="container">
<section id="welcome"> <!--hero image-->


         <div id="app">
		 <transition name="fade" enter-active-class="animated fadeIn" leave-active-class="animated fadeOut">
			<router-view/>
		</transition>
		
          
		</div>
		<div class="overlay"></div>

<div id="heroImage">
    <div id="bkg1" class="scroll" data-rate="1.5"></div>
    <div id="bkg2" class="scroll" data-rate="-1.5"></div>
    <div id="bkg3" class="scroll" data-rate="1.5"></div>
    <div id="bkg4" class="scroll" data-rate="-1.5"></div>
    <div id="bkg5" class="scroll" data-rate="1.5"></div>
    <div id="bkg6" class="scroll" data-rate="-1.5"></div>
</div>

</section>
<!--<h2 v-on:click="loadVids">Load the video</h2>

<p> {{ videoName }} </p>

<p> {{ videoAuthor }} </p>

<p> {{ videoPath }} </p>

<p> {{ videoDuration }} </p> -->

</main>

<footer></footer>

<!-- link our main JS code -->
<script type="module" src="js/main.js"></script>
<script type="module" src="js/move.js"></script>
</body>
</html>