import PropTypes from "prop-types";
import React, { memo, useState, useCallback } from "react";
import SectionHeader from "@/components/section-header";
import SectionRooms from "@/components/section-rooms";
import SectionTabs from "@/components/section-tabs";
import { SectionV2Wrapper } from "./style";
import SectionFooter from "@/components/section-footer";

const HomeSectionV2 = memo((props) => {
  const { infoData } = props;

  // 数据的转换
  const initialName = Object.keys(infoData.dest_list)[0];
  const [name, setName] = useState(initialName);
  const tabNames = infoData.dest_address?.map((item) => item.name);

  const tabClickHandle = useCallback(function (index, name) {
    setName(name);
  }, []);
  return (
    <SectionV2Wrapper>
      <SectionHeader title={infoData.title} subtitle={infoData.subtitle} />
      <SectionTabs tabNames={tabNames} tabClick={tabClickHandle} />
      <SectionRooms roomList={infoData.dest_list?.[name]} itemWidth="33.33%" />
      <SectionFooter name={name} />
    </SectionV2Wrapper>
  );
});

HomeSectionV2.propTypes = {
  infoData: PropTypes.object,
};

export default HomeSectionV2;
