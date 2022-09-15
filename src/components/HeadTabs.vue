<script lang="ts" setup>
    import { ref, reactive } from 'vue'
    //声明props限制
    interface HeadTabsProps {
        tabs?: Array<string>
    }
    //获取上级传递的属性
    const headTabsProps = defineProps<HeadTabsProps>()

    //解构获取属性
    const { tabs } = headTabsProps

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
    <section class="head-tabs">
        <div class="logo">
            <svg t="1663223517123" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3505" width="200" height="200"><path d="M512.03456 512m-400 0a400 400 0 1 0 800 0 400 400 0 1 0-800 0Z" fill="#FFDA64" p-id="3506"></path><path d="M512.03456 160a400 400 0 0 1 400 376V512a400 400 0 0 0-800 0v24A400 400 0 0 1 512.03456 160z" fill="#FFFFFF" p-id="3507"></path><path d="M512.03456 848A400 400 0 0 1 113.47456 480C112.03456 490.56 112.03456 501.28 112.03456 512a400 400 0 0 0 800 0c0-10.72 0-21.44-1.44-32A400 400 0 0 1 512.03456 848z" fill="#FFB666" p-id="3508"></path><path d="M1017.95456 220c-20.48-35.36-85.12-36.96-192-4.64A432 432 0 0 0 98.11456 635.52C16.03456 712-14.20544 768 6.11456 804 16.03456 822.56 39.55456 832 74.27456 832a455.36 455.36 0 0 0 124-23.2 432 432 0 0 0 727.68-420.32C1008.03456 312 1038.27456 256 1017.95456 220zM512.03456 128a384 384 0 0 1 364.16 262.24 2023.36 2023.36 0 0 1-310.08 215.52A2022.56 2022.56 0 0 1 224.03456 766.4 384 384 0 0 1 512.03456 128zM33.79456 788c-8-13.92 7.84-53.28 75.68-119.2a432 432 0 0 0 65.44 113.28c-97.12 27.36-134.56 17.92-141.12 5.92zM512.03456 896a382.56 382.56 0 0 1-262.56-104.16 2105.28 2105.28 0 0 0 332.8-158.24 2104.64 2104.64 0 0 0 304-209.12A384 384 0 0 1 512.03456 896z m336.96-654.08c97.12-27.36 134.56-17.28 141.12-5.92s-3.52 48-75.68 119.2a432 432 0 0 0-65.44-113.28z" fill="#3A394B" p-id="3509"></path><path d="M624.03456 304m-48 0a48 48 0 1 0 96 0 48 48 0 1 0-96 0Z" fill="#3A394B" p-id="3510"></path><path d="M471.07456 270.08m-24 0a24 24 0 1 0 48 0 24 24 0 1 0-48 0Z" fill="#3A394B" p-id="3511"></path></svg>
        </div>
        <div class="tabs">
            <ul>
                <li v-for="(tab, index) in tabs" :key="tab + index" 
                :class="{'tab-active': tabStyles[index]}" @click="() => tabClick(index)">
                    {{tab}}
                </li>
            </ul>
        </div>
    </section>
</template>

<style lang="scss" scoped>
    .head-tabs {
        position: relative;
        height: 2rem;
        line-height: 2rem;
    }
    .logo {
        height: 100%;
        position: absolute;
        left: 0;

        svg {
            position: relative;
            width: 100%;
            height: 100%;
        }
    }
    .tabs {
        text-align: center;

        ul {
            margin: 0;
            padding: 0;
            list-style: none;
        }

        li {
            position: relative;
            display: inline;
            list-style: none;
            padding: 0.2rem 0.5rem;
            font-size: 1.2rem;
            color: gray;

            &::after {
                content: '';
                position: absolute;
                width: 60%;
                bottom: 0;
                left: 20%;
                height: 2px;
                background-color: red;
                transition: .3s all ease;

                transform: scaleX(0);
            }
        }
    }

    .tab-active{
        color: black !important;
        
        &::after {
            transition: .3s all ease !important;
            transform: scaleX(1) !important;
        }
    }
</style>