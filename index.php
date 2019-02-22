<!DOCTYPE html>
<html>
<head>
  
	<title>Roku Flashback</title>
	<meta charset="utf-8">
	<!-- link the Stylesheet -->
	<link rel="stylesheet" href="css/master.css">
		<!-- link Vue.js -->
		<script src="https://unpkg.com/vue"></script>
	<script src="https://unpkg.com/vue-router/dist/vue-router.js"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.0/animate.css"></script>

	</head>
<body>

<header id="mainHeader">
          <div id="logo" class="logo">
              <img src="images/roku.svg">
		  </div>
</header>


<main id="app">


         <div>
		 <transition name="fade" enter-active-class="animated fadeIn" leave-active-class="animated fadeOut">
			<router-view/>
        </transition>
          
        </div>


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