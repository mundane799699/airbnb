import React, { memo } from "react";
import { DetailWrapper } from "./style";
import DetailPictures from "./c-cpns/detail-pictures";
import DetailInfos from "./c-cpns/detail-infos";

const Detail = memo(() => {
  return (
    <DetailWrapper>
      <DetailPictures />
      <DetailInfos />
    </DetailWrapper>
  );
});

export default Detail;
