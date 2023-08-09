import { Link } from "react-router-dom";
import Button from "../../components/Button/Button";
import "./AvailableHomes.css";

const AvailableHomes = () => {
    return (
        <main className="availableHomes">
            <h1>Thank you very much for choosing Custom Home!</h1>

            <p>Here is the property you have selected:</p>
            <h4>Property</h4>
            {/* Add property that has been selected */}

            <p>We will email you all the available homes right away.</p>
            <Link to="/">
                <Button>Go Back</Button>
            </Link>
        </main>
    );
};

export default AvailableHomes;
