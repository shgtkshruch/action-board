/**
 * ビルド時にデータフェッチをスキップすべきかを判定するユーティリティ
 * NEXT_DISABLE_FETCH_DURING_BUILD=true が設定されている場合にtrueを返す
 */
export const shouldSkipFetch = () =>
  process.env.NEXT_DISABLE_FETCH_DURING_BUILD === "true";
