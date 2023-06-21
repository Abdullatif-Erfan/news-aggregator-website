import { SliderAxiosResponseType } from "../../../types/Types";

const RightSideList: React.FC<SliderAxiosResponseType> = ({
  title,
  publishedAt,
  urlToImage,
  url,
}: SliderAxiosResponseType) => {
  return (
    <div className="single-post-list-wrap" key={title}>
      <div className="media">
        <div className="media-left">
          <img
            src={urlToImage}
            alt={title}
            onError={({ currentTarget }) => {
              currentTarget.onerror = null; // prevents looping
              currentTarget.src = "./assets/images/no_image.png";
            }}
          />
        </div>
        <div className="media-body">
          <div className="date-content">
            <i className="fa fa-clock-o" />
            {publishedAt.substring(0, 10)}
          </div>
          <h6 className="title">
            <a target="_blank" href={url}>
              <a href={url} target="_blank">
                {title}
              </a>
            </a>
          </h6>
        </div>
      </div>
    </div>
  );
};
export default RightSideList;
