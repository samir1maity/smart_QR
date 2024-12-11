import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { StatsCard } from '../components/home/StatsCard';
import { TestimonialCard } from '../components/home/TestimonialCard';
import {
  QrCode,
  ArrowRight,
  Shield,
  ChevronRight,
  Sparkles,
  Globe,
} from 'lucide-react';

export function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section with Gradient Background */}
      <div className="relative overflow-hidden bg-gradient-to-br from-primary-100 via-white to-primary-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 text-center lg:pt-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="relative z-10"
          >
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="mb-8 flex justify-center"
            >
              <div className="rounded-full bg-primary/10 p-2 ring-2 ring-primary/20">
                <QrCode className="h-8 w-8 text-primary" />
              </div>
            </motion.div>
            
            <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-5xl md:text-6xl">
              <span className="block">Transform Your Links into</span>
              <span className="block text-primary mt-2">Beautiful QR Codes</span>
            </h1>
            
            <p className="mt-6 max-w-md mx-auto text-lg text-gray-600 dark:text-gray-300 sm:text-xl md:mt-8 md:max-w-3xl">
              Create stunning, customizable QR codes in seconds. Perfect for marketing,
              business cards, and sharing content across platforms.
            </p>

            <div className="mt-8 max-w-md mx-auto sm:flex sm:justify-center md:mt-12 gap-4">
              <Link to="/upload">
                <Button size="lg" variant="secondary" className="w-full sm:w-auto group">
                  Get Started Free
                  <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to='/'>
                <Button size="lg" variant="outline" className="w-full sm:w-auto mt-4 sm:mt-0">
                  View Examples
                </Button>
              </Link>
            </div>

            {/* Floating Features */}
            <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 shadow-lg"
              >
                <Sparkles className="h-8 w-8 text-primary mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Custom Designs</h3>
                <p className="mt-2 text-gray-600 dark:text-gray-400">Create unique QR codes that match your brand</p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 shadow-lg"
              >
                <Globe className="h-8 w-8 text-primary mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Analytics</h3>
                <p className="mt-2 text-gray-600 dark:text-gray-400">Track scans and engagement worldwide</p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 shadow-lg sm:col-span-2 lg:col-span-1"
              >
                <Shield className="h-8 w-8 text-primary mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Enterprise Security</h3>
                <p className="mt-2 text-gray-600 dark:text-gray-400">Advanced security features for business users</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-gray-50 dark:bg-gray-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
              Trusted by thousands of users worldwide
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <StatsCard number="1M+" label="QR Codes Generated" delay={0.2} />
            <StatsCard number="50K+" label="Active Users" delay={0.4} />
            <StatsCard number="99.9%" label="Uptime" delay={0.6} />
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="py-16 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
              What our users say
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <TestimonialCard
              quote="The best QR code generator I've ever used. Simple, fast, and beautiful designs."
              author="Sarah Johnson"
              role="Marketing Director"
              image="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              delay={0.2}
            />
            <TestimonialCard
              quote="Perfect for our business needs. The analytics feature is a game-changer."
              author="Michael Chen"
              role="Business Owner"
              image="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              delay={0.4}
            />
            <TestimonialCard
              quote="Excellent customer support and regular updates. Highly recommended!"
              author="Emily Davis"
              role="Product Manager"
              image="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              delay={0.6}
            />
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-primary">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="lg:flex lg:items-center lg:justify-between"
          >
            <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              <span className="block">Ready to get started?</span>
              <span className="block text-primary-100">Create your first QR code today.</span>
            </h2>
            <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
              <div className="inline-flex rounded-md shadow">
                <Link to="/signup">
                  <Button
                    size="lg"
                    className="bg-white text-primary hover:bg-primary-50"
                  >
                    Get Started Free
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}