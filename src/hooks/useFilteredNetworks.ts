import { useState } from "react";

import { Network } from "../types";

function useFilteredNetworks(networks: Network[]) {
  const [allButtonLabel, setAllButtonLabel] = useState('All');
  const [liveStatus, setLiveStatus] = useState('All');
  const [orderButtonLabel, setOrderButtonLabel] = useState('Order');
  const [search, setSearch] = useState('');
  const [order, setOrder] = useState('');
  const [isTyping, setIsTyping] = useState(false);

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

  if (order === 'A > Z') {
    filteredNetworks.sort((a, b) => a.title.localeCompare(b.title));
  } else if (order === 'APR') {
    filteredNetworks.sort((a, b) => b.metrics - a.metrics);
  }

  return {
    allButtonLabel,
    setAllButtonLabel,
    liveStatus,
    setLiveStatus,
    orderButtonLabel,
    setOrderButtonLabel,
    search,
    setSearch,
    order,
    setOrder,
    isTyping,
    setIsTyping,
    filteredNetworks
  };
}

export default useFilteredNetworks;
