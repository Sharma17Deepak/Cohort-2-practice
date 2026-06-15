import {
  RecoilRoot,
  useRecoilValue,
  useRecoilState,
  useSetRecoilState,
} from "recoil";
import { countAtom, evenSelector } from "./store/atoms/count";

function App() {
  return (
    <div>
      <RecoilRoot>
        <Count />
      </RecoilRoot> 
    </div>
  );
}

function Count() {
  return (
    <div>
      <CountRenderer />
      <Buttons />
      <EvenCount/>
    </div>
  );
}

function EvenCount() {
  const count = useRecoilValue(evenSelector);
  return(
    <>
      {count ? `It is even` : null }
    </>
  );
}

function CountRenderer() {
  const count = useRecoilValue(countAtom);
  return (
  <div>{count}</div>
  );
}

function Buttons() {
  const setCount = useSetRecoilState(countAtom);

  return (
    <div>
      <button
        onClick={() => {
          setCount(count => count + 1);
        }}
      >
        Increase
      </button>

      <button
        onClick={() => {
          setCount(count => count - 1);
        }}
      >
        Decrease
      </button>
    </div>
  );
}

export default App;
