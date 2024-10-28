<script lang="ts" setup>
</script>

<template>
    <DevOnly>
        <div class="px-4 h-12 bg-red-500 flex items-center justify-start">
            <h1 class="text-white p-1 text-xl font-semibold">Only shown in Development mode!</h1>
        </div>
        <NuxtPage />
    </DevOnly>
</template>