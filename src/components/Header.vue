<template>
  <header class="header h-28 w-full  z-30 bg-white py-0 px-16 flex justify-between items-center border-b-2 border-green-800 shadow-md">
    <router-link :to="{ name: 'Home' }" id="siteLogoName" class="flex items-center  ">
      <div class=" w-9 lg:w-16 "><img class=" object-fill   " src="@/assets/world.png" alt="logo" /></div>
      <span class="pl-4 text-2xl lg:text-4xl xl:text-4xl text-gray-900 lg:font-normal font-medium ">Around the World</span>
    </router-link>

    <div v-if="showModal">
      <Login @closeModal="closeModal" />
    </div>

    <nav>
      <div class="p-6 flex items-center justify-between" id="nav">
        <router-link class=" text-gray-700 p-2" to="/about">
          <div class="flex items-end">
            <span class="material-icons"></span>
            <span class="mx-2 ">About</span>
          </div>
        </router-link>

        <router-link v-if="userIsLoggedIn" to="/new" class=" text-gray-700 rounded p-3  border-green-700">
          <div class="flex items-end">
            <span class="material-icons">library_add</span>
            <span class="ml-2 ">new post</span>
          </div>
        </router-link>

        <div v-if="userIsLoggedIn">
          <img class=" rounded-full w-12 h-12 flex-shrink-0" :src="currentUser.profilePic" alt="" />
        </div>
        <!-- <router-link v-if="userIsLoggedIn" to="/editprofile">
          <img class=" rounded-full w-12 h-12 " :src="currentUser.profilePic" alt="" />
        </router-link> -->

        <div v-if="userIsLoggedIn" class="text-gray-600 text-xs ml-1">
          <span >Welcome </span>
          <p>{{ currentUser.name }}</p>
        </div>

        <a @click="toggleModal" v-if="!userIsLoggedIn" class=" text-gray-700 bg-green-700 p-3 rounded">
          <div class="flex items-end text-white">
            <span class="material-icons">login</span>
            <span class="mx-3 ">Login</span>
          </div>
        </a>

        <a @click="logout" v-if="userIsLoggedIn" class=" text-gray-700 bg-green-700 p-3 rounded">
          <div class="flex items-end text-white">
            <span class="mx-3 ">Logout</span>
            <span class="material-icons">logout</span>
          </div>
        </a>
      </div>
    </nav>

    <!-- ///////// BURGER-MENU //////// -->

    <div id="burger" class="burger" href="#" @click="toggleBurgerMenu">
      <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
      </svg>
    </div>
    <div id="sideMenu" class="sideMenu-hiding" v-if="showBurgerMenu" @click="toggleBurgerMenu">
      <div class="flex flex-col items-end">
        <div v-if="userIsLoggedIn">
          <img class=" rounded-full w-10 h-10 " :src="currentUser.profilePic" alt="" />
        </div>
        <!-- <router-link v-if="userIsLoggedIn" to="/editprofile">
          <img class=" rounded-full w-12 h-12 " :src="currentUser.profilePic" alt="" />
        </router-link> -->
        <div v-if="userIsLoggedIn" class="text-gray-600 text-xs">
          <!-- <span>Welcome </span> -->
          <p>{{ currentUser.name }}</p>
        </div>
        <router-link class=" text-gray-700 mt-2" to="/about">
          <div class="flex justify-end">
            <span class="text-right">About</span>
          </div>
        </router-link>

        <router-link v-if="userIsLoggedIn" to="/new" class=" text-gray-700 rounded p-3  border-green-700">
          <div class="flex justify-end">
            <span class="material-icons">library_add</span>
            <span class="ml-3 ">new post</span>
          </div>
        </router-link>

        <a @click="toggleModal" v-if="!userIsLoggedIn" class=" text-gray-700 bg-green-700 p-3 rounded hover:text-gray-700">
          <div class=" flex justify-end text-white hover:text-gray-700  ">
            <span class="material-icons">login</span>
            <span class="ml-3 mr-1">Login</span>
          </div>
        </a>

        <a @click="logout" v-if="userIsLoggedIn" class=" text-gray-700 bg-green-700 p-3 rounded">
          <div class="flex items-end text-white">
            <span class="mx-3 ">Logout</span>
            <span class="material-icons">logout</span>
          </div>
        </a>

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
    data() {
      return {
        showModal: false,
        showBurgerMenu: false,
      };
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
      toggleBurgerMenu() {
        this.showBurgerMenu = !this.showBurgerMenu;
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
  };
</script>

<style scoped>
  /* ========================================================================== */
  /* HEADER   */
  /* ========================================================================== */

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
    font-size: 1rem;
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
    width: 100%;
    padding: 0.4rem 0.4rem 0.4rem 3rem;
    text-decoration: none;
    color: #155e39;
    transition: all 300ms ease-in-out;
  }


  #sideMenu a:hover {
    background-color: #ccc;
    color: #111;
  }

  #sideMenu a.active {
    background-color: #eee;
    color: #111;
  }

  /* HEADER RESPONSIVE  */
  /* ========================================================================== */

  /* small 820px */
  @media (min-width: 1100px) {
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

  /* xl 1280px */
  @media (min-width: 1280px) {
    .header nav a {
      font-size: 1rem;
    }
  }
 
</style>
