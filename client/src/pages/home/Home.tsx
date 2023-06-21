import Layout from "../../components/frontend/layout/Layout";
import { TopHeadlineContainer } from "../../components/frontend/top_headline_container/TopHeadline";
import { AuthorContainer } from "../../components/frontend/author_container/AuthorContainer";
import { SliderContainer } from "../../components/frontend/slider_container/SliderContainer";

interface propType { }

const HomePage: React.FC<propType> = () => {
  return (
    <>
      <Layout>
        <main>
          <article className="article">

            {/* Slider Container */}
            <SliderContainer />

            {/* Author Section */}
            <section className="section author" id="author">
              <AuthorContainer />
            </section>

            {/* top-headline section */}
            <section
              className="top-headline-artilce "
              id="top-headline-artilce">
              <TopHeadlineContainer />
            </section>
          </article>
        </main>
      </Layout>
    </>
  );
};
export default HomePage;
