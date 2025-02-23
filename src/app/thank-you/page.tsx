"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

export default function ThankYouPage() {
  const router = useRouter();
  const { toast } = useToast();

  const handleShare = async () => {
    await navigator.clipboard.writeText(window.location.origin);
    toast({
      title: "¡Enlace Copiado!",
      description: "Comparte este enlace con tus compañeros de baile.",
    });
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-100 to-rose-100">
      <div className="w-full max-w-md p-8 space-y-8 bg-white rounded-lg shadow-xl text-center">
        <div className="space-y-4">
          <h1 className="text-3xl font-bold text-gray-900">
            ¡Excelente baile! 🎉
          </h1>
          <p className="text-gray-600">
            Has completado tu sesión de práctica de salsa.
          </p>
        </div>

        <div className="space-y-4">
          <Button onClick={handleShare} variant="outline" className="w-full">
            Compartir con amigos
          </Button>
          <Button onClick={() => router.push("/")} className="w-full">
            Bailar de nuevo
          </Button>
        </div>
      </div>
    </main>
  );
}
