import "./App.css";
import YouTubeForm from "./components/formHookDemo/YouTubeForm";

// import YouTubeForm from "./components/formHookDemo/YouTubeForm";
import UseCallbackClickDemoParent from "./components/useCallbackDemo/UseCallbackClickDemoParent";
import UseContextParent from "./components/useContextDemo/UseContextParent";
import UseMemoDemo from "./components/useMemoDemo/UseMemoDemo";

function App() {
  return (
    <div className="App">
      {/* <UseCallbackClickDemoParent /> */}

      <YouTubeForm />
      {/* <UseContextParent /> */}
      {/* <UseMemoDemo /> */}
    </div>
  );
}

export default App;
