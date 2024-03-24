import { useState } from "react"

export default function App(){
  const [password, setPassword] = useState('');
  const [isPassGenerated,setIsPassGenerated] = useState(false);

  const [lowerCase,setLowerCase] = useState(true);
  const [upperCase, setupperCase] = useState(false);
  const [numbers, setNumbers] = useState(false);
  const [symbols, setSymbols] = useState(false);

 const generatePasswordString = (passwordLength: number)
 
 
 
 
 
  const createPassword = (characters:string,passwordLength:number)=>{
    let result = ''
    for(let i =0;i<passwordLength;i++){
      const characterIndex = Math.round(Math.random()*characters.length)
      result += characters.charAt(characterIndex)
    } 
    return result
    
  }

const resetPasswordSets = ()=>{
  setPassword('')
  setIsPassGenerated(false)
  setLowerCase(true)
  setupperCase(false)
  setNumbers(false)
  setSymbols(false)
}



  return(
    <>
    </>
  )
} 