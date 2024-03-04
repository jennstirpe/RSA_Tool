import { useState, useRef } from 'react'
import './App.css'

 /* 
 Current keys:
 p = 3
 q = 11
 e = 3
 */

function App() {
  const [resultString, setResultString] = useState("");
  const encryptString = useRef();
  const decryptString = useRef();
  const encryptionPairs = useState({"A": "01", "B": "08", "C": "27", "D": "31", "E": "26", "F": "18", "G": "13", "H": "17", "I": "03", "J": "10", "K": "11", "L": "12", "M": "19", "N": "05", "O": "09", "P": "04", "Q": "29", "R": "24", "S": "28", "T": "14", "U": "21", "V": "22", "W": "23", "X": "30", "Y": "16", "Z": "20"});

  function encrypt() {
    let message = encryptString.current.value.toUpperCase();
    let encryptedMessage = "";

    for(const letter of message) {
      if (letter === " ") {
        encryptedMessage += "32 ";
      } else {
        for(const key in encryptionPairs[0]) {
          if (key === letter) {
            encryptedMessage += encryptionPairs[0][key] + " ";
          }
        }
      }
    }
    setResultString(encryptedMessage);
  }

  function decrypt() {
    let message = decryptString.current.value.toString().split(" ");
    let decryptedMessage = "";

    for(let num of message) {
      if(num.length == 1) {
        num = "0" + num; // all encryptions are 2 digits
      }
      if (num === "32") {
        decryptedMessage += " "
      } else {
        for(const key in encryptionPairs[0]) {
          if(encryptionPairs[0][key] === num) {
            decryptedMessage += key;
          }
        }
      }    
    }
    setResultString(decryptedMessage);
  }

  return (
    <>
      <h1>RSA Cryptography Tool</h1>
      
      <div id="encryption">
        <input ref={encryptString} type="text" placeholder="Enter string to encrypt"/>
        <button onClick={() => encrypt()}>Encrypt</button>

      </div>
      <div id="decryption">
        <input ref={decryptString} type="text" placeholder="Enter string to encrypt"/>
        <button onClick={() => decrypt()}>Decrypt</button>
      </div>

      <div>
        {
          resultString ? <p>{resultString}</p> : null
        }
      </div>
    </>
  )
}

export default App
