import FirstComponent,{FifthComponent} from "./learning-examples/FirstComponent";
import SecondComponent from "./learning-examples/SecondComponent";
import ThirdComponent from "./learning-examples/ThirdComponent";

export default function LearningComponents() {
    return (
        <div className="App">
            <FirstComponent />
            <SecondComponent />
            <ThirdComponent />
            <FifthComponent />
        </div>
    );
}