function HeaderTest() {
  const styles = {
    header: {
      container: {
        className: `
          grid grid-cols-6 
          px-8 md:px-16
          bg-grey-500 shadow 
          desktop: grid-cols-8
          h-16 overflow-hidden
        `,
      },
      logo: {
        className: `
          relative my-auto flex h-fit
          cursor-pointer
          items-center
        `,
      },
      middle: {
        container: {
          className: ` 
           grid grid-cols-3 
          `,
        },
        menuItems: {
          container: {
            className: `
              grid grid-flow-col grid-rows-2 
              border-r-2 border-gray-300
            `,
          },
          leftIcon: {
            className: `
              row-span-3
              mx-4 h-6 w-6
              self-center
            `,
          },
          topText: {
            className: `
              col-span-2 
              text-sm font-semibold
            `,
          },
          bottomText: {
            className: `
              col-span-2 row-span-2
              text-xs font-light
            `,
          },
        },
      },
      right: {
        className: `
            flex  flex-row 
            items-center justify-end
            cursor-pointer
        `,
      },
    },
  };
  return (
    <div {...styles?.header?.container}>
      <div {...styles?.header?.logo}> LOGO</div>
      <div {...styles?.header?.middle?.container}>
        <div {...styles?.header?.middle?.menuItems?.container}>
          <div {...styles?.header?.middle?.menuItems?.leftIcon}></div>
          <div {...styles?.header?.middle?.menuItems?.topText}></div>
          <div {...styles?.header?.middle?.menuItems?.bottomText}></div>
        </div>
        <div {...styles?.header?.middle?.menuItems?.container}>
          <div {...styles?.header?.middle?.menuItems?.leftIcon}></div>
          <div {...styles?.header?.middle?.menuItems?.topText}></div>
          <div {...styles?.header?.middle?.menuItems?.bottomText}></div>
        </div>
        <div {...styles?.header?.middle?.menuItems?.container}>
          <div {...styles?.header?.middle?.menuItems?.leftIcon}></div>
          <div {...styles?.header?.middle?.menuItems?.topText}></div>
          <div {...styles?.header?.middle?.menuItems?.bottomText}></div>
        </div>
      </div>
      <div
        {...styles?.header?.right}
        className=" boder border-r-2 border-gray-300 "
      >
        {' '}
        Language{' '}
      </div>
      <div {...styles?.header?.right}> Signup</div>
    </div>
  );
}
export default HeaderTest;
