<template>
    <div class="max-h-full flex justify-between px-4 py-4 mx-auto sm:px-2 font-adelia">
      <div>
          <NuxtLink to="/" exactActiveClass="animated-text-gradient" class="hover:animated-text-gradient rounded-lg px-2 py-1 font-medium">Home</NuxtLink>
          <NuxtLink to="/about" exactActiveClass="animated-text-gradient" class="hover:animated-text-gradient rounded-lg px-2 py-1 font-medium">About</NuxtLink>
          <NuxtLink to="/projects" exactActiveClass="animated-text-gradient" class="hover:animated-text-gradient rounded-lg px-2 py-1 font-medium">Projects</NuxtLink>
          <NuxtLink to="/recipes" exactActiveClass="animated-text-gradient" class="hover:animated-text-gradient rounded-lg px-2 py-1 font-medium">Recipes</NuxtLink>
          <NuxtLink to="/security" exactActiveClass="animated-text-gradient" class="hover:animated-text-gradient rounded-lg px-2 py-1 font-medium">Security</NuxtLink>
      </div>

      <div class="flex space-x-3 transition text-gray-500">
        <a :href="`https://github.com/vaughnw128`" title="GitHub" class="dark:text-gray-100 hover:text-gray-700 dark:hover:text-gray-300"><Icon name="fa-brands:github" class="w-5 h-5" /></a>
        <a :href="`https://linkedin.com/in/vaughn-woerpel`" title="LinkedIn" class="dark:text-gray-100 hover:text-gray-700 dark:hover:text-gray-300"><Icon name="fa-brands:linkedin" class="w-5 h-5" /></a>
      </div>
    </div>
</template>