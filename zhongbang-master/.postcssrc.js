// https://github.com/michael-ciniawsky/postcss-load-config

module.exports = {
  "plugins": {
    "postcss-import": {},  // 处理@import引入路径的问题
    "postcss-url": {},  // 处理文件,图片,文字文件等的引入路径
    // to edit target browsers: use "browserslist" field in package.json
    // "autoprefixer": {},  // 自动处理浏览器前缀的一个插件
    "postcss-aspect-ratio-mini": {},  // 主要用来处理容器宽高比
    "postcss-write-svg": {utf8: false},  // 主要用来处理移动端1px的解决方案
    "postcss-cssnext": {},  // 该插件可以让我们使用CSS未来的特性，其会对这些特性做相关的兼容性处理
    "postcss-px-to-viewport": {  // 插件 将px转化为vw
      viewportWidth: 750,  // 视窗的宽度，对应的是我们设计稿的宽度，一般是750
      // viewportHeight: 1334, // 视窗的高度，根据750设备的宽度来指定，一般指定1334，也可以不配置
      unitPrecision: 3,  // 指定`px`转换为视窗单位值的小数位数（很多时候无法整除）
      viewportUnit: 'vw',  // 指定需要转换成的视窗单位，建议使用vw
      selectorBlackList: ['.ignore', '.hairlines'],  // 指定不转换为视窗单位的类，可以自定义，可以无限添加,建议定义一至两个通用的类名
      minPixelValue: 1,  // 小于或等于`1px`不转换为视窗单位，你也可以设置为你想要的值著作权归作者所有。
      mediaQuery: false  // 允许在媒体查询中转换`px`
    },
    // 处理vw与mint-ui的伪类冲突 处理content和伪类
    "postcss-viewport-units":{
      filterRule: rule => rule.selector.indexOf('::after') === -1 && rule.selector.indexOf('::before') === -1 && rule.selector.indexOf(':after') === -1 && rule.selector.indexOf(':before') === -1
    },
    "cssnano": {  // 用来压缩和清理css代码
      preset: "advanced",
      autoprefixer: false,
      "postcss-zindex": false
    }
  }
}
