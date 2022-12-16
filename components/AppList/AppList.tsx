import { AppListProps } from "../../types/types";
import { StyledAppsList } from "./AppList.style";
import { AppListItem } from "./AppListItem";

export const AppList = ({ items }: AppListProps) => {
  const itemsList = items.map((item) => (
    <AppListItem key={item.id} item={item} />
  ));
  return <StyledAppsList>{itemsList}</StyledAppsList>;
};
