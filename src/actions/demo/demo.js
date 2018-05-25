import request from '../../utils/request';

//这个叫做action，用于更新reduer中的state
const getdemoData = res => ({
  type: 'GET_DEMO_DATA',
  payload: res.data
})

//获取服务器的参数，并且返回一个异步的dispatch，dispatch的对象是自己定义的action

export const getData = () => async dispatch => {
  try {
    let response = await request.get('/book/navigation')
    await dispatch(getdemoData(response.data))
  } catch (error) {
    console.log('error: ', error)
  }
}