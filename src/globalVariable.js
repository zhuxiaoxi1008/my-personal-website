let global = {
    welcomeText: "流浪的苏轼",
    subText: "车行远道必有辙 人经沧桑需常省",
    name: '流浪的苏轼',
    hi: '" Hi ! 👋 "',
    info: [
        {
            label: '民族',
            value: '汉',
        },
        {
            label: '城市',
            value: '陕西 西安',
        },
        {
            label: '电话',
            value: '******',
        },
        {
            label: '邮箱',
            value: '******@163.com',
        },
    ],
    downloadResume: '下载简历',

    middleImgPage: {
        title: 'Hi, I am a Coder',
        content: "Welcome To My Personal Homepage"
    },

    skillList: [
        {
            title: 'JS,Java,GIS',
            name: '基础语言'
        },
        {
            title: 'Vue,SpringBoot',
            name: '编程框架'
        },
        {
            title: 'single-SPA',
            name: '微服务'
        },
    ],
    tips: {
        label: '💡 提示',
        content: '本站使用Vue3+Vite+ElementPlus搭建，部分功能还在开发中，敬请期待！'
    },
    aboutMe: {
        label: '📝 关于',
        steps: [
            {
                icon:'./images/logo-b.png',
                title: '2008 - 2012',
                description: {
                    label: '宝鸡文理学院',
                    content: '电子信息科学与技术'
                }
            },
            {
                icon:'./images/logo-x.png',
                title: '2012 - 2015',
                description: {
                    label: '西安理工大学',
                    content: '集成电路工程'
                }
            },
            {
                icon:'./images/logo-h.png',
                title: '2015 - 2018',
                description: {
                    label: '西安航天天绘',
                    content: '软件开发工程师'
                }
            },
            {
                icon:'./images/logo-h3c.png',
                title: '2018 - 现在',
                description: {
                    label: '新华三',
                    content: '前端负责人'
                }
            },
            {
                icon:'./images/logo-s.png',
                title: '现在 - 将来',
                description: {
                    label: '与你相遇，共创未来',
                    content: '',
                }
            }
        ]
    }
}

function install(app) {
    app.config.globalProperties.$global = global
}

export default {
    install
}