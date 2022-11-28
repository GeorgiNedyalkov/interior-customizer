import Button from "../button/Button";
import Feature from "../feature/Feature";
import { homeList } from "../../data/data";
import Sidebar from "../sidebar/Sidebar";

const HomeList = () => {
  return (
    <>
      <h1 className="title">What size home are you looking for?</h1>
      <p className="description">Select all that apply.</p>
      <div className="features">
        {homeList.map(({ id, title, price, icon }) => {
          return (
            <Feature
              key={id}
              title={title}
              price={`$${price.toLocaleString()}`}
              icon={icon}
            />
          );
        })}
      </div>
      <Button>Continue</Button>
    </>
  );
};

export default HomeList;
