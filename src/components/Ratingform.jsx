import { useEffect } from "react";
import PropTypes from "prop-types";

//- make sure to add the setStarRating to props
const Ratingform = ({ messageVisible, setMessageVisible, starRating, setStarRating }) => {
    useEffect(() => {
        const ratingSelector = document.getElementById("ratingSelector");

        ratingSelector.addEventListener("click", (e) => {
            setStarRating(e.target.value);
        });
    });

    const toggleVis = () => {
        setMessageVisible(true);
    };

    const submitRating = (e) => {
        e.preventDefault();
        if (starRating === "0") return;
        toggleVis();
    };

    return (
        <div
            className={
                messageVisible
                    ? "hidden"
                    : "w-[400px] h-[400px] flex justify-evenly items-start flex-col rounded-3xl px-6 pt-6 bg-darkBlue/60"
            }
        >
            <section id="ratingFormText" className="flex justify-evenly items-start flex-col h-1/2">
                <h2 className="text-4xl font-bold text-center sr-only">Form text</h2>
                <figure className="bg-lightGray/10 p-2 rounded-3xl w-10 h-10 flex justify-center items-center">
                    <svg width="17" height="16" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="m9.067.43 1.99 4.031c.112.228.33.386.58.422l4.45.647a.772.772 0 0 1 .427 1.316l-3.22 3.138a.773.773 0 0 0-.222.683l.76 4.431a.772.772 0 0 1-1.12.813l-3.98-2.092a.773.773 0 0 0-.718 0l-3.98 2.092a.772.772 0 0 1-1.119-.813l.76-4.431a.77.77 0 0 0-.222-.683L.233 6.846A.772.772 0 0 1 .661 5.53l4.449-.647a.772.772 0 0 0 .58-.422L7.68.43a.774.774 0 0 1 1.387 0Z"
                            fill="#FC7614"
                        />
                    </svg>
                </figure>
                <section>
                    <h2 className="text-[27px] font-bold mt-8">How did we do?</h2>
                    <p className="text-lightGray mt-2">
                        Please let us know how we did with your support request. All feedback is
                        appreciated to help us improve our offering!
                    </p>
                </section>
            </section>
            <form
                onSubmit={submitRating}
                className="flex justify-evenly items-center flex-col w-full h-1/2"
            >
                <fieldset className="flex justify-between items-center w-full" id="ratingSelector">
                    <div className="w-fit relative flex justify-center items-center rounded-full">
                        <input
                            type="radio"
                            id="rating-1"
                            name="starRating"
                            value="1"
                            className="w-12 h-12 appearance-none cursor-pointer hover:bg-orange transition-colors duration-200"
                        />
                        <label
                            htmlFor="rating-1"
                            className="w-full h-full flex justify-center items-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full text-lightGray hover:text-white transition-colors duration-200 cursor-pointer"
                        >
                            1
                        </label>
                    </div>
                    <div className="w-fit relative flex justify-center items-center rounded-full">
                        <input
                            type="radio"
                            id="rating-2"
                            name="starRating"
                            value="2"
                            className="w-12 h-12 appearance-none cursor-pointer hover:bg-orange transition-colors duration-200"
                        />
                        <label
                            htmlFor="rating-2"
                            className="w-full h-full flex justify-center items-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full text-lightGray hover:text-white transition-colors duration-200 cursor-pointer"
                        >
                            2
                        </label>
                    </div>
                    <div className="w-fit relative flex justify-center items-center rounded-full">
                        <input
                            type="radio"
                            id="rating-3"
                            name="starRating"
                            value="3"
                            className="w-12 h-12 appearance-none cursor-pointer hover:bg-orange transition-colors duration-200"
                        />
                        <label
                            htmlFor="rating-3"
                            className="w-full h-full flex justify-center items-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full text-lightGray hover:text-white transition-colors duration-200 cursor-pointer"
                        >
                            3
                        </label>
                    </div>
                    <div className="w-fit relative flex justify-center items-center rounded-full">
                        <input
                            type="radio"
                            id="rating-4"
                            name="starRating"
                            value="4"
                            className="w-12 h-12 appearance-none cursor-pointer hover:bg-orange transition-colors duration-200"
                        />
                        <label
                            htmlFor="rating-4"
                            className="w-full h-full flex justify-center items-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full text-lightGray hover:text-white transition-colors duration-200 cursor-pointer"
                        >
                            4
                        </label>
                    </div>
                    <div className="w-fit relative flex justify-center items-center rounded-full">
                        <input
                            type="radio"
                            id="rating-5"
                            name="starRating"
                            value="5"
                            className="w-12 h-12 appearance-none cursor-pointer hover:bg-orange transition-colors duration-200"
                        />
                        <label
                            htmlFor="rating-5"
                            className="w-full h-full flex justify-center items-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full text-lightGray hover:text-white transition-colors duration-200 cursor-pointer"
                        >
                            5
                        </label>
                    </div>
                </fieldset>
                <button className="bg-orange hover:bg-white text-white hover:text-orange transition-colors duration-200 rounded-3xl w-full h-[44px] uppercase tracking-widest font-bold">
                    submit
                </button>
            </form>
        </div>
    );
};

Ratingform.propTypes = {
    messageVisible: PropTypes.bool,
    setMessageVisible: PropTypes.func,
    starRating: PropTypes.string,
    setStarRating: PropTypes.func,
};

export default Ratingform;
