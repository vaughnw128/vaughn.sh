<template>
    <LeftNav class="flex h-screen max-w-[10%] px-2 py-4 m-auto bg-white sm:px-4 sm:shadow dark:bg-gray-800 ring-1 ring-gray-200 dark:ring-gray-700 sm:rounded-lg" />
    <div class="max-w-[40%] px-4 py-10 m-auto bg-white sm:px-8 sm:shadow dark:bg-gray-800 ring-1 ring-gray-200 dark:ring-gray-700 sm:rounded-lg">
      <main class="max-w-none prose dark:prose-invert prose-pre:bg-gray-100 dark:prose-pre:bg-gray-900 hover:prose-a:text-primary-400 prose-a:font-normal prose-a:no-underline prose-a:border-dashed prose-a:border-b hover:prose-a:border-solid hover:prose-a:border-primary-400">
        <slot>
          <h1 class="text-2xl">
            Page not found
          </h1>
        </slot>
      </main> 
    </div>
</template>