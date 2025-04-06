import React from 'react';
import { Clock, MapPin, Phone, History, Leaf, Heart } from 'lucide-react';

export default function About() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">About Lucille Smith</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Preserving tradition and crafting beauty through sweetgrass basketry for over six decades.
        </p>
      </div>

      {/* Artist Story */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-24">
        <div className="relative aspect-square">
          <img
            src="https://static.wixstatic.com/media/c73eb8_ec322889076447f6b11d930549fc53e6~mv2.jpg"
            alt="Lucille Smith"
            className="rounded-lg shadow-xl object-cover w-full h-full"
          />
        </div>
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">My Story</h2>
          <div className="prose prose-lg text-gray-600">
            <p className="mb-4">
              My journey in sweetgrass basketry began at the tender age of 5, under the patient guidance
              of my grandmother. For over 65 years, I've dedicated myself to preserving and evolving
              this cherished art form.
            </p>
            <p className="mb-4">
              Each basket I create carries within it the stories, traditions, and techniques passed
              down through generations of skilled artisans in our community.
            </p>
            <p>
              Today, I continue to craft these unique pieces with the same passion and attention to
              detail that my grandmother instilled in me, ensuring that this beautiful tradition
              lives on for future generations.
            </p>
          </div>
        </div>
      </div>

      {/* Historical Background */}
      <div className="bg-amber-50 rounded-lg p-12 mb-24">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center mb-8">
            <History className="h-8 w-8 text-amber-600 mr-4" />
            <h2 className="text-3xl font-bold text-gray-900">A Rich Cultural Heritage</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-6 text-gray-600">
              <p>
                The coiled sweetgrass basket stands as a powerful symbol of African cultural heritage,
                deeply rooted in agriculture, transport, and survival across the Atlantic Ocean.
                Brought by skilled artisans from the West Windward or Rice Coast of West Africa,
                this craft carries centuries of knowledge and tradition.
              </p>
              <p>
                Dating back to the late 17th century in South Carolina, coiled basketry is one of
                the oldest African crafts in America. The first Lowcountry baskets were fanner
                baskets, essential tools in rice production and processing. These baskets played
                a vital role in planting and harvesting coastal money crops – rice, cotton, and more.
              </p>
              <p>
                The materials used in our baskets – bulrush, sweetgrass, and split oak – are not
                just practical choices but carry deep cultural significance. These ancient plants,
                mentioned in the Bible and prevalent in Africa, provided a treasured connection
                to the homeland for displaced Africans in the Lowcountry.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://static.wixstatic.com/media/c73eb8_8224fa5576e14ed8bc4498df4b5d418c~mv2.jpg"
                alt="Traditional basket weaving"
                className="rounded-lg shadow-md object-cover w-full h-full"
              />
              <img
                src="https://static.wixstatic.com/media/c73eb8_b2ad17f0295748c7be3eca9adfc87000~mv2.jpg"
                alt="Sweetgrass basket detail"
                className="rounded-lg shadow-md object-cover w-full h-full"
              />
              <img
                src="https://static.wixstatic.com/media/c73eb8_f6183422ffa746ecb370bf17d178ce45~mv2.jpg"
                alt="Finished sweetgrass basket"
                className="rounded-lg shadow-md object-cover w-full h-full"
              />
              <img
                src="https://static.wixstatic.com/media/c73eb8_bffca30bd9d842ff9dbf17ab36ff843a~mv2.png"
                alt="Traditional basket pattern"
                className="rounded-lg shadow-md object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Materials and Tradition */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24 items-start">
        <div>
          <div className="flex items-center mb-6">
            <Leaf className="h-7 w-7 text-amber-600 mr-3" />
            <h2 className="text-2xl font-bold text-gray-900">Traditional Materials</h2>
          </div>
          <div className="space-y-6 text-gray-600">
            <p>
              Our baskets are crafted using time-honored materials:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Sweetgrass - The primary material, harvested locally</li>
              <li>Bulrush - Adds strength and structural integrity</li>
              <li>Pine Needles - Creates intricate patterns</li>
              <li>Split Oak - Used for reinforcement and decoration</li>
            </ul>
            <img
              src="https://static.wixstatic.com/media/c73eb8_afacbc1457b146129b0f3b2169c6165f~mv2.png"
              alt="Sweetgrass materials"
              className="rounded-lg shadow-md mt-4"
            />
          </div>
        </div>
        <div>
          <div className="flex items-center mb-6">
            <Heart className="h-7 w-7 text-amber-600 mr-3" />
            <h2 className="text-2xl font-bold text-gray-900">Cultural Significance</h2>
          </div>
          <div className="space-y-4 text-gray-600">
            <p>
              Each basket represents more than just a beautiful piece of craftsmanship – it's
              a living connection to centuries of African American history and culture in the
              Lowcountry. The techniques used today are the same ones passed down through
              generations, preserving a vital piece of our heritage.
            </p>
          </div>
          <div className="mt-6">
            <img
              src="https://static.wixstatic.com/media/c73eb8_77470e4a9f7f43bbbacfa8005a19b575~mv2.png"
              alt="Traditional basket craftsmanship"
              className="rounded-lg shadow-md"
            />
          </div>
        </div>
      </div>
      
     
      
    </div>
  );
}
