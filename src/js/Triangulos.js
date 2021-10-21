function calcularTriangulos  (ladoA, ladoB, ladoC) {
    if(ladoA == ladoB && ladoC == ladoA ){
        console.log("equilatero")
    }else{ 
        if(ladoA != ladoB && ladoB != ladoC && ladoA != ladoC){
            console.log("escaleno")
        }else{
            console.log("isoceles")
        }
    
      
    }
}
export default calcularTriangulos