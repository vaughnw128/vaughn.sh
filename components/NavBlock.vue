<script setup>

defineProps({
  navigationTree: {
    type: Array,
    default: () => []
  }
})

// const treePrint = (title, tree, index, size, depth) => {
//     if(depth === 0) {
//      return ' ' + title;
//     } else if (depth === 1) {
//       return ` ┃${'━━━'.repeat(depth)} ${title}`;
//     } else if (index === size){
//       return ` ┃${'    '.repeat(depth - 1)} ┗ ${tree.name}`;
//     } else {
//      return ` ┃${'    '.repeat(depth - 1)} ┣━ ${tree.name}`;
//     }
// }

const depth = (item) => {
  return item._path.split("/").length-2;
}
</script>

<template>
  <div class="text-gray-700 dark:text-gray-200">
    <ul>
      <li v-for="(item, index) in navigationTree" :key="index">
        <NuxtLink :to="item._path">
            <li class="hover:translate-x-2">{{ item.title }}</li>
          <!-- {{ treePrint(item.title, item, index, navigationTree.length-1, item._path.split("/").length-2) }} -->
        </NuxtLink>
        <NavBlock v-if="item.children" :navigation-tree="item.children" />
      </li>
    </ul>
  </div>
</template>