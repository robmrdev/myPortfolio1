import './CertfModal.css'
import certf1 from '../../img/desarrolloWeb.png'
import certf2 from '../../img/javascript.png'
import certf3 from '../../img/reactJS.png'

const actualCertf = {
    1: certf1,
    2: certf2,
    3: certf3
}

const CertfModal = ({ isOpen, onClose, imageSelector }) => {
    if (!isOpen) return null;

    const imageUrl = actualCertf[imageSelector]
  return (
    <div className='modalContainer' onClick={onClose}>
        <div className='modal' onClick={(e) => e.stopPropagation()}>
            <img src={imageUrl} alt="" />
        </div>
    </div>
  )
}

export default CertfModal