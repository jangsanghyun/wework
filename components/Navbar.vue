<template>
    <div class="navbar" :class="[device]">
        <b-navbar-brand href="/">
            <img :src="logoUrl"/>
        </b-navbar-brand>
        <div class="hamburger" @click="onHamburgerToggle()">
            <img :src="navbarIcon"/>
        </div>
        <div class="nav-list">
            <div class="nav-item">기능</div>
            <div class="nav-item">주요서비스</div>
            <div class="nav-item">도입사례</div>
            <div class="nav-item">피플</div>
            <div class="nav-item">블로그</div>
            <div class="nav-item right login">로그인</div>
            <div class="nav-item right">도입 문의</div>
        </div>
        <transition name="show">
        <div class="expand-nav-list" v-if="HamburgerToggle">
                <div class="nav-item">기능</div>
                <div class="nav-item">주요서비스</div>
                <div class="nav-item">도입사례</div>
                <div class="nav-item">피플</div>
                <div class="nav-item">블로그</div>
                <div class="nav-item right login">로그인</div>
                <div class="nav-item right">도입 문의</div>
            </div>
        </transition>
    </div>
</template>

<script>

import { mapState, mapGetters, mapMutations } from 'vuex';  

export default {
  methods: {
      onHamburgerToggle() {
          this.HamburgerToggle = !this.HamburgerToggle;
          console.log('click');
      },
  },
  data () {
    return {
        logoUrl: require('~/static/logo.png'),
        navbarIcon: require('~/static/icon_sitemap_menu.png'),
        HamburgerToggle: false,
    }
  },
  computed: {
    ...mapState(['device']),
    togglerIcon() {
        return ``
    }
  }
}
</script>
<style lang="scss" scoped>


.navbar {
    position: relative;
    margin: 0 auto;
    margin-top: 36px;
    height: 36px;
    outline: 1px solid blue;
    max-width: 1200px;
    padding: 0px;

    .navbar-brand {
        position: absolute;
        margin: 0px;
        padding: 0px;
        z-index: 1;
        img {
            width: 81px;
            height: 36px;
        }
    }

    .hamburger {
        opacity: 0;
    }

    .nav-list {
        position: absolute;
        width: 100%;
        height: 100%;
        // background-color: black;
        display: flex;
        flex-direction: row;
        justify-content: center;

        .nav-item {
            width: auto;
            height: 100%;
            padding: 0px 5px;
            font-size: 17px;
            line-height: 36px;
            font-weight: 400;
            margin: 0 22px;
            font-family: NotoSansCJK_Medium;
            color: black;
            outline: 1px solid green;

            .dropdown-toggle  {
                 font-size: 17px;
                line-height: 36px;
                font-weight: 400;
                margin: 0 22px;
                font-family: NotoSansCJK_Medium;
                color: black;
            }
        

            &.right {
                position: absolute;
                right: 0px;
                text-align: right;
                margin: 0px;

                &.login {
                    width: 88px;
                    background-color: black;
                    right: 100px;
                    color: white;
                    text-align: center;
                    border-radius: 25px;
                }
            }
        }
    }
    .expand-nav-list {
        position: absolute;
        top: 0px;
        margin-top: 35px;
        width: 100%;
        height: auto;
        display: flex;
        flex-direction: column;
        justify-content: center;
        outline: 1px solid red; 
        padding: 20px;
        &.show-enter-active,
        &.show-leave-active {
            transition: opacity 0.3s ease;
        }
        &.show-enter {
            opacity: 0;
        }
        &.show-leave-to {
            opacity: 0;
        }

        .nav-item {
            height: 28px;
        }
    }
}

@media (max-width: 1199px) {
    .navbar {
        .navbar-brand {
            position: absolute;
            left: 20px;
            img {
                width: 50px;
                height: 22px;
            }
        }
        .nav-list {
            .nav-item {
                &.right {
                    right: 20px;

                    &.login {
                        right: 120px;
                    }
                }
            }
        }
    }
}

@media (max-width: 769px) {
    .navbar {
        .navbar-brand {
            position: absolute;
            left: 20px;
            img {
                width: 50px;
                height: 22px;
            }
        }
        .nav-list {
            .nav-item {
                &.right {
                    right: 20px;

                    &.login {
                        right: 120px;
                    }
                }
            }
        }

    }
}

@media (max-width: 376px) {
    .navbar {
        width: 100%;
        height: 35px;
        .navbar-brand {
            img {
                width: 50px;
                height: 22px;
            }
        }
        .hamburger {
            position: absolute;
            right: 30px;
            width: 28px;
            height: 28px;
            outline: solid 1px black;
            opacity: 1;
            img {
                width: 100%;
                height: 100%;
            }
        }
        .nav-list {
            display: none;
            opacity: 0;
        }
    }
}



</style>
