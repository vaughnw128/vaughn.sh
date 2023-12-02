<script setup>
const currentCategory = useRoute().params["slug"][0]
const folderContent = await queryContent(currentCategory).find()
</script>

<template>
    <div>
      <div>
        <div class="text-gray-700 dark:text-gray-200">
            <ContentNavigation>
                <ul>
                    <NuxtLink
                        v-for="content in folderContent"
                        :key="content._path"
                        :to="content._path"
                        active-class="font-bold"
                        
                        >
                        <li class="hover:translate-x-2">{{ content.navTitle || content.title }}</li>
                    </NuxtLink>
                </ul>
            </ContentNavigation>
        </div>
      </div>
    </div>
</template>