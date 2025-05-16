import { FlatmorphismButton } from "@/components/ui/flatmorphism-button";

export default function FlatmorphismPage() {
  return (
    <div className="container mx-auto py-16 px-4">
      <h1 className="text-4xl font-bold text-center mb-4">Flatmorphism Buttons</h1>
      <p className="text-xl text-gray-600 text-center mb-16">
        These buttons showcase the flatmorphism design style with 3D effects, black outlines, and subtle gradients.
      </p>

      <div className="flex flex-col items-center gap-16">
        {/* First row */}
        <div className="flex flex-wrap justify-center items-center gap-8">
          <FlatmorphismButton size="default">Click</FlatmorphismButton>
          <FlatmorphismButton size="lg">Large Button</FlatmorphismButton>
          <FlatmorphismButton size="sm">Small</FlatmorphismButton>
        </div>

        {/* Second row */}
        <div className="flex flex-wrap justify-center items-center gap-8">
          <FlatmorphismButton variant="circle" size="icon">
            <span className="text-xl">💩</span>
          </FlatmorphismButton>
          <FlatmorphismButton color="blue" size="lg">Custom Color</FlatmorphismButton>
          <FlatmorphismButton color="white" className="border border-gray-200">
            Regular Button
          </FlatmorphismButton>
        </div>

        {/* View more link */}
        <a href="#" className="text-blue-600 hover:underline flex items-center gap-2">
          View More Examples
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </a>
      </div>
    </div>
  );
}
