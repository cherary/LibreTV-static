const CUSTOMER_SITES = {
    tyyszy: { api: 'https://tyyszy.com/api.php/provide/vod', name: '天涯资源' },
    dyttzy: { api: 'https://caiji.dyttzyapi.com/api.php/provide/vod', name: '电影天堂' },
    bfzy: { api: 'https://bfzyapi.com/api.php/provide/vod', name: '暴风资源' },
    ruyi: { api: 'https://cj.rycjapi.com/api.php/provide/vod', name: '如意资源' },
    lzi: { api: 'https://cj.lziapi.com/api.php/provide/vod', name: '量子资源' },
    wolong: { api: 'https://collect.wolongzyw.com/api.php/provide/vod', name: '卧龙资源' },
    ikun: { api: 'https://ikunzyapi.com/api.php/provide/vod', name: 'iKun资源' },
    zuida: { api: 'https://api.zuidapi.com/api.php/provide/vod', name: '最大资源' },
    wujin: { api: 'https://api.wujinapi.me/api.php/provide/vod', name: '无尽资源' },
    heimuer: { api: 'https://json.heimuer.xyz/api.php/provide/vod', name: '黑木耳' },
    subo: { api: 'https://subocaiji.com/api.php/provide/vod', name: '速播资源' },
    mdzy: { api: 'https://www.mdzyapi.com/api.php/provide/vod', name: '魔都资源' },
    jisu: { api: 'https://jszyapi.com/api.php/provide/vod', name: '极速资源' },
    hongniu: { api: 'https://api.hongniuapi.com/api.php/provide/vod', name: '红牛资源' },
    xinlang: { api: 'https://api.xinlangapi.com/xinlangapi.php/provide/vod', name: '新浪资源' }
};

if (window.extendAPISites) {
    window.extendAPISites(CUSTOMER_SITES);
} else {
    console.error("错误：请先加载 config.js！");
}
