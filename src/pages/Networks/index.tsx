import { useState } from "react";

import { LogoArrowBottom, LogoSearch } from "../../components/SVGs/SVGs"
import { Network } from "../../types";
import { NetworkItem } from "../../components/NetworkItem";
import { networks as networkData } from "../../types/networks";

interface NetworkProps {
  networks?: Network[];
}

export const Networks: React.FC<NetworkProps> = ({ networks = networkData }) => {
  const [search, setSearch] = useState('');

  const filteredNetworks = networks.filter(network =>
    network.title.toLowerCase().startsWith(search.toLowerCase())
  );
  return (
    <div className="Networks">
      <div className="Networks__content">
        <div className="Networks__content__head">
          <h1 className="Networks__content__head__title">Networks</h1>
          <p className="Networks__content__head__desc">Browse our networks, calculate your rewards, and stake with us</p>
        </div>
        <div className="Networks__content__control">
          <div className="Networks__content__control__searchBar">
            <div className="Networks__content__control__searchBar__content">
              <LogoSearch className="Networks__content__control__searchBar__content__iconSearch" />
              <input
                type="text"
                className="Networks__content__control__searchBar__content__input"
                placeholder="Search"
                value={search}
                onChange={e => setSearch(e.target.value)}
              />
              <span className="Networks__content__control__searchBar__content__iconSlash icon--small icon__white">/</span>
            </div>
          </div>
          <div className="Networks__content__control__filters">
            <div className="Networks__content__control__filters__button">
              <p className="Networks__content__control__filters__button__label">All</p>
              <LogoArrowBottom className="Networks__content__control__filters__button__icon" />
            </div>
            <div className="Networks__content__control__filters__button">
              <p className="Networks__content__control__filters__button__label">Order</p>
              <LogoArrowBottom className="Networks__content__control__filters__button__icon" />
            </div>
          </div>
        </div>
        <div className="Networks__content__list">
          {filteredNetworks.map((network, idx) =>
            <NetworkItem
              key={idx}
              network={network}
              detailed={true}
            />
          )}
        </div>
      </div>
    </div>
  )
}