<script setup>
const currentCategory = useRoute().params["slug"][0]
const navPaths = ['recipes', 'projects', 'security']

</script>

<!-- <template>
  <div class="grid grid-cols-3 justify-center gap-4">
    <div class="max-w-2xl items-center ms-auto flex flex-col space-y-2">  
          <div class="py-sm animated-text-gradient font-adelia text-3xl py-2">
            VAUGHN'S ZONE
          </div>
          <div v-if="navPaths.includes(currentCategory)" class="ms-auto bg-gray px-4 py-4 bg-slate-800 ring-1 ring-gray-700 rounded-lg sticky top-4">
            <LeftNav />
          </div>
    </div>

    <div>
      <Navbar />
      <div class="max-w-2xl bg-slate-800 px-8 py-10 m-auto ring-1 ring-gray-700 rounded-lg">
        <main class="max-w-none prose prose-invert prose-pre:bg-gray-900 hover:prose-a:text-primary-400 prose-a:font-normal prose-a:decoration-dotted hover:prose-a:decoration-wavy hover:prose-a:border-primary-400">
          <slot>
              <h1 class="text-2xl">
                Page not found
              </h1>
            </slot>
          </main>
      </div>
    </div>

  </div>
</template> -->

<template>
  <div class="flex justify-center space-x-2">
    <div class="flex flex-col w-[25%] px-4 py-4 sm:px-2 pt-2">
        <div class="text-right animated-text-gradient font-adelia text-3xl py-2">
        VAUGHN'S ZONE
        </div>
        <div class="flex flex-row-reverse">
          <div v-if="navPaths.includes(currentCategory)" class="w-[90%] bg-gray px-4 py-4 bg-slate-800 ring-1 ring-gray-700 rounded-lg">
            <LeftNav />
          </div>
      </div>
    </div>
    <div class="w-[50%]">
      <Navbar />
      <div class="bg-slate-800 px-8 py-10 m-auto ring-1 ring-gray-700 rounded-lg">
        <main class="prose prose-invert prose-pre:bg-gray-900 hover:prose-a:text-primary-400 prose-a:font-normal prose-a:decoration-dotted hover:prose-a:decoration-wavy hover:prose-a:border-primary-400">
          <slot>
              <h1 class="text-2xl">
                Page not found
              </h1>
            </slot>
          </main>
      </div>
    </div>
    <div class="w-[25%]" />
  </div>
</template>