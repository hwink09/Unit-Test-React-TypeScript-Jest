import '~/App.css'
import { Button } from "~/components/Button/Button"
import { Counter } from '~/components/Counter/Counter'
import { TodoList } from '~/components/TodoList/TodoList'
import { SignUpForm } from '~/components/SignUpForm/SignUpForm'
import { DebounceSearch } from '~/components/DebounceSearch/DebounceSearch'

function App() {

  return (
    <>
      <h2>
        Hello World! HwinkDev - Unit Test: React + TypeScript + Jest - Chuyên nghiệp, nâng cao, như dự án thực tế.
      </h2>
      <h2>
        Unit Test: React + TypeScript + Jest - Chuyên nghiệp, nâng cao, như dự án thực tế.
      </h2>
      <Button content="Click Me" />
      <hr />
      <Counter />
      <hr />
      <h3>Todo List:</h3>
      <TodoList />
      <hr />
      <h3>SignUp Form:</h3>
      <SignUpForm
        onSubmit={(data) => alert(`Submitted: ${JSON.stringify(data)}`)}
      />
      <hr />
      <h3>Debounce Search Users:</h3>
      <DebounceSearch />
    </>
  )
}

export default App
