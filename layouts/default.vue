<script setup>
const currentCategory = useRoute().params["slug"][0]
const navPaths = ['recipes', 'projects', 'security']
</script>

<template>
  <div class="flex justify-center space-x-2">
    <div class="space-y-2 w-[15%] sticky top-1 h-full px-4 py-4 sm:px-2">
      <div class="text-right align-text-bottom animated-text-gradient
             font-adelia text-3xl p-2">
      VAUGHN'S ZONE
      </div>
      <div class="flex flex-row-reverse">
        <div v-if="navPaths.includes(currentCategory)" class="w-[60%] bg-gray px-4 py-4 bg-slate-800 ring-1 ring-gray-700 rounded-lg">
          <Sidenav />
        </div>
      </div>
    </div>
    
    <div class="w-[40%] pt-6">
      <Navbar />
      <div class="bg-slate-800 px-8 py-10 m-auto ring-1 ring-gray-700 rounded-lg">
        <main class="max-w-none prose prose-invert prose-pre:bg-gray-900 hover:prose-a:text-primary-400 prose-a:font-normal prose-a:decoration-dotted hover:prose-a:decoration-wavy hover:prose-a:border-primary-400">
          <slot>
              <h1 class="text-2xl">
                Page not found
              </h1>
            </slot>
          </main>
      </div>
    </div>

    <div class="w-[15%]" />
  </div>
</template>