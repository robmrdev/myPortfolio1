import './LanguageButton.css'

const LanguageButton = ({ currentLanguage, onChangeLanguage }) => {
  const toggleLanguage = () => {
    const newLanguage = currentLanguage === 'es' ? 'en' : 'es';
    onChangeLanguage(newLanguage);
  };

  return (
    <div className='languageButton' onClick={toggleLanguage}>
      <i className="fa-solid fa-language"></i>
    </div>
  );
};

export default LanguageButton;
