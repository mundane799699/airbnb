import hyRequest from "..";

export function getHomeGoodPriceData() {
  return hyRequest.get({
    url: "/home/goodprice",
  });
}

export function getHomeHighScoreData() {
  return hyRequest.get({
    url: "/home/highscore",
  });
}

export function getHomeDiscountData() {
  return hyRequest.get({
    url: "/home/discount",
  });
}

export function getHomeHotRecommendData() {
  return hyRequest.get({
    url: "/home/hotrecommenddest",
  });
}
