let global = {
    welcomeText: "流浪的苏轼",
    subText: "车行远道必有辙 人经沧桑需常省",
    name: '流浪的苏轼',
    hi: '" Hi ! 👋 "',
    cityLabel: '城市',
    city: '陕西 西安',
    emailLabel: '邮箱',
    email: 'zhuxiaoxi1008@163.com',
}

function install(app) {
    app.config.globalProperties.$global = global
}

export default {
    install
}