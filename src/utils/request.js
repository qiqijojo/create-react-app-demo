

const request = (url, data) => {
    return '榴莲弄就甭害怕';
    // fetch('https://operation.xuprise.com' + url, {
    //     method: 'POST',
    //     body: JSON.stringify(data), 
    //     headers: {
    //         'Content-Type': 'application/json' 
    //     }
    // }).then(res => res.json())
    // .catch(err => {
    //     console.error('获取数据出错', err.message);
    // })
}
// const request = axios.create({
//   baseURL:
//     process.env.NODE_ENV === 'production'
//       ? 'https://www.easy-mock.com/mock/593611b991470c0ac101d474'
//       : false, //设置默认api路径
//   timeout: 5000, //设置超时时间
//   headers: { 'X-Custom-Header': 'foobar' }
// })

export default request;
