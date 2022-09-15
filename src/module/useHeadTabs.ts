//导入logo
import logo from '/src/assets/planet.svg'

const useHeadTabs = () => {
    //定义头部标签页
    const headTabs: string[] = ['关注', '发现', '深圳']

    return {
        logo,
        headTabs
    }
}

export default useHeadTabs