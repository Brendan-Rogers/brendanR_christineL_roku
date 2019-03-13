// SEAF
//(function(){ console.log("JS Initialized");




//Components
import homeComponent from './components/homeComponent.js';
import loginComponent from './components/loginComponent.js';
import selectComponent from './components/selectComponent.js';
import parentComponent from './components/parentComponent.js';

const routes = [
	{ path: '/', redirect: { name: "home" } },
	{ path: "/home", name: "home", component: homeComponent },
	{ path: "/login", name: "login", component: loginComponent },
	{ path: "/selectAccount", name: "select", component: selectComponent },
	{ path: "/dashboard", name: "parentDashboard", component: parentComponent },

];

const router = new VueRouter({

	routes

});

const vm = new Vue({

	router: router

}).$mount("#app");




// END OF VUE APP*/
