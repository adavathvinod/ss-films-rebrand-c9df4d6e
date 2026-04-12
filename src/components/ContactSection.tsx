import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Send, Mail, User, MessageSquare, Calendar } from "lucide-react";

const ContactSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    projectType: "",
    budget: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  const inputClasses =
    "w-full bg-transparent border-b border-foreground/20 focus:border-primary py-3 px-1 text-foreground placeholder:text-foreground/30 outline-none transition-colors duration-300 text-sm";

  return (
    <section
      id="booking"
      ref={ref}
      className="relative py-20 md:py-28 px-6 md:px-10 bg-background overflow-hidden"
    >
      {/* Subtle grid bg */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="max-w-[1400px] mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left — info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <p className="uppercase tracking-[0.3em] text-xs text-primary font-medium mb-4">
              Book a Project
            </p>
            <h2 className="heading-lg text-foreground mb-6">
              LET'S CREATE
              <br />
              TOGETHER
            </h2>
            <p className="text-body text-foreground/60 max-w-md mb-12 text-sm md:text-base">
              Ready to bring your brand story to life with AI-crafted films?
              Fill out the form and we'll get back within 24 hours.
            </p>

            <div className="space-y-6">
              {[
                { icon: Mail, label: "Email", value: "hello@ssfilms.com", href: "mailto:hello@ssfilms.com" },
                { icon: Calendar, label: "Availability", value: "Mon – Sat, 10AM – 7PM IST" },
              ].map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.3 + i * 0.15 }}
                  className="flex items-center gap-4"
                >
                  <div className="w-10 h-10 border border-foreground/10 flex items-center justify-center">
                    <item.icon size={16} className="text-primary" />
                  </div>
                  <div>
                    <span className="text-foreground/40 text-xs uppercase tracking-widest">
                      {item.label}
                    </span>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="block text-foreground font-medium hover:text-primary transition-colors"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-foreground font-medium">{item.value}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right — form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="h-full flex flex-col items-center justify-center text-center"
              >
                <div className="w-16 h-16 border-2 border-primary rounded-full flex items-center justify-center mb-6">
                  <Send size={24} className="text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-2">Message Sent!</h3>
                <p className="text-foreground/60 text-sm">We'll get back to you within 24 hours.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="relative">
                    <User size={14} className="absolute right-1 top-4 text-foreground/20" />
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name *"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className={inputClasses}
                    />
                  </div>
                  <div className="relative">
                    <Mail size={14} className="absolute right-1 top-4 text-foreground/20" />
                    <input
                      type="email"
                      name="email"
                      placeholder="Email Address *"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className={inputClasses}
                    />
                  </div>
                </div>

                <input
                  type="text"
                  name="company"
                  placeholder="Company / Brand"
                  value={formData.company}
                  onChange={handleChange}
                  className={inputClasses}
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <select
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                    className={`${inputClasses} appearance-none cursor-pointer`}
                  >
                    <option value="" disabled>Project Type</option>
                    <option value="ad-film">Ad Film</option>
                    <option value="brand-video">Brand Video</option>
                    <option value="social-content">Social Content</option>
                    <option value="product-launch">Product Launch</option>
                    <option value="other">Other</option>
                  </select>
                  <select
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className={`${inputClasses} appearance-none cursor-pointer`}
                  >
                    <option value="" disabled>Budget Range</option>
                    <option value="< ₹1L">{"< ₹1L"}</option>
                    <option value="₹1L – ₹5L">₹1L – ₹5L</option>
                    <option value="₹5L – ₹15L">₹5L – ₹15L</option>
                    <option value="> ₹15L">{"> ₹15L"}</option>
                  </select>
                </div>

                <div className="relative">
                  <MessageSquare size={14} className="absolute right-1 top-4 text-foreground/20" />
                  <textarea
                    name="message"
                    placeholder="Tell us about your project *"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className={`${inputClasses} resize-none`}
                  />
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full md:w-auto px-10 py-4 bg-primary text-primary-foreground uppercase tracking-widest text-sm font-semibold hover:bg-primary/90 transition-colors duration-300 flex items-center gap-3"
                >
                  Submit Enquiry
                  <Send size={14} />
                </motion.button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
