import { useEffect, useState } from 'react';
import i18n from './i18n';

export default function I18nReadyWrapper({ children }) {
  const [ready, setReady] = useState(i18n.isInitialized);

  useEffect(() => {
    if (!i18n.isInitialized) {
      const onInit = () => setReady(true);
      i18n.on('initialized', onInit);
      return () => i18n.off('initialized', onInit);
    }
  }, []);

  if (!ready) return <div>Загрузка переводов...</div>;

  return children;
}
