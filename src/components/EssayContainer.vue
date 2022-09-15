<script lang="ts" setup>
    import { ref, reactive, nextTick, onMounted } from 'vue'
    import EssayItemVue from './EssayItem.vue';
    import type { EssayItem } from '../mockData'
    import mockData from '../mockData'
    import useScrollObserve from '../module/useScrollObserve'
    //绑定两个列表的dom元素
    const EssayLeft = ref<HTMLElement | null>(null)
    const EssayRight = ref<HTMLElement | null>(null)
    //定义文章列表
    const EssayListLeft: EssayItem[] = reactive([])
    const EssayListRight: EssayItem[] = reactive([])

    //定义获取数据的延时
    const delay = ref<number>(1000)

    //定义获取数据的结果
    const requestResponse = ref<boolean>(true) 

    //定义加载状态
    const isCompleted = ref<boolean>(false)

    //定义产生数据的事件
    const getEssay = () => {
        //根据数据结果和延时，返回数据
        setTimeout(() => {
            //成功则返回数据
            if(requestResponse.value) {
                isCompleted.value = false
                //将新增的数据添加到高度小的文章列表中
                let addList = mockData()
                addEssay(addList)
            } else {
                //失败结果
                isCompleted.value = true
            }
        }, delay.value)
    }

    //添加文章到对应的列表中
    const addEssay = async (essayList: EssayItem[]) => {
        //若更新的文章为空，则启动新的监听
        if(essayList && essayList.length <= 0)  {
            bottomLoading.start()
            return ;
        }
        //否则正常添加
        let leftHeight = (EssayLeft.value as HTMLElement).clientHeight
        let rightHeight = (EssayRight.value as HTMLElement).clientHeight
        //判断左右两边容器的高度，将新增元素添加到低的一方
        if(leftHeight <= rightHeight) EssayListLeft.push(essayList.shift() as EssayItem)
        else EssayListRight.push(essayList.shift() as EssayItem)
        await nextTick()
        addEssay(essayList)
    }

    //给底部元素添加加载监听
    const bottomLoading = useScrollObserve()
    onMounted(() => {
        bottomLoading.setCallBack(() => getEssay())
        bottomLoading.start()
    })

</script>
<template>
    <div class="essay-container">
        <div>
            <div class="essay-container-column" ref="EssayLeft">
                <EssayItemVue v-for="essay in EssayListLeft" :key="essay.id" :essay="essay"/>
            </div>
        </div>
        <div>
            <div class="essay-container-column" ref="EssayRight">
                <EssayItemVue v-for="essay in EssayListRight" :key="essay.id" :essay="essay"/>
            </div>
        </div>
    </div>
    <div v-show="!isCompleted" class="loading-bottom" @click="() => getEssay()" :ref="bottomLoading.target">
        <svg t="1663213263428" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2872" width="200" height="200"><path d="M379.733333 827.733333l68.266667-68.266666c21.333333 4.266667 42.666667 8.533333 68.266667 8.533333 140.8 0 256-115.2 256-256 0-21.333333-4.266667-46.933333-8.533334-68.266667l68.266667-68.266666c17.066667 42.666667 25.6 85.333333 25.6 132.266666 0 187.733333-153.6 341.333333-341.333333 341.333334-51.2 4.266667-98.133333-4.266667-136.533334-21.333334z m-183.466666-183.466666c-17.066667-42.666667-25.6-85.333333-25.6-132.266667 0-187.733333 153.6-341.333333 341.333333-341.333333 46.933333 0 93.866667 8.533333 132.266667 25.6l-68.266667 68.266666c-17.066667-4.266667-42.666667-8.533333-64-8.533333-140.8 0-256 115.2-256 256 0 21.333333 4.266667 46.933333 8.533333 68.266667l-68.266666 64z" fill="#444444" p-id="2873"></path></svg>
    </div>
    <div v-show="isCompleted" class="loading-bottom">加载完毕</div>
    <div class="console-tools">
        <label>请求耗时</label>
        <input type="number" v-model="delay"/>
        <br>
        <label>请求响应状态</label>
        <input type="checkbox" v-model="requestResponse"/>
    </div>
</template>

<style lang="scss">
    .essay-container {
        display: grid;
        grid-template-columns: 50% 50%;
        background-color: rgb(245, 245, 245);
    }

    .essay-container-column {
        padding: 0.3rem;
    }

    .loading-bottom {
        text-align: center;
        svg {
            width: 2rem;
            height: 2rem;
            padding: 0.5rem;
            animation: loading-animation 1s infinite linear;
        }
    }

    .console-tools {
        position: fixed;
        width: 5rem;
        right: 5%;
        bottom: 10%;
        padding: 1rem;
        background-color: rgb(219, 219, 219);
        box-shadow: 0 0 5px black;

        label {
            font-size: 2px;
        }

        input[type="number"] {
            width: 100%;
        }
    }
    
    @keyframes loading-animation {
        0% {
            transform: rotate(0deg);
        }

        100% {
            transform: rotate(360deg);
        }
    }
</style>