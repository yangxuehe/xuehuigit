// 路由文件
import Vue from 'vue'
// 导入了VueRouter
import VueRouter from 'vue-router'
Vue.use(VueRouter)


export default new VueRouter({
    routes: [
        // 路由重定向
        {
            path: "/",
            redirect: '/index'
        },
        {
            path: "/login",
            component: () => import('@/views/login'),
        },
        {
            // 客服组件路由
            path: "/serveice",
            component: () => import('@/views/serveice'),
        },
        {
            path: "/layout",
            component: () => import('@/layout'),
            children: [{
                // 会匹配到/layout/index 
                // 首页
                path: '/index',
                component: () => import('@/views/index'),
            },
            {
                // 订单管理-商城订单
                path: '/order/list',
                component: () => import('@/views/order/list'),
            },
            {
                // 订单管理-纠纷
                path: '/order/dispute',
                component: () => import('@/views/order/dispute'),
            },
            {
                // 订单管理-纠纷分类
                path: '/order/disputeClass',
                component: () => import('@/views/order/disputeClass'),
            },
            {
                // 订单管理-退款
                path: '/order/refund',
                component: () => import('@/views/order/refund'),
            },
            {
                // 系统管理-身份管理
                path: '/system/identity',
                component: () => import('@/views/system/identity'),
            },
            {
                // 系统管理-账号管理
                path: '/system/account',
                component: () => import('@/views/system/account'),
            },
            {
                // 系统管理-配置管理
                path: '/system/configuration',
                component: () => import('@/views/system/configuration'),
            },
            {
                // 活动管理-活动分类
                path: '/activity/activityClass',
                component: () => import('@/views/activity/activityClass'),
            },
            {
                // 活动管理-活动生成
                path: '/activity/activityCreate',
                component: () => import('@/views/activity/activityCreate'),
            },
            {
                // 活动管理-活动订单
                path: '/activity/activityList',
                component: () => import('@/views/activity/activityList'),
            },
            {
                // 活动管理-活动库存
                path: '/activity/activityInventory',
                component: () => import('@/views/activity/activityInventory'),
            },
            {
                // 活动管理-活动分析
                path: '/activity/activityAnalysis',
                component: () => import('@/views/activity/activityAnalysis'),
            },
            {
                // 财务管理-收款账号
                path: '/finance/shroffAccount',
                component: () => import('@/views/finance/shroffAccount'),
            },
            {
                // 财务管理-收款汇总
                path: '/finance/shroffCollect',
                component: () => import('@/views/finance/shroffCollect'),
            },
            {
                // 财务管理-退款汇总
                path: '/finance/refundCollect',
                component: () => import('@/views/finance/refundCollect'),
            },

            {
                // 渠道管理-渠道分类
                path: '/channel/channelClass',
                component: () => import('@/views/channel/channelClass'),
            },
            {
                // 渠道管理-渠道订单处理
                path: '/channel/channelOrderHandle',
                component: () => import('@/views/channel/channelOrderHandle'),
            },
            {
                // 渠道管理-渠道生效订单
                path: '/channel/channelOrderDone',
                component: () => import('@/views/channel/channelOrderDone'),
            },
            {
                // 渠道管理-渠道订单汇总
                path: '/channel/channelOrderSummary',
                component: () => import('@/views/channel/channelOrderSummary'),
            },
            {
                // 渠道管理-渠道分析
                path: '/channel/channelAnalysis',
                component: () => import('@/views/channel/channelAnalysis'),
            },
            {
                // 库存管理-账号录入
                path: '/inventory/accountInput',
                component: () => import('@/views/inventory/accountInput'),
            },
            {
                // 库存管理-账号库存
                path: '/inventory/accountStock',
                component: () => import('@/views/inventory/accountStock'),
            },
            {
                // 库存管理-库存分析
                path: '/inventory/accountAnalysis',
                component: () => import('@/views/inventory/accountAnalysis'),
            },
            {
                // 商品管理-商品分类
                path: '/goods/goodsClass',
                component: () => import('@/views/goods/goodsClass'),
            },
            {
                // 消息管理-帮助中心-文章分类
                path: '/messages/helpCenter/articleClass',
                component: () => import('@/views/messages/helpCenter/articleClass'),
            },
            {
                // 消息管理-帮助中心-文章编辑
                path: '/messages/helpCenter/articleEdit',
                component: () => import('@/views/messages/helpCenter/articleEdit'),
            },
            {
                // 消息管理-官网信件发送-信件编辑
                path: '/messages/letterSend/letterEdit',
                component: () => import('@/views/messages/letterSend/letterEdit'),
            },
            {
                // 消息管理-官网信件发送-自动发送模版
                path: '/messages/letterSend/autoSend',
                component: () => import('@/views/messages/letterSend/autoSend'),
            },
            ]
        },
    ]
})