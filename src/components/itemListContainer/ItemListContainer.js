
import { useParams } from "react-router-dom";
import { useEffect , useState } from "react";
import ItemList from "../ItemList/ItemList";
import {getFirestore , getDocs , collection , query, where} from 'firebase/firestore';


const ItemListContainer = () =>{

    const {category} = useParams();
    const [ProductList , setProductList] = useState([]);
    
    const getProducts = () => {
        const db = getFirestore();
        const querySnapshot = collection(db , 'product' );
         


        if(category){
            const queryFilter = query(querySnapshot , where('category' , '==', category));
            getDocs(queryFilter)
            .then((res) => {
                console.log('response',res.docs);
                const data = res.docs.map((doc) => {
                    return {id: doc.id, ...doc.data()};
                });
                setProductList(data);
              })
            .catch((error) => console.log(error));
        }
        else{
            getDocs(querySnapshot)
            .then((res) => {
            const data = res.docs.map((doc) => {
                return {id: doc.id, ...doc.data()};
            });
                setProductList(data);
          })
            .catch((error) => console.log(error));
        }
          
        };
      

        useEffect(() => {   
            getProducts();
         }, [category]);
        
     return (
        <>
            <ItemList lista={ProductList} />
        </>
    );
};
export default ItemListContainer;
