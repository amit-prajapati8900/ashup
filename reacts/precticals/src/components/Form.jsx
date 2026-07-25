import React from 'react'
function handeinp(event){
    event.preventDefault();
    console.log("this is the form");
}
function Form() {
  return (<form onSubmit={handeinp}>
        <input type="text" />
        <button>sumbit</button>
    </form>
  )
}

export default Form