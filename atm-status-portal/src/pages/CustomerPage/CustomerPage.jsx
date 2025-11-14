import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CustomerPage = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedRegion, setSelectedRegion] = useState('All Regions');
  const [showRegionDropdown, setShowRegionDropdown] = useState(false);

  // Sample ATM data with services and last check time
  const atmLocations = [
    { 
      id: 1, 
      name: 'Bustillos Branch', 
      region: 'Metro Manila', 
      status: 'online', 
      address: '449 J. Figueras St., Barangay 402 Zone 41, Sampaloc, Manila 1008',
      hours: '24/7',
      services: ['Cash Withdrawal', 'Balance Inquiry', 'Bills Payment'],
      lastCheck: '2 mins ago'
    },
    { 
      id: 2, 
      name: 'Bustillos CAM', 
      region: 'Metro Manila', 
      status: 'offline', 
      address: '449 J. Figueras St., Brgy. 402 Zone 41, Sampaloc, Manila',
      hours: 'Mon-Fri 9:00 AM - 4:30 PM',
      services: ['Cash Withdrawal', 'Balance Inquiry'],
      lastCheck: '15 mins ago'
    },
    { 
      id: 3, 
      name: 'Makati Avenue Branch', 
      region: 'Metro Manila', 
      status: 'online', 
      address: 'Sen. Gil Puyat Ave., Makati City',
      hours: '24/7',
      services: ['Cash Withdrawal', 'Balance Inquiry', 'Bills Payment', 'Deposit'],
      lastCheck: '1 min ago'
    },
    { 
      id: 4, 
      name: 'Ortigas Center Branch', 
      region: 'Metro Manila', 
      status: 'maintenance', 
      address: 'Emerald Ave., Ortigas Center, Pasig City',
      hours: '24/7',
      services: ['Cash Withdrawal', 'Balance Inquiry'],
      lastCheck: '10 mins ago'
    },
    { 
      id: 5, 
      name: 'BGC High Street', 
      region: 'Metro Manila', 
      status: 'online', 
      address: '7th Ave. corner 28th St., BGC, Taguig City',
      hours: '24/7',
      services: ['Cash Withdrawal', 'Balance Inquiry', 'Bills Payment', 'Deposit'],
      lastCheck: '5 mins ago'
    },
  ];

  const regions = ['All Regions', 'Metro Manila', 'Visayas', 'Mindanao', 'Luzon'];

  const filteredATMs = atmLocations.filter(atm => {
    const matchesSearch =
      atm.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      atm.address.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesRegion = selectedRegion === 'All Regions' || atm.region === selectedRegion;
    return matchesSearch && matchesRegion;
  });

  const handleLogout = () => {
    navigate('/');
  };

  const getStatusConfig = (status) => {
    switch(status) {
      case 'online':
        return {
          label: 'Online',
          bgColor: 'bg-green-500',
          textColor: 'text-white',
          icon: '✓'
        };
      case 'offline':
        return {
          label: 'Offline',
          bgColor: 'bg-red-500',
          textColor: 'text-white',
          icon: '⚠'
        };
      case 'maintenance':
        return {
          label: 'Under Maintenance',
          bgColor: 'bg-orange-500',
          textColor: 'text-white',
          icon: '⚠'
        };
      default:
        return {
          label: 'Unknown',
          bgColor: 'bg-gray-500',
          textColor: 'text-white',
          icon: '?'
        };
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 w-screen">
      {/* Header - SMALLER HEIGHT, Full Width */}
    <header className="bg-white border-b border-gray-200 sticky top-0 z-10 w-screen">
  <div className="w-full px-6 py-1.5 flex items-center justify-between">
    <div className="flex items-center gap-2">
      <div className="inline-flex items-center justify-center w-7 h-7 bg-red-600 rounded-md">
        <span className="text-white text-xs font-bold">BPI</span>
      </div>
      <div>
        <h1 className="font-semibold text-gray-900 leading-tight" style={{ fontSize: '19px' }}>ATM Status Portal</h1>
      
              <p className="text-[10px] text-gray-500">Customer View</p>
            </div>
          </div>
          <button
            onClick={handleLogout}
            className="px-3 py-1 text-xs font-medium text-gray-700 hover:bg-gray-100 rounded-md transition-colors"
          >
            Logout
          </button>
        </div>
      </header>

      {/* Main Content - ABSOLUTE FULL WIDTH */}
      <main className="flex-1 w-screen">
        <div className="w-full px-6 py-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Find ATM Status</h2>

          {/* Search and Filter */}
          <div className="bg-white rounded-lg shadow-sm p-4 mb-6 w-full">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Search Input */}
              <div className="md:col-span-2">
                <label htmlFor="search" className="block text-sm font-semibold text-gray-700 mb-2">Search by Location or Address</label>
                <input
                  id="search"
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search ATM locations..."
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600 transition-all"
                />
              </div>

              {/* Region Dropdown */}
              <div className="relative">
                <label htmlFor="region-btn" className="block text-sm font-semibold text-gray-700 mb-2">Filter by Region</label>
                <button
                  id="region-btn"
                  onClick={() => setShowRegionDropdown(!showRegionDropdown)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md text-left bg-white hover:bg-gray-50 transition-colors flex items-center justify-between"
                >
                  <span>{selectedRegion}</span>
                  <svg className={`w-4 h-4 transition-transform ${showRegionDropdown ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                </button>

                {showRegionDropdown && (
                  <div className="absolute top-full mt-1 w-full bg-white border border-gray-300 rounded-lg shadow-lg z-10">
                    {regions.map(region => (
                      <button
                        key={region}
                        onClick={() => {
                          setSelectedRegion(region);
                          setShowRegionDropdown(false);
                        }}
                        className={`w-full text-left px-4 py-2.5 hover:bg-gray-100 transition-colors ${
                          selectedRegion === region ? 'bg-red-50 text-red-600 font-semibold' : 'text-gray-900'
                        }`}
                      >
                        {region}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Results Count */}
          <div className="mb-4">
            <p className="text-sm text-gray-600">
              Showing <span className="font-semibold">{filteredATMs.length}</span> ATM location{filteredATMs.length !== 1 ? 's' : ''}
            </p>
          </div>

          {/* ATM List - Full Width Cards */}
          <div className="space-y-4 mb-8 w-full">
            {filteredATMs.length > 0 ? (
              filteredATMs.map(atm => {
                const statusConfig = getStatusConfig(atm.status);
                return (
                  <div key={atm.id} className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow w-full">
                    {/* Card Header */}
                    <div className="p-6 pb-4">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{atm.name}</h3>
                      
                      {/* Address with icon */}
                      <div className="flex items-start gap-2 mb-3">
                        <svg className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                        </svg>
                        <span className="text-sm text-gray-600">{atm.address}</span>
                      </div>

                      {/* Status Badge and Hours */}
                      <div className="flex items-center gap-2 mb-4">
                        <span className={`inline-flex items-center gap-1 px-2.5 py-1 rounded text-xs font-semibold ${statusConfig.bgColor} ${statusConfig.textColor}`}>
                          {statusConfig.icon} {statusConfig.label}
                        </span>
                        <span className="text-sm text-gray-600">{atm.hours}</span>
                      </div>
                    </div>

                    {/* Card Footer - Two Column Layout */}
                    <div className="px-6 pb-6 pt-2 border-t border-gray-100">
                      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
                        {/* Available Services */}
                        <div className="flex-1">
                          <h4 className="text-sm font-medium text-gray-700 mb-2">Available Services</h4>
                          <div className="flex flex-wrap gap-2">
                            {atm.services.map((service, index) => (
                              <span
                                key={index}
                                className="inline-block px-3 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded"
                              >
                                {service}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Last Status Check */}
                        <div className="text-right sm:ml-4 flex-shrink-0">
                          <h4 className="text-sm font-medium text-gray-700 mb-1">Last Status Check</h4>
                          <p className="text-sm text-gray-600">{atm.lastCheck}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })
            ) : (
              <div className="bg-white rounded-lg shadow-sm p-8 text-center w-full">
                <svg className="w-12 h-12 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p className="text-gray-600 font-medium">No ATM locations found</p>
                <p className="text-gray-500 text-sm">Try adjusting your search or filter criteria</p>
              </div>
            )}
          </div>

          {/* Legend / About This Service */}
          <div className="bg-white rounded-lg shadow-sm p-6 mb-8 w-full">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">About This Service</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-sm text-gray-600">• Status information is updated in real-time</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-green-100 flex-shrink-0 mt-0.5">
                  <span className="w-2.5 h-2.5 bg-green-600 rounded-full"></span>
                </span>
                <span className="text-sm text-gray-600"><span className="font-semibold text-gray-900">Online</span> – ATM is fully operational</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-orange-100 flex-shrink-0 mt-0.5">
                  <span className="w-2.5 h-2.5 bg-orange-600 rounded-full"></span>
                </span>
                <span className="text-sm text-gray-600"><span className="font-semibold text-gray-900">Under Maintenance</span> – Temporary service interruption</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-red-100 flex-shrink-0 mt-0.5">
                  <span className="w-2.5 h-2.5 bg-red-600 rounded-full"></span>
                </span>
                <span className="text-sm text-gray-600"><span className="font-semibold text-gray-900">Offline</span> – ATM is currently unavailable</span>
              </li>
            </ul>
            <p className="mt-4 text-sm text-gray-600">
              For assistance, contact BPI Customer Service at <span className="font-semibold">(02) 889-10000</span> or visit <a href="https://www.bpi.com.ph" target="_blank" rel="noopener noreferrer" className="text-red-600 hover:text-red-700 font-semibold">www.bpi.com.ph</a>
            </p>
          </div>
        </div>
      </main>

      {/* Footer - Full Width */}
      <footer className="border-t border-gray-200 bg-white mt-auto w-screen">
        <div className="w-full px-6 py-3 text-center text-sm text-gray-500">
          <p>© 2025 BPI. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default CustomerPage;