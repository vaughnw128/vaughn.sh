<script setup>
const currentCategory = useRoute().params["slug"][0]
const navPaths = ['recipes', 'projects', 'security']
</script>

<template>
  <div class="flex justify-center space-x-2">
    <div class="space-y-2 w-[15%] sticky top-1 h-full px-4 py-4 sm:px-2">
      <div class="text-center align-text-bottom animated-text-gradient
             flex justify-center font-adelia text-3xl p-2">
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