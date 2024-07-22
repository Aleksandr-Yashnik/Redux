import Input from "components/Input/Input"
import Counter from "components/Counter/Counter"
import Button from "components/Button/Button"

function Homework15() {
  return (
    <>
      <Input id={""} name={""} label={""} />
      <Counter count={0} onPlus={function (): void {
              throw new Error("Function not implemented.")
          } } onMinus={function (): void {
              throw new Error("Function not implemented.")
          } } />
      <Button name={""} />
    </>
  )
}

export default Homework15
