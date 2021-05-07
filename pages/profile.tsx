import type { GetStaticPropsContext } from "next";
import { Layout } from "@components/common";
import { Container, Text } from "@components/ui";

export async function getStaticProps({}: GetStaticPropsContext) {
  return {
    props: {},
  };
}

export default function Profile() {
  return (
    <Container>
      <Text variant="pageHeading">My Profile</Text>
    </Container>
  );
}

Profile.Layout = Layout;
