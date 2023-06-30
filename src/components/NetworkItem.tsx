// import { useState } from "react";

import { Network } from "../types";

interface NetworkItemProps {
  network: Network;
  detailed?: boolean;
}

export const NetworkItem: React.FC<NetworkItemProps> = ({ network, detailed = false }: NetworkItemProps) => {
  // const [showTooltip, setShowTooltip] = useState(false);

  // const handleMouseOver = () => {
  //   setShowTooltip(true);
  // };

  // const handleMouseOut = () => {
  //   setShowTooltip(false);
  // };

  if (detailed) {
    return (
      <div 
        className="Network__item Network__item--detailed"
        // onMouseOver={handleMouseOver}
        // onMouseOut={handleMouseOut}
      >
        {/* {showTooltip && (
          <div className="Network__item__tooltip">
            {network.title}
          </div>
        )} */}
        <div className="Network__item__header">
          <img src={network.imageUrl} className="Network__item__header__img" draggable={false} />
          <div className="Network__item__header__info">
          <div className="Network__item__header__info__head">
            <h3 className="Network__item__header__info__head__title">
              {network.title}
            </h3>
            <p className="Network__item__header__info__head__desc">
              {network.description}
            </p>
          </div>
            <span className="Network__item__header__info__metrics">
              {network.metrics}% APR
            </span>
          </div>
        </div>
        <div className="Network__item__details">
          <div className="Network__item__details__detail">
            <p className="Network__item__details__detail__label">Delegated</p>
            <p className="Network__item__details__detail__value">{network.delegated}</p>
          </div>
          <div className="Network__item__details__detail">
            <p className="Network__item__details__detail__label">TVL</p>
            <p className="Network__item__details__detail__value">{network.tvl}</p>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <li className="Network__item">
        <div className="Network__item__content">
          <img src={network.imageUrl} className="Network__item__content__img" draggable={false} />
          <div className="Network__item__content__text">
            <h3 className="Network__item__content__text__title">
              {network.title}
            </h3>
            <p className="Network__item__content__text__desc">
              {network.description}
            </p>
          </div>
          <span className="Network__item__content__metrics">
            {network.metrics}% APR
          </span>
        </div>
      </li>
    );
  };
}
