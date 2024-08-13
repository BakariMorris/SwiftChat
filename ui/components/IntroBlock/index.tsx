import { Row, Col } from "antd";
import { withTranslation, TFunction } from "react-i18next";
import { Slide } from "react-awesome-reveal";
import { Button } from "../../common/Button";
import { IntroBlockSection, Content, ContentWrapper, Title } from "./styles";
import { useRouter } from 'next/navigation';

interface IntroBlockProps {
  title: string;
  content: string;
  button: string;
  t: TFunction;
}

const IntroBlock = ({ title, content, button, t }: IntroBlockProps) => {
  const router = useRouter();
  return (
    <IntroBlockSection>
      <Slide direction="up" triggerOnce>
        <Row justify="center" align="middle">
          <ContentWrapper>
            <Col lg={24} md={24} sm={24} xs={24}>
              <Title>{t(title)}</Title>
              <Content>{t(content)}</Content>
              {button && (
                <Button name="submit" onClick={() => router.push("/login")}>
                  {t(button)}
                </Button>
              )}
            </Col>
          </ContentWrapper>
        </Row>
      </Slide>
    </IntroBlockSection>
  );
};

export default withTranslation()(IntroBlock);
