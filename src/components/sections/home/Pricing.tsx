'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Check, Star, Zap } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

// ✅ Define the shape of a pricing plan
interface PricingPlan {
  name: string;
  description: string;
  monthlyPrice: number | null;
  annualPrice: number | null;
  badge: string | null;
  features: string[];
  cta: string;
  popular: boolean;
}

export default function Pricing() {
  const router = useRouter();
  const [isAnnual, setIsAnnual] = useState(false);

  // ACTION_PLACEHOLDER_START
  const handleStarterAction = () => {
    router.push('/');
  };
  const handleProfessionalAction = () => {
    router.push('/');
  };
  const handleEnterpriseAction = () => {
    router.push('/');
  };
  const handleScheduleDemo = () => {
    router.push('/');
  };
  // ACTION_PLACEHOLDER_END

  const plans: PricingPlan[] = [
    {
      name: 'Startup',
      description: 'Perfect for early-stage SaaS ventures',
      monthlyPrice: 0,
      annualPrice: 0,
      badge: null,
      features: [
        'Up to 1,000 API calls/month',
        'Core automation tools',
        'Email support',
        '5GB cloud storage',
        'Basic dashboard analytics',
        'Standard integrations',
      ],
      cta: 'Launch Free Account',
      popular: false,
    },
    {
      name: 'Scale',
      description: 'Accelerate growth with advanced SaaS tools',
      monthlyPrice: 49,
      annualPrice: 34,
      badge: 'Most Popular',
      features: [
        'Unlimited API calls',
        'Advanced workflow automation',
        'Priority chat support',
        '500GB cloud storage',
        'Real-time analytics dashboard',
        'Premium integrations hub',
        'Multi-tenant architecture',
        'Custom API endpoints',
      ],
      cta: 'Start 14-Day Trial',
      popular: true,
    },
    {
      name: 'Enterprise',
      description: 'Enterprise-grade SaaS infrastructure',
      monthlyPrice: null,
      annualPrice: null,
      badge: 'White Glove',
      features: [
        'Everything in Scale plan',
        'Unlimited cloud storage',
        '24/7 dedicated support',
        'Custom integrations',
        'SOC 2 compliance',
        '99.99% uptime SLA',
        'Dedicated success manager',
        'On-premise deployment',
      ],
      cta: 'Book Strategy Call',
      popular: false,
    },
  ];

  // ✅ Fix typing for plan
  const getPrice = (plan: PricingPlan): string => {
    if (plan.monthlyPrice === null) return 'Custom';
    if (plan.monthlyPrice === 0) return 'Free';
    return isAnnual ? `$${plan.annualPrice}` : `$${plan.monthlyPrice}`;
  };

  const getSavings = (plan: PricingPlan): number | null => {
    if (plan.monthlyPrice === null || plan.monthlyPrice === 0) return null;
    const monthlyCost = plan.monthlyPrice * 12;
    const annualCost = (plan.annualPrice ?? plan.monthlyPrice) * 12;
    return Math.round(((monthlyCost - annualCost) / monthlyCost) * 100);
  };

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge
            variant="outline"
            className="mb-4 px-4 py-2 bg-primary/10 text-primary border-primary/20"
          >
            SaaS Pricing
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Scale Your Business
            <span className="block bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Without Breaking Budget
            </span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            Choose the perfect SaaS plan to accelerate your growth. Enterprise-grade security,
            99.99% uptime, and unlimited scalability included.
          </p>

          {/* Billing Toggle */}
          <div className="inline-flex items-center p-1 bg-muted rounded-lg">
            <button
              onClick={() => setIsAnnual(false)}
              className={cn(
                'px-4 py-2 text-sm font-medium rounded-md transition-all',
                !isAnnual
                  ? 'bg-background text-foreground shadow-sm'
                  : 'text-muted-foreground hover:text-foreground'
              )}
            >
              Monthly
            </button>
            <button
              onClick={() => setIsAnnual(true)}
              className={cn(
                'px-4 py-2 text-sm font-medium rounded-md transition-all flex items-center gap-2',
                isAnnual
                  ? 'bg-background text-foreground shadow-sm'
                  : 'text-muted-foreground hover:text-foreground'
              )}
            >
              Annual
              <Badge variant="secondary" className="text-xs bg-primary/20 text-primary">
                Save 30%
              </Badge>
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={cn(
                'relative overflow-hidden transition-all duration-300 hover:shadow-lg',
                plan.popular
                  ? 'border-primary/50 shadow-lg shadow-primary/10 scale-105'
                  : 'border-border/50 hover:border-primary/20'
              )}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <Badge className="bg-primary text-primary-foreground px-4 py-1">
                    <Star className="size-3 mr-1" />
                    {plan.badge}
                  </Badge>
                </div>
              )}

              {/* Background Gradient */}
              {plan.popular && (
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
              )}

              <CardHeader className="relative text-center pb-8">
                {plan.badge && !plan.popular && (
                  <Badge
                    variant="outline"
                    className="mb-4 mx-auto w-fit bg-accent/10 text-accent border-accent/20"
                  >
                    {plan.badge}
                  </Badge>
                )}

                <CardTitle className="text-2xl mb-2">{plan.name}</CardTitle>
                <CardDescription className="text-base mb-6">{plan.description}</CardDescription>

                <div className="flex items-end justify-center gap-1 mb-2">
                  <span className="text-4xl font-bold">{getPrice(plan)}</span>
                  {plan.monthlyPrice !== null && plan.monthlyPrice !== 0 && (
                    <span className="text-muted-foreground mb-1">
                      /{isAnnual ? 'month' : 'month'}
                    </span>
                  )}
                </div>

                {isAnnual && getSavings(plan) && (
                  <div className="text-sm text-primary font-medium">
                    Save {getSavings(plan)}% annually
                  </div>
                )}

                {isAnnual && plan.monthlyPrice !== null && plan.monthlyPrice !== 0 && (
                  <div className="text-sm text-muted-foreground">
                    Billed annually (${(plan.annualPrice ?? plan.monthlyPrice) * 12}/year)
                  </div>
                )}
              </CardHeader>

              <CardContent className="relative space-y-6">
                {/* Features List */}
                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3">
                      <div className="size-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Check className="size-3 text-primary" />
                      </div>
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <Button
                  onClick={
                    index === 0
                      ? handleStarterAction
                      : index === 1
                      ? handleProfessionalAction
                      : handleEnterpriseAction
                  }
                  className={cn(
                    'w-full text-base py-6',
                    plan.popular ? 'bg-primary hover:bg-primary/90' : ''
                  )}
                  variant={plan.popular ? 'default' : 'outline'}
                >
                  {plan.popular && <Zap className="size-4 mr-2" />}
                  {plan.cta}
                </Button>

                {plan.name === 'Scale' && (
                  <p className="text-center text-sm text-muted-foreground">
                    14-day free trial • No credit card required
                  </p>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="text-center mt-16 max-w-2xl mx-auto">
          <h3 className="text-xl font-semibold mb-4">Need a custom SaaS solution?</h3>
          <p className="text-muted-foreground mb-6">
            We build tailored SaaS platforms for enterprises with unique requirements. Let's
            architect the perfect solution for your organization's growth.
          </p>
          <Button
            variant="outline"
            size="lg"
            onClick={handleScheduleDemo}
            className="hover:bg-primary/5 hover:border-primary/30"
          >
            Schedule Architecture Review
          </Button>
        </div>
      </div>
    </section>
  );
}
