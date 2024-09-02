import ProductCart from "./components/product-cart/ProductCart";
import Image from "./assets/images (1).jpg";

function App() {
  // const category = ["بهداشتی،مراقبت از پوست،سرم پوست،مرطوب کننده"];
  const category = ["بهداشتی", "مراقبت از پوست"];
  const feature = ["آبرسان", "رطوبت رسان", "فاقد تست حیوانی"];
  return (
    <div>
      <ProductCart
        img={Image}
        titlePer="سرم آبرسان پوست 40 میل بایومارین"
        titleEng="DETOX Ultra Hydrating Serum 40ml BIOMARINE"
        category={category}
        feature={feature}
        price="450000"
        discount="10"
      />
    </div>
  );
}

export default App;
