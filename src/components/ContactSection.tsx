import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, Send, MessageSquare } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

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
    setIsSubmitting(true);

    // Prepare form submission to support@bewgames.com
    const payload = {
      Name: {
        Name_First: formData.name.split(" ")[0] || formData.name,
        Name_Last: formData.name.split(" ")[1] || ""
      },
      Email: formData.email,
      MultiLine: formData.message,
      Subject: formData.subject,
      REFERRER_NAME: "https://www.bewgames.com/",
      ZS_IF_DOMAIN: "https://www.bewgames.com/",
      to_email: "support@bewgames.com"
    };

    try {
      const response = await fetch(
        "https://forms.zohopublic.com/bewgamescom/form/ContactForm/formperma/Bw_ITYaareYRoLJLNKC-p6no3MKGWQ3cPQRq4BZ7HxY/records",
        {
          method: "POST",
          headers: {
            accept: "application/zoho.forms-v1+json",
            "content-type": "application/json",
            "x-requested-with": "XMLHttpRequest"
          },
          body: JSON.stringify(payload)
        }
      );
      if (response.ok) {
        toast({
          title: "Message Sent!",
          description: "Thank you for contacting us. We'll get back to you soon!",
        });
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        toast({
          title: "Submission Failed",
          description: "There was a problem sending your message. Please try again later.",
          variant: "destructive"
        });
      }
    } catch (error) {
      toast({
        title: "Submission Error",
        description: "An error occurred. Please try again later.",
        variant: "destructive"
      });
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
            Have questions about our games or want to collaborate? We'd love to hear from you!
          </p>
          <div className="h-1 w-24 bg-gradient-primary rounded-full mx-auto" />
        </div>

        <div className="max-w-2xl mx-auto">
          {/* Contact Form */}
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

                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full md:w-auto pixel-button"
                >
                  <Send className="mr-2 w-4 h-4" />
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;