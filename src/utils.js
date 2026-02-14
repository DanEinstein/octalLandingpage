/**
 * Smooth-scroll to a DOM element by its id.
 */
export function scrollToElement(id) {
    const target = document.getElementById(id);
    if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}
