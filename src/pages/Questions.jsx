import { Checkbox } from "@/components/ui/checkbox"
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSeparator,
  FieldSet,
} from "@/components/ui/field"
import { Button } from "@/components/ui/button"
import questions from "../questions.json"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
//w-full max-w-xs
import Result from "./Result"
export default function FieldCheckbox() {
  
  const [qNum,setQNum] = useState(0)
  const navigate = useNavigate()
  const [selected,setSelected] = useState(null)
  const [score,setScore] = useState(0)
  return (
    <FieldGroup className="flex items-center justify-center min-h-screen bg-purple-800 ">
      <div className="bg-white p-7 rounded-3xl">
        <FieldSet >
          <FieldLegend variant="label">
            Q. {questions[qNum].question}
          </FieldLegend>
          <FieldDescription>
            Select the most appropriate option
          </FieldDescription>
          <FieldGroup className="gap-3">
              
              {questions[qNum].options.map((option,index) => (
              <>
                <Field key={index} orientation="horizontal">
                  <Checkbox id={`option-${index}`} 
                  checked={selected === option}
                  onCheckedChange={() => setSelected(option)}
                  />
                  <FieldLabel
                    htmlFor={`option-${index}`}
                    className="font-normal"
                    
                  >
                    {option}
                  </FieldLabel>
                </Field>
                  
               
              </> 
              ))}


          </FieldGroup>
        <Button variant="outline" size="sm" onClick={() => {
          let newScore = score

          if (selected === questions[qNum].correctAnswer) {
            newScore = score + 1
            setScore(newScore)
          }

          if (qNum === questions.length - 1) {
            navigate('/result', { state: { score: newScore } })
          } else {
            setQNum(qNum + 1)
            setSelected(null)
          }
}} className="w-full bg-purple-950 text-amber-50">
            SUBMIT
          </Button>
        </FieldSet>
      </div>

    </FieldGroup>
  )
}
