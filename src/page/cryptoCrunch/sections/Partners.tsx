import clsx from "clsx";

export const Partners = () => {
  return (
    <section className="h-screen flex flex-col md:flex-row justify-start md:justify-between items-center gap-4 relative mx-4 pt-40">
      <div className="section-title text-white">
        Our Partners <br /> & Friends
      </div>
      <div className="grid grid-cols-2 justify-center items-center gap-8 mt-10">
        {cardsData.map((card) => (
          <div
            className={clsx(
              "bg-gradient-to-b from-[#415572]/50 to-[#1B1B1E] border-blue-100 border rounded-sm p-10 text-white text-center space-y-2 text-sm",
            )}
            key={card.id}
          >
            <img src={card.logo} alt={card.title} />
            <span>{card.title}</span>
          </div>
        ))}
      </div>
      <span className="absolute hidden md:block top-56 left-20">
        <img src={coinImages.mena} alt="mena" />
      </span>
      <span className="absolute hidden md:block top-70 -left-10">
        <img src={coinImages.solana} alt="solana" />
      </span>
      <span className="absolute hidden md:block top-28">
        <img src={coinImages.near} alt="near" />
      </span>
      <span className="bg-[#665DCD]/70 absolute h-60 w-60 blur-3xl top-48 -left-28 hidden md:block" />
    </section>
  );
};

const cardsData = [
  { id: 1, title: "Binance", logo: "/crypto/binance.svg" },
  { id: 2, title: "Bitfinex", logo: "/crypto/bitbank.svg" },
  { id: 3, title: "Bitstamp", logo: "/crypto/coinbase.svg" },
  { id: 4, title: "Bittrex", logo: "/crypto/bitstamp.svg" },
];

const coinImages = {
  mena: "/crypto/mena.svg",
  solana: "/crypto/solana.svg",
  near: "/crypto/near.svg",
};
