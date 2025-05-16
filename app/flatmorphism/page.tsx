'use client'

import { FlatmorphismButton } from '@/components/ui/flatmorphism-button'

export default function FlatmorphismDemo() {
  return (
    <div className="min-h-screen bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-[800px] mx-auto">
          <h1 className="text-4xl font-bold tracking-tight mb-8 text-center">
            Flatmorphism Button Examples
          </h1>
          
          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h2 className="text-2xl font-semibold mb-6">Standard Buttons</h2>
            <div className="flex flex-wrap gap-6 mb-8">
              <FlatmorphismButton>
                Click
              </FlatmorphismButton>
              
              <FlatmorphismButton size="lg">
                Large Button
              </FlatmorphismButton>
              
              <FlatmorphismButton size="sm">
                Small
              </FlatmorphismButton>
            </div>
            
            <h2 className="text-2xl font-semibold mb-6">Emoji & Custom Buttons</h2>
            <div className="flex flex-wrap gap-6">
              <FlatmorphismButton variant="emoji" size="icon">
                🍎
              </FlatmorphismButton>
              
              <FlatmorphismButton variant="emoji" size="icon">
                💩
              </FlatmorphismButton>
              
              <FlatmorphismButton variant="emoji" size="icon">
                🚀
              </FlatmorphismButton>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-semibold mb-6">Custom Colors</h2>
            <div className="flex flex-wrap gap-6 mb-8">
              <FlatmorphismButton className="bg-[#a7c4d2] border-[#a7c4d2] text-[#0e283a]">
                Blue Variant
              </FlatmorphismButton>
              
              <FlatmorphismButton className="bg-[#a7d2a8] border-[#a7d2a8] text-[#0e3a12]">
                Green Variant
              </FlatmorphismButton>
              
              <FlatmorphismButton className="bg-[#d2a7c4] border-[#d2a7c4] text-[#3a0e28]">
                Purple Variant
              </FlatmorphismButton>
            </div>
            
            <p className="text-gray-600 mt-6">
              These buttons use a design technique called "flatmorphism" - a blend of flat design with subtle 3D effects.
              The style features soft gradients, subtle shadows, and a glossy finish to create depth while maintaining a modern look.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
