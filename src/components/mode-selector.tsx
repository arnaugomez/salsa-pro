import { DanceMode } from "@/lib/types";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

interface ModeSelectorProps {
  value: DanceMode;
  onChange: (value: DanceMode) => void;
}

export function ModeSelector({ value, onChange }: ModeSelectorProps) {
  return (
    <div className="space-y-3">
      <Label className="text-lg font-semibold">Modo de Baile</Label>
      <RadioGroup
        value={value}
        onValueChange={onChange as (value: string) => void}
        className="flex flex-col space-y-2"
      >
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="single" id="single" />
          <Label htmlFor="single">Individual</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="couple" id="couple" />
          <Label htmlFor="couple">Pareja</Label>
        </div>
      </RadioGroup>
    </div>
  );
}
