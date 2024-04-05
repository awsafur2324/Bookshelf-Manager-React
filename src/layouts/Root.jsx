import { Outlet, useNavigation } from "react-router-dom";
import Header from "../component/header/Header";
import { MutatingDots } from "react-loader-spinner";
const Root = () => {
  const loader = useNavigation();
  return (
    <div>
      <Header />
      {loader.state == "loading" ? (
        <div className="absolute top-[49%] left-[49%] ">
          <MutatingDots
            visible={true}
            height="100"
            width="100"
            color="#4fa94d"
            secondaryColor="#4fa94d"
            radius="12.5"
            ariaLabel="mutating-dots-loading"
            wrapperStyle={{}}
            wrapperClass=""
          />
        </div>
      ) : (
        <Outlet />
      )}
    </div>
  );
};

export default Root;
