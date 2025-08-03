import { NeonGallery } from '@/components/NeonGallery';
import { ThemeToggle } from '@/components/ThemeToggle';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <ThemeToggle />
      <NeonGallery />
    </div>
  );
};

export default Index;
