const data= require('./paypalcontraseña.json')

let string = data.data



const substringLongest = () => {

    let largestString = ""
    let n = 2
    
    for(let i=0 ; i<string.length;i++){
        for(let j=i+1; j<n+i;j++){
                let test= string.slice(i,j)
                if(test.length>largestString.length){
                    if(string.slice(j,string.length).includes(test) && test.length>largestString.length ){
                        largestString=test
                        if(largestString.length===(n-1))n++
                        console.log(largestString)
                    }
            }
        }
    }
    return largestString
}
    
    console.log(substringLongest(),substringLongest().length)

