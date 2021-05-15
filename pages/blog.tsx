import type { GetStaticPropsContext } from "next";
import { Layout } from "@components/common";
import { Container } from "@components/ui";

export async function getStaticProps({}: GetStaticPropsContext) {
  return {
    props: {},
  };
}

export default function Blog() {
  return (
    <div className="pb-20">
      <div className="text-center pt-40 pb-56 bg-violet">
        <Container>
          <h2 className="text-4xl tracking-tight leading-10 font-extrabold text-white sm:text-5xl sm:leading-none md:text-6xl">
            Welcome to Soil
          </h2>
          <p className="mt-3 max-w-md mx-auto text-gray-100 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            Soil is one of the fastest-growing start-ups in the Agri Tech sector
            and one of the very few companies providing end-to-end solutions and
            services to the farming community in India. We are building
            AI-enabled technologies to revolutionize supply chain and production
            efficiency in the farm sector. Currently, we are operating in - UP
            with 350,000 farmers in our service network and our goal is to bring
            our services to 5 million farmers by 2024. The impact we have
            created at grass root level over the last 8 years of our operations
            has been phenomenal.
          </p>
          <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-12">
            <div className="flex">
              <div className="flex-shrink-0 inline-flex rounded-full border-2 border-white">
                <img
                  className="h-12 w-12 rounded-full"
                  src="https://lh3.googleusercontent.com/a-/AOh14Ginb9fWYu_pwH6MV5zO4Mmyr_oVCzHdhVHk9voVrks=s96-c"
                  alt="Avatar"
                />
              </div>
              <div className="ml-4">
                <div className="leading-6 font-medium text-white">Shobhit Singh</div>
                <div className="leading-6 font-medium text-gray-200">
                  CEO, Soil
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
      <Container>
        <div className="-mt-96 mx-auto">
          <img src="/soil.png" alt="soil" />
        </div>
      </Container>
    </div>
  );
}

Blog.Layout = Layout;
