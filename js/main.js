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



/*const vm = new Vue({
	el: "#app",
	data: {
		videoName: "",
		videoAuthor: "",
		videoPath: "",
		videoDuration: ""
	},
	methods: {
		loadVids: function () {
			const url = 'includes/video.php'
			fetch(url)
				.then(res => res.json())
				.then(data => {
					this.videoName = data[0].video_name;
					this.videoAuthor = data[0].video_author;
					this.videoPath = data[0].video_url;
					this.videoDuration = data[0].video_duration;
				});
		}
	}
});
// END OF VUE APP*/
