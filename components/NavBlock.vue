<script setup>
defineProps({
  navigationTree: {
    type: Array,
    default: () => []
  }
})
</script>

<template>
  <div class="text-gray-700 dark:text-gray-200">
    <ul>
      <li v-for="(item, index) in navigationTree" :key="index">
        <NuxtLink :to="item._path">
          <li class="hover:translate-x-2">{{ item.navTitle || item.title }}</li>
        </NuxtLink>
        <NavBlock v-if="item.children" :navigation-tree="item.children" class="translate-x-2" />
      </li>
    </ul>
  </div>
</template>