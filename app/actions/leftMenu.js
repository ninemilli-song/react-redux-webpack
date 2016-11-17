/**
 * Created by songxg on 16/6/5.
 */
import { PURCHASE_MENU, SELL_MENU, STORAGE_MENU, REPORT_MENU, INFO_MENU, SET_SUB_MENU } from '../constants/actionsTypes'

export function purchase () {
    return {
        type: PURCHASE_MENU,
        data: {
            page: {
                'id': 'caigouguanli',
                'text': '采购管理'
            },
            menuList: [
                {
                    'id': 'apply',
                    'text': '采购申请'
                },
                {
                    'id': 'book',
                    'text': '采购订单'
                },
                {
                    'id': 'storage',
                    'text': '采购入库'
                },
                {
                    'id': 'pay',
                    'text': '付款'
                },
                {
                    'id': 'rollback',
                    'text': '采购退款'
                }
            ]
        }
    }
}

export function sell () {
    return {
        type: SELL_MENU,
        data: {
            page: {
                'id': 'xiaoshouguanli',
                'text': '销售管理'
            },
            menuList: [
                {
                    'id': 'billing',
                    'text': '销售开单'
                },
                {
                    'id': 'deliver',
                    'text': '销售发货'
                },
                {
                    'id': 'gather',
                    'text': '收款'
                },
                {
                    'id': 'refund',
                    'text': '销售退货'
                }
            ]
        }
    }
}

export function storage () {
    return {
        type: STORAGE_MENU,
        data: {
            page: {
                'id': 'kucunguanli',
                'text': '库存管理'
            },
            menuList: [
                {
                    'id': 'allocation',
                    'text': '调拨'
                },
                {
                    'id': 'comeIn',
                    'text': '其它入库'
                },
                {
                    'id': 'comeOut',
                    'text': '其它出库'
                },
                {
                    'id': 'review',
                    'text': '盘点'
                }
            ]
        }
    }
}

export function report () {
    return {
        type: REPORT_MENU,
        data: {
            page: {
                'id': 'baobiao',
                'text': '报表'
            },
            menuList: [
                {
                    'id': 'allocation',
                    'text': '调拨'
                },
                {
                    'id': 'comeIn',
                    'text': '其它入库'
                },
                {
                    'id': 'comeOut',
                    'text': '其它出库'
                },
                {
                    'id': 'review',
                    'text': '盘点'
                }
            ]
        }
    }
}

export function info () {
    return {
        type: INFO_MENU,
        data: {
            page: {
                'id': 'info',
                'text': '基础信息'
            },
            menuList: [
                {
                    'id': 'customer',
                    'text': '客户'
                },
                {
                    'id': 'supplier',
                    'text': '供应商'
                },
                {
                    'id': 'product',
                    'text': '商品'
                },
                {
                    'id': 'depot',
                    'text': '仓库'
                },
                {
                    'id': 'productInit',
                    'text': '商品初始化'
                }
            ]
        }
    }
}

export function setSubMenu (subMenu) {
    return {
        type: SET_SUB_MENU,
        data: subMenu
    }
}