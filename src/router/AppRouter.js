import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom"
import Finish from "../components/Finish";
import Form from "../components/Form";
import Question1 from "../components/trivia/Question1";
import Question2 from "../components/trivia/Question2";
import Question3 from "../components/trivia/Question3";
import Welcome from "../components/Welcome";

const AppRouter = () => {
    return (
        <Router>
            <div>
                <Switch>
                    <Route exact path="/" component={Welcome} />
                    <Route exact path="/question1" component={Question1} />
                    <Route exact path="/question2" component={Question2} />
                    <Route exact path="/question3" component={Question3} />
                    <Route exact path="/form" component={Form} />
                    <Route exact path="/form/:valid" component={Finish} />
                    <Redirect to="/" /> 
                </Switch>
            </div>
        </Router>
    );
}

export default AppRouter;