import { createContext, useState } from "react";

export const context = createContext();
const { Provider } = context;

const CustomProvider = ({ children }) => {

    const [points, setPoints] = useState(0);

    const reset = () => setPoints(0);

    const addPoints = (pts) => setPoints(points + pts);

    const ctx = {
        reset,
        addPoints,
        points
    };

    return (
        <Provider value={ctx}>
            {children}
        </Provider>
    );
}

export default CustomProvider;