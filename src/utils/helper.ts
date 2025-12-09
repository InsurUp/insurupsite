export function focusSection(sectionId: string, event: React.MouseEvent<HTMLElement, MouseEvent>) {
    event?.preventDefault();
    const bodys = document.body;
    bodys.classList.remove('menu-open');
    const section = document.getElementById(sectionId) as HTMLElement;
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
        section.focus();
    }
}