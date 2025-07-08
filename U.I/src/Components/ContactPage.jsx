
const ContactPage = () => {
    const contacts = [
        {
            icon: '💬',
            title: 'Chat to sales',
            description: 'Speak to our friendly team.',
            link: 'mailto:sales@untitledui.com',
            linkText: 'sales@untitledui.com',
        },
        {
            icon: '🛠️',
            title: 'Chat to support',
            description: 'We’re here to help.',
            link: 'mailto:support@untitledui.com',
            linkText: 'support@untitledui.com',
        },
        {
            icon: '📍',
            title: 'Visit us',
            description: 'Visit our office HQ.',
            link: 'https://www.google.com/maps',
            linkText: 'View on Google Maps',
        },
        {
            icon: '📞',
            title: 'Call us',
            description: 'Mon–Fri from 8am to 5pm.',
            link: 'tel:+15550000000',
            linkText: '+1 (555) 000-0000',
        },
    ];

    return (
        <div className="contact-page">
            <div className="contact-header">
                <h1>Contact our friendly team</h1>
                <p>Let us know how we can help.</p>
            </div>
            <div className="contact-cards">
                {contacts.map((item, index) => (
                    <div key={index} className="contact-card">
                        <div className="icon">{item.icon}</div>
                        <h3>{item.title}</h3>
                        <p>{item.description}</p>
                        <a href={item.link}>{item.linkText}</a>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ContactPage;
