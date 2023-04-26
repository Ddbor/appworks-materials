import { PageContainer } from '@ant-design/pro-components';
import { Access, useAccess } from '.pnpm/registry.npmjs.org+umi@4.0.66_@babel+core@7.21.4_@types+react@18.2.0_eslint@8.35.0_postcss@8._tka5dlifk766qozo36lcpeifua/node_modules/umi';
import { Button } from 'antd';

const AccessPage: React.FC = () => {
  const access = useAccess();
  return (
    <PageContainer
      ghost
      header={{
        title: '权限示例',
      }}
    >
      <Access accessible={access.canSeeAdmin}>
        <Button>只有 Admin 可以看到这个按钮</Button>
      </Access>
    </PageContainer>
  );
};

export default AccessPage;
