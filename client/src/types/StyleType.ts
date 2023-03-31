type JustifyType =
  | "space-between"
  | "center"
  | "start"
  | "end"
  | "flex-start"
  | "flex-end"
  | "left"
  | "right"
  | "normal";
type AlignType =
  | "center"
  | "start"
  | "end"
  | "flex-start"
  | "flex-end"
  | "self-start"
  | "self-end"
  | "normal"
  | "stretch";
type WrapType = "wrap" | "nowrap" | "wrap-reverse";

type DirectionType = "row" | "row-reverse" | "column" | "column-reverse";

export type { JustifyType, AlignType, WrapType, DirectionType };
