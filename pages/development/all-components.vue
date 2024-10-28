<script lang="ts" setup>
</script>

<template>
    <div class="box-border p-4">
        <DevelopmentComponentSection title="Buttons" description="Shows all possible Variants of the S1Button component">
        <div class="flex flex-row gap-4">
            <DesignButton text="Primary" variant="Primary" size="Small" />
            <DesignButton text="Primary Outline" variant="Primary-Outline" size="Medium" />
            <DesignButton text="Primary Flat" variant="Primary-Flat" size="Large" />
            <DesignButton text="Secondary" variant="Secondary" size="Small" />
            <DesignButton text="Secondary Outline" variant="Secondary-Outline" size="Medium" />
            <DesignButton text="Secondary Flat" variant="Secondary-Flat" size="Large" class="!bg-primary-weak" />
        </div>
        </DevelopmentComponentSection>
    </div>
</template>