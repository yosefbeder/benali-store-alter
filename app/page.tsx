import Header from "@/components/Header";

import Nav from "@/components/Nav";
import Category from "@/components/Category";
import Footer from "@/components/Footer";

const facebookServices = [
  {
    image: "/1.webp",
    name: "فك قفل جديد",
    required: ["اسم الحساب", "تاريخ الحساب"],
    expectedPeriod: "أقل من ٢٤ ساعة",
    price: "150 ج.م.",
  },
  {
    image: "/2.webp",
    name: "المصادقه الثنائيه",
    required: ["اسم الحساب", "تاريخ الحساب"],
    expectedPeriod: "أقل من ٢٤ ساعة",
    price: "150 ج.م.",
  },
  {
    image: "/3.webp",
    name: "استرجاع مسروق",
    required: [
      "الجيميل القديم إللي كان مربوط بالحساب",
      "اسم الحساب",
      "تاريخ الحساب",
    ],
    expectedPeriod: "أقل من ٢٤ ساعة",
    price: "200 ج.م.",
  },
  {
    image: "/4.webp",
    name: "تأمين شامل للحساب",
    description: "يتم حرق لنكات التأمين وتأمين الحساب شامل حتي لا يتم استرجاعه",
    expectedPeriod: "أقل من ٢٤ ساعة",
    price: "220 ج.م.",
  },
];

const whatsAppServices = [
  {
    image: "/5.webp",
    name: "فك حظر ارقام الواتس",
    description:
      "سعر فك حظر الرقم يكون علي حسب نوع الحظر فك انتهاك 50 ج.م.، فك انتهاك طعن 75 ج.م.، فك مشدد 100 ج.م.، فك عيار 150 ج.م.، فك قباحي 200 ج.م.",
    price: "50 إلى 200 ج.م.",
  },
  {
    image: "/6.webp",
    name: "حظر ارقام واتساب",
    required: ["دليل انو حرامي او صاحب الرقم عمل معاك حاجه مش كويسه"],
    price: "100 ج.م.",
  },
];

const socialMedia = [
  {
    image: "/7.webp",
    name: "متابعين انستغرام",
    description: "ضمان 365 يوم مع اعادة تعبأه السعر لكل 1000 متابع",
    price: "200 ج.م. / 1000 متابع",
  },
  {
    image: "/8.webp",
    name: "متابعين فيس بوك",
    description: "ضمان 365 يوم مع اعادة تعبأه السعر لكل 1000 متابع",
    price: "200 ج.م. / 1000 متابع",
  },
  {
    image: "/9.webp",
    name: "متابعين تيك توك",
    description: "ضمان 365 يوم مع اعادة تعبأه السعر لكل 1000 متابع",
    price: "200 ج.م. / 1000 متابع",
  },
  {
    image: "/10.webp",
    name: "متابعين يوتيوب",
    description: "ضمان 365 يوم لا اعادة تعبأه السعر لكل 1000 متابع",
    price: "200 ج.م. / 1000 متابع",
  },
];

const categories = [
  {
    header: "خدمات فيسبوك",
    slug: "facebook-services",
    products: facebookServices,
  },
  {
    header: "خدمات واتساب",
    slug: "whatsapp-services",
    products: whatsAppServices,
  },
  {
    header: "سوشيال ميديا",
    slug: "social-media",
    products: socialMedia,
  },
];

export default function Home() {
  return (
    <>
      <Header />
      <Nav categories={categories} />
      <main>
        {categories.map((category, index) => (
          <Category key={index} {...category} />
        ))}
      </main>
      <Footer />
    </>
  );
}
