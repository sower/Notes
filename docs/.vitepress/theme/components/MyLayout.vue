<!--.vitepress/theme/MyLayout.vue-->
<script setup>
import DefaultTheme from 'vitepress/theme';
import Title from './Title.vue';

const { Layout } = DefaultTheme
</script>

<template>
    <Layout>
        <template #doc-before>
            <ClientOnly>
                <Title />
            </ClientOnly>
        </template>

        <template #aside-bottom>
            ᕙ(`▽´)ᕗ
        </template>
    </Layout>
</template>
