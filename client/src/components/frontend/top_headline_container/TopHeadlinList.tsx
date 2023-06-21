import { TopHeadlinePropType } from "../../../types/Types";

const TopHeadlineList: React.FC<TopHeadlinePropType> = ({
  title,
  url,
  author,
  urlToImage,
  publishedAt,
  source,
}: TopHeadlinePropType) => {
  return (
    <div className="col-6">
      <div className="single-post-wrap">
        <div className="thumb">
          {urlToImage ? (
            <img
              loading="lazy"
              src={urlToImage}
              alt={title}
              onError={({ currentTarget }) => {
                currentTarget.onerror = null; // prevents looping
                currentTarget.src = "./assets/images/no_image.png";
              }}
            />
          ) : (
            <img
              loading="lazy"
              src="./assets/images/no_image.png"
              alt="image not available"
            />
          )}

          {author && (
            <a target="_blank" className="tag-base tag-orange" href={url}>
              {/* {source.name}{" "} */}
              {author}
            </a>
          )}
        </div>
        <div className="details">
          <div className="date-content">
            <i className="fa fa-clock-o" />
            {publishedAt.substring(0, 10)}
          </div>
          <a target="_blank" href={url}>
            {title}
          </a>
        </div>
      </div>
    </div>
  );
};
export default TopHeadlineList;
