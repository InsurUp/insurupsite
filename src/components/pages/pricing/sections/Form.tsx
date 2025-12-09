'use client'
import { useState, useEffect } from 'react'
import { Formik, Form as FormikForm, Field, ErrorMessage } from 'formik'
import {
    onlyLetters,
    onlyDigits,
    formatPhone,
    pricingFormSchema,
    createValidator,
    type PricingFormValues
} from '@/utils/form'
import { sendEmail } from '@/utils/email'

const validate = createValidator(pricingFormSchema);

function Form() {
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
    const [submitMessage, setSubmitMessage] = useState('');

    const initialValues: PricingFormValues = {
        agency_name: '',
        name_surname: '',
        phone: '',
        email: '',
        member_number: '',
        insurance_company_count: '',
        package: '',
    }

    const handleSubmit = async (
        values: PricingFormValues,
        { setSubmitting, resetForm }: { setSubmitting: (isSubmitting: boolean) => void; resetForm: () => void }
    ) => {
        try {
            setSubmitStatus('idle');
            setSubmitMessage('');

            const result = await sendEmail('PRICING_FORM', {
                ...values,
                form_type: 'Anasayfa',
            });

            if (result.success) {
                setSubmitStatus('success');
                setSubmitMessage(result.message);
                resetForm();
            } else {
                setSubmitStatus('error');
                setSubmitMessage(result.message);
            }
        } catch (error) {
            setSubmitStatus('error');
            setSubmitMessage('Bir hata oluştu, lütfen tekrar deneyin');
            console.error('Form submit error:', error);
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <section id="contact-form" className="py-5">
            <div className="container">
                <div className="text-center">
                    <h2 className="fw-bold fs-2 mb-3">Hazır mısınız?</h2>
                    <p className="text-muted mb-4" id="contact-desc">
                        Acentenizi dijitalleştirmek için ilk adımı atın. Ekibimiz en kısa sürede sizinle iletişime geçecektir.
                    </p>
                </div>

                <div className={`form_area ${submitStatus === 'success' ? 'form-success' : ''}`} style={{ minHeight: "200px" }}>
                    <Formik
                        initialValues={initialValues}
                        validate={validate}
                        onSubmit={handleSubmit}
                    >
                        {({ values, setFieldValue, isSubmitting, isValid, dirty, setValues }) => {
                            useEffect(() => {
                                const handler = (e: CustomEvent<{ member_number?: string | number; insurance_company_count?: string | number; package?: string }>) => {
                                    const detail = e?.detail || {}
                                    const nextValues = { ...values }
                                    if (typeof detail.member_number === 'string' || typeof detail.member_number === 'number') {
                                        nextValues.member_number = String(detail.member_number)
                                    }
                                    if (typeof detail.insurance_company_count === 'string' || typeof detail.insurance_company_count === 'number') {
                                        nextValues.insurance_company_count = String(detail.insurance_company_count)
                                    }
                                    if (typeof detail.package === 'string') {
                                        nextValues.package = detail.package
                                    }
                                    setValues(nextValues)
                                }
                                window.addEventListener('insurup:prefill-contact', handler as EventListener)
                                return () => window.removeEventListener('insurup:prefill-contact', handler as EventListener)
                            }, [values, setValues])

                            return (
                                <FormikForm id="contactForm" style={{ display: submitStatus === 'success' ? 'none' : 'block' }}>
                                    <div className="row">
                                        {/* Acente İsmi */}
                                        <div className="col-md-6">
                                            <div className="form-input form-group input-group">
                                                <label htmlFor="agencyName">Acente İsmi<span>*</span></label>
                                                <span className="input-group-text" id="addon-agencyName"><i className="icon-acente"></i></span>
                                                <Field
                                                    type="text"
                                                    name="agency_name"
                                                    id="agencyName"
                                                    className="form-control"
                                                    placeholder="Acente A.Ş"
                                                    autoComplete="off"
                                                />
                                                <ErrorMessage name="agency_name" component="div" className="invalid-feedback d-block" />
                                            </div>
                                        </div>

                                        {/* Ad Soyad */}
                                        <div className="col-md-6">
                                            <div className="form-input form-group input-group">
                                                <label htmlFor="fullName">Ad soyad<span>*</span></label>
                                                <span className="input-group-text" id="addon-fullName"><i className="icon-person"></i></span>
                                                <Field name="name_surname">
                                                    {({ field }: { field: { name: string; value: string; onChange: (e: React.ChangeEvent<HTMLInputElement>) => void; onBlur: (e: React.FocusEvent<HTMLInputElement>) => void } }) => (
                                                        <input
                                                            {...field}
                                                            type="text"
                                                            id="fullName"
                                                            className="form-control"
                                                            placeholder="Ad Soyad"
                                                            autoComplete="off"
                                                            onChange={(e) => setFieldValue('name_surname', onlyLetters(e.target.value))}
                                                        />
                                                    )}
                                                </Field>
                                                <ErrorMessage name="name_surname" component="div" className="invalid-feedback d-block" />
                                            </div>
                                        </div>

                                        {/* Telefon */}
                                        <div className="col-md-6">
                                            <div className="form-input form-group input-group">
                                                <label htmlFor="phoneNumber">Telefon<span>*</span></label>
                                                <span className="input-group-text" id="addon-phoneNumber"><i className="icon-phone"></i></span>
                                                <Field name="phone">
                                                    {({ field }: { field: { name: string; value: string; onChange: (e: React.ChangeEvent<HTMLInputElement>) => void; onBlur: (e: React.FocusEvent<HTMLInputElement>) => void } }) => (
                                                        <input
                                                            {...field}
                                                            type="text"
                                                            id="phoneNumber"
                                                            className="form-control"
                                                            placeholder="(532) 000-0000"
                                                            autoComplete="off"
                                                            inputMode="tel"
                                                            onChange={(e) => setFieldValue('phone', formatPhone(e.target.value))}
                                                        />
                                                    )}
                                                </Field>
                                                <ErrorMessage name="phone" component="div" className="invalid-feedback d-block" />
                                            </div>
                                        </div>

                                        {/* E-Mail */}
                                        <div className="col-md-6">
                                            <div className="form-input form-group input-group">
                                                <label htmlFor="emailAddress">E-Mail<span>*</span></label>
                                                <span className="input-group-text" id="addon-emailAddress" style={{ width: "36px" }}><i className="fa-regular fa-envelope" style={{ fontSize: "18px" }}></i></span>
                                                <Field
                                                    type="email"
                                                    name="email"
                                                    id="emailAddress"
                                                    className="form-control"
                                                    placeholder="E-Mail"
                                                    autoComplete="off"
                                                />
                                                <ErrorMessage name="email" component="div" className="invalid-feedback d-block" />
                                            </div>
                                        </div>

                                        {/* Toplam Kullanıcı Sayısı */}
                                        <div className="col-md-6">
                                            <div className="form-input form-group input-group">
                                                <label htmlFor="totalUserCount">Toplam Kullanıcı Sayınız<span>*</span></label>
                                                <span className="input-group-text" id="addon-totalUserCount" style={{ width: "36px" }}><i className="fa-solid fa-user" style={{ fontSize: "18px" }}></i></span>
                                                <Field name="member_number">
                                                    {({ field }: { field: { name: string; value: string; onChange: (e: React.ChangeEvent<HTMLInputElement>) => void; onBlur: (e: React.FocusEvent<HTMLInputElement>) => void } }) => (
                                                        <input
                                                            {...field}
                                                            type="text"
                                                            id="totalUserCount"
                                                            className="form-control"
                                                            placeholder="Kullanıcı Sayısı"
                                                            autoComplete="off"
                                                            inputMode="numeric"
                                                            onChange={(e) => setFieldValue('member_number', onlyDigits(e.target.value))}
                                                        />
                                                    )}
                                                </Field>
                                                <ErrorMessage name="member_number" component="div" className="invalid-feedback d-block" />
                                            </div>
                                        </div>

                                        {/* Sigorta Şirketi Sayısı */}
                                        <div className="col-md-6">
                                            <div className="form-input form-group input-group">
                                                <label htmlFor="insuranceCompanyCount">Sigorta Şirketi<span>*</span></label>
                                                <span className="input-group-text" id="addon-insuranceCompanyCount" style={{ width: "36px" }}><i className="fa-solid fa-shield-halved" style={{ fontSize: "18px" }}></i></span>
                                                <Field name="insurance_company_count">
                                                    {({ field }: { field: { name: string; value: string; onChange: (e: React.ChangeEvent<HTMLInputElement>) => void; onBlur: (e: React.FocusEvent<HTMLInputElement>) => void } }) => (
                                                        <input
                                                            {...field}
                                                            type="text"
                                                            id="insuranceCompanyCount"
                                                            className="form-control"
                                                            placeholder="Çalıştığınız Sigorta Şirketi Sayısı"
                                                            autoComplete="off"
                                                            inputMode="numeric"
                                                            onChange={(e) => setFieldValue('insurance_company_count', onlyDigits(e.target.value))}
                                                        />
                                                    )}
                                                </Field>
                                                <ErrorMessage name="insurance_company_count" component="div" className="invalid-feedback d-block" />
                                            </div>
                                        </div>

                                        {/* Paket Seçimi ve Gönder Butonu */}
                                        <div className="col-12">
                                            <div className="form-input form-group input-group mb-4">
                                                <label htmlFor="packageSelect">Paket<span>*</span></label>
                                                <span className="input-group-text" id="addon-packageSelect" style={{ width: "36px" }}><i className="fa-solid fa-box" style={{ fontSize: "18px" }}></i></span>
                                                <Field as="select" id="packageSelect" name="package" className="form-select">
                                                    <option value="">Paket</option>
                                                    <option value="Tanışalım Paket">Tanışalım Paket</option>
                                                    <option value="Profesyonel Paket">Profesyonel Paket</option>
                                                    <option value="Dijital Profesyonel Paket">Dijital Profesyonel Paket</option>
                                                </Field>
                                                <ErrorMessage name="package" component="div" className="invalid-feedback d-block" />
                                            </div>

                                            {/* Hata Mesajı */}
                                            {submitStatus === 'error' && (
                                                <div className="alert alert-danger mb-3" role="alert">
                                                    {submitMessage}
                                                </div>
                                            )}

                                            <div className="form-input">
                                                <button
                                                    className="btn-formsend"
                                                    type="submit"
                                                    disabled={!isValid || !dirty || isSubmitting}
                                                >
                                                    {isSubmitting ? 'Gönderiliyor...' : 'Gönder'}
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </FormikForm>
                            )
                        }}
                    </Formik>

                    <div 
                        className="form-after"
                        style={{ 
                            display: submitStatus === 'success' ? 'flex' : 'none',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}
                    >
                        <img src="/InsurUp/form-after.svg" alt="Form After" />
                        <span className="after-title">Tebrikler</span>
                        <p>
                            InsurUp erken erişim listesine başarıyla kaydoldunuz 🎉  Sıra size geldiğinde, InsurUp deneyiminizi başlatmak için sizinle hemen iletişime geçeceğiz.
                        </p>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Form
