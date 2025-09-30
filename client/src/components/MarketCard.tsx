import { motion, useMotionValue, useTransform } from "framer-motion";
import { X, Check } from "lucide-react";
import type { Market } from "@/data/markets";

interface MarketCardProps {
  market: Market;
  onSwipe: (direction: 'left' | 'right') => void;
  style?: React.CSSProperties;
}

export default function MarketCard({ market, onSwipe, style }: MarketCardProps) {
  const x = useMotionValue(0);
  const rotate = useTransform(x, [-200, 0, 200], [-15, 0, 15]);
  const opacity = useTransform(x, [-200, -100, 0, 100, 200], [0.5, 1, 1, 1, 0.5]);

  const leftOpacity = useTransform(x, [-100, 0], [1, 0]);
  const rightOpacity = useTransform(x, [0, 100], [0, 1]);

  const handleDragEnd = () => {
    const currentX = x.get();
    if (Math.abs(currentX) > 100) {
      onSwipe(currentX > 0 ? 'right' : 'left');
    }
  };

  return (
    <motion.div
      drag="x"
      dragConstraints={{ left: 0, right: 0 }}
      style={{ x, rotate, opacity, ...style }}
      onDragEnd={handleDragEnd}
      className="absolute w-full cursor-grab active:cursor-grabbing"
      data-testid={`card-market-${market.id}`}
    >
      <div className="relative">
        {/* Swipe indicators */}
        <motion.div 
          style={{ opacity: leftOpacity }}
          className="absolute -left-4 top-1/2 -translate-y-1/2 z-10 flex items-center justify-center w-20 h-20 rounded-full bg-destructive/90 border-4 border-destructive shadow-lg"
        >
          <X className="w-10 h-10 text-destructive-foreground" />
        </motion.div>
        
        <motion.div 
          style={{ opacity: rightOpacity }}
          className="absolute -right-4 top-1/2 -translate-y-1/2 z-10 flex items-center justify-center w-20 h-20 rounded-full bg-chart-2/90 border-4 border-chart-2 shadow-lg"
        >
          <Check className="w-10 h-10 text-white" />
        </motion.div>

        {/* Card content */}
        <div className="relative bg-card border-2 border-card-border rounded-2xl p-8 shadow-2xl min-h-[400px] flex flex-col">
          {/* Category badge */}
          <div className="absolute top-4 right-4">
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-primary/20 text-primary border border-primary/30">
              {market.category}
            </span>
          </div>

          {/* Swipe labels */}
          <div className="flex justify-between mb-6 text-sm font-medium">
            <span className="flex items-center gap-1 text-destructive">
              <X className="w-4 h-4" />
              Rug
            </span>
            <span className="flex items-center gap-1 text-chart-2">
              <Check className="w-4 h-4" />
              Resolve
            </span>
          </div>

          {/* Question */}
          <div className="flex-1 flex items-center justify-center">
            <h2 className="text-2xl md:text-3xl font-display text-center leading-tight">
              {market.question}
            </h2>
          </div>

          {/* Instructions */}
          <div className="mt-6 pt-6 border-t border-border">
            <p className="text-center text-sm text-muted-foreground">
              Swipe <span className="text-destructive font-semibold">← for RUG</span> or <span className="text-chart-2 font-semibold">→ for RESOLVE</span>
            </p>
            <p className="text-center text-xs text-muted-foreground mt-2">
              Tap the card or drag to decide!
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
