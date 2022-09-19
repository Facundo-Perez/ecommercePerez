import data from "../MockData";
import { useParams } from "react-router-dom";
import { useEffect , useState } from "react";
import ItemList from "../ItemList/ItemList";


const ItemListContainer = () =>{

    const {category} = useParams;
    const [ProductList , setProductList] = useState([])
    
    
    useEffect(() => {
      
        getProducts
            .then((response)=>{
                category ? setProductList(response.filter((product)=> product.category === category)) : setProductList(response);
        })
        .catch((error)=> console.log (error));

     }, [category]);
    

    const getProducts =  new Promise((resolve, reject) => {

            setTimeout(()=>{
                resolve(data);
            } , 2000);
        });
    
    return (
        <>
            <ItemList lista={ProductList} />
        </>
    );
};
export default ItemListContainer;
