<template>
    <div class="flex justify-between max-w-4xl px-4 py-4 mx-auto sm:px-2">
      <div>
        <ContentNavigation>
          <NuxtLink href="/" class="rounded-lg px-2 py-1 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900">Home</NuxtLink>
          <NuxtLink href="/about" class="rounded-lg px-2 py-1 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900">About</NuxtLink>
          <NuxtLink href="/projects" class="rounded-lg px-2 py-1 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900">Projects</NuxtLink>
          <NuxtLink href="/recipes" class="rounded-lg px-2 py-1 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900">Recipes</NuxtLink>
          <NuxtLink href="/security" class="rounded-lg px-2 py-1 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900">Security</NuxtLink>
        </ContentNavigation>
      </div>

      <div class="flex space-x-3 transition text-gray-500">
        <a :href="`https://github.com/vaughnw128`" title="GitHub" class="dark:text-gray-100 hover:text-gray-700 dark:hover:text-gray-300"><Icon name="fa-brands:github" class="w-5 h-5" /></a>
        <a :href="`https://linkedin.com/in/vaughn-woerpel`" title="LinkedIn" class="dark:text-gray-100 hover:text-gray-700 dark:hover:text-gray-300"><Icon name="fa-brands:linkedin" class="w-5 h-5" /></a>
      </div>
    </div>
</template>