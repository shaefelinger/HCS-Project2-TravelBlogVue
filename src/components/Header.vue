<template>
  <header class="header h-28 w-full  z-30 bg-white py-0 px-20 flex justify-between items-center border-b-2 border-green-800 shadow-md">
    <router-link :to="{ name: 'Home' }" id="siteLogoName" class="flex items-center  ">
      <div class=" w-9 lg:w-16 "><img class=" object-fill   " src="@/assets/world.png" alt="logo" /></div>
      <span class="pl-4 text-2xl lg:text-4xl xl:text-4xl text-gray-900 lg:font-normal font-medium ">Around the World</span>
    </router-link>

    <div v-if="showModal">
      <Login @closeModal="closeModal" />
    </div>

    <nav>
      <div class="p-6 flex items-center justify-between" id="nav">
        <!-- <router-link class=" text-gray-700" :to="{ name: 'Home' }">Overview</router-link> -->
        <router-link class=" text-gray-700" to="/about">
          <div class="flex items-end">
            <span class="material-icons"></span>
            <span class="ml-2 ">About</span>
          </div>
        </router-link>

        <router-link v-if="userIsLoggedIn" to="/new" class=" text-gray-700 rounded p-3  border-green-700">
          <div class="flex items-end">
            <span class="material-icons">library_add</span>
            <span class="ml-2 ">new post</span>
          </div>
        </router-link>
       
       
        <router-link v-if="userIsLoggedIn" to="/editprofile">
          <img class=" rounded-full w-12 h-12 " :src="currentUser.profilePic" alt="" />
        </router-link>

        <div v-if="userIsLoggedIn" class="text-gray-600 text-xs">
          <span >Welcome </span>
          <p>{{ currentUser.name }}</p>
        </div>

         <a @click="toggleModal" v-if="!userIsLoggedIn" class=" text-gray-700 bg-green-700 p-3 rounded">
          <div class="flex items-end text-white">
            <span class="material-icons">login</span>
            <span class="ml-3 ">Login</span>
          </div>
        </a>

         <a @click="logout" v-if="userIsLoggedIn" class=" text-gray-700 bg-green-700 p-3 rounded">
          <div class="flex items-end text-white">
            <span class="material-icons">logout</span>
            <span class="ml-3 ">Logout</span>
          </div>
        </a>
      </div>
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
  import Login from '@/components/Login.vue';

  export default {
    name: 'Header',
    components: {
      Login,
    },
    methods: {
      setUserLogOut() {
        this.$store.commit('setCurrentUser', { name: 'LoggedOut', email: '-', password: '', index: '', profilePic: '' });
        this.$store.commit('setLoggedIn', false);
      },
      logout() {
        let data = fetch('auth/logout')
          .then((res) => {
            this.setUserLogOut();
            console.log(res);
            this.closeModal();
            this.$router.push('/home');
          })
          .catch((err) => {
            console.log(err);
          });
      },

      toggleModal() {
        this.showModal = !this.showModal;
      },
      closeModal() {
        this.showModal = false;
      },
    },
    computed: {
      userIsLoggedIn() {
        return this.$store.getters.userIsLoggedIn;
      },
      currentUser() {
        return this.$store.getters.getCurrentUser;
      },
    },
    data() {
      return {
        showModal: false,
      };
    },
  };
</script>

<style scoped>
  /* ========================================================================== */
  /* HEADER   */
  /* ========================================================================== */

  .header {
  }

  #siteLogoName {
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  }

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
