import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useState } from "react";

export default function SearchBar() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="px-4 py-3 bg-background">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
        <Input
          type="search"
          placeholder="Search for medicines..."
          className="pl-11 h-12 text-base rounded-full"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          data-testid="input-search"
        />
      </div>
    </div>
  );
}
