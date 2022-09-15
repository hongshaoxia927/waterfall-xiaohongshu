<script lang="ts" setup>
    import { ref, reactive } from 'vue'
    //定义属性类型限制
    interface ChannelTabsProps {
        tabs?: string[]
    }

    //定义属性
    const props = defineProps<ChannelTabsProps>()

    //解构属性
    const { tabs } = props

    //定义默认触发样式并初始化
    const tabStyles: boolean[] =  reactive(tabs ? tabs.map(tab => false) : []) 
    const currentTabIndex = ref(0)
    if(tabStyles.length > 0) tabStyles[0] = true

    //定义点击标签事件
    const tabClick = (tabIndex: number) => {
        //判断点击标签是否不同
        if(tabIndex !== currentTabIndex.value) {
            //若点击的是其他标签则，更改样式
            tabStyles[currentTabIndex.value] = false
            tabStyles[tabIndex] = true
            currentTabIndex.value = tabIndex
        }
    }
</script>

<template>
    <div class="tabs">
        <ul>
            <li v-for="(tab, index) in tabs" :key="tab + index" 
            :class="{'tab-active': tabStyles[index]}" @click="() => tabClick(index)">
                {{tab}}
            </li>
        </ul>
    </div>
</template>

<style lang="scss" scoped>
    .tabs {
        text-align: center;
        overflow-x: auto;
        // height: 1.5rem;
        padding: 0.5rem 0;

        border-top: 1px solid #d3d3d3;

        &::-webkit-scrollbar {
            display: none;
        }

        ul {
            margin: 0;
            padding: 0;
            list-style: none;

            white-space: nowrap;
        }

        li {
            position: relative;
            display: inline-block;
            list-style: none;
            padding: 0 0.8rem;
            font-size: 1.1rem;
            color: rgb(170, 170, 170);
        }
    }

    .tab-active{
        color: black !important;
    }
</style>