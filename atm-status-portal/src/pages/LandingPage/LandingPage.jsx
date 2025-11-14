import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
  const navigate = useNavigate();
  // role: 'admin' | 'customer'
  const [role, setRole] = useState('admin');
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
 
  // helper for role-specific display text
  const isAdmin = role === 'admin';

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    } else if (isAdmin && !formData.email.endsWith('@bpi.com.ph')) {
      // only enforce corporate email for admin
      newErrors.email = 'Admin must sign in with a BPI corporate email (@bpi.com.ph)';
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      // route by role: customers -> status, admins -> employee report
      if (isAdmin) {
        navigate('/employee-report');
      } else {
        navigate('/status');
      }
    }, 1500);
  };

  const handleBackToLocator = () => {
    navigate('/atm-locator');
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gradient-to-b from-gray-50 to-white p-6">
      <div className="w-full max-w-4xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col md:flex-row">
          {/* Left / Hero */}
          <div className="md:w-1/2 px-8 py-10 flex flex-col justify-center items-start gap-6 bg-gradient-to-b from-red-50 to-white">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-red-600 rounded-2xl">
              <span className="text-white text-3xl font-bold">BPI</span>
            </div>

            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                ATM Status Portal
              </h1>
              <p className="mt-2 text-gray-600 text-sm">
                Sign in to manage ATM status updates
              </p>
            </div>
          </div>

          {/* Right / Form */}
          <div className="md:w-1/2 px-8 py-10">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-900">Login</h2>
              <div className="flex gap-1 bg-gray-200 rounded-full p-0.5">
                <button
                  type="button"
                  aria-pressed={isAdmin}
                  onClick={() => setRole('admin')}
                  className={`px-3 py-1.5 rounded-full text-xs font-semibold transition ${
                    isAdmin ? 'bg-white text-red-600 shadow-sm' : 'text-gray-600 hover:text-gray-700'
                  }`}
                >
                  Admin
                </button>
                <button
                  type="button"
                  aria-pressed={!isAdmin}
                  onClick={() => setRole('customer')}
                  className={`px-3 py-1.5 rounded-full text-xs font-semibold transition ${
                    !isAdmin ? 'bg-white text-sky-600 shadow-sm' : 'text-gray-600 hover:text-gray-700'
                  }`}
                >
                  Customer
                </button>
              </div>
            </div>

             <form onSubmit={handleSubmit} className="space-y-6">
               {/* Email */}
               <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">Email</label>
                 <input
                   type="email"
                   id="email"
                   name="email"
                   value={formData.email}
                   onChange={handleChange}
                   placeholder={isAdmin ? 'admin@bpi.com.ph' : 'your@email.com'}
                   className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent transition-all ${
                    errors.email ? 'border-red-500 bg-red-50' : 'border-gray-300'
                   }`}
                 />
                 {errors.email && (
                  <p className="mt-1.5 text-sm text-red-600">
                     {errors.email}
                   </p>
                 )}
               </div>

               {/* Password */}
               <div>
                <label htmlFor="password" className="block text-sm font-semibold text-gray-700 mb-2">Password</label>
                 <div className="relative">
                   <input
                     type={showPassword ? 'text' : 'password'}
                     id="password"
                     name="password"
                     value={formData.password}
                     onChange={handleChange}
                     placeholder="••••••••"
                     className={`w-full px-4 py-3 pr-12 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent transition-all ${
                      errors.password ? 'border-red-500 bg-red-50' : 'border-gray-300'
                     }`}
                   />
                   <button
                     type="button"
                     onClick={() => setShowPassword(!showPassword)}
                     className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                   >
                     {showPassword ? (
                       <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                       </svg>
                     ) : (
                       <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                       </svg>
                     )}
                   </button>
                 </div>
                 {errors.password && (
                  <p className="mt-1.5 text-sm text-red-600">
                     {errors.password}
                   </p>
                 )}
               </div>

               <button
                 type="submit"
                 disabled={isLoading}
                 style={{ backgroundColor: '#dc2626' }}
                className={`w-full text-white font-semibold py-3 px-4 rounded-lg transition-all flex items-center justify-center gap-2 ${isLoading ? 'opacity-60 cursor-not-allowed' : 'hover:bg-red-700'}`}
                 aria-disabled={isLoading}
                 aria-label={isAdmin ? 'Sign in as admin' : 'Sign in as customer'}
               >
                 {isLoading ? (
                   <>
                     <svg className="animate-spin h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                       <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                       <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                     </svg>
                     Signing In...
                   </>
                 ) : (
                   isAdmin ? 'Sign In as Admin' : 'Sign In'
                 )}
               </button>
             </form>
           </div>
         </div>

        <p className="text-xs text-gray-500 text-center mt-6">© 2025 BPI. All rights reserved.</p>
       </div>
     </div>
   );
 };
 
 export default LandingPage;