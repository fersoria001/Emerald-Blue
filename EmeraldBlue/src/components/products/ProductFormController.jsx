import React from 'react'
import { createProduct } from './service/products_service';
import { useMutation, useQueryClient } from '@tanstack/react-query'
import ProductForm from './views/ProductForm';
 

export default function ProductFormController() {
    const addProductMutation = useMutation({
        mutationFn: createProduct, //crea la funcion debe ser invocada luego
        onSuccess: () => {
            queryClient.invalidateQueries('products') //invalidar la anterior y volver a listar
    }
    })
    
    const queryClient = useQueryClient();

    function handleSubmit(e){
        e.preventDefault(e);
        const formData = new FormData(e.target);
        const product = Object.fromEntries(formData);
        addProductMutation.mutate({
            ...product,
            inStock: true
        });
    }

  return (
   <ProductForm handle={handleSubmit} />
  )
}
