import { useState } from "react";

interface Project {
  imageUrl: string;
  title: string;
  description: string;
}

const SwiperItem: React.FC<{ project: Project }> = ({ project }) => {

  return (
    <li 
      className="swiper-item"
    >
      <div className="swiper-item-image-container">
          <div className="swiper-item-content">
            <img src={project.imageUrl} className="swiper-img" draggable={false} />
            <h3 className="swiper-project--name">
              {project.title}
            </h3>
            <p>
            {project.description}
            </p>
          </div>
      </div>
    </li>
  );
};

export default SwiperItem;