import { insurChatConfig } from '@/data/products'

function HowItsWork() {
    const config = insurChatConfig;

    return (
        <section className="position-relative">
            <img src="/InsurUp/x.png" className="shape-x" alt="" />
            <section className="benefits" id="benefits">
                <div className="container">
                    <div className="row spacing-48">
                        <div className="col-lg-12">
                            <div className="section-badge">
                                <i className="icon-star"></i>
                                <span>Nasıl Çalışır</span>
                            </div>
                            <h2>{config.howItWorksTitle}</h2>
                            <p>
                                {config.howItWorksDescription}
                            </p>
                        </div>
                    </div>
                    <div className="row">
                        {config.steps.map((step, index) => (
                            <div key={index} className="col-lg-4 col-md-6 col-sm-12">
                                <div className="benefit-card" id={`benefit${index + 1}`}>
                                    <div className="benefit-header">
                                        <img src={step.image} width={300} alt={step.title} />
                                    </div>
                                    <div className="benefit-body">
                                        <h3>{step.title}</h3>
                                        <p>{step.description}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <section className="properties" id="properties">
                <div className="properties-bg">
                    <img src={config.platformImage} className="d-none d-md-block" alt="Özellikler Görseli" />
                    <img src={config.platformImage} className="d-md-none" alt="Özellikler Görseli" />
                </div>
            </section>
            <section className="information-section">
                <div className="container">
                    {config.infoSections.map((info, index) => (
                        <div key={index} className={`row align-items-center ${info.reverse ? 'flex-lg-row-reverse' : ''}`}>
                            <div className="col-lg-5">
                                <span className="badge d-flex align-items-center gap-2">
                                    <i className="fa-solid fa-robot"></i>
                                    {info.badge}
                                </span>
                                <h2>{info.title}</h2>
                                <p className="info-text">
                                    {info.description}
                                </p>
                                <ul className="list-unstyled">
                                    {info.features.map((feature, fIndex) => (
                                        <li key={fIndex} className="d-flex align-items-center">
                                            <i className="fa-solid fa-check-circle text-primary me-2"></i> {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="col-lg-7 text-center">
                                <div className="info-card">
                                    <img src={info.image} alt={info.imageAlt} className="img-fluid" />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </section>
    )
}

export default HowItsWork

