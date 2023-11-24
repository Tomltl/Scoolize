<template>
    <div>
      <div class="shadow-md">
        <nav
          class="
            container
            px-6
            py-8
            mx-auto
            md:flex md:justify-between md:items-center
          "
          id="nav"
        >
        
          <div class="flex items-center justify-between">
            <router-link
              to="/"
              class="
                text-xl
                font-bold
                text-gray-800
                md:text-2xl
                hover:text-blue-400
              "
              ><img src="../assets/logo république fr.png" alt="" class=" w-20 mr-16">
            </router-link>
            <router-link
              to="/"
              class="
                text-xl
                font-bold
                text-gray-800
                md:text-2xl
                hover:text-blue-400
              "
              ><img src="../assets/Logo.png" alt="">
            </router-link>
            <!-- Mobile menu button -->
            <div @click="showMenu = !showMenu" class="flex md:hidden">
              <button
                type="button"
                class="
                  text-gray-800
                  hover:text-gray-400
                  focus:outline-none focus:text-gray-400
                "
              >
                <svg viewBox="0 0 24 24" class="w-6 h-6 fill-current">
                  <path
                    fill-rule="evenodd"
                    d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
  
  
          <!-- Mobile Menu open: "block", Menu closed: "hidden" -->
          <ul
            :class="showMenu ? 'flex' : 'hidden'"
            class="
              flex-col
              mt-8
              space-y-4
              md:flex
              md:space-y-0
              md:flex-row
              md:items-center
              md:space-x-10
              md:mt-0
            "
          >
          <a href="/" class="hover:bg-gray-100 p-1">
            <li class="text-sm font-bold text-[#2F2F3B]">
              C'est quoi
            </li>
          </a>
          <a href="about" class="hover:bg-gray-100 p-1">
            <li class="text-sm font-bold text-[#2F2F3B]">
              FAQ
            </li>
          </a>
          <a href="about" class="flex items-center hover:bg-gray-100 p-1">
            <img src="../assets/email-outline.png" alt="" class="mr-3">
            <li class="text-sm font-bold text-[#2F2F3B]">
              Contact
            </li>
          </a>
          <a href="register" class="flex items-center hover:bg-gray-100 p-1">
            <img src="../assets/Vector.png" alt="" class="mr-3">
            <li class="text-sm font-bold text-[#2F2F3B]">
              Créer mon compte
            </li>
          </a>
          <a href="login" class="flex items-center hover:bg-gray-100 p-1">
            <img src="../assets/lock-alert-outline.png" alt="" class="mr-3">
            <li class="text-sm font-bold text-[#2F2F3B]">
              Me connecter
            </li>
          </a>
          </ul>
        </nav>
      </div>
    </div>
  </template>

  <script>
  </script>

  <style>

/* @media (min-width: 1040px){
#fra{
    animation: anim4 3s;
  }
}

  @keyframes anim4 {
    0% {
      transform: translateY(-2000px);
    }

    100% {
      transform: translateY(-500px);
    }
  } */



</style>