import React, { memo, useEffect } from "react";
import { EntireWrapper } from "./style";
import EntireFilter from "./c-cpns/entire-filter";
import EntireRooms from "./c-cpns/entire-rooms";
import EntirePagination from "./c-cpns/entire-pagination";
import { useDispatch } from "react-redux";
import { fetchRoomListAction } from "@/store/modules/entire/actionCreators";
import { changeHeaderConfigAction } from "@/store/modules/main";

const Entire = memo(() => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchRoomListAction());
    dispatch(changeHeaderConfigAction({ isFixed: true, topAlpha: false }));
  }, [dispatch]);

  return (
    <EntireWrapper>
      <EntireFilter />
      <EntireRooms />
      <EntirePagination />
    </EntireWrapper>
  );
});

export default Entire;
