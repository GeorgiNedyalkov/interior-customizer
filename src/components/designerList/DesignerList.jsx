import { designerList } from "../../data/data";
import Feature from "../feature/Feature";
import Button from "../button/Button";

const DesignerList = () => {
  return (
    <>
      <h1 className="title">Who is your preferred designer?</h1>
      <p className="description">
        Choose Nabr’s design, which you can make your own with custom features,
        or premium packages from world-class designers. Furnishings not
        included.
      </p>

      <div className="features">
        {designerList.map((designer) => {
          return (
            <Feature
              title={designer.title}
              price={designer.type}
              comingSoon={false}
            />
          );
        })}
      </div>
      <Button>Continue</Button>
    </>
  );
};

export default DesignerList;
