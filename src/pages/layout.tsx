import HeaderTest from '@/components/HeaderTest';

function Layout() {
  const styles = {
    container: {
      className: `
        w-full h-full overflow-hidden
      `,
    },
  };
  return (
    <div {...styles?.container} className="">
      <HeaderTest />
    </div>
  );
}

export default Layout;
