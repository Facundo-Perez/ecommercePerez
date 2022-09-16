import data from "../MockData";
import { useEffect , useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";



const ItemDetailContainer = () =>{

    const {id} = useParams();
   
    const [ProductDetail , setProductDetail] = useState([])
    
    useEffect(() => {
      
        getDetail.then((response)=>{
            setProductDetail(response);
            
        });

     }, []);
    

    const getDetail =  new Promise((resolve, reject) => {
            setTimeout(()=>{

                resolve(data.find( product => product.id === id));

            } , 2000);
        });
    return (
        <>  
            {ProductDetail 
            ? (<ItemDetail detalle={ProductDetail}/>) 
            
            : (<h3>Generando Detalles...</h3>) 
             }  
        </>
    );
};
export default ItemDetailContainer;
