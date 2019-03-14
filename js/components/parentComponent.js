export default {
    template: `
    <div>    <section class="dashboard">
 
    <ul v-if="activeMediaType == 'video'" class="mediaGenres">
        <li>
            <a href="action" @click.prevent="loadMedia('action', null)">Action</a>
        </li>
        <li>
            <a href="comedy" @click.prevent="loadMedia('comedy', null)">Comedy</a>
        </li>
        <li>
            <a href="family" @click.prevent="loadMedia('family', null)">Family</a>
        </li>
        <li>
            <a href="horror" @click.prevent="loadMedia('fantasy', null)">Fantasy</a>
        </li>
        <li>
            <a href="horror" @click.prevent="loadMedia(null, null)">All</a>
        </li>
    </ul>


    <div v-if="activeMediaType == 'audio' && retrievedMedia.length > 0">

        <ul  class="mediaGenres">
            <li>
                <a href="action" @click.prevent="loadMedia('alternative', null)">Alternative</a>
            </li>
            <li>
                <a href="comedy" @click.prevent="loadMedia('blues', null)">Blues</a>
            </li>
            <li>
                <a href="family" @click.prevent="loadMedia('rock', null)">Rock</a>
            </li>
            <li>
                <a href="horror" @click.prevent="loadMedia('soundtrack', null)">Soundtracks</a>
            </li>
            <li>
                <a href="horror" @click.prevent="loadMedia(null, 'audio')">All</a>
            </li>
        </ul>

    </div>

    <div v-if="activeMediaType == 'television' && retrievedMedia.length > 0">

    </div>
    <div id="dashboardBox">
        <div class="movieSection">

            <div class="movieContent">

                <img v-if="activeMediaType == 'video'" v-for="media in retrievedMedia"
                    :src="'images/video/' + media.movies_cover" alt="media thumb" @mouseover="switchActiveMedia(media)"
                    class="vidImage">

                <img v-if="activeMediaType == 'audio'" v-for="media in retrievedMedia"
                    :src="'images/audio/' + media.audio_cover" alt="media thumb" @mouseover="switchActiveMedia(media)"
                    class="vidImage">

            </div>
            

        </div>

        <div v-if="activeMediaType == 'video' && retrievedMedia.length > 0" class="infoArea">

            <h3 class="mediaTitle" @mouseover>{{currentMediaDetails.movies_title}}</h3>
            <p class="mediaDetails" v-html="currentMediaDetails.movies_storyline"></p>
            <span class="media-time">{{currentMediaDetails.movies_runtime}}</span>
            <span class="media-year">Released in {{currentMediaDetails.movies_year}}</span>

            <video autoplay controls muted :src="'video/' + currentMediaDetails.movies_trailer"
                class="fs-video"></video>
        </div>
        <div class="mediaNav">
        <ul class="media-type">
            <li v-for="media in mediaTypes" :data-type="media.description" @click="loadMedia(null, media.description)">
                <span>
                    <i v-bind:class="[media.iconClass]"></i>
                </span>
 
                <span class="d-none d-md-block">{{ media.description }}</span>
            </li>
        </ul>
    </div>


</section>



     `,



    data() {


        return {
            // set the default to video -> will get a random video via query on create
            activeMediaType: "audio",

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

