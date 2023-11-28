<template>
  <div class="flex justify-between max-w-2xl px-4 py-4 mx-auto sm:px-8">
    <!-- Navigation -->
    <nav>
        <NuxtLink to="/">Home</NuxtLink>
        <NuxtLink to="/recipes">Recipes</NuxtLink>
        <NuxtLink to="/ctf">CTF</NuxtLink>
        <NuxtLink to="/projects">Projects</NuxtLink>
        <NuxtLink to="/about">About</NuxtLink>
    </nav>
    <!-- Social icons & Color Mode -->
    <div class="space-x-3 transition text-gray-500">
      <a :href="`https://github.com/vaughnw128`" title="GitHub" class="dark:text-gray-100 hover:text-gray-700 dark:hover:text-gray-300"><Icon name="fa-brands:github" class="w-5 h-5" /></a>
      <a :href="`https://linkedin.com/in/vaughn-woerpel`" title="LinkedIn" class="dark:text-gray-100 hover:text-gray-700 dark:hover:text-gray-300"><Icon name="fa-brands:linkedin" class="w-5 h-5" /></a>
    </div>
  </div>
</template>