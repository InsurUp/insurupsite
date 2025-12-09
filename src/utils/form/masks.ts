/**
 * Form Maskeleme Fonksiyonları
 * Input değerlerini belirli formatlara dönüştürür
 */

// Sadece harflere izin ver (Türkçe karakterler dahil)
export const onlyLetters = (value: string): string => {
    return value.replace(/[^a-zA-ZğüşöçıİĞÜŞÖÇ ]/g, '');
};

// Sadece rakamlara izin ver
export const onlyDigits = (value: string): string => {
    return value.replace(/\D/g, '');
};

// Telefon numarasından sadece rakamları al
export const phoneDigits = (value: string): string => {
    return value.replace(/\D/g, '');
};

// Telefon numarasını formatla: (5XX) XXX-XXXX
// Baştaki 0'ı engeller (Türkiye telefon numaraları 5 ile başlar)
export const formatPhone = (value: string): string => {
    let digits = phoneDigits(value);
    
    // Baştaki 0'ı engelle
    if (digits.startsWith('0')) {
        digits = digits.slice(1);
    }
    
    digits = digits.slice(0, 10);
    
    if (digits.length === 0) return '';
    if (digits.length < 4) return `(${digits}`;
    if (digits.length < 7) return `(${digits.slice(0, 3)}) ${digits.slice(3)}`;
    return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`;
};

// E-posta formatını temizle (boşlukları kaldır)
export const cleanEmail = (value: string): string => {
    return value.trim().toLowerCase();
};

// TC Kimlik numarası formatı (11 haneli)
export const formatTCKN = (value: string): string => {
    return onlyDigits(value).slice(0, 11);
};

// Vergi numarası formatı (10 haneli)
export const formatVKN = (value: string): string => {
    return onlyDigits(value).slice(0, 10);
};

