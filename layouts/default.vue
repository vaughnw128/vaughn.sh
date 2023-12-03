<script setup>
const currentCategory = useRoute().params["slug"][0]
const navPaths = ['recipes', 'projects', 'security']
</script>

<!-- <template>
  <div class="h-screen flex justify-center">
    <div class="items-center ms-auto flex flex-col space-y-2 sticky top-1 h-full">  
      <div class="py-sm animated-text-gradient font-adelia text-3xl py-2">
        VAUGHN'S ZONE
        </div>
        <div v-if="navPaths.includes(currentCategory)" class="ms-auto bg-gray px-4 py-4 bg-slate-800 ring-1 ring-gray-700 rounded-lg">
          <LeftNav />
        </div>
    </div>

    <div>
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

  </div>
</template> -->

<template>
  <div class="grid grid-cols-3 justify-center gap-4">
    <div class="items-center ms-auto flex flex-col space-y-2 sticky top-1">  
      <div class="sticky top-2">
        <div class="py-sm animated-text-gradient font-adelia text-3xl py-2">
          VAUGHN'S ZONE
          </div>
          <div v-if="navPaths.includes(currentCategory)" class="ms-auto bg-gray px-4 py-4 bg-slate-800 ring-1 ring-gray-700 rounded-lg">
            <LeftNav />
          </div>
        </div>
    </div>

    <div>
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

  </div>
</template>

<!-- <template>
  <div class=" flex justify-center space-x-2">
    <div class=" w-[15%] sticky top-1 h-full px-4 py-4 sm:px-2 pt-2">
        <div class="max-h-[5%] text-right animated-text-gradient font-adelia text-3xl py-2">
        VAUGHN'S ZONE
        </div>
        <div class="flex flex-row-reverse h-full">
          <div v-if="navPaths.includes(currentCategory)" class="w-[90%] bg-gray px-4 py-4 bg-slate-800 ring-1 ring-gray-700 rounded-lg">
            <LeftNav />
          </div>
      </div>
    </div>

    <div class="w-[40%]">
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

    <div class="w-[15%]" />
  </div>
</template> -->