<script setup>

defineProps({
  navigationTree: {
    type: Array,
    default: () => []
  }
})

const getDepth = (item) => {
  return item._path.split("/").length-2;
}

const navClass = (item) => {
    const depth = getDepth(item);
    if(depth === 0) {
      return "text-2xl";
    } else if (depth === 1) {
      return "text-xl border-b-2 border-dashed";
    } else {
     return "";
    }
}

const depth = (item) => {
  return item._path.split("/").length-2;
}
</script>

<template>
  <div class="text-gray-700 dark:text-gray-200">
    <ul>
      <li v-for="(item, index) in navigationTree" :key="index">
        <NuxtLink :to="item._path">
            <li :class=navClass(item) class="hover:translate-x-2">{{ item.title }}</li>
        </NuxtLink>
        <NavBlock v-if="item.children" :navigation-tree="item.children" />
      </li>
    </ul>
  </div>
</template>)