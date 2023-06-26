import StakeLabIMG from "../../assets/images/stakelab.svg";

export const StakeLab: React.FC = () => {
  return (
    <div className="Product">
      <div className="Product__head">
        <p className="Product__head__subtitle">Product</p>
        <h1 className="Product__head__title">StakeLab</h1>
      </div>
      <div className="Product__content">
        <div className="Product__content__FAQ">
          <article className="Product__content__FAQ__article">
            <h4 className="Product__content__FAQ__article__title">What is StakeLab?</h4>
            <p>StakeLab is a provider of tools to leverage the benefits of Proof of Stake (PoS) blockchains.</p>
            <p>The StakeLab product - which is the main activity - provide a secure and reliable infrastructure that validate and secure them, known as validators.</p>
          </article>
          <article className="Product__content__FAQ__article">
            <h4 className="Product__content__FAQ__article__title">What is an asset?</h4>
            <p>An asset is something defined as valuable or useful, as cash, house, cryptocurrency...</p>
            <p>At StakeLab, we support a large list of cryptocurrencies that can be delegated to our validators and provide tools to leverage the benefits from them. You can access to asset management, dashboards, and DCA.</p>
          </article>
          <article className="Product__content__FAQ__article">
            <h4 className="Product__content__FAQ__article__title">What’s the difference between Staking and Delegating?</h4>
            <p>People use staking for all the things that can provide a return on an asset from a determinate source. In fact, we use staking when it comes to interact with a Smart Contract, and loosing the ownership of the asset.</p>
            <p>In PoS (Proof of Stake) blockchains and using a validator, you are not interacting with a Smart Contract but at the protocol level.</p>
            <p>We call it delegating as you are still have the ownership of the asset but only giving the power of Vote from your asset to the validator you are delegating to.</p>
            <p>Then you can ask us why StakeLab instead of DelegateLab... well, you just read it and realise why we guess!</p>
          </article>
        </div>
        <div className="Product__content__illustration">
          <img src={StakeLabIMG} alt="StakeLab logo" />
        </div>

      </div>
    </div>
  )
}