import React from "react";
import Header from "./components/Header";
import IndexPage from "./pages/Index";

function App() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <Header />
      <main className="p-6">
        <IndexPage />
      </main>
    </div>
  );
}

export default App;