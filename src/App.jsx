import "./App.css"

import { useReducer } from "react"

import ProductCard from "./ProductCard"
const urunler = [
  {
    id:1,
    isim:"Laptop",
    fiyat:999,
    resim:"https://picsum.photos/id/0/200",
    stokta:true
  },{
    id:2,
    isim:"Mouse",
    fiyat:500.90,
    resim:"https://picsum.photos/id/96/200 ",
    stokta:false
},{
    id:3,
    isim:"Iphone",
    fiyat:1110.90,
    resim:"https://picsum.photos/id/160/200",
    stokta:true
}
]

 function sepetReducer(state,action){

  if(action.type=== "EKLE"){
     return state + 1
  }

  if(action.type === "CIKAR"){
    return state - 1
  }


}

function App() {

    const [toplamAdet,dispatch] = useReducer(sepetReducer,0)
    
    function sepeteEkle(){
      dispatch({ type: "EKLE"})
    }
    function sepettenCikar(){
      dispatch({ type: "CIKAR"})
    }

  return (
    <div>
      <h1>Ürün Listesi</h1>
      <p>🛒 Sepetim ({toplamAdet})</p>

      {urunler.map(urun => (
  <ProductCard  key={urun.id} isim={urun.isim} fiyat={urun.fiyat} resim={urun.resim} stokta={urun.stokta} onSepeteEkle={sepeteEkle} onSepettenCikar={sepettenCikar}/>
))}
 
    </div>
  );
}
export default App