<template>
  <div>
    <div class="body">
      <Navbar></Navbar>
      <Nuxt />
    </div>
  </div>
</template>
<script>

import { mapState, mapGetters, mapMutations } from 'vuex';  

export default {
  methods: {
     ...mapMutations({
       setDevice: 'SET_DEVICE',
    }),
  },
  mounted() {
    console.log("Created wecake");
    const filter = "win16|win32|win64|macintel|mac|"; // PC일 경우 가능한 값
    if(navigator.platform) {
        if(filter.indexOf(navigator.platform.toLowerCase()) < 0 ) {
              this.setDevice('mobile');
        } else {
              this.setDevice('pc');
        }
    }
  },
}
</script>
<style>
html {
  font-family:
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}

.body {
  margin: 0 auto;
  max-width: 1500px;
  /* background-color: rgba(0, 128, 0, 0.271); */
}


@media (max-width: 1200px) {
    .body {
      min-width: 1200px;
    }
}

@media (max-width: 376px) {
    .body {
      min-width: 376px;
    }
}

</style>
