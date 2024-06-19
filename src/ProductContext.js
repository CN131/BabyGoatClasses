import React, { createContext, useState, useEffect } from "react"
import axios from "axios"

export const ProductContext = createContext()
 
export const ProductProvider = (props) => {
  const [products, setProducts] = useState([])
  const productUrl = 'http://localhost:3001/products'

  useEffect(() => {
    async function getProducts() {
      await refreshProducts()
    }
    getProducts()
  }, []);

  function refreshProducts() { //changes
  console.log('no changes')
    return axios.get(productUrl)
      .then(response => {
        setProducts(response.data)
      })
  } 

  // function searchProduct(extension) {
  //   console.log(`Context: ${extension}`)
  //   return axios.get(productUrl, extension)
  //   .then(response => {
  //     setProducts(response.data)})
  // }

  function getProduct(id) {
    return axios.get(`${productUrl}/${id}`) 
      .then(response =>
        new Promise((resolve) => resolve(response.data))
      )
      .catch((error) =>
        new Promise((_, reject) => reject(error.response.statusText))
      )
  }
  function deleteProduct(id) {
    axios.delete(`${productUrl}/${id}`)
      .then(refreshProducts)
  }
  
  function addProduct(product) {
    return axios.post(productUrl, product)
    .then(response => {
      refreshProducts()
      return new Promise((resolve) => resolve(response.data))
    })
  }

  function updateProduct(product) {
    return axios.put(`${productUrl}/${product.id}`, product)
    .then(response => {
      refreshProducts()
      return new Promise((resolve) => resolve(response.data))
    })
  }

  function filterProducts(param) {
    return axios.get(`${productUrl}/?q=${param}`).then((response) => {
      return new Promise((resolve) => resolve(response.data))
    })
  }

  return (
    <ProductContext.Provider
      value={{
        products,
        // searchProduct,
        getProduct,
        deleteProduct,
        addProduct,
        updateProduct,
        filterProducts
      }}
    >
      {props.children}
    </ProductContext.Provider>
  )
}