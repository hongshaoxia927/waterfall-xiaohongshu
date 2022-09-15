//定义文章推荐项的格式
export interface EssayItem {
    id: number,
    cover: string,
    title: string,
    avatar: string,
    nickName: string,
    likes: number
}

const mockData = () => {
    let EssayList: EssayItem[] = [
        {
            id: 1 + Date.now(),
            cover: 'https://via.placeholder.com/300.png/09f/fff',
            title: '那些拥有了科沃斯智能扫地机才知道的事',
            avatar: 'https://sns-avatar-qc.xhscdn.com/avatar/61137e2cbde3099b63c440ba.jpg?imageView2/2/w/80/format/jpg',
            nickName: '阿明哥',
            likes: 10
        },
        {
            id: 2 + Date.now(),
            cover: 'https://via.placeholder.com/300.png/51f/fff',
            title: '宝宝成长大揭秘❗️育婴师妈妈有话说🔥',
            avatar: 'https://sns-avatar-qc.xhscdn.com/avatar/62afc13f2a4ba2b7c154c64f.jpg?imageView2/2/w/80/format/jpg',
            nickName: '雨点妈妈育儿说',
            likes: 20
        },
        {
            id: 3 + Date.now(),
            cover: 'https://via.placeholder.com/150/515/fff',
            title: '人间朝暮，秋意🍁绵长，走~出门踏秋去',
            avatar: 'https://sns-avatar-qc.xhscdn.com/avatar/615555abd8e0709875db0585.jpg?imageView2/2/w/80/format/jpg',
            nickName: '长城汽车',
            likes: 30
        },
        {
            id: 4 + Date.now(),
            cover: '',
            title: '吹爆❗❗❗口袋里的拍学机，随拍随学，太赞了！',
            avatar: 'https://sns-avatar-qc.xhscdn.com/avatar/5e4aaf35b60c780001318217.jpg?imageView2/2/w/80/format/jpg',
            nickName: '我是牛油果呀呀',
            likes: 40
        },
        {
            id: 5 + Date.now(),
            cover: 'https://via.placeholder.com/150/f0f/fff',
            title: '五菱：啊对对对～就这么宣传我🤪',
            avatar: 'https://sns-avatar-qc.xhscdn.com/avatar/62dfbc1aa15f033a2b94045c.jpg?imageView2/2/w/80/format/jpg',
            nickName: '五菱汽车',
            likes: 50
        },
        {
            id: 6 + Date.now(),
            cover: 'https://via.placeholder.com/150',
            title: '那些拥有了科沃斯智能扫地机才知道的事',
            avatar: 'https://sns-avatar-qc.xhscdn.com/avatar/61137e2cbde3099b63c440ba.jpg?imageView2/2/w/80/format/jpg',
            nickName: '阿明哥',
            likes: 10
        },
        {
            id: 7 + Date.now(),
            cover: 'https://via.placeholder.com/150/ff0/fff',
            title: '宝宝成长大揭秘❗️育婴师妈妈有话说🔥',
            avatar: 'https://sns-avatar-qc.xhscdn.com/avatar/62afc13f2a4ba2b7c154c64f.jpg?imageView2/2/w/80/format/jpg',
            nickName: '雨点妈妈育儿说',
            likes: 20
        },
        {
            id: 8 + Date.now(),
            cover: 'https://via.placeholder.com/450/555/fff',
            title: '人间朝暮，秋意🍁绵长，走~出门踏秋去',
            avatar: 'https://sns-avatar-qc.xhscdn.com/avatar/615555abd8e0709875db0585.jpg?imageView2/2/w/80/format/jpg',
            nickName: '长城汽车',
            likes: 30
        },
        {
            id: 9 + Date.now(),
            cover: '',
            title: '吹爆❗❗❗口袋里的拍学机，随拍随学，太赞了！',
            avatar: 'https://sns-avatar-qc.xhscdn.com/avatar/5e4aaf35b60c780001318217.jpg?imageView2/2/w/80/format/jpg',
            nickName: '我是牛油果呀呀',
            likes: 40
        },
        {
            id: 10 + Date.now(),
            cover: 'https://via.placeholder.com/660/0ff/fff',
            title: '五菱：啊对对对～就这么宣传我🤪',
            avatar: 'https://sns-avatar-qc.xhscdn.com/avatar/62dfbc1aa15f033a2b94045c.jpg?imageView2/2/w/80/format/jpg',
            nickName: '五菱汽车',
            likes: 50
        },
    ]

    return EssayList
}

export default mockData