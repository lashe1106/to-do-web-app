import Dashboard from "./components/Dashboard"

const App = () => {
  return (
    <div className="min-h-screen flex  flex-col items-center justify-center bg-gradient-to-br from-purple-500 to-pink-500 text-white">
      <h1 className="text-4xl font-bold">Hello Tailwind + Vite!</h1>
      <Dashboard />  

    </div>
  )
}

export default App
