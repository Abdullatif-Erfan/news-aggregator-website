import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

import { useQuery } from "react-query";
import { fetchSlidersData } from "../../../API/Articles";
import { SliderAxiosResponseType } from "../../../types/Types";
import RightSideList from "./RightSideList";
import { RightSideSkeleton } from "./RightSideSkeleton";

export const SliderContainer: React.FC<{}> = () => {
  /**
   * ======== Slick-slider setting =========
   */
  const settings = {
    dots: true,
    autoplay: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  /**
   * ======== Fetching News API data =========
   */
  const {
    isLoading,
    isError,
    error,
    data: sliderData,
  } = useQuery("sliders-data", fetchSlidersData, {
    staleTime: 300000, // for 5 minutes the data should be in stale time
    refetchOnWindowFocus: false,
  });

  /**
   * =================== Slider List ===================
   * Slice 5 records for main slider
   * Slice 4 records for right side of the main Slider
   */
  const totalRecords = sliderData?.length - 1;
  let mainSliderData: number,
    rightSideData: number = 0;
  if (totalRecords >= 9) {
    // slice the list and keep 5 records for main slider and
    // keep 4 records for right side of main slider
    mainSliderData = sliderData?.slice(0, 5);
    rightSideData = sliderData?.slice(6, 10);
  } else if (totalRecords > 5 && totalRecords <= 9) {
    // slice the list and keep 5 records for main slider and
    // slice again from end and keep 4 records for right side of main slider
    mainSliderData = sliderData?.slice(0, 5);
    rightSideData = sliderData?.slice(-4);
  } else if (totalRecords === 5) {
    // show all records in main slider and slice the list from the end and keep 4 records for right side
    mainSliderData = sliderData;
    rightSideData = sliderData?.slice(-4);
  } else if (totalRecords <= 5 && totalRecords > 0) {
    // show all records in main slider and right side
    mainSliderData = sliderData;
    rightSideData = sliderData;
  } else {
    // not any record, default value is 0, and custom message will be shown
  }

  // if (isLoading) return <div>Loading...</div>;

  if (isError)
    return (
      <div className="errorMessage">
        Error Occured :{error instanceof Error && <h6>{error?.message}</h6>}
      </div>
    );

  return (
    <>
      <section className="section slider" id="slider">
        <div className="container">
          <div className="row">
            {/* <!-- =============== Left Side (Slider) =============== --> */}
            <div className="col-lg-8 slider-and-skeleton-wrapper">
              {isLoading ? (
                <Skeleton height="100%" width="100%" baseColor="#dedede" />
              ) : (
                <Slider {...settings}>
                  {mainSliderData?.map(
                    ({ title, urlToImage, url }: SliderAxiosResponseType) =>
                      SliderFunction(url, urlToImage, title)
                  )}
                </Slider>
              )}
            </div>

            {/* <!-- =============== Right Side (4 items) =============== --> */}
            <div className="col-lg-4">
              <div className="right-side-category-wrapper">
                {isLoading
                  ? RightSideSkeleton()
                  : rightSideData?.map(
                      ({
                        title,
                        publishedAt,
                        urlToImage,
                        url,
                      }: SliderAxiosResponseType) => (
                        <RightSideList
                          title={title}
                          publishedAt={publishedAt}
                          urlToImage={urlToImage}
                          url={url}
                          key={title}
                        />
                      )
                    )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

function SliderFunction(url: string, urlToImage: string, title: string) {
  return (
    <div className="slider-cover" key={title}>
      <a target="_blank" href={url}>
        <img src={urlToImage} alt={title} />
        <div className="slider-title">{title}</div>
      </a>
    </div>
  );
}
