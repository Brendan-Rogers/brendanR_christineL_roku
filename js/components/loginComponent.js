export default {
	template: `

       
    <div class="loginTemplate">


    	<?php
    		// if there's a message, echo it
    		if(!empty($message)){echo $message;} 
    	?>
       
    	<form method="post">
        <h2 class="signText">Login</h2>
    	
    		<input type="text" name="user-name" placeholder="User Name" required><br><br>


    		<input type="password" name="password" placeholder="Password" required><br><br>


               <router-link :to="{name: 'home'}">
                 <button id="loginButton" class="foo bar mainButton">login</button>
               </router-link>

    		</form>
        </div>
    `
}