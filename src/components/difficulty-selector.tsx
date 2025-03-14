import { Difficulty } from "@/lib/types";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

interface DifficultySelectorProps {
  value: Difficulty;
  onChange: (value: Difficulty) => void;
}

export function DifficultySelector({
  value,
  onChange,
}: DifficultySelectorProps) {
  return (
    <div className="space-y-3">
      <Label className="text-lg font-semibold">Nivel de Dificultad</Label>
      <RadioGroup
        value={value}
        onValueChange={onChange as (value: string) => void}
        className="flex flex-col space-y-2"
      >
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="easy" id="easy" />
          <Label htmlFor="easy">Fácil</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="medium" id="medium" />
          <Label htmlFor="medium">Medio</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="hard" id="hard" />
          <Label htmlFor="hard">Difícil</Label>
        </div>
      </RadioGroup>
    </div>
  );
}
