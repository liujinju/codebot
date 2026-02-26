import { Link } from 'react-router-dom';
import { useLocale } from '../contexts/LocaleContext';

export default function FloatingContact() {
  const { isZh } = useLocale();

  return (
    <Link
      to="/contact"
      className="floating-contact"
      aria-label={isZh ? '联系咨询' : 'Contact Us'}
      title={isZh ? '联系咨询' : 'Contact Us'}
    >
      <span className="floating-contact-icon" aria-hidden="true">
        🤝
      </span>
      <span className="floating-contact-label">{isZh ? '联系咨询' : 'Contact Us'}</span>
    </Link>
  );
}
