import { useState, useRef, useEffect } from "react";

import { LogoArrowBottom, LogoSearch, LogoParams, LogoCheck, LogoCross } from "../../components/SVGs/SVGs"
import { Network } from "../../types";
import { NetworkItem } from "../../components/NetworkItem";
import { networks as networkData } from "../../types/networks";
import useClickOutside from '../../hooks/useClickOutside';
import { FilterSortOption } from "../../components/FilterSortOption";

interface NetworkProps {
  networks?: Network[];
}

export const Networks: React.FC<NetworkProps> = ({ networks = networkData }) => {
  const allButtonRef = useRef(null);
  const orderButtonRef = useRef(null);
  const searchRef = useRef<HTMLInputElement>(null);
  const [allButtonLabel, setAllButtonLabel] = useState('All');
  const [liveStatus, setLiveStatus] = useState('All');
  const [orderButtonLabel, setOrderButtonLabel] = useState('Order');
  const [search, setSearch,] = useState('');
  const [order, setOrder] = useState('');
  const [showAllOptions, setShowAllOptions] = useState(false);
  const [showOrderOptions, setShowOrderOptions] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [showMobileOptions, setShowMobileOptions] = useState(false);
  const [isOverlayVisible, setIsOverlayVisible] = useState<boolean>(false);
  const [isClosing, setIsClosing] = useState(false);

  useClickOutside(allButtonRef, () => setShowAllOptions(false));
  useClickOutside(orderButtonRef, () => setShowOrderOptions(false));

  const filteredNetworks = networks.filter(network => {
    const titleMatch = network.title.toLowerCase().startsWith(search.toLowerCase());

    let liveMatch = true;
    if (liveStatus === 'Live') {
      liveMatch = network.live;
    } else if (liveStatus === 'Testnets') {
      liveMatch = !network.live;
    }

    return titleMatch && liveMatch;
  });

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "/") {
        event.preventDefault();
        searchRef.current?.focus();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  if (order === 'A > Z') {
    filteredNetworks.sort((a, b) => a.title.localeCompare(b.title));
  } else if (order === 'APR') {
    filteredNetworks.sort((a, b) => b.metrics - a.metrics);
  }

  const handleLogoParamsClick = () => {
    setIsOverlayVisible(!isOverlayVisible);
    setShowMobileOptions(!showMobileOptions);
  };

  const handleLogoCrossClick = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsOverlayVisible(false);
      setShowMobileOptions(false);
      setIsClosing(false);
    }, 500);
  };

  const handleDoneClick = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsOverlayVisible(false);
      setShowMobileOptions(false);
      setIsClosing(false);
    }, 500);
  };


  return (
    <div className="Networks">
      <div id="overlay" style={{
        opacity: isOverlayVisible ? 0.6399999856948853 : 0,
        pointerEvents: isOverlayVisible ? 'auto' : 'none'
      }}></div>
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
                  ref={searchRef}
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
              <LogoParams
                className="Networks__content__control__searchBar__content__iconParams icon--small icon__white"
                onClick={handleLogoParamsClick}
              />
            </div>
          </div>
          <div className="Networks__content__control__filters">
            <div className="Networks__content__control__filters__button" tabIndex={0} onClick={() => setShowAllOptions(!showAllOptions)} ref={allButtonRef}>
              <p className="Networks__content__control__filters__button__label">{allButtonLabel}</p>
              {showAllOptions && (
                <div>
                  <div className="Networks__content__control__filters__button__pannel1">
                    <FilterSortOption
                      label='All'
                      currentLabel={allButtonLabel}
                      onClick={() => { setAllButtonLabel('All'); setLiveStatus('All'); setShowAllOptions(false); }}
                    />
                    <FilterSortOption
                      label='Live'
                      currentLabel={allButtonLabel}
                      onClick={() => { setAllButtonLabel('Live'); setLiveStatus('Live'); setShowAllOptions(false); }}
                    />
                    <FilterSortOption
                      label='Testnets'
                      currentLabel={allButtonLabel}
                      onClick={() => { setAllButtonLabel('Testnets'); setLiveStatus('Testnets'); setShowAllOptions(false); }}
                    />
                  </div>
                </div>
              )}
              <LogoArrowBottom className={`Networks__content__control__filters__button__icon ${showAllOptions ? 'rotate' : ''}`} />
            </div>
            <div className="Networks__content__control__filters__button" tabIndex={0} onClick={() => setShowOrderOptions(!showOrderOptions)} ref={orderButtonRef}>
              <p className="Networks__content__control__filters__button__label">{orderButtonLabel}</p>
              {showOrderOptions && (
                <div className="Networks__content__control__filters__button__pannel2">
                  <FilterSortOption
                    label='Order'
                    currentLabel={orderButtonLabel}
                    onClick={() => { setOrderButtonLabel('Order'); setOrder(''); setShowOrderOptions(false); }}
                  />
                  <FilterSortOption
                    label='A > Z'
                    currentLabel={orderButtonLabel}
                    onClick={() => { setOrderButtonLabel('A > Z'); setOrder('A > Z'); setShowOrderOptions(false); }}
                  />
                  <FilterSortOption
                    label='APR'
                    currentLabel={orderButtonLabel}
                    onClick={() => { setOrderButtonLabel('APR'); setOrder('APR'); setShowOrderOptions(false); }}
                  />
                </div>
              )}
              <LogoArrowBottom className={`Networks__content__control__filters__button__icon ${showOrderOptions ? 'rotate' : ''}`} />
            </div>
          </div>
          {showMobileOptions && !isClosing && (
            <div className={`Networks__content__control__filters__mobile fadeInUpBig`}>
              <div className="Networks__content__control__filters__mobile__header">
                <LogoCross
                  onClick={handleLogoCrossClick}
                  className="Networks__content__control__filters__mobile__header__button icon--small icon__white"
                />

              </div>
              <div className="Networks__content__control__filters__mobile__section first-section">
                <h5>Filter</h5>
                <div className="Networks__content__control__filters__mobile__section__button" tabIndex={0} onClick={() => setShowAllOptions(!showAllOptions)} ref={allButtonRef}>
                  <p className={`Networks__content__control__filters__mobile__section__button__pannel1__label ${allButtonLabel === 'All' ? 'selected' : ''}`} tabIndex={0} onClick={() => { setAllButtonLabel('All'); setLiveStatus('All'); setShowAllOptions(false); }}>
                    All
                    {allButtonLabel === 'All' && <LogoCheck />}
                  </p>
                  <p className={`Networks__content__control__filters__mobile__section__button__pannel1__label ${allButtonLabel === 'Live' ? 'selected' : ''}`} tabIndex={0} onClick={() => { setAllButtonLabel('Live'); setLiveStatus('Live'); setShowAllOptions(false); }}>
                    Live
                    {allButtonLabel === 'Live' && <LogoCheck />}
                  </p>
                  <p className={`Networks__content__control__filters__mobile__section__button__pannel1__label ${allButtonLabel === 'Testnets' ? 'selected' : ''}`} tabIndex={0} onClick={() => { setAllButtonLabel('Testnets'); setLiveStatus('Testnets'); setShowAllOptions(false); }}>
                    Testnets
                    {allButtonLabel === 'Testnets' && <LogoCheck />}
                  </p>
                </div>
              </div>
              <div className="Networks__content__control__filters__mobile__section">
                <h5>Sort</h5>
                <div className="Networks__content__control__filters__mobile__section__button" tabIndex={0} onClick={() => setShowOrderOptions(!showOrderOptions)} ref={orderButtonRef}>
                  <p className={`Networks__content__control__filters__mobile__section__button__pannel2__label ${orderButtonLabel === 'A > Z' ? 'selected' : ''}`} tabIndex={0} onClick={() => { setOrderButtonLabel('A > Z'); setOrder('A > Z'); setShowOrderOptions(false); }}>
                    A {'>'} Z*
                    {orderButtonLabel === 'A > Z' && <LogoCheck />}
                  </p>
                  <p className={`Networks__content__control__filters__mobile__section__button__pannel2__label ${orderButtonLabel === 'APR' ? 'selected' : ''}`} tabIndex={0} onClick={() => { setOrderButtonLabel('APR'); setOrder('APR'); setShowOrderOptions(false); }}>
                    APR
                    {orderButtonLabel === 'APR' && <LogoCheck />}
                  </p>
                </div>
              </div>
              <button
                className="btn--large btn__primary"
                onClick={handleDoneClick}
              >
                Done
              </button>
            </div>
          )}
          {isClosing && (
            <div className={`Networks__content__control__filters__mobile fadeOutDownBig`}>
              <div className="Networks__content__control__filters__mobile__header">
                <LogoCross
                  onClick={handleLogoCrossClick}
                  className="Networks__content__control__filters__mobile__header__button icon--small icon__white"
                />

              </div>
              <div className="Networks__content__control__filters__mobile__section first-section">
                <h5>Filter</h5>
                <div className="Networks__content__control__filters__mobile__section__button" tabIndex={0} onClick={() => setShowAllOptions(!showAllOptions)} ref={allButtonRef}>
                  <p className={`Networks__content__control__filters__mobile__section__button__pannel1__label ${allButtonLabel === 'All' ? 'selected' : ''}`} tabIndex={0} onClick={() => { setAllButtonLabel('All'); setLiveStatus('All'); setShowAllOptions(false); }}>
                    All
                    {allButtonLabel === 'All' && <LogoCheck />}
                  </p>
                  <p className={`Networks__content__control__filters__mobile__section__button__pannel1__label ${allButtonLabel === 'Live' ? 'selected' : ''}`} tabIndex={0} onClick={() => { setAllButtonLabel('Live'); setLiveStatus('Live'); setShowAllOptions(false); }}>
                    Live
                    {allButtonLabel === 'Live' && <LogoCheck />}
                  </p>
                  <p className={`Networks__content__control__filters__mobile__section__button__pannel1__label ${allButtonLabel === 'Testnets' ? 'selected' : ''}`} tabIndex={0} onClick={() => { setAllButtonLabel('Testnets'); setLiveStatus('Testnets'); setShowAllOptions(false); }}>
                    Testnets
                    {allButtonLabel === 'Testnets' && <LogoCheck />}
                  </p>
                </div>
              </div>
              <div className="Networks__content__control__filters__mobile__section">
                <h5>Sort</h5>
                <div className="Networks__content__control__filters__mobile__section__button" tabIndex={0} onClick={() => setShowOrderOptions(!showOrderOptions)} ref={orderButtonRef}>
                  <p className={`Networks__content__control__filters__mobile__section__button__pannel2__label ${orderButtonLabel === 'A > Z' ? 'selected' : ''}`} tabIndex={0} onClick={() => { setOrderButtonLabel('A > Z'); setOrder('A > Z'); setShowOrderOptions(false); }}>
                    A {'>'} Z*
                    {orderButtonLabel === 'A > Z' && <LogoCheck />}
                  </p>
                  <p className={`Networks__content__control__filters__mobile__section__button__pannel2__label ${orderButtonLabel === 'APR' ? 'selected' : ''}`} tabIndex={0} onClick={() => { setOrderButtonLabel('APR'); setOrder('APR'); setShowOrderOptions(false); }}>
                    APR
                    {orderButtonLabel === 'APR' && <LogoCheck />}
                  </p>
                </div>
              </div>
              <button
                className="btn--large btn__primary"
                onClick={handleDoneClick}
              >
                Done
              </button>
            </div>
          )}
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