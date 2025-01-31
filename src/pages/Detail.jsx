import { useParams } from "react-router-dom";

const Detail = () => {
  const param = useParams();
  console.log("path parameter 로 받은 id =>", param.id);
  return <div>Detail</div>;
};

export default Detail;
