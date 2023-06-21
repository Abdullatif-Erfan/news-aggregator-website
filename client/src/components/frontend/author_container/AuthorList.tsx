import { AuthorListPropType } from "../../../types/Types";

const AuthorList: React.FC<AuthorListPropType> = ({
  title,
  author,
  urlToImage,
  url,
  publishedAt,
}: AuthorListPropType) => {
  return (
    <>
      <div className="col-12 single-post-wrap" key={title}>
        <div className="author-image-wrapper">
          <div className="author-image">
            <img
              src={urlToImage}
              alt={title}
              onError={({ currentTarget }) => {
                currentTarget.onerror = null; // prevents looping
                currentTarget.src = "./assets/images/no_image.png";
              }}
            />
          </div>
          <div className="author-name-wrapper">
            <span className="author-name">{author}</span>
            <span className="date">
              <i className="fa fa-clock-o" />
              {publishedAt.substring(0, 10)}
            </span>
          </div>
        </div>
        <div className="author-details">
          <h6 className="title">
            <a target="_blank" href={url}>
              {title.length > 60 ? title.substring(0, 60) + "..." : title}
            </a>
          </h6>
        </div>
      </div>
    </>
  );
};
export default AuthorList;
