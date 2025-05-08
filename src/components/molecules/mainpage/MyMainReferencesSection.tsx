import '../styling/MyMainReferencesSection.css';
//import irebCertificate from '@/assets/certificates/ireb-certificate.pdf';
//import efzCertificate from '@/assets/certificates/efz-certificate.pdf';
//import bmsCertificate from '@/assets/certificates/bms-certificate.pdf';

type CertificateItem = {
    id: number;
    title: string;
    issuer: string;
    date: string;
    description: string;
    file: string;
    type: 'employment' | 'education';
};

const MyMainReferencesSection = () => {
    const certificates: CertificateItem[] = [
        {
            id: 1,
            title: "IREB CPRE Foundation Level",
            issuer: "International Requirements Engineering Board",
            date: "2022",
            description: "Certified Professional for Requirements Engineering",
            file: "TODO",
            type: 'employment'
        },
        {
            id: 2,
            title: "EFZ in Application Development",
            issuer: "Technische Berufsschule Zürich",
            date: "2022",
            description: "Federal VET Diploma with honors (GPA: 5.5/6)",
            file: "TODO",
            type: 'education'
        },
        {
            id: 3,
            title: "Vocational Baccalaureate (Technical)",
            issuer: "Berufsmaturitätsschule Zürich",
            date: "2022",
            description: "Technical vocational baccalaureate (GPA: 5.2/6)",
            file: "TODO",
            type: 'education'
        }
    ];

    return (
        <section className="certificates-section">
            <div className="section-container">
                <h2 className="section-title">Certificates & Credentials</h2>
                <p className="section-subtitle">My official qualifications and certifications</p>

                <div className="certificates-grid">
                    {certificates.map((cert) => (
                        <div className={`certificate-card ${cert.type}`} key={cert.id}>
                            <div className="certificate-header">
                                <div className="certificate-type">{cert.type === 'employment' ? 'Professional' : 'Academic'}</div>
                                <h3 className="certificate-title">{cert.title}</h3>
                                <div className="certificate-issuer">{cert.issuer}</div>
                                <div className="certificate-date">{cert.date}</div>
                            </div>

                            <div className="certificate-content">
                                <p className="certificate-description">{cert.description}</p>

                                <div className="certificate-actions">
                                    <a
                                        href={cert.file}
                                        download
                                        className="download-button"
                                    >
                                        Download Certificate
                                        <svg className="download-icon" viewBox="0 0 24 24">
                                            <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default MyMainReferencesSection;