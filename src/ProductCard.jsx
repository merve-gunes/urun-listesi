import { useState } from "react";

function ProductCard ({isim,fiyat,resim,stokta,onSepeteEkle,onSepettenCikar}){

    const [adet, setAdet] = useState(0)

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
        <button onClick={() => { azalt(); onSepettenCikar(); }}>-</button>
        <span>{adet}</span>
        <button onClick={() => { arttir(); onSepeteEkle(); }}>+</button>
    </div> 
    : null}

    </div>
 );
}
 
export default ProductCard