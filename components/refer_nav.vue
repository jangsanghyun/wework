<template>
    <b-navbar class="navbar navbar-expand-lg navbar-light bg-light" toggleable="lg" type="dark" variant="info">
        <b-navbar-brand href="/">
            <img :src="logoUrl"/>
        </b-navbar-brand>
        <b-navbar-toggle target="nav-collapse">


        </b-navbar-toggle>
        <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav class="navbar-nav">
                <b-nav-item href="#">기능</b-nav-item>
                <b-nav-item href="#">주요서비스</b-nav-item>
                <b-nav-item href="#">도입사례</b-nav-item>
                <b-nav-item href="#">피플</b-nav-item>
                <b-nav-item href="#">블로그</b-nav-item>
                <b-nav-item href="#">요금안내</b-nav-item>

                <b-nav-item-dropdown class="item1" text="Lang" right>
                    <b-dropdown-item href="#">EN</b-dropdown-item>
                    <b-dropdown-item href="#">ES</b-dropdown-item>
                    <b-dropdown-item href="#">RU</b-dropdown-item>
                    <b-dropdown-item href="#">FA</b-dropdown-item>
                </b-nav-item-dropdown>

                <b-nav-item-dropdown class="item2" right>
                <template #button-content>
                    <em>User</em>
                </template>
                <b-dropdown-item href="#">Profile</b-dropdown-item>
                <b-dropdown-item href="#">Sign Out</b-dropdown-item>
                </b-nav-item-dropdown>
            </b-navbar-nav>
        </b-collapse>
  </b-navbar>
</template>

<script>
export default {
  data () {
    return {
        logoUrl: require('~/static/logo.png'),
        navbarIcon: require('~/static/icon_sitemap_menu.png'),
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
    margin: 0 auto;
    width: 100%;
    max-width: 1200px;
    margin-top: 36px;
    height: 36px;
    background-color: gray;
    outline: 1px solid blue;
    padding: 0px;
    // .container-fluid {
    //     padding-left: 0px;
    // }
    
    .navbar-toggler{
        height: 100%;
        // background-color:red;
        outline: 1px solid pink;
        .navbar-toggler-icon {
            background-image: url('static/icon_sitemap_menu.png');
        }
       
    }
   

    .navbar-brand {
        margin: 0px;
        padding: 0px;
        img {
            width: 81px;
            height: 36px;
        }
    }

    .navbar-nav {
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        .nav-item{
            position: relative;
            height: 25px;
            margin: 0 10px;
            outline: 1px solid black;
            .nav-link {
                padding: 0px;
                font-size: 17px;
                line-height: 25px;
                font-weight: 400;
                font-family: NotoSansCJK_Medium;
                color: black;
            }

            &.item1 {
                position: absolute;
                right: 0px;
            }

            &.item2 {
                position: absolute;
                right: 100px;
            }
        }
    }
}

@media (max-width: 991.98px) {
    .navbar {
        .navbar-brand {
            padding-left: 10px;
            img {
                width: 81px;
                height: 36px;
            }
        }
         .navbar-nav {
            .nav-item{
                &.item1 {
                    position: relative;
                }
                &.item2 {
                    position: relative;
                }
            }
        }
    }
}

</style>
