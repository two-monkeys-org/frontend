import {
  StyledAppsListItem,
  StyledImageContainer,
  StyledItemName,
} from "./AppListItem.style";
import Image from "next/image";
import { AppListItemProps } from "../../types/types";
import Link from "next/link";

export const AppListItem = ({ item }: AppListItemProps) => {
  return (
    <Link href={`apps/${item.slug}`}>
      <StyledAppsListItem>
        <StyledImageContainer>
          <Image src={item.src} alt={item.name} width="200px" height="200px" />
        </StyledImageContainer>
        <StyledItemName>{item.name}</StyledItemName>
      </StyledAppsListItem>
    </Link>
  );
};
