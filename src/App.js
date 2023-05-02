import React from 'react';
import './style.css';

// move this component to it's own file and import it here
import Contact from '../components/Contact.js';

export const App = (
  // write your HTML code here
  <React.StrictMode>
    <div>
      <h1 className="text-center">My contacts list 📱</h1>

      <Contact
        name="Emmanuelle"
        email="📧emmanuel@email.com"
        phone="📞234234234"
        isDeletable={true}
      />
      <Contact
        name="David"
        email="📧david@email.com"
        phone="📞666"
        isDeletable={false}
      />
      <Contact
        name="Sophie"
        email="📧sophie@email.com"
        phone="📞123"
        isDeletable={true}
      />
      <Contact
        name="Lucas"
        email="📧lucas@email.com"
        phone="📞456"
        isDeletable={false}
      />
      <Contact
        name="Emma"
        email="📧emma@email.com"
        phone="📞789"
        isDeletable={true}
      />
    </div>
  </React.StrictMode>
);

export default App;
