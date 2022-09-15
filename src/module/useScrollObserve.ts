import { ref } from 'vue'
//进入视图触发事件模块，用于滚动
const useScrollObserve =  () => {
    //创建并绑定dom元素
    const target = ref<HTMLElement | null>(null)
    //定义回调事件
    let callBack: () => void = () => {}

    //设置触发回调
    const IO = new IntersectionObserver((entity, _) => {
        //判断是否进入视图
        if(entity[0].isIntersecting) {
            //移除监听
            if(target.value) {
                IO.unobserve(target.value)
                console.log('removed the observe')
            }
            //执行回调
            callBack()
        }
    })

    const setCallBack = (callback: () => void) => {
        //设置回调
        callBack = callback
    }

    const start = () => {
        //启动监听
        if(target.value) IO.observe(target.value)
    }

    return {
        target,
        setCallBack,
        start
    }
}

export default useScrollObserve