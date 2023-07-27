import { useState } from "react";

import { Network } from "../types";

interface NetworkItemProps {
  network: Network;
  detailed?: boolean;
}

export const NetworkItem: React.FC<NetworkItemProps> = ({ network, detailed = false }: NetworkItemProps) => {
    const [showTooltip, setShowTooltip] = useState(false);

    const handleMouseOver = () => {
      if (network.title.length > 11) {
        setShowTooltip(true);
      }
    };

    const handleMouseOut = () => {
      setShowTooltip(false);
    };

    const truncateTitle = (title: string) => {
      if (title.length > 11) {
        return title.substring(0, 11) + "..";
      }
      return title;
    };

    const displayTitle = truncateTitle(network.title);

  if (detailed) {
    return (
      <div 
        className="Network__item Network__item--detailed"
        tabIndex={0}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      >
        {showTooltip && (
          <div className="Network__item__tooltip">
            {network.title}
            <svg className="Network__item__tooltip__svg" width="12" height="4" viewBox="0 0 12 4" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 0L12 0L8.4 3.13445C7.07452 4.28852 4.92548 4.28852 3.6 3.13445L0 0Z" fill="white" />
            </svg>
          </div>
        )}
        <div className="Network__item__header">
          <img src={network.imageUrl} className="Network__item__header__img" draggable={false} />
          <div className="Network__item__header__info">
          <div className="Network__item__header__info__head">
            <h3 className="Network__item__header__info__head__title">
              {displayTitle}
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
