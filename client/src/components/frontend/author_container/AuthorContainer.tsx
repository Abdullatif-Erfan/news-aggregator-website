import { useRef, useState } from "react";
import { useQuery } from "react-query";
import Slider from "react-slick";
import { fetchByAuthor } from "../../../API/Articles";
import { AuthorListPropType } from "../../../types/Types";
import AuthorList from "./AuthorList";
import { AuthorSkeleton } from "./AuthorSkeleton";

export const AuthorContainer: React.FC<{}> = () => {
  const sliderRef = useRef(null);

  /**
   * =========== Carousel Slider Setting  ==================
   */
  const [carouselSettings] = useState({
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });

  const gotoNext = () => {
    sliderRef.current.slickNext();
  };

  const gotoPrev = () => {
    sliderRef.current.slickPrev();
  };

  /**
   * =========== Fetch Author Data ==================
   */
  const {
    isLoading,
    isError,
    error,
    data: author_data,
  } = useQuery("author-data", fetchByAuthor, {
    staleTime: 300000, // for 5 minutes the data should be in stale time
    refetchOnWindowFocus: false,
  });

  if (isError)
    return (
      <div className="errorMessage">
        Error Occured :{error instanceof Error && <h6>{error ?.message}</h6>}
      </div>
    );

  return (
    <>
      <div className="container">
        {/* Section Title */}
        <div className="section-title">
          <span className="text-title">Author</span>
          <span className="next_prev_btn">
            <i className="fa fa-angle-left" onClick={gotoNext}></i>
            <i className="fa fa-angle-right" onClick={gotoPrev}></i>
          </span>
        </div>
        {/* End of Section Title */}
        <Slider {...carouselSettings} ref={sliderRef}>
          {isLoading
            ? AuthorSkeleton()
            : author_data ?.map(
              ({
                title,
                author,
                urlToImage,
                url,
                publishedAt,
              }: AuthorListPropType) => (
                  <AuthorList
                    title={title}
                    author={author}
                    urlToImage={urlToImage}
                    url={url}
                    publishedAt={publishedAt}
                  />
                )
            )}
        </Slider>
      </div>
    </>
  );
};
