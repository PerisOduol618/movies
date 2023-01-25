import './App.css'

const Person = (props) => {
  return(
  <>
  <h2>Name: {props.name} </h2>
  <h2>Last Name: {props.lastName}</h2>
  <h2>Age: {props.age}</h2>
  </>
  )
}

const App = () => {

  return (
    <div className="App">
      <Person name='Kevin'lastName='Doe' age='16' /> <br /> 
      <Person name='Alice'  lastName='Mash' age={4+8}/>  <br />

    </div>
  )
}

export default App
