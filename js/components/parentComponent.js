export default {
    template: `

    <section class="dashboard">
         <div class="movieSection">
     
            <div class="movieContent">
                <img v-if="activeMediaType == 'video'" v-for="media in retrievedMedia"
                :src="'images/video/' + media.movies_cover" alt="media thumb" @mouseover="switchActiveMedia(media)"
                class="vidImage">
           
             
            </div>
          
        </div>

        <h3 class="mediaTitle" @mouseover>{{currentMediaDetails.movies_title}}</h3>

    


   </section>

     `,



    data() {


        return {
            // set the default to video -> will get a random video via query on create
            activeMediaType: "video",

            // push first (or random) media object here (selected / filtered on create)
            currentMediaDetails: {
                source: "avengers.mp4",
            },

            // could add more media types here in future
            mediaTypes: [
                { iconClass: "fas fa-headphones", description: "audio" },
                { iconClass: "fas fa-film", description: "video" },
                { iconClass: "fas fa-tv", description: "television" }
            ],

            retrievedMedia: [],

            // controls mute / unmute for video element
            vidActive: false
        }
    },

    created: function () {
        console.log('params:', this.$route.params);

        this.loadMedia(null, "video");
    },

    methods: {

        loadMedia(filter, mediaType) {
            // set the active media type
            if (this.activeMediaType !== mediaType && mediaType !== null) {
                this.activeMediaType = mediaType;
            }
            // build the url based on any filter we pass in (will need to expand on this for audio)

            let url = (filter == null) ? `./admin/index.php?media=${this.activeMediaType}` : `./admin/index.php?media=${this.mediaType}&&filter=${filter}`;

            fetch(url)
                .then(res => res.json())
                .then(data => {
                    // we're gettin them all, dump it all in the media container
                    this.retrievedMedia = data;
                    // grab the first one in the list and make it active
                    this.currentMediaDetails = data[0];
                })
                .catch(function (error) {
                    console.error(error);
                });
        },


        switchActiveMedia(media) {
            console.log(media);

            this.currentMediaDetails = media;
        }
    }

}

