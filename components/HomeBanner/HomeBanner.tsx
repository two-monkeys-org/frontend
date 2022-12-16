import {
  StyledChatImage,
  StyledHomeBanner,
  StyledMonitorImage,
  StyledBlogImage,
  StyledHexagonImage,
  StyledMonitorSection,
  StyledHomeBannerContainer,
} from "./HomeBanner.style";
import Image from "next/image";

export const HomeBanner = () => {
  return (
    <StyledHomeBannerContainer>
      <StyledHomeBanner>
        <StyledHexagonImage>
          <Image src="/static/hexagon.png" width="512" height="512" />
        </StyledHexagonImage>
        <StyledMonitorSection>
          <StyledMonitorImage>
            <Image src="/static/monitor.png" width="350" height="350" />
          </StyledMonitorImage>
          <StyledBlogImage>
            <Image src="/static/blog.png" width="120" height="120" />
          </StyledBlogImage>
          <StyledChatImage>
            <Image src="/static/chat.png" width="120" height="120" />
          </StyledChatImage>
        </StyledMonitorSection>
      </StyledHomeBanner>
    </StyledHomeBannerContainer>
  );
};
