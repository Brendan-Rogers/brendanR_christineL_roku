export default {
    template: `
   
<div class="centered">
	
    <div id="title" class="scroll" data-rate="0.6">
    <li class="title">Music</li>
    <li class="title">Movies</li>
    <li class="title">TV</li>
  
    <router-link :to="{name: 'login'}">
    <button class="mainButton foo bar" id="loginButton">Login</button>
    </router-link>
    </div>
 




</div>

`
}