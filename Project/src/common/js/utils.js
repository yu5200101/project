/*
* 项目公共JS方法资源库
*/
const utils = {
    //=>时间格式化
    //=>time:可以是一个标准时间格式、时间字符串“2018-01-02 10:20:30”
    formatTime(time, template = '{0}-{1}-{2} {3}:{4}:{5}') {
        //->如果传递的是标准的时间格式，我们把其转换为字符串
        if (typeof time === 'object') {
            time = time.toLocaleString();
        }
        //->在时间字符串中获取到年月日等信息
        let reg = /\d+/g,
            ary = time.match(reg);
        ary = ary.map(item => {
            return item < 10 ? `0${item}` : item;
        });

        //->按照指定的模板解析出想要的结果
        reg = /\{(\d+)\}/g;
        template = template.replace(reg, (...arg) => {
            let index = arg[1],
                val = ary[index] || '00';
            return val;
        });
        return template;
    }
};

export default utils;