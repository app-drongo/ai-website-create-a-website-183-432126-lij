'use client'
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { ArrowRight, Check, Star, Zap } from "lucide-react"
import { useRouter } from "next/navigation"
import { useState } from "react"

export default function Hero() {
  const router = useRouter()
  const [activeFeature, setActiveFeature] = useState(0)
  
  // ACTION_PLACEHOLDER_START
  // Primary CTA - main conversion action
  const handlePrimaryAction = () => {
    router.push('/start-trial') // TARGET: /signup, /demo, /pricing
  }
  
  // Secondary CTA - engagement action
  const handleSecondaryAction = () => {
    router.push('/see-pricing') // TARGET: /features, /documentation, /compare
  }
  // ACTION_PLACEHOLDER_END

  const features = [
    { icon: Zap, title: "Lightning Fast", description: "Sub-second response times" },
    { icon: Check, title: "99.9% Uptime", description: "Enterprise-grade reliability" },
    { icon: Star, title: "5-Star Support", description: "24/7 dedicated assistance" }
  ]

  const productImages = [
    "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&q=80",
    "https://images.unsplash.com/photo-1555421689-491a97ff2040?w=800&q=80",
    "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80"
  ]

  return (
    <section className="relative min-h-screen flex items-center bg-background">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
      
      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Content */}
          <div className="order-2 lg:order-1">
            <Badge className="mb-6">
              <Star className="size-3 mr-1" />
              Rated #1 in customer satisfaction
            </Badge>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-6">
              My Yes platform that
              <span className="text-primary"> grows </span>
              with you
            </h1>
            
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              From startup to enterprise, our solution adapts to your needs. 
              Join thousands of teams building better products, faster.
            </p>
            
            {/* Feature pills */}
            <div className="flex flex-wrap gap-3 mb-8">
              {features.map((feature, index) => (
                <button
                  key={index}
                  onClick={() => setActiveFeature(index)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all ${
                    activeFeature === index
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-muted text-muted-foreground hover:bg-muted/80'
                  }`}
                >
                  <feature.icon className="size-4" />
                  <span className="text-sm font-medium">{feature.title}</span>
                </button>
              ))}
            </div>
            
            {/* Active feature description */}
            <Card className="p-4 mb-8 bg-card/50 backdrop-blur">
              <p className="text-sm text-muted-foreground">
                {features[activeFeature].description}
              </p>
            </Card>
            
            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button
                size="lg"
                className="group text-base"
                onClick={handlePrimaryAction}
              >
                Start free trial
                <ArrowRight className="ml-2 size-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-base"
                onClick={handleSecondaryAction}
              >
                View pricing
              </Button>
            </div>
            
            {/* Social proof */}
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <div className="flex -space-x-2">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="size-8 rounded-full bg-muted border-2 border-background"
                  />
                ))}
              </div>
              <span>
                <strong className="text-foreground">2,500+</strong> teams already onboard
              </span>
            </div>
          </div>
          
          {/* Right: Product showcase */}
          <div className="order-1 lg:order-2 relative">
            <div className="relative">
              {/* Main product image */}
              <Card className="overflow-hidden shadow-2xl">
                <div className="aspect-[4/3] bg-muted relative">
                  <img
                    src={productImages[activeFeature]}
                    alt="Product screenshot"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent" />
                </div>
              </Card>
              
              {/* Floating cards */}
              <Card className="absolute -top-4 -right-4 p-3 shadow-xl bg-background/95 backdrop-blur">
                <div className="flex items-center gap-2">
                  <div className="size-2 rounded-full bg-green-500" />
                  <span className="text-xs font-medium">Live</span>
                </div>
              </Card>
              
              <Card className="absolute -bottom-4 -left-4 p-3 shadow-xl bg-background/95 backdrop-blur">
                <div className="flex items-center gap-2">
                  <Star className="size-4 text-primary" />
                  <span className="text-xs font-medium">4.9/5</span>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}