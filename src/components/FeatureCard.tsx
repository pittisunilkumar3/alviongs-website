
import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  priority?: boolean;
}

const FeatureCard = ({ title, description, icon: Icon, priority = false }: FeatureCardProps) => {
  return (
    <div className={`bg-white rounded-xl p-6 shadow-sm border ${priority ? 'border-alvionblue' : 'border-gray-100'} hover:shadow-md transition-all duration-300 group hover:shadow-lg hover:border-alvionblue/30`}>
      <div className={`${priority ? 'bg-alvionblue/20' : 'bg-alvionblue/10'} p-3 rounded-lg inline-block mb-4 group-hover:bg-alvionblue/20 transition-colors duration-300`}>
        <Icon className="h-6 w-6 text-alvionblue" />
      </div>
      {priority && (
        <span className="bg-gradient-to-r from-alvionblue to-alviongreen text-white text-xs px-3 py-1 rounded-full mb-2 inline-block font-medium">
          Priority Service
        </span>
      )}
      <h3 className="text-xl font-semibold mb-2 group-hover:text-alvionblue transition-colors duration-300">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default FeatureCard;
