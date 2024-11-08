let global = {
    welcomeText: "流浪的苏轼",
    subText: "车行远道必有辙 人经沧桑需常省",
}

function install(app) {
    app.config.globalProperties.$global = global
}

export default {
    install
}