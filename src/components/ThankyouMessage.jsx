import thankyou from "../../images/illustration-thank-you.svg";
import PropTypes from "prop-types";

//- make sure to add the starRating to props - use the value and add it to the thank you message
const ThankyouMessage = ({ messageVisible, starRating }) => {
    return (
        <div
            className={
                messageVisible
                    ? "w-[400px] h-[400px] flex justify-evenly items-center flex-col rounded-3xl px-6 bg-darkBlue/60"
                    : "hidden"
            }
        >
            <img src={thankyou} alt="thank you icon" className="w-38"/>
            <span
                id="starRatingPill"
                className="bg-lightGray/10 text-orange px-4 py-2 rounded-full"
            >
                You selected {starRating} out of 5
            </span>
            <h1 className="text-2xl">Thank you!</h1>
            <p className="text-lightGray text-center max-w-[97%]">
                We appreciate you taking the time to give a rating. If you ever need more support,
                don&apos;t hesitate to get in touch!
            </p>
        </div>
    );
};

ThankyouMessage.propTypes = {
    messageVisible: PropTypes.bool,
    starRating: PropTypes.string,
};

export default ThankyouMessage;
