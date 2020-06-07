import React, {useState} from 'react';
import css from "./ModalForm.module.scss"

export default function ModalForm(props) {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [responseState, setResponseState] = useState(false);

    const handleChangeA = (e) => {
        setName(e.target.value);
    };

    const handleChangeB = (e) => {
        setPhone(e.target.value);
    };

    async function sendTgBoeMessage () {
        let response = await fetch(`/api/tgBot?name=${name}&phone=${phone}`);
        if (response.ok) {
            setResponseState(true);
            setTimeout(() => {
                props.onClose();
            }, 2000)
        } else {
            alert("Ошибка");
            props.onClose();
        }
    }



    return (
        <div>
            <div className="modal-content" style={{border: 0}}>
                {responseState ?
                    <>
                        <div className="modal-header">
                            <h5 className="modal-title">Спасибо</h5>
                        </div>
                        <div className="modal-body">
                            <p>Наш менеджер свяжется с вами в ближайшее время.</p>
                        </div>
                    </>
                    :
                    <>
                        <div className="modal-header">
                            <h5 className="modal-title">Заполните поля:</h5>
                        </div>
                        <div className="modal-body">
                            <div className="form-group">
                                <label htmlFor="userName">Имя:</label>
                                <input type="text" value={name} className="form-control" placeholder="Ваше имя" onChange={handleChangeA}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="userPhone">Телефон:</label>
                                <input type="text" value={phone} className="form-control" placeholder="Номер телефона" onChange={handleChangeB}/>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-link" onClick={props.onClose()}>Закрыть</button>
                            <button type="button" className="btn btn-primary" onClick={sendTgBoeMessage}>Отправить
                            </button>
                        </div>
                    </>
                }
            </div>
        </div>
    );
}