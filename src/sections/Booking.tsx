'use client';

/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, type FC } from 'react';
import './Booking.css';

const Booking: FC = () => {
  useEffect(() => {
    (function (C: any, A: string, L: string) {
      const p = (a: any, ar: any) => { a.q.push(ar); };
      const d = C.document;
      C.Cal = C.Cal || function (this: any) {
        const cal = C.Cal;
        const ar = arguments;
        if (!cal.loaded) {
          cal.ns = {};
          cal.q = cal.q || [];
          d.head.appendChild(d.createElement('script')).src = A;
          cal.loaded = true;
        }
        if (ar[0] === L) {
          const api: any = function () { p(api, arguments); };
          const namespace = ar[1];
          api.q = api.q || [];
          if (typeof namespace === 'string') {
            cal.ns[namespace] = cal.ns[namespace] || api;
            p(cal.ns[namespace], ar);
            return;
          }
          p(cal, ar);
          return;
        }
        p(cal, ar);
      };
    })(window, 'https://app.cal.com/embed/embed.js', 'init');

    const Cal = (window as any).Cal;
    Cal('init', 'ntherapy', { origin: 'https://app.cal.com' });
    Cal.ns.ntherapy('inline', {
      elementOrSelector: '#cal-embed',
      calLink: 'n.therapy',
      layout: 'month_view',
    });
    Cal.ns.ntherapy('ui', {
      hideEventTypeDetails: false,
      layout: 'month_view',
    });
  }, []);

  return (
    <section id="booking" className="booking section-padding">
      <div className="container">
        <div className="booking-header">
          <h2>Prendre Rendez-vous</h2>
          <p>
            Choisissez un créneau disponible. Votre demande me sera envoyée par email
            et je vous confirmerai le rendez-vous dans les plus brefs délais.
          </p>
        </div>

        <div className="calendar-wrapper">
          <div id="cal-embed" style={{ width: '100%', minHeight: '700px' }} />
        </div>
      </div>
    </section>
  );
};

export default Booking;
