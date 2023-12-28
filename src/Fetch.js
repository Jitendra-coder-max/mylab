// // import React from 'react'

// // const Fetch = () => {
// //   return (
// //     <div>Fetch</div>
// //   )
// // }

// // export default Fetch




// import React, { useState, useEffect } from 'react';

// const Fetch = () => {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     // Function to fetch and extract data
//     const fetchData = async () => {
//       try {
//         const response = await fetch('https://dummyjson.com/products');

//         if (!response.ok) {
//           throw new Error('Network response was not ok');
//         }

//         const data = await response.json();

//         // Extract 'title' and 'price' fields
//         const extractedProducts = data.products.map(product => ({
//           title: product.title,
//           price: product.price,
//         }));

//         setProducts(extractedProducts);
//       } catch (error) {
//         console.error('Error:', error);
//       }
//     };

//     fetchData();
//   }, []);

//   return (
//     <div className="App">
//       <h1>Product List</h1>
//       <ul>
//         {products.map((product, index) => (
//           <li key={index}>
//             <p>Title: {product.title}</p>
//             <p>Price: {product.price}</p>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default Fetch;


// import React, { useEffect, useState } from 'react'

// const Fetch = () => {

//    const [todos, setTodos]  =    useState([])
//   useEffect(()=> {
//     const url ='https://jsonplaceholder.typicode.com/todos'
//     fetch(url)
//     .then(res => res.json())
//     .then(data =>setTodos(data) )
//   },[])
//   return (
//     <div>Fetch
//      <ul>
//       {todos.map((todo) =>  (<li key={todo.id}>

//         <p> Product: {todo.title}</p>
//         <p> Status: {todo.completed  ? 'Yes': 'No'}</p>
//       </li>))}
//      </ul>

//     </div>
//   )
// }

// export default Fetch



// import React, { useEffect, useState } from 'react';


// const Fetch = () => {


//  const [products, setProducts]  =  useState([])

//  useEffect(()=> {
//   const url = 'https://dummyjson.com/products'
//   fetch(url)
//   .then((res) => res.json())
//   .then((data) => setProducts(data.products))// becuase it is object
//  },[])



//   return(
//     <div>Fetch

//       <ul>
//         {products.map((product) => (
//           <li key ={product.id}>
//             <p>Title: {product.title}</p>
//             <p>Price:{product.price}</p>
//             <p>Description:{product.description}</p>
//           </li>
//         ))}
//       </ul>



      
//     </div>
//   )

// }


// export default Fetch;

// import React, { useEffect, useState } from 'react';


// const Fetch = () => {


//  const [products, setProducts]  =  useState([])

//  useEffect(()=> {
//   const url = 'https://dummyjson.com/products'
//   fetch(url)
//   .then((res) => res.json())
//   .then((data) => {
//     if(data.products){
//       setProducts(data.products)
//     }

//     else {
//       console.error("Data not found" , data)
//     }
//   }
//   )
//   .catch((error) => {
//     console.error("Error fetchinf data", error)
//   })
//  },[])



//   return(
//     <div>Fetch

//       <ul>
//         {products.map((product) => (
//           <li key ={product.id}>
//             <p>Title: {product.title}</p>
//             <p>Price:{product.price}</p>
//             <p>Description:{product.description}</p>
//           </li>
//         ))}
//       </ul>



      
//     </div>
//   )

// }


// export default Fetch;



// import React, { useState ,useEffect} from 'react'

// const Fetch = () => {

//     const [users, setUsers] = useState([])

//     useEffect(()=> {
   
//       const fetchData =  async () => {
//               const url = 'https://jsonplaceholder.typicode.com/users'
//                  const res =  await fetch(url)
//                  const data =    await res.json()
//                  setUsers(data)
              
//       }

//       fetchData()   

//     },[])
//   return (
//     <div>
//         <ul>
//           {users.map((user) => (
//             <li key={user.id}>
//               <p> Name: {user.name}</p>
//               <p> email: {user.email}</p>
//               <p> address: {user.address.street}</p>
//               <p> Geo: {user.address.geo.lat}</p>
//             </li>
//           ))}

//         </ul>
//     </div>
//   )
// }

// export default Fetch


// import React, { useEffect, useState } from 'react'

// const Fetch = () => {
//   const [users,setUsers] = useState([])

//   useEffect(() => {

//            const FetchData = async() => {
//              const url = 'https://jsonplaceholder.typicode.com/users'

//            const response = await fetch(url)
//            const data = await response.json()
//            setUsers(data)

//            }

//           //  FetchData()
//   },[])

//   return (
//     <div>Fetch
// <ul>
//   {users.map((user) => (
//     <li> 
//       <p>UserName: {user.username}</p>
//       <p> Email: {user.email}</p>
//       <p> STRREET: {user.address.street}</p>
//     </li>
//   ))}
// </ul>
//     </div>
//   )
// }

// export default Fetch



// import React, { useState } from 'react'

// const Fetch = () => {
//   const [users,setUsers] = useState([])
//              const id = 1;//with parameter
//   // With button click

//            const FetchData = async() => {
//              const url = ` https://jsonplaceholder.typicode.com/users?id=${id}`

//            const response = await fetch(url)
//            const data = await response.json()
//            setUsers(data)

//            }

//   return (
//     <div>Fetch
//       <button onClick={FetchData}> Show list</button>
//       {users.length>0 && (
// <ul>
//   {users.map((user) => (
//     <li> 
//       <p>UserName: {user.username}</p>
//       <p> Email: {user.email}</p>
//       <p> STREET: {user.address.street}</p>

//       <p> Zipcode : {user.address.zipcode}</p>
//     </li>
//   ))}
// </ul>

//   )}
//     </div>
//   )
// }

// export default Fetch




// user input query
// import React, { useState } from 'react'

// const Fetch = () => {
//   const [users,setUsers] = useState([])
//            const FetchData = async(e) => {
//             const query = e.target.value
//              const url = ` https://jsonplaceholder.typicode.com/users?q=${query}`

//            const response = await fetch(url)
//            const data = await response.json()
//            setUsers(data)

//            }

//   return (
//     <div>Fetch
//       <input  onChange = {FetchData} label="Search User"/>
//       {users.length>0 && (
// <ul>
//   {users.map((user) => (
//     <li> 
//       <p>UserName: {user.username}</p>
//       <p> Email: {user.email}</p>
//       <p> STREET: {user.address.street}</p>

//       <p> Zipcode : {user.address.zipcode}</p>
//     </li>
//   ))}
// </ul>

//   )}
//     </div>
//   )
// }

// export default Fetch


// import React, { useEffect, useState } from 'react'
// import axios from 'axios'
// import './Fetch.css'

// const Fetch = () => {
//   const [users,setUsers] = useState([])
//   const [isLoading, setIsLoading] = useState(false)

//   useEffect(() => {
// setIsLoading(true)
//            const FetchData = () => {
//              const url = 'https://jsonplaceholder.typicode.com/users'
                
//                         axios.get(url)
//                         .then(response => setUsers(response.data))
//           //  const response = await axios.get(url)// Async await
//           //   setUsers(response.data) //Async await
//            setIsLoading(false)

//            }

//            FetchData()
//   },[])

//   return (
//     <div>Fetch

//       {isLoading && <p> Loading...</p>}
// <table>
//   <thead>
//     <tr>
//       <th>Name</th>
//       <th>UserName</th>
//       <th> Email</th>
//       <th> City</th>
//     </tr>
//     </thead>
//     <tbody>
//     {users.map(user => (
//       <tr key={user.id}>
//         <td>{user.name}</td>
//         <td>{user.username}</td>
//         <td>{user.email}</td>
//         <td>{user.address.city}</td>
//       </tr>
//     ))}
// </tbody>
// </table>
//     </div>
//   )
// }

// export default Fetch




// import { Button, EditableText } from "@blueprintjs/core"
import { useEffect, useState } from "react"
import "./App.css"

function Fetch() {
  const [users, setUsers] = useState([])

  // const buttonStyle = {
  //   backgroundColor: 'red', // Change the background color to your desired color
  //   color: 'white', // Change the text color
  // };


  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(json => setUsers(json))
  }, [])

  return (
    <div className="App">
      <table class="bp4-html-table .modifier">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Website</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>
                {/* <EditableText value={user.email} /> */}
                {user.email}
              </td>
              <td>
                {/* <EditableText value={user.website} /> */}
                {user.website}
              </td>
              <td>
                {/* <Button intent="primary">Update</Button> */}
                <button id="update" className={styles.update} > Update</button>
                &nbsp;
                {/* <Button intent="danger">Delete</Button> */}
                <button> Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Fetch


