import Feature from "../feature/Feature";
import { addOns } from "../../data/data";

const AddOnList = () => {
  return (
    <div className="sidebar-bottom">
      <div className="features">
        {addOns.map(({ title, price, icon }) => {
          return (
            <Feature
              title={title}
              price={`$${price.toLocaleString()}`}
              icon={icon}
            />
          );
        })}
      </div>
    </div>
  );
};

export default AddOnList;
