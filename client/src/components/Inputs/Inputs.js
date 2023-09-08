function Inputs({array, input, setInput}) {
function chengeInp(event){
setInput({...input, [event.target.name]: event.target.value})
}

  const res = array.map((elem, index) => (
    <div key = {index}>
      <input type="text" name={elem} placeholder=  {elem} onChange={chengeInp} />
    </div>
  ));

  return <>{res}</>;
}

export default Inputs;
