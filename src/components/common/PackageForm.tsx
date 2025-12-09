'use client'
import { useState } from 'react'
import Image from 'next/image'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import {
    onlyLetters,
    formatPhone,
    packageFormSchema,
    createValidator,
    type PackageFormValues
} from '@/utils/form'
import { sendEmail } from '@/utils/email'

const validate = createValidator(packageFormSchema);

interface PackageFormProps {
    formType?: string;
}

function PackageForm({ formType = 'B2C Ürün Detay' }: PackageFormProps) {
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
    const [submitMessage, setSubmitMessage] = useState('');

    const initialValues: PackageFormValues = {
        agency_name: '',
        name_surname: '',
        role: '',
        phone: '',
        email: '',
        package: '',
    };

    const handleSubmit = async (
        values: PackageFormValues,
        { setSubmitting, resetForm }: { setSubmitting: (isSubmitting: boolean) => void; resetForm: () => void }
    ) => {
        try {
            setSubmitStatus('idle');
            setSubmitMessage('');

            const result = await sendEmail('PACKAGE_FORM', {
                ...values,
                form_type: formType,
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
        <div className="price" id="iletisim">
            <div className="container">
                <div className="row row d-flex align-items-center">
                    <div className="col-lg-6 col-sm-12" data-aos="fade-up" data-aos-duration="1500">
                        <div className="section-badge">
                            <i className="icon-shop"></i><span> Ücretlendirme</span>
                        </div>
                        <h2>Formu doldurun, size hemen ulaşalım</h2>
                        <p>
                            Acentenizin ihtiyaçları için tasarlanan InsurUp CRM, gizli masraflar ve esnek tarifelerden uzak, sabit bir bedelle sınırsız erişim sunar. InsurUp ile tüm sigortacılık işlerinizi kolayca yönetin; kafanız, bütçeniz rahat olsun. Daha fazla bilgi için formu doldurun, size ulaşalım!
                        </p>
                    </div>
                    <div className="col-lg-6 col-sm-12" data-aos="fade-up" data-aos-duration="1500">
                        <div className={`form_area ${submitStatus === 'success' ? 'form-success' : ''}`}>
                            <Formik
                                initialValues={initialValues}
                                validate={validate}
                                onSubmit={handleSubmit}
                            >
                                {({ setFieldValue, isSubmitting, isValid, dirty }) => (

                                    <Form id="package-form" className="w-100" style={{ display: submitStatus === 'success' ? 'none' : 'block' }}>
                                        <div>
                                            {/* Acente İsmi */}
                                            <div className="form-input form-group input-group">
                                                <label htmlFor="input-agency-name">Acente İsmi<span>*</span></label>
                                                <span className="input-group-text" id="addon-agency-name"><i className="icon-acente"></i></span>
                                                <Field
                                                    type="text"
                                                    name="agency_name"
                                                    id="input-agency-name"
                                                    className="form-control"
                                                    placeholder="Acente A.Ş"
                                                    autoComplete="off"
                                                />
                                                <ErrorMessage name="agency_name" component="div" className="invalid-feedback d-block" />
                                            </div>

                                            {/* Ad Soyad */}
                                            <div className="form-input form-group input-group">
                                                <label htmlFor="input-name-surname">Ad soyad<span>*</span></label>
                                                <span className="input-group-text" id="addon-name-surname"><i className="icon-person"></i></span>
                                                <Field name="name_surname">
                                                    {({ field }: { field: { name: string; value: string; onChange: (e: React.ChangeEvent<HTMLInputElement>) => void; onBlur: (e: React.FocusEvent<HTMLInputElement>) => void } }) => (
                                                        <input
                                                            {...field}
                                                            type="text"
                                                            id="input-name-surname"
                                                            className="form-control"
                                                            placeholder="Ad Soyad"
                                                            autoComplete="off"
                                                            onChange={(e) => setFieldValue('name_surname', onlyLetters(e.target.value))}
                                                        />
                                                    )}
                                                </Field>
                                                <ErrorMessage name="name_surname" component="div" className="invalid-feedback d-block" />
                                            </div>

                                            {/* Rol */}
                                            <div className="form-input form-group input-group">
                                                <label htmlFor="input-role">Rol<span>*</span></label>
                                                <span className="input-group-text" id="addon-role"><i className="icon-rol"></i></span>
                                                <Field
                                                    type="text"
                                                    name="role"
                                                    id="input-role"
                                                    className="form-control"
                                                    placeholder="Satış Temsilcisi"
                                                    autoComplete="off"
                                                />
                                                <ErrorMessage name="role" component="div" className="invalid-feedback d-block" />
                                            </div>

                                            {/* Telefon */}
                                            <div className="form-input form-group input-group">
                                                <label htmlFor="input-phone">Telefon<span>*</span></label>
                                                <span className="input-group-text" id="addon-phone"><i className="icon-phone"></i></span>
                                                <Field name="phone">
                                                    {({ field }: { field: { name: string; value: string; onChange: (e: React.ChangeEvent<HTMLInputElement>) => void; onBlur: (e: React.FocusEvent<HTMLInputElement>) => void } }) => (
                                                        <input
                                                            {...field}
                                                            type="text"
                                                            id="input-phone"
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

                                            {/* E-Mail */}
                                            <div className="form-input form-group input-group">
                                                <label htmlFor="input-email">E-Mail<span>*</span></label>
                                                <span className="input-group-text" id="addon-email" style={{ width: '36px' }}><i className="fa-regular fa-envelope" style={{ fontSize: '18px' }}></i></span>
                                                <Field
                                                    type="email"
                                                    name="email"
                                                    id="input-email"
                                                    className="form-control"
                                                    placeholder="E-Mail"
                                                    autoComplete="off"
                                                />
                                                <ErrorMessage name="email" component="div" className="invalid-feedback d-block" />
                                            </div>

                                            {/* Paket Seçimi */}
                                            <div className="form-input form-group input-group mb-4">
                                                <label htmlFor="input-package">Paket<span>*</span></label>
                                                <span className="input-group-text" id="addon-package" style={{ width: '36px' }}><i className="fa-solid fa-box" style={{ fontSize: '18px' }}></i></span>
                                                <Field
                                                    as="select"
                                                    name="package"
                                                    id="input-package"
                                                    className="form-select"
                                                >
                                                    <option value="">Paket</option>
                                                    <option value="Giriş Paket">Giriş Paket</option>
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

                                            {/* Gönder Butonu */}
                                            <div className="form-input">
                                                <button
                                                    type="submit"
                                                    className="btn-formsend"
                                                    disabled={!isValid || !dirty || isSubmitting}
                                                >
                                                    {isSubmitting ? 'Gönderiliyor...' : 'Gönder'}
                                                </button>
                                            </div>
                                        </div>
                                    </Form>
                                )}
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
                                <Image src="/InsurUp/form-after.svg" alt="Form After" width={500} height={300} quality={100} />
                                <span className="after-title">Tebrikler</span>
                                <p>
                                    InsurUp erken erişim listesine başarıyla kaydoldunuz 🎉  Sıra size geldiğinde, InsurUp deneyiminizi başlatmak için sizinle hemen iletişime geçeceğiz.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PackageForm
