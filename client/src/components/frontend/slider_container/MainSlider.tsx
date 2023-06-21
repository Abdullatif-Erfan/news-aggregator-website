import { MainSliderPropTypes } from "../../../types/Types";

const MainSlider: React.FC<MainSliderPropTypes> = ({
  title,
  urlToImage,
  url,
}: MainSliderPropTypes) => {
  return (
    <div className="slider-cover">
      <a target="_blank" href={url}>
        <img src={urlToImage} alt={title} />
        <div className="slider-title">{title}</div>
      </a>
    </div>
  );
};
export default MainSlider;
