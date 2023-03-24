//import logo from './logo.svg';
import React,{useState} from 'react'
import './App.css';
import './App.css';
function App() {
  const [result,setResult]=useState("");
 const clickHandler =(event)=>{
 setResult(result.concat(event.target.value)) 
 }
 const clearDisplay=()=>{
  setResult("");
 }
 const calculate=()=>{
  setResult(eval(result).toString());
 }
  return (
    
    <div className="cal-app"> 
      <div className="cal-border">
      <input type="text" placeholder="0" id="answer" value={result}/>
      <input type="button" value="9" className="button" onClick={clickHandler}/>
      <input type="button" value="8"className="button" onClick={clickHandler}/>
      <input type="button" value="7" className="button" onClick={clickHandler}/>
      <input type="button" value="6" className="button" onClick={clickHandler}/>
      <input type="button" value="5" className="button" onClick={clickHandler}/>
      <input type="button" value="4" className="button" onClick={clickHandler}/>
      <input type="button" value="3" className="button" onClick={clickHandler}/>
      <input type="button" value="2" className="button" onClick={clickHandler}/>
      <input type="button" value="1" className="button" onClick={clickHandler}/>
      <input type="button" value="0" className="button" onClick={clickHandler}/>
      <input type="button" value="." className="button" onClick={clickHandler}/>
      <input type="button" value="+" className="button" onClick={clickHandler}/>
      <input type="button" value="-" className="button" onClick={clickHandler}/>
      <input type="button" value="*" className="button" onClick={clickHandler}/>
      <input type="button" value="/" className="button" onClick={clickHandler}/>
      <input type="button" value="%" className="button" onClick={clickHandler}/>
      
      <input type="button" value="clear" className="button button1" onClick={clearDisplay}/>
     
      <input type="button" value="=" className="button button1" onClick={calculate}/>

      <footer class="footer">
    <p class="text">Created with <i class="fa fa-heart"></i> by Anjali </p>
    <p>
        <a href="https://www.linkedin.com/in/anjali-raj-5796a71a7" target="_blank" class="link"> 
            <i class="fa fa-linkedin-square fa-2x" aria-hidden="true"></i>
     
        </a>
        <a href="https://github.com/AnjaliRaj05" target="_blank" class="link">
            <i class="fa fa-github fa-2x" aria-hidden="true"></i>
        </a>
    </p>
</footer>
      </div>
    </div>
  );
}

export default App;
