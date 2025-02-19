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
      title: "Link Copied!",
      description: "Share this link with your dance partners.",
    });
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-100 to-rose-100">
      <div className="w-full max-w-md p-8 space-y-8 bg-white rounded-lg shadow-xl text-center">
        <div className="space-y-4">
          <h1 className="text-3xl font-bold text-gray-900">
            Great Dancing! 🎉
          </h1>
          <p className="text-gray-600">
            You&apos;ve completed your salsa practice session.
          </p>
        </div>

        <div className="space-y-4">
          <Button onClick={handleShare} variant="outline" className="w-full">
            Share with Friends
          </Button>
          <Button onClick={() => router.push("/")} className="w-full">
            Dance Again
          </Button>
        </div>
      </div>
    </main>
  );
}
