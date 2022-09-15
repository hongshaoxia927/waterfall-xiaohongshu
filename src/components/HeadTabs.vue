<script lang="ts" setup>
    import { ref, reactive } from 'vue'
    //声明props限制
    interface HeadTabsProps {
        logo?: string,
        tabs?: Array<string>
    }
    //获取上级传递的属性
    const headTabsProps = defineProps<HeadTabsProps>()

    //解构获取属性
    const { logo, tabs } = headTabsProps

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
            <img :src="logo"/>
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

        img {
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