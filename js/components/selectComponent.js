export default {
    template: `

       
    <div class="selectTemplate centered">


    	<?php
    		// if there's a message, echo it
    		if(!empty($message)){echo $message;} 
    	?>
       
    	<form method="post">
        <h2 class="signText">Select Your Account</h2>
    	
    	

          
        <router-link :to="{name: 'parentDashboard'}">
        <button id="loginButton" class="mainButton">parent</button>
        </router-link>

        <router-link :to="{name: 'dashboard'}">
        <button id="loginButton" class="mainButton">child</button>
        </router-link>
            

                 
     
    		</form>
        </div>
    `
}