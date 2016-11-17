/**
 * Created by songxg on 16/6/7.
 */
import menuItems from './menuList'

let menuTypes = [];

menuItems.forEach(function(item, index) {
    switch (item) {
        case 'purchase':
            menuTypes.push({
                'id': item,
                'text': '采购管理'
            });
            break;
        case 'sell':
            menuTypes.push({
                'id': item,
                'text': '销售管理'
            });
            break;
        case 'storage':
            menuTypes.push({
                'id': item,
                'text': '库存管理'
            });
            break;
        case 'report':
            menuTypes.push({
                'id': item,
                'text': '报表'
            });
            break;
        case 'info':
            menuTypes.push({
                'id': item,
                'text': '基础信息'
            });
            break;
    }
});

export default menuTypes;