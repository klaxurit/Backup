export const Metrics: React.FC = () => {
  return (
    <div className="metrics">
      <div className="metrics__content">
        <div className="metrics__left">
          <h3>Experiment staking</h3>
          <button className="metrics__btn metrics__btn--desktop btn--large btn__white">Explore networks</button>
        </div>
        <div className="metrics__wrapper">
          <div className="metrics__wrapper__firstMetric">
            <h5>+60</h5>
            <p>Blockchains</p>
          </div>
          <div className="metrics__wrapper__secondMetric">
            <h5>+$60M</h5>
            <p>Assets staked</p>
          </div>
          <div className="metrics__wrapper__thirdMetric">
            <h5>+60K</h5>
            <p>Delegators</p>
          </div>
        </div>
      </div>
      <button className="metrics__btn metrics__btn--mobile btn--large btn__white">Explore networks</button>
    </div> 
  );
}