export const Header = () => {
  //style
  const ttlStyle: {} = {
    color: "blue",
    fontWeight: "bold"
  };

  const subTtl: {} = {
    color: "red",
    fontWeight: "bold"
  };

  // 先に生成されている配列
  let errorHeaders: string[] = [];

  //react hook form
  errorHeaders = ["reportName", "reportRule", "clientName", "accountName"];

  errorHeaders.push("partnerName");
  errorHeaders.push("theme");

  //　後から
  const orderedError: string[] = [
    "reportName",
    "reportRule",
    "theme",
    "partnerName",
    "clientName",
    "accountName"
  ];

  const orderedErrorHeaders = orderedError.filter((v) =>
    errorHeaders.includes(v)
  );

  return (
    <>
      <div>
        <p style={ttlStyle}>並び変える前</p>
        {errorHeaders.map((v, i) => {
          return <li key={i}>{v}</li>;
        })}

        {orderedErrorHeaders && (
          <>
            <p style={subTtl}>並び変えた後</p>
            {orderedErrorHeaders.map((v, i) => {
              return <li key={i}>{v}</li>;
            })}
          </>
        )}
      </div>
    </>
  );
};
