import ProductCard from '../ProductCard';

export default function ProductCardExample() {
  return (
    <div className="p-4 max-w-xs">
      <ProductCard
        id={1}
        name="Paracetamol 500mg"
        genericName="Acetaminophen"
        price={45}
        originalPrice={120}
        manufacturer="Generic Pharma Ltd"
        prescriptionRequired={false}
      />
    </div>
  );
}
