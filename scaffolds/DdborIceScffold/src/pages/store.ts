import { createStore } from 'ice';
import counter from './models/counter';

// 页面状态管理
const store = createStore({ counter });

export default store;
