import useRequest from "../../utils/request.js";
import { useEffect, useState } from "react";

const Authors = () => {
  const [data, setData] = useState<any>([]);

  const { doRequest, errors } = useRequest({
    onSuccess: (res: any) => {
      console.log("authors", res);
      setData(res);
    },
  });

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    await doRequest(`/user/list`, "get", {});
  };

  return (
    <div
      style={{
        maxWidth: "990px",
        padding: "10px",
        display: "flex",
        color: "#FFFFFF",
      }}
    >
      {data.map((item: any) => (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            textAlign: "center",
            padding:'0px 8px'
          }}
        >
          <img
            src={item.logo ? item.logo : ""}
            alt=""
            width={80}
            height={80}
            style={{
              borderRadius: "5px",
            }}
          />
          <div>{item.name}</div>
        </div>
      ))}
    </div>
  );
};

export default Authors;
