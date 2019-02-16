// SEAF
(function(){ console.log("JS Initialized");

const vm = new Vue({

	el : "#app",

	data : {
		videoName : "",
		videoAuthor : "",
		videoPath : "",
		videoDuration : ""
	},


	methods : {

		loadVids : function () {
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
// END OF VUE APP

}) ();