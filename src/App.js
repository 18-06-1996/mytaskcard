
import './App.css';

function App() {
  
  return (
  <div className='App'>
        <Ners
        title='FREE'
         amount='$0'
         a='✔'
         b='✖'
        
        value1='Single User'
        value2='5GB Storage'
        value3='Unlimited Public Projects'
        value4='Community Access'
        value5='Unlimited Private Projects'
        value6='Dedicated Phone Support'
        value7='Free Subdomain'
        value8='Monthly Status Reports'


       />


        <Ners
        title='PLUS'
        amount='$9'
        c='✔'
         d='✖'

         value1='5 User'
         value2='50GB Storage'
         value3='Unlimited Public Projects'
         value4='Community Access'
         value5='Unlimited Private Projects'
         value6='Dedicated Phone Support'
         value7='Free Subdomain'
         value8='Monthly Status Reports'
 />

        
        <Ners
         title='PRO'
         amount='$49'
         
         e='✔'
         value1='Unlimited User'
         value2='150GB Storage'
         value3='Unlimited Public Projects'
         value4='Community Access'
         value5='Unlimited Private Projects'
         value6='Dedicated Phone Support'
         value7='Unlimited Free Subdomain'
         value8='Monthly Status Reports'/>

   </div>
  );
}

function Ners(props) {
  
  return(
  <div className="Card">
 <h4 className='title'>{props.title}</h4>
 <p><span className='rs'>{props.amount}</span>/month</p>
 <hr></hr>
 
 
  <div className='Box'>
  <p className='line1'><span>{props.a}</span> <span>{props.c}</span> <span>{props.e}</span> {props.value1}</p>
  <p>  <span>{props.a}</span> <span>{props.c}</span>  <span>{props.e}</span> {props.value2}</p>
  <p> <span>{props.a}</span><span>{props.c}</span>  <span>{props.e}</span>  {props.value3}</p>
  <p>  <span>{props.a}</span> <span>{props.c}</span>  <span>{props.e}</span> {props.value4}</p>
  <p>  <span className='man'>{props.b}</span><span>{props.c}</span>  <span>{props.e}</span> {props.value5}</p>
  <p>  <span className='man'>{props.b}</span> <span>{props.c}</span>  <span>{props.e}</span> {props.value6}</p>
  <p>  <span className='man'>{props.b}</span><span>{props.c}</span>  <span>{props.e}</span> {props.value7}</p>
  <p>  <span className='man'>{props.d}</span>  <span className='man'>{props.b}</span> <span>{props.e}</span> {props.value8}</p>
    </div>
    <div className='btm'><button className='btn'>BUTTON</button></div>

  </div>
  );
}





export default App;
