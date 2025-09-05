"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BarChart3,
  CheckCircle,
  ChefHat,
  Clock,
  Globe,
  Menu,
  MessageCircle,
  Monitor,
  Smartphone,
  Star,
  Tablet,
  Users,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ScrollToTop } from "@/components/scroll-to-top";
// import { ThemeToggle } from "@/components/theme-toggle";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function BeWiseLanding() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleWhatsAppClick = () => {
    window.open(
      "https://wa.me/1234567890?text=Hi! I'm interested in BeWise restaurant solutions.",
      "_blank",
    );
  };

  return (
    <div className="flex flex-col items-center w-full min-h-screen bg-background">
      {/* Header */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
      >
        <div className="container flex h-16 items-center justify-between px-4 md:px-6 mx-auto">
          <div className="flex items-center space-x-3">
            <Image src="/icon.png" alt="BeWise Logo" width={32} height={32} />
            <Image src="/logo.svg" alt="BeWise Logo" width={80} height={28} />
          </div>

          <nav className="hidden md:flex items-center space-x-6">
            <Link
              href="#products"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Products
            </Link>
            <Link
              href="#benefits"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Benefits
            </Link>
            <Link
              href="#contact"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Contact
            </Link>
          </nav>

          <div className="flex items-center space-x-2">
            {/* <ThemeToggle /> */}
            <Button
              onClick={handleWhatsAppClick}
              className="hidden md:flex bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              Get Started
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t bg-background/95 backdrop-blur"
          >
            <div className="container px-4 py-4 space-y-2">
              <Link
                href="#products"
                className="block py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                Products
              </Link>
              <Link
                href="#benefits"
                className="block py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                Benefits
              </Link>
              <Link
                href="#demo"
                className="block py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                Demo
              </Link>
              <Link
                href="#contact"
                className="block py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                Contact
              </Link>
              <Button
                onClick={handleWhatsAppClick}
                className="w-full mt-2 bg-primary hover:bg-primary/90 text-primary-foreground"
              >
                Get Started
              </Button>
            </div>
          </motion.div>
        )}
      </motion.header>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-background to-card py-20 md:py-32">
        <div className="container px-4 md:px-6">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            className="mx-auto max-w-4xl text-center"
          >
            <motion.div variants={fadeInUp}>
              <Badge
                variant="secondary"
                className="mb-6 bg-secondary/20 text-secondary-foreground border-secondary/30"
              >
                Complete Restaurant Solutions
              </Badge>
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="font-montserrat font-black text-4xl md:text-6xl lg:text-7xl text-balance mb-6 text-foreground"
            >
              All-in-one restaurant &{" "}
              <span className="text-primary">delivery solutions</span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="font-open-sans text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto text-pretty"
            >
              Streamline operations, boost efficiency, and enhance customer
              satisfaction with our integrated suite of restaurant management
              tools. From mobile ordering to kitchen displays, we've got you
              covered.
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button
                size="lg"
                onClick={handleWhatsAppClick}
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Request Demo on WhatsApp
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground bg-transparent"
              >
                Learn More
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20 bg-card/30">
        <div className="container px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-foreground mb-4 text-balance">
              Complete Suite of Restaurant Solutions
            </h2>
            <p className="font-open-sans text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Integrated products designed to optimize every aspect of your
              restaurant operations
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {/* Mobile App */}
            <motion.div variants={fadeInUp}>
              <Card className="group hover:shadow-lg transition-all duration-300 border-border/50 hover:border-primary/30 h-full">
                <CardHeader>
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <Smartphone className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="font-montserrat font-bold text-xl">
                    Branded Mobile App
                  </CardTitle>
                  <CardDescription className="font-open-sans">
                    iOS & Android apps with complete ordering functionality
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-secondary" />
                      Menu browsing & online ordering
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-secondary" />
                      Delivery & pickup scheduling
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-secondary" />
                      Secure payment processing
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>

            {/* Kitchen Display */}
            <motion.div variants={fadeInUp}>
              <Card className="group hover:shadow-lg transition-all duration-300 border-border/50 hover:border-primary/30 h-full">
                <CardHeader>
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <Monitor className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="font-montserrat font-bold text-xl">
                    Kitchen Display App
                  </CardTitle>
                  <CardDescription className="font-open-sans">
                    Real-time order management for kitchen operations
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-secondary" />
                      Order progress tracking
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-secondary" />
                      Live customer notifications
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-secondary" />
                      Delivery status updates
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>

            {/* Ordering Website */}
            <motion.div variants={fadeInUp}>
              <Card className="group hover:shadow-lg transition-all duration-300 border-border/50 hover:border-primary/30 h-full">
                <CardHeader>
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <Globe className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="font-montserrat font-bold text-xl">
                    Ordering Website
                  </CardTitle>
                  <CardDescription className="font-open-sans">
                    Responsive web platform with QR code integration
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-secondary" />
                      Mobile-responsive design
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-secondary" />
                      QR code table ordering
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-secondary" />
                      Consistent app experience
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>

            {/* Admin Dashboard */}
            <motion.div variants={fadeInUp}>
              <Card className="group hover:shadow-lg transition-all duration-300 border-border/50 hover:border-primary/30 h-full">
                <CardHeader>
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <BarChart3 className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="font-montserrat font-bold text-xl">
                    Admin Dashboard
                  </CardTitle>
                  <CardDescription className="font-open-sans">
                    Comprehensive management and analytics platform
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-secondary" />
                      Product & brand management
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-secondary" />
                      Detailed sales reports
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-secondary" />
                      Customer insights
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>

            {/* Self-Service Kiosk */}
            <motion.div variants={fadeInUp}>
              <Card className="group hover:shadow-lg transition-all duration-300 border-border/50 hover:border-primary/30 h-full">
                <CardHeader>
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <Tablet className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="font-montserrat font-bold text-xl">
                    Self-Service Kiosk
                  </CardTitle>
                  <CardDescription className="font-open-sans">
                    In-store ordering via vertical format kiosk
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-secondary" />
                      Touch-screen ordering
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-secondary" />
                      Eat-in order placement
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-secondary" />
                      Reduced wait times
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>

            {/* Desktop POS */}
            <motion.div variants={fadeInUp}>
              <Card className="group hover:shadow-lg transition-all duration-300 border-border/50 hover:border-primary/30 h-full">
                <CardHeader>
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <ChefHat className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="font-montserrat font-bold text-xl">
                    Desktop POS App
                  </CardTitle>
                  <CardDescription className="font-open-sans">
                    Counter ordering for Windows & macOS
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-secondary" />
                      Staff order registration
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-secondary" />
                      Cross-platform support
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-secondary" />
                      Integrated payment processing
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-20">
        <div className="container px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-foreground mb-4 text-balance">
              Why Choose BeWise?
            </h2>
            <p className="font-open-sans text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Transform your restaurant operations with our comprehensive suite
              of integrated solutions
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            <motion.div variants={fadeInUp} className="text-center">
              <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-montserrat font-bold text-lg mb-2">
                Streamlined Operations
              </h3>
              <p className="font-open-sans text-sm text-muted-foreground">
                Reduce order processing time and increase efficiency
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="text-center">
              <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-montserrat font-bold text-lg mb-2">
                Enhanced Customer Experience
              </h3>
              <p className="font-open-sans text-sm text-muted-foreground">
                Seamless ordering across all touchpoints
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="text-center">
              <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <BarChart3 className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-montserrat font-bold text-lg mb-2">
                Growth Analytics
              </h3>
              <p className="font-open-sans text-sm text-muted-foreground">
                Detailed insights to drive business decisions
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="text-center">
              <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Star className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-montserrat font-bold text-lg mb-2">
                Complete Branding
              </h3>
              <p className="font-open-sans text-sm text-muted-foreground">
                Fully customized experience across all platforms
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Demo & Contact Section */}
      <section id="contact" className="py-20 bg-card/30">
        <div className="container px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto text-center"
          >
            <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-foreground mb-4 text-balance">
              Ready to Transform Your Restaurant?
            </h2>
            <p className="font-open-sans text-lg text-muted-foreground mb-8 text-pretty">
              Get started with BeWise today and see the difference our
              integrated solutions can make
            </p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
            >
              <Button
                size="lg"
                onClick={handleWhatsAppClick}
                className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Talk to Us on WhatsApp
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
              >
                Schedule Free Demo
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Card className="max-w-md mx-auto border-border/50">
                <CardHeader>
                  <CardTitle className="font-montserrat font-bold text-lg">
                    Contact Us
                  </CardTitle>
                  <CardDescription className="font-open-sans">
                    Send us a message and we'll get back to you
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <input
                      type="text"
                      placeholder="Your name"
                      className="w-full px-3 py-2 border border-border rounded-md bg-input text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      placeholder="Your email address"
                      className="w-full px-3 py-2 border border-border rounded-md bg-input text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                    />
                  </div>
                  <div>
                    <textarea
                      placeholder="Tell us about your restaurant"
                      rows={3}
                      className="w-full px-3 py-2 border border-border rounded-md bg-input text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                    />
                  </div>
                  <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                    Send Message
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="container px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-foreground mb-4 text-balance">
              Trusted by Restaurant Owners
            </h2>
            <p className="font-open-sans text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              See how BeWise has transformed restaurant operations worldwide
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            <motion.div variants={fadeInUp}>
              <Card className="border-border/50 h-full">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 fill-secondary text-secondary"
                      />
                    ))}
                  </div>
                  <p className="font-open-sans text-sm text-muted-foreground mb-4">
                    "BeWise completely transformed our ordering process.
                    Customer satisfaction increased by 40% and our kitchen
                    efficiency improved dramatically."
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-primary font-semibold text-sm">
                        MR
                      </span>
                    </div>
                    <div>
                      <p className="font-montserrat font-semibold text-sm">
                        Maria Rodriguez
                      </p>
                      <p className="font-open-sans text-xs text-muted-foreground">
                        Owner, Bella Vista Restaurant
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Card className="border-border/50 h-full">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 fill-secondary text-secondary"
                      />
                    ))}
                  </div>
                  <p className="font-open-sans text-sm text-muted-foreground mb-4">
                    "The integrated system is amazing. From mobile orders to
                    kitchen display, everything works seamlessly together. Our
                    staff loves it!"
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-primary font-semibold text-sm">
                        JC
                      </span>
                    </div>
                    <div>
                      <p className="font-montserrat font-semibold text-sm">
                        James Chen
                      </p>
                      <p className="font-open-sans text-xs text-muted-foreground">
                        Manager, Urban Eats
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Card className="border-border/50 h-full">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 fill-secondary text-secondary"
                      />
                    ))}
                  </div>
                  <p className="font-open-sans text-sm text-muted-foreground mb-4">
                    "BeWise helped us scale from one location to five. The
                    analytics dashboard gives us insights we never had before.
                    Highly recommended!"
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-primary font-semibold text-sm">
                        SK
                      </span>
                    </div>
                    <div>
                      <p className="font-montserrat font-semibold text-sm">
                        Sarah Kim
                      </p>
                      <p className="font-open-sans text-xs text-muted-foreground">
                        CEO, Fresh Bites Chain
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-border">
        <div className="container px-4 md:px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <Image
                  src="/logo.svg"
                  alt="BeWise Logo"
                  width={80}
                  height={28}
                />
              </div>
              <p className="font-open-sans text-sm text-muted-foreground">
                Complete restaurant and delivery systems for the modern food
                service industry.
              </p>
            </div>

            <div>
              <h3 className="font-montserrat font-semibold text-sm text-foreground mb-4">
                Products
              </h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link
                    href="#"
                    className="hover:text-foreground transition-colors"
                  >
                    Mobile App
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-foreground transition-colors"
                  >
                    Kitchen Display
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-foreground transition-colors"
                  >
                    Ordering Website
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-foreground transition-colors"
                  >
                    Admin Dashboard
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-montserrat font-semibold text-sm text-foreground mb-4">
                Support
              </h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link
                    href="#"
                    className="hover:text-foreground transition-colors"
                  >
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-foreground transition-colors"
                  >
                    Documentation
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-foreground transition-colors"
                  >
                    Contact Support
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-foreground transition-colors"
                  >
                    System Status
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-montserrat font-semibold text-sm text-foreground mb-4">
                Legal
              </h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link
                    href="#"
                    className="hover:text-foreground transition-colors"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-foreground transition-colors"
                  >
                    Terms of Use
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-foreground transition-colors"
                  >
                    Cookie Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-foreground transition-colors"
                  >
                    Blog
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="font-open-sans text-sm text-muted-foreground">
              © 2024 BeWise. All rights reserved.
            </p>
            <div className="flex items-center space-x-4 mt-4 md:mt-0">
              <Link
                href="#"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <span className="sr-only">Twitter</span>
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <span className="sr-only">LinkedIn</span>
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </footer>

      <ScrollToTop />
    </div>
  );
}
