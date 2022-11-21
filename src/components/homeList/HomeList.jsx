import Button from "../button/Button";
import Feature from "../feature/Feature";
import { homeList } from "../../data/data";

const HomeList = () => {
  return (
    <>
      <h1 className="title">What size home are you looking for?</h1>
      <div className="features">
        {homeList.map(({ title, price, icon }) => {
          return (
            <Feature
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
