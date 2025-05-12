
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    organization: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    toast.success("Your message has been sent successfully!");
    setFormData({
      firstName: '',
      lastName: '',
      organization: '',
      subject: '',
      message: ''
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label className="block text-sm font-medium mb-2 font-karla">First Name</label>
        <Input
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          placeholder="Enter your first name"
          required
          className="w-full"
        />
      </div>
      
      <div>
        <label className="block text-sm font-medium mb-2 font-karla">Last Name</label>
        <Input
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          placeholder="Enter your last name"
          required
          className="w-full"
        />
      </div>
      
      <div>
        <label className="block text-sm font-medium mb-2 font-karla">Organization</label>
        <Input
          name="organization"
          value={formData.organization}
          onChange={handleChange}
          placeholder="Enter your organization"
          className="w-full"
        />
      </div>
      
      <div>
        <label className="block text-sm font-medium mb-2 font-karla">Subject</label>
        <Input
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          placeholder="Enter subject"
          required
          className="w-full"
        />
      </div>
      
      <div>
        <label className="block text-sm font-medium mb-2 font-karla">Message</label>
        <Textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Enter your message"
          required
          className="w-full min-h-32"
        />
      </div>
      
      <div className="flex justify-end">
        <Button 
          type="submit"
          className="bg-blueprint-blue hover:bg-blue-800 text-white py-2 px-8"
        >
          Submit
        </Button>
      </div>
    </form>
  );
};

export default ContactForm;
