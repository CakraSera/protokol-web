import { Button } from "@/components/ui/button";
import "./App.css";
import { useState } from "react";

function App() {
  const [count, setCount] = useState<number>(0);
  return (
    <div className="flex min-h-svh flex-col items-center justify-center">
      <h1 className="text-2xl font-bold text-red-950">Total:${count}</h1>
      <Button onClick={() => setCount(count + 1)}>Click me</Button>
    </div>
  );
}

export default App;
