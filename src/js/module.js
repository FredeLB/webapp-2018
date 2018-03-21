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
