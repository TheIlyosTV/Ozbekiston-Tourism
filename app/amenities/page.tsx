"use client"
import Image from 'next/image'

const AmenitiesPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">O&apos;zbekistonni aylanish uchun qulayliklar</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold mb-4">Transport</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Zamonaviy tezyurar poyezdlar</li>
            <li>Qulay ichki aviaqatnovlar</li>
            <li>Shaharlararo avtobus xizmati</li>
            <li>Mahalliy taksi xizmatlari</li>
          </ul>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold mb-4">Yashash</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Zamonaviy mehmonxonalar</li>
            <li>An&apos;anaviy mehmondo&apos;stlik uylari</li>
            <li>Qulay hostellar</li>
            <li>Yurtalar va chodir lagerlar</li>
          </ul>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold mb-4">Ovqatlanish</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Milliy taomlar restoranlar</li>
            <li>Halol ovqatlanish joylari</li>
            <li>Zamonaviy kafelar</li>
            <li>Street food maydonchalar</li>
          </ul>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold mb-4">Q&apos;shimcha xizmatlar</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Malakali gid-tarjimonlar</li>
            <li>Sayohat agentliklari</li>
            <li>Sug&apos;urta xizmatlari</li>
            <li>Valuta ayirboshlash shoxobchalari</li>
          </ul>
        </div>
      </div>
      
      <div className="mt-12">
        <h2 className="text-3xl font-semibold mb-6 text-center">Foydali ma&apos;lumotlar</h2>
        <div className="bg-white rounded-lg shadow-md p-6">
          <ul className="list-disc list-inside space-y-4">
            <li>Viza rejimi: Ko&apos;p mamlakatlar fuqarolari uchun 30 kunlik vizasiz rejim joriy etilgan</li>
            <li>Valyuta: O&apos;zbekiston so&apos;mi (UZS) - valuta ayirboshlash punktlari ko&apos;p joylarda mavjud</li>
            <li>Til: Davlat tili o&apos;zbek tili, rus tili ham keng tarqalgan. Turistik joylarda ingliz tili ham ishlatiladi</li>
            <li>Internet: Ko&apos;plab mehmonxonalar va jamoat joylarida bepul Wi-Fi mavjud</li>
            <li>Xavfsizlik: O&apos;zbekiston sayyohlar uchun xavfsiz mamlakat hisoblanadi</li>
          </ul>
        </div>
      </div>
      
      <div className="mt-12 text-center">
        <p className="text-xl mb-4">O&apos;zbekistonga tashrif buyuring va unutilmas sayohatdan bahramand bo&apos;ling!</p>
        <Image
          src="/images/uzbekistan-panorama.png"
          alt="O'zbekiston panoramasi"
          width={1200}
          height={400}
          className="rounded-lg shadow-md"
        />
      </div>
    </div>
  )
}

export default AmenitiesPage

