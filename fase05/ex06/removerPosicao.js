function removerPosicao(x,y) {
      x.splice(y-1,1)
     return x
    }



console.log(removerPosicao([3,4,5,9,4,7,45],4))