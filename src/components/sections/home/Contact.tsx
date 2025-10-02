'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  MessageSquare,
  Users,
  Headphones,
  CheckCircle,
  Star,
  Shield,
  Zap,
} from 'lucide-react';

export default function Contact() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });

  // ACTION_PLACEHOLDER_START
  const handlePrimaryAction = () => {
    router.push('/');
  };
  const handleSecondaryAction = () => {
    router.push('/');
  };
  // ACTION_PLACEHOLDER_END

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Enterprise inquiry submitted:', formData);
    handlePrimaryAction();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const contactMethods = [
    {
      icon: MessageSquare,
      title: 'Technical Support',
      description: '24/7 enterprise support',
      contact: 'Available via dashboard',
      action: 'Access Support Hub',
    },
    {
      icon: Phone,
      title: 'Sales Consultation',
      description: 'Speak with our SaaS experts',
      contact: 'Book a demo call',
      action: 'Schedule Demo',
    },
    {
      icon: Mail,
      title: 'Partnership Inquiries',
      description: 'Integration & API partnerships',
      contact: 'partners@saasify.com',
      action: 'Send Partnership Request',
    },
  ];

  const offices = [
    {
      city: 'San Francisco',
      address: '101 Mission Street, Suite 2400',
      timezone: 'PST (UTC-8)',
    },
    {
      city: 'Austin',
      address: '500 West 2nd Street, Floor 12',
      timezone: 'CST (UTC-6)',
    },
    {
      city: 'Dublin',
      address: 'Grand Canal Square, Block E',
      timezone: 'GMT (UTC+0)',
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-muted/20 to-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2">
            <Shield className="size-3 mr-2" />
            Enterprise Contact
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Scale Your Business with
            <span className="block bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              SaaSify Enterprise
            </span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Ready to transform your workflow? Our enterprise team is here to help you implement
            SaaSify at scale with custom solutions and dedicated support.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
          {/* Contact Form */}
          <Card className="border-border/50">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-2">
                <Zap className="size-6 text-primary" />
                Request Enterprise Demo
              </CardTitle>
              <CardDescription>
                Get a personalized demo and custom pricing for your organization. Our team responds
                within 2 hours during business days.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                      placeholder="Sarah Chen"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Work Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                      placeholder="sarah@techcorp.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium mb-2">
                    Company Name *
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                    placeholder="TechCorp Industries"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Tell us about your needs *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors resize-none"
                    placeholder="We're looking to implement SaaSify for our 500+ person engineering team. Interested in API integrations, SSO, and custom analytics..."
                  />
                </div>

                <div className="flex items-center gap-3 p-4 bg-primary/5 rounded-lg">
                  <CheckCircle className="size-5 text-primary flex-shrink-0" />
                  <p className="text-sm text-muted-foreground">
                    By submitting this form, you'll receive a personalized demo and custom
                    enterprise pricing within 24 hours.
                  </p>
                </div>

                <Button type="submit" className="w-full text-base py-6 group">
                  Request Enterprise Demo
                  <Send className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Quick Contact Methods */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold flex items-center gap-2">
                <Headphones className="size-5 text-primary" />
                Enterprise Support Channels
              </h3>
              <div className="grid gap-4">
                {contactMethods.map((method, index) => {
                  const Icon = method.icon;
                  return (
                    <Card
                      key={index}
                      className="border-border/50 hover:border-primary/20 transition-colors cursor-pointer group"
                      onClick={handleSecondaryAction}
                    >
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <div className="size-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                            <Icon className="size-6 text-primary" />
                          </div>
                          <div className="flex-1">
                            <h4 className="font-semibold mb-1">{method.title}</h4>
                            <p className="text-sm text-muted-foreground mb-2">
                              {method.description}
                            </p>
                            <p className="font-medium text-primary">{method.contact}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>

            {/* Office Locations */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold flex items-center gap-2">
                <MapPin className="size-5 text-primary" />
                Global Offices
              </h3>
              <div className="space-y-3">
                {offices.map((office, index) => (
                  <div key={index} className="p-4 border border-border/50 rounded-lg">
                    <div className="flex items-start justify-between">
                      <div>
                        <h4 className="font-semibold">{office.city}</h4>
                        <p className="text-sm text-muted-foreground mt-1">{office.address}</p>
                      </div>
                      <Badge variant="secondary" className="text-xs">
                        {office.timezone}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Enterprise SLA */}
            <Card className="border-border/50">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold flex items-center gap-2 mb-4">
                  <Clock className="size-5 text-primary" />
                  Enterprise SLA
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Star className="size-4 text-primary" />
                    <span className="text-sm">Priority support response: &lt; 2 hours</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Star className="size-4 text-primary" />
                    <span className="text-sm">99.99% uptime guarantee</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Star className="size-4 text-primary" />
                    <span className="text-sm">Dedicated customer success manager</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Star className="size-4 text-primary" />
                    <span className="text-sm">Custom integrations & API support</span>
                  </div>
                </div>
                <div className="mt-4 p-3 bg-primary/10 rounded-lg">
                  <p className="text-sm text-primary font-medium flex items-center gap-2">
                    <Users className="size-4" />
                    Trusted by 500+ enterprise customers worldwide
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
