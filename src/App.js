import {BrowserRouter} from "react-router-dom";
import {AuthProvider} from "./context/AuthContext";
import AppWrapper from "./AppWrapper";

const App = () => {
    return (
        <BrowserRouter>
            <AuthProvider>
                <AppWrapper/>
            </AuthProvider>
        </BrowserRouter>
    );
};

export default App;
