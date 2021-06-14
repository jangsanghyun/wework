<template>
    <div class="navbar">
        <b-navbar-brand href="/">
            <img :src="logoUrl"/>
        </b-navbar-brand>
        <div class="hamburger" @click="onHamburgerToggle">
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
    </div>
</template>

<script>
export default {
  data () {
    return {
        logoUrl: require('~/static/logo.png'),
        navbarIcon: require('~/static/icon_sitemap_menu.png'),
        onHamburgerToggle: false,
    }
  },
  computed: {
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
    width: 100%;
    margin-top: 36px;
    height: 36px;
    outline: 1px solid blue;
    max-width: 1200px;

    .navbar-brand {
        position: absolute;
        margin: 0px;
        padding: 0px;
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
            padding: 0px;
            font-size: 17px;
            line-height: 36px;
            font-weight: 400;
            margin: 0 22px;
            font-family: NotoSansCJK_Medium;
            color: black;
            outline: 1px solid red;

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

    
}

@media (max-width: 1200px) {
    .navbar {
    }
}

@media (max-width: 376px) {
    .navbar {
        height: 28px;

        .navbar-brand {
            padding-left: 30px;
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
            opacity: 0;
        }
    }
}

</style>
