# 🛒 Ürün Listesi - React Öğrenme Projesi

Bu proje, React öğrenme sürecimde yaptığım ilk projedir. Temel React kavramlarını pekiştirmek amacıyla geliştirilmiştir.

## 🚀 Proje Hakkında

Ürünlerin listelendiği, stok durumunun gösterildiği basit bir ürün listesi uygulaması.

## 📚 Bu Projede Öğrendiklerim

### ⚛️ React Bileşenleri
Yeniden kullanılabilir `ProductCard` bileşeni oluşturdum. Her bileşen kendi içinde bağımsız çalışıyor.

### 🎁 Props
Bileşenlere dışarıdan `isim`, `fiyat`, `resim` ve `stokta` verilerini props ile ilettim.

### ✍️ JSX
JavaScript içinde HTML benzeri yapılar yazmayı öğrendim. Süslü parantezler `{}` ile JavaScript ifadelerini JSX içinde kullandım.

### 📤 Import / Export
Bileşenleri ayrı dosyalara böldüm ve `import`/`export` ile birbirine bağladım.

### ❓ Koşullu Render
Stok durumuna göre `✅ Stokta var` veya `❌ Stokta yok` gösterdim.
```jsx
{stokta ? <p>✅ Stokta var</p> : <p>❌ Stokta yok</p>}
```

### 🗂️ map() ile Liste Oluşturma
Ürün dizisini `map()` ile döngüye alarak her ürün için otomatik `ProductCard` oluşturdum.
```jsx
{urunler.map(urun => (
  <ProductCard key={urun.id} isim={urun.isim} fiyat={urun.fiyat} resim={urun.resim} stokta={urun.stokta} />
))}
```

### 🔑 key Prop'u
`map()` içindeki her bileşene benzersiz `key` vererek React'in listeyi doğru yönetmesini sağladım.

## 🛠️ Kullanılan Teknolojiler

- React 19
- Vite
- JavaScript (JSX)

## ▶️ Projeyi Çalıştırma

```bash
npm install
npm run dev
```
