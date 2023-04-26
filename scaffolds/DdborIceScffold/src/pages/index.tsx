import { useState } from 'react';
import logo from '@/assets/logo.png';
import styles from './index.module.css';
import { definePageConfig } from 'ice';

// 配置页面运行时属性
// https://v3.ice.work/docs/guide/basic/page
export const pageConfig = definePageConfig(() => ({
  // 标题会显示在文档上，可以通过 title 属性来设置
  title: '首页 - ice.js 3',
}));

// 对应路由组件在页面中需要渲染的内容
export default function Home() {
  const [count, setCount] = useState(1);
  const updateCount = () => setCount((sum) => sum + 1);

  return (
    <div className={styles.app}>
      <header>
        <img src={logo} alt="logo" />
        <p>
          Hello ice.js 3
        </p>
      </header>
      <main>
        <button className={styles.button} type="button" onClick={updateCount}>
          👍🏻 {count}
        </button>
        <p>
          <a
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            Learn React
          </a>
          {' | '}
          <a
            href="https://v3.ice.work/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            Learn ice.js
          </a>
        </p>
      </main>
    </div>
  );
}
