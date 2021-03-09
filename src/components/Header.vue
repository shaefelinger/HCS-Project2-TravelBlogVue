<template>
  <!-- <p>Header</p> -->

  <header class="header h-28 w-full  z-30 bg-white py-0 px-20 flex justify-between items-center border-b-2 border-green-800 shadow-md">
    <a id="siteLogoName" href="./index.html" class="flex items-center  ">
      <div class=" w-9 lg:w-16 "><img class=" object-fill   " src="@/assets/world.png" alt="logo" /></div>
      <span class="pl-4 text-2xl lg:text-4xl xl:text-4xl text-gray-900 lg:font-normal font-medium ">Around the World</span>
    </a>

    <nav>
      <div class="p-6" id="nav">
        <router-link class=" text-gray-700" :to="{ name: 'Home' }">Overview</router-link>
        <router-link class=" text-gray-700" to="/map">Map</router-link>
        <router-link class=" text-gray-700" to="/about">About</router-link>
        <router-link class=" text-gray-700" to="/details">details</router-link>
        <router-link v-if="isAuth" class=" text-gray-700" to="/new">+new post</router-link>
        <!-- <router-link v-if="!user" class=" text-gray-700" to="/login">Login/register</router-link>
        <router-link v-else class=" text-gray-700" to="/login">Logout</router-link> -->
        <button @click="login" v-if="!isAuth">Login</button>
        <button @click="logout" v-if="isAuth">Logout</button>
      </div>

      <!-- <a id="gotoOverviewLink" onclick="gotoOverviewPage()" class="active">overview</a>
      <a id="gotoMapLink" onclick="gotoMapPage()">map</a>
      <a id="gotoNewPostLink" onclick="gotoAddPostPage()">+ add post</a>
      <a id="gotoResetAllLink" onclick="resetLocalStorage()">reset all</a>
      <a id="gotoAboutPageLink" onclick="gotoAboutPage()">about</a> -->
    </nav>

    <a id="burger" class="burger" href="#">
      <!-- <i class="fas fa-bars">🍔</i> -->
      <!-- <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 10h16M4 14h16M4 18h16"></path></svg> -->
      <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
      </svg>
    </a>
    <div id="sideMenu" class="sideMenu-hiding">
      <div>
        <a id="gotoOverviewSideMenu" onclick="gotoOverviewPage()" class="active">overview</a>
        <a id="gotoMapSideMenu" onclick="gotoMapPage()">map</a>
        <a id="gotoNewPostSideMenu" onclick="gotoAddPostPage()">+ add post</a>
        <a id="gotoResetAllSideMenu" onclick="resetLocalStorage()">reset all</a>
        <a id="gotoAboutPageSideMenu" onclick="gotoAboutPage()">about</a>
      </div>
    </div>
  </header>
  <!-- <router-view /> -->
</template>

<script>
  export default {
    name: 'Header',
    methods: {
      login() {
        this.$store.dispatch('login');
      },
      logout() {
        this.$store.dispatch('logout');
      },
    },
    computed: {
      user() {
        return this.$store.getters.user;
      },
      isAuth() {
        return this.$store.getters.userIsAuthenticated;
      },
    },
  };
</script>

<style scoped>
  /* ========================================================================== */
  /* HEADER   */
  /* ========================================================================== */

  .header {
    /* background-color: #fff; */
    /* border-bottom: 0.125rem #155e39 solid; */
    /* border-bottom:  #155e39 solid; */
    /* box-shadow: 0 0px 20px 2px rgba(0, 0, 0, 0.2); */
    /* padding: 0 7%; */
    /* z-index: 30000; */
    /* display: flex; */
    /* justify-content: space-between; */
    /* align-items: center; */
  }

  /* .header .logo {
    height: 27px;
  } */

  #siteLogoName {
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    /* color: rgb(17, 17, 17); */
    /* font-size: 1.5rem; */
    /* font-weight: 400; */
  }

  /* .worldLogo {
    margin-bottom: 10px;
    height: 2rem;
  } */

  /* NAV */
  /* ========================================================================== */

  .header nav a {
    font-size: 0.75rem;
    color: #155e39;
    text-transform: uppercase;
    text-align: right;
    margin: 0.3rem 0rem;
    display: block;
    transition: color 800ms ease-in-out, transform 800ms ease-in-out;
  }

  .header nav a:hover {
    color: #111;
    transition: color 250ms ease-in-out, transform 250ms ease-in-out;
  }

  .header nav .active {
    color: #111;
    transform: scale(1.1) translateY(-1px);
  }

  /* ========== NAV not shown on small screens ========== */
  .header nav {
    display: none;
  }

  /* BURGER-MENU for small screens */
  .header .burger {
    display: block;
    font-size: 1.7rem;
  }

  /* SIDE-MENU  */
  #sideMenu {
    font-size: 1.1rem;
    padding: 1rem;
    text-align: right;
    text-transform: uppercase;
    background-color: #fafafa;
    box-shadow: 5px 5px 5px #ccc;
    border-radius: 5px;
    position: fixed;
    right: 1rem;
    top: 2rem;
    z-index: 100000;
    transition: 0.7s;
  }

  #sideMenu a {
    display: block;
    padding: 0.4rem 0.4rem 0.4rem 3rem;
    text-decoration: none;
    color: #155e39;
    transition: all 300ms ease-in-out;
  }

  #sideMenu a:hover {
    background-color: #eee;
    color: #111;
  }

  #sideMenu a.active {
    background-color: #eee;
    color: #111;
  }

  .sideMenu-hiding {
    margin-right: -320px;
  }

  /* HEADER RESPONSIVE  */
  /* ========================================================================== */

  /* small 820px */
  @media (min-width: 820px) {
    .header nav a {
      display: inline-block;
      margin: 0 1rem;
      font-size: 0.8rem;
    }

    .header nav a:hover {
      transform: scale(1.1) translateY(-1px);
      color: #111;
      transition: color 250ms ease-in-out, transform 250ms ease-in-out;
    }

    .header nav {
      display: block;
    }

    .header .burger {
      display: none;
    }

    #sideMenu {
      display: none;
    }
  }

  /* md 768px */
  @media (min-width: 880px) {
    .header nav a {
      font-size: 0.9rem;
    }
  }

  /* lg 1024px */
  /* @media (min-width: 1024px) {
    .header #companyName {
      font-size: 2rem;
    }
  } */

  /* xl 1280px */
  @media (min-width: 1280px) {
    /* .header #companyName {
      font-size: 2.5rem;
    } */

    /* .worldLogo {
      margin-bottom: 10px;
      height: 4rem;
    } */

    .header nav a {
      font-size: 1rem;
    }
  }

  /* small horizontal devices */
  @media (max-height: 500px) {
    /* .header {
      height: 50px;
    }
    .main {
      margin-top: 40px;
    }
    a#companyName {
      line-height: 50px;
    } */
  }
</style>
