<script setup>
const currentCategory = useRoute().params["slug"][0]
const navPaths = ['recipes', 'projects', 'security']
</script>

<!-- <template>
  <div class="flex justify-center items-center space-x-0">
    <div class="
            bg-gradient-to-r bg-clip-text  text-transparent 
            from-indigo-500 via-purple-500 to-red-500
            animate-text flex items-center justify-center w-[15%] font-adelia text-xl">
      VAUGHN'S ZONE
    </div>
      <Navbar class="w-[40%]" />
    <div class="w-[15%]" />
  </div>

  <div class="flex justify-center space-x-4">
    <div v-if="navPaths.includes(currentCategory)" class="sticky top-5 h-full w-[12%] px-2 py-4 bg-white sm:px-4 sm:shadow dark:bg-gray-800 ring-1 ring-gray-200 dark:ring-gray-700 sm:rounded-lg">
      <LeftNav />
    </div>

    <div class="w-[40%] px-4 py-10 m-auto bg-white sm:px-8 sm:shadow dark:bg-gray-800 ring-1 ring-gray-200 dark:ring-gray-700 sm:rounded-lg">
      <main class="max-w-none prose dark:prose-invert prose-pre:bg-gray-100 dark:prose-pre:bg-gray-900 hover:prose-a:text-primary-400 prose-a:font-normal prose-a:no-underline prose-a:border-dashed prose-a:border-b hover:prose-a:border-solid hover:prose-a:border-primary-400">
        <slot>
            <h1 class="text-2xl">
              Page not found
            </h1>
          </slot>
        </main>
    </div>
    <div v-if="navPaths.includes(currentCategory)" class="w-[12%]" />
  </div>
</template> -->

<template>
  <div class="flex justify-center space-x-2">
    <div class="space-y-2 w-[15%] sticky top-1 h-full px-4 py-4 sm:px-2">
      <div class="text-center align-text-bottom
            bg-gradient-to-r bg-clip-text  text-transparent 
            from-indigo-500 via-purple-500 to-red-500
            animate-text flexjustify-center font-adelia text-3xl p-2">
      VAUGHN'S ZONE
      </div>
      <div v-if="navPaths.includes(currentCategory)" class="bg-gray px-4 py-4 bg-slate-800 ring-1 ring-gray-700 rounded-lg">
        <LeftNav />
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

<style lang="postcss">
body {
  @apply text-white pattern-zigzag pattern-bg-transparent pattern-slate-900 pattern-bg-slate-950 pattern-size-2 pattern-opacity-100 bg-fixed;
}
</style>