<template>
      <nav
        class="
          px-12
          py-2
          md:flex md:justify-between md:items-center
          lg:flex-col
          shadow-md
        "
      >
        <div class="flex items-center justify-between">
      <img src="../assets/logo_RF.svg" class="sm:w-32 lg:w-20" alt="">
      <img src="../assets/logo.svg" class="sm:ml-10 xl:w-32" alt="">
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
            space-y-4
            md:flex
            md:space-y-0
            md:flex-row
            md:items-center
            md:space-x-10
            lg:mt-8
          "
        >
        <a href="/questionnaire">
          <li class="text-sm font-bold text-gray-800 hover:text-blue-400">
            C'est quoi
          </li>
        </a>
          <li class="text-sm font-bold text-gray-800 hover:text-blue-400">
            FAQ
          </li>
          <li class="text-sm font-bold text-gray-800 hover:text-blue-400">
            Contact
          </li>
          <a href="/register">
          <li class="text-sm font-bold text-gray-800 hover:text-blue-400">
            Créer mon compte
          </li>
          </a>
          <a href="/login">
          <li class="text-sm font-bold text-gray-800 hover:text-blue-400">
            Me connecter
          </li>
          </a>
        </ul>
      </nav>
</template>
<script>
export default {
  data() {
    return {
      showMenu: false,
    };
  },
};
</script>