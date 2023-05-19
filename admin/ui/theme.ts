/**
 * js 文件下使用这个做类型提示
 * @type import('naive-ui').GlobalThemeOverrides
 */
import { GlobalThemeOverrides } from 'naive-ui'
const themeOverrides: GlobalThemeOverrides = {
    common: {
        primaryColor: '#2080F0',
        primaryColorHover: '#4098FC',
        primaryColorPressed: '#1060C9',
        primaryColorSuppl: '#4098FC'
    },
    Button: {
        textColor: '#FF0000'
    }
}

export default themeOverrides