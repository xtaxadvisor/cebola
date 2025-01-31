import React, { useState } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { Mail, Lock, ArrowLeft } from 'lucide-react';
import { Input } from '../ui/Input';
import { Button } from '../ui/Button';
import { useNotificationStore } from '../../lib/store';
import { AuthService } from '../../services/auth/authService';
import { validateEmail, validatePassword } from '../../utils/validation';

export function SignInForm() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<{
    email?: string;
    password?: string;
  }>({});
  
  const navigate = useNavigate();
  const location = useLocation();
  const { addNotification } = useNotificationStore();

  const from = location.state?.from?.pathname || '/dashboard';

  const validateForm = () => {
    const newErrors: typeof errors = {};

    if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    const passwordValidation = validatePassword(formData.password);
    if (!passwordValidation.isValid) {
      newErrors.password = passwordValidation.errors[0];
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setLoading(true);
    try {
      const result = await AuthService.signIn(formData.email, formData.password);
      if (result) {
        addNotification('Successfully logged in', 'success');
        navigate(from, { replace: true });
      } else {
        addNotification('Invalid email or password', 'error');
      }
    } catch (error) {
      console.error('Sign in error:', error);
      addNotification(
        error instanceof Error ? error.message : 'An error occurred during sign in',
        'error'
      );
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (field: keyof typeof formData) => (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setFormData(prev => ({ ...prev, [field]: e.target.value }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <Button
            variant="ghost"
            className="mb-4"
            onClick={() => navigate('/')}
            icon={ArrowLeft}
          >
            Back to Home
          </Button>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Sign in to your account
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Or{' '}
            <Link to="/register" className="font-medium text-blue-600 hover:text-blue-500">
              create a new account
            </Link>
          </p>
        </div>

        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <Input
            id="email"
            type="email"
            label="Email address"
            icon={Mail}
            value={formData.email}
            onChange={handleInputChange('email')}
            error={errors.email}
            required
            autoComplete="email"
            placeholder="Email address"
            disabled={loading}
          />

          <Input
            id="password"
            type="password"
            label="Password"
            icon={Lock}
            value={formData.password}
            onChange={handleInputChange('password')}
            error={errors.password}
            required
            autoComplete="current-password"
            placeholder="Password"
            disabled={loading}
          />

          <div className="flex items-center justify-between">
            <div className="text-sm">
              <Link to="/forgot-password" className="font-medium text-blue-600 hover:text-blue-500">
                Forgot your password?
              </Link>
            </div>
          </div>

          <Button
            type="submit"
            variant="primary"
            className="w-full"
            disabled={loading}
          >
            {loading ? 'Signing in...' : 'Sign in'}
          </Button>
        </form>
      </div>
    </div>
  );
}