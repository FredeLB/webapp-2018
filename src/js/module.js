// export default function hello() {
//   console.log('Hello from JS Module');
// }

function hello() {
  console.log('Bonjour JS Module');
}

function sup() {
  console.log('Quoi de neuf...');
}

const inc = (x)=>x+3;

export {hello, sup, inc};

function capLettre(string){
    
    //if(typeof string === "string"){
       console.log("string passée dans capLettre() : " + string);
       return string.charAt(0).toUpperCase() + string.slice(1);
       
     //}
     
}