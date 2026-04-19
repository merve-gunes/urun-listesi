function ProductCard ({isim,fiyat,resim,stokta}){
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

    </div>
 );
}
 



export default ProductCard