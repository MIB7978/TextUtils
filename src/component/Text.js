import React ,{useState} from 'react'

export default function Text(props) {
    
    const handleUpClick = ()=>{
       let s = text.toUpperCase();
       setText(s);
       props.showAlert('change to uppercase','success')
    }
    const handleLoClick = ()=>{
       let s = text.toLowerCase();
       setText(s);
       props.showAlert('change to lowercase','success')
    }
    const handleCleClick = ()=>{
       let s = "";
       setText(s);
       props.showAlert('message cleared','success')
    }
   
    const handleChange = (event)=>{
       console.log("letter change")
       setText(event.target.value)
    }
   
  const [text, setText] = useState('')
   
    return (
    <>
        <div className='container my-5 ' style={props.Mode==='light'?{color:'black'}:{color:'white'}}>
            <div className="mb-3">
                <h1>Enter the text to analyze below </h1>
                <textarea className="form-control  mt-3" style={props.Mode==='light'?{backgroundColor:'white'}:{backgroundColor:'gray'}} value={text} id="exampleFormControlTextarea1" onChange={handleChange} rows="12"></textarea>
            </div>
            <div className='container'>
            <button className='btn btn-primary mx-3' onClick={handleUpClick} >uppercase</button>
            <button className='btn btn-primary mx-3' onClick={handleLoClick} >lowercase</button>
            <button className='btn btn-primary mx-3' onClick={handleCleClick} >Clear</button>
            </div>
            
      <h3 className='my-3'>Text Summary</h3>
      <p>{text.split(" ").length} words and {text.length} are characters</p>
      <p>{0.008*text.split(" ").length} miniutes to read</p>
     
     <h2 className='my-3 '>Preview</h2>
     <p>{text}</p>
      
        </div>
    


        </>
    )
}
