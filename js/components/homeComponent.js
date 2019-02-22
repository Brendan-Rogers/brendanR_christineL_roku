export default {
    template: `
   
<div>
	<section id="welcome" class="fade"> <!--hero image-->
    <div id="title" class="scroll" data-rate="0.6">
    <li class="title">Music</li>
    <li class="title">Movies</li>
    <li class="title">TV</li>
  
    <router-link :to="{name: 'login'}">
    <button class="mainButton foo bar" id="loginButton">Login</button>
    </router-link>
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
</div>

`
}