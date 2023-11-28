<template>
  <div class="flex justify-between max-w-2xl px-4 py-4 mx-auto sm:px-8">
    <!-- Navigation -->
    <!-- <ContentNavigation v-slot="{ navigation }"> 
      <NuxtLink
        v-for="link of navigation"
        :key="link._path"
        :to="link._path"
        class="rounded-lg px-2 py-1 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900"
      >
        {{ link.navTitle || link.title }}
      </NuxtLink>
    </ContentNavigation> -->
    <ContentNavigation><NuxtLink href="/" class="rounded-lg px-2 py-1 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900">Home</NuxtLink></ContentNavigation>
    <ContentNavigation><NuxtLink href="/about" class="rounded-lg px-2 py-1 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900">About</NuxtLink></ContentNavigation>
    <ContentNavigation><NuxtLink href="/projects" class="rounded-lg px-2 py-1 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900">Projects</NuxtLink></ContentNavigation>
    <ContentNavigation><NuxtLink href="/recipes" class="rounded-lg px-2 py-1 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900">Recipes</NuxtLink></ContentNavigation>
    <ContentNavigation><NuxtLink href="/security" class="rounded-lg px-2 py-1 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900">Security</NuxtLink></ContentNavigation>
    <!-- Social icons & Color Mode -->
    <div class="space-x-3 transition text-gray-500">
      <a :href="`https://github.com/vaughnw128`" title="GitHub" class="dark:text-gray-100 hover:text-gray-700 dark:hover:text-gray-300"><Icon name="fa-brands:github" class="w-5 h-5" /></a>
      <a :href="`https://linkedin.com/in/vaughn-woerpel`" title="LinkedIn" class="dark:text-gray-100 hover:text-gray-700 dark:hover:text-gray-300"><Icon name="fa-brands:linkedin" class="w-5 h-5" /></a>
    </div>
  </div>
</template>