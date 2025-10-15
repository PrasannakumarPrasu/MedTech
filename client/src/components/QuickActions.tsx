import { Card } from "@/components/ui/card";
import { Upload, MapPin } from "lucide-react";

export default function QuickActions() {
  return (
    <div className="px-4 py-3 bg-background">
      <div className="grid grid-cols-2 gap-3">
        <Card 
          className="p-4 hover-elevate active-elevate-2 cursor-pointer bg-accent/10 border-accent/20"
          onClick={() => console.log('Upload prescription clicked')}
          data-testid="card-upload-prescription"
        >
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
              <Upload className="h-5 w-5 text-accent-foreground" />
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-sm">Upload Rx</h3>
              <p className="text-xs text-muted-foreground">Get medicines</p>
            </div>
          </div>
        </Card>

        <Card 
          className="p-4 hover-elevate active-elevate-2 cursor-pointer"
          onClick={() => console.log('Check delivery clicked')}
          data-testid="card-check-delivery"
        >
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
              <MapPin className="h-5 w-5 text-primary" />
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-sm">Delivery</h3>
              <p className="text-xs text-muted-foreground">Check pincode</p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
