console.log("Digite um número que deseja realizar a tabuada:")
process.stdin.on("data", function(data){
    let entrada_usuário = data.toString().trim()

    for(let i = 1; i <= 10; i++){
        let tabuada = i * entrada_usuário
        console.log(entrada_usuário, "x", i, "=", tabuada)
    }
})