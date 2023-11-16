import React, { memo, useState } from "react";
import { PicturesWrapper } from "./style";
import { shallowEqual, useSelector } from "react-redux";
import PictureBrowser from "@/base-ui/picture-browser";

const DetailPictures = memo(() => {
  const [showBrowser, setShowBrowser] = useState(false);
  const [initialIndex, setInitialIndex] = useState(0);
  const { detailInfo } = useSelector(
    (state) => ({
      detailInfo: state.detail.detailInfo,
    }),
    shallowEqual
  );

  function pictureItemClickHandle(index) {
    setShowBrowser(true);
    setInitialIndex(index);
  }
  return (
    <PicturesWrapper>
      <div className="pictures">
        <div className="left">
          <div className="item" onClick={(e) => pictureItemClickHandle(0)}>
            <img src={detailInfo.picture_urls?.[0]} alt="" />
            <div className="cover"></div>
          </div>
        </div>
        <div className="right">
          {detailInfo.picture_urls?.slice(1, 5).map((item, index) => {
            return (
              <div
                className="item"
                key={item}
                onClick={(e) => pictureItemClickHandle(index + 1)}
              >
                <img src={item} alt="" />
                <div className="cover"></div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="show-btn" onClick={(e) => pictureItemClickHandle(0)}>
        显示照片
      </div>
      {showBrowser && (
        <PictureBrowser
          initialIndex={initialIndex}
          pictureUrls={detailInfo.picture_urls}
          closeClick={(e) => setShowBrowser(false)}
        />
      )}
    </PicturesWrapper>
  );
});

export default DetailPictures;
