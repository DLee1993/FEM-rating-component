import { useState } from "react";
import Ratingform from "./components/Ratingform";
import ThankyouMessage from "./components/ThankyouMessage";
const App = () => {
    // eslint-disable-next-line no-unused-vars
    const [messageVisible, setMessageVisible] = useState(false);
    const [starRating, setStarRating] = useState("0");

    return (
        <main className="h-screen flex justify-center items-center">
            <Ratingform setMessageVisible={setMessageVisible} messageVisible={messageVisible} starRating={starRating} setStarRating={setStarRating}/>
            <ThankyouMessage messageVisible={messageVisible} starRating={starRating}/>
        </main>
    );
};

export default App;
