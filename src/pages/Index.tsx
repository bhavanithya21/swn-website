import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/home/HeroSection";
import CategoriesSection from "@/components/home/CategoriesSection";
import RecentPostsSection from "@/components/home/RecentPostsSection";
import AboutSection from "@/components/home/AboutSection";
import ContactSection from "@/components/home/ContactSection";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <CategoriesSection />
      <RecentPostsSection />
      <AboutSection />
      <ContactSection />
    </Layout>
  );
};

export default Index;
