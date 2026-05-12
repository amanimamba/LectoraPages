import * as LucideIcons from 'lucide-react';
import { cn } from '../../lib/utils';

interface CategoryIconProps {
  iconName?: string;
  className?: string;
  size?: number;
  strokeWidth?: number;
}

/**
 * Renders a Lucide icon by name dynamically
 */
export default function CategoryIcon({ 
  iconName, 
  className, 
  size = 24, 
  strokeWidth = 2 
}: CategoryIconProps) {
  // Fallback to Hash icon if not found or not provided
  const IconComponent = iconName ? (LucideIcons as any)[iconName] : LucideIcons.Hash;

  if (!IconComponent) {
    return <LucideIcons.Hash className={cn("shrink-0", className)} size={size} strokeWidth={strokeWidth} />;
  }

  return (
    <IconComponent 
      className={cn("shrink-0", className)} 
      size={size} 
      strokeWidth={strokeWidth} 
    />
  );
}
