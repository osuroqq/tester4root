import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './styles/datepicker-custom.css';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';

// Placeholder for future props (theme, defaultDuration, etc.)
interface BookingSystemProps {
  theme?: 'light' | 'dark';
  defaultDuration?: number;
  adminEmail?: string;
  calendarIntegration?: 'google' | 'outlook' | 'ics';
}

export const BookingSystem: React.FC<BookingSystemProps> = (props) => {
  // Booking flow steps: 1. Date, 2. Time, 3. Form, 4. Confirmation
  const [step, setStep] = useState(1);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [formData, setFormData] = useState<Record<string, any>>({});

  // Form fields state
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [location, setLocation] = useState('');
  const [services, setServices] = useState<string[]>([]);
  const [phone, setPhone] = useState<string | undefined>('');

  // Placeholder handlers
  const handleDateSelect = (date: Date) => {
    setSelectedDate(date);
    setStep(2);
  };
  const handleTimeSelect = (time: string) => {
    setSelectedTime(time);
  };
  const handleTimeSubmit = () => {
    setStep(3);
  };
  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormData({ name, email, location, services, phone });
    setStep(4);
  };
  const handleBack = () => {
    setStep(step - 1);
  };
  const handleBackToDate = () => {
    setStep(1);
    setSelectedTime(null);
  };

  // Step titles for progress indicator
  const stepTitles = ['Select Date', 'Select Time', 'Your Details', 'Confirmation'];

  // Example time slots
  const timeSlots = ['09:00', '09:30', '10:00', '10:30', '11:00', '11:30', '12:00'];

  // Helper function for date formatting
  const formatDate = (date: Date | null) => {
    if (!date) return '';
    return date.toLocaleDateString('de-DE', { day: '2-digit', month: '2-digit', year: 'numeric' });
  };

  return (
    <div className="relative w-full max-w-lg mx-auto bg-white/90 shadow-xl rounded-2xl p-8 mt-8 mb-8 transition-all duration-500">
      {/* Progress Indicator */}
      <div className="flex justify-between items-center mb-8">
        {stepTitles.map((title, idx) => (
          <div key={title} className="flex-1 flex flex-col items-center">
            <div className={`w-8 h-8 flex items-center justify-center rounded-full border-2 transition-colors duration-300 ${step === idx + 1 ? 'bg-primary text-white border-primary shadow-lg' : 'bg-white text-primary border-gray-300'}`}>{idx + 1}</div>
            <span className={`mt-2 text-xs font-medium transition-colors duration-300 ${step === idx + 1 ? 'text-primary' : 'text-gray-400'}`}>{title}</span>
          </div>
        ))}
      </div>
      {/* Step Content */}
      <div className="transition-all duration-500">
        {step === 1 && (
          <div className="animate-fade-in flex flex-col items-center">
            <h2 className="text-2xl font-bold mb-6 text-primary">Select a Day</h2>
            <div className="rounded-xl p-0 bg-white">
              <DatePicker
                selected={selectedDate}
                onChange={(date: Date | null) => date && handleDateSelect(date)}
                minDate={new Date()}
                inline
                calendarClassName="custom-datepicker"
                dayClassName={date =>
                  selectedDate && date.toDateString() === selectedDate.toDateString()
                    ? 'custom-datepicker-day-selected'
                    : 'custom-datepicker-day'
                }
                renderCustomHeader={({ date, decreaseMonth, increaseMonth }) => (
                  <div className="flex items-center justify-between px-4 py-2 mb-2">
                    <button
                      onClick={decreaseMonth}
                      className="rounded-full p-1 hover:bg-blue-100 transition-colors"
                      type="button"
                    >
                      <span className="text-blue-500 text-xl">&#8592;</span>
                    </button>
                    <span className="font-semibold text-lg text-gray-800">
                      {date.toLocaleString('default', { month: 'long' })} {date.getFullYear()}
                    </span>
                    <button
                      onClick={increaseMonth}
                      className="rounded-full p-1 hover:bg-blue-100 transition-colors"
                      type="button"
                    >
                      <span className="text-blue-500 text-xl">&#8594;</span>
                    </button>
                  </div>
                )}
              />
            </div>
          </div>
        )}
        {step === 2 && selectedTime && (
          <div className="animate-fade-in flex flex-col items-center w-full">
            <h2 className="text-2xl font-bold mb-2 text-primary">Confirm Your Date</h2>
            <p className="text-gray-500 mb-4">Please confirm your selected date and time:</p>
            <div className="flex flex-col items-center mb-6">
              <span className="text-lg font-semibold text-gray-700">{formatDate(selectedDate)}</span>
              <span className="text-lg font-semibold text-gray-700">{selectedTime}</span>
            </div>
            <div className="flex gap-2 w-full max-w-xs">
              <button className="flex-1 py-2 rounded-lg border border-blue-400 text-blue-700 font-bold hover:bg-blue-50 transition-colors" onClick={handleBackToDate}>Back</button>
              <button className="flex-1 py-2 rounded-lg bg-blue-600 text-white font-bold hover:bg-blue-700 transition-colors" onClick={handleTimeSubmit}>Confirm</button>
            </div>
          </div>
        )}
        {step === 2 && !selectedTime && (
          <div className="animate-fade-in flex flex-col items-center w-full">
            <h2 className="text-2xl font-bold mb-2 text-primary">Select a Time</h2>
            <p className="text-gray-500 mb-4">Duration: 45 min</p>
            <div className="w-full flex flex-col gap-3 mb-4">
              {timeSlots.map(time => (
                <button
                  key={time}
                  className="w-full px-4 py-3 rounded-lg border border-blue-400 text-blue-700 font-bold text-lg hover:bg-blue-50 transition-colors"
                  onClick={() => handleTimeSelect(time)}
                >
                  {time}
                </button>
              ))}
            </div>
            <button className="text-blue-500 hover:underline mt-2" onClick={handleBackToDate}>Back</button>
          </div>
        )}
        {step === 3 && (
          <div className="animate-fade-in flex flex-col items-center w-full">
            <h2 className="text-2xl font-bold mb-6 text-primary">Enter Details:</h2>
            <form className="w-full max-w-md flex flex-col gap-4" onSubmit={handleFormSubmit}>
              <div>
                <label className="block font-semibold mb-1">Name *</label>
                <input type="text" className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400" required value={name} onChange={e => setName(e.target.value)} />
              </div>
              <div>
                <label className="block font-semibold mb-1">Email *</label>
                <input type="email" className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400" required value={email} onChange={e => setEmail(e.target.value)} />
              </div>
              <div>
                <label className="block font-semibold mb-1">Location *</label>
                <input type="text" className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400" required value={location} onChange={e => setLocation(e.target.value)} placeholder="Any location" />
              </div>
              <div>
                <label className="block font-semibold mb-1">What cleaning service are you interested in? *</label>
                <div className="flex flex-col gap-2 ml-2">
                  {['Carpet Cleaning', 'Residential Cleaning', 'Private Cleaning'].map(service => (
                    <label key={service} className="flex items-center gap-2 font-normal">
                      <input
                        type="checkbox"
                        checked={services.includes(service)}
                        onChange={e => {
                          if (e.target.checked) setServices([...services, service]);
                          else setServices(services.filter(s => s !== service));
                        }}
                        className="accent-blue-600"
                      />
                      {service}
                    </label>
                  ))}
                </div>
              </div>
              <div>
                <label className="block font-semibold mb-1">Phone Number: *</label>
                <PhoneInput
                  international
                  defaultCountry="DE"
                  value={phone}
                  onChange={setPhone}
                  className="w-full"
                  required
                />
              </div>
              <p className="text-xs text-gray-500 mt-2">By proceeding, you confirm that you have read and agree to <a href="https://calendly.com/terms" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">Calendly's Terms of Use</a> and <a href="https://calendly.com/privacy" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">Privacy Notice</a>.</p>
              <div className="flex gap-2 mt-4">
                <button type="button" className="flex-1 py-2 rounded-lg border border-blue-400 text-blue-700 font-bold hover:bg-blue-50 transition-colors" onClick={handleBack}>Back</button>
                <button type="submit" className="flex-1 py-2 rounded-lg bg-blue-600 text-white font-bold hover:bg-blue-700 transition-colors">Submit</button>
              </div>
            </form>
          </div>
        )}
        {step === 4 && (
          <div className="animate-fade-in flex flex-col items-center">
            <h2 className="text-2xl font-bold mb-4 text-primary">Booking Confirmed!</h2>
            <div className="bg-green-50 border border-green-200 rounded-xl p-6 mt-4 shadow">
              <p className="text-lg font-medium text-green-700 mb-2">Thank you for your booking!</p>
              <p className="text-gray-700">Date: <span className="font-semibold">{formatDate(selectedDate)}</span></p>
              <p className="text-gray-700">Time: <span className="font-semibold">{selectedTime}</span></p>
              <p className="text-gray-700">Name: <span className="font-semibold">{formData.name}</span></p>
              <p className="text-gray-700">Email: <span className="font-semibold">{formData.email}</span></p>
              <p className="text-gray-700">Location: <span className="font-semibold">{formData.location}</span></p>
              <p className="text-gray-700">Phone: <span className="font-semibold">{formData.phone}</span></p>
              <p className="text-gray-700">Services: <span className="font-semibold">
                {formData.services && Array.isArray(formData.services)
                 && formData.services.length > 0 ? formData.services.join(', ') : 'No services selected'}</span>
              </p>
            </div>
            <button className="mt-6 py-2 px-6 rounded-lg bg-blue-600 text-white font-bold hover:bg-blue-700 transition-colors" onClick={() => { setStep(1); setSelectedDate(null); setSelectedTime(null); setFormData({}); setName(''); setEmail(''); setLocation(''); setServices([]); setPhone(''); }}>Make Another Booking</button>
          </div>
        )}
      </div>
      {/* Gentle fade-in animation */}
      
      <style jsx global>{`
        .animate-fade-in {
          animation: fadeIn 0.6s cubic-bezier(0.4, 0, 0.2, 1);
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(16px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-slide-left {
          animation: slideLeft 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }
        @keyframes slideLeft {
          from { opacity: 0; transform: translateX(40px); }
          to { opacity: 1; transform: translateX(0); }
        }
        /* Custom style for react-phone-number-input to match other inputs */
        .PhoneInputInput {
          width: 100%;
          border: 1px solid #d1d5db;
          border-radius: 0.5rem;
          padding: 0.5rem 1rem;
          font-size: 1rem;
          outline: none;
          transition: border-color 0.2s, box-shadow 0.2s;
        }
        .PhoneInputInput:focus {
          border-color: #2563eb;
          box-shadow: 0 0 0 2px #60a5fa44;
        }
      `}</style>
    </div>
  );
}; 