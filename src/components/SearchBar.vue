<script lang="ts" setup>
    //声明属性
    interface SearchBarProps {
        content?: string
    }

    //获取定义的属性
    const searchBarProps = defineProps<SearchBarProps>()

    //解构属性
    const { content } = searchBarProps

    //定义点击事件
    const searchBarClick = () => alert('sorry, 没有搜索功能~')
</script>

<template>
    <section class="search-bar-container">
        <p class="search-bar" @click="() => searchBarClick()">
            <svg t="1663138193715" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="7416" width="200" height="200"><path d="M809.246403 771.926938 777.737782 803.458071 924.965961 950.667831 956.476629 919.157163Z" p-id="7417"></path><path d="M454.878536 70.285786C239.51556 70.285786 64.93236 244.847497 64.93236 460.231963c0 215.341486 174.583201 389.945153 389.945153 389.945153 215.362976 0 389.9472-174.603667 389.9472-389.945153C844.825736 244.847497 670.241512 70.285786 454.878536 70.285786zM454.878536 805.611108c-190.750415 0-345.381192-154.626683-345.381192-345.379145 0-190.751439 154.629753-345.380168 345.381192-345.380168 190.752462 0 345.382215 154.62873 345.382215 345.380168C800.259728 650.983401 645.630998 805.611108 454.878536 805.611108z" p-id="7418"></path></svg>
            {{content}}
        </p>
    </section>
</template>

<style lang="scss">
    .search-bar-container {
        margin: 0 1rem;
    }

    .search-bar {
        position: relative;
        padding: 0.5rem 0;
        margin: 0.6rem;
        height: 1.5rem;
        font-size: 1.1rem;

        display: flex;
        align-items: center;
        justify-content: center;

        border-radius: 2rem;
        background-color: #ececec;

        color: gray;

        svg {
            position: relative;
            width: 1.1rem;
            height: 1.1rem;
            padding: .2rem;
        }
    }
</style>
