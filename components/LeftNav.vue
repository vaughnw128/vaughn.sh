<script setup>
const route = useRoute()
//const currentRoute = route.path
const currentRoute = route.path.replace(/^\/|\/$/g, '');
const folderContent = await queryContent(currentRoute).find()
</script>

<template>
    <div>
      <div>
        <div class="text-gray-700 dark:text-gray-200">
            <pre>
                {{ currentRoute }}
            </pre>
            <ContentNavigation>
                <ul>
                    <NuxtLink
                        v-for="content in folderContent"
                        :key="content._path"
                        :to="content._path"
                        active-class="font-bold"
                        >
                        <li>{{ content.navTitle || content.title }}</li>
                    </NuxtLink>
                </ul>
            </ContentNavigation>
            <!-- <ContentNavigation>
            <ul>
                <ContentNavig path="/recipes" v-slot="{ list }">
                <NuxtLInk v-for="doc in list" :key="doc._path" :to="doc._path">
                <li> {{ doc.navTitle || doc.title}} </li>
                </NuxtLink>
                </ContentList>
            </ul>
            </ContentNavigation> -->
                <!-- <nav>
                    <ContentNavigation v-slot="{ navigation }" :query="articles">
                    <ul>
                        <li v-for="link of navigation" :key="link._path">
                            <NuxtLink :to="link._path">{{ link.title }}</NuxtLink>
                        </li>
                    </ul>
                    </ContentNavigation>
                </nav> -->
                <!-- <pre>
                    {{ articles }}
                </pre> -->
        </div>
      </div>
    </div>
</template>