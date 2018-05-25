// 初始化状态
const initDemoList = {
  demoData: '你是我的小呀小苹果！',
};
// let initNavList = {
//     navMain: [],
//     bookDetails: []
//   }
const demo = (state = initDemoList, action) => {
  switch (action.type) {
    case 'GET_DEMO_DATA':
      return {
        ...state,
        demoData: action.payload,
      };
    default:
      return state;
  }
};
export default demo;
//   export function home(state = initNavList, action) {
//     switch (action.type) {
//       case 'RECEIVE_NAV':
//         return {
//           ...state, //三个点是展开符
//           navMain: action.navMain
//         }
//       case 'RECEIVE_BOOK':
//         return {
//           ...state,
//           bookDetails: action.bookDetails
//         }
//       default:
//         return state
//     }
//   }

