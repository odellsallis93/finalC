import React, { createContext, useState, useEffect, useCallback } from "react"

export const ProductContext = createContext({
	products: [],
	isLoading: false,
	refetchProducts: () => { },
})

export const ProductContextProvider = ({ children }) => {
	const [products, setProducts] = useState([])
	const [isLoading, setIsLoading] = useState(false)
	const [fetchCount, setFetchCount] = useState(0)

	// Fetch data from local json file
	const refetchProducts = useCallback(async () => {
			try {
				const response = await fetch(`./products.json`)
				const data = await response.json()
				console.log("Data", data)
				setProducts(data)
				return data
			} catch (error) {
				console.error("Error fetching products:", error)
			} finally {
				console.log("finally called");
				setIsLoading(false)
				console.log("loading is", isLoading)
			}
		}, []);

	const fetchProductList = () => {
		console.log("refetching");
			if (products.length > 0) {
				const fetchProducts = async () => {
					const response = await fetch('products.json')
					const data = await response.json()
					console.log("Data2", data)
				}
				fetchProducts()
			}
		}

	useEffect(() => {
		fetchProductList()
	}, []);

	return <ProductContext.Provider value={{ products, isLoading, refetchProducts }}>{children}</ProductContext.Provider>
}
