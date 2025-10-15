import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Upload, FileText, X } from "lucide-react";
import { useState } from "react";

export default function PrescriptionUpload() {
  const [files, setFiles] = useState<string[]>([]);

  const handleFileUpload = () => {
    //todo: remove mock functionality
    const mockFile = `prescription_${Date.now()}.jpg`;
    setFiles([...files, mockFile]);
    console.log('File uploaded:', mockFile);
  };

  const removeFile = (index: number) => {
    setFiles(files.filter((_, i) => i !== index));
  };

  return (
    <section className="w-full py-12 bg-background">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="font-serif font-semibold text-2xl md:text-3xl mb-3">
            Upload Prescription
          </h2>
          <p className="text-muted-foreground">
            Upload your prescription and get medicines delivered to your doorstep
          </p>
        </div>

        <Card className="p-8">
          <div className="space-y-6">
            <div
              className="border-2 border-dashed border-border rounded-lg p-12 text-center hover-elevate cursor-pointer transition-all"
              onClick={handleFileUpload}
              data-testid="area-file-upload"
            >
              <Upload className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
              <h3 className="font-semibold text-lg mb-2">Click to upload prescription</h3>
              <p className="text-sm text-muted-foreground mb-4">
                PNG, JPG or PDF (max. 10MB)
              </p>
              <Button variant="outline" data-testid="button-browse-files">
                Browse Files
              </Button>
            </div>

            {files.length > 0 && (
              <div className="space-y-3">
                <h4 className="font-semibold">Uploaded Files</h4>
                {files.map((file, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-3 bg-muted rounded-lg"
                    data-testid={`file-item-${index}`}
                  >
                    <div className="flex items-center gap-3">
                      <FileText className="h-5 w-5 text-primary" />
                      <span className="text-sm font-medium">{file}</span>
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => removeFile(index)}
                      data-testid={`button-remove-file-${index}`}
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  </div>
                ))}
              </div>
            )}

            <Button
              className="w-full"
              size="lg"
              disabled={files.length === 0}
              onClick={() => console.log('Prescription submitted')}
              data-testid="button-submit-prescription"
            >
              Continue with Prescription
            </Button>
          </div>
        </Card>
      </div>
    </section>
  );
}
