import { Card } from "@/components/ui/card";
import { GlassIcons } from "@/components/icons";
import { useLocation } from "wouter";

export default function QuickActions() {
  const [, setLocation] = useLocation();

  return (
    <div className="px-4 py-3">
      <div className="grid grid-cols-2 gap-4">
        <Card 
          className="p-4 backdrop-blur-lg bg-white/80 border-white/20 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer hover:scale-105"
          onClick={() => setLocation('/upload')}
          data-testid="card-upload-prescription"
        >
          <div className="flex items-center gap-3">
            <GlassIcons.Upload variant="accent" size="md" />
            <div className="flex-1">
              <h3 className="font-semibold text-sm text-gray-800">Upload Rx</h3>
              <p className="text-xs text-gray-600">Get medicines</p>
            </div>
          </div>
        </Card>

        <Card 
          className="p-4 backdrop-blur-lg bg-white/80 border-white/20 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer hover:scale-105"
          onClick={() => console.log('Check delivery clicked')}
          data-testid="card-check-delivery"
        >
          <div className="flex items-center gap-3">
            <GlassIcons.MapPin variant="primary" size="md" />
            <div className="flex-1">
              <h3 className="font-semibold text-sm text-gray-800">Delivery</h3>
              <p className="text-xs text-gray-600">Check pincode</p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
