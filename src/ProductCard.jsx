import { useState } from "react";

function ProductCard ({isim,fiyat,resim,stokta}){

    const [adet, setAdet] = useState(0)
    function sepeteEkle(){
        setAdet(adet + 1);
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

    { stokta ?<button onClick={sepeteEkle}>Sepete Ekle</button> : null}
    { stokta ? <p>Sepette: {adet}</p> : null}
    </div>
 );
}
 
export default ProductCard