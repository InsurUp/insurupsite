/**
 * Form Validasyon Şemaları
 * Zod ile form validasyonları
 */

import { z } from 'zod';
import { phoneDigits } from './masks';

// Ortak validasyon mesajları
export const messages = {
    required: 'Bu alan zorunludur',
    minLength: (min: number) => `En az ${min} karakter olmalı`,
    maxLength: (max: number) => `En fazla ${max} karakter olmalı`,
    onlyLetters: 'Sadece harf kullanın',
    onlyDigits: 'Sadece rakam girin',
    invalidEmail: 'Geçerli bir e-posta girin',
    invalidPhone: 'Geçerli bir telefon numarası girin',
    phoneLength: 'Telefon 10 haneli olmalı',
    phoneStartsWithZero: 'Telefon 0 ile başlamamalı',
    selectRequired: 'Lütfen bir seçim yapın',
};

// Acente ismi validasyonu
export const agencyNameSchema = z
    .string()
    .min(2, messages.minLength(2))
    .max(100, messages.maxLength(100));

// Ad soyad validasyonu
export const nameSurnameSchema = z
    .string()
    .transform((s) => s.trim())
    .refine((v) => v.length >= 2, messages.minLength(2))
    .refine((v) => /^[a-zA-ZğüşöçıİĞÜŞÖÇ ]+$/.test(v), messages.onlyLetters)
    .refine((v) => v.replace(/[^a-zA-ZğüşöçıİĞÜŞÖÇ]/g, '').length >= 2, 'En az 2 harf girin');

// Telefon validasyonu
export const phoneSchema = z
    .string()
    .transform(phoneDigits)
    .refine((v) => v.length === 10, messages.phoneLength)
    .refine((v) => v[0] !== '0', messages.phoneStartsWithZero);

// E-posta validasyonu
export const emailSchema = z
    .string()
    .email(messages.invalidEmail);

// Rol validasyonu
export const roleSchema = z
    .string()
    .min(2, messages.minLength(2))
    .max(50, messages.maxLength(50));

// Paket seçimi validasyonu
export const packageSchema = z
    .string()
    .min(1, messages.selectRequired);

// Sadece rakam validasyonu
export const numericSchema = z
    .string()
    .min(1, messages.required)
    .regex(/^[0-9]+$/, messages.onlyDigits);

/**
 * PackageForm için validasyon şeması
 */
export const packageFormSchema = z.object({
    agency_name: agencyNameSchema,
    name_surname: nameSurnameSchema,
    role: roleSchema,
    phone: phoneSchema,
    email: emailSchema,
    package: packageSchema,
});

export type PackageFormValues = z.infer<typeof packageFormSchema>;

/**
 * Pricing Form için validasyon şeması
 */
export const pricingFormSchema = z.object({
    agency_name: agencyNameSchema,
    name_surname: nameSurnameSchema,
    phone: phoneSchema,
    email: emailSchema,
    member_number: numericSchema,
    insurance_company_count: numericSchema,
    package: packageSchema,
});

export type PricingFormValues = z.infer<typeof pricingFormSchema>;

/**
 * Zod şemasını Formik validate fonksiyonuna dönüştürür
 */
export const createValidator = <T extends z.ZodType>(schema: T) => {
    return (values: z.infer<T>): Record<string, string> => {
        const parsed = schema.safeParse(values);
        if (parsed.success) return {};
        
        const errors: Record<string, string> = {};
        parsed.error.issues.forEach((issue) => {
            const path = issue.path[0] as string;
            if (!errors[path]) {
                errors[path] = issue.message;
            }
        });
        return errors;
    };
};

