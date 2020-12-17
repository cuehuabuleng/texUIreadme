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
            { text: 'github', link: 'https://github.com/cuehuabuleng/tex-ui', icon: 'reco-github' }
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
                    {
                        title: 'form 表单',
                        collapsable: true,
                        children: [
                            'pages/form/form',
                            'pages/form/formitem'
                        ]
                    },
                    'pages/dialog/dialog',
                    {
                        title: 'checkbox 多选框',
                        collapsable: true,
                        children: [
                            'pages/checkbox/checkbox',
                            'pages/checkbox/checkbox-group'
                        ]
                    },
                    'pages/input/input',
                    'pages/switch/switch',
                    {
                        title: 'radio 单选框',
                        collapsable: true,
                        children: [
                            'pages/radio/radio',
                            'pages/radio/radio-group'
                        ]
                    }
                ]
            }
        ]
    }
}