
// https://stackoverflow.com/questions/12996871/why-does-typeof-array-with-objects-return-object-and-not-array
// const isObject = obj => {
//   const types = ['undefined', 'object', 'boolean', 'number', 'strig', 'function'];

//   if (typeof value === 'object' && !Array.isArray(value)) {
//     throw new Error('Please check yout params');
//   }

//   Object.prototype.toString.call(obj) === '[object Object]';

//   if (typeof value === 'object' && !Array.isArray(value)) {
//     throw new Error('Please check yout params');
//   }
//   return `${key}=${value}`;
// };

// const typeVar = obj => {
//   const types = ['Undefined', 'Object', 'Array', 'Null', 'Boolean', 'Number', 'String', 'Function'];

const typeVar = (value) => {
  const types = [
    { value: '[object Object]', type: 'object' }, 
    { value: '[object Undefined]', type: 'undefined' }, 
    { value: '[object Array]', type: 'array' }, 
    { value: '[object Null]', type: 'null' }, 
    { value: '[object Boolean]', type: 'boolean' }, 
    { value: '[object Number]', type: 'number' }, 
    { value: '[object String]', type: 'string' }, 
    { value: '[object Function]', type: 'function' }, 
  ]

  Object.values(types).filter((item) => {
    if (Object.prototype.toString.call(value) === value) {
      return item.type;
    }

    return  false;
  })
}




//   if (typeof value === 'object' && !Array.isArray(value)) {
//     throw new Error('Please check yout params');
//   }

//   Object.prototype.toString.call(obj) === '[object Object]';

//   if (typeof value === 'object' && !Array.isArray(value)) {
//     throw new Error('Please check yout params');
//   }
//   return `${key}=${value}`;
// };


// const keyValueToString = ([key, value]) => {
//   if (typeof value === 'object' && !Array.isArray(value)) {
//     throw new Error('Please check yout params');
//   }
//   return `${key}=${value}`;
// };

module.exports.queryString = (obj) => {

  //console.log(Object.entries(obj))

  // 1-Example
  // const entries = Object.entries(obj).map(item => {
  //   return `${item[0]}=${item[1]}`
  // }).join('&')

  // 2-Example
  // const entries = Object.entries(obj).map(([key, value]) => {
  //   return `${key}=${value}`
  // }).join('&')

  // 3-Example
  // const entries = Object.entries(obj).map(([key, value]) => `${key}=${value}`).join('&');

  // 4-Example
  const entries = Object.entries(obj).map(([key, value]) => {
    console.log()
    if (typeof value === 'object' &&  !Array.isArray(value)) {
      throw new Error('Please check yout params')
    }

    return `${key}=${value}`;
  }).join('&');
  
  //console.log('entries', entries)
  return entries;

  //return Object.entries(obj).map(keyValueToString).join('&');
}

// export function parse(string) {
//   return Object.fromEntries(
//     string.split('&').map(item => {
//       let [key, value] = item.split('=');

//       if (value.indexOf(',') > -1) {
//         value = value.split(',');
//       }

//       return [key, value];
//     }),
//   );
// }
