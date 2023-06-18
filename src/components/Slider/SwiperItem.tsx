import { Project } from "../../types";

interface SwiperItemProps {
  project: Project;
}

const SwiperItem: React.FC<SwiperItemProps> = ({ project }: SwiperItemProps) => {
  return (
    <li className="Swiper__item">
      <div className="Swiper__item__content">
        <img src={project.imageUrl} className="Swiper__item__content__img" draggable={false} />
        <div className="Swiper__item__content__text">
          <h3 className="Swiper__item__content__text__title">
            {project.title}
          </h3>
          <p className="Swiper__item__content__text__desc">
            {project.description}
          </p>
        </div>
        <span className="Swiper__item__content__metrics">
          {project.metrics}% APR
        </span>
      </div>
    </li>
  );
};

export default SwiperItem;
