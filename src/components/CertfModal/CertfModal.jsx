import './CertfModal.css'

const actualCertf = {
    1: '../img/desarrolloWeb.png',
    2: '../img/javascript.png',
    3: '../img/reactJS.png'
}

const CertfModal = ({ isOpen, onClose, imageSelector }) => {
    if (!isOpen) return null;

    const imageUrl = actualCertf[imageSelector]
  return (
    <div className='modalContainer slideIn' onClick={onClose}>
        <div className='modal' onClick={(e) => e.stopPropagation()}>
            <img src={imageUrl} alt="" />
        </div>
    </div>
  )
}

export default CertfModal