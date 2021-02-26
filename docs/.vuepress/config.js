const path = require('path')
module.exports = {
    title: 'tex-ui组件库的使用文档',
    description: '基于vue3.0开发',
    head: [
        ['link', { rel: 'icon', href: '/01.ico' }]
    ],
    themeConfig: {
        logo: '/avatar.jpg',
        nav: [
            { text: '首页', link: '/', icon: 'reco-home' },
            { text: '博客网站', link: 'http://114.55.93.74:8014/', icon: 'reco-blog' },
            { text: 'github', link: 'https://github.com/cuehuabuleng/tex-ui', icon: 'reco-github' },
            {
                text: '版本选择',
                items: [
                    { text: 'vue3.0', link: '/pages/install/install' },
                    { text: 'vue2.x', link: '/pages1/install/install' }
                ]
            }
        ],
        sidebar: [
            {
                title: '开发指南',
                collapsable: false,
                children: [
                    'pages/install/install',
                    'pages/install/use'
                ]
            },
            {
                title: '组件',
                collapsable: false,
                children: [
                    'pages/button/button',
                    'pages/form/form',
                    'pages/dialog/dialog',
                    'pages/checkbox/checkbox',
                    'pages/input/input',
                    'pages/switch/switch',
                    'pages/radio/radio-group'
                ]
            }
        ],
        postcss: [require('autoprefixer')],
        // 配置less的使用配置
        less: {
            paths: [path.resolve(__dirname, "node_modules")]
        }
    }
}