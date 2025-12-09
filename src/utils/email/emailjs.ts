/**
 * EmailJS Servis Modülü
 * Form gönderimlerini EmailJS ile yönetir
 */

import emailjs from '@emailjs/browser';

// EmailJS Konfigürasyonu - .env dosyasından alınacak
const EMAILJS_SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || '';
const EMAILJS_PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || '';

// Template ID'leri
export const EMAIL_TEMPLATES = {
    PACKAGE_FORM: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_PACKAGE || '',
    PRICING_FORM: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_PRICING || '',
    CONTACT_FORM: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_CONTACT || '',
} as const;

export type EmailTemplateKey = keyof typeof EMAIL_TEMPLATES;

// EmailJS'i başlat
let isInitialized = false;

export const initEmailJS = () => {
    if (!isInitialized && EMAILJS_PUBLIC_KEY) {
        emailjs.init(EMAILJS_PUBLIC_KEY);
        isInitialized = true;
    }
};

// Gönderim sonucu tipi
export interface EmailSendResult {
    success: boolean;
    message: string;
    error?: string;
}

// Form verisi tipi (generic)
export type EmailFormData = Record<string, string | number | boolean>;

/**
 * EmailJS ile form gönderimi
 * @param templateKey - Template anahtarı (PACKAGE_FORM, PRICING_FORM, etc.)
 * @param formData - Form verileri
 * @returns Promise<EmailSendResult>
 */
export const sendEmail = async (
    templateKey: EmailTemplateKey,
    formData: EmailFormData
): Promise<EmailSendResult> => {
    try {
        // EmailJS'i başlat
        initEmailJS();

        // Konfigürasyon kontrolü
        if (!EMAILJS_SERVICE_ID || !EMAILJS_PUBLIC_KEY) {
            console.error('EmailJS konfigürasyonu eksik');
            return {
                success: false,
                message: 'E-posta servisi yapılandırılmamış',
                error: 'Missing EmailJS configuration',
            };
        }

        const templateId = EMAIL_TEMPLATES[templateKey];
        if (!templateId) {
            console.error(`Template bulunamadı: ${templateKey}`);
            return {
                success: false,
                message: 'E-posta şablonu bulunamadı',
                error: `Template not found: ${templateKey}`,
            };
        }

        // E-posta gönder
        const response = await emailjs.send(
            EMAILJS_SERVICE_ID,
            templateId,
            formData as Record<string, unknown>
        );

        if (response.status === 200) {
            return {
                success: true,
                message: 'Form başarıyla gönderildi!',
            };
        }

        return {
            success: false,
            message: 'Form gönderilemedi, lütfen tekrar deneyin',
            error: `Status: ${response.status}`,
        };
    } catch (error) {
        console.error('EmailJS Error:', error);
        return {
            success: false,
            message: 'Bir hata oluştu, lütfen tekrar deneyin',
            error: error instanceof Error ? error.message : 'Unknown error',
        };
    }
};

/**
 * Form referansı ile gönderim (form element kullanarak)
 * @param templateKey - Template anahtarı
 * @param formElement - HTML Form elementi
 * @returns Promise<EmailSendResult>
 */
export const sendEmailFromForm = async (
    templateKey: EmailTemplateKey,
    formElement: HTMLFormElement
): Promise<EmailSendResult> => {
    try {
        initEmailJS();

        if (!EMAILJS_SERVICE_ID || !EMAILJS_PUBLIC_KEY) {
            return {
                success: false,
                message: 'E-posta servisi yapılandırılmamış',
                error: 'Missing EmailJS configuration',
            };
        }

        const templateId = EMAIL_TEMPLATES[templateKey];
        if (!templateId) {
            return {
                success: false,
                message: 'E-posta şablonu bulunamadı',
                error: `Template not found: ${templateKey}`,
            };
        }

        const response = await emailjs.sendForm(
            EMAILJS_SERVICE_ID,
            templateId,
            formElement
        );

        if (response.status === 200) {
            return {
                success: true,
                message: 'Form başarıyla gönderildi!',
            };
        }

        return {
            success: false,
            message: 'Form gönderilemedi, lütfen tekrar deneyin',
            error: `Status: ${response.status}`,
        };
    } catch (error) {
        console.error('EmailJS Error:', error);
        return {
            success: false,
            message: 'Bir hata oluştu, lütfen tekrar deneyin',
            error: error instanceof Error ? error.message : 'Unknown error',
        };
    }
};

