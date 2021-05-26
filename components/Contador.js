const Contador = () =>{
    const [contador , setContador] = React.useState(0);

const aumentar = ()=>setContador(contador + 1);
const disminuir = ()=>setContador(contador - 1);
/*
const disminuir = ()=>{
    if(contador <= 0){
        return alert('No puede ser menor que cero')
    }     
    setContador(contador - 1) 
}*/


// en react los eventos despues del on se escriben con UpperCase
    return (
<div>
    <h1 className={contador < 0 ? "menor" : "mayor"}> contador: {contador}</h1> 
    <hr/>
    
    <button  onClick={aumentar}>Aumentar</button>
    <button onClick={disminuir}>Disminuir</button>
</div>    
    )
   
}