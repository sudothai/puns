import Question from "./components/Question"
import Button from "./components/Button"
import Answer from "./components/Answer"
import DarkMode from "./components/DarkMode"

const Home = () => {
  return (
    // <main className="grid items-center justify-center mt-10">
    <main className="flex flex-col items-center justify-center h-screen">
      <DarkMode />
      <Question />
      <Button />
    </main>
  )
}

export default Home