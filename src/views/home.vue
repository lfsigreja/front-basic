<template>
  <div>
    <div class="container">
      <img class="logo" src="../../assets/logo.svg" alt="Logo Squid">
      
    </div>
    <div class="container">
      <div class="container__image" v-for="i in feed" :key="i.id">
        <div class="content">
          <img class="content__img"  :src="i.imagens.resolucaoPadrao.url" alt="">
          <div class="content__overlay content__overlay--blur" @click="openInstagramLink(i.link)">
              <p>@{{i.usuario.username}}</p>
              <p>
                <img src="../../assets/heart.svg" alt="" class="svg__styling">
                {{i.upvotes}}
              </p>
              <p>
                <img src="../../assets/speech.svg" alt="" class="svg__styling">
                {{i.comentarios}}
              </p>
              <p>
                <img src="../../assets/calendar.svg" alt="" class="svg__styling">
                {{dateFilter(i.criadoEm)}}
              </p>
          </div>
        </div>
    </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import FeedAppService from '../services/getFeed.service'
import moment from 'moment'

export default defineComponent({
  data() {
    return {
      feedAppService: new FeedAppService(),
      feed: '',
    }
  },
  methods: {
    async getFeed() {
      this.feed = await this.feedAppService.getFeed()
      this.feed = this.feed.reverse()
    },
    openInstagramLink(link) {
      window.open(link, '_blank');
    },
    dateFilter(date) {
     return moment(date).format("DD/MM/YYYY HH:mm");
    }
  },
  beforeMount() {
    this.getFeed()
  }
})
</script>

<style scoped>
  .svg__styling {
    filter: invert(99%) sepia(29%) saturate(245%) hue-rotate(322deg) brightness(117%) contrast(100%);
    width: 10px;
  }
  .logo {
    width: 25rem;
  }
  .container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding: 2rem;
  }
  .container__image {
    margin: 8px;
    justify-content: start;
  }
  .content {
    position: relative;
    width: 200px;
    height: 200px;
  }
  .content__img {
    display: block;
    width: 200px;
    height: 200px;
    object-fit: cover;
  }
  .content__overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.6) ;
    color: #fff;
    font-family: 'Quicksand', sans-serif;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    opacity: 0;
    transition: opacity 0.25s;
    cursor: pointer;
  }
  .content__overlay p {
    font-size: 10px;
    font-weight: bold;
  }
  .content__overlay:hover {
    opacity: 1;
  }
  .content__overlay--blur {
    backdrop-filter: blur(5px);
  }
  
</style>