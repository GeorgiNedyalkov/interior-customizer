import Feature from "../feature/Feature";
import { homeList } from "../../data/data";

const HomeList = () => {
  return (
    <>
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
    </>
  );
};

export default HomeList;
