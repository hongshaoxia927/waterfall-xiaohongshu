<script lang="ts" setup>
    import { ref, reactive } from 'vue'

    //定义触发样式状态, 发布按钮不需要激活状态
    const navActiveStyle: boolean[] = reactive([true, false, false, false]) 
    //存储当前奏效导航项
    const currentActiveIndex = ref(0)
    
    //导航项点击事件
    const navItemClick = (navIndex: number) => {
        //判断跟当前所处位置是否相同
        if(navIndex !== currentActiveIndex.value) {
            //不同，正常更改
            navActiveStyle[currentActiveIndex.value] = false
            navActiveStyle[navIndex] = true
            currentActiveIndex.value = navIndex
        } 
    } 
</script>

<template>
    <section class="nav-container">
        <span :class="{'nav-item': true, 'nav-item-active': navActiveStyle[0]}" 
        @click="() => navItemClick(0)">首页</span>
        <span :class="{'nav-item': true, 'nav-item-active': navActiveStyle[1]}"
        @click="() => navItemClick(1)">商城</span>
        <span class="nav-item" id="nav-publish-btn">
            <svg t="1663143777044" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="10248" width="200" height="200"><path d="M916.210526 565.894737H107.789474c-29.642105 0-53.894737-24.252632-53.894737-53.894737s24.252632-53.894737 53.894737-53.894737h808.421052c29.642105 0 53.894737 24.252632 53.894737 53.894737s-24.252632 53.894737-53.894737 53.894737z" fill="#ffffff" p-id="10249"></path><path d="M512 970.105263c-29.642105 0-53.894737-24.252632-53.894737-53.894737V107.789474c0-29.642105 24.252632-53.894737 53.894737-53.894737s53.894737 24.252632 53.894737 53.894737v808.421052c0 29.642105-24.252632 53.894737-53.894737 53.894737z" fill="#ffffff" p-id="10250"></path></svg>
        </span>
        <span :class="{'nav-item': true, 'nav-item-active': navActiveStyle[2]}"
        @click="() => navItemClick(2)">消息</span>
        <span :class="{'nav-item': true, 'nav-item-active': navActiveStyle[3]}"
        @click="() => navItemClick(3)">我</span>
    </section>
</template>

<style lang="scss">
    .nav-container {
        display: flex;
        width: 100%;
        justify-content: space-evenly;
    }
    .nav-item {
        width: 3rem;
        height: 2rem;
        line-height: 2rem;
        padding: 0.5rem;

        vertical-align: middle;
        text-align: center;

        svg {
            position: relative;
            width: 50%;
            height: 100%;
        }
    }

    .nav-item-active {
        font-weight: bold;
    }

    #nav-publish-btn {
        border-radius: 40%;
        background-color: rgb(253, 40, 66);
    }
</style>