<script lang="ts" setup>
    import { ref } from 'vue'

    //引入相关组件
    import HeadTabs from './components/HeadTabs.vue'
    import SearchBar from './components/SearchBar.vue'
    import ChannelTabs from './components/ChannelTabs.vue'
    import EssayContainer from './components/EssayContainer.vue'
    import BottomNav from './components/BottomNav.vue'

    //导入相关模块
    import useHeadTabs from './module/useHeadTabs'
    import useChannelTabs from './module/useChannelTabs'

    const { logo, headTabs } = useHeadTabs()
    const { channelTabs } = useChannelTabs()

</script>

<template>
    <HeadTabs :logo="logo" :tabs="headTabs"/>
    <div class="outer-searchbar-container">
        <SearchBar content='大家都在搜"妆容画廊"'/>
    </div>
    <div class="outer-channeltabs-container">
        <ChannelTabs :tabs="channelTabs"/>
    </div>
    <div class="outer-essay-container">
        <EssayContainer/>
    </div>
    <BottomNav class="bottomnav"/>
</template>

<style lang="scss" scoped>
    .outer-searchbar-container {
        height: 3rem;
    }
    .outer-channeltabs-container {
        height: 2.5rem;
    }
    .outer-essay-container {
        height: calc(100vh - 11rem);
        overflow-y: auto;

        &::-webkit-scrollbar {
            display: none;
        }
    }
    .bottomnav {
      position: fixed;
      bottom: 0;
      max-width: 400px;
    }
</style>