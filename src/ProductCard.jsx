import { useState,useContext } from "react";
import { SepetContext } from "./App";

function ProductCard ({isim,fiyat,resim,stokta}){

    const [adet, setAdet] = useState(0)
    const { sepeteEkle,sepettenCikar } = useContext(SepetContext)

    function arttir(){
        setAdet(adet + 1);
    } 

    function azalt(){
        if(adet > 0){
        setAdet(adet - 1);

        }
    }

 return(
  
    <div>
        <h2>{isim}</h2>
        <p>{fiyat}</p>
        {stokta ? <p>✅ Stokta var</p> : <p>❌ Stokta yok</p>}
    <img
        src={resim}
        alt={isim}
        className="photo"
   />

   { stokta ? 
    <div>
        <button onClick={() => { azalt(); sepettenCikar(); }}>-</button>
        <span>{adet}</span>
        <button onClick={() => { arttir(); sepeteEkle(); }}>+</button>
    </div> 
    : null}

    </div>
 );
}
 
export default ProductCard