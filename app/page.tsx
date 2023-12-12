import Question from "./components/Question"
import Button from "./components/Button"
import Answer from "./components/Answer"

const Home = () => {
  return (
    // <main className="grid items-center justify-center mt-10">
    <main className="flex flex-col items-center justify-center h-screen">
      <Question />
      <Button />
    </main>
  )
}

export default Home