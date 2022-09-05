export const funciones=(numeros,setNumeros)=>{
    const {numero1,numero2}=numeros;
  //const [numeros, setNumeros] = useState(0);
  const handleChange=(e)=>{
    console.log(e.target.value);
    setNumeros({
      ...numeros,
      //numero1:parseFloat(e.target.value),
      //numero2:numeros.numero2
      [e.target.name]:parseFloat(e.target.value),
    });
  };
  // const handleChange2=(e)=>{
  //   console.log(e.target.value);
  //   setNumeros({
  //     numero2:parseFloat(e.target.value),
  //     numero1:numeros.numero1
  //   });  
  // };
  const suma=()=>numero1+numero2;
  const resta=()=>numero1-numero2;
  const multiplicacion=()=>numero1*numero2;
  const division=()=>numero1/numero2;
  return {handleChange,suma,resta,multiplicacion,division};
}