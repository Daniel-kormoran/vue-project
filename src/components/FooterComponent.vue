<template>
   <div
      class=" text-gray-900 dark:text-gray-50 flex w-full flex-col items-center md:justify-around lg:justify-between gap-8 border-y border-slate-800 p-4 pb-4 md:flex-row lg:items-start lg:gap-12 dark:border-slate-700 "
    >
      <!-- Logo -->
      <div class="flex items-center gap-2 lg:w-3/12">
        <img
          class="lg:size-32 size-16"
          src="../assets/logo.png"
          alt="Your Brand"
        />
        
      </div>
      <!-- Navigation -->
      <div class=" lg:mb-4 lg:w-3/12 hidden lg:flex ">
        <nav>
          <ul class="space-y-2">
            <li>
              <a href="#" class="hover:text-delft_blue hover:underline">Home</a>
            </li>
            <li>
              <a href="#" class="hover:text-delft_blue hover:underline"
                >About</a
              >
            </li>
            <li>
              <a href="#" class="hover:text-delft_blue hover:underline"
                >Services</a
              >
            </li>
            <li>
              <a href="#" class="hover:text-delft_blue hover:underline"
                >Contact</a
              >
            </li>
          </ul>
        </nav>
      </div>
      <!-- Social Icons -->
      <div class="flex flex-col items-center lg:mb-4 lg:w-3/12 lg:items-start">
        <p class="mb-2 font-semibold">Follow Us On:</p>
        <div class="flex space-x-4">
          <a href="#" class="hover:text-indigo-600"
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="icon icon-tabler icons-tabler-outline icon-tabler-brand-facebook"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path
                d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3"
              />
            </svg>
          </a>
          <a href="#" class="hover:text-indigo-600"
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="icon icon-tabler icons-tabler-outline icon-tabler-brand-x"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
              <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
              </svg>
            </a>
          <a href="#" class="hover:text-indigo-600"
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="icon icon-tabler icons-tabler-outline icon-tabler-brand-instagram"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path
                d="M4 4m0 4a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z"
              />
              <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
              <path d="M16.5 7.5l0 .01" />
            </svg>
          </a>
          
        </div>
      </div>
      
    </div>

    <div
      class=" text-gray-900 dark:text-gray-50 flex flex-col items-center justify-between gap-4 p-4 md:flex-row"
    >
      <div class="text-center md:text-left">&copy; 2024 Your Company</div>
      <div class="flex space-x-4">
        <a href="#" class="hover:text-indigo-600 hover:underline">Terms</a>
        <a href="#" class="hover:text-indigo-600 hover:underline">Privacy</a>
        <a href="#" class="hover:text-indigo-600 hover:underline">Security</a>
        <a href="#" class="hover:text-indigo-600 hover:underline">Cookies</a>
      </div>
    </div>
</template>
