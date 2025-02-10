import React, { useState } from 'react';
import { Send, CheckCircle2, XCircle } from 'lucide-react';
import { toast, Toaster } from 'react-hot-toast';
import { useTranslation } from 'react-i18next';

export function ContactForm() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = () => {
    let isValid = true;
    const newErrors = {
      name: '',
      email: '',
      message: '',
    };

    if (formData.name.trim().length < 2) {
      newErrors.name = t('contact.form.validation.nameRequired');
      isValid = false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      newErrors.email = t('contact.form.validation.emailInvalid');
      isValid = false;
    }

    if (formData.message.trim().length < 10) {
      newErrors.message = t('contact.form.validation.messageRequired');
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      toast.error(t('contact.form.validation.checkForm'), {
        icon: <XCircle className="w-5 h-5 text-red-500" />,
        style: {
          background: '#FEE2E2',
          color: '#991B1B',
        },
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('http://localhost:3000/api/messages', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        toast.custom((t1) => (
          <div
            className={`${
              t1.visible ? 'animate-enter' : 'animate-leave'
            } max-w-md w-full bg-white dark:bg-gray-800 shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
          >
            <div className="flex-1 w-0 p-4">
              <div className="flex items-start">
                <div className="flex-shrink-0 pt-0.5">
                  <CheckCircle2 className="h-10 w-10 text-green-500" />
                </div>
                <div className="ml-3 flex-1">
                  <p className="text-sm font-medium text-gray-900 dark:text-gray-100">
                    {t('contact.form.success')}
                  </p>
                  <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                    {t('contact.form.successDetail')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ), {
          duration: 4000,
          position: 'bottom-right',
        });

        setFormData({ name: '', email: '', message: '' });
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      console.error('Error sending message:', error);
      toast.error(t('contact.form.error'), {
        icon: <XCircle className="w-5 h-5 text-red-500" />,
        style: {
          background: '#FEE2E2',
          color: '#991B1B',
        },
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="max-w-lg mx-auto space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-2">
          {t('contact.form.name')}
          </label>
          <input
            type="text"
            id="name"
            required
            className={`w-full px-4 py-2 border transition-colors duration-200 rounded-[0.5rem]
              ${errors.name 
                ? 'border-red-500 dark:border-red-500' 
                : 'dark:bg-gray-800 dark:border-gray-700'
              } focus:outline-none focus:ring-2 focus:ring-blue-500`}
            value={formData.name}
            onChange={(e) => {
              setFormData({ ...formData, name: e.target.value });
              if (errors.name) setErrors({ ...errors, name: '' });
            }}
          />
          {errors.name && (
            <p className="mt-1 text-sm text-red-500">{errors.name}</p>
          )}
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-2">
          {t('contact.form.email')}
          </label>
          <input
            type="email"
            id="email"
            required
            className={`w-full px-4 py-2 border transition-colors duration-200 rounded-[0.5rem]
              ${errors.email 
                ? 'border-red-500 dark:border-red-500' 
                : 'dark:bg-gray-800 dark:border-gray-700'
              } focus:outline-none focus:ring-2 focus:ring-blue-500`}
            value={formData.email}
            onChange={(e) => {
              setFormData({ ...formData, email: e.target.value });
              if (errors.email) setErrors({ ...errors, email: '' });
            }}
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-500">{errors.email}</p>
          )}
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium mb-2">
          {t('contact.form.message')}
          </label>
          <textarea
            id="message"
            required
            rows={4}
            className={`w-full px-4 py-2 border transition-colors duration-200 rounded-[0.5rem]
              ${errors.message 
                ? 'border-red-500 dark:border-red-500' 
                : 'dark:bg-gray-800 dark:border-gray-700'
              } focus:outline-none focus:ring-2 focus:ring-blue-500`}
            value={formData.message}
            onChange={(e) => {
              setFormData({ ...formData, message: e.target.value });
              if (errors.message) setErrors({ ...errors, message: '' });
            }}
          />
          {errors.message && (
            <p className="mt-1 text-sm text-red-500">{errors.message}</p>
          )}
        </div>
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full flex items-center justify-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-[0.5rem] transition-all duration-200 transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
        >
          <Send className="w-4 h-4" />
          <span>{isSubmitting ? t('contact.form.sending') : t('contact.form.send')}</span>
        </button>
      </form>
      <Toaster position="bottom-right" />
    </>
  );
}