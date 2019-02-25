export default {
    template: `

       
    <div class="selectTemplate centered">


    	<?php
    		// if there's a message, echo it
    		if(!empty($message)){echo $message;} 
    	?>
       
    	<form method="post">
        <h2 class="signText">Select Your Account</h2>
    	
    	

          
                 <a href="parent.php" class="accountButton">parent</a>
            

                 <a href="child.php" class="accountButton">child</a>
     
    		</form>
        </div>
    `
}