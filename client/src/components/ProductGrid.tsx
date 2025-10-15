import ProductCard from "./ProductCard";

//todo: remove mock functionality
const mockProducts = [
  {
    id: 1,
    name: "Paracetamol 500mg Tablets",
    genericName: "Acetaminophen",
    price: 45,
    originalPrice: 120,
    manufacturer: "Generic Pharma Ltd",
    prescriptionRequired: false,
  },
  {
    id: 2,
    name: "Metformin 500mg",
    genericName: "Metformin HCl",
    price: 85,
    originalPrice: 250,
    manufacturer: "MediGen India",
    prescriptionRequired: true,
  },
  {
    id: 3,
    name: "Amoxicillin 250mg Capsules",
    genericName: "Amoxicillin",
    price: 120,
    originalPrice: 300,
    manufacturer: "PharmaCare",
    prescriptionRequired: true,
  },
  {
    id: 4,
    name: "Vitamin D3 60K IU",
    genericName: "Cholecalciferol",
    price: 65,
    originalPrice: 180,
    manufacturer: "Wellness Labs",
    prescriptionRequired: false,
  },
  {
    id: 5,
    name: "Omeprazole 20mg",
    genericName: "Omeprazole",
    price: 95,
    originalPrice: 220,
    manufacturer: "Generic Pharma Ltd",
    prescriptionRequired: false,
  },
  {
    id: 6,
    name: "Atorvastatin 10mg",
    genericName: "Atorvastatin",
    price: 110,
    originalPrice: 350,
    manufacturer: "CardioGen",
    prescriptionRequired: true,
  },
];

export default function ProductGrid() {
  return (
    <div className="px-4 py-4 bg-background">
      <div className="flex items-center justify-between mb-4">
        <h2 className="font-semibold text-lg">Popular Medicines</h2>
        <button className="text-sm text-primary font-medium" data-testid="link-view-all">
          View All
        </button>
      </div>
      <div className="space-y-3">
        {mockProducts.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
}
