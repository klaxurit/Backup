import { useState, useRef } from "react";

import { LogoArrowBottom, LogoSearch, LogoParams, LogoCheck } from "../../components/SVGs/SVGs"
import { Network } from "../../types";
import { NetworkItem } from "../../components/NetworkItem";
import { networks as networkData } from "../../types/networks";
import useClickOutside from '../../hooks/useClickOutside';

interface NetworkProps {
  networks?: Network[];
}

export const Networks: React.FC<NetworkProps> = ({ networks = networkData }) => {
  const [allButtonLabel, setAllButtonLabel] = useState('All');
  const [orderButtonLabel, setOrderButtonLabel] = useState('Order');
  const [search, setSearch, ] = useState('');
  const [order, setOrder] = useState('');
  const [showAllOptions, setShowAllOptions] = useState(false);
  const [showOrderOptions, setShowOrderOptions] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const allButtonRef = useRef(null);
  const orderButtonRef = useRef(null);

  useClickOutside(allButtonRef, () => setShowAllOptions(false));
  useClickOutside(orderButtonRef, () => setShowOrderOptions(false));

  const filteredNetworks = networks.filter(network =>
    network.title.toLowerCase().startsWith(search.toLowerCase())
  );

  if (order === 'A > Z') {
    filteredNetworks.sort((a, b) => a.title.localeCompare(b.title));
  } else if (order === 'APR') {
    filteredNetworks.sort((a, b) => b.metrics - a.metrics);
  }

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
              <div className="Networks__content__control__searchBar__content__left">
                <LogoSearch className="Networks__content__control__searchBar__content__left__iconSearch" />
                <input
                  type="text"
                  className="Networks__content__control__searchBar__content__left__input"
                  placeholder="Search"
                  value={search}
                  onChange={e => {
                    setSearch(e.target.value);
                    setIsTyping(e.target.value !== '');
                  }}
                />
              </div>
              <span className={`Networks__content__control__searchBar__content__iconSlash icon--small icon__white ${isTyping ? 'icon--active' : ''}`} onClick={() => { setSearch(''); setIsTyping(false); }}></span>
              <LogoParams className="Networks__content__control__searchBar__content__iconParams icon--small icon__white"/>
            </div>
          </div>
          <div className="Networks__content__control__filters">
            <div className="Networks__content__control__filters__button" onClick={() => setShowAllOptions(!showAllOptions)} ref={allButtonRef}>
              <p className="Networks__content__control__filters__button__label">{allButtonLabel}</p>
              {showAllOptions && (
                <div>
                  <div className="Networks__content__control__filters__button__pannel1">
                    <p className="Networks__content__control__filters__button__pannel1__label" tabIndex={0} onClick={() => { setAllButtonLabel('Live'); setShowAllOptions(false); }}>
                      Live
                      {allButtonLabel === 'Live' && <LogoCheck />}
                    </p>
                    <p className="Networks__content__control__filters__button__pannel1__label" tabIndex={0} onClick={() => { setAllButtonLabel('Testnets'); setShowAllOptions(false); }}>
                      Testnets
                      {allButtonLabel === 'Testnets' && <LogoCheck />}
                    </p>
                  </div>
                </div>
              )}
              <LogoArrowBottom className="Networks__content__control__filters__button__icon" />
            </div>
            <div className="Networks__content__control__filters__button" onClick={() => setShowOrderOptions(!showOrderOptions)} ref={orderButtonRef}>
              <p className="Networks__content__control__filters__button__label">{orderButtonLabel}</p>
              {showOrderOptions && (
                  <div className="Networks__content__control__filters__button__pannel2">
                  <p className="Networks__content__control__filters__button__pannel2__label" tabIndex={0} onClick={() => { setOrderButtonLabel('A > Z'); setOrder('A > Z'); setShowOrderOptions(false); }}>
                    A {'>'} Z*
                    {orderButtonLabel === 'A > Z' && <LogoCheck />}
                  </p>
                  <p className="Networks__content__control__filters__button__pannel2__label" tabIndex={0} onClick={() => { setOrderButtonLabel('APR'); setOrder('APR'); setShowOrderOptions(false); }}>
                    APR
                    {orderButtonLabel === 'APR' && <LogoCheck />}
                  </p>
                  </div>
              )}
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