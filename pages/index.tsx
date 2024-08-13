import Image from "next/image";
import { Inter } from "next/font/google";
import HomePageBanner from "@/Components/HomePageBanner/HomePageBanner";
import HomeCategories from "@/Components/HomeCategories/HomeCategories";
import StepToPlaceOrder from "@/Components/StepToPlaceOrder/StepToPlaceOrder";
import HomeBelive from "@/Components/HomeBelive/HomeBelive";
import HomeCompanyOptions from "@/Components/HomeCompanyOptions/HomeCompanyOptions";
import WhyChooseUs from "@/Components/WhyChooseUs/WhyChooseUs";
import AskedQuestions from "@/Components/AskedQuestions/AskedQuestions";
import CustomerSays from "@/Components/CustomerSays/CustomerSays";


const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
   <>
   <HomePageBanner/>
   <HomeCategories />
   <StepToPlaceOrder/>
   <HomeBelive/>
   <HomeCompanyOptions/>
   <WhyChooseUs/>
   <AskedQuestions/>
   <CustomerSays/>
   </>
  );
}
