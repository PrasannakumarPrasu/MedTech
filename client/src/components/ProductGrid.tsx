import ProductCard from "./ProductCard";

//todo: remove mock functionality
const mockProducts = [
  {
    id: 1,
    name: "Paracetamol 500mg",
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
    name: "Amoxicillin 250mg",
    genericName: "Amoxicillin",
    price: 120,
    originalPrice: 300,
    manufacturer: "PharmaCare",
    prescriptionRequired: true,
  },
  {
    id: 4,
    name: "Vitamin D3 60K",
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
  {
    id: 7,
    name: "Cetirizine 10mg",
    genericName: "Cetirizine HCl",
    price: 35,
    originalPrice: 90,
    manufacturer: "AllerCare",
    prescriptionRequired: false,
  },
  {
    id: 8,
    name: "Azithromycin 500mg",
    genericName: "Azithromycin",
    price: 140,
    originalPrice: 380,
    manufacturer: "MediGen India",
    prescriptionRequired: true,
  },
];

export default function ProductGrid() {
  return (
    <section className="w-full py-8 bg-background">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between mb-6">
          <h2 className="font-serif font-semibold text-2xl md:text-3xl">Popular Medicines</h2>
          <a href="#" className="text-primary font-medium hover:underline" data-testid="link-view-all">
            View All
          </a>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {mockProducts.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
}
