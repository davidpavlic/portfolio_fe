import '../styling/MyMainCertificatesSection.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { useTranslation } from 'react-i18next';
import { useCertificates } from '../../../pages/MyMainPageData';


///* FUNCTIONAL COMPONENT *///
const MyMainCertificatesSection = () => {

    const { t } = useTranslation();
    const certificates = useCertificates();

    return (
        <section className='my-main-certificates-section'>
            <div className='my-main-certificates-container'>
                <h2 className='my-main-contact-title'>{t('main_certificates_title')}</h2>
                <p className='my-main-contact-subtitle'>{t('main_certificates_subtitle')}</p>

                <div className='my-main-certificates-carousel-container'>
                    <Swiper
                        modules={[Navigation, Pagination]}
                        spaceBetween={30}
                        slidesPerView={1}
                        navigation={{nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev'}}
                        pagination={{clickable: true, el: '.swiper-pagination', type: 'bullets'}}
                        breakpoints={{
                            768: {slidesPerView: 2},
                            1200: {slidesPerView: 3}
                        }}
                    >
                        {certificates.map((cert) => (
                            <SwiperSlide key={cert.id}>
                                <div className='my-main-certificate-card'>
                                    <div className='my-main-certificate-header'>
                                        <div className='my-main-certificate-type'>{cert.type}</div>
                                        <h3 className='my-main-certificate-title'>{cert.title}</h3>
                                        <div className='my-main-certificate-issuer'>{cert.issuer}</div>
                                        <div className='my-main-certificate-date'>{cert.date}</div>
                                    </div>
                                    <div className='my-main-certificate-content'>
                                        <p className='my-main-certificate-description'>{cert.description}</p>
                                        <div>
                                            <a href={cert.file} download className='my-main-download-button'>
                                                {t('main_certificates_download')}
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    
                    <div>
                        <div className='swiper-button-prev my-main-certificates-swiper-button'></div>
                        <div className='swiper-pagination'></div>
                        <div className='swiper-button-next my-main-certificates-swiper-button'></div>
                    </div>
                </div>
            </div>
        </section>
    );
};


///* EXPORT *///
export default MyMainCertificatesSection;