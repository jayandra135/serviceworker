import Home from "./components/Home";
import DemoComponent from "./components/Demo";
import TodoComp from "./components/TodoComp";
import DebounceComp from "./components/DebounceComp";
import SelectDropDown from "./components/SelectDropDown";
export default function HomePage() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      {/* <Home /> */}
      {/* <DemoComponent /> */}
      {/* <TodoComp /> */}
      {/* <DebounceComp /> */}

      <SelectDropDown />
    </div>
  );
}
