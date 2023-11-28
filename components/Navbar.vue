<template>
    <div class="flex justify-between max-w-4xl px-4 py-4 mx-auto sm:px-8">
      <!-- Navigation -->
      <div >
        <ContentNavigation v-slot="{ navigation }">
          <NuxtLink
            v-for="link of navigation"
            :key="link._path"
            :to="link._path"
          >
            {{ link.navTitle || link.title }}
          </NuxtLink>
        </ContentNavigation>
      </div>
    </div>
</template>