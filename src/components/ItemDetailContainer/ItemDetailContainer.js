import data from "../MockData";
import { useEffect , useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";


const ItemDetailContainer = () =>{
   
    const [ProductDetail , setProductDetail] = useState([])
    
    useEffect(() => {
      
        getDetail.then((response)=>{
            setProductDetail(response)
        });

     }, []);
    

    const getDetail =  new Promise((resolve, reject) => {
            setTimeout(()=>{

                resolve(data.find(()=> data.id === '1'));

            } , 2000);
        });
    return (
        <>
            <ItemDetail detalle={ProductDetail}/>   
        </>
    );
};
export default ItemDetailContainer;
