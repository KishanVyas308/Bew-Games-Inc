import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, Send, MessageSquare } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import emailjs from '@emailjs/browser';
import { emailjsConfig } from '@/config/emailjs';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form data
    if (!formData.name.trim() || !formData.email.trim() || !formData.subject.trim() || !formData.message.trim()) {
      toast({
        title: "Form Incomplete",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // EmailJS Configuration
      const { serviceId, templateId, publicKey } = emailjsConfig;

      // Initialize EmailJS
      emailjs.init(publicKey);

      // Prepare template parameters
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        to_email: 'support@bewgames.com',
      };

      // Send email using EmailJS
      const result = await emailjs.send(serviceId, templateId, templateParams);

      if (result.status === 200) {
        toast({
          title: "Message Sent Successfully!",
          description: "Thank you for contacting us. We'll get back to you within 24 hours!",
        });
        
        // Clear the form
        setFormData({ name: "", email: "", subject: "", message: "" });
      }
    } catch (error) {
      console.error('EmailJS Error:', error);
      
      // Fallback to mailto link if EmailJS fails
      const mailtoLink = `mailto:support@bewgames.com?subject=${encodeURIComponent(`[Contact Form] ${formData.subject}`)}&body=${encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}\n\n---\nSent from Bew Games Contact Form`
      )}`;
      
      window.open(mailtoLink, '_blank');
      
      toast({
        title: "Fallback: Email Client Opened",
        description: "EmailJS failed, but we've opened your email client as backup. Please send the message from there.",
      });
      
      // Clear the form
      setFormData({ name: "", email: "", subject: "", message: "" });
    }
    
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 px-6 bg-background">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            Get In <span className="text-primary glow-text">Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Have questions about our games?
          </p>
          <div className="h-1 w-24 bg-gradient-primary rounded-full mx-auto" />
        </div>

        <div className="max-w-4xl mx-auto grid lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-6">
            <Card className="game-card border-0">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Mail className="w-5 h-5" />
                  Contact Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-sm text-muted-foreground mb-2">EMAIL</h4>
                  <a 
                    href="mailto:support@bewgames.com" 
                    className="text-primary hover:underline"
                  >
                    support@bewgames.com
                  </a>
                </div>
                <div>
                  <h4 className="font-semibold text-sm text-muted-foreground mb-2">RESPONSE TIME</h4>
                  <p className="text-sm">Within 24 hours</p>
                </div>
                <div>
                  <h4 className="font-semibold text-sm text-muted-foreground mb-2">SUPPORT</h4>
                  <p className="text-sm">Game issues, feedback, and general inquiries</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="game-card border-0">
              <CardHeader>
                <CardTitle>Send us a message</CardTitle>
              </CardHeader>
              <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Your name"
                      className="pixel-input"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="your@email.com"
                      className="pixel-input"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">Subject *</Label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    placeholder="What's this about?"
                    className="pixel-input"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Tell us more about your inquiry..."
                    className="min-h-[120px] pixel-input"
                  />
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="flex-1 pixel-button"
                  >
                    <Send className="mr-2 w-4 h-4" />
                    {isSubmitting ? "Opening Email..." : "Open Email Client"}
                  </Button>
                  
                  <Button 
                    type="button"
                    variant="outline"
                    onClick={() => window.open('mailto:support@bewgames.com', '_blank')}
                    className="flex-1"
                  >
                    <Mail className="mr-2 w-4 h-4" />
                    Email Directly
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;