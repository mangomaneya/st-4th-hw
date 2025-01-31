import { Link, useLocation } from "react-router-dom";

const Home = () => {
  // const navigate = useNavigate(); //버튼에 navigate("url주소")로 활용 가능
  const location = useLocation();
  // console.log('navigate', navigate);
  console.log("location", location); // 현재 pathname확인 가능

  return (
    <div>
      Home
      <Link to="/detail">디테일로 이동</Link>
    </div>
  );
};

export default Home;
