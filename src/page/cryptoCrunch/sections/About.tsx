import clsx from "clsx";

export const About = () => {
  const tableData = [
    { id: 1, info: "comulative trading volume to date", value: "~100 Billion" },
    { id: 2, info: "of the global crypto spot trading volume", value: "0.8%" },
    { id: 3, info: "Gravity Teammates (& growing)", value: "~30" },
    { id: 4, info: "leading global & local crypto exchanges", value: "25+" },
  ];
  const tableData2 = [
    { id: 5, info: "start, crypto-native", value: "2017" },
    { id: 6, info: "crypto-asset pairs", value: "1200+" },
    { id: 7, info: "liquidity", value: "24/7" },
    { id: 8, info: "trades done to date", value: "5 billion+" },
  ];
  const aboutText =
    "At Gravity Team, we are on the mission to balance the supply and demand across crypto markets worldwide. We are a crypto native market maker founded by traders, developers, and innovators who are strong believers and supporters of the future of decentralization and digital assets.";

  return (
    <section className="text-white flex flex-col justify-center mx-4 pb-40">
      <h2 className="section-title">About Gravity Team</h2>
      <p className="section-description mt-20">{aboutText}</p>

      <div className="hidden lg:grid grid-cols-1 md:grid-cols-4 items-start mx-44 mt-20">
        {tableData.map((item) => (
          <TableData item={item} />
        ))}

        <span className="gradientBg w-full p-[1px] col-span-4"></span>
        {tableData2.map((item) => (
          <TableData item={item} />
        ))}
      </div>
    </section>
  );
};

const TableData = ({ item }: { item: { id: number; info: string; value: string } }) => {
  return (
    <div
      key={item.id}
      className={clsx(
        "w-56 h-36 flex flex-col justify-center items-center p-2",
        item.id === 2 && "gradientBg",
        item.id === 1 && "rounded-tl-md",
      )}
    >
      <span className="text-2xl font-semibold">{item.value}</span>
      <span className="text-center">{item.info}</span>
    </div>
  );
};
