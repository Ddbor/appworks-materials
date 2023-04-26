import Guide from '@/components/Guide';
import { trim } from '@/utils/format';
import { PageContainer } from '@ant-design/pro-components';
import { useModel } from '.pnpm/registry.npmjs.org+umi@4.0.66_@babel+core@7.21.4_@types+react@18.2.0_eslint@8.35.0_postcss@8._tka5dlifk766qozo36lcpeifua/node_modules/umi';
import styles from './index.less';

const HomePage: React.FC = () => {
  const { name } = useModel('global');
  return (
    <PageContainer ghost>
      <div className={styles.container}>
        <Guide name={trim(name)} />
      </div>
    </PageContainer>
  );
};

export default HomePage;
