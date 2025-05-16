import { FlatmorphismButton } from "@/components/ui/flatmorphism-button";

export default function FlatmorphismPage() {
  return (
    <div className="container mx-auto py-12 space-y-12">
      <div className="space-y-4">
        <h1 className="text-5xl font-bold tracking-tight">Flatmorphism Buttons</h1>
        <p className="text-xl text-muted-foreground">
          Showcase the flatmorphism design style with 3D effects, black outlines, and subtle gradients.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="flex justify-center">
          <FlatmorphismButton size="default">Click</FlatmorphismButton>
        </div>
        <div className="flex justify-center">
          <FlatmorphismButton size="lg">Large Button</FlatmorphismButton>
        </div>
        <div className="flex justify-center">
          <FlatmorphismButton size="sm">Small</FlatmorphismButton>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="flex justify-center">
          <FlatmorphismButton variant="circle" icon={"💩"} />
        </div>
        <div className="flex justify-center">
          <FlatmorphismButton color="beige">Custom Color</FlatmorphismButton>
        </div>
        <div className="flex justify-center">
          <button className="h-14 px-8 bg-white rounded-full border border-gray-200 shadow-sm text-sm font-medium">
            Regular Button
          </button>
        </div>
      </div>

      <div className="flex justify-center pt-8">
        <a href="#" className="text-blue-600 hover:text-blue-800 text-lg font-medium flex items-center gap-2">
          View More Examples <span className="text-xl">→</span>
        </a>
      </div>
    </div>
  );
}
