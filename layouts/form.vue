<template>
  <section class="bg-gray-50 min-h-screen flex items-center justify-center">
    <!-- login container -->
    <div
      class="bg-gray-100 flex rounded-2xl shadow-lg max-w-3xl p-5 items-center"
    >
      <!-- form -->
      <div class="md:w-1/2 px-8 md:px-16">
        <slot name="headerForm"></slot>

        <form action="" class="flex flex-col gap-4 mt-4">
          <slot></slot>
        </form>

        <div class="mt-6 grid grid-cols-3 items-center text-gray-400">
          <hr class="border-gray-400" />
          <p class="text-center text-sm">OR</p>
          <hr class="border-gray-400" />
        </div>

        <button
          class="bg-white border py-2 w-full rounded-xl mt-5 flex justify-center items-center text-sm hover:scale-105 duration-300 text-[#002D74]"
        >
          <Icon name="logos:google-icon" class="px-1 w-6 h-6" />
          Login with Google
        </button>

        <div class="mt-5 text-xs border-b border-[#002D74] py-4 text-[#002D74]">
          <a href="#">Forgot your password?</a>
        </div>

        <div
          class="mt-3 text-xs flex justify-between items-center text-[#002D74]"
        >
          <p>Don't have an account?</p>
          <button
            class="py-2 px-5 bg-white border rounded-xl hover:scale-110 duration-300"
          >
            Register
          </button>
        </div>
      </div>

      <!-- image -->
      <slot name="image"></slot>
    </div>
  </section>
</template>
