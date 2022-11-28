import Button from "../button/Button";
import Feature from "../feature/Feature";
import { addOns } from "../../data/data";

const AddOnList = () => {
  return (
    <div className="sidebar-bottom">
      <h1 className="title">Do you need parking or storage?</h1>
      <div className="feautres">
        {addOns.map(({ title, price, icon }) => {
          return (
            <Feature
              title={title}
              price={`$${price.toLocaleString()}`}
              icon={icon}
            />
          );
        })}
        <Button>See available homes</Button>
      </div>
    </div>
  );
};

export default AddOnList;
