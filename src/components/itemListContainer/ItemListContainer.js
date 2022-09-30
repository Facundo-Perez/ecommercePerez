
import { useParams } from "react-router-dom";
import { useEffect , useState } from "react";
import ItemList from "../ItemList/ItemList";
import {getFirestore , getDocs , collection} from 'firebase/firestore';


const ItemListContainer = () =>{

    const {category} = useParams();
    const [ProductList , setProductList] = useState([])
    
    
    useEffect(() => {   
        getProducts();
     }, [category]);
    

    const getProducts = () => {
        const db = getFirestore();
        const querySnapshot = collection(db , 'products' );
          getDocs(querySnapshot).then((res) => {
            const data = res.docs.map((doc) => {
                return {id: doc.id, ...doc.data()};
            });
            setProductList(data);
          })
          .catch((error) => console.log(error));
        };
    
    return (
        <>
            <ItemList lista={ProductList} />
        </>
    );
};
export default ItemListContainer;
