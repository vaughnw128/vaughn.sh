<script setup>
const currentCategory = useRoute().params["slug"][0]
const folderQuery = queryContent(currentCategory)
</script>

<template>
    <ContentNavigation v-slot="{ navigation }" :query="folderQuery">
        <NavBlock :navigation-tree="navigation" />
    </ContentNavigation>
</template>
  