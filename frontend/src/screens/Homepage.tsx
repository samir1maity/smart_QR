import { motion } from 'framer-motion';
import { Button } from '../components/ui/Button';
import { Link } from 'react-router-dom';
import { QrCode, ArrowRight, Shield, Zap, Users } from 'lucide-react';

export function HomePage() {
  return (
    <div className="min-h-screen">
      <div className="relative overflow-hidden">
        {/* Hero Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 text-center lg:pt-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-5xl md:text-6xl">
              <span className="block">Generate QR Codes</span>
              <span className="block text-primary">In Seconds</span>
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base text-gray-500 dark:text-gray-400 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              Create, customize, and manage QR codes effortlessly. Perfect for business cards,
              marketing materials, and more.
            </p>
            <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
              <Link to="/signup">
                <Button size="lg" className="w-full sm:w-auto">
                  Get Started <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16 bg-gray-50 dark:bg-gray-800 overflow-hidden lg:py-24">
        <div className="relative max-w-xl mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-7xl">
          <div className="relative">
            <h2 className="text-center text-3xl leading-8 font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              A better way to create QR codes
            </h2>
            <p className="mt-4 max-w-3xl mx-auto text-center text-xl text-gray-500 dark:text-gray-400">
              Everything you need to generate and manage QR codes in one place
            </p>
          </div>

          <div className="relative mt-12 lg:mt-24 lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-extrabold text-gray-900 dark:text-white tracking-tight sm:text-3xl">
                Powerful Features
              </h3>
              <div className="mt-10 space-y-10">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary text-white">
                      <QrCode className="h-6 w-6" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg leading-6 font-medium text-gray-900 dark:text-white">
                      Instant QR Generation
                    </h4>
                    <p className="mt-2 text-base text-gray-500 dark:text-gray-400">
                      Generate QR codes instantly for any type of content with our advanced algorithms.
                    </p>
                  </div>
                </div>
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary text-white">
                      <Shield className="h-6 w-6" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg leading-6 font-medium text-gray-900 dark:text-white">
                      Secure Storage
                    </h4>
                    <p className="mt-2 text-base text-gray-500 dark:text-gray-400">
                      Your QR codes are securely stored and backed up in the cloud.
                    </p>
                  </div>
                </div>
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary text-white">
                      <Zap className="h-6 w-6" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg leading-6 font-medium text-gray-900 dark:text-white">
                      Lightning Fast
                    </h4>
                    <p className="mt-2 text-base text-gray-500 dark:text-gray-400">
                      Experience blazing-fast performance with our optimized platform.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="mt-10 -mx-4 relative lg:mt-0"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <img
                className="relative mx-auto rounded-lg shadow-lg"
                width="490"
                src="https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Dashboard preview"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}