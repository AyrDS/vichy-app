import CustomProvider from "./context/Points";
import AppRouter from "./router/AppRouter";

const App = () => {
    return (
        <CustomProvider>
            <AppRouter />
        </CustomProvider>
    );
}

export default App;