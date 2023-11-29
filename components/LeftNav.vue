<template>
    <div>
      <div>
        <div class="text-gray-700 dark:text-gray-200">
            <ContentNavigation v-slot="{ navigation }">
                <ul>
                    <NuxtLink
                        v-for="link of navigation"
                        :key="link._path"
                        :to="link._path"
                        active-class="font-bold"
                        >
                        <li>{{ link.navTitle || link.title }}</li>
                    </NuxtLink>
                </ul>
            </ContentNavigation>
            </div>
      </div>
    </div>
</template>