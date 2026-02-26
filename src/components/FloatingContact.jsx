import { Link } from 'react-router-dom';
import { useLocale } from '../contexts/LocaleContext';

export default function FloatingContact() {
  const { isZh } = useLocale();

  return (
    <Link
      to="/contact"
      className="floating-contact"
      aria-label={isZh ? '联系咨询' : 'Contact Sales'}
      title={isZh ? '联系咨询' : 'Contact Sales'}
    >
      <span className="floating-contact-icon" aria-hidden="true">
        ↗
      </span>
      <span className="floating-contact-label">{isZh ? '联系咨询' : 'CONTACT'}</span>
    </Link>
  );
}
