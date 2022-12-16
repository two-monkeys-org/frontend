import { AppList } from "../../components/AppList";
import {
  StyledAppsListContainer,
  StyledAppsListHeader,
  StyledAppsListPage,
} from "../../styles/apps-index.style";
import { AppListItem } from "../../types/types";

const Apps = () => {
  const imageLinkPrefix = "/static/apps-list/";
  const appsList: AppListItem[] = [
    {
      id: 0,
      name: "Chat App",
      slug: "chat",
      src: `${imageLinkPrefix}chat-app.jpg`,
    },
    {
      id: 1,
      name: "Posts App",
      slug: "post",
      src: `${imageLinkPrefix}blog-app.jpg`,
    },
    {
      id: 2,
      name: "Posts App",
      slug: "post",
      src: `${imageLinkPrefix}blog-app.jpg`,
    },
    {
      id: 3,
      name: "Posts App",
      slug: "post",
      src: `${imageLinkPrefix}blog-app.jpg`,
    },
    {
      id: 4,
      name: "Posts App",
      slug: "post",
      src: `${imageLinkPrefix}blog-app.jpg`,
    },
  ];
  return (
    <StyledAppsListPage>
      <StyledAppsListContainer>
        <StyledAppsListHeader>Choose the app!</StyledAppsListHeader>
        <AppList items={appsList} />
      </StyledAppsListContainer>
    </StyledAppsListPage>
  );
};

export default Apps;
