// import axios from 'axios';

// export default class ProductsService {
//      getProducts() {
//         axios.get('https://formula-test-api.herokuapp.com/menu')
//             .then(res => {
//                 console.log(res);
//                 const products = res.data.map(obj => obj.data);
//                // this.setState({ products });
//                // return products;
//             })
//             // .catch((e) => {
//             //     return [];
//             // });
//       //  return products ? products : [];
//     }
// }



// export default class ProductsService {
//     static getProducts() {
//     fetch('https://formula-test-api.herokuapp.com/menu')
//       .then(response => response.json())
//       .then(data => this.setState({ products: data.data }));
//     }
// }