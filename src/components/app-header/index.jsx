import React, { memo, useRef, useState } from "react";
import { HeaderWrapper, SearchAreaWrapper } from "./style";
import HeaderLeft from "./c-cpns/header-left";
import HeaderCenter from "./c-cpns/header-center";
import HeaderRight from "./c-cpns/header-right";
import { shallowEqual, useSelector } from "react-redux";
import classNames from "classnames";
import useScrollPosition from "@/hooks/useScrollPosition";
import { ThemeProvider } from "styled-components";

const AppHeader = memo(() => {
  const [isSearch, setIsSearch] = useState(false);
  const { headerConfig } = useSelector(
    (state) => ({
      headerConfig: state.main.headerConfig,
    }),
    shallowEqual
  );

  const { isFixed, topAlpha } = headerConfig;

  // 监听滚动
  const { scrollY } = useScrollPosition();
  const prevY = useRef(0);
  // 在正常情况下(搜索框没有弹出来)，不断记录值
  if (!isSearch) {
    prevY.current = scrollY;
  }
  // 在弹出搜索功能的情况，滚动的距离大于之前记录的距离的30
  if (isSearch && Math.abs(scrollY - prevY.current) > 30) {
    setIsSearch(false);
  }
  // 透明度逻辑
  const isAlpha = topAlpha && scrollY === 0;
  return (
    <ThemeProvider theme={{ isAlpha }}>
      <HeaderWrapper className={classNames({ fixed: isFixed })}>
        <div className="content">
          <div className="top">
            <HeaderLeft />
            <HeaderCenter
              isSearch={isAlpha || isSearch}
              searchBarClick={() => setIsSearch(true)}
            />
            <HeaderRight />
          </div>
          <SearchAreaWrapper isSearch={isAlpha || isSearch} />
        </div>
        {isSearch && (
          <div className="cover" onClick={() => setIsSearch(false)}></div>
        )}
      </HeaderWrapper>
    </ThemeProvider>
  );
});

export default AppHeader;
