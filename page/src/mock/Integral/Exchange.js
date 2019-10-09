import Mock from 'mockjs'
let title = ['精品推荐','礼品','玩偶','机器人'];
let img = [
        'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3612121032,128040351&fm=26&gp=0.jpg',
        'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1035171545,2170032752&fm=26&gp=0.jpg',
        'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=228190936,1528768088&fm=26&gp=0.jpg',
        'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2733042330,97617627&fm=26&gp=0.jpg',
        'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=24403698,3409716665&fm=26&gp=0.jpg',
        "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2726668491,318963993&fm=26&gp=0.jpg"
    ]
let name = ['精品水壶','精品手表','电饭煲']
export const exchange=Mock.mock({
    "listData|4":[
        {
            'title|+1':title, // 推荐的
            'children|10':[
                {
                    'name|+1':name,
                    'type|+1':title,
                    'price|10-12000':0,
                    'img|+1':img
                }
            ] // title下边的每一个子集
        }
    ]
})
